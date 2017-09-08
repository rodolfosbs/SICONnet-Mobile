/*** Zen Module: ZEN_Mojo_Plugin_jQM145PageManager ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/jQM-1.4.5-PageManager'] = '_ZEN_Mojo_Plugin_jQM145PageManager';
self._ZEN_Mojo_Plugin_jQM145PageManager = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_jQM145PageManager__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_jQM145PageManager__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager__init) ?zenMaster._ZEN_Mojo_Plugin_basePageManager__init(o,index,id):_ZEN_Mojo_Plugin_basePageManager__init(o,index,id);
	o.isInTransition = false;
	o.jQueryAnimation = 'slide';
	o.jQueryTheme = 'a';
	o.onPageShow = '';
	o.pluginName = 'jQM-1.4.5-PageManager';
	o.suppressRender = true;
	o.suppressStopPropagation = true;
	o.version = '1.0.1';
}
function _ZEN_Mojo_Plugin_jQM145PageManager_serialize(set,s)
{
	var o = this;s[0]='43718040';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=set.serializeList(o,o.helperPlugins,true,'helperPlugins');s[8]=(o.isInTransition?1:0);s[9]=o.jQueryAnimation;s[10]=o.jQueryTheme;s[11]=o.onPageShow;s[12]=o.onupdate;s[13]=o.pluginName;s[14]=o.renderFlag;s[15]=(o.suppressCodeExecution?1:0);s[16]=(o.suppressRender?1:0);s[17]=(o.suppressStopPropagation?1:0);s[18]=o.tuple;s[19]=o.version;s[20]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_jQM145PageManager_getSettings(s)
{
	s['name'] = 'string';
	s['isInTransition'] = 'boolean';
	s['jQueryAnimation'] = 'string';
	s['jQueryTheme'] = 'string';
	s['onPageShow'] = 'eventHandler';
	s['pluginName'] = 'string';
	s['suppressRender'] = 'string';
	s['suppressStopPropagation'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_jQM145PageManager_afterPopDocument = function(docView,render) {
if (zenGet(render,false)) {
this.$jQMNextAnimationReverse = true;
docView._layout[docView.currLevel] = null;
if ($($.mobile.pageContainer[0]) && $($.mobile.pageContainer[0].children["pagelayout"+docView.currLevel])) {
$($.mobile.pageContainer[0].children["pagelayout"+docView.currLevel]).remove();
}
docView.renderDocument();
} else {
var pageId = '#page'+docView.displayMode+docView.currLevel;
var page = $(pageId);
this.isInTransition = true;
$.mobile.changePage(page,{transition: this.jQueryAnimation, reverse:true});
}
}

self._ZEN_Mojo_Plugin_jQM145PageManager_afterRenderDocument = function(docView,displayMode,html) {
var pageId = 'page'+displayMode+docView.currLevel;
/*
if($('#'+pageId).length > 0) {
setTimeout(function(pageId){
$('#'+pageId).remove();
},2000,[pageId]);
}
*/
var newPage = $(html.join(''));
newPage.appendTo( $.mobile.pageContainer );
newPage.page();
if (!this._pageshowAdded) {
this._pageshowAdded = true;
$(document).on('pageshow', 'div', function(event, data){
var doc = zenPage.getComponent(this.getAttribute('parentindex'));
var plugin = doc.pageManager;
var levelTarget = event.target.id.replace(/\D/g,'');
var levelSource = data.prevPage[0].id.replace(/\D/g,'');
var isTargetLayout = event.target.id.indexOf('layout') > -1;
var isSourceLayout = data.prevPage[0].id.indexOf('layout') > -1;
if (isTargetLayout && !isSourceLayout) {
$('#pagedata'+parseInt(levelSource)).remove();
}
if (levelTarget <= levelSource && doc.displayMode == 'layout') {
$('#page'+doc.displayMode+parseInt(levelSource)).remove();
if (levelSource - levelTarget > 1) {
for (var i = (parseInt(levelTarget) + 1); i < levelSource; i++) {
console.log("removing " + i);
$('#page'+doc.displayMode+i).remove();
}
}
}
if (doc && plugin.isInTransition) {
plugin.isInTransition = false;
if (plugin.onPageShow && (plugin.onPageShow != '')) {
zenInvokeCallbackMethod(plugin.onPageShow,plugin,'onPageShow','layoutkey',doc.getLayoutKey(),'documentkey',doc.getDocumentKey());
}
}
});
$(document).on('pagebeforechange', function(e,ob) {
if(ob.toPage && (typeof ob.toPage==="string")) {
var doc = zenPage.getComponent($('div[parentindex]')[0].getAttribute('parentindex'));
if (ob.toPage.split('#pagelayout')[1] < doc.currLevel) {
if (doc.currLevel > 0) {
e.preventDefault();
doc.popDocument();
}
}
} else {
if (ob.toPage[0].id == '') {
e.preventDefault();
}
}
});
}
if (!this.hiddenArray || !this.hiddenArray.length) {this.hiddenArray = [];}
for (var i=0; i<this.hiddenArray.length; i++) {
this.hiddenArray[i].$hide();
}
this.isInTransition = true;
$.mobile.changePage(newPage,{transition: this.jQueryAnimation, reverse:zenGet(this.$jQMNextAnimationReverse,false)});
this.$jQMNextAnimationReverse = false;
}

self._ZEN_Mojo_Plugin_jQM145PageManager_getDocumentAttributes = function(docView,displayMode) {
var pageId = 'page'+displayMode+docView.currLevel;
return 'data-role="page" data-url="'+pageId+'" parentindex="'+docView.index+'" data-theme="'+this.jQueryTheme+'" id="'+pageId+'"';
}

self._ZEN_Mojo_Plugin_jQM145PageManager_onCheckLibraries = function() {
if (typeof $ === 'undefined') {
alert('jQuery library is not loaded correctly. Check your includes.');
return false;
} else if (typeof $.mobile === 'undefined') {
alert('jQueryMobile library is not loaded correctly. Check your includes.');
return false;
}
return true;
}
self._ZEN_Mojo_Plugin_jQM145PageManager__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_basePageManager');
	_ZEN_Mojo_Plugin_jQM145PageManager.prototype = zenCreate('_ZEN_Mojo_Plugin_basePageManager',-1);
	var p = _ZEN_Mojo_Plugin_jQM145PageManager.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_jQM145PageManager;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager) ? zenMaster._ZEN_Mojo_Plugin_basePageManager.prototype:_ZEN_Mojo_Plugin_basePageManager.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.jQM145PageManager';
	p._type = 'jQM145PageManager';
	p.serialize = _ZEN_Mojo_Plugin_jQM145PageManager_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_jQM145PageManager_getSettings;
	p.afterPopDocument = _ZEN_Mojo_Plugin_jQM145PageManager_afterPopDocument;
	p.afterRenderDocument = _ZEN_Mojo_Plugin_jQM145PageManager_afterRenderDocument;
	p.getDocumentAttributes = _ZEN_Mojo_Plugin_jQM145PageManager_getDocumentAttributes;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_jQM145PageManager_onCheckLibraries;
}
/* EOF */