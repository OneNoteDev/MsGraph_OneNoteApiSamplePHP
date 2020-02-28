Ejemplo Léame de PHP de la API de OneNote en Microsoft Graph
---------------------------------------------

Creado por Microsoft Corporation, 2017. Se proporciona tal cual sin garantía. Las marcas comerciales que se mencionan aquí pertenecen a sus propietarios.

### La funcionalidad de la API que se muestra en este ejemplo

En este ejemplo, se tratan los siguientes aspectos de la API. Puede encontrar documentación adicional en los siguientes vínculos.

-	[Iniciar sesión de usuario](https://developer.microsoft.com/es-es/graph/docs/authorization/app_authorization)
-	[Obtener las páginas de OneNote de un usuario](https://developer.microsoft.com/es-es/graph/docs/api-reference/beta/api/page_get)
-	[Publicar una página HTML simple en una nueva página de notas rápidas de OneNote](https://developer.microsoft.com/es-es/graph/docs/api-reference/beta/api/notes_post_pages)
-	[Publicar mensaje de varias partes con datos de imagen incluidos en la solicitud*](http://msdn.microsoft.com/es-es/library/office/dn575432.aspx)
-	[Publicar página con una URL representada como una imagen*](http://msdn.microsoft.com/es-es/library/office/dn575431.aspx)
-	[Publicar página con HTML representado como una imagen*](http://msdn.microsoft.com/es-es/library/office/dn575432.aspx)
-	[Publicar página con un archivo PDF representado y adjunto*](http://msdn.microsoft.com/es-es/library/office/dn655137.aspx)

\* Indica la documentación de las solicitudes de publicación de varias partes a la API de OneNote antes de su integración en la API de Microsoft Graph. La documentación de los ejemplos de solicitud detallados funciona a partir de la producción de este ejemplo, pero tenga en cuenta que pueden producirse cambios.

### Requisitos previos

**Herramientas y bibliotecas** que tendrá que descargar, instalar y configurar en el entorno de desarrollo.

El ejemplo de PHP se ejecuta en un servidor web. El navegador del cliente debe poder acceder al servidor web para completar el protocolo de enlace. Asegúrese de instalar los archivos PHP para que:

-	El servidor web que está usando sea accesible desde Internet
-	El servidor web tenga PHP instalado, con el paquete cURL activado  
-	Tenga una dirección URL normal con un nombre de host (no solo una dirección IP) para usar para la URL de redireccionamiento. Si lo ejecuta desde su propio escritorio, tendrá que modificar el archivo de hosts (en C:\\Windows\\System32\\drivers\\etc para equipos Windows y /private/etc para Mac) y asignar la dirección IP del servidor local a un nuevo nombre de dominio, como en el ejemplo siguiente. ![Modificar el archivo de hosts y asignar la dirección IP del servidor local a un nuevo nombre de dominio](images/HostsFile.png)

**Cuentas**

-	Como desarrollador, necesitará [tener una cuenta de Microsoft y obtener una cadena de Id. de cliente](http://msdn.microsoft.com/es-es/library/office/dn575426.aspx) para que su aplicación pueda autenticarse con el punto de conexión de Microsoft Azure AD v2.0.
-	Como usuario del ejemplo, necesitará una cuenta de Microsoft (Azure AD/Id. org. o una cuenta MSA) para que la API de OneNote pueda enviar las páginas a OneDrive.

### Registrar el ejemplo

Después de configurar su servidor web descrito anteriormente,....

1.	Clone el repositorio de Git en una carpeta del equipo local.
2.	Vaya a la [página de registro de aplicaciones de Microsoft](https://account.live.com/developers/applications/index).
3.	Es altamente recomendado que obtenga su propio Id. de cliente, secreto de cliente y URI de redireccionamiento. Puede obtener su propio Id. de cliente, secreto de cliente y URI de redireccionamiento. [Aquí](http://developer.microsoft.com/es-es/graph/docs/authorization/auth_register_app_v2)
4.	Para el desarrollo local, el ejemplo usa http://localhost:8888/callback.php como URI de redireccionamiento. Para producción, debe cambiar esta para indicar el dominio de la aplicación en la implementación hospedada. Si la dirección URL de implementación raíz es https://onenoteapisamples.com, especifique https://onenoteapisamples.com/callback.php como la URL de redireccionamiento (como en el ejemplo siguiente). Esta dirección URL debe coincidir exactamente con la URL de redireccionamiento implementado. El nombre de dominio raíz tiene que ser único, por lo que si usa un dominio para pruebas y otro para producción, tendrá que registrar los Id. de cliente y secretos de cliente separados para cada dominio.[Especificar la configuración de API en el Portal de registro de aplicaciones de Microsoft](images/OneNoteMSAScreen.png) 
>Nota: Chrome y Firefox no permiten establecer cookies en localhost y, por lo tanto, la autenticación no funcionará en estos navegadores durante el desarrollo si decide redirigir a localhost.

### Configurar el ejemplo

1.	Reemplace los siguientes marcadores de posición en los archivos callback.php e index.php con los valores asociados de la página Configuración de la aplicación:
	1.	Reemplace CLIENT\_ID por el valor de Id. de cliente.
	2.	Reemplace CLIENT\_SECRET por el valor de secreto de cliente.
	3.	Reemplace REDIRECT\_URI\_PATH por el valor de la dirección URL raíz de la implementación. La dirección URL raíz de la implementación consiste en "http://" más la URL del dominio raíz, por lo que si la URL de redireccionamiento es como http://onenoteapisamples.com/callback.php, la dirección URL raíz de la implementación es "http://onenoteapisamples.com". En tiempo de ejecución, el valor URL de redireccionamiento se resolverá como "http://onenoteapisamples.com/callback.php".
2.	Coloque los archivos de ejemplo en el directorio raíz de su servidor web.
3.	Abra un navegador y vaya a la página .php predeterminada.
4.	Inicie sesión con su cuenta de Microsoft y permita que la aplicación cree páginas en los blocs de notas de OneNote.

### Información de versión


### Información de versión

| Fecha | Modificación |
|--------------|--------------------------------------------------------------------------------|
| mayo de 2017 | Actualizado para utilizar la URL base de Microsoft Graph v1.0 para recursos de OneNote |
| abril de 2017 | Actualizado para utilizar los puntos de conexión de la API de Microsoft Graph. |
| mayo de 2014 | Versión pública inicial para este ejemplo de código. |

### Problemas conocidos

-	Si está ejecutando el ejemplo en un servidor web en una red doméstica, y no tiene una dirección IP fija y un nombre de dominio asignado, es posible que deba usar un proveedor DDNS y, a continuación, reenviar los puertos HTTP/S a su servidor local.
-	Los archivos PHP en este ejemplo contienen finales de línea CRLF. Tendrá que conservar estos finales de línea cuando abra y edite estos archivos en el editor. Consulte [Manejo de finales de línea](https://help.github.com/articles/dealing-with-line-endings#platform-all) para obtener instrucciones sobre cómo conservar los finales de línea CRLF en todas las plataformas.

### Más información

-	Visite el centro para desarrolladores [dev.onenote.com](http://dev.onenote.com)
-	Póngase en contacto con nosotros en [StackOverflow (OneNote etiquetado)](http://go.microsoft.com/fwlink/?LinkID=390182)
-	Síganos en [Twitter @onenotedev](http://www.twitter.com/onenotedev)
-	Lea nuestro [Blog para desarrolladores de OneNote](http://go.microsoft.com/fwlink/?LinkID=390183)
-	Pruebe la API usando el [Probador de Graph](https://developer.microsoft.com/es-es/graph/graph-explorer)
-	Documentación de [referencia de API](https://developer.microsoft.com/es-es/graph/docs/api-reference/beta/resources/notes)
-	[Problemas conocidos](https://developer.microsoft.com/es-es/graph/docs/overview/release_notes)
-	[Introducción](https://developer.microsoft.com/es-es/graph/docs/get-started/get-started) a la API de Microsoft Graph

Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
