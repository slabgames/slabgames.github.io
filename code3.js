gdjs.GameOverCode = {};
gdjs.GameOverCode.forEachIndex2 = 0;

gdjs.GameOverCode.forEachObjects2 = [];

gdjs.GameOverCode.forEachTemporary2 = null;

gdjs.GameOverCode.forEachTotalCount2 = 0;

gdjs.GameOverCode.GDSoundFigObjects1= [];
gdjs.GameOverCode.GDSoundFigObjects2= [];
gdjs.GameOverCode.GDSoundFigObjects3= [];
gdjs.GameOverCode.GDDefaultNameObjects1= [];
gdjs.GameOverCode.GDDefaultNameObjects2= [];
gdjs.GameOverCode.GDDefaultNameObjects3= [];
gdjs.GameOverCode.GDKeyboardObjects1= [];
gdjs.GameOverCode.GDKeyboardObjects2= [];
gdjs.GameOverCode.GDKeyboardObjects3= [];
gdjs.GameOverCode.GDPlayerNameObjects1= [];
gdjs.GameOverCode.GDPlayerNameObjects2= [];
gdjs.GameOverCode.GDPlayerNameObjects3= [];
gdjs.GameOverCode.GDOkButtonObjects1= [];
gdjs.GameOverCode.GDOkButtonObjects2= [];
gdjs.GameOverCode.GDOkButtonObjects3= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];
gdjs.GameOverCode.GDScoreObjects3= [];
gdjs.GameOverCode.GDReturnTestObjects1= [];
gdjs.GameOverCode.GDReturnTestObjects2= [];
gdjs.GameOverCode.GDReturnTestObjects3= [];
gdjs.GameOverCode.GDScoreBGObjects1= [];
gdjs.GameOverCode.GDScoreBGObjects2= [];
gdjs.GameOverCode.GDScoreBGObjects3= [];
gdjs.GameOverCode.GDInputNameObjects1= [];
gdjs.GameOverCode.GDInputNameObjects2= [];
gdjs.GameOverCode.GDInputNameObjects3= [];
gdjs.GameOverCode.GDInputNamePatchObjects1= [];
gdjs.GameOverCode.GDInputNamePatchObjects2= [];
gdjs.GameOverCode.GDInputNamePatchObjects3= [];
gdjs.GameOverCode.GDLangitObjects1= [];
gdjs.GameOverCode.GDLangitObjects2= [];
gdjs.GameOverCode.GDLangitObjects3= [];
gdjs.GameOverCode.GDGedungObjects1= [];
gdjs.GameOverCode.GDGedungObjects2= [];
gdjs.GameOverCode.GDGedungObjects3= [];
gdjs.GameOverCode.GDDataSentObjects1= [];
gdjs.GameOverCode.GDDataSentObjects2= [];
gdjs.GameOverCode.GDDataSentObjects3= [];
gdjs.GameOverCode.GDKeyEntryObjects1= [];
gdjs.GameOverCode.GDKeyEntryObjects2= [];
gdjs.GameOverCode.GDKeyEntryObjects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("");
}}

}


