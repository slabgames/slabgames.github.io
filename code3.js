gdjs.GameOverCode = {};
gdjs.GameOverCode.forEachIndex2 = 0;

gdjs.GameOverCode.forEachObjects2 = [];

gdjs.GameOverCode.forEachTemporary2 = null;

gdjs.GameOverCode.forEachTotalCount2 = 0;

gdjs.GameOverCode.GDSoundFigObjects1= [];
gdjs.GameOverCode.GDSoundFigObjects2= [];
gdjs.GameOverCode.GDSoundFigObjects3= [];
gdjs.GameOverCode.GDSoundFigObjects4= [];
gdjs.GameOverCode.GDDefaultNameObjects1= [];
gdjs.GameOverCode.GDDefaultNameObjects2= [];
gdjs.GameOverCode.GDDefaultNameObjects3= [];
gdjs.GameOverCode.GDDefaultNameObjects4= [];
gdjs.GameOverCode.GDKeyboardObjects1= [];
gdjs.GameOverCode.GDKeyboardObjects2= [];
gdjs.GameOverCode.GDKeyboardObjects3= [];
gdjs.GameOverCode.GDKeyboardObjects4= [];
gdjs.GameOverCode.GDPlayerNameObjects1= [];
gdjs.GameOverCode.GDPlayerNameObjects2= [];
gdjs.GameOverCode.GDPlayerNameObjects3= [];
gdjs.GameOverCode.GDPlayerNameObjects4= [];
gdjs.GameOverCode.GDOkButtonObjects1= [];
gdjs.GameOverCode.GDOkButtonObjects2= [];
gdjs.GameOverCode.GDOkButtonObjects3= [];
gdjs.GameOverCode.GDOkButtonObjects4= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];
gdjs.GameOverCode.GDScoreObjects3= [];
gdjs.GameOverCode.GDScoreObjects4= [];
gdjs.GameOverCode.GDReturnTestObjects1= [];
gdjs.GameOverCode.GDReturnTestObjects2= [];
gdjs.GameOverCode.GDReturnTestObjects3= [];
gdjs.GameOverCode.GDReturnTestObjects4= [];
gdjs.GameOverCode.GDScoreBGObjects1= [];
gdjs.GameOverCode.GDScoreBGObjects2= [];
gdjs.GameOverCode.GDScoreBGObjects3= [];
gdjs.GameOverCode.GDScoreBGObjects4= [];
gdjs.GameOverCode.GDInputNameObjects1= [];
gdjs.GameOverCode.GDInputNameObjects2= [];
gdjs.GameOverCode.GDInputNameObjects3= [];
gdjs.GameOverCode.GDInputNameObjects4= [];
gdjs.GameOverCode.GDInputNamePatchObjects1= [];
gdjs.GameOverCode.GDInputNamePatchObjects2= [];
gdjs.GameOverCode.GDInputNamePatchObjects3= [];
gdjs.GameOverCode.GDInputNamePatchObjects4= [];
gdjs.GameOverCode.GDLangitObjects1= [];
gdjs.GameOverCode.GDLangitObjects2= [];
gdjs.GameOverCode.GDLangitObjects3= [];
gdjs.GameOverCode.GDLangitObjects4= [];
gdjs.GameOverCode.GDGedungObjects1= [];
gdjs.GameOverCode.GDGedungObjects2= [];
gdjs.GameOverCode.GDGedungObjects3= [];
gdjs.GameOverCode.GDGedungObjects4= [];
gdjs.GameOverCode.GDDataSentObjects1= [];
gdjs.GameOverCode.GDDataSentObjects2= [];
gdjs.GameOverCode.GDDataSentObjects3= [];
gdjs.GameOverCode.GDDataSentObjects4= [];
gdjs.GameOverCode.GDKeyEntryObjects1= [];
gdjs.GameOverCode.GDKeyEntryObjects2= [];
gdjs.GameOverCode.GDKeyEntryObjects3= [];
gdjs.GameOverCode.GDKeyEntryObjects4= [];
gdjs.GameOverCode.GDHAPUSObjects1= [];
gdjs.GameOverCode.GDHAPUSObjects2= [];
gdjs.GameOverCode.GDHAPUSObjects3= [];
gdjs.GameOverCode.GDHAPUSObjects4= [];
gdjs.GameOverCode.GDTombolKeyboardObjects1= [];
gdjs.GameOverCode.GDTombolKeyboardObjects2= [];
gdjs.GameOverCode.GDTombolKeyboardObjects3= [];
gdjs.GameOverCode.GDTombolKeyboardObjects4= [];
gdjs.GameOverCode.GDTombolKeyboardTextObjects1= [];
gdjs.GameOverCode.GDTombolKeyboardTextObjects2= [];
gdjs.GameOverCode.GDTombolKeyboardTextObjects3= [];
gdjs.GameOverCode.GDTombolKeyboardTextObjects4= [];
gdjs.GameOverCode.GDTombolHapusObjects1= [];
gdjs.GameOverCode.GDTombolHapusObjects2= [];
gdjs.GameOverCode.GDTombolHapusObjects3= [];
gdjs.GameOverCode.GDTombolHapusObjects4= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.condition3IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};
gdjs.GameOverCode.condition3IsTrue_1 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTombolKeyboardTextObjects2Objects = Hashtable.newFrom({"TombolKeyboardText": gdjs.GameOverCode.GDTombolKeyboardTextObjects2});gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

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



}


