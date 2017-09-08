/*** Zen Module: ZEN_Mojo_Plugin_dojoGridXHelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/dojoGridXHelperDocumentation'] = '_ZEN_Mojo_Plugin_dojoGridXHelperDocumentation';
self._ZEN_Mojo_Plugin_dojoGridXHelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_dojoGridXHelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_dojoGridXHelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_dojoGridXHelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_dojoGridXHelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_dojoGridXHelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
switch (identifier) {
case '$Gridx':
documentation = {
description:'The $Gridx object represents a Dojo GridX. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in a Dojo GridX.',
attributes:[
{name:'barBottom',type:'array',description:''},
{name:'barTop',type:'array',description:''},
{name:'columns',type:'number',description:''},
{name:'headerHidden',type:'boolean',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'modules',type:'array',description:''},
{name:'store',type:'boolean',description:'The key of the store to which this grid should connect.'},
{name:'style',type:'string',description:'CSS style to apply to the div in which this grid is rendered.'},				]
};
break;
}
return documentation;
}
self._ZEN_Mojo_Plugin_dojoGridXHelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_dojoGridXHelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_dojoGridXHelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_dojoGridXHelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.dojoGridXHelperDocumentation';
	p._type = 'dojoGridXHelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_dojoGridXHelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_dojoGridXHelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_dojoGridXHelperDocumentation_getDocumentation;
}
/* EOF */