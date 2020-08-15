gdjs.TestSceneCode = {};
gdjs.TestSceneCode.GDSoundFigObjects1= [];
gdjs.TestSceneCode.GDSoundFigObjects2= [];
gdjs.TestSceneCode.GDWigNameObjects1= [];
gdjs.TestSceneCode.GDWigNameObjects2= [];
gdjs.TestSceneCode.GDTypeWingObjects1= [];
gdjs.TestSceneCode.GDTypeWingObjects2= [];
gdjs.TestSceneCode.GDNewObjectObjects1= [];
gdjs.TestSceneCode.GDNewObjectObjects2= [];

gdjs.TestSceneCode.conditionTrue_0 = {val:false};
gdjs.TestSceneCode.condition0IsTrue_0 = {val:false};
gdjs.TestSceneCode.condition1IsTrue_0 = {val:false};


gdjs.TestSceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.TestSceneCode.GDTypeWingObjects1.createFrom(runtimeScene.getObjects("TypeWing"));
gdjs.TestSceneCode.GDWigNameObjects1.createFrom(runtimeScene.getObjects("WigName"));
{for(var i = 0, len = gdjs.TestSceneCode.GDWigNameObjects1.length ;i < len;++i) {
    gdjs.TestSceneCode.GDWigNameObjects1[i].setString((( gdjs.TestSceneCode.GDTypeWingObjects1.length === 0 ) ? "" :gdjs.TestSceneCode.GDTypeWingObjects1[0].getString()));
}
}}

}


{


gdjs.TestSceneCode.condition0IsTrue_0.val = false;
{
gdjs.TestSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TestSceneCode.condition0IsTrue_0.val) {
gdjs.TestSceneCode.GDTypeWingObjects1.createFrom(runtimeScene.getObjects("TypeWing"));
{for(var i = 0, len = gdjs.TestSceneCode.GDTypeWingObjects1.length ;i < len;++i) {
    gdjs.TestSceneCode.GDTypeWingObjects1[i].setString("");
}
}}

}


{


gdjs.TestSceneCode.condition0IsTrue_0.val = false;
{
gdjs.TestSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.TestSceneCode.condition0IsTrue_0.val) {
gdjs.TestSceneCode.GDTypeWingObjects1.createFrom(runtimeScene.getObjects("TypeWing"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.toNumber((( gdjs.TestSceneCode.GDTypeWingObjects1.length === 0 ) ? "" :gdjs.TestSceneCode.GDTypeWingObjects1[0].getString())));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};

gdjs.TestSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestSceneCode.GDSoundFigObjects1.length = 0;
gdjs.TestSceneCode.GDSoundFigObjects2.length = 0;
gdjs.TestSceneCode.GDWigNameObjects1.length = 0;
gdjs.TestSceneCode.GDWigNameObjects2.length = 0;
gdjs.TestSceneCode.GDTypeWingObjects1.length = 0;
gdjs.TestSceneCode.GDTypeWingObjects2.length = 0;
gdjs.TestSceneCode.GDNewObjectObjects1.length = 0;
gdjs.TestSceneCode.GDNewObjectObjects2.length = 0;

gdjs.TestSceneCode.eventsList0(runtimeScene);
return;

}

gdjs['TestSceneCode'] = gdjs.TestSceneCode;