{


{
gdjs.GameOverCode.GDKeyboardObjects2.createFrom(runtimeScene.getObjects("Keyboard"));
{for(var i = 0, len = gdjs.GameOverCode.GDKeyboardObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyboardObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.GameOverCode.GDKeyEntryObjects1.createFrom(runtimeScene.getObjects("KeyEntry"));

for(gdjs.GameOverCode.forEachIndex2 = 0;gdjs.GameOverCode.forEachIndex2 < gdjs.GameOverCode.GDKeyEntryObjects1.length;++gdjs.GameOverCode.forEachIndex2) {
gdjs.GameOverCode.GDKeyEntryObjects2.length = 0;


gdjs.GameOverCode.forEachTemporary2 = gdjs.GameOverCode.GDKeyEntryObjects1[gdjs.GameOverCode.forEachIndex2];
gdjs.GameOverCode.GDKeyEntryObjects2.push(gdjs.GameOverCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.GameOverCode.GDKeyEntryObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyEntryObjects2[i].setLayer("Keyboard");
}
}{for(var i = 0, len = gdjs.GameOverCode.GDKeyEntryObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyEntryObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.GameOverCode.GDKeyEntryObjects2[i].getVariables().getFromIndex(0))));
}
}}
}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{

gdjs.GameOverCode.GDPlayerNameObjects2.createFrom(gdjs.GameOverCode.GDPlayerNameObjects1);


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayerNameObjects2.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlayerNameObjects2[i].getString() == "" ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDPlayerNameObjects2[k] = gdjs.GameOverCode.GDPlayerNameObjects2[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayerNameObjects2.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDDefaultNameObjects2.createFrom(runtimeScene.getObjects("DefaultName"));
/* Reuse gdjs.GameOverCode.GDPlayerNameObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.toUpperCase((( gdjs.GameOverCode.GDDefaultNameObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDDefaultNameObjects2[0].getString())));
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDefaultNameObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDefaultNameObjects2[i].hide(false);
}
}}

}


{

/* Reuse gdjs.GameOverCode.GDPlayerNameObjects1 */

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayerNameObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDPlayerNameObjects1[i].getString() == "") ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDPlayerNameObjects1[k] = gdjs.GameOverCode.GDPlayerNameObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayerNameObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDDefaultNameObjects1.createFrom(runtimeScene.getObjects("DefaultName"));
/* Reuse gdjs.GameOverCode.GDKeyboardObjects1 */
/* Reuse gdjs.GameOverCode.GDPlayerNameObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.toUpperCase((( gdjs.GameOverCode.GDKeyboardObjects1.length === 0 ) ? "" :gdjs.GameOverCode.GDKeyboardObjects1[0].getString())));
}{for(var i = 0, len = gdjs.GameOverCode.GDDefaultNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDefaultNameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameObjects1[i].hide(false);
}
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDOkButtonObjects2Objects = Hashtable.newFrom({"OkButton": gdjs.GameOverCode.GDOkButtonObjects2});gdjs.GameOverCode.userFunc0x813668 = function(runtimeScene) {
"use strict";

var playerName = runtimeScene.getVariables().get("JS_NameToSend").getAsString();
var playerScore = runtimeScene.getVariables().get("JS_ScoreToSend").getAsNumber();
var targetURL = "https://apis3.uzone.id/api/addSC/A-c84erqsCqq";

var dataToSend = {
  "score": playerScore,
  "game": "Kuis Panjat Pinang",
  "name":  playerName,
  "secret": "6c4f51b6654e83fb2dde0878cc57dbeb"
};

var formDataToSend = new FormData;
formDataToSend.append("score",playerScore);
formDataToSend.append("game","Kuis Panjat Pinang");
formDataToSend.append("name",playerName);
formDataToSend.append("secret","6c4f51b6654e83fb2dde0878cc57dbeb");

var status = httpPost(targetURL,formDataToSend);

// print status ke scene variable
var returnValue = runtimeScene.getVariables().get("JS_ReturnValue");
var statusCode = runtimeScene.getVariables().get("JS_StatusCode");
returnValue.setString(status[0]);
statusCode.setNumber(status[1]);

function httpPost(theUrl,theData)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); 
    xmlHttp.send( theData );
    
    return [xmlHttp.responseText,xmlHttp.status];
}
};
gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameOverCode.userFunc0x813668(runtimeScene);

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDInputNamePatchObjects2Objects = Hashtable.newFrom({"InputNamePatch": gdjs.GameOverCode.GDInputNamePatchObjects2});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDInputNamePatchObjects1Objects = Hashtable.newFrom({"InputNamePatch": gdjs.GameOverCode.GDInputNamePatchObjects1});gdjs.GameOverCode.eventsList4 = function(runtimeScene) {

{

gdjs.GameOverCode.GDOkButtonObjects2.createFrom(runtimeScene.getObjects("OkButton"));
gdjs.GameOverCode.GDPlayerNameObjects2.createFrom(runtimeScene.getObjects("PlayerName"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayerNameObjects2.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlayerNameObjects2[i].getString() != "" ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDPlayerNameObjects2[k] = gdjs.GameOverCode.GDPlayerNameObjects2[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayerNameObjects2.length = k;}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDOkButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDOkButtonObjects2 */
{runtimeScene.getVariables().getFromIndex(3).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameOverCode.GDOkButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDOkButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
{ //Subevents
gdjs.GameOverCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.GameOverCode.GDInputNamePatchObjects2.createFrom(runtimeScene.getObjects("InputNamePatch"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDInputNamePatchObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDKeyboardObjects2.createFrom(runtimeScene.getObjects("Keyboard"));
{for(var i = 0, len = gdjs.GameOverCode.GDKeyboardObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyboardObjects2[i].getBehavior("TextEntryVirtualKeyboard").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.GameOverCode.GDInputNamePatchObjects1.createFrom(runtimeScene.getObjects("InputNamePatch"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDInputNamePatchObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDKeyboardObjects1.createFrom(runtimeScene.getObjects("Keyboard"));
{for(var i = 0, len = gdjs.GameOverCode.GDKeyboardObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyboardObjects1[i].getBehavior("TextEntryVirtualKeyboard").closeKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameOverCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 0;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.GameOverCode.eventsList6 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().getFromIndex(1).setString("{\n  \"score\": \"" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "\",\n  \"game\": \"Kuis Panjat Pinang\",\n  \"name\":  \"" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + "\",\n  \"secret\": \"6c4f51b6654e83fb2dde0878cc57dbeb\"\n}");
}{gdjs.evtTools.network.sendHttpRequest("https://apis3.uzone.id", "/api/addSC/A-c84erqsCqq11111111", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)), "POST", "", runtimeScene.getVariables().getFromIndex(0));
}}

}


};gdjs.GameOverCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDDataSentObjects1.createFrom(runtimeScene.getObjects("DataSent"));
gdjs.GameOverCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDataSentObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDataSentObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.GameOverCode.GDKeyboardObjects1.createFrom(runtimeScene.getObjects("Keyboard"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDKeyboardObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDKeyboardObjects1[i].isActivated() ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDKeyboardObjects1[k] = gdjs.GameOverCode.GDKeyboardObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDKeyboardObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDKeyboardObjects1 */
gdjs.GameOverCode.GDPlayerNameObjects1.createFrom(runtimeScene.getObjects("PlayerName"));
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameObjects1[i].setString(gdjs.evtTools.string.toUpperCase((( gdjs.GameOverCode.GDKeyboardObjects1.length === 0 ) ? "" :gdjs.GameOverCode.GDKeyboardObjects1[0].getString())));
}
}
{ //Subevents
gdjs.GameOverCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = !(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "UNTOUCHED");
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameOverCode.condition1IsTrue_1.val = !(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)) == "UNTOUCHED");
if( gdjs.GameOverCode.condition1IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDDataSentObjects1.createFrom(runtimeScene.getObjects("DataSent"));
gdjs.GameOverCode.GDReturnTestObjects1.createFrom(runtimeScene.getObjects("ReturnTest"));
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameOverCode.GDReturnTestObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDReturnTestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDataSentObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDataSentObjects1[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(6).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{ //Subevents
gdjs.GameOverCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


{
gdjs.GameOverCode.GDKeyboardObjects1.createFrom(runtimeScene.getObjects("Keyboard"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameOverCode.GDKeyboardObjects1.length !== 0 ? gdjs.GameOverCode.GDKeyboardObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDSoundFigObjects1.length = 0;
gdjs.GameOverCode.GDSoundFigObjects2.length = 0;
gdjs.GameOverCode.GDSoundFigObjects3.length = 0;
gdjs.GameOverCode.GDDefaultNameObjects1.length = 0;
gdjs.GameOverCode.GDDefaultNameObjects2.length = 0;
gdjs.GameOverCode.GDDefaultNameObjects3.length = 0;
gdjs.GameOverCode.GDKeyboardObjects1.length = 0;
gdjs.GameOverCode.GDKeyboardObjects2.length = 0;
gdjs.GameOverCode.GDKeyboardObjects3.length = 0;
gdjs.GameOverCode.GDPlayerNameObjects1.length = 0;
gdjs.GameOverCode.GDPlayerNameObjects2.length = 0;
gdjs.GameOverCode.GDPlayerNameObjects3.length = 0;
gdjs.GameOverCode.GDOkButtonObjects1.length = 0;
gdjs.GameOverCode.GDOkButtonObjects2.length = 0;
gdjs.GameOverCode.GDOkButtonObjects3.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects3.length = 0;
gdjs.GameOverCode.GDReturnTestObjects1.length = 0;
gdjs.GameOverCode.GDReturnTestObjects2.length = 0;
gdjs.GameOverCode.GDReturnTestObjects3.length = 0;
gdjs.GameOverCode.GDScoreBGObjects1.length = 0;
gdjs.GameOverCode.GDScoreBGObjects2.length = 0;
gdjs.GameOverCode.GDScoreBGObjects3.length = 0;
gdjs.GameOverCode.GDInputNameObjects1.length = 0;
gdjs.GameOverCode.GDInputNameObjects2.length = 0;
gdjs.GameOverCode.GDInputNameObjects3.length = 0;
gdjs.GameOverCode.GDInputNamePatchObjects1.length = 0;
gdjs.GameOverCode.GDInputNamePatchObjects2.length = 0;
gdjs.GameOverCode.GDInputNamePatchObjects3.length = 0;
gdjs.GameOverCode.GDLangitObjects1.length = 0;
gdjs.GameOverCode.GDLangitObjects2.length = 0;
gdjs.GameOverCode.GDLangitObjects3.length = 0;
gdjs.GameOverCode.GDGedungObjects1.length = 0;
gdjs.GameOverCode.GDGedungObjects2.length = 0;
gdjs.GameOverCode.GDGedungObjects3.length = 0;
gdjs.GameOverCode.GDDataSentObjects1.length = 0;
gdjs.GameOverCode.GDDataSentObjects2.length = 0;
gdjs.GameOverCode.GDDataSentObjects3.length = 0;
gdjs.GameOverCode.GDKeyEntryObjects1.length = 0;
gdjs.GameOverCode.GDKeyEntryObjects2.length = 0;
gdjs.GameOverCode.GDKeyEntryObjects3.length = 0;

gdjs.GameOverCode.eventsList7(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
