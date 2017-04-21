<?php
//*********************************************************
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the ""License"");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
//
// THIS CODE IS PROVIDED ON AN  *AS IS* BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS
// OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
// WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR
// PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT.
//
// See the Apache Version 2.0 License for specific language
// governing permissions and limitations under the License.
//*********************************************************
session_start();
if (!isset($_SESSION['csrf_token']))
{
    $_SESSION['csrf_token'] = hash('sha256',rand());
}
//disallow other sites from embedding this page
header("X-Frame-Options: SAMEORIGIN");
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>

    <!-- *************************************************** -->
    <!--This page's OAuth implementation is based on https://github.com/liveservices/LiveSDK/tree/master/Samples/PHP/OauthSample -->
    <!--Please see that page for documentation -->
    <!-- *************************************************** -->

    <title>OneNote Service PHP Sample</title>
    <style>
        <!--

        body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
    color: #00B7FF;
}

button {
    padding: 10px 20px;
    margin-bottom: 10px;
}


        -->
    </style>
    </head>
<body>
<h1>OneNote Service PHP Sample</h1>

<div>
    <div id="meName" class="Name"></div>
    <div id="meImg"></div>
    <div id="signin"></div>
    <div id="OneNoteForm">
        <form method="POST" action="submit.php">
            <br />
            <input type="hidden" name="csrf_token" value="<?php /* Print the automatically generated session ID for CSRF protection */ echo htmlspecialchars($_SESSION['csrf_token']); ?>" />
	        <p>Enter Section Name:</p>
	        <input type="text" name="section" />
	        <br/>
            <button type="submit" name="submit" value="text">Create OneNote Page with Text</button> <br />
            <button type="submit" name="submit" value="textimage">Create OneNote Page with Text and Images</button><br />
            <button type="submit" name="submit" value="html">Create OneNote Page with a Screenshot of HTML</button><br />
            <button type="submit" name="submit" value="url">Create OneNote Page with a Screenshot of a URL</button><br />
            <button type="submit" name="submit" value="file">Create OneNote Page with an Attached and Rendered PDF File</button><br />
            <button type="submit" name="submit" value="getPages">Get Pages (ignores section name, paginated)</button><br />
        </form>

    </div>
</div>
<script src="../dependencies/graph-js-sdk-web.js" type="text/javascript"></script>
<script src="./app-config.js" type="text/javascript"></script>
</body>
</html>
