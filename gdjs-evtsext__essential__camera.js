
gdjs.evtsExt__Essential__camera = gdjs.evtsExt__Essential__camera || {};

/**
 * Behavior generated from Camera
 * @class camera
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Essential__camera.camera = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
};

gdjs.evtsExt__Essential__camera.camera.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Essential::camera", gdjs.evtsExt__Essential__camera.camera);

// Hot-reload:
gdjs.evtsExt__Essential__camera.camera.prototype.updateFromBehaviorData = function(oldBehaviorData, newBehaviorData) {


    return true;
}

// Properties:
gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1[0] : null), true, "pinang", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1[0] : null), true, "gameover", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1[0] : null), true, "pertanyaan", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1[0] : null), true, "bg", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1[0] : null), true, "langit", 0);
}}

}


};

gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Essential__camera.camera.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Essential__camera.camera.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};

// Methods:

