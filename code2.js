gdjs.StageCode = {};
gdjs.StageCode.GDSoundFigObjects1= [];
gdjs.StageCode.GDSoundFigObjects2= [];
gdjs.StageCode.GDNewObjectObjects1= [];
gdjs.StageCode.GDNewObjectObjects2= [];
gdjs.StageCode.GDNewObject2Objects1= [];
gdjs.StageCode.GDNewObject2Objects2= [];
gdjs.StageCode.GDcameraObjects1= [];
gdjs.StageCode.GDcameraObjects2= [];
gdjs.StageCode.GDDisplayHeightObjects1= [];
gdjs.StageCode.GDDisplayHeightObjects2= [];

gdjs.StageCode.conditionTrue_0 = {val:false};
gdjs.StageCode.condition0IsTrue_0 = {val:false};
gdjs.StageCode.condition1IsTrue_0 = {val:false};
gdjs.StageCode.condition2IsTrue_0 = {val:false};
gdjs.StageCode.conditionTrue_1 = {val:false};
gdjs.StageCode.condition0IsTrue_1 = {val:false};
gdjs.StageCode.condition1IsTrue_1 = {val:false};
gdjs.StageCode.condition2IsTrue_1 = {val:false};


gdjs.StageCode.eventsList0 = function(runtimeScene) {

{


gdjs.StageCode.condition0IsTrue_0.val = false;
{
gdjs.StageCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}if (gdjs.StageCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "audio/music/00 - Juhani Junkala - Stage 1.ogg", true, 100, 1);
}}

}


};gdjs.StageCode.eventsList1 = function(runtimeScene) {

{


gdjs.StageCode.condition0IsTrue_0.val = false;
{
gdjs.StageCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StageCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}
{ //Subevents
gdjs.StageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.StageCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.StageCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.StageCode.GDNewObjectObjects1[i].rotate(12, runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(444 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


gdjs.StageCode.condition0IsTrue_0.val = false;
gdjs.StageCode.condition1IsTrue_0.val = false;
{
gdjs.StageCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StageCode.condition0IsTrue_0.val ) {
{
{gdjs.StageCode.conditionTrue_1 = gdjs.StageCode.condition1IsTrue_0;
gdjs.StageCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8421668);
}
}}
if (gdjs.StageCode.condition1IsTrue_0.val) {
gdjs.StageCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));
{for(var i = 0, len = gdjs.StageCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.StageCode.GDNewObject2Objects1[i].getBehavior("Character").switchPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.StageCode.GDDisplayHeightObjects1.createFrom(runtimeScene.getObjects("DisplayHeight"));
{for(var i = 0, len = gdjs.StageCode.GDDisplayHeightObjects1.length ;i < len;++i) {
    gdjs.StageCode.GDDisplayHeightObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / 1000) + " MPX");
}
}}

}


};

gdjs.StageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StageCode.GDSoundFigObjects1.length = 0;
gdjs.StageCode.GDSoundFigObjects2.length = 0;
gdjs.StageCode.GDNewObjectObjects1.length = 0;
gdjs.StageCode.GDNewObjectObjects2.length = 0;
gdjs.StageCode.GDNewObject2Objects1.length = 0;
gdjs.StageCode.GDNewObject2Objects2.length = 0;
gdjs.StageCode.GDcameraObjects1.length = 0;
gdjs.StageCode.GDcameraObjects2.length = 0;
gdjs.StageCode.GDDisplayHeightObjects1.length = 0;
gdjs.StageCode.GDDisplayHeightObjects2.length = 0;

gdjs.StageCode.eventsList1(runtimeScene);
return;

}

gdjs['StageCode'] = gdjs.StageCode;
