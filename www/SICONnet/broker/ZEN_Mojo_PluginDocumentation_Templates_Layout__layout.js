/*** Zen Module: ZEN_Mojo_PluginDocumentation_Templates_Layout__layout ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/layout/abstractTemplate'] = '_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate';
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Layout.abstractTemplate';
	p._type = 'abstractTemplate';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate_ReallyRefreshContents;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/layout/home'] = '_ZEN_Mojo_PluginDocumentation_Templates_Layout_home';
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_home = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Layout_home__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_home__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_home_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_home_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_home_onGetContent = function(which,key,criteria) {
var layout = {
children: [
{
type:'$StoreMemory',key:'pagemanager-menu-store',
data:'=[pagemanager_menu]',parentAttribute:'parent'
},
{
type:'$StoreMemory',key:'helperplugins-menu-store',
data:'=[helperplugins_menu]',parentAttribute:'parent'
},
{
type:'$TreeObjectStoreModel',key:'pagemanager-model-menu',
store:'pagemanager-menu-store',query:{id:'all'},
mayHaveChildren:function(item){
return !zenGet(item.openTab,true);
}
},
{
type:'$TreeObjectStoreModel',key:'helperplugins-model-menu',
store:'helperplugins-menu-store',query:{id:'all'},
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
type:'$span',$content:$$$Text('Zen Mojo Plugin Documentation'),
cssClass:'headerText'
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
type:'$ContentPane',title:$$$Text('Choose a Plugin'),
key:'contentPane-1',
children:[
{
type:'$Tree',key:'menuHelperPlugins',
model:'helperplugins-model-menu',showRoot:false,
persist:true
}
]},
{
type:'$ContentPane',title:$$$Text('Choose a Page Manager'),
key:'contentPane-1',
children:[
{
type:'$Tree',key:'menuPageManager',
model:'pagemanager-model-menu',showRoot:false,
persist:true
}
]},
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
return layout;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_home_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_home__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Layout_home.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Layout_home.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Layout_home;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Layout.home';
	p._type = 'home';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Layout_home_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Layout_home_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Layout_home_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Layout_home_onGetContent;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/layout/listLayoutObject'] = '_ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject';
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_onGetContent = function(which,key,criteria) {
var layout = {
children: [
{type:'$span',$content:'=[description]',cssClass:'inlineText'},
{type:'$TitlePane',title:$$$Text('Attribute Summary'),children:[
{type:'$loop',value:'=[attributes]',children:[
{type:'$if',value:'=[hasType]',expectedValue:true,children:[
{type:'$img',src:'=[typeFilename]',cssClass:'typeImage',alt:'=[type]'},
]},
{type:'$if',value:'=[refreshable]',expectedValue:true,children:[
{type:'$img',src:'zenmojo_images/refresh.png',cssClass:'typeImage',alt:'refreshable by $refresh()'},
]},
{type:'$span',$content:'=[name]',cssClass:'inlineText link'},
{type:'$span',$content:'=[description]',cssClass:'inlineText description'}
]}
]}
]
};
return layout;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Layout.listLayoutObject';
	p._type = 'listLayoutObject';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Layout_listLayoutObject_onGetContent;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/layout/pageManagerDetail'] = '_ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail';
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_onGetContent = function(which,key,criteria) {
var layout = {
children: [
{type:'$p',$content:'=[description]'}
]
};
return layout;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Layout.pageManagerDetail';
	p._type = 'pageManagerDetail';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pageManagerDetail_onGetContent;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentation/layout/pluginDetail'] = '_ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail';
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail = function(index,id) {
	if (index>=0) {_ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail__init(this,index,id);}
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init) ?zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id):_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate__init(o,index,id);
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_onGetContent = function(which,key,criteria) {
var layout = {
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
type:'$img',src:'images/black_left_arrow.png',
style:'display:inline;top: inherit;position:absolute;padding-top:10px;',
key:'backImage'
},
{
type:'$span',$content:criteria.id,
cssClass:'headerText',style:'display:inline;'
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
]},
{
type:'$ContentPane',title:$$$Text('Legend'),
key:'contentPane-1',
children:[
{type:'$div',children:[
{type:'$img',src:'zenmojo_images/array.png',cssClass:'typeImage',alt:'Array'},
{type:'$span',$content:'Array',cssClass:'inlineText link'}
]},
{type:'$div',children:[
{type:'$img',src:'zenmojo_images/boolean.png',cssClass:'typeImage',alt:'Boolean'},
{type:'$span',$content:'Boolean',cssClass:'inlineText link'}
]},
{type:'$div',children:[
{type:'$img',src:'zenmojo_images/date.png',cssClass:'typeImage',alt:'Date'},
{type:'$span',$content:'Date',cssClass:'inlineText link'}
]},
{type:'$div',children:[
{type:'$img',src:'zenmojo_images/function.png',cssClass:'typeImage',alt:'Function'},
{type:'$span',$content:'Function',cssClass:'inlineText link'}
]},
{type:'$div',children:[
{type:'$img',src:'zenmojo_images/number.png',cssClass:'typeImage',alt:'Number'},
{type:'$span',$content:'Number',cssClass:'inlineText link'}
]},
{type:'$div',children:[
{type:'$img',src:'zenmojo_images/object.png',cssClass:'typeImage',alt:'Object'},
{type:'$span',$content:'Object',cssClass:'inlineText link'}
]},
{type:'$div',children:[
{type:'$img',src:'zenmojo_images/string.png',cssClass:'typeImage',alt:'String'},
{type:'$span',$content:'String',cssClass:'inlineText link'}
]}
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
return layout;
}

self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail__Loader = function() {
	zenLoadClass('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate');
	_ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail.prototype = zenCreate('_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate',-1);
	var p = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate) ? zenMaster._ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype:_ZEN_Mojo_PluginDocumentation_Templates_Layout_abstractTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.PluginDocumentation.Templates.Layout.pluginDetail';
	p._type = 'pluginDetail';
	p.serialize = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_serialize;
	p.getSettings = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_ReallyRefreshContents;
	p.onGetContent = _ZEN_Mojo_PluginDocumentation_Templates_Layout_pluginDetail_onGetContent;
}
/* EOF */