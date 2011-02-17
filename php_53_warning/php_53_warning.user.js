// ==UserScript==
// @name           PHP 5.3 warning
// @namespace      PHP
// @description    Display a red background to warn when function exists from PHP 5.3 only
// @include        http://www.php.net/manual/*
// ==/UserScript==

if (document.evaluate('count(//p[contains(text(), "5.3.0")])', document, null, XPathResult.NUMBER_TYPE, null).numberValue > 0)
{
    GM_addStyle('div.refsect1 {background-color: #FF5555;}');
}

