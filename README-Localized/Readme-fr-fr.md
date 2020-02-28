LISEZMOI de l’exemple PHP de OneNote API Microsoft Graph – Graphique
---------------------------------------------

Créé par Microsoft Corporation, 2017. Fourni en l’état sans garantie. Les marques mentionnées ici sont la propriété de leurs propriétaires.

### Fonctionnalité de l’API illustrée dans cet exemple

Les aspects suivants de l’API sont décrits dans cet exemple. Vous trouverez des informations supplémentaires via les liens ci-dessous.

-	[Connecter l'utilisateur](https://developer.microsoft.com/fr-fr/graph/docs/authorization/app_authorization)
-	[OBTENIR les pages OneNote d’un utilisateur](https://developer.microsoft.com/fr-fr/graph/docs/api-reference/beta/api/page_get)
-	[PUBLIER du simple HTML dans une nouvelle page OneNote QuickNotes](https://developer.microsoft.com/fr-fr/graph/docs/api-reference/beta/api/notes_post_pages)
-	[PUBLIER un message en plusieurs parties avec des données d’image incluses dans la demande*](http://msdn.microsoft.com/fr-fr/library/office/dn575432.aspx)
-	[PUBLIER une page avec une URL générée comme image*](http://msdn.microsoft.com/fr-fr/library/office/dn575431.aspx)
-	[PUBLIER une page avec du HTML généré comme image*](http://msdn.microsoft.com/fr-fr/library/office/dn575432.aspx)
-	[PUBLIER une page avec un fichier PDF généré et joint*](http://msdn.microsoft.com/fr-fr/library/office/dn655137.aspx)

\* Indique la documentation pour les demandes de publication en plusieurs parties à l’API OneNote avant son intégration dans l’API Microsoft Graph – Graphique. La documentation relative aux exemples de demande décrits s’applique dès la production de cet exemple, mais sachez que des modifications peuvent être apportées prochainement.

### Conditions préalables

**Outils et bibliothèques** que vous devrez télécharger, installer et configurer pour votre environnement de développement.

L’exemple PHP s’exécute sur un serveur Web. Le navigateur client doit pouvoir accéder au serveur Web pour terminer le protocole de transfert. Veillez à installer les fichiers PHP de manière que :

-	Le serveur Web que vous utilisez soit accessible à partir d’Internet
-	PHP soit installé sur le serveur Web, avec le paquet cURL activé  
-	Vous ayez une URL normale avec nom d’hôte (et non une adresse IP uniquement) à utiliser pour l’URL de redirection. Si vous exécutez celle-ci à partir de votre ordinateur de bureau, vous devez modifier le fichier d’hôte (dans C:\\Windows\\System32\\drivers\\etc pour les ordinateurs Windows et /private/etc pour les ordinateurs Mac), puis mapper l’adresse IP de votre serveur local vers un nouveau nom de domaine, comme dans l’exemple suivant. ![Modifiez votre fichier hôte et mappez l’adresse IP de votre serveur local vers un nouveau nom de domaine](images/HostsFile.png)

**Comptes**

-	En tant que développeur, vous devez [disposer d’un compte Microsoft et obtenir une chaîne d’ID client](http://msdn.microsoft.com/fr-fr/library/office/dn575426.aspx) pour votre application puisse s’authentifier avec le point de terminaison Microsoft Azure AD v2.0.
-	En tant qu’utilisateur de l’exemple, vous devez posséder un compte Microsoft (Azure AD/ID d’organisation ou d’un compte MSA) pour que l’API OneNote puisse envoyer les pages vers votre espace OneDrive.

### Inscrire l’exemple

Une fois que vous avez configuré le serveur Web décrit ci-dessus,...

1.	Clonez le référentiel Git dans un dossier sur votre ordinateur local.
2.	Accédez à la [page d’inscription des applications Microsoft](https://account.live.com/developers/applications/index).
3.	Nous vous recommandons vivement de vous procurer votre propre ID client, clé secrète et URI de redirection. Vous pouvez vous procurer l’ID client, la clé secrète client et l’URI de redirection. [ici](http://developer.microsoft.com/fr-fr/graph/docs/authorization/auth_register_app_v2)
4.	Pour le développement local, l’exemple utilise http://localhost:8888/callback.php comme URI de redirection. Pour la production, vous devez modifier ce protocole pour qu'il pointe vers votre domaine d'application sur le déploiement hébergé. Si l’URL du déploiement racine est https://onenoteapisamples.com, alors spécifiez https://onenoteapisamples.com/callback.php comme URL de redirection (comme dans l’exemple suivant). Cette URL doit correspondre exactement à l’URL de redirection déployée. Le nom de domaine racine doit être unique. Par conséquent, si vous utilisez un domaine à des fins de test et un autre pour la production, vous devez inscrire des ID clients distincts et des clés secrètes pour chaque domaine.[Spécifiez les paramètres de l’API dans le portail d’inscription des applications Microsoft](images/OneNoteMSAScreen.png) 
>Remarque : Chrome et Firefox n'autorisent pas l'installation de cookies sur localhost. De ce fait, l'authentification ne fonctionne pas sur ces navigateurs pendant le développement si vous choisissez de vous rediriger vers localhost.

### Configurer l’exemple

1.	Remplacez les espaces réservés suivants dans les fichiers callback.php et index.php avec les valeurs associées à partir de la page Paramètres de l’application :
	1.	Remplacez CLIENT\_ID par la valeur ID client.
	2.	Remplacez CLIENT\_SECRET par la valeur de clé secrète client.
	3.	Remplacez REDIRECT\_URI\_PATH par la valeur de l’URL racine de déploiement. L’URL racine de déploiement se compose de « http:// » et l’URL de domaine racine. Par conséquent, si votre URL de redirection ressemble à http://onenoteapisamples.com/callback.php, l’URL racine de déploiement est « http://onenoteapisamples.com ». Au moment de l’exécution, la valeur de l’URL de redirection correspond à « http://onenoteapisamples.com/callback.php ».
2.	Mettez les fichiers d'exemple dans le répertoire racine de votre serveur web.
3.	Ouvrez un navigateur et accédez à la page .php par défaut.
4.	Connectez-vous à l’aide du compte Microsoft et autorisez l’application à créer des pages dans vos blocs-notes OneNote.

### Informations relatives à la version


### Informations relatives à la version

| Date | Modifier |
|--------------|--------------------------------------------------------------------------------|
| Mai 2017 | Mise à jour pour utiliser l'URL de base de Microsoft Graph – Graphique v1.0 pour les ressources OneNote |
| Avril 2017 | Mise à jour pour utiliser les points de terminaison de l'API de Microsoft Graph. |
| Mai 2014 | Version publique initiale de cet exemple de code. |

### Problèmes connus

-	Si vous exécutez l’exemple sur un serveur Web sur un réseau domestique et que vous n’avez pas d’adresse IP fixe et de nom de domaine attribué, vous devez peut-être utiliser un fournisseur DDNS, puis transférer les ports HTTP/S vers votre serveur local.
-	Dans cet exemple, les fichiers PHP contiennent des fins de ligne CRLF. Vous devez conserver ces fins de ligne lorsque vous ouvrez et modifiez ces fichiers dans votre éditeur. Consultez la rubrique [Traitement des fins de ligne](https://help.github.com/articles/dealing-with-line-endings#platform-all) pour savoir comment conserver les fins de ligne CRLF sur toutes les plateformes.

### Pour en savoir plus

-	Visitez le centre de développement [dev.onenote.com](http://dev.onenote.com)
-	Contactez-nous sur [StackOverflow (avec la balise OneNote)](http://go.microsoft.com/fwlink/?LinkID=390182)
-	Suivez-nous sur [Twitter @onenotedev](http://www.twitter.com/onenotedev)
-	Lisez notre [blog de OneNote pour les développeurs](http://go.microsoft.com/fwlink/?LinkID=390183)
-	Explorez l’API à l’aide de l’[Afficheur Graph – Graphique](https://developer.microsoft.com/fr-fr/graph/graph-explorer)
-	Documentation de [référence d’API](https://developer.microsoft.com/fr-fr/graph/docs/api-reference/beta/resources/notes)
-	[Problèmes connus](https://developer.microsoft.com/fr-fr/graph/docs/overview/release_notes)
-	[Prise en main](https://developer.microsoft.com/fr-fr/graph/docs/get-started/get-started) de l’API Microsoft Graph

Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
