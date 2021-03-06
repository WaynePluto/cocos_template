/**
 * @ Author: liuwei
 * @ Create Time: 2020-10-02 16:46:48
 * @ Modified by: liuwei
 * @ Modified time: 2020-10-02 16:47:24
 * @ Description: 自动绑定
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class UIBinder extends cc.Component {

    $collector: string;


    _Nodes        : {[name: string]: cc.Node} = cc.js.createMap();
    _Labels       : {[name: string]: cc.Label}   = cc.js.createMap();
    _Buttons      : {[name: string]: cc.Button}   = cc.js.createMap();
    _Sprites      : {[name: string]: cc.Sprite}   = cc.js.createMap();
    _RichTexts    : {[name: string]: cc.RichText}   = cc.js.createMap();
    _MotionStreaks: {[name: string]: cc.MotionStreak}   = cc.js.createMap();
    _Graphicss    : {[name: string]: cc.Graphics}   = cc.js.createMap();
    _EditBoxs     : {[name: string]: cc.EditBox}   = cc.js.createMap();
    _ScrollViews  : {[name: string]: cc.ScrollView}   = cc.js.createMap();
    _ProgressBars : {[name: string]: cc.ProgressBar}   = cc.js.createMap();
    _Sliders      : {[name: string]: cc.Slider}   = cc.js.createMap();
    _PageViews    : {[name: string]: cc.PageView}   = cc.js.createMap();


    start () {
    }

    // update (dt) {}
}

