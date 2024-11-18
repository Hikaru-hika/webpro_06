# 「webpro_06」

## このプログラムについて
このプログラムは、Nodeとhtmlを使用したWebアプリケーションで、主な機能として，じゃんけんやおみくじ、運転免許学科試験のような小さなゲームやクイズ機能を提供するものである。app5.jsに各機能のURLURLへの振り分けと処理の内容が書かれており、ユーザーはURLにアクセスするだけでこれらの機能を利用できるようになっている。

## ・起動方法
1. ターミナルでcdコマンドを使用し，webpro_06まで移動
1. 以下のコマンドを実行して必要なパッケージをインストール
```npm install```
1. インストールが完了したら、以下のコマンドで起動
```node app5.js```
## ・Gitでの管理方法
事前に，Githubのアカウントを作成し，アクセストークンを作成する必要がある．
1. ターミナルでcdコマンドを使用し，webpro_06まで移動
1. 以下のコマンドを順番に実行(コメントには変更理由や変更内容を書く)
```git add .```
```git commit -am 'コメント'```
1. 以下のコマンドを実行．(実行する際，Githubのアカウント名とアクセストークンが求められるので，正確に入力する)
```git push```
## ・ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/show.ejs | 2つの挨拶メッセージを表示する画面
views/icon.ejs | 画像を表示する画面
views/luck.ejs | おみくじの結果を表示する画面
views/janken.ejs | じゃんけんの結果と成績を表示する画面
views/win.ejs | じゃんけんの結果と成績を表示する画面
views/car.ejs | 運転免許の学科試験の問題を表示する画面

## 「hello1」
### hello1の機能
hello1は,挨拶メッセージを表示する機能である．
#### 手順
1. app5.js を起動する
1. Webブラウザでhttp://localhost:8080/hello1にアクセスする

## 「hello2」
### hello2の機能
hello1は,挨拶メッセージを表示する機能である．
#### 手順
1. app5.js を起動する
1. Webブラウザでhttp://localhost:8080/hello2にアクセスする

## 「icon」
### iconの機能
iconは，指定した画像を表示する機能である．
#### 手順
1. app5.js を起動する
1. Webブラウザでhttp://localhost:8080/iconにアクセスする

## 「luck」
### luckの機能
luckは，1～6の乱数を生成しておみくじを引き，その結果（大吉，中吉，吉，小吉，凶，大凶）を表示する機能である．
#### 手順
1. app5.js を起動する
1. Webブラウザでhttp://localhost:8080/luckにアクセスする
#### luckのフローチャート
```mermaid
flowchart TD;

start["開始"]
end1["終了"]
if{"1~6の乱数を生成"}
a["大吉"]
b["中吉"]
c["吉"]
d["小吉"]
e["凶"]
f["大凶"]
ejs["luck.ejsに情報を渡す"]

start 
 --> if
if -->|2| b
 --> ejs 
if -->|1| a
 --> ejs 
if -->|3| c
 --> ejs 
if -->|4| d
 --> ejs 
if -->|5| e
 --> ejs 
if -->|6| f
 --> ejs 
  --> end1
```

## 「janken」
### jankenの機能
jankenは，ユーザーがじゃんけんを行い，CPUと勝負する機能である．
また，試合数と勝利数も表示する．
#### 手順
1. app5.js を起動する
1. Webブラウザでhttp://localhost:8080/jankenにアクセスする
1. 自分の手（グー，チョキ，パー）を入力する
1. 『送信』をクリック

#### jankenのフローチャート
```mermaid
flowchart TD;
start["開始"]
end1["終了"]
if{"1~3の乱数を生成"}
gr["グーを選択"]
ch["チョキを選択"]
pa["パーを選択"]
hand{"プレイヤーの手とcpuの手を比較"}
draw["引き分け"]
win["勝ち"]
lose["負け"]
judgement["判定"]
total["試合数と勝利数を更新"]
ejs["janken.ejsに情報を渡す"]
start --> if
if -->|1| gr
if -->|2| ch
if -->|3| pa
gr --> hand
ch --> hand
pa --> hand
hand -->draw
hand -->win
hand -->lose
draw --> judgement
win --> judgement
lose --> judgement
judgement --> total
total --> ejs
ejs --> end1
```

## 「win」
### winの機能
winは，プレイヤーがじゃんけんを行い，CPUと勝負し，試合数と勝利数も表示する機能であるが，プレイヤーが手（グー，チョキ，パー）を選択したあとにCPUが負ける手を選択することで，プレイヤーが絶対に勝利することができる機能である．
#### 手順
1. app5.js を起動する
1. Webブラウザでhttp://localhost:8080/winにアクセスする
1. 自分の手（グー，チョキ，パー）を入力する
1. 『送信』をクリック

#### winのフローチャート
```mermaid
flowchart TD;

s["開始"]
e["終了"]
f{"プレイヤーの手"}
g["グー"]
c["チョキ"]
p["パー"]
b["それ以外"]
h{"プレイヤーの手に
負ける手をcpuが選択"}
u["試合数と勝利数を更新"]
r["win.ejsに情報を渡す"]
x["グー，チョキ，パー
の中からランダムに
cpuが選択"]

s --> f
f --> g
f --> c
f --> p
f --> b
g --> h
c --> h
p --> h
b --> x
x --> u
h --> u
u --> r
r --> e
```

## 「car」
### carの機能
carは，運転免許の学科試験の問題集1~3のいずれかを表示し，ユーザーが回答を入力して，総合的な合否を判定する機能である．
#### 手順
1. app5.js を起動する
1. Webブラウザでhttp://localhost:8080/carにアクセスする
1. 問題に対する回答を入力する
1. 『送信』をクリック

#### carのフローチャート
```mermaid
flowchart TD;
s["開始"]
e["終了"]
m{"1~3から乱数を生成"}
m1["問題セット1"]
m2["問題セット2"]
m3["問題セット3"]
j{"判定"}
a["合格"]
b["不合格"]
r["car.ejsに情報を渡す"]
q1["ユーザーの入力"]
s --> m
m -->|1| m1
m -->|2| m2
m -->|3| m3
m1 --> q1
m2 --> q1
m3 --> q1
q1 --> j
j -->|全問正解| a
j -->|それ以外| b
a --> r
b --> r
r --> e
```