/*** Zen Module: ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/mojoDefaultHelperDocumentation'] = '_ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation';
self._ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
switch (identifier) {		case '$content':
documentation = {
description:'The $content object represents a block of content. You can specify the following properties of this object. ',
attributes:[
{name:'content',type:'string',description:'Specify custom HTML to display within this block. Zen Mojo does not perform any escaping for this property. If you include HTML tags, it is your responsibility to ensure that the resulting HTML is well-formed.'},
{name:'cssClass',type:'string',description:'Specify the CSS class to use for this block.'},
{name:'key',type:'string',description:'Key that identifies this layout object.  Note that the name of a key cannot include a colon (:).'},
{name:'style',type:'string',description:'Specify the CSS style to use for this block.'},
{name:'$ignoreSelect',type:'boolean',description:'If true, suppress default generation of select handers (if any).'},				]
};
break;
case '$if':
documentation = {
description:'The $if object displays or hides its child objects, based on a comparison. If value===expectedValue, the child objects are displayed; otherwise they are not. You can specify the following properties of this object. ',
attributes:[
{name:'children',type:'array',description:'Child layout objects to display (or not), depending on the comparison.'},
{name:'expectedValue',type:'',description:'Reference value for the comparison. The expectedValue property can have any JavaScript type.'},
{name:'key',type:'string',description:'Key that identifies this layout object.  Note that the name of a key cannot include a colon (:).'},
{name:'value',type:'',description:'Value to compare to expectedValue. The value property can have any JavaScript type.'},				]
};
break;
case '$loop':
documentation = {
description:'The $loop object represents an array of child layout objects. You can specify the following properties of this object. ',
attributes:[
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'key',type:'string',description:'Key that identifies this layout object.  Note that the name of a key cannot include a colon (:).'},				]
};
break;
}
return documentation;
}
self._ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.mojoDefaultHelperDocumentation';
	p._type = 'mojoDefaultHelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_mojoDefaultHelperDocumentation_getDocumentation;
}
/* EOF */