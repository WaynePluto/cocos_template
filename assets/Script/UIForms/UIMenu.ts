import { FormType } from "../UIFrame/config/SysDefine";
import UIBase from "../UIFrame/UIBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIMenu extends UIBase {
    formType = FormType.PopUp
    static _prefabPath = "UIForms/UIMenu"
    canDestory = true

    start () {
        this._Buttons.close.node.on(cc.Node.EventType.TOUCH_START, this.onClose, this)
    }

    // update (dt) {}
    onClose(){
        cc.log('===关闭menu')
        UIMenu.closeView()
    }
}
