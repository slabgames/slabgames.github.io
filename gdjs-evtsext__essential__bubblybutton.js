
gdjs.evtsExt__Essential__bubblybutton = gdjs.evtsExt__Essential__bubblybutton || {};

/**
 * Behavior generated from 
 * @class bubblybutton
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Essential__bubblybutton.bubblybutton = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.target_scale = Number("1") || 0;
    this._behaviorData.bubbly_scaling_size = behaviorData.bubbly_scaling_size !== undefined ? behaviorData.bubbly_scaling_size : Number("1.5") || 0;
};

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Essential::bubblybutton", gdjs.evtsExt__Essential__bubblybutton.bubblybutton);

// Hot-reload:
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {

    if (oldBehaviorData.target_scale !== newBehaviorData.target_scale)
        this._behaviorData.target_scale = newBehaviorData.target_scale;
    if (oldBehaviorData.bubbly_scaling_size !== newBehaviorData.bubbly_scaling_size)
        this._behaviorData.bubbly_scaling_size = newBehaviorData.bubbly_scaling_size;

    return true;
}

// Properties:
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95Essential_95_95bubblybutton_46bubblybutton_46prototype_46doStepPostEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1});gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95Essential_95_95bubblybutton_46bubblybutton_46prototype_46doStepPostEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1});gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale(gdjs.evtTools.common.lerp((gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getScaleX()), (gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettarget_scale()), gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}}

}


{

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95Essential_95_95bubblybutton_46bubblybutton_46prototype_46doStepPostEventsContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._settarget_scale((gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getbubbly_scaling_size()));
}
}}

}


{

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95Essential_95_95bubblybutton_46bubblybutton_46prototype_46doStepPostEventsContext_46GDObjectObjects1Objects, runtimeScene, true, true);
}if (gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._settarget_scale(1);
}
}}

}


};

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};

// Methods:

gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype._gettarget_scale = function() {
    return this._behaviorData.target_scale !== undefined ? this._behaviorData.target_scale : Number("1") || 0;
};
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype._settarget_scale = function(newValue) {
    this._behaviorData.target_scale = newValue;
};
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype._getbubbly_scaling_size = function() {
    return this._behaviorData.bubbly_scaling_size !== undefined ? this._behaviorData.bubbly_scaling_size : Number("1.5") || 0;
};
gdjs.evtsExt__Essential__bubblybutton.bubblybutton.prototype._setbubbly_scaling_size = function(newValue) {
    this._behaviorData.bubbly_scaling_size = newValue;
};
