import UIBase from "../UIFrame/UIBase";
import UIMenu from "./UIMenu";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIMain extends UIBase {

    static _prefabPath = "UIForms/UIMain"
    // onLoad () {}

    start () {
        this._Buttons.center.node.on(cc.Node.EventType.TOUCH_START, this.onBtnMain, this)
    }
    onEnable(){
        
    }

    // update (dt) {}
    onBtnMain(){
        cc.log('===点击按钮')
        UIMenu.openView()
    }
}
