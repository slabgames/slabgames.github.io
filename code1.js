gdjs.GameCode = {};
gdjs.GameCode.GDSoundFigObjects1= [];
gdjs.GameCode.GDSoundFigObjects2= [];
gdjs.GameCode.GDNewObjectObjects1= [];
gdjs.GameCode.GDNewObjectObjects2= [];
gdjs.GameCode.GDHeightObjects1= [];
gdjs.GameCode.GDHeightObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "audio/music/00 - Juhani Junkala - Stage 1.ogg", 1, true, 100, 1);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDHeightObjects1.createFrom(runtimeScene.getObjects("Height"));
{runtimeScene.getVariables().getFromIndex(0).add(12);
}{for(var i = 0, len = gdjs.GameCode.GDHeightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeightObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
gdjs.GameCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.GameCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObjectObjects1[i].setX(gdjs.GameCode.GDNewObjectObjects1[i].getX() + (1));
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDSoundFigObjects1.length = 0;
gdjs.GameCode.GDSoundFigObjects2.length = 0;
gdjs.GameCode.GDNewObjectObjects1.length = 0;
gdjs.GameCode.GDNewObjectObjects2.length = 0;
gdjs.GameCode.GDHeightObjects1.length = 0;
gdjs.GameCode.GDHeightObjects2.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
