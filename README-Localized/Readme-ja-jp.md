Microsoft Graph OneNote API PHP のサンプル README
---------------------------------------------

作成: Microsoft Corporation、2017。現状のまま提供され、保証はいたしません。ここに記載される商標は、商標の所有者の所有物です。

### このサンプルでデモンストレーションを行う API 機能

このサンプルでは、API の以下の点について説明します。その他の資料については、以下のリンクを参照してください。

-	[ユーザーをログインする](https://developer.microsoft.com/ja-jp/graph/docs/authorization/app_authorization)
-	[ユーザーの OneNote ページを GET する](https://developer.microsoft.com/ja-jp/graph/docs/api-reference/beta/api/page_get)
-	[シンプルな HTML を新しい OneNote のクイック ノート ページに POST する](https://developer.microsoft.com/ja-jp/graph/docs/api-reference/beta/api/notes_post_pages)
-	[要求に含まれている、画像データが含まれるマルチパート メッセージを POST する*](http://msdn.microsoft.com/ja-jp/library/office/dn575432.aspx)
-	[画像としてレンダリングされた URL が含まれるページを POST する*](http://msdn.microsoft.com/ja-jp/library/office/dn575431.aspx)
-	[画像としてレンダリングされた HTML が含まれるページを POST する*](http://msdn.microsoft.com/ja-jp/library/office/dn575432.aspx)
-	[レンダリングされ添付された PDF が含まれるページを POST する*](http://msdn.microsoft.com/ja-jp/library/office/dn655137.aspx)

\* OneNote API が Microsoft Graph API に統合される以前の、OneNote API に対するマルチパート POST 要求に関するドキュメントであることを示します。説明されている要求サンプルのドキュメントはこのサンプルの作成時点では有効ですが、今後変更される可能性がありますので注意してください。

### 前提条件

ダウンロードしてインストールし、開発環境に合わせて構成する必要がある**ツールおよびライブラリ**。

PHP サンプルは Web サーバーで実行されます。ハンドシェイクを完了できるよう、クライアント ブラウザーは Web サーバーにアクセスできる必要があります。以下のことを可能にするために、PHP ファイルを必ずインストールします。

-	使用している Web サーバーにインターネットからアクセスできる。
-	Web サーバーに PHP がインストールされていて、cURL パッケージが有効になっている  
-	リダイレクト URL に使用するための、(IP アドレスだけではなく) ホスト名を持つ通常の URL がある。このサンプルを自分のデスクトップから実行する場合は、下の例に示すように、Hosts ファイル (Windows コンピューターの場合は C:\\Windows\\System32\\drivers\\etc、Mac の場合は /private/etc) を変更し、ローカル サーバーの IP アドレスを新しいドメイン名にマッピングする必要があります。![Hosts ファイルを変更し、ローカル サーバーの IP アドレスを新しいドメイン名にマッピングする](images/HostsFile.png)

**アカウント**

-	アプリが Microsoft Azure AD v2.0 エンドポイントを使用して認証を行うことを許可できるよう、開発者は [Microsoft アカウントを所有し、クライアント ID 文字列を取得する](http://msdn.microsoft.com/ja-jp/library/office/dn575426.aspx)必要があります。
-	サンプルのユーザーは、OneNote API がユーザーの OneDrive にページを送信できるよう、Microsoft アカウント(Azure AD と組織 ID または MSA アカウント)が必要です。

### サンプルを登録する

上記のとおり Web サーバーを設定したら、以下の手順を実行します。

1.	Git リポジトリをローカル コンピューター上のフォルダーに複製します。
2.	[Microsoft アプリ登録ページ](https://account.live.com/developers/applications/index)にアクセスします。
3.	独自のクライアント ID、シークレット、およびリダイレクト URI を取得することを強くお勧めします。独自のクライアント ID、クライアント シークレット、リダイレクト URI は[こちら](http://developer.microsoft.com/ja-jp/graph/docs/authorization/auth_register_app_v2)から取得できます。
4.	ローカルで開発する場合は、サンプルではリダイレクト URI として http://localhost:8888/callback.php が使用されます。運用環境では、ホスト型展開環境内のアプリケーションのドメインをポイントするように URI を変更する必要があります。ルート展開 URL が https://onenoteapisamples.com である場合は、下の例に示すように、リダイレクト URL として https://onenoteapisamples.com/callback.php を指定します。この URL は、展開されているリダイレクト URL と完全に一致する必要があります。ルート ドメイン名は一意のものである必要があります。このため、テスト用にドメインを 1 つ使用し、運用環境用に別のドメインを使用する場合、各ドメインについて別々のクライアント ID とシークレットを登録する必要があります。[Specify API settings in the Microsoft Application Registration Portal (Microsoft アプリケーション登録ポータルで API 設定を指定する)](images/OneNoteMSAScreen.png) 
>注:Chrome と Firefox では Cookie を localhost にセットできないため、localhost にリダイレクトするように設定した場合、開発中はこれらのブラウザーでは認証が機能しません。

### サンプルをセットアップする

1.	callback.php と index.php ファイル内の次のプレースホルダーを、アプリ設定ページからの関連値で置き換えます。
	1.	CLIENT\_ID をクライアント ID 値で置き換えます。
	2.	CLIENT\_SECRET をクライアント シークレット値で置き換えます。
	3.	REDIRECT\_URI\_PATH を展開ルート URL の値で置き換えます。展開ルート URL は "http://" とルート ドメイン URL により構成されるため、リダイレクト URL は "http://onenoteapisamples.com/callback.php" のようになり、展開ルート URL は "http://onenoteapisamples.com" となります。 実行時、リダイレクト URL 値は "http://onenoteapisamples.com/callback.php" に解決されます。
2.	サンプル ファイルを Web サーバーのルート ディレクトリに置きます。
3.	ブラウザーを開き、デフォルトの .php ページに移動します。
4.	Microsoft アカウントを使用してログインし、アプリが OneNote ノートブック内にページを作成することを許可します。

### バージョン情報


### バージョン情報

| 日付 | 変更点 |
|--------------|--------------------------------------------------------------------------------|
| 2017 年 5 月 | OneNote リソース用に Microsoft Graph v1.0 ベース URL を利用するように更新。 |
| 2017 年 4 月 | Microsoft Graph API エンドポイントを利用するように更新。 |
| 2014 年 5 月 | 本コード サンプルの最初のパブリック リリース。 |

### 既知の問題

-	このサンプルをホーム ネットワーク上の Web サーバーで実行する場合に固定 IP アドレスと割当済みのドメイン名を持っていない場合、DDNS プロバイダーを使用し、HTTP/S ポートをローカル サーバーに転送する必要がある場合があります。
-	このサンプルの PHP ファイルには、CRLF の行末が含まれています。これらのファイルをエディターで開いて編集する場合は、これらの行末を維持する必要があります。すべてのプラットフォームで CRLF の行末を維持する方法については、「[Dealing with line endings (行末の取り扱い)](https://help.github.com/articles/dealing-with-line-endings#platform-all)」を参照してください。

### その他のリソース

-	[dev.onenote.com](http://dev.onenote.com) デベロッパー センターをご覧ください
-	[StackOverflow (tagged OneNote)](http://go.microsoft.com/fwlink/?LinkID=390182) でご質問を受け付けています
-	Twitter でフォローしてください ([@onenotedev](http://www.twitter.com/onenotedev))
-	[OneNote の開発者ブログ](http://go.microsoft.com/fwlink/?LinkID=390183)をご覧ください
-	[Graph エクスプローラー](https://developer.microsoft.com/ja-jp/graph/graph-explorer)を使用して API をより深く知ってください
-	[API リファレンス](https://developer.microsoft.com/ja-jp/graph/docs/api-reference/beta/resources/notes) ドキュメント
-	[既知の問題](https://developer.microsoft.com/ja-jp/graph/docs/overview/release_notes)
-	Microsoft Graph API の[使用を開始する](https://developer.microsoft.com/ja-jp/graph/docs/get-started/get-started)

このプロジェクトでは、[Microsoft Open Source Code of Conduct (Microsoft オープン ソース倫理規定)](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[Code of Conduct の FAQ (倫理規定の FAQ)](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
