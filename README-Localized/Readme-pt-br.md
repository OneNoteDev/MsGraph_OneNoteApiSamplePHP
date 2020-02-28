Exemplo de API do Microsoft Graph OneNote em PHP LEIAME
---------------------------------------------

Criado pela Microsoft Corporation, 2017. Fornecido como está sem garantia. As marcas comerciais mencionadas aqui pertencem aos proprietários.

### Funcionalidade da API demonstrada neste exemplo

Os seguintes aspectos da API são abordados nesta amostra. Para saber mais, confira os links abaixo.

-	[Log in do usuário](https://developer.microsoft.com/pt-br/graph/docs/authorization/app_authorization)
-	[OBTER páginas do OneNote do usuário](https://developer.microsoft.com/pt-br/graph/docs/api-reference/beta/api/page_get)
-	[POSTAR HTML simples em uma nova página do OneNote QuickNotes](https://developer.microsoft.com/pt-br/graph/docs/api-reference/beta/api/notes_post_pages)
-	[POSTAR mensagem de várias partes com dados de imagem incluídos na solicitação \*](http://msdn.microsoft.com/pt-br/library/office/dn575432.aspx)
-	[Página de POSTAGEM com uma URL processada como uma imagem \*](http://msdn.microsoft.com/pt-br/library/office/dn575431.aspx)
-	[Página de POSTAGEM com uma HTML processada como uma imagem \*](http://msdn.microsoft.com/pt-br/library/office/dn575432.aspx)
-	[Página de POSTAGEM com um arquivo PDF renderizado e anexado \*](http://msdn.microsoft.com/pt-br/library/office/dn655137.aspx)

\* Indica a documentação para as solicitações de POSTAGEM de várias partes da API do OneNote antes de sua integração com a API do Microsoft Graph. A documentação dos exemplos de solicitação contornadas funciona a partir da produção desse exemplo, mas lembre-se de que as alterações podem ser futuras.

### Pré-requisitos

Será necessário baixar, instalar e configurar**Ferramentas e Bibliotecas** para o seu ambiente de desenvolvimento.

A amostra de PHP é executada em um servidor da Web. O navegador cliente deve ser capaz de acessar o servidor Web para concluir o handshake. Certifique-se de instalar os arquivos PHP para que:

-	O servidor Web que você está usando possa ser acessado na Internet
-	O servidor Web tem o PHP instalado, com o pacote ondulado habilitado  
-	Você tem uma URL normal com o nome do host (não apenas um endereço IP) para usar para a URL de redirecionamento. Se você executar isso a partir da sua própria área de trabalho, precisará modificar o seu arquivo hosts (no C:\\Windows\\System32\\drivers\\etc para computadores Windows e /private/etc para Macs) e mapear o endereço IP do servidor local para um novo nome de domínio, como no exemplo a seguir. ![Modificar o seu arquivo hosts e mapear o endereço IP do servidor local para um novo nome de domínio](images/HostsFile.png)

**Contas**

-	Como desenvolvedor, você precisará [ter uma conta da Microsoft e obter uma cadeia de caracteres de ID do cliente](http://msdn.microsoft.com/pt-br/library/office/dn575426.aspx), para que seu aplicativo possa ser autenticado com o ponto de extremidade do Microsoft Azure AD v2.0.
-	Como usuário do exemplo, você precisará de uma conta da Microsoft (ID do Azure AD/Org ou uma conta do MSA) para que a API do OneNote possa enviar as páginas para o OneDrive.

### Registrar a amostra

Depois de configurar seu servidor Web descrito acima,....

1.	Clonar o repositório Git para uma pasta em seu computador local.
2.	Visite a [página de registro do aplicativo da Microsoft](https://account.live.com/developers/applications/index).
3.	É altamente recomendável que você obtenha seu próprio ID de cliente, segredo e URI de redirecionamento. Você pode obter sua ID de cliente, o segredo do cliente e o URI de redirecionamento. [aqui](http://developer.microsoft.com/pt-br/graph/docs/authorization/auth_register_app_v2)
4.	Para o desenvolvimento local, o exemplo usa o http://localhost:8888/callback.php como URI de redirecionamento. Para produção, você deve alterar isso para apontar para o domínio do aplicativo na implantação hospedada. Se a URL de implantação raiz for https://onenoteapisamples.com, especifique https://onenoteapisamples.com/callback.php como a URL de redirecionamento (como no exemplo a seguir). Essa URL deve corresponder exatamente à URL de redirecionamento implantada. O nome de domínio raiz deve ser exclusivo, portanto, se você usar um domínio para teste e outro para produção, será necessário registrar identificações de cliente e segredos separados para cada domínio.[especificar as configurações da API no portal de registro de aplicativo da Microsoft](images/OneNoteMSAScreen.png) 
>Observação: O Chrome e o Firefox não permitem que os cookies sejam configurados no localhost, e a autenticação não funcionará nesses navegadores durante o desenvolvimento, caso você opte por redirecionar para o localhost.

### Configurar a amostra

1.	Substitua os seguintes espaços reservados nos arquivos callback.php e index.php pelos valores associados na página configurações do aplicativo:
	1.	Substitua CLIENT\_ID pelo valor ID do cliente.
	2.	Substitua CLIENT\_SECRET pelo valor de segredo do cliente.
	3.	Substituir REDIRECT\_URI\_PATH pelo valor da URL raiz da implantação. A URL raiz da implantação consiste em "http://", além da URL do domínio raiz, portanto, se a URL de redirecionamento for igual a http://onenoteapisamples.com/callback.php, a URL raiz da implantação será "http://onenoteapisamples.com". Em tempo de execução, o valor da URL de redirecionamento será resolvido para "http://onenoteapisamples.com/callback.php".
2.	Coloque os arquivos de exemplo no diretório raiz do seu servidor da Web.
3.	Abra um navegador e navegue até a página padrão .php.
4.	Faça logon usando sua conta da Microsoft e permita que o aplicativo crie páginas em seus blocos de anotações do OneNote.

### Informações de versão


### Informações de versão

| Data | Alterar |
|------------|--------------------------------------------------------------------------------|
| Maio de 2017 | Atualizado para usar o Microsoft Graph v1.0 URL base para recursos do OneNote |
| Abril de 2017 | Atualizado para utilizar os pontos de extremidade de API do Microsoft Graph. |
| Maio de 2014 | Versão pública inicial deste exemplo de código. |

### Problemas conhecidos

-	Se você estiver executando o exemplo em um servidor da Web em uma rede doméstica e não tiver um endereço IP fixo e um nome de domínio atribuídos, talvez seja necessário usar um provedor de DDNS e encaminhar as portas HTTP/S para o servidor local.
-	Os arquivos PHP neste exemplo contêm CRLF terminações de linha. Será preciso manter essas terminações de linha ao abrir e editar esses arquivos em seu editor. Confira [lidando com terminações de linha](https://help.github.com/articles/dealing-with-line-endings#platform-all) para obter orientação sobre como reter as terminações de linha CRLF em todas as plataformas.

### Saiba mais

-	Visite o centro de desenvolvimento do[dev.onenote.com](http://dev.onenote.com)
-	Fale conosco na [StackOverflow (marcado OneNote)](http://go.microsoft.com/fwlink/?LinkID=390182)
-	Siga-nos em [@onenotedev Twitter](http://www.twitter.com/onenotedev)
-	Leia nosso blog [OneNote Developer](http://go.microsoft.com/fwlink/?LinkID=390183)
-	Explore as API usando o [Explorador do Graph](https://developer.microsoft.com/pt-br/graph/graph-explorer)
-	Documentação de [referência da API](https://developer.microsoft.com/pt-br/graph/docs/api-reference/beta/resources/notes)
-	[Problemas conhecidos](https://developer.microsoft.com/pt-br/graph/docs/overview/release_notes)
-	[Introdução](https://developer.microsoft.com/pt-br/graph/docs/get-started/get-started) com a API do Microsoft Graph

Este projeto adotou o [Código de conduta do código-fonte da Microsoft Open](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira as [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou entre em contato pelo [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
