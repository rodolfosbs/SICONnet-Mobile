/*** Zen Module: ZEN_Mojo_Plugin_basePageManager ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/basePageManager'] = '_ZEN_Mojo_Plugin_basePageManager';
self._ZEN_Mojo_Plugin_basePageManager = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_basePageManager__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_basePageManager__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.helperPlugins = new Array();
	o.pluginName = 'basePageManager';
	o.suppressCodeExecution = false;
	o.suppressRender = false;
	o.suppressStopPropagation = false;
	o.version = '0.0.0';
}
function _ZEN_Mojo_Plugin_basePageManager_serialize(set,s)
{
	var o = this;s[0]='2677906992';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=set.serializeList(o,o.helperPlugins,true,'helperPlugins');s[8]=o.onupdate;s[9]=o.pluginName;s[10]=o.renderFlag;s[11]=(o.suppressCodeExecution?1:0);s[12]=(o.suppressRender?1:0);s[13]=(o.suppressStopPropagation?1:0);s[14]=o.tuple;s[15]=o.version;s[16]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_basePageManager_getSettings(s)
{
	s['name'] = 'string';
	s['helperPlugins'] = 'string';
	s['pluginName'] = 'string';
	s['suppressCodeExecution'] = 'string';
	s['suppressRender'] = 'string';
	s['suppressStopPropagation'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_basePageManager_afterPopDocument = function(docView,render) {
return null;
}

self._ZEN_Mojo_Plugin_basePageManager_afterRenderDocument = function(docView,displayMode,html) {
return null;
}

self._ZEN_Mojo_Plugin_basePageManager_checkLibraries = function() {
var success = this.onCheckLibraries();
if (!success) {
alert('Not all libraries for page manager ' + this.pluginName + ' have been loaded correctly!');
}
for (var i=0; i < this.helperPlugins.length; i++) {
var plugin = this.helperPlugins[i];
if (!plugin.onCheckLibraries()) {
alert('Not all libraries for helper plugin ' + plugin.pluginName + ' have been loaded correctly!');
success = false;
}
}
return success;
}

self._ZEN_Mojo_Plugin_basePageManager_getDocumentAttributes = function(docView,displayMode) {
return '';
}

self._ZEN_Mojo_Plugin_basePageManager_getPluginByName = function(pluginName) {
if (this.pluginName == pluginName) {
return this;
}
for (var i=0; i < this.helperPlugins.length; i++) {
if (this.helperPlugins[i].pluginName == pluginName) {
return this.helperPlugins[i];
}
}
return null;
}

self._ZEN_Mojo_Plugin_basePageManager_onCheckLibraries = function() {
return true;
}

self._ZEN_Mojo_Plugin_basePageManager_registerPlugins = function(documentView) {
this.$documentView = documentView;
for (var i=0; i < this.helperPlugins.length; i++) {
this.helperPlugins[i].registerPlugin(documentView,this);
}
documentView.pluginMap = new Array();
documentView.pluginConflicts = new Array();
for (var i=0; i < this.helperPlugins.length; i++) {
var pluginFeatures = this.helperPlugins[i].getFeatures();
for (var j=0; j < pluginFeatures.length; j++) {
if (documentView.pluginMap[pluginFeatures[j].identifier]==undefined) {
documentView.pluginMap[pluginFeatures[j].identifier] = this.helperPlugins[i].pluginName;
} else {
documentView._hasConflicts = true;
if (documentView.pluginConflicts[pluginFeatures[j].identifier]==undefined) {
documentView.pluginConflicts[pluginFeatures[j].identifier] = new Array();
documentView.pluginConflicts[pluginFeatures[j].identifier].push(documentView.pluginMap[pluginFeatures[j].identifier]);
}
documentView.pluginConflicts[pluginFeatures[j].identifier].push(this.helperPlugins[i].pluginName);
}
}
}
}
self._ZEN_Mojo_Plugin_basePageManager__Loader = function() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Mojo_Plugin_basePageManager.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Mojo_Plugin_basePageManager.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_basePageManager;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.basePageManager';
	p._type = 'basePageManager';
	p.serialize = _ZEN_Mojo_Plugin_basePageManager_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_basePageManager_getSettings;
	p.afterPopDocument = _ZEN_Mojo_Plugin_basePageManager_afterPopDocument;
	p.afterRenderDocument = _ZEN_Mojo_Plugin_basePageManager_afterRenderDocument;
	p.checkLibraries = _ZEN_Mojo_Plugin_basePageManager_checkLibraries;
	p.getDocumentAttributes = _ZEN_Mojo_Plugin_basePageManager_getDocumentAttributes;
	p.getPluginByName = _ZEN_Mojo_Plugin_basePageManager_getPluginByName;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_basePageManager_onCheckLibraries;
	p.registerPlugins = _ZEN_Mojo_Plugin_basePageManager_registerPlugins;
}
/* EOF */