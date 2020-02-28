# TS_Number_Guess_Quiz

MDN | 数字当てクイズ

[JavaScriptへの最初のダイブ](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/A_first_splash)

    数字を予想する単純なゲームを作って欲しい。ランダムな 1 から 100 の数字を決めて、プレイヤーに 10 回以内に
    当ててもらうゲームだ。プレイヤーには予想する都度、正解か間違いかを表示する。もしプレイヤーが間違っていれば、
    プレイヤーが予想した数字に応じて、大きすぎるか小さすぎるかを表示する。また、プレイヤーの前回の予想が
    どうだったかも表示する。ゲームはプレイヤーの予想が正しかった場合、もしくは回数の上限に達した場合に終了する。
    ゲームが終了したら、プレイヤーはもう一度プレイ開始できるようにする。

## Link

- [TypeScript + Node.js プロジェクトのはじめかた2019](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
- [eslint, prettier導入](https://ics.media/entry/17030/)
- [typescript ホットリロード](https://ics.media/entry/190325/)

## scripts

``` json
// tsコンパイル && 実行
"dev": "ts-node src/script/index.ts",
// プログラムの変更を検知して実行
"dev:watch": "ts-node-dev --respawn src/script/index.ts",
// 生成されたファイルを削除
"clean": "rimraf dist/*",
// コンパイル　下記で活用
"tsc": "tsc",
// TypeScript -> JavaScript に変換
"build": "npm-run-all clean format tsc",
// 生成されたJavaScriptを実行
"start": "node ."
// コードフォーマット実行
"format": "prettier-eslint --write 'src/**/*.ts'"
```