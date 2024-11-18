const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

//////////////////////////////////
app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});
//////////////////////////////////
app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});
//////////////////////////////////
app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else if( num==3 ) luck = '吉';
  else if( num==4 ) luck = '小吉';
  else if( num==5 ) luck = '凶';
  else luck = '大凶';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});
//////////////////////////////////
app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ) || 0;
  let total = Number( req.query.total ) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  let judgement = '';
  if (hand == cpu) {
    judgement = '引き分け';
    total ++ ;
  } else if (
    (hand == 'グー' && cpu == 'チョキ') ||
    (hand == 'パー' && cpu == 'グー') ||
    (hand == 'チョキ' && cpu == 'パー')
  ) {
            judgement = '勝ち';
            win ++ ;
            total ++ ;
          }
  else { judgement = '負け';
    total ++ ;
  }
  res.render( 'janken',{hand,cpu,judgement,win,total});
});
//////////////////////////////////
app.get("/win", (req, res) => {
  let hand = req.query.hand;
  let win = Number(req.query.win) || 0;
  let total = Number(req.query.total) || 0;
  console.log({ hand, win, total });

  let cpu = '';
  if (hand === 'グー') {
    cpu = 'チョキ';
    win++;
    total++;
  } else if (hand === 'チョキ') {
    cpu = 'パー';
    win++;
    total++;
  } else if (hand === 'パー') {
    cpu = 'グー';
    win++;
    total++;
  }
  else {
    const doreka = ['グー', 'チョキ', 'パー'];
    cpu = doreka[Math.floor(Math.random() * 3)];
    win++;
    total++;
  }
  const judgement = '勝ち';

  res.render('win',{hand,cpu,judgement,win,total});
});
//////////////////////////////////
app.get("/car", (req, res) => {
  const mon = Math.floor(Math.random() * 3 + 1);
  let mon1, mon2, mon3, mon4;

  if (mon === 1) {
    mon1 = '前方の自転車を追い越そうとしたが､左右にふらついており危険が予測されたので､危険を避けるためやむを得ず警音器を鳴らした｡';
    mon2 = '道路の曲がり角付近では､見通しが効く場合であっても､徐行しなければならない｡';
    mon3 = '信号が青の灯火になっても、前の車が発進しないため、警音器を鳴らして発進を促した。';
    mon4 = '高速道路を走行するときは､ﾀｲﾔの空気圧はやや低めにしておくのがよい｡';
  } else if (mon === 2) {
    mon1 = '後続車に追い越されるときで､相手に追い越しのための十分な余地がないときは､できるだけ左側に寄り､進路をゆずるのがよい｡';
    mon2 = '交通量の多い市街地の道路などでは､前照灯を下向きに切り替えるのがよい｡';
    mon3 = '車を車庫に入れるために歩道を横切る場合は､その直前で減速するとともに歩行者の通行を妨げないようにしなければならない｡';
    mon4 = '狭い坂道で行き違うときは､下りの車が加速がつくので､上りの車がゆずるのがよい｡';
  } else if (mon === 3) {
    mon1 = '運転には思いやりが大事である。';
    mon2 = '交通量の少ない道路回りの安全が確認できるならキャッチボールをしてもよい。';
    mon3 = '赤信号では必ず停車しなければならない。';
    mon4 = '夜は注意して運転する。';
  }

  const answer1 = req.query.q1;
  const answer2 = req.query.q2;
  const answer3 = req.query.q3;
  const answer4 = req.query.q4;

  let judgement;
  if (answer1 === '1' && answer2 === '1' && answer3 === '2' && answer4 === '2') {
    judgement = '合格';
  } else {
    judgement = '不合格';
  }

  res.render('car', { mon1, mon2, mon3, mon4, judgement });
});
//////////////////////////////////
app.listen(8080, () => console.log("Example app listening on port 8080!"));
