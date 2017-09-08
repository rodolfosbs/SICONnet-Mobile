/*** Zen Module: ZEN_Mojo_PluginDocumentation_Templates_Data__data ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/data/abstractTemplate'] = '_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate';
self._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Data.abstractTemplate';
	p._type = 'abstractTemplate';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate_ReallyRefreshContents;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/data/home'] = '_ZEN_Mojo_PluginDocumentation_Templates_Data_home';
self._ZEN_Mojo_PluginDocumentation_Templates_Data_home = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Data_home__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_home__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_home_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_home_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_home_onGetContent = function(which,key,criteria) {
return null;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_home_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Data_home__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Data_home.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Data_home.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Data_home;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Data.home';
	p._type = 'home';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Data_home_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Data_home_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Data_home_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Data_home_onGetContent;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/data/listLayoutObject'] = '_ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject';
self._ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_onGetContent = function(providerName,key,criteria) {
var temp = zen('mainView').getDocumentCriteria().className.split('.');
var className = temp[temp.length-1];
className = className + 'Documentation';
var pluginDoc = zenCreateComponent('http://www.intersystems.com/zen/mojo',className);
var documentation = {};
if (pluginDoc) {
documentation = pluginDoc.getDocumentation(criteria.id);
if (!documentation.attributes) {
documentation.attributes = [];
}
for (var i = 0; i < documentation.attributes.length; i++) {
var attribute = documentation.attributes[i];
attribute.typeFilename = 'zenmojo_images/' + attribute.type + '.png';
attribute.hasType = zenGet(attribute.type,'') == '' ? false : true;
}
var compare = function compare(a,b) {
if (a.name < b.name)
return -1;
if (a.name > b.name)
return 1;
return 0;
}
documentation.attributes.sort(compare);
}
return documentation;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Data.listLayoutObject';
	p._type = 'listLayoutObject';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Data_listLayoutObject_onGetContent;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/data/pageManagerDetail'] = '_ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail';
self._ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_onGetContent = function(which,key,criteria) {
return null;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Data.pageManagerDetail';
	p._type = 'pageManagerDetail';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Data_pageManagerDetail_onGetContent;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/data/pluginDetail'] = '_ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail';
self._ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_onGetContent = function(which,key,criteria) {
var plugin = zenCreateComponent('http://www.intersystems.com/zen/mojo',criteria.id);
var features = plugin.getFeatures();
var data = {
main_menu:[
{id:'all',name:'All'}
]
};
var compare = function compare(a,b) {
if (a.identifier < b.identifier)
return -1;
if (a.identifier > b.identifier)
return 1;
return 0;
}
features.sort(compare);
for (var i = 0; i < features.length; i++) {
var object = features[i];
data.main_menu.push({id:object.identifier,name:object.identifier,parent:'all'});
}
return data;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Data_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Data.pluginDetail';
	p._type = 'pluginDetail';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Data_pluginDetail_onGetContent;
}
/* EOF */