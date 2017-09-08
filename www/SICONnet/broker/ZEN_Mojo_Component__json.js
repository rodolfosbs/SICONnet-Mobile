/*** Zen Module: ZEN_Mojo_Component__json ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/mojoJsonProvider'] = '_ZEN_Mojo_Component_mojoJsonProvider';
self._ZEN_Mojo_Component_mojoJsonProvider = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_mojoJsonProvider__init(this,index,id);}
}

self._ZEN_Mojo_Component_mojoJsonProvider__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Auxiliary_jsonProvider__init) ?zenMaster._ZEN_Auxiliary_jsonProvider__init(o,index,id):_ZEN_Auxiliary_jsonProvider__init(o,index,id);
	o.OnGetArray = '';
	o.OnGetTargetObject = '';
	o.OnRenderJSON = '';
	o.OnSubmitContent = '';
}
function _ZEN_Mojo_Component_mojoJsonProvider_serialize(set,s)
{
	var o = this;s[0]='2092629197';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.OnGetArray;s[7]=o.OnGetTargetObject;s[8]=o.OnRenderJSON;s[9]=o.OnSubmitContent;s[10]=(o.alertOnError?1:0);s[11]=o.align;s[12]=o.autoRefresh;s[13]=o.aux;s[14]=o.containerStyle;s[15]=o.content;s[16]=o.contentType;s[17]=set.addObject(o.criteria,'criteria');s[18]=set.addObject(o.dataBag,'dataBag');s[19]=(o.dataLoaded?1:0);s[20]=(o.dataReadOnly?1:0);s[21]=o.defaultSeries;s[22]=o.documentId;s[23]=(o.dragEnabled?1:0);s[24]=(o.dropEnabled?1:0);s[25]=(o.dynamic?1:0);s[26]=o.enclosingClass;s[27]=o.enclosingStyle;s[28]=o.error;s[29]=o.height;s[30]=(o.hidden?1:0);s[31]=o.hint;s[32]=o.hintClass;s[33]=o.hintStyle;s[34]=o.label;s[35]=o.labelClass;s[36]=o.labelDisabledClass;s[37]=o.labelStyle;s[38]=(o.modelChanged?1:0);s[39]=o.modelError;s[40]=o.modelId;s[41]=o.onafterdrag;s[42]=o.onbeforedrag;s[43]=o.oncreate;s[44]=o.ondelete;s[45]=o.ondrag;s[46]=o.ondrop;s[47]=o.onerror;s[48]=o.onhide;s[49]=o.onnotifyController;s[50]=o.onrefresh;s[51]=o.onsave;s[52]=o.onshow;s[53]=o.onupdate;s[54]=o.overlayMode;s[55]=set.serializeArray(o,o.parameters,true,'parameters');s[56]=o.propertyList;s[57]=(o.readOnly?1:0);s[58]=o.renderFlag;s[59]=o.seriesNameProperty;s[60]=(o.showLabel?1:0);s[61]=o.slice;s[62]=o.targetClass;s[63]=o.timerid;s[64]=o.title;s[65]=o.tuple;s[66]=o.valign;s[67]=(o.visible?1:0);s[68]=o.width;
}
function _ZEN_Mojo_Component_mojoJsonProvider_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_DeleteFromServer = function(pID) {
	return zenInstanceMethod(this,'DeleteFromServer','L','BOOLEAN',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_ExecuteAction = function(pAction,pData) {
	return zenInstanceMethod(this,'ExecuteAction','L,L','BOOLEAN',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_LoadFromServer = function() {
	return zenInstanceMethod(this,'LoadFromServer','','VARCHAR',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_RefreshFromServer = function() {
	return zenInstanceMethod(this,'RefreshFromServer','','BOOLEAN',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_RefreshFromServerAsynch = function() {
	zenInstanceMethod(this,'RefreshFromServerAsynch','','',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_SaveToServer = function() {
	return zenInstanceMethod(this,'SaveToServer','','VARCHAR',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_SubmitToServer = function(pCommand,pContent,pTargetClass) {
	return zenInstanceMethod(this,'SubmitToServer','L,L,L','BOOLEAN',arguments);
}

self._ZEN_Mojo_Component_mojoJsonProvider_SubmitToServerAsync = function(pCommand,pContent,pTargetClass) {
	zenInstanceMethod(this,'SubmitToServerAsync','L,L,L','',arguments);
}
self._ZEN_Mojo_Component_mojoJsonProvider__Loader = function() {
	zenLoadClass('_ZEN_Auxiliary_jsonProvider');
	_ZEN_Mojo_Component_mojoJsonProvider.prototype = zenCreate('_ZEN_Auxiliary_jsonProvider',-1);
	var p = _ZEN_Mojo_Component_mojoJsonProvider.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_mojoJsonProvider;
	p.superClass = ('undefined' == typeof _ZEN_Auxiliary_jsonProvider) ? zenMaster._ZEN_Auxiliary_jsonProvider.prototype:_ZEN_Auxiliary_jsonProvider.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.mojoJsonProvider';
	p._type = 'mojoJsonProvider';
	p.serialize = _ZEN_Mojo_Component_mojoJsonProvider_serialize;
	p.getSettings = _ZEN_Mojo_Component_mojoJsonProvider_getSettings;
	p.DeleteFromServer = _ZEN_Mojo_Component_mojoJsonProvider_DeleteFromServer;
	p.ExecuteAction = _ZEN_Mojo_Component_mojoJsonProvider_ExecuteAction;
	p.LoadFromServer = _ZEN_Mojo_Component_mojoJsonProvider_LoadFromServer;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_mojoJsonProvider_ReallyRefreshContents;
	p.RefreshFromServer = _ZEN_Mojo_Component_mojoJsonProvider_RefreshFromServer;
	p.RefreshFromServerAsynch = _ZEN_Mojo_Component_mojoJsonProvider_RefreshFromServerAsynch;
	p.SaveToServer = _ZEN_Mojo_Component_mojoJsonProvider_SaveToServer;
	p.SubmitToServer = _ZEN_Mojo_Component_mojoJsonProvider_SubmitToServer;
	p.SubmitToServerAsync = _ZEN_Mojo_Component_mojoJsonProvider_SubmitToServerAsync;
}
/* EOF */