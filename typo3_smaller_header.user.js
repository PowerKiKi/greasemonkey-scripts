// ==UserScript==
// @name           typo3 smaller header
// @namespace      typo3
// @include        http://forge.typo3.org/*
// ==/UserScript==

GM_addStyle('#header { height: 100px; }'); 
GM_addStyle('#header>#right-area>h1 { padding: 0 0 0 0; }'); 
GM_addStyle('#header-left { padding: 0 0 0 0; }'); 
GM_addStyle('#header>#header-left>#header-menu { padding: 0 0 0 0; font-size: 5pt; }'); 
GM_addStyle('#header>#header-left>#header-menu>a.start  {margin: 0 0 0 0 }');