{

gdjs.GameOverCode.GDTombolKeyboardObjects1.createFrom(runtimeScene.getObjects("TombolKeyboard"));

for(gdjs.GameOverCode.forEachIndex2 = 0;gdjs.GameOverCode.forEachIndex2 < gdjs.GameOverCode.GDTombolKeyboardObjects1.length;++gdjs.GameOverCode.forEachIndex2) {
gdjs.GameOverCode.GDTombolKeyboardTextObjects2.length = 0;

gdjs.GameOverCode.GDTombolKeyboardObjects2.length = 0;


gdjs.GameOverCode.forEachTemporary2 = gdjs.GameOverCode.GDTombolKeyboardObjects1[gdjs.GameOverCode.forEachIndex2];
gdjs.GameOverCode.GDTombolKeyboardObjects2.push(gdjs.GameOverCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.GameOverCode.GDTombolKeyboardObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDTombolKeyboardObjects2[i].setLayer("Keyboard");
}
}{for(var i = 0, len = gdjs.GameOverCode.GDTombolKeyboardObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDTombolKeyboardObjects2[i].returnVariable(gdjs.GameOverCode.GDTombolKeyboardObjects2[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.string.toUpperCase((gdjs.RuntimeObject.getVariableString(gdjs.GameOverCode.GDTombolKeyboardObjects2[i].getVariables().getFromIndex(0)))));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTombolKeyboardTextObjects2Objects, (( gdjs.GameOverCode.GDTombolKeyboardObjects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDTombolKeyboardObjects2[0].getPointX("")) + 16, (( gdjs.GameOverCode.GDTombolKeyboardObjects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDTombolKeyboardObjects2[0].getPointY("")) + 12, "Keyboard");
}{for(var i = 0, len = gdjs.GameOverCode.GDTombolKeyboardTextObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDTombolKeyboardTextObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.GameOverCode.GDTombolKeyboardObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameOverCode.GDTombolKeyboardObjects2[0].getVariables()).getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDTombolKeyboardTextObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDTombolKeyboardTextObjects2[i].setZOrder((( gdjs.GameOverCode.GDTombolKeyboardObjects2.length === 0 ) ? 0 :gdjs.GameOverCode.GDTombolKeyboardObjects2[0].getZOrder()) + 1);
}
}}
}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{

gdjs.GameOverCode.GDPlayerNameObjects3.createFrom(gdjs.GameOverCode.GDPlayerNameObjects2);


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayerNameObjects3.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlayerNameObjects3[i].getString() == "" ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDPlayerNameObjects3[k] = gdjs.GameOverCode.GDPlayerNameObjects3[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayerNameObjects3.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDDefaultNameObjects3.createFrom(runtimeScene.getObjects("DefaultName"));
/* Reuse gdjs.GameOverCode.GDPlayerNameObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.toUpperCase((( gdjs.GameOverCode.GDDefaultNameObjects3.length === 0 ) ? "" :gdjs.GameOverCode.GDDefaultNameObjects3[0].getString())));
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameObjects3.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDefaultNameObjects3.length ;i < len;++i) {
    gdjs.GameOverCode.GDDefaultNameObjects3[i].hide(false);
}
}}

}


{

/* Reuse gdjs.GameOverCode.GDPlayerNameObjects2 */

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayerNameObjects2.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDPlayerNameObjects2[i].getString() == "") ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDPlayerNameObjects2[k] = gdjs.GameOverCode.GDPlayerNameObjects2[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayerNameObjects2.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDDefaultNameObjects2.createFrom(runtimeScene.getObjects("DefaultName"));
/* Reuse gdjs.GameOverCode.GDKeyboardObjects2 */
/* Reuse gdjs.GameOverCode.GDPlayerNameObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.string.toUpperCase((( gdjs.GameOverCode.GDKeyboardObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDKeyboardObjects2[0].getString())));
}{for(var i = 0, len = gdjs.GameOverCode.GDDefaultNameObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDefaultNameObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameObjects2[i].hide(false);
}
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDKeyEntryObjects2Objects = Hashtable.newFrom({"KeyEntry": gdjs.GameOverCode.GDKeyEntryObjects2});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHAPUSObjects2Objects = Hashtable.newFrom({"HAPUS": gdjs.GameOverCode.GDHAPUSObjects2});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTombolHapusObjects2Objects = Hashtable.newFrom({"TombolHapus": gdjs.GameOverCode.GDTombolHapusObjects2});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTombolKeyboardObjects1Objects = Hashtable.newFrom({"TombolKeyboard": gdjs.GameOverCode.GDTombolKeyboardObjects1});gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{

gdjs.GameOverCode.GDKeyEntryObjects2.createFrom(runtimeScene.getObjects("KeyEntry"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDKeyEntryObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDKeyEntryObjects2 */
gdjs.GameOverCode.GDKeyboardObjects2.createFrom(runtimeScene.getObjects("Keyboard"));
{for(var i = 0, len = gdjs.GameOverCode.GDKeyboardObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyboardObjects2[i].setString(gdjs.GameOverCode.GDKeyboardObjects2[i].getString() + ((( gdjs.GameOverCode.GDKeyEntryObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDKeyEntryObjects2[0].getString())));
}
}}

}


{

gdjs.GameOverCode.GDHAPUSObjects2.createFrom(runtimeScene.getObjects("HAPUS"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDHAPUSObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDKeyboardObjects2.createFrom(runtimeScene.getObjects("Keyboard"));
{for(var i = 0, len = gdjs.GameOverCode.GDKeyboardObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyboardObjects2[i].setString(gdjs.evtTools.string.subStr((gdjs.GameOverCode.GDKeyboardObjects2[i].getString()), 0, gdjs.evtTools.string.strLen((gdjs.GameOverCode.GDKeyboardObjects2[i].getString())) - 1));
}
}}

}


{

gdjs.GameOverCode.GDTombolHapusObjects2.createFrom(runtimeScene.getObjects("TombolHapus"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTombolHapusObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDKeyboardObjects2.createFrom(runtimeScene.getObjects("Keyboard"));
{for(var i = 0, len = gdjs.GameOverCode.GDKeyboardObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyboardObjects2[i].setString(gdjs.evtTools.string.subStr((gdjs.GameOverCode.GDKeyboardObjects2[i].getString()), 0, gdjs.evtTools.string.strLen((gdjs.GameOverCode.GDKeyboardObjects2[i].getString())) - 1));
}
}}

}


{

gdjs.GameOverCode.GDTombolKeyboardObjects1.createFrom(runtimeScene.getObjects("TombolKeyboard"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDTombolKeyboardObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDKeyboardObjects1.createFrom(runtimeScene.getObjects("Keyboard"));
/* Reuse gdjs.GameOverCode.GDTombolKeyboardObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDKeyboardObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDKeyboardObjects1[i].setString(gdjs.GameOverCode.GDKeyboardObjects1[i].getString() + ((gdjs.RuntimeObject.getVariableString(((gdjs.GameOverCode.GDTombolKeyboardObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameOverCode.GDTombolKeyboardObjects1[0].getVariables()).getFromIndex(0)))));
}
}}

}


};gdjs.GameOverCode.eventsList4 = function(runtimeScene) {

{

gdjs.GameOverCode.GDKeyboardObjects2.createFrom(runtimeScene.getObjects("Keyboard"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDKeyboardObjects2.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDKeyboardObjects2[i].isActivated() ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDKeyboardObjects2[k] = gdjs.GameOverCode.GDKeyboardObjects2[i];
        ++k;
    }
}
gdjs.GameOverCode.GDKeyboardObjects2.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDKeyboardObjects2 */
gdjs.GameOverCode.GDPlayerNameObjects2.createFrom(runtimeScene.getObjects("PlayerName"));
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameObjects2[i].setString(gdjs.evtTools.string.toUpperCase((( gdjs.GameOverCode.GDKeyboardObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDKeyboardObjects2[0].getString())));
}
}
{ //Subevents
gdjs.GameOverCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
gdjs.GameOverCode.condition2IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Keyboard");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameOverCode.condition1IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition2IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8882540);
}
}}
}
if (gdjs.GameOverCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDOkButtonObjects3Objects = Hashtable.newFrom({"OkButton": gdjs.GameOverCode.GDOkButtonObjects3});gdjs.GameOverCode.userFunc0x8921f8 = function(runtimeScene) {
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


// Calculating MD5 Start----

var date = new Date();

function MD5(e) {
    function h(a, b) {
        var c, d, e, f, g;
        e = a & 2147483648;
        f = b & 2147483648;
        c = a & 1073741824;
        d = b & 1073741824;
        g = (a & 1073741823) + (b & 1073741823);
        return c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f
    }

    function k(a, b, c, d, e, f, g) {
        a = h(a, h(h(b & c | ~b & d, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function l(a, b, c, d, e, f, g) {
        a = h(a, h(h(b & d | c & ~d, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function m(a, b, d, c, e, f, g) {
        a = h(a, h(h(b ^ d ^ c, e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function n(a, b, d, c, e, f, g) {
        a = h(a, h(h(d ^ (b | ~c), e), g));
        return h(a << f | a >>> 32 - f, b)
    }

    function p(a) {
        var b = "",
            d = "",
            c;
        for (c = 0; 3 >= c; c++) d = a >>> 8 * c & 255, d = "0" + d.toString(16), b += d.substr(d.length - 2, 2);
        return b
    }
    var f = [],
        q, r, s, t, a, b, c, d;
    e = function(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", d = 0; d < a.length; d++) {
            var c = a.charCodeAt(d);
            128 > c ? b += String.fromCharCode(c) : (127 < c && 2048 > c ? b += String.fromCharCode(c >> 6 | 192) : (b += String.fromCharCode(c >> 12 | 224), b += String.fromCharCode(c >> 6 & 63 | 128)), b += String.fromCharCode(c & 63 | 128))
        }
        return b
    }(e);
    f = function(b) {
        var a, c = b.length;
        a = c + 8;
        for (var d = 16 * ((a - a % 64) / 64 + 1), e = Array(d - 1), f = 0, g = 0; g < c;) a = (g - g % 4) / 4, f = g % 4 * 8, e[a] |= b.charCodeAt(g) << f, g++;
        a = (g - g % 4) / 4;
        e[a] |= 128 << g % 4 * 8;
        e[d - 2] = c << 3;
        e[d - 1] = c >>> 29;
        return e
    }(e);
    a = 1732584193;
    b = 4023233417;
    c = 2562383102;
    d = 271733878;
    for (e = 0; e < f.length; e += 16) q = a, r = b, s = c, t = d, a = k(a, b, c, d, f[e + 0], 7, 3614090360), d = k(d, a, b, c, f[e + 1], 12, 3905402710), c = k(c, d, a, b, f[e + 2], 17, 606105819), b = k(b, c, d, a, f[e + 3], 22, 3250441966), a = k(a, b, c, d, f[e + 4], 7, 4118548399), d = k(d, a, b, c, f[e + 5], 12, 1200080426), c = k(c, d, a, b, f[e + 6], 17, 2821735955), b = k(b, c, d, a, f[e + 7], 22, 4249261313), a = k(a, b, c, d, f[e + 8], 7, 1770035416), d = k(d, a, b, c, f[e + 9], 12, 2336552879), c = k(c, d, a, b, f[e + 10], 17, 4294925233), b = k(b, c, d, a, f[e + 11], 22, 2304563134), a = k(a, b, c, d, f[e + 12], 7, 1804603682), d = k(d, a, b, c, f[e + 13], 12, 4254626195), c = k(c, d, a, b, f[e + 14], 17, 2792965006), b = k(b, c, d, a, f[e + 15], 22, 1236535329), a = l(a, b, c, d, f[e + 1], 5, 4129170786), d = l(d, a, b, c, f[e + 6], 9, 3225465664), c = l(c, d, a, b, f[e + 11], 14, 643717713), b = l(b, c, d, a, f[e + 0], 20, 3921069994), a = l(a, b, c, d, f[e + 5], 5, 3593408605), d = l(d, a, b, c, f[e + 10], 9, 38016083), c = l(c, d, a, b, f[e + 15], 14, 3634488961), b = l(b, c, d, a, f[e + 4], 20, 3889429448), a = l(a, b, c, d, f[e + 9], 5, 568446438), d = l(d, a, b, c, f[e + 14], 9, 3275163606), c = l(c, d, a, b, f[e + 3], 14, 4107603335), b = l(b, c, d, a, f[e + 8], 20, 1163531501), a = l(a, b, c, d, f[e + 13], 5, 2850285829), d = l(d, a, b, c, f[e + 2], 9, 4243563512), c = l(c, d, a, b, f[e + 7], 14, 1735328473), b = l(b, c, d, a, f[e + 12], 20, 2368359562), a = m(a, b, c, d, f[e + 5], 4, 4294588738), d = m(d, a, b, c, f[e + 8], 11, 2272392833), c = m(c, d, a, b, f[e + 11], 16, 1839030562), b = m(b, c, d, a, f[e + 14], 23, 4259657740), a = m(a, b, c, d, f[e + 1], 4, 2763975236), d = m(d, a, b, c, f[e + 4], 11, 1272893353), c = m(c, d, a, b, f[e + 7], 16, 4139469664), b = m(b, c, d, a, f[e + 10], 23, 3200236656), a = m(a, b, c, d, f[e + 13], 4, 681279174), d = m(d, a, b, c, f[e + 0], 11, 3936430074), c = m(c, d, a, b, f[e + 3], 16, 3572445317), b = m(b, c, d, a, f[e + 6], 23, 76029189), a = m(a, b, c, d, f[e + 9], 4, 3654602809), d = m(d, a, b, c, f[e + 12], 11, 3873151461), c = m(c, d, a, b, f[e + 15], 16, 530742520), b = m(b, c, d, a, f[e + 2], 23, 3299628645), a = n(a, b, c, d, f[e + 0], 6, 4096336452), d = n(d, a, b, c, f[e + 7], 10, 1126891415), c = n(c, d, a, b, f[e + 14], 15, 2878612391), b = n(b, c, d, a, f[e + 5], 21, 4237533241), a = n(a, b, c, d, f[e + 12], 6, 1700485571), d = n(d, a, b, c, f[e + 3], 10, 2399980690), c = n(c, d, a, b, f[e + 10], 15, 4293915773), b = n(b, c, d, a, f[e + 1], 21, 2240044497), a = n(a, b, c, d, f[e + 8], 6, 1873313359), d = n(d, a, b, c, f[e + 15], 10, 4264355552), c = n(c, d, a, b, f[e + 6], 15, 2734768916), b = n(b, c, d, a, f[e + 13], 21, 1309151649), a = n(a, b, c, d, f[e + 4], 6, 4149444226), d = n(d, a, b, c, f[e + 11], 10, 3174756917), c = n(c, d, a, b, f[e + 2], 15, 718787259), b = n(b, c, d, a, f[e + 9], 21, 3951481745), a = h(a, q), b = h(b, r), c = h(c, s), d = h(d, t);
    return (p(a) + p(b) + p(c) + p(d)).toLowerCase()
};


var myDateString = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + ('0' + date.getHours()).slice(-2) + ('0' + date.getMinutes()).slice(-2);
var stampTime = myDateString+"abcd"+playerScore ;
//console.log("stamp time =  " + stampTime);
var hash = MD5(stampTime);
//console.log("md5 stamp =  " + hash);
runtimeScene.getVariables().get("JS_HASH").setString(hash);
runtimeScene.getVariables().get("JS_KEY").setString(stampTime);

// Calculating MD5 end -----


var formDataToSend = new FormData;
formDataToSend.append("score",playerScore);
formDataToSend.append("game","Kuis Panjat Pinang");
formDataToSend.append("name",playerName);
formDataToSend.append("secret","6c4f51b6654e83fb2dde0878cc57dbeb");
formDataToSend.append("key",hash);

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
gdjs.GameOverCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameOverCode.userFunc0x8921f8(runtimeScene);

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDInputNamePatchObjects3Objects = Hashtable.newFrom({"InputNamePatch": gdjs.GameOverCode.GDInputNamePatchObjects3});gdjs.GameOverCode.eventsList6 = function(runtimeScene) {

{

gdjs.GameOverCode.GDOkButtonObjects3.createFrom(runtimeScene.getObjects("OkButton"));
gdjs.GameOverCode.GDPlayerNameObjects3.createFrom(runtimeScene.getObjects("PlayerName"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayerNameObjects3.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlayerNameObjects3[i].getString() != "" ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDPlayerNameObjects3[k] = gdjs.GameOverCode.GDPlayerNameObjects3[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayerNameObjects3.length = k;}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDOkButtonObjects3Objects, runtimeScene, true, false);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDOkButtonObjects3 */
{runtimeScene.getVariables().getFromIndex(3).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameOverCode.GDOkButtonObjects3.length ;i < len;++i) {
    gdjs.GameOverCode.GDOkButtonObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
{ //Subevents
gdjs.GameOverCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.GameOverCode.GDInputNamePatchObjects3.createFrom(runtimeScene.getObjects("InputNamePatch"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDInputNamePatchObjects3Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Keyboard");
}}

}


{



}


};gdjs.GameOverCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 0;
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.GameOverCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList6(runtimeScene);} //End of subevents
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
gdjs.GameOverCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList9 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().getFromIndex(1).setString("{\n  \"score\": \"" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + "\",\n  \"game\": \"Kuis Panjat Pinang\",\n  \"name\":  \"" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + "\",\n  \"secret\": \"6c4f51b6654e83fb2dde0878cc57dbeb\"\n}");
}{gdjs.evtTools.network.sendHttpRequest("https://apis3.uzone.id", "/api/addSC/A-c84erqsCqq11111111", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)), "POST", "", runtimeScene.getVariables().getFromIndex(0));
}}

}


};gdjs.GameOverCode.eventsList10 = function(runtimeScene) {

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


gdjs.GameOverCode.eventsList4(runtimeScene);
}


{


gdjs.GameOverCode.eventsList8(runtimeScene);
}


{


{
gdjs.GameOverCode.GDKeyboardObjects1.createFrom(runtimeScene.getObjects("Keyboard"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameOverCode.GDKeyboardObjects1.length !== 0 ? gdjs.GameOverCode.GDKeyboardObjects1[0] : null), true, "Keyboard", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameOverCode.GDKeyboardObjects1.length !== 0 ? gdjs.GameOverCode.GDKeyboardObjects1[0] : null), true, "Keyboard", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "Keyboard", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "Keyboard", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDSoundFigObjects1.length = 0;
gdjs.GameOverCode.GDSoundFigObjects2.length = 0;
gdjs.GameOverCode.GDSoundFigObjects3.length = 0;
gdjs.GameOverCode.GDSoundFigObjects4.length = 0;
gdjs.GameOverCode.GDDefaultNameObjects1.length = 0;
gdjs.GameOverCode.GDDefaultNameObjects2.length = 0;
gdjs.GameOverCode.GDDefaultNameObjects3.length = 0;
gdjs.GameOverCode.GDDefaultNameObjects4.length = 0;
gdjs.GameOverCode.GDKeyboardObjects1.length = 0;
gdjs.GameOverCode.GDKeyboardObjects2.length = 0;
gdjs.GameOverCode.GDKeyboardObjects3.length = 0;
gdjs.GameOverCode.GDKeyboardObjects4.length = 0;
gdjs.GameOverCode.GDPlayerNameObjects1.length = 0;
gdjs.GameOverCode.GDPlayerNameObjects2.length = 0;
gdjs.GameOverCode.GDPlayerNameObjects3.length = 0;
gdjs.GameOverCode.GDPlayerNameObjects4.length = 0;
gdjs.GameOverCode.GDOkButtonObjects1.length = 0;
gdjs.GameOverCode.GDOkButtonObjects2.length = 0;
gdjs.GameOverCode.GDOkButtonObjects3.length = 0;
gdjs.GameOverCode.GDOkButtonObjects4.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects3.length = 0;
gdjs.GameOverCode.GDScoreObjects4.length = 0;
gdjs.GameOverCode.GDReturnTestObjects1.length = 0;
gdjs.GameOverCode.GDReturnTestObjects2.length = 0;
gdjs.GameOverCode.GDReturnTestObjects3.length = 0;
gdjs.GameOverCode.GDReturnTestObjects4.length = 0;
gdjs.GameOverCode.GDScoreBGObjects1.length = 0;
gdjs.GameOverCode.GDScoreBGObjects2.length = 0;
gdjs.GameOverCode.GDScoreBGObjects3.length = 0;
gdjs.GameOverCode.GDScoreBGObjects4.length = 0;
gdjs.GameOverCode.GDInputNameObjects1.length = 0;
gdjs.GameOverCode.GDInputNameObjects2.length = 0;
gdjs.GameOverCode.GDInputNameObjects3.length = 0;
gdjs.GameOverCode.GDInputNameObjects4.length = 0;
gdjs.GameOverCode.GDInputNamePatchObjects1.length = 0;
gdjs.GameOverCode.GDInputNamePatchObjects2.length = 0;
gdjs.GameOverCode.GDInputNamePatchObjects3.length = 0;
gdjs.GameOverCode.GDInputNamePatchObjects4.length = 0;
gdjs.GameOverCode.GDLangitObjects1.length = 0;
gdjs.GameOverCode.GDLangitObjects2.length = 0;
gdjs.GameOverCode.GDLangitObjects3.length = 0;
gdjs.GameOverCode.GDLangitObjects4.length = 0;
gdjs.GameOverCode.GDGedungObjects1.length = 0;
gdjs.GameOverCode.GDGedungObjects2.length = 0;
gdjs.GameOverCode.GDGedungObjects3.length = 0;
gdjs.GameOverCode.GDGedungObjects4.length = 0;
gdjs.GameOverCode.GDDataSentObjects1.length = 0;
gdjs.GameOverCode.GDDataSentObjects2.length = 0;
gdjs.GameOverCode.GDDataSentObjects3.length = 0;
gdjs.GameOverCode.GDDataSentObjects4.length = 0;
gdjs.GameOverCode.GDKeyEntryObjects1.length = 0;
gdjs.GameOverCode.GDKeyEntryObjects2.length = 0;
gdjs.GameOverCode.GDKeyEntryObjects3.length = 0;
gdjs.GameOverCode.GDKeyEntryObjects4.length = 0;
gdjs.GameOverCode.GDHAPUSObjects1.length = 0;
gdjs.GameOverCode.GDHAPUSObjects2.length = 0;
gdjs.GameOverCode.GDHAPUSObjects3.length = 0;
gdjs.GameOverCode.GDHAPUSObjects4.length = 0;
gdjs.GameOverCode.GDTombolKeyboardObjects1.length = 0;
gdjs.GameOverCode.GDTombolKeyboardObjects2.length = 0;
gdjs.GameOverCode.GDTombolKeyboardObjects3.length = 0;
gdjs.GameOverCode.GDTombolKeyboardObjects4.length = 0;
gdjs.GameOverCode.GDTombolKeyboardTextObjects1.length = 0;
gdjs.GameOverCode.GDTombolKeyboardTextObjects2.length = 0;
gdjs.GameOverCode.GDTombolKeyboardTextObjects3.length = 0;
gdjs.GameOverCode.GDTombolKeyboardTextObjects4.length = 0;
gdjs.GameOverCode.GDTombolHapusObjects1.length = 0;
gdjs.GameOverCode.GDTombolHapusObjects2.length = 0;
gdjs.GameOverCode.GDTombolHapusObjects3.length = 0;
gdjs.GameOverCode.GDTombolHapusObjects4.length = 0;

gdjs.GameOverCode.eventsList10(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
