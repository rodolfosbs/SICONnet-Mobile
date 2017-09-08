/*** Zen Module: ZEN_Mojo_Plugin_googleMapsHelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/googleMapsHelperDocumentation'] = '_ZEN_Mojo_Plugin_googleMapsHelperDocumentation';
self._ZEN_Mojo_Plugin_googleMapsHelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_googleMapsHelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_googleMapsHelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_googleMapsHelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_googleMapsHelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_googleMapsHelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
switch (identifier) {
case '$directions':
documentation = {
description:'The $directions object represents directions between two map points. This layout object cannot be used at the top level; you must include it within the children array of $map. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Google Maps API.',
attributes:[
{name:'endLat',type:'number',description:''},
{name:'endLng',type:'number',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'startLat',type:'number',description:''},
{name:'startLng',type:'number',description:''},
{name:'travelMode',type:'string',description:''},				]
};
break;
case '$map':
documentation = {
description:'The $map object represents a map. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Google Maps API.',
attributes:[
{name:'centerAtUser',type:'boolean',description:''},
{name:'centerLat',type:'number',description:''},
{name:'centerLng',type:'number',description:''},
{name:'centerMarkerTitle',type:'string',description:''},
{name:'children',type:'array',description:'Child layout objects to contain within this widget. These must be of type $marker or $directions.'},
{name:'height',type:'number',description:'Height of the map, in pixels.'},
{name:'hidden',type:'boolean',description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'id',type:'string',description:''},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'mapTypeId',type:'string',description:''},
{name:'showMarkerAtCenter',type:'boolean',description:''},
{name:'value',type:'array',description:'Array of objects for use by markers. Each object must have the properties lat, lng, and title.'},
{name:'width',type:'number',description:'Width of the map, in pixels.'},
{name:'zoom',type:'number',description:''},				]
};
break;
case '$marker':
documentation = {
description:'The $marker object represents a marker on a map.  This layout object cannot be used at the top level; you must include it within the children array of $map. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Google Maps API.',
attributes:[
{name:'icon',type:'string',description:'URL of custom icon to use, if any.'},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'lat',type:'number',description:''},
{name:'lng',type:'number',description:''},
{name:'title',type:'string',description:''},				]
};
break;
}
return documentation;
}
self._ZEN_Mojo_Plugin_googleMapsHelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_googleMapsHelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_googleMapsHelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_googleMapsHelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.googleMapsHelperDocumentation';
	p._type = 'googleMapsHelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_googleMapsHelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_googleMapsHelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_googleMapsHelperDocumentation_getDocumentation;
}
/* EOF */