# React Firebase Chat App

このプロジェクトは、FirebaseのAuthenticationとCloud Firestoreを使用して、Reactで作成されたチャットWebアプリケーションです。

## 概要

このアプリケーションは、Firebase Authenticationを使用してユーザーを認証し、Firebase Cloud Firestoreを使用してメッセージをストアします。ログインしているユーザーは、他のログインしているユーザーとメッセージを交換できます。

## Firebaseの設定
1. [Firebase](https://console.firebase.google.com/)にログインし、新しいFirebaseプロジェクトを作成します。
2. Firebaseのコンソールで、AuthenticationとFirestoreを有効化します。
3. Firebaseコンソールから、Authenticationを使ってログインできるように設定します。このプロジェクトでは、メールアドレスとパスワードを使用してログインするための設定が必要です。
4. Firebaseコンソールから、新しいFirestoreデータベースを作成します。


## プロジェクトのセットアップ
1. このリポジトリをクローンします。
2. ターミナルで、プロジェクトフォルダーに移動します。
3. npm installコマンドを使用して、依存関係をインストールします。
4. 下のコードを参考にfirebase.tsファイルを編集して、Firebaseプロジェクトの設定を更新します。
```firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const FIREBASE_CONFIG = {
  apiKey:"your-api-key",
  appId: "your-app-id",
  authDomain: "your-auth-domain",
  messagingSenderId: "your-sender-id",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
}

const firebaseApp = initializeApp(FIREBASE_CONFIG)

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp)
```

## アプリケーションの実行

1. このリポジトリをクローンします。
2. ターミナルで、プロジェクトフォルダーに移動します。
3. `npm install`コマンドを使用して、依存関係をインストールします。

## インストールコマンド
React: `npx create-react-app your-app-name --template typescript`<br>
React Router: `npm install react-router-dom`<br>
Firebase: `npm install firebase`<br>
Firebase React: `npm install react-firebase-hooks`

