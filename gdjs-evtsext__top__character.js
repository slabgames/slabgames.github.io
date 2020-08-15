
gdjs.evtsExt__top__Character = gdjs.evtsExt__top__Character || {};

/**
 * Behavior generated from 
 * @class Character
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__top__Character.Character = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.x1 = behaviorData.x1 !== undefined ? behaviorData.x1 : Number("100") || 0;
    this._behaviorData.x2 = behaviorData.x2 !== undefined ? behaviorData.x2 : Number("200") || 0;
    this._behaviorData.current_position = behaviorData.current_position !== undefined ? behaviorData.current_position : Number("1") || 0;
    this._behaviorData.next_position = Number("1") || 0;
};

gdjs.evtsExt__top__Character.Character.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("top::Character", gdjs.evtsExt__top__Character.Character);

// Hot-reload:
gdjs.evtsExt__top__Character.Character.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {

    if (oldBehaviorData.x1 !== newBehaviorData.x1)
        this._behaviorData.x1 = newBehaviorData.x1;
    if (oldBehaviorData.x2 !== newBehaviorData.x2)
        this._behaviorData.x2 = newBehaviorData.x2;
    if (oldBehaviorData.current_position !== newBehaviorData.current_position)
        this._behaviorData.current_position = newBehaviorData.current_position;
    if (oldBehaviorData.next_position !== newBehaviorData.next_position)
        this._behaviorData.next_position = newBehaviorData.next_position;

    return true;
}

// Properties:
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext = {};
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1= [];
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects2= [];

gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getcurrent_position() == 1 ) {
        gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[k] = gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i].setX((gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getx2()));
}
}}

}


{

gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getcurrent_position() == 2 ) {
        gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[k] = gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i].setX((gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getx1()));
}
}}

}


};

gdjs.evtsExt__top__Character.Character.prototype.updatePosition = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__top__Character.Character.prototype.updatePositionContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext = {};
gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).updatePosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__top__Character.Character.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__top__Character.Character.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext = {};
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects2= [];

gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getcurrent_position() == 1 ) {
        gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext_position(2);
}
}}

}


{

gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getcurrent_position() == 2 ) {
        gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setnext_position(1);
}
}}

}


{


{
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setcurrent_position((gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getnext_position()));
}
}{for(var i = 0, len = gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).updatePosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__top__Character.Character.prototype.switchPosition = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__top__Character.Character.prototype.switchPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__top__Character.Character.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};

// Methods:

gdjs.evtsExt__top__Character.Character.prototype._getx1 = function() {
    return this._behaviorData.x1 !== undefined ? this._behaviorData.x1 : Number("100") || 0;
};
gdjs.evtsExt__top__Character.Character.prototype._setx1 = function(newValue) {
    this._behaviorData.x1 = newValue;
};
gdjs.evtsExt__top__Character.Character.prototype._getx2 = function() {
    return this._behaviorData.x2 !== undefined ? this._behaviorData.x2 : Number("200") || 0;
};
gdjs.evtsExt__top__Character.Character.prototype._setx2 = function(newValue) {
    this._behaviorData.x2 = newValue;
};
gdjs.evtsExt__top__Character.Character.prototype._getcurrent_position = function() {
    return this._behaviorData.current_position !== undefined ? this._behaviorData.current_position : Number("1") || 0;
};
gdjs.evtsExt__top__Character.Character.prototype._setcurrent_position = function(newValue) {
    this._behaviorData.current_position = newValue;
};
gdjs.evtsExt__top__Character.Character.prototype._getnext_position = function() {
    return this._behaviorData.next_position !== undefined ? this._behaviorData.next_position : Number("1") || 0;
};
gdjs.evtsExt__top__Character.Character.prototype._setnext_position = function(newValue) {
    this._behaviorData.next_position = newValue;
};
