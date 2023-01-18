/**
 * 共通変数
 */
var counter = 0;
var user_result = [];
var user_wincount = 0;
var npc_result = [];
var npc_wincount = 0;

/**
 * じゃんけん処理
 * @param user_num: ボタン値
 * @return HTML
 */
function janken(user_num){

  // 乱数で今NPC側の値を取得
  var npc_num = Math.floor(Math.random() * 3);

  // 出力用
  var resultHTML = "";
  var final_resultHTML = "";

  resultHTML += "[あなた: " + changeText(user_num) + " ] VS [相手: " + changeText(npc_num) + " ]<br>";

  // 勝ち負け判定
  if(user_num == npc_num) {
    // 引き分け
    // 各配列に結果を格納
    user_result.push("-");
    npc_result.push("-");
  } else if((user_num == 0 && npc_num == 1)||(user_num == 1 && npc_num == 2)||(user_num == 2 && npc_num == 0)) {
    // 勝ち
    // プレイヤーのカウンター値を加算
    user_wincount++;
    // 各配列に結果を格納
    user_result.push("○");
    npc_result.push("×");
  } else {
    // 負け
    // NPCのカウンター値を加算
    npc_wincount++;
    // 各配列に結果を格納
    user_result.push("×");
    npc_result.push("○");
  }

  // 全体カウンター値を加算
  counter++;

  resultHTML += "成績（あなた）：" + user_result.toString() + "<br>";
  resultHTML += "成績（相手）：" + npc_result.toString();
  
  // 結果出力
  document.getElementById("result").innerHTML = resultHTML;

  // 終了判定
  if(user_wincount == 3 || npc_wincount == 3){
    if(user_wincount == 3){
      final_resultHTML += "あなたの勝ちです!!<br>"  
    } else if(npc_wincount == 3){
      final_resultHTML += "あなたの負けです...<br>"  
    }
    final_resultHTML += "処理回数：" + counter + "回<br>";
    // 処理結果出力
    document.getElementById("final_result").innerHTML = final_resultHTML;
    
    // 各ボタンを非活性化する
    document.getElementById("0").setAttribute("disabled", true);
    document.getElementById("1").setAttribute("disabled", true);
    document.getElementById("2").setAttribute("disabled", true);
  }

}


/**
 * 値を出力用テキストに変換する処理
 * @param num: 値(整数)
 * @return String
 */
function changeText(num){
  var item = "";
  switch (num){
    case 0: item = "ぐー"; break;
    case 1: item = "ちょき"; break;
    case 2: item = "ぱー"; break;
    default: item = "不正な値を検出";
  }
  return item;
}