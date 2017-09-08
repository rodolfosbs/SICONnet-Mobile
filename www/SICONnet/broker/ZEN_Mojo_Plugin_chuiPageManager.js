/*** Zen Module: ZEN_Mojo_Plugin_chuiPageManager ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/chuiPageManager'] = '_ZEN_Mojo_Plugin_chuiPageManager';
self._ZEN_Mojo_Plugin_chuiPageManager = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_chuiPageManager__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_chuiPageManager__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager__init) ?zenMaster._ZEN_Mojo_Plugin_basePageManager__init(o,index,id):_ZEN_Mojo_Plugin_basePageManager__init(o,index,id);
	o.onPageShow = '';
	o.pluginName = 'chuiPageManager';
	o.suppressRender = true;
	o.version = '0.5.3';
}
function _ZEN_Mojo_Plugin_chuiPageManager_serialize(set,s)
{
	var o = this;s[0]='4105251506';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=set.serializeList(o,o.helperPlugins,true,'helperPlugins');s[8]=o.onPageShow;s[9]=o.onupdate;s[10]=o.pluginName;s[11]=o.renderFlag;s[12]=(o.suppressCodeExecution?1:0);s[13]=(o.suppressRender?1:0);s[14]=(o.suppressStopPropagation?1:0);s[15]=o.tuple;s[16]=o.version;s[17]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_chuiPageManager_getSettings(s)
{
	s['name'] = 'string';
	s['onPageShow'] = 'eventHandler';
	s['pluginName'] = 'string';
	s['suppressRender'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_chuiPageManager_afterPopDocument = function(docView,render) {
if (zenGet(render,false)) {
docView._layout[docView.currLevel] = null;
docView.renderDocument();
} else {
var pageId = '#page'+docView.currLevel;
var nextpageId = 'page'+(docView.currLevel+1);
var plugin = this;
$(pageId).on('navigationend', function() {
if (plugin.onPageShow && (plugin.onPageShow != '')) {
zenInvokeCallbackMethod(plugin.onPageShow,plugin,'onPageShow','layoutkey',docView.getLayoutKey(),'documentkey',docView.getDocumentKey());
}
})
$.UIGoToArticle(pageId);
var article = document.getElementById(nextpageId);
if (article) {
var doc = article.parentNode;
doc.parentNode.removeChild(doc);
}
}
}

self._ZEN_Mojo_Plugin_chuiPageManager_afterRenderDocument = function(docView,displayMode,html) {
var pageId = 'page'+docView.currLevel;
var panel = docView.getPanelDiv(docView.currLevel);
var body = document.body;
var article = document.getElementById(pageId);
if (article) {
var doc = article.parentNode;
doc.parentNode.removeChild(doc);
body.innerHTML = body.innerHTML + html.join('');
var plugin = this;
$('#'+pageId).on('navigationend', function() {
if (plugin.onPageShow && (plugin.onPageShow != '')) {
zenInvokeCallbackMethod(plugin.onPageShow,plugin,'onPageShow','layoutkey',docView.getLayoutKey(),'documentkey',docView.getDocumentKey());
}
})
} else {
body.innerHTML = body.innerHTML + html.join('');
var plugin = this;
$('#'+pageId).on('navigationend', function() {
if (plugin.onPageShow && (plugin.onPageShow != '')) {
zenInvokeCallbackMethod(plugin.onPageShow,plugin,'onPageShow','layoutkey',docView.getLayoutKey(),'documentkey',docView.getDocumentKey());
}
})
$.UIGoToArticle('#'+pageId);
}
}

self._ZEN_Mojo_Plugin_chuiPageManager_onCheckLibraries = function() {
if (typeof $ === 'undefined') {
alert('jQuery library is not loaded correctly. Check your includes.');
return false;
} else if (typeof $.UIGoToArticle === 'undefined') {
alert('Chocolate Chip UI library is not loaded correctly. Check your includes.');
return false;
}
return true;
}
self._ZEN_Mojo_Plugin_chuiPageManager__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_basePageManager');
	_ZEN_Mojo_Plugin_chuiPageManager.prototype = zenCreate('_ZEN_Mojo_Plugin_basePageManager',-1);
	var p = _ZEN_Mojo_Plugin_chuiPageManager.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_chuiPageManager;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager) ? zenMaster._ZEN_Mojo_Plugin_basePageManager.prototype:_ZEN_Mojo_Plugin_basePageManager.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.chuiPageManager';
	p._type = 'chuiPageManager';
	p.serialize = _ZEN_Mojo_Plugin_chuiPageManager_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_chuiPageManager_getSettings;
	p.afterPopDocument = _ZEN_Mojo_Plugin_chuiPageManager_afterPopDocument;
	p.afterRenderDocument = _ZEN_Mojo_Plugin_chuiPageManager_afterRenderDocument;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_chuiPageManager_onCheckLibraries;
}
/* EOF */