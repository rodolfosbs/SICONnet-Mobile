/*** Zen Module: ZEN_Mojo_Plugin_baseHelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/baseHelperDocumentation'] = '_ZEN_Mojo_Plugin_baseHelperDocumentation';
self._ZEN_Mojo_Plugin_baseHelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_baseHelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_baseHelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
}
function _ZEN_Mojo_Plugin_baseHelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_baseHelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_baseHelperDocumentation_getDocumentation = function(identifier) {
return {attributes:[]};
}
self._ZEN_Mojo_Plugin_baseHelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_baseHelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.baseHelperDocumentation';
	p._type = 'baseHelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_baseHelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_baseHelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_baseHelperDocumentation_getDocumentation;
}
/* EOF */