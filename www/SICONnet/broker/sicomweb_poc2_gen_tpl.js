/*** Zen Module: sicomweb_poc2_gen_tpl ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/Principal'] = 'sicomweb_poc2_gen_tpl_Principal';
self.sicomweb_poc2_gen_tpl_Principal = function(index,id) {
	if (index>=0) {sicomweb_poc2_gen_tpl_Principal__init(this,index,id);}
}

self.sicomweb_poc2_gen_tpl_Principal__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function sicomweb_poc2_gen_tpl_Principal_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function sicomweb_poc2_gen_tpl_Principal_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.sicomweb_poc2_gen_tpl_Principal_getLayout = function(key,criteria) {
var layout = {};
switch(key) {
case 'home' :
layout = {
children:[
]
};
break;
}
return layout;
}

self.sicomweb_poc2_gen_tpl_Principal_onGetContent = function(providerName,key,criteria) {
console.log(providerName+'-'+key)
return null;
}

self.sicomweb_poc2_gen_tpl_Principal_onchange = function(key,value,final,docViewId) {
console.log('change ' + key + ' to ' + value);
var view = zen(docViewId);
var moduloPagina = key.split(':');
switch(moduloPagina[1]) {
case 'DataInicial':
case 'DataFinal':
if (moduloPagina[0]=="servicos")
{
var DataInicial = view.getControlValue("servicos:DataInicial"); //ou view.getItemByKey("servicos:DataInicial").$getValue()
var DataFinal = view.getControlValue("servicos:DataFinal"); //ou view.getItemByKey("servicos:DataInicial").$getValue()
var criterios = {DataInicial:DataInicial,DataFinal:DataFinal};
view.setDocumentKey("servicos:servicos",criterios);
}
if (moduloPagina[0]=="vendas")
{
var DataInicial = view.getControlValue("vendas:DataInicial"); //ou view.getItemByKey("servicos:DataInicial").$getValue()
var DataFinal = view.getControlValue("vendas:DataFinal"); //ou view.getItemByKey("servicos:DataInicial").$getValue()
var criterios = {DataInicial:DataInicial,DataFinal:DataFinal};
view.setDocumentKey("vendas:vendas",criterios);
}
view.updateLayout();
break;
}
}

self.sicomweb_poc2_gen_tpl_Principal_onloadHandler = function() {
}

self.sicomweb_poc2_gen_tpl_Principal_onselect = function(key,value,docViewId) {
console.log('select '+key);
var view = zen(docViewId);
var moduloPagina = key.split(':');
switch(moduloPagina[1])
{
case 'servicos':
case 'vendas':
view.setDocumentKey(key);
view.setLayoutKey(key);
view.updateLayout();
break;
}
}

self.sicomweb_poc2_gen_tpl_Principal_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self.sicomweb_poc2_gen_tpl_Principal__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	sicomweb_poc2_gen_tpl_Principal.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = sicomweb_poc2_gen_tpl_Principal.prototype;
	if (null==p) {return;}
	p.constructor = sicomweb_poc2_gen_tpl_Principal;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'sicomweb.poc2.gen.tpl.Principal';
	p._type = 'Principal';
	p.serialize = sicomweb_poc2_gen_tpl_Principal_serialize;
	p.getSettings = sicomweb_poc2_gen_tpl_Principal_getSettings;
	p.ReallyRefreshContents = sicomweb_poc2_gen_tpl_Principal_ReallyRefreshContents;
	p.getLayout = sicomweb_poc2_gen_tpl_Principal_getLayout;
	p.onGetContent = sicomweb_poc2_gen_tpl_Principal_onGetContent;
	p.onchange = sicomweb_poc2_gen_tpl_Principal_onchange;
	p.onloadHandler = sicomweb_poc2_gen_tpl_Principal_onloadHandler;
	p.onselect = sicomweb_poc2_gen_tpl_Principal_onselect;
}
/* EOF */