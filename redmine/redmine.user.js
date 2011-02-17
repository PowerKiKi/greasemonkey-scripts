// ==UserScript==
// @name           redmine
// @namespace      redmine
// @description    Make deleted text less visible so todo list are much easier to read
// @include        http://www.redmine.org/*
// @include        http://forge.typo3.org/*
// @include        https://support.ecodev.ch/*
// ==/UserScript==

GM_addStyle('del{opacity: 0.2; }');
