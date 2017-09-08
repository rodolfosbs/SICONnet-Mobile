/*** Zen Module: ZEN_Mojo_PluginDocumentation_Templates_Events__events ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/events/abstractTemplate'] = '_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate';
self._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Events.abstractTemplate';
	p._type = 'abstractTemplate';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate_ReallyRefreshContents;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/events/backImage'] = '_ZEN_Mojo_PluginDocumentation_Templates_Events_backImage';
self._ZEN_Mojo_PluginDocumentation_Templates_Events_backImage = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Events_backImage__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_backImage__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_onselect = function(key,value,docViewId) {
zen(docViewId).popDocument();
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Events_backImage__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Events_backImage.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Events.backImage';
	p._type = 'backImage';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_ReallyRefreshContents;
	p.onselect = _ZEN_Mojo_PluginDocumentation_Templates_Events_backImage_onselect;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/events/layoutObjectMenu'] = '_ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu';
self._ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_onselect = function(key,value,docViewId) {
var docView = zen(docViewId);
var tree = docView.getItemByKey(key);
var store = tree.$dojoItem.model.store;
var item = store.query({id:value})[0];
if (zenGet(item.openTab,true)) {
var tc = zen('mainView').getItemByKey('tabContainer-1').$dojoItem;
var tabIsOpen = false;
if (tc.hasChildren()) {
var openTabs = tc.getChildren();
for (var i = 0; i < openTabs.length; i++) {
if (openTabs[i].title == value) {
tabIsOpen = true;
tc.selectChild(openTabs[i],true);
}
}
}
if (!tabIsOpen) {
var nv = docView.getPluginByName(zenPage._usedDojoDijitPlugin).createDocumentView('listLayoutObject','listLayoutObject','newView_'+value);
nv.setDocumentKey('listLayoutObject',{id:value});
nv.setLayoutKey('listLayoutObject',{id:value});
nv.documentClass = 'embeddedDocument';
docView.getPluginByName(zenPage._usedDojoDijitPlugin).addTabWithDocumentView(docView,'tabContainer-1',1,value,nv);
}
}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Events.layoutObjectMenu';
	p._type = 'layoutObjectMenu';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_ReallyRefreshContents;
	p.onselect = _ZEN_Mojo_PluginDocumentation_Templates_Events_layoutObjectMenu_onselect;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/events/menuHelperPlugins'] = '_ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins';
self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_onselect = function(key,value,docViewId) {
var className = zen(docViewId).getItemByKey('helperplugins-menu-store').$getStore().query({id:value})[0].className;
zen(docViewId).pushDocument('pluginDetail',{id:className + ' ('+ value + ')',className:className},'pluginDetail',{id:value,className:className});
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Events.menuHelperPlugins';
	p._type = 'menuHelperPlugins';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_ReallyRefreshContents;
	p.onselect = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuHelperPlugins_onselect;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/events/menuPageManager'] = '_ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager';
self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_onselect = function(key,value,docViewId) {
var docView = zen(docViewId);
var tree = docView.getItemByKey(key);
var store = tree.$dojoItem.model.store;
var item = store.query({id:value})[0];
if (zenGet(item.openTab,true)) {
var tc = zen('mainView').getItemByKey('tabContainer-1').$dojoItem;
var tabIsOpen = false;
if (tc.hasChildren()) {
var openTabs = tc.getChildren();
for (var i = 0; i < openTabs.length; i++) {
if (openTabs[i].title == value) {
tabIsOpen = true;
tc.selectChild(openTabs[i],true);
}
}
}
if (!tabIsOpen) {
var nv = docView.getPluginByName(zenPage._usedDojoDijitPlugin).createDocumentView('pageManagerDetail','pageManagerDetail','newView_'+value);
nv.setDocumentKey('pageManagerDetail',{id:item.className});
nv.setLayoutKey('pageManagerDetail',{id:item.className});
docView.getPluginByName(zenPage._usedDojoDijitPlugin).addTabWithDocumentView(docView,'tabContainer-1',1,value,nv);
}
}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Events_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Events.menuPageManager';
	p._type = 'menuPageManager';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_ReallyRefreshContents;
	p.onselect = _ZEN_Mojo_PluginDocumentation_Templates_Events_menuPageManager_onselect;
}
/* EOF */