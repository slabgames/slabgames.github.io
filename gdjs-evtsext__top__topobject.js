
gdjs.evtsExt__top__TopObject = gdjs.evtsExt__top__TopObject || {};

/**
 * Behavior generated from 
 * @class TopObject
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__top__TopObject.TopObject = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.CurrentHeight = Number("0") || 0;
};

gdjs.evtsExt__top__TopObject.TopObject.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("top::TopObject", gdjs.evtsExt__top__TopObject.TopObject);

// Hot-reload:
gdjs.evtsExt__top__TopObject.TopObject.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {

    if (oldBehaviorData.CurrentHeight !== newBehaviorData.CurrentHeight)
        this._behaviorData.CurrentHeight = newBehaviorData.CurrentHeight;

    return true;
}

// Properties:
gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TopHeight")) - (gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHeight())));
}
}{for(var i = 0, len = gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHeight(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TopHeight")));
}
}}

}


};

gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__top__TopObject.TopObject.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext = {};
gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHeight(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TopHeight")));
}
}}

}


};

gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__top__TopObject.TopObject.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__top__TopObject.TopObject.prototype._getCurrentHeight = function() {
    return this._behaviorData.CurrentHeight !== undefined ? this._behaviorData.CurrentHeight : Number("0") || 0;
};
gdjs.evtsExt__top__TopObject.TopObject.prototype._setCurrentHeight = function(newValue) {
    this._behaviorData.CurrentHeight = newValue;
};
