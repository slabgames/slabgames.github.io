gdjs.SplashCode = {};
gdjs.SplashCode.GDSoundFigObjects1= [];
gdjs.SplashCode.GDSoundFigObjects2= [];
gdjs.SplashCode.GDLOGOObjects1= [];
gdjs.SplashCode.GDLOGOObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};


gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
gdjs.SplashCode.GDLOGOObjects1.createFrom(runtimeScene.getObjects("LOGO"));
{for(var i = 0, len = gdjs.SplashCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDLOGOObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDLOGOObjects1[i].setScale(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Splash");
}}

}


{


{
gdjs.SplashCode.GDLOGOObjects1.createFrom(runtimeScene.getObjects("LOGO"));
{for(var i = 0, len = gdjs.SplashCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDLOGOObjects1[i].setOpacity(gdjs.evtTools.common.lerp((gdjs.SplashCode.GDLOGOObjects1[i].getOpacity()), 255, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 2));
}
}{for(var i = 0, len = gdjs.SplashCode.GDLOGOObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDLOGOObjects1[i].setScale(gdjs.evtTools.common.lerp((gdjs.SplashCode.GDLOGOObjects1[i].getScaleX()), 1, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 2));
}
}{runtimeScene.getVariables().getFromIndex(0).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 0;
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDSoundFigObjects1.length = 0;
gdjs.SplashCode.GDSoundFigObjects2.length = 0;
gdjs.SplashCode.GDLOGOObjects1.length = 0;
gdjs.SplashCode.GDLOGOObjects2.length = 0;

gdjs.SplashCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
