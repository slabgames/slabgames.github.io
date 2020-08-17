
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard || {};

/**
 * Behavior generated from Mobile virtual keyboard for Text Entry
 * @class TextEntryVirtualKeyboard
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.typeInput = behaviorData.typeInput !== undefined ? behaviorData.typeInput : "text";
};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("TextEntryVirtualKeyboard::TextEntryVirtualKeyboard", gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard);

// Hot-reload:
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {

    if (oldBehaviorData.typeInput !== newBehaviorData.typeInput)
        this._behaviorData.typeInput = newBehaviorData.typeInput;

    return true;
}

// Properties:
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.userFunc0x845c70 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (typeof document === "undefined") {
    console.error("This behavior is only running in a Browser-like environment");
    return;
}

// Select and focus the input associated to the object when opening the keyboard
gdjs._extensionMobileKeyboard.openKeyboard = function (eventsFunctionContext) {
    var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
    var input = document.getElementById(uniqueID);
    if (input) {
        var textEntry = eventsFunctionContext.getObjects("Object")[0];
        input.value = textEntry.getString();
        input.style.setProperty("visibility", "visible");
        input.focus();
        //input.style.setProperty("visibility", "hidden");
    }
}

// Blur the input associated to an ID
gdjs._extensionMobileKeyboard.closeKeyboardById = function (uniqueID) {
    var input = document.getElementById(uniqueID);
    if (input) {
        input.blur();
    }
}

// Blur the input associated to an object
gdjs._extensionMobileKeyboard.closeKeyboard = function (eventsFunctionContext) {
    var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
    var input = document.getElementById(uniqueID);
    if (input && input.focus) {
        var textEntry = eventsFunctionContext.getObjects("Object")[0];
        textEntry.setString(input.value);
        input.blur();
        input.style.setProperty("visibility", "hidden");
    }
}

//Change type of input
gdjs._extensionMobileKeyboard.setTypeKeyboard = function (eventsFunctionContext) {
    var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
    var input = document.getElementById(uniqueID);
    if (input) {
        input.type = object.getBehavior("TextEntryVirtualKeyboard")._behaviorData["typeInput"];
    }
}

// Return the id of the current behavior object
gdjs._extensionMobileKeyboard.getUniqueIdInObject = function (eventsFunctionContext) {
    var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    return eventsFunctionContext.getObjects("Object")[0]._mobileKeyboardExtensionInput._uniqueId;
}

// Save an ID inside the object
var setUniqueIdInObject = function (id) {
    var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    eventsFunctionContext.getObjects("Object")[0]._mobileKeyboardExtensionInput = { "_uniqueId": id };
}

// Create an input for the current object
const input = document.createElement("input");

var object = eventsFunctionContext.getObjects("Object")[0];

if (object.getBehavior("TextEntryVirtualKeyboard")._behaviorData["typeInput"] == "tel") {
    input.type = "tel";
} else if (object.getBehavior("TextEntryVirtualKeyboard")._behaviorData["typeInput"] == "number") {
    input.type = "number";
    //use min, inputmode,pattern because iOS don't understand just number so we recreate the layout of inputs
    //https://twitter.com/swyx/status/1208765643320778752
    input.min = "0";
    input.inputmode = "numeric";
    input.pattern = "[0-9]*";
} else if (object.getBehavior("TextEntryVirtualKeyboard")._behaviorData["typeInput"] == "email") {
    input.type = "email";
} else {
    input.type = "text";
}

input.setAttribute("spellcheck", "false"); // Disable spell checking (blue line on mobile under words)
input.style = "background-color: transparent;border: 0px;outline: transparent;color: #0000;visibility: visible;";

// Create an identifier that is unique
var uniqueId = "GDevelop_Mobile_Keyboard_Input" + Date.now() + '-' + Math.floor(Math.random() * 100000);
input.id = uniqueId; // Apply it to the input
setUniqueIdInObject(uniqueId); // Apply it to the object

document.body.appendChild(input); // Add input to the document HTML

// Handle key presses on the input
input.addEventListener("keyup", function (event) {

    input.focus();
    var textEntry = eventsFunctionContext.getObjects("Object")[0];

    // Force selection to be at the end (to mimic Text Entry)
    var length_string = input.value.length;

    if (input.type != "email" && input.type != "number") {
        input.setSelectionRange(length_string, length_string);
    }


    //if the input is "tel" we can write with number and sign +-# ...
    if (input.type == "tel" || input.type == "number") {
        if (event.key !== "Unidentified") {//Can be "Unidentified" if we use sign on tel keyboard
            const isNumber = !isNaN(Number(event.key));
            if (isNumber) {
                input.value += event.key;
            }
        }
    }



    // Support for removing the last character
    if (event.keyCode == 8 || event.keyCode == 46) { // 8=Backspace, 46=Del
        input.value = textEntry.getString().slice(0, -1);
    }

    //If not for delete last character we refresh the value
    if (event.keyCode != 8 && event.keyCode != 46 ) { // 8=Backspace, 46=Del
        textEntry.setString(input.value);//Edit textEntry _str value
    }

    if (event.keyCode === 13) { // 13=Enter key 
        //Send id to function for close keyboard
        if (gdjs._extensionMobileKeyboard.closeKeyboard != undefined) {
            gdjs._extensionMobileKeyboard.closeKeyboardById(uniqueId);
        }
    }
}, { passive: false });

};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.userFunc0x845c70(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.userFunc0x6b14f0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (gdjs._extensionMobileKeyboard.openKeyboard) { 
    gdjs._extensionMobileKeyboard.openKeyboard(eventsFunctionContext);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.userFunc0x6b14f0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboard = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.userFunc0x6d9340 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (gdjs._extensionMobileKeyboard.closeKeyboard) { 
    gdjs._extensionMobileKeyboard.closeKeyboard(eventsFunctionContext);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.userFunc0x6d9340(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboard = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.userFunc0x845bc8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
var element = document.getElementById(uniqueID);
if (element) {
    element.parentNode.removeChild(element);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.userFunc0x845bc8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromScene = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onDestroy = function() {
  // Redirect call to onOwnerRemovedFromScene (the old name of onDestroy)
  if (this.onOwnerRemovedFromScene) this.onOwnerRemovedFromScene();
};gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects2= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects3= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition4IsTrue_1 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_2 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_2 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition4IsTrue_2 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.userFunc0x6d9340 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (gdjs._extensionMobileKeyboard.setTypeKeyboard) { 
    gdjs._extensionMobileKeyboard.setTypeKeyboard(eventsFunctionContext);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.userFunc0x6d9340(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_1.val = false;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_1.val = false;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_1.val = false;
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("text" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("email" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("tel" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("number" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0.val) {
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects2.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._settypeInput((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
}
{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_1.val = false;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_1.val = false;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_1.val = false;
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("text" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("email" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("tel" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition2IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2 = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_1;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_2.val = ("number" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
if( gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition3IsTrue_1.val ) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0.val) {
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._settypeInput("text");
}
}}

}


};gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboard = function(Type, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "Type") return Type;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.setTypeKeyboardContext.eventsList2(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};

// Methods:

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype._gettypeInput = function() {
    return this._behaviorData.typeInput !== undefined ? this._behaviorData.typeInput : "text";
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype._settypeInput = function(newValue) {
    this._behaviorData.typeInput = newValue;
};
