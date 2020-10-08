import UILoading from "./UIForms/UILoading";
import UIMain from "./UIForms/UIMain";
import TipsMgr from "./UIFrame/TipsMgr";
import UIBase from "./UIFrame/UIBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
  onLoad() {
    console.log("==游戏载入");
  }
  start() {
    // init logic
    console.log("==游戏开始");
    // UILoading.openView();
    TipsMgr.inst.setLoadingForm("UIForms/UILoading");
    UIMain.openViewWithLoading();
    // UIMain.openView();
  }
  update() {}
}
