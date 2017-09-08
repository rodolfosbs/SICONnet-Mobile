/*** Zen Module: ZEN_Mojo_Plugin_googleMaps3HelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/googleMaps3HelperDocumentation'] = '_ZEN_Mojo_Plugin_googleMaps3HelperDocumentation';
self._ZEN_Mojo_Plugin_googleMaps3HelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_googleMaps3HelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_googleMaps3HelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_googleMaps3HelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_googleMaps3HelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_googleMaps3HelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
switch (identifier) {
case '$directions':
documentation = {
description:'The $directions object represents directions between two map points. This layout object cannot be used at the top level; you must include it within the children array of $map. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Google Maps API.',
attributes:[
{name:'endLat',type:'number',refreshable:true,description:''},
{name:'endLng',type:'number',refreshable:true,description:''},
{name:'key',type:'string',refreshable:false,description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'startLat',type:'number',refreshable:true,description:''},
{name:'startLng',type:'number',refreshable:true,description:''},
{name:'travelMode',type:'string',refreshable:true,description:''},				]
};
break;
case '$map':
documentation = {
description:'The $map object represents a map. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Google Maps API.',
attributes:[
{name:'',type:'',description:''},
{name:'backgroundColor',type:'string',refreshable:false,description:''},
{name:'centerAtUser',type:'boolean',refreshable:true,description:''},
{name:'centerLat',type:'number',refreshable:true,description:''},
{name:'centerLng',type:'number',refreshable:true,description:''},
{name:'centerMarkerTitle',refreshable:true,type:'string',description:''},
{name:'centerMarkerDraggable',refreshable:true,type:'boolean',description:'If true, enables the user to drag the marker created by showMarkerAtCenter.'},
{name:'children',type:'array',refreshable:false,description:'Child layout objects to contain within this widget. These must be of type $marker, $directions, or $infowindow.'},
{name:'disableDefaultUI',type:'boolean',refreshable:true,description:''},
{name:'disableDoubleClickZoom',type:'boolean',refreshable:true,description:''},
{name:'draggable',type:'boolean',refreshable:true,description:''},
{name:'draggableCursor',type:'string',refreshable:false,description:''},
{name:'draggingCursor',type:'string',refreshable:false,description:''},
{name:'height',type:'number',refreshable:false,description:'Height of the map, in pixels.'},
{name:'hidden',type:'boolean',refreshable:false,description:'If this property is true, Zen Mojo hides this layout object.'},
{name:'id',type:'string',refreshable:false,description:''},
{name:'key',type:'string',refreshable:false,description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'keyboardShortcuts',type:'boolean',refreshable:true,description:''},
{name:'mapTypeControl',type:'boolean',refreshable:true,description:''},
{name:'mapTypeControlIds',type:'array',refreshable:true,description:''},
{name:'mapTypeControlPosition',type:'number',refreshable:true,description:'Default is google.maps.ControlPosition.TOP_RIGHT'},
{name:'mapTypeControlStyle',type:'number',refreshable:true,description:'Default is google.maps.MapTypeControlStyle.DEFAULT'},
{name:'mapTypeId',type:'number',refreshable:true,description:'Default is google.maps.MapTypeId.ROADMAP'},
{name:'navigationControl',type:'boolean',refreshable:false,description:''},
{name:'navigationControlPosition',type:'number',refreshable:false,description:'Default is google.maps.ControlPosition.TOP_RIGHT'},
{name:'navigationControlStyle',type:'number',refreshable:false,description:'Default is google.maps.ControlPosition.DEFAULT'},
{name:'noClear',type:'boolean',refreshable:false,description:''},
{name:'scaleControl',type:'boolean',refreshable:true,description:''},
{name:'scaleControlPosition',type:'number',refreshable:false,description:'Default is google.maps.ControlPosition.BOTTOM_LEFT'},
{name:'scrollwheel',type:'boolean',refreshable:true,description:''},
{name:'showMarkerAtCenter',type:'boolean',refreshable:false,description:''},
{name:'streetViewControl',type:'boolean',refreshable:true,description:''},
{name:'value',type:'array',refreshable:false,description:'Array of objects for use by markers. Each object must have the properties lat, lng, and title.'},
{name:'width',type:'number',refreshable:false,description:'Width of the map, in pixels.'},
{name:'zoom',type:'number',refreshable:true,description:''},				]
};
break;
case '$marker':
documentation = {
description:'The $marker object represents a marker on a map.  This layout object cannot be used at the top level; you must include it within the children array of $map. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Google Maps API.',
attributes:[
{name:'address',type:'string',refreshable:true,description:'The provided string will be geocoded to place a marker'},
{name:'draggable',type:'boolean',refreshable:true,description:'If true, enables the user to drag the marker.'},
{name:'icon',type:'string',refreshable:true,description:'URL of custom icon to use, if any.'},
{name:'key',type:'string',refreshable:false,description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'lat',type:'number',refreshable:true,description:''},
{name:'lng',type:'number',refreshable:true,description:''},
{name:'title',type:'string',refreshable:true,description:''},				]
};
break;
case '$infowindow':
documentation = {
description:'The $infowindow object represents an info window on a map.  This layout object cannot be used at the top level; you must include it within the children array of $map or within the children array of a $marker. If a child of a $marker, the $infowindow will open when the $marker is clicked.',
attributes:[
{name:'$content',type:'string',refreshable:true, description:'Custom text content to display within this item. HTML tags are recognized by the Google Maps API.'},
{name:'children',type:'array',refreshable:false,description:'Child layout objects to contain within this widget. This array is used to generate the content of the info window, but is overridden if $content is defined.'},
{name:'key',type:'string',refreshable:false,description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'lat',type:'number',refreshable:true,description:''},
{name:'lng',type:'number',refreshable:true,description:''},
{name:'zIndex',type:'number',refreshable:true,description:'All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.'},			]
};
break;
}
return documentation;
}
self._ZEN_Mojo_Plugin_googleMaps3HelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_googleMaps3HelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_googleMaps3HelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_googleMaps3HelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.googleMaps3HelperDocumentation';
	p._type = 'googleMaps3HelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_googleMaps3HelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_googleMaps3HelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_googleMaps3HelperDocumentation_getDocumentation;
}
/* EOF */