gdjs.Test_32SceneCode = {};
gdjs.Test_32SceneCode.repeatCount2 = 0;

gdjs.Test_32SceneCode.repeatIndex2 = 0;

gdjs.Test_32SceneCode.GDSoundFigObjects1= [];
gdjs.Test_32SceneCode.GDSoundFigObjects2= [];
gdjs.Test_32SceneCode.GDNewObjectObjects1= [];
gdjs.Test_32SceneCode.GDNewObjectObjects2= [];

gdjs.Test_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Test_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Test_32SceneCode.condition1IsTrue_0 = {val:false};


gdjs.Test_32SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Test_32SceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Test_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Test_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Test_32SceneCode.condition0IsTrue_0.val) {
gdjs.Test_32SceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{gdjs.evtTools.network.jsonToVariableStructure("[[\"question\",\"right answer\",\"wrong answer 1\",\"wrong answer 2\",\"wrong answer 3\"]]", runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.Test_32SceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Test_32SceneCode.GDNewObjectObjects1[i].setBBText(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("0").getChild("0")));
}
}}

}


{


gdjs.Test_32SceneCode.repeatCount2 = 12;
for(gdjs.Test_32SceneCode.repeatIndex2 = 0;gdjs.Test_32SceneCode.repeatIndex2 < gdjs.Test_32SceneCode.repeatCount2;++gdjs.Test_32SceneCode.repeatIndex2) {

if (true)
{
}
}

}


};

gdjs.Test_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Test_32SceneCode.GDSoundFigObjects1.length = 0;
gdjs.Test_32SceneCode.GDSoundFigObjects2.length = 0;
gdjs.Test_32SceneCode.GDNewObjectObjects1.length = 0;
gdjs.Test_32SceneCode.GDNewObjectObjects2.length = 0;

gdjs.Test_32SceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Test_32SceneCode'] = gdjs.Test_32SceneCode;
