window.onload = function(){
  // td取得
  var $tdElements = document.getElementsByTagName('td');
  // 石の色
  const whiteStone = '〇';
  const blackStone = '●';
  const isBlackTurn = true;
  const isWhiteTurn = false;
  var turn = isBlackTurn;
  let turnStone = blackStone
  // 配列
  let boardElements = [].slice.call($tdElements);
  let stoneIndex;

  // 色の変更
  let $changeColor = function(){
    let leftStone = $tdElements[stoneIndex - 1];
    let prevLeftStone = $tdElements[stoneIndex - 2];
    let rightStone = $tdElements[stoneIndex + 1];
    let nextRightStone = $tdElements[stoneIndex + 2];
    // 黒白"黒"
    if(turn === isBlackTurn){
      turnStone = blackStone;
    } else {
      turnStone = whiteStone;
    }
    if(leftStone.textContent != turnStone) {
      if(prevLeftStone.textContent == turnStone){
        leftStone.textContent = turnStone;
      }
    }
    // "黒"黒白
    if(turn === isBlackTurn){
      turnStone = blackStone;
    } else {
      turnStone = whiteStone;
    }
    if(rightStone.textContent != turnStone) {
      if(nextRightStone.textContent == turnStone){
        rightStone.textContent = turnStone;
      }
    }

  }

  // クリックイベント
  for (let i = 0;i < $tdElements.length;i++) {
    $tdElements[i].addEventListener('click',function(){
      stoneIndex = boardElements.indexOf(this);
      if(turn === isBlackTurn){
        this.textContent = blackStone;
        $changeColor(this);
        turn = isWhiteTurn;
      } else {
        this.textContent = whiteStone;
        $changeColor(this);
        turn = isBlackTurn;
      }
    })
  }






}