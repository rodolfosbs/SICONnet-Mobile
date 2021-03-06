/*** Zen Module: ZEN_Mojo_Component_contentTemplate ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/contentTemplate'] = '_ZEN_Mojo_Component_contentTemplate';
self._ZEN_Mojo_Component_contentTemplate = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_contentTemplate__init(this,index,id);}
}

self._ZEN_Mojo_Component_contentTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.visible = false;
}
function _ZEN_Mojo_Component_contentTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_Component_contentTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_contentTemplate_getContent = function(providerName,key,criteria) {
return this.onGetContent(providerName,key,criteria);
}

self._ZEN_Mojo_Component_contentTemplate_onGetContent = function(providerName,key,criteria) {
return null;
}

self._ZEN_Mojo_Component_contentTemplate_onLoadTemplate = function() {
}

self._ZEN_Mojo_Component_contentTemplate_onchange = function(key,value,final,docViewId) {
}

self._ZEN_Mojo_Component_contentTemplate_onevent = function(eventType,key,value,docViewId) {
}

self._ZEN_Mojo_Component_contentTemplate_onselect = function(key,value,docViewId) {
}

self._ZEN_Mojo_Component_contentTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_Component_contentTemplate__Loader = function() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Mojo_Component_contentTemplate.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Mojo_Component_contentTemplate.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_contentTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.contentTemplate';
	p._type = 'contentTemplate';
	p.serialize = _ZEN_Mojo_Component_contentTemplate_serialize;
	p.getSettings = _ZEN_Mojo_Component_contentTemplate_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_contentTemplate_ReallyRefreshContents;
	p.getContent = _ZEN_Mojo_Component_contentTemplate_getContent;
	p.onGetContent = _ZEN_Mojo_Component_contentTemplate_onGetContent;
	p.onLoadTemplate = _ZEN_Mojo_Component_contentTemplate_onLoadTemplate;
	p.onchange = _ZEN_Mojo_Component_contentTemplate_onchange;
	p.onevent = _ZEN_Mojo_Component_contentTemplate_onevent;
	p.onselect = _ZEN_Mojo_Component_contentTemplate_onselect;
}
/* EOF */