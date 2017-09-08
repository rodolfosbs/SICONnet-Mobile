/*** Zen Module: ZEN_Mojo_Plugin_chui352HelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/chui352HelperDocumentation'] = '_ZEN_Mojo_Plugin_chui352HelperDocumentation';
self._ZEN_Mojo_Plugin_chui352HelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_chui352HelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_chui352HelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_chui352HelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_chui352HelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_chui352HelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
switch (identifier) {
case '$article':
documentation = {
description:'The $article object represents an HTML5 <article> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'title',type:'string',description:'Sets the title of the article. May be used for the navigation title by $navbar.'},				]
};
break;
case '$aside':
documentation = {
description:'The $aside object represents an HTML5 <aside> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'nav',type:'boolean',description:''},
{name:'showDetail',type:'boolean',description:''},				]
};
break;
case '$button':
documentation = {
description:'The $button object represents an HTML5 button, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'value',type:'string',description:''},				]
};
break;
case '$div':
documentation = {
description:'The $div object represents an HTML5 <div> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
case '$h1':
documentation = {
description:'The $h1 object represents an HTML5 <h1> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
case '$h2':
documentation = {
description:'The $h2 object represents an HTML5 <h2> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
case '$h3':
documentation = {
description:'The $h3 object represents an HTML5 <h3> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
case '$h4':
documentation = {
description:'The $h4 object represents an HTML5 <h4> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
case '$h5':
documentation = {
description:'The $h5 object represents an HTML5 <h5> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
case '$link':
documentation = {
description:'The $link object represents an HTML5 link, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'href',type:'string',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'value',type:'string',description:''},				]
};
break;
case '$list':
documentation = {
description:'The $list object represents an HTML5 <ul> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'switched',type:'boolean',description:''},				]
};
break;
case '$listitem':
documentation = {
description:'The $listitem object represents an HTML5 <li> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'complex',type:'boolean',description:''},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'showDetail',type:'boolean',description:''},
{name:'showNavigation',type:'boolean',description:''},
{name:'value',type:'string',description:''},				]
};
break;
case '$navbar':
documentation = {
description:'The $navbar object represents an HTML5 <nav> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'title',type:'string',description:''},				]
};
break;
case '$p':
documentation = {
description:'The $p object represents an HTML5 <p> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'caption',type:'string',description:''},
{name:'cssClass',type:'string',description:''},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
case '$section':
documentation = {
description:'The $section object represents an HTML5 <section> tag, as rendered by the ChocolateChip-UI framework. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Chocolate-Chip UI API.',
attributes:[
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These can be layout objects defined by the same plugin (most common), layout objects defined by other plugins, or a mix.'},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},				]
};
break;
}
return documentation;
}
self._ZEN_Mojo_Plugin_chui352HelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_chui352HelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_chui352HelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_chui352HelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.chui352HelperDocumentation';
	p._type = 'chui352HelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_chui352HelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_chui352HelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_chui352HelperDocumentation_getDocumentation;
}
/* EOF */