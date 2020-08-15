gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDSoundFigObjects1= [];
gdjs.Main_32MenuCode.GDSoundFigObjects2= [];
gdjs.Main_32MenuCode.GDSoundFigObjects3= [];
gdjs.Main_32MenuCode.GDSoundFigObjects4= [];
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects3= [];
gdjs.Main_32MenuCode.GDTitleObjects4= [];
gdjs.Main_32MenuCode.GDPlayObjects1= [];
gdjs.Main_32MenuCode.GDPlayObjects2= [];
gdjs.Main_32MenuCode.GDPlayObjects3= [];
gdjs.Main_32MenuCode.GDPlayObjects4= [];
gdjs.Main_32MenuCode.GDcameraObjects1= [];
gdjs.Main_32MenuCode.GDcameraObjects2= [];
gdjs.Main_32MenuCode.GDcameraObjects3= [];
gdjs.Main_32MenuCode.GDcameraObjects4= [];
gdjs.Main_32MenuCode.GDBGObjects1= [];
gdjs.Main_32MenuCode.GDBGObjects2= [];
gdjs.Main_32MenuCode.GDBGObjects3= [];
gdjs.Main_32MenuCode.GDBGObjects4= [];
gdjs.Main_32MenuCode.GDCreditBtnObjects1= [];
gdjs.Main_32MenuCode.GDCreditBtnObjects2= [];
gdjs.Main_32MenuCode.GDCreditBtnObjects3= [];
gdjs.Main_32MenuCode.GDCreditBtnObjects4= [];
gdjs.Main_32MenuCode.GDCreditBGObjects1= [];
gdjs.Main_32MenuCode.GDCreditBGObjects2= [];
gdjs.Main_32MenuCode.GDCreditBGObjects3= [];
gdjs.Main_32MenuCode.GDCreditBGObjects4= [];
gdjs.Main_32MenuCode.GDVersionObjects1= [];
gdjs.Main_32MenuCode.GDVersionObjects2= [];
gdjs.Main_32MenuCode.GDVersionObjects3= [];
gdjs.Main_32MenuCode.GDVersionObjects4= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayObjects3Objects = Hashtable.newFrom({"Play": gdjs.Main_32MenuCode.GDPlayObjects3});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDCreditBtnObjects2Objects = Hashtable.newFrom({"CreditBtn": gdjs.Main_32MenuCode.GDCreditBtnObjects2});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.Main_32MenuCode.GDPlayObjects3.createFrom(runtimeScene.getObjects("Play"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayObjects3Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Quiz", true);
}}

}


{

gdjs.Main_32MenuCode.GDCreditBtnObjects2.createFrom(runtimeScene.getObjects("CreditBtn"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDCreditBtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "credits");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "credits");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "credits");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio/music/00 - Juhani Junkala - Stage Select.ogg", 1, true, 100, 1);
}}

}


{


{
gdjs.Main_32MenuCode.GDcameraObjects1.createFrom(runtimeScene.getObjects("camera"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Main_32MenuCode.GDcameraObjects1.length !== 0 ? gdjs.Main_32MenuCode.GDcameraObjects1[0] : null), true, "bg", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Main_32MenuCode.GDcameraObjects1.length !== 0 ? gdjs.Main_32MenuCode.GDcameraObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Main_32MenuCode.GDcameraObjects1.length !== 0 ? gdjs.Main_32MenuCode.GDcameraObjects1[0] : null), true, "credits", 0);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.Main_32MenuCode.GDSoundFigObjects1.createFrom(runtimeScene.getObjects("SoundFig"));
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSoundFigObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSoundFigObjects1[i].activateBehavior("Anchor", true);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDSoundFigObjects1.length = 0;
gdjs.Main_32MenuCode.GDSoundFigObjects2.length = 0;
gdjs.Main_32MenuCode.GDSoundFigObjects3.length = 0;
gdjs.Main_32MenuCode.GDSoundFigObjects4.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects4.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects4.length = 0;
gdjs.Main_32MenuCode.GDcameraObjects1.length = 0;
gdjs.Main_32MenuCode.GDcameraObjects2.length = 0;
gdjs.Main_32MenuCode.GDcameraObjects3.length = 0;
gdjs.Main_32MenuCode.GDcameraObjects4.length = 0;
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDBGObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditBtnObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditBGObjects4.length = 0;
gdjs.Main_32MenuCode.GDVersionObjects1.length = 0;
gdjs.Main_32MenuCode.GDVersionObjects2.length = 0;
gdjs.Main_32MenuCode.GDVersionObjects3.length = 0;
gdjs.Main_32MenuCode.GDVersionObjects4.length = 0;

gdjs.Main_32MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
