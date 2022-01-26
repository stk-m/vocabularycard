'use strict';
// please do not delete the 'use strict' line above
let wordlist = [
  //["english", "japanese"]
  ["implement", "実装する"],
  ["parentheses", "丸カッコ"],
  ["integers", "整数"],
  ["manipulate", "操作する"],
  ["pseudo-code", "疑似コード"],
  ["execute", "実行する"],
  ["denote", "を示す"],
  ["evoke", "呼び起こす"],
  ["decimal", "10進数"],
  ["precise", "正確"],
  ["compile", "編集する"],
  ["refer to", "参照する"],
  ["cryptography","暗号化"],
  ["configure", "構成、設定"],
  ["invoke", "呼び出す"],
  ["representation", "表現"],
  ["abstraction", "抽象化"],
  ["explicit", "明示的"],
  ["volatile", "変わりやすい、揮発性"],
  ["prompt", "促す"],
  ["iterate", "繰り返す"],
  ["linear", "線形(一次方程式／linear equation)"],
  ["concretely","具体的に"],
  ["jargon", "専門用語"],
  ["hexadecimal", "16進数"],
  ["duplicate", "複製"],
  ["underneath", "下に"],
  ["presumption", "推定"],
  ["allocate", "割り当てる"],
  ["canonicalize", "正規化する"],
  ["retrieve", "取得"],
  ["accumulate", "蓄積する"]
]


document.getElementById('english-button').addEventListener('click', getquestion);
document.getElementById('japanese-button').addEventListener('click', getanswer);
document.getElementById('next').addEventListener('click', rewrite);


let getRandom = function(min, max){
    min = Math.ceil(0);
    max = Math.floor(wordlist.length);
    // console.log(wordlist.length)
    return Math.floor(Math.random() * (max - min ) + min);
};

let thistime;
let eng;
let jpn;

function getquestion() {
  console.log('Button clicked!')
  //英単語をランダムに出力する
  thistime = wordlist[getRandom()];
  let englishWord = thistime[0];
  console.log(thistime);

  eng = document.getElementById("english-box");
  eng.append(`${englishWord}`);
};

function getanswer(){
  // console.log('answer!')
  //和約を出力する
  let japaneseWord = thistime[1];
  jpn = document.getElementById("japanese-box");
  jpn.append(`${japaneseWord}`);

  };


function rewrite() {
  //箱の中身をブランクに書き換える
  console.log('rewrite!')
  eng.innerHTML = " ";
  jpn.innerHTML = " ";
}

