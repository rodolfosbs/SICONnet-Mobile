/*** Zen Module: ZEN_Mojo_Plugin_mojoDefaultPageManager ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/mojoDefaultPageManager'] = '_ZEN_Mojo_Plugin_mojoDefaultPageManager';
self._ZEN_Mojo_Plugin_mojoDefaultPageManager = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_mojoDefaultPageManager__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_mojoDefaultPageManager__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager__init) ?zenMaster._ZEN_Mojo_Plugin_basePageManager__init(o,index,id):_ZEN_Mojo_Plugin_basePageManager__init(o,index,id);
	o.onPageShow = '';
	o.pluginName = 'mojoDefaultPageManager';
	o.version = '1.0.2';
}
function _ZEN_Mojo_Plugin_mojoDefaultPageManager_serialize(set,s)
{
	var o = this;s[0]='4105251506';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=set.serializeList(o,o.helperPlugins,true,'helperPlugins');s[8]=o.onPageShow;s[9]=o.onupdate;s[10]=o.pluginName;s[11]=o.renderFlag;s[12]=(o.suppressCodeExecution?1:0);s[13]=(o.suppressRender?1:0);s[14]=(o.suppressStopPropagation?1:0);s[15]=o.tuple;s[16]=o.version;s[17]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_mojoDefaultPageManager_getSettings(s)
{
	s['name'] = 'string';
	s['onPageShow'] = 'eventHandler';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_mojoDefaultPageManager_afterRenderDocument = function(docView,displayMode,html) {
if (this.onPageShow && (this.onPageShow != '')) {
zenInvokeCallbackMethod(this.onPageShow,this,'onPageShow','layoutkey',this.$documentView.getLayoutKey(),'documentkey',this.$documentView.getDocumentKey());
}
}
self._ZEN_Mojo_Plugin_mojoDefaultPageManager__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_basePageManager');
	_ZEN_Mojo_Plugin_mojoDefaultPageManager.prototype = zenCreate('_ZEN_Mojo_Plugin_basePageManager',-1);
	var p = _ZEN_Mojo_Plugin_mojoDefaultPageManager.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_mojoDefaultPageManager;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager) ? zenMaster._ZEN_Mojo_Plugin_basePageManager.prototype:_ZEN_Mojo_Plugin_basePageManager.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.mojoDefaultPageManager';
	p._type = 'mojoDefaultPageManager';
	p.serialize = _ZEN_Mojo_Plugin_mojoDefaultPageManager_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_mojoDefaultPageManager_getSettings;
	p.afterRenderDocument = _ZEN_Mojo_Plugin_mojoDefaultPageManager_afterRenderDocument;
}
/* EOF */