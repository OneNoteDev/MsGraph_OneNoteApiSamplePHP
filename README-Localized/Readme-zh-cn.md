Microsoft Graph OneNote API PHP 示例自述文件
---------------------------------------------

由 Microsoft Corporation 创建，2017。按原样提供，不做保证。此处提及的商标是其所有者的财产。

### 此示例中演示的 API 功能

本示例介绍了 API 的以下方面。可在下面链接中找到附加文档。

-	[登录用户](https://developer.microsoft.com/zh-cn/graph/docs/authorization/app_authorization)
-	[获取用户的 OneNote 页面](https://developer.microsoft.com/zh-cn/graph/docs/api-reference/beta/api/page_get)
-	[向新 OneNote QuickNotes 页面发布简单的 HTML](https://developer.microsoft.com/zh-cn/graph/docs/api-reference/beta/api/notes_post_pages)
-	[发布含请求中所包含图像数据的多部分消息 \*](http://msdn.microsoft.com/zh-cn/library/office/dn575432.aspx)
-	[发布呈现为图像的 URL*](http://msdn.microsoft.com/zh-cn/library/office/dn575431.aspx)
-	[发布呈现为图像的 HTML*](http://msdn.microsoft.com/zh-cn/library/office/dn575432.aspx)
-	[发布含有呈现和附加的 PDF 文件页面*](http://msdn.microsoft.com/zh-cn/library/office/dn655137.aspx)

\* 表示集成至 Microsoft Graph API 前，针对 OneNote API 的多部份 POST 请求文档。分级式请求示例的文档适用于此示例的生产，但可能会发生更改。

### 先决条件

针对开发环境，需要下载、安装并配置**工具和库**。

PHP 示例在 web 服务器上运行。客户端浏览器需要能够访问 web 服务器以完成握手。请确保安装了 PHP 文件，以便：

-	可以从 Internet 访问 web 服务器
-	web 服务器已安装了 PHP，并启用了 cURL 包  
-	你拥有一个普通 URL，其中含有用于重定向 URL 的主机名（不仅仅是 IP 地址）。如果从桌面运行此操作，需要修改 Hosts 文件（对于Windows 计算机在 C:\\Windows\\System32\\drivers\\etc 中，对于 Mac 在 /private/etc 中），并将本地服务器 IP 地址映射到新域名，具体如下例所示。![修改 Hosts 文件并将本地服务器 IP 地址映射到新域名](images/HostsFile.png)

**帐户**

-	作为开发人员，你将需要 [拥有 Microsoft 帐户，并获取客户端 ID 字符串](http://msdn.microsoft.com/zh-cn/library/office/dn575426.aspx)，以便通过 Microsoft Azure AD v 2.0 端点对应用程序进行身份验证。
-	作为示例用户，需要 Microsoft 帐户（Azure AD/组织 ID 或 MSA 帐户） 才能使 OneNote API 将页面发送到你的 OneDrive。

### 注册示例

设置完上述 web 服务器后....

1.	克隆 Git 存储库至本地计算机的文件夹。
2.	转到 [Microsoft 应用注册页面](https://account.live.com/developers/applications/index)。
3.	强烈建议获取自己的客户端 ID、密码和重新向 URL。你可获取自己的客户端 ID、密码和重新向 URL。[点击这里](http://developer.microsoft.com/zh-cn/graph/docs/authorization/auth_register_app_v2)
4.	对于本地开发，示例使用 http://localhost:8888/callback.php 作为重定向 URI。对于生产，应将其更改为指向托管部署上的应用程序域。如果根部署 URL是 https://onenoteapisamples.com，随后指定 https://onenoteapisamples.com/callback.php 作为重定向 URL（如下列示例所示）。此 URL 必须与部署的重定向 URL 完全匹配。根域名必须唯一，因此如果将一个域用于测试，另一个用于生产，则需要为每个域注册单独的客户端 ID 和密码。[在 Microsoft 应用注册门户中指定 API 设置](images/OneNoteMSAScreen.png) 
>注意：Chrome 和 Firefox 不允许对 localhost 设置 cookie，因此如果选择重定向到 localhost，则在开发过程中无法对这些浏览器进行身份验证。

### 设置示例

1.	使用应用程序设置页面中的相关值替换 callback.php 和 index.php 文件中的下列占位符：
	1.	使用客户端 ID 值替换 CLIENT\_ID。
	2.	使用客户端密码值替换 CLIENT\_SECRET。
	3.	使用部署根 URL 替换 REDIRECT\_URI\_PATH。部署根 URL 由 "http://" 和根域 URL 组成，因此如果重定向像 http://onenoteapisamples.com/callback.php 这样的URL，部署根 URL 为 "http://onenoteapisamples.com"。 运行时，重定向 URL 值将解析为 "http://onenoteapisamples.com/callback.php"。
2.	将示例文件放在 web 服务器的根目录中。
3.	打开浏览器并导航至默认 .php 页面。
4.	使用 Microsoft 账户登录，并允许应用程序在你的 OneNote 笔记本中创建页面。

### 版本信息


### 版本信息

|日期 |更改 |
|--------------|--------------------------------------------------------------------------------|
| 2017年5月 | 更新以利用适用于 OneNote 资源的 Microsoft Graph v 1.0 基准 URL |
| 2017 年 4 月 | 更新以利用 Microsoft Graph API 端点。|
| 2014 年 5 月| 此代码示例的初始公共发布。|

### 已知问题

-	如果正在家庭网络上的 web 服务器上运行示例，且没有固定的 IP 地址和分配的域名，可能需要使用 DDNS 提供商，然后将 HTTP/S 端口转发到本地服务器。
-	此示例中的 PHP 文件包含 CRLF 行结尾。在编辑器中打开和编辑这些文件时，需保留这些行结尾。有关如何在所有平台上保留 CRLF 行结尾的指南，请参阅“[处理行尾](https://help.github.com/articles/dealing-with-line-endings#platform-all)”。

### 了解更多内容

-	访问 [dev.onenote.com](http://dev.onenote.com) 开发中心
-	访问 [StackOverflow（已标记的 OneNote）](http://go.microsoft.com/fwlink/?LinkID=390182)联系我们
-	在 [Twitter @onenotedev](http://www.twitter.com/onenotedev) 中关注我们
-	阅读我们的 [OneNote 开发者博客](http://go.microsoft.com/fwlink/?LinkID=390183)
-	请在 [Graph 浏览器](https://developer.microsoft.com/zh-cn/graph/graph-explorer)中探索 API
-	[API 参考](https://developer.microsoft.com/zh-cn/graph/docs/api-reference/beta/resources/notes)文档
-	[已知问题](https://developer.microsoft.com/zh-cn/graph/docs/overview/release_notes)
-	Microsoft Graph API [入门](https://developer.microsoft.com/zh-cn/graph/docs/get-started/get-started)

此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则常见问题解答](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
