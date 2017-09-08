/*** Zen Module: ZEN_Mojo_Plugin_dojoPageManager ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/dojoPageManager'] = '_ZEN_Mojo_Plugin_dojoPageManager';
self._ZEN_Mojo_Plugin_dojoPageManager = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_dojoPageManager__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_dojoPageManager__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager__init) ?zenMaster._ZEN_Mojo_Plugin_basePageManager__init(o,index,id):_ZEN_Mojo_Plugin_basePageManager__init(o,index,id);
	o.bodyClass = 'claro';
	o.onPageShow = '';
	o.pluginName = 'dojoPageManager';
	o.suppressCodeExecution = true;
	o.suppressStopPropagation = true;
	o.version = '1.0.1';
}
function _ZEN_Mojo_Plugin_dojoPageManager_serialize(set,s)
{
	var o = this;s[0]='1078373540';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.bodyClass;s[8]=set.serializeList(o,o.helperPlugins,true,'helperPlugins');s[9]=o.onPageShow;s[10]=o.onupdate;s[11]=o.pluginName;s[12]=o.renderFlag;s[13]=(o.suppressCodeExecution?1:0);s[14]=(o.suppressRender?1:0);s[15]=(o.suppressStopPropagation?1:0);s[16]=o.tuple;s[17]=o.version;s[18]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_dojoPageManager_getSettings(s)
{
	s['name'] = 'string';
	s['bodyClass'] = 'string';
	s['onPageShow'] = 'eventHandler';
	s['pluginName'] = 'string';
	s['suppressCodeExecution'] = 'string';
	s['suppressStopPropagation'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_dojoPageManager_addTabWithDocumentView = function(docView,tabKey,tabId,tabTitle,newDocView) {
var layoutItem = docView.getItemByKey(tabKey);
var tab = layoutItem.$dojoItem;
if (layoutItem.$dojoType != 'dijit/layout/TabContainer') {
return;
}
require(["dijit/layout/TabContainer", "dijit/layout/ContentPane", "dojo/domReady!"], function(TabContainer, ContentPane){
var cp1 = new ContentPane({
title: tabTitle,
closable:true,
selected:true,
content: '<div class="" id="'+newDocView.id+'" zen="'+newDocView.index+'"></div>',
style:'width:100%;height:100%;'
});
tab.addChild(cp1);
tab.selectChild(cp1);
tab.startup();
tab.resize();
cp1.resize();
newDocView.$contentPane = cp1;
newDocView.$parentDocView = docView;
cp1.$plugin = newDocView.getPluginByName('dojoPageManager');
cp1.$documentView = newDocView;
var aspect = require("dojo/aspect");
aspect.after(cp1, "_layoutChildren", function() {
this.$plugin.resizeDocumentViewWithinContentPane(this.$documentView,this);
});
newDocView.renderContents();
});
}

self._ZEN_Mojo_Plugin_dojoPageManager_afterParse = function(docView) {
docView.executeCode('',docView.getSourceData(),docView.getLayout());
if (docView.$isEmbedded) {
docView.$parentDocView.getPluginByName('dojoPageManager').resizeDocumentViewWithinContentPane(docView,docView.$contentPane);
}
if (this.onPageShow!='') {
returnValue = zenInvokeCallbackMethod(this.onPageShow,this,'onPageShow','key',docView.getLayoutKey());
}
}

self._ZEN_Mojo_Plugin_dojoPageManager_afterRenderDocument = function(docView,displayMode,html) {
document.body.classList.add(zenGet(this.bodyClass,'claro'));
require(["dijit/registry"],function(registry) {
var items = registry.toArray();
for (var i = 0; i < items.length; i++) {
var item = registry.byId(items[i].id);
if (item) {
if (item.id.split('_')[1] == docView.index && item.id.split('_')[2] == docView.currLevel) {
item.destroyRecursive();
}
}
}
});
if (!zenGet(this.$getHTML,false)) {
var panel = docView.getPanelDiv(docView.currLevel);
panel.innerHTML = html.join('');
var types = [];
for (var i=0; i < this.helperPlugins.length; i++) {
if (this.helperPlugins[i].getDojoTypes && typeof this.helperPlugins[i].getDojoTypes == 'function') {
types = types.concat(this.helperPlugins[i].getDojoTypes());
}
}
require(["dojo/parser", "dojo/ready", "dojo/dom","dijit/registry","dojo/aspect"].concat(types),
function(parser, ready, dom){
ready(function(){
parser.parse(dom.byId(docView.getPanelDiv(docView.currLevel).id));
docView.getPluginByName('dojoPageManager').afterParse(docView);
});
});
} else {
this.$HandOverHTML = html.join('');
}
return null;
}

self._ZEN_Mojo_Plugin_dojoPageManager_createDocumentView = function(layoutKey,dataKey,id) {
var mainView = this.$documentView;
var ZENMOJONS = ZENNS + '/mojo'
var newView = zenPage.createComponentNS(ZENMOJONS,'documentView');
newView.id = id;
newView.developerMode = mainView.developerMode;
newView.ongetlayout = mainView.ongetlayout;
newView.ongetdata = mainView.ongetdata;
newView.maxPanels = mainView.maxPanels;
newView.$isEmbedded = true;
newView.setLayoutKey(layoutKey);
newView.setDocumentKey(dataKey);
zenPage.setComponentId(newView,id);
for (var i = 0; i < mainView.plugins.length; i++) {
var plugin = mainView.plugins[i];
var pluginCopy = zenPage.createComponentNS(ZENMOJONS,plugin._type);
newView.plugins.push(pluginCopy);
}
return newView;
}

self._ZEN_Mojo_Plugin_dojoPageManager_injectDocumentViewIntoContentPane = function(documentView,key) {
var cp1 = this.$documentView.getItemByKey(key).$dojoItem;
if (cp1.$documentView) {
console.log('this is already linked!');
var oldDocView = cp1.$documentView;
var registry = require("dijit/registry");
var items = registry.toArray();
for (var i = 0;i < items.length;i++) {
var item = registry.byId(items[i].id);
if (item) {
if (item.id.split('_')[1] == oldDocView.index && item.id.split('_')[2] == oldDocView.currLevel) {
console.log(item.id);
item.destroyRecursive();
}
}
}
}
cp1.$plugin = this;
cp1.$documentView = documentView;
cp1.$key = key;
documentView.$isEmbedded = true;
documentView.$originalPlugin = this;
documentView.$documentView = documentView;
documentView.$parentDocView = documentView;
documentView.$contentPane = cp1;
cp1.set('content','<div class="" id="'+documentView.id+'" zen="'+documentView.index+'"></div>');
var aspect = require("dojo/aspect");
aspect.after(cp1, "_layoutChildren", function() {
this.$plugin.resizeDocumentViewWithinContentPane(this.$documentView,this);
});
documentView.renderContents();
}

self._ZEN_Mojo_Plugin_dojoPageManager_onCheckLibraries = function() {
if (typeof require === 'undefined') {
alert('Dojo library is not loaded correctly. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_dojoPageManager_resizeDocumentViewWithinContentPane = function(documentView,cp) {
documentView.setSize(cp.get('domNode').style.width.split('px')[0],cp.get('domNode').style.height.split('px')[0]);
var layout = documentView._lastGraph;
if (layout && layout.$children) {
for (var i=0; i < layout.$children.length; i++) {
if (layout.$children[i].$dojoItem)  {
layout.$children[i].$dojoItem.resize();
}
}
}
}

self._ZEN_Mojo_Plugin_dojoPageManager_resizeDocumentViewWithinKey = function(documentView,key) {
documentView.setSize(documentView.$originalPlugin.$documentView.getItemByKey(key).$findElement('dojo').style.width.split('px')[0]-1,documentView.$originalPlugin.$documentView.getItemByKey(key).$findElement('dojo').style.height.split('px')[0]-1);
var layout = documentView._lastGraph;
if (layout && layout.$children) {
for (var i=0; i < layout.$children.length; i++) {
if (layout.$children[i].$dojoItem)  {
layout.$children[i].$dojoItem.resize();
}
}
}
}
self._ZEN_Mojo_Plugin_dojoPageManager__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_basePageManager');
	_ZEN_Mojo_Plugin_dojoPageManager.prototype = zenCreate('_ZEN_Mojo_Plugin_basePageManager',-1);
	var p = _ZEN_Mojo_Plugin_dojoPageManager.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_dojoPageManager;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager) ? zenMaster._ZEN_Mojo_Plugin_basePageManager.prototype:_ZEN_Mojo_Plugin_basePageManager.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.dojoPageManager';
	p._type = 'dojoPageManager';
	p.serialize = _ZEN_Mojo_Plugin_dojoPageManager_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_dojoPageManager_getSettings;
	p.addTabWithDocumentView = _ZEN_Mojo_Plugin_dojoPageManager_addTabWithDocumentView;
	p.afterParse = _ZEN_Mojo_Plugin_dojoPageManager_afterParse;
	p.afterRenderDocument = _ZEN_Mojo_Plugin_dojoPageManager_afterRenderDocument;
	p.createDocumentView = _ZEN_Mojo_Plugin_dojoPageManager_createDocumentView;
	p.injectDocumentViewIntoContentPane = _ZEN_Mojo_Plugin_dojoPageManager_injectDocumentViewIntoContentPane;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_dojoPageManager_onCheckLibraries;
	p.resizeDocumentViewWithinContentPane = _ZEN_Mojo_Plugin_dojoPageManager_resizeDocumentViewWithinContentPane;
	p.resizeDocumentViewWithinKey = _ZEN_Mojo_Plugin_dojoPageManager_resizeDocumentViewWithinKey;
}
/* EOF */