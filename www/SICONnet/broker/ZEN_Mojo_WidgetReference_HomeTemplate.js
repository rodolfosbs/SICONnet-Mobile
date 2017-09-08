/*** Zen Module: ZEN_Mojo_WidgetReference_HomeTemplate ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/HomeTemplate'] = '_ZEN_Mojo_WidgetReference_HomeTemplate';
self._ZEN_Mojo_WidgetReference_HomeTemplate = function(index,id) {
	if (index>=0) {_ZEN_Mojo_WidgetReference_HomeTemplate__init(this,index,id);}
}

self._ZEN_Mojo_WidgetReference_HomeTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function _ZEN_Mojo_WidgetReference_HomeTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_WidgetReference_HomeTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_WidgetReference_HomeTemplate_getLayout = function(key,criteria) {
var layout = {};
switch(key) {
case 'home' :
layout = {
children:[
{type:'$header',caption:'Widget Reference Start Page'},
{type:'$div',style:'width:80%;padding-left:10%;padding-top:10%;',children:[
{type:'$listview',inset:true,filter:true,value:'=[classList]',children:[
{type:'$listviewitem',key:'widgetReferenceLink',value:'=[link]',label:'=[pageName]',clickable:true,labelNoWrapper:false},
]}
]}
]
};
break;
}
return layout;
}

self._ZEN_Mojo_WidgetReference_HomeTemplate_onGetContent = function(providerName,key,criteria) {
switch (providerName)
{
case 'layout':
return this.getLayout(key,criteria);
}
return null;
}

self._ZEN_Mojo_WidgetReference_HomeTemplate_onchange = function(key,value,final,docViewId) {
console.log('change ' + key + ' to ' + value);
var view = zen(docViewId);
switch(key) {
}
}

self._ZEN_Mojo_WidgetReference_HomeTemplate_onselect = function(key,value,docViewId) {
console.log(key+': '+value);
var view = zen(docViewId);
var realKey = key.split(':')[0];
switch(realKey) {
case 'widgetReferenceLink':
window.open('./'+value, '_blank');
break;
}
}

self._ZEN_Mojo_WidgetReference_HomeTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_WidgetReference_HomeTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	_ZEN_Mojo_WidgetReference_HomeTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = _ZEN_Mojo_WidgetReference_HomeTemplate.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_WidgetReference_HomeTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.WidgetReference.HomeTemplate';
	p._type = 'HomeTemplate';
	p.serialize = _ZEN_Mojo_WidgetReference_HomeTemplate_serialize;
	p.getSettings = _ZEN_Mojo_WidgetReference_HomeTemplate_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_WidgetReference_HomeTemplate_ReallyRefreshContents;
	p.getLayout = _ZEN_Mojo_WidgetReference_HomeTemplate_getLayout;
	p.onGetContent = _ZEN_Mojo_WidgetReference_HomeTemplate_onGetContent;
	p.onchange = _ZEN_Mojo_WidgetReference_HomeTemplate_onchange;
	p.onselect = _ZEN_Mojo_WidgetReference_HomeTemplate_onselect;
}
/* EOF */