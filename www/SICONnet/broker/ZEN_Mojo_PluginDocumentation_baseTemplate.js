/*** Zen Module: ZEN_Mojo_PluginDocumentation_baseTemplate ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/baseTemplate'] = '_ZEN_Mojo_PluginDocumentation_baseTemplate';
self._ZEN_Mojo_PluginDocumentation_baseTemplate = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_baseTemplate__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_baseTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_baseTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_baseTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_baseTemplate_getData = function(key,criteria) {
var data = null;
switch (key) {
case 'pluginDetail':
var temp = criteria.id.split('.');
var className = temp[temp.length-1];
var plugin = zenCreateComponent('http://www.intersystems.com/zen/mojo',className);
var features = plugin.getFeatures();
data = {
main_menu:[
{id:'all',name:'All'}
]
};
for (var i = 0; i < features.length; i++) {
var object = features[i];
data.main_menu.push({id:object.identifier,name:object.identifier,parent:'all'});
}
break;
}
return data;
}

self._ZEN_Mojo_PluginDocumentation_baseTemplate_getLayout = function(key,criteria) {
var layout = {};
switch (key) {
case 'home':
layout = {
children: [
{
type:'$StoreMemory',key:'menu-store',
data:'=[main_menu]',parentAttribute:'parent'
},
{
type:'$TreeObjectStoreModel',key:'model-menu',
store:'menu-store',query:{id:'all'},
mayHaveChildren:function(item){
return !zenGet(item.openTab,true);
}
},
{
type:'$LayoutContainer',key:'layoutContainer-1',
design:'headline',style:'width:100%;height:100%;',
children:[
{
type:'$ContentPane',region:'top',
key:'contentPane-top',
children:[
{
type:'$para',content:$$$Text('Zen Mojo Plugin Documentation'),
paraClass:'headerText'
},
]},
{
type:'$BorderContainer',key:'layoutContainer-2',
region:'center',design:'headline',liveSplitters:false,
style:'width:100%;height:100%;',
children:[
{
type:'$AccordionContainer',region:'leading',
splitter:true,style:'width:300px;',
children:[
{
type:'$ContentPane',title:$$$Text('Choose a plugin'),
key:'contentPane-1',
children:[
{
type:'$Tree',key:'pluginMenu',
model:'model-menu',showRoot:false,
persist:true
},
]}
]},
{
type:'$ContentPane',region:'center',
key:'contentPane-center',style:'border:none;padding:0px;',
children:[
{
type:'$TabContainer',key:'tabContainer-1',
region:'center',style:'width:100%;height:100%;',
}
]},
]}
]}
]
};
break;
case 'pluginDetail':
layout = {
children: [
{
type:'$StoreMemory',key:'menu-store',
data:'=[main_menu]',parentAttribute:'parent'
},
{
type:'$TreeObjectStoreModel',key:'model-menu',
store:'menu-store',query:{id:'all'},
mayHaveChildren:function(item){
return !zenGet(item.openTab,true);
}
},
{
type:'$LayoutContainer',key:'layoutContainer-1',
design:'headline',style:'width:100%;height:100%;',
children:[
{
type:'$ContentPane',region:'top',
key:'contentPane-top',
children:[
{
type:'$image',src:'images/black_left_arrow.png',
blockStyle:'display:inline;',style:'display:inline;',
imageStyle:'top: inherit;position:absolute;',
key:'backImage'
},
{
type:'$para',content:criteria.id,
paraClass:'headerText',blockStyle:'display:inline;'
},
]},
{
type:'$BorderContainer',key:'layoutContainer-2',
region:'center',design:'headline',liveSplitters:false,
style:'width:100%;height:100%;',
children:[
{
type:'$AccordionContainer',region:'leading',
splitter:true,style:'width:300px;',
children:[
{
type:'$ContentPane',title:$$$Text('Layout Objects'),
key:'contentPane-1',
children:[
{
type:'$Tree',key:'layoutObjectMenu',
model:'model-menu',showRoot:false,
persist:true
},
]}
]},
{
type:'$ContentPane',region:'center',
key:'contentPane-center',style:'border:none;padding:0px;',
children:[
{
type:'$TabContainer',key:'tabContainer-1',
region:'center',style:'width:100%;height:100%;',
}
]},
]}
]}
]
};
break;
case 'list-layout-object':
layout = {
children:[
]
};
break;
}
return layout;
}

self._ZEN_Mojo_PluginDocumentation_baseTemplate_onGetContent = function(which,key,criteria) {
var content = null;
switch (which) {
case 'layout':
return this.getLayout(key,criteria);
break;
case 'data':
return this.getData(key,criteria);
break;
}
return null;
}

self._ZEN_Mojo_PluginDocumentation_baseTemplate_onselect = function(key,value,docViewId) {
console.log('select: ' + key + ' value: ' + value);
var docView = zen(docViewId);
switch (key) {
case 'backImage':
zen('mainView').popDocument();
break;
case 'pluginMenu':
zen('mainView').pushDocument('pluginDetail',{id:value},'pluginDetail',{id:value});
break;
case 'layoutObjectMenu':
var tree = docView.getItemByKey(key);
var store = tree.$dojoItem.model.store;
var item = store.query({id:value})[0];
if (zenGet(item.openTab,true)) {
var tc = zen('mainView').getItemByKey('tabContainer-1').$dojoItem;
var tabIsOpen = false;
if (tc.hasChildren()) {
var openTabs = tc.getChildren();
for (var i = 0; i < openTabs.length; i++) {
if (openTabs[i].title == value) {
tabIsOpen = true;
tc.selectChild(openTabs[i],true);
}
}
}
if (!tabIsOpen) {
var nv = docView.getPluginByName('dojo').createDocumentView('list-layout-object','list-layout-object','newView_'+value);
nv.setDocumentKey('list-layout-object',{id:value});
nv.setLayoutKey('list-layout-object',{id:value});
docView.getPluginByName('dojo').addTabWithDocumentView(docView,'tabContainer-1',1,value,nv);
}
}
break;
}
}

self._ZEN_Mojo_PluginDocumentation_baseTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_baseTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	_ZEN_Mojo_PluginDocumentation_baseTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_baseTemplate.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_baseTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.baseTemplate';
	p._type = 'baseTemplate';
	p.serialize = _ZEN_Mojo_PluginDocumentation_baseTemplate_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_baseTemplate_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_baseTemplate_ReallyRefreshContents;
	p.getData = _ZEN_Mojo_PluginDocumentation_baseTemplate_getData;
	p.getLayout = _ZEN_Mojo_PluginDocumentation_baseTemplate_getLayout;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_baseTemplate_onGetContent;
	p.onselect = _ZEN_Mojo_PluginDocumentation_baseTemplate_onselect;
}
/* EOF */