/*** Zen Module: ZEN_Mojo_Plugin_baseHelperPlugin ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/baseHelperPlugin'] = '_ZEN_Mojo_Plugin_baseHelperPlugin';
self._ZEN_Mojo_Plugin_baseHelperPlugin = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_baseHelperPlugin__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_baseHelperPlugin__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.pluginName = 'baseHelperPlugin';
	o.version = '0.0.0';
}
function _ZEN_Mojo_Plugin_baseHelperPlugin_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_baseHelperPlugin_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_baseHelperPlugin_createLayoutObjects = function(type,instance) {
return null;
}

self._ZEN_Mojo_Plugin_baseHelperPlugin_getFeatures = function() {
return [];
}

self._ZEN_Mojo_Plugin_baseHelperPlugin_onCheckLibraries = function() {
return true;
}

self._ZEN_Mojo_Plugin_baseHelperPlugin_registerPlugin = function(documentView,pageManager) {
this.$documentView = documentView;
this.$pageManager = pageManager;
}
self._ZEN_Mojo_Plugin_baseHelperPlugin__Loader = function() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Mojo_Plugin_baseHelperPlugin.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_baseHelperPlugin;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.baseHelperPlugin';
	p._type = 'baseHelperPlugin';
	p.serialize = _ZEN_Mojo_Plugin_baseHelperPlugin_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_baseHelperPlugin_getSettings;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_baseHelperPlugin_createLayoutObjects;
	p.getFeatures = _ZEN_Mojo_Plugin_baseHelperPlugin_getFeatures;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_baseHelperPlugin_onCheckLibraries;
	p.registerPlugin = _ZEN_Mojo_Plugin_baseHelperPlugin_registerPlugin;
}
/* EOF */