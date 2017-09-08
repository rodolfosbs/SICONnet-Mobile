/*** Zen Module: ZEN_Mojo_Plugin_dojoGridX130Helper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/dojoGridX-1.3.0-Helper'] = '_ZEN_Mojo_Plugin_dojoGridX130Helper';
self._ZEN_Mojo_Plugin_dojoGridX130Helper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_dojoGridX130Helper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'dojoGridX-1.3.0-Helper';
	o.version = '1.0.7';
}
function _ZEN_Mojo_Plugin_dojoGridX130Helper_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_dojoGridX130Helper_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_clone = function(obj) {
if (null == obj || "object" != typeof obj) return obj;
if (obj instanceof Date) {
var copy = new Date();
copy.setTime(obj.getTime());
return copy;
}
if (obj instanceof Array) {
var copy = [];
for (var i = 0, len = obj.length; i < len; i++) {
copy[i] = this.clone(obj[i]);
}
return copy;
}
if (obj instanceof Object) {
var copy = {};
for (var attr in obj) {
if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
}
return copy;
}
throw new Error("Unable to copy obj! Its type isn't supported.");
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = true;
if (zenGet(instance.renderInline,false)) {
instance.$hasBlock = false;
}
instance.$showTitle = false;
instance.$executeCodeBeforeChildren = this.linkDojoItem;
instance.$getDojoItem = function() { return this.$dojoItem; };
instance.$hide = this.hideGrid;
instance.$show = this.showGrid;
var defaultSetValue = function(value,notify) {
this.value = value;
this.$dojoItem.set('value',value);
};
var defaultGetValue = function() {
return this.$dojoItem.get('value');
};
switch (type) {
case '$Gridx' :
instance.$render = this.renderGridx;
instance.$refresh = this.refreshGridx;
instance.$executeCodeBeforeChildren = this.setupGridx;
break;
}
return null;
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_getDojoTypes = function() {
if (typeof this._registeredTypes == 'undefined') {
return [];
}
if (typeof this._registeredTypes[this.$documentView.currLevel] == 'undefined') {
return [];
}
return this._registeredTypes[this.$documentView.currLevel];
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_getFeatures = function() {
return [
{identifier:'$Gridx'}
];
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_hideGrid = function() {
var props = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
dojo.query('#'+this.$makeId('dojo')).style('display','none');
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_linkDojoItem = function() {
var registry = require("dijit/registry");
var item = registry.byId(this.$makeId('dojo'));
this.$dojoItem = item;
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_onCheckLibraries = function() {
if (typeof require === 'undefined') {
alert('Dojo library is not loaded correctly. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_refreshGridx = function() {
var gridx = this.$dojoItem;
if (gridx) {
gridx.model.clearCache();
gridx.body.refresh();
}
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_registerDojoType = function(instance) {
var documentView = instance.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(instance.$type);
if (typeof plugin._registeredTypes == 'undefined') {
plugin._registeredTypes = [];
}
if (typeof plugin._registeredTypes[documentView.currLevel] == 'undefined') {
plugin._registeredTypes[documentView.currLevel] = [];
}
var thisLevel = plugin._registeredTypes[documentView.currLevel];
if (thisLevel.indexOf(instance.$dojoType) == -1) {
thisLevel.push(instance.$dojoType);
}
if (typeof instance.$additionalRequires != 'undefined') {
for (var i = 0; i < instance.$additionalRequires.length; i++) {
thisLevel.push(instance.$additionalRequires[i]);
}
}
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_registerDojoTypeByType = function(type) {
var documentView = this.$documentView;
if (typeof this._registeredTypes == 'undefined') {
this._registeredTypes = [];
}
if (typeof this._registeredTypes[documentView.currLevel] == 'undefined') {
this._registeredTypes[documentView.currLevel] = [];
}
var thisLevel = this._registeredTypes[documentView.currLevel];
if (thisLevel.indexOf(type) == -1) {
thisLevel.push(type);
}
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_renderGridx = function() {
var html = [];
var props = [];
var attributes = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
var hasStore = false;
html.push('<div id="'+this.$makeId('dojo')+'" style="'+zenGet(this.style,'')+'">');
html.push('</div>');
var content = documentView.injectEventHandler(html.join(''),this);
return content;
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_setupGridx = function() {
var instance = this;
var requiredModules = [];
var hasSelectRowModule = false;
var autoHideFilterBar = false;
if (typeof instance.modules != 'undefined') {
for (var i = 0; i < instance.modules.length; i++) {
requiredModules.push(instance.modules[i].moduleClass);
if (instance.modules[i].moduleClass == 'gridx/modules/select/Row') {
hasSelectRowModule = true;
} else if (instance.modules[i].moduleClass == 'gridx/modules/filter/FilterBar') {
autoHideFilterBar = zenGet(instance.modules[i].autoHide,false);
}
}
}
if (typeof instance.barTop != 'undefined') {
for (var i = 0; i < instance.barTop.length; i++) {
requiredModules.push(instance.barTop[i].pluginClass);
}
}
if (typeof instance.barBottom != 'undefined') {
for (var i = 0; i < instance.barBottom.length; i++) {
requiredModules.push(instance.barBottom[i].pluginClass);
}
}
if (!hasSelectRowModule) {
requiredModules.push('gridx/modules/select/Row');
}
require(['gridx/Grid','gridx/core/model/cache/Sync'].concat(requiredModules), function(Grid, Cache) {
var columns = zenGet(instance.columns,[]);
var store = null;
if (zenGet(instance.store,'') !== '') {
var key = zenGet(instance.store,'');
store = instance.$documentView.getItemByKey(key).$getStore();
}
if (!store) return;
var modules = [];
if (typeof instance.modules != 'undefined') {
for (var i = 0; i < instance.modules.length; i++) {
modules.push(instance.$documentView.getPluginByLayoutObjectType(instance.type).clone(instance.modules[i]));
}
}
var barTop = [];
if (typeof instance.barTop != 'undefined') {
barTop = instance.barTop;
}
var barBottom = [];
if (typeof instance.barBottom != 'undefined') {
barBottom = instance.barBottom;
}
if (!instance.$ignoreSelect) {
var eventHandler = function(rowid) {
zenPage._$documentViewId = instance.$documentView.id;
instance.$documentView.onselect(instance.key,rowid);
}
if (!hasSelectRowModule) {
modules.push(
{moduleClass:'gridx/modules/select/Row',onSelected : function(row,rowid) {eventHandler(rowid);},triggerOnCell:true}
);
} else {
for (i = 0; i < modules.length; i++) {
if (modules[i].moduleClass == 'gridx/modules/select/Row') {
modules[i].onSelected = function(row,rowid) {eventHandler(rowid);};
modules[i].triggerOnCell = true;
}
}
}
}
var grid = new Grid({
cacheClass:Cache,structure:columns,store:store,
modules:modules,barTop:barTop,barBottom:barBottom,
headerHidden:zenGet(instance.headerHidden,false)
},instance.$makeId('dojo'));
grid.startup();
if (autoHideFilterBar) {
grid.filterBar.hide();
}
instance.$dojoItem = grid;
});
}

self._ZEN_Mojo_Plugin_dojoGridX130Helper_showGrid = function() {
var props = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
dojo.query('#'+this.$makeId('dojo')).style('display','block');
}
self._ZEN_Mojo_Plugin_dojoGridX130Helper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_dojoGridX130Helper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_dojoGridX130Helper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_dojoGridX130Helper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.dojoGridX130Helper';
	p._type = 'dojoGridX130Helper';
	p.serialize = _ZEN_Mojo_Plugin_dojoGridX130Helper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_dojoGridX130Helper_getSettings;
	p.clone = _ZEN_Mojo_Plugin_dojoGridX130Helper_clone;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_dojoGridX130Helper_createLayoutObjects;
	p.getDojoTypes = _ZEN_Mojo_Plugin_dojoGridX130Helper_getDojoTypes;
	p.getFeatures = _ZEN_Mojo_Plugin_dojoGridX130Helper_getFeatures;
	p.hideGrid = _ZEN_Mojo_Plugin_dojoGridX130Helper_hideGrid;
	p.linkDojoItem = _ZEN_Mojo_Plugin_dojoGridX130Helper_linkDojoItem;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_dojoGridX130Helper_onCheckLibraries;
	p.refreshGridx = _ZEN_Mojo_Plugin_dojoGridX130Helper_refreshGridx;
	p.registerDojoType = _ZEN_Mojo_Plugin_dojoGridX130Helper_registerDojoType;
	p.registerDojoTypeByType = _ZEN_Mojo_Plugin_dojoGridX130Helper_registerDojoTypeByType;
	p.renderGridx = _ZEN_Mojo_Plugin_dojoGridX130Helper_renderGridx;
	p.setupGridx = _ZEN_Mojo_Plugin_dojoGridX130Helper_setupGridx;
	p.showGrid = _ZEN_Mojo_Plugin_dojoGridX130Helper_showGrid;
}
/* EOF */