
gdjs.evtsExt__top__SoundFig = gdjs.evtsExt__top__SoundFig || {};

/**
 * Behavior generated from 
 * @class SoundFig
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__top__SoundFig.SoundFig = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.next = "on";
    this._behaviorData.active = behaviorData.active !== undefined ? behaviorData.active : true;
};

gdjs.evtsExt__top__SoundFig.SoundFig.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("top::SoundFig", gdjs.evtsExt__top__SoundFig.SoundFig);

// Hot-reload:
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {

    if (oldBehaviorData.next !== newBehaviorData.next)
        this._behaviorData.next = newBehaviorData.next;
    if (oldBehaviorData.active !== newBehaviorData.active)
        this._behaviorData.active = newBehaviorData.active;

    return true;
}

// Properties:
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("off");
}
}{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext("off");
}
}}

}


{


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) >= 99;
}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("on");
}
}{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext("on");
}
}}

}


};gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95top_95_95SoundFig_46SoundFig_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1});gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i].isCurrentAnimationName("on") ) {
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext("off");
}
}}

}


{

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i].isCurrentAnimationName("off") ) {
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext("on");
}
}}

}


{


{
/* Reuse gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName((gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnext()));
}
}}

}


};gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95top_95_95SoundFig_46SoundFig_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnext() == "on" ) {
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext("");
}
}}

}


{

/* Reuse gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnext() == "off" ) {
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext("");
}
}}

}


};gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnext() == "") ) {
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext = {};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setactive(false);
}
}}

}


};

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivate = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext = {};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setactive(true);
}
}}

}


};

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivate = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__top__SoundFig.SoundFig.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__top__SoundFig.SoundFig.prototype._getnext = function() {
    return this._behaviorData.next !== undefined ? this._behaviorData.next : "on";
};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype._setnext = function(newValue) {
    this._behaviorData.next = newValue;
};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype._getactive = function() {
    return this._behaviorData.active !== undefined ? this._behaviorData.active : true;
};
gdjs.evtsExt__top__SoundFig.SoundFig.prototype._setactive = function(newValue) {
    this._behaviorData.active = newValue;
};
