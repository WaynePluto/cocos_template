import { FormType } from "../UIFrame/config/SysDefine";
import UIBase from "../UIFrame/UIBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UILoading extends UIBase {
  formType = FormType.TopTips;
  static _prefabPath = "UIForms/UILoading";
  // onLoad () {}

  start() {
    // console.log("==UILoading start, label:", this._Labels["progress"].string);
  }

  // update (dt) {}
}
