/*** Zen Module: ZEN_Mojo_Plugin_googleMaps3Helper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/googleMaps-3-Helper'] = '_ZEN_Mojo_Plugin_googleMaps3Helper';
self._ZEN_Mojo_Plugin_googleMaps3Helper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_googleMaps3Helper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.mapCounter = '0';
	o.pluginName = 'googleMaps-3-Helper';
	o.version = '1.0.9';
}
function _ZEN_Mojo_Plugin_googleMaps3Helper_serialize(set,s)
{
	var o = this;s[0]='9719969';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.mapCounter;s[8]=o.onupdate;s[9]=o.pluginName;s[10]=o.renderFlag;s[11]=o.tuple;s[12]=o.version;s[13]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_googleMaps3Helper_getSettings(s)
{
	s['name'] = 'string';
	s['mapCounter'] = 'integer';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_buildMapOptions = function(instance,centerLatLng) {
var mapOptions = {
backgroundColor:zenGet(instance.backgroundColor,'lightgray'),
center:centerLatLng,
disableDefaultUI:zenGet(instance.disableDefaultUI,false),
disableDoubleClickZoom:zenGet(instance.disableDoubleClickZoom,false),
draggable:zenGet(instance.draggable,true),
draggableCursor:zenGet(instance.draggableCursor,'move'),
draggingCursor:zenGet(instance.draggingCursor,'move'),
keyboardShortcuts:zenGet(instance.keyboardShortcuts,true),
mapTypeControl:zenGet(instance.mapTypeControl,true),
mapTypeControlOptions: {
mapTypeIds:zenGet(instance.mapTypeControlIds,[
google.maps.MapTypeId.HYBRID,
google.maps.MapTypeId.ROADMAP,
google.maps.MapTypeId.SATELLITE]),
position:zenGet(instance.mapTypeControlPosition,google.maps.ControlPosition.TOP_RIGHT),
style:zenGet(instance.mapTypeControlStyle,google.maps.MapTypeControlStyle.DEFAULT),
},
mapTypeId:zenGet(instance.mapTypeId,google.maps.MapTypeId.ROADMAP),
navigationControl:zenGet(instance.navigationControl,true),
navigationControlOptions: {
position:zenGet(instance.navigationControlPosition,google.maps.ControlPosition.TOP_RIGHT),
style:zenGet(instance.navigationControlStyle,google.maps.ControlPosition.DEFAULT),
},
noClear:zenGet(instance.noClear,false),
scaleControl:zenGet(instance.scaleControl,false),
scaleControlOptions: {
position:zenGet(instance.scaleControlPosition,google.maps.ControlPosition.BOTTOM_LEFT),
},
scrollwheel:zenGet(instance.scrollwheel,true),
streetViewControl:zenGet(instance.streetViewControl,true),
zoom:zenGet(instance.zoom, 8)
};
return mapOptions;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_centerMapAddress = function(address,map) {
var geocoder = new google.maps.Geocoder();
geocoder.geocode( {'address':address}, function (results, status) {
if (status == google.maps.GeocoderStatus.OK) {
map.setCenter(results[0].geometry.location)
} else {
alert(status);
}
});
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_closeInfoWindow = function(infoKey) {
var infowindow = this.$documentView.getItemByKey(infoKey);
if (infowindow) {
infowindow.$infowindow.close();
}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = false;
switch(type) {
case '$map':
var plugin = this;
instance.$render = this.renderGMap;
instance.$executeCodeBeforeChildren = this.initializeGMap;
instance.$refresh = this.refreshGMap;
instance.$isLoop = true;
instance.$children = [];
break;
case '$marker':
instance.$render = new function() {};
instance.$executeCodeBeforeChildren = this.initializeMarker;
instance.$refresh = this.refreshMarker;
break;
case '$directions':
instance.$render = new function() {};
instance.$executeCodeBeforeChildren = this.initializeDirections;
instance.$refresh = this.refreshDirections;
break;
case '$infowindow':
instance.$render = new function() {};
instance.$executeCodeBeforeChildren = this.initializeInfoWindow;
instance.$refresh = this.refreshInfoWindow;
break;
}
return instance;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_getFeatures = function() {
var features = [
{identifier:'$map'},
{identifier:'$marker'},
{identifier:'$directions'},
{identifier:'$infowindow'},
];
return features;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_getGMap = function() {
if (typeof this._maps == 'undefined' || typeof this._maps[this.$documentView.currLevel] == 'undefined') {return null;}
return this._maps[this.$documentView.currLevel];
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_getMarkers = function() {
if (typeof this._markers == 'undefined' || typeof this._markers[this.$documentView.currLevel] == 'undefined') {return null;}
return this._markers[this.$documentView.currLevel];
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_initializeDirections = function() {
var map = this.$documentView.getPluginByLayoutObjectType(this.$type)._maps[this.$documentView.currLevel];
var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
directionsDisplay.setMap(map);
var travelMode = zenGet(this.travelMode,google.maps.DirectionsTravelMode.DRIVING);
var start = new google.maps.LatLng(zenGet(this.startLat),zenGet(this.startLng));
if (typeof this.startLat === 'undefined' || typeof this.startLng === 'undefined') {
start = map.getCenter();
}
var end = new google.maps.LatLng(zenGet(this.endLat),zenGet(this.endLng));
var request = {
origin:start,
destination:end,
travelMode: travelMode
};
directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setDirections(response);
}
});
this.$directionsDisplay = directionsDisplay;
this.$directionsService = directionsService;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_initializeGMap = function() {
var instance = this;
var plugin = this.$documentView.getPluginByLayoutObjectType(this.$type);
var map;
if (typeof plugin._markers == 'undefined') {plugin._markers = {};}
if (typeof instance._markers == 'undefined') {instance._markers = [];}
plugin._markers[this.$documentView.currLevel] = [];
if (zenGet(instance.centerLat) && zenGet(instance.centerLng)) {
map = plugin.initializeMapCenterLatLng(instance.centerLat, instance.centerLng, instance, plugin);
} else if (zenGet(instance.address)) {
map = plugin.initializeMapCenterLatLng(51.48, 0, instance, plugin);
plugin.centerMapAddress(instance.address, map);
} else {
map = plugin.initializeMapCenterLatLng(51.48, 0, instance, plugin);
alert('No coordinates or address.');
}
if (zenGet(instance.centerAtUser)) {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition( function (position) {
var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
map.setCenter(pos);
if (zenGet(instance.showMarkerAtCenter,false)) {
var marker = new google.maps.Marker({
position: pos,
map: map,
title: zenGet(instance.centerMarkerTitle,''),
draggable: zenGet(instance.centerMarkerDraggable,false)
});
plugin._markers[plugin.$documentView.currLevel].push(marker);
instance._markers.push({centerMarker:true,$refresh:function(){}});
}
}, function() {
alert('Error: The Geolocation service failed.');
});
} else {
alert('This browser either does not support geolocation or the feature is not turned on.');
}
} else {
if (zenGet(instance.showMarkerAtCenter,false)) {
var marker = new google.maps.Marker({
position: map.getCenter(),
map: map,
title: zenGet(instance.centerMarkerTitle,''),
draggable: zenGet(instance.centerMarkerDraggable,'')
});
plugin._markers[plugin.$documentView.currLevel].push(marker);
instance._markers.push({centerMarker:true,$refresh:function(){}});
}
}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_initializeInfoWindow = function() {
var map = this.$documentView.getPluginByLayoutObjectType(this.$type)._maps[this.$documentView.currLevel];
var marker = false;
var options = {};
if (this.$parent) {
if (this.$parent.$type == '$marker') {
marker = this.$parent.$marker;
} else if (this.$parent.$parent && this.$parent.$parent.$type == '$marker') {
marker = this.$parent.$parent.$marker;
}
}
var content = '';
if (zenGet(this.$content)) {
content = this.$content;
} else if (this.$children) {
for (var i = 0; i<this.$children.length; i++) {
content = content + this.$children[i].$render();
}
}
options.content = content;
if (zenGet(this.zIndex) !== '') {
options.zIndex = this.zIndex;
}
options.position = new google.maps.LatLng(zenGet(this.lat,0),zenGet(this.lng,0));
var infowindow = new google.maps.InfoWindow(options);
if (marker) {
this.$marker = marker;
google.maps.event.addListener(marker, 'click', function() {
infowindow.open(map,marker);
});
}
this.$infowindow = infowindow;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_initializeMapCenterLatLng = function(lat,lng,instance,plugin) {
var centerLatLng = new google.maps.LatLng(lat,lng);
var mapOptions = plugin.buildMapOptions(instance,centerLatLng);
if (typeof plugin._maps == 'undefined') {plugin._maps = {};}
if (typeof plugin._zmaps == 'undefined') {plugin._zmaps = {};}
var map = new google.maps.Map(document.getElementById(instance.$documentView.id+'-'+instance.$documentView.currLevel+'-'+plugin.mapCounter+'-'+instance.id),mapOptions);
plugin._maps[instance.$documentView.currLevel] = map;
plugin._zmaps[instance.$documentView.currLevel] = instance;
return map;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_initializeMarker = function() {
var plugin = this.$documentView.getPluginByLayoutObjectType(this.$type)
var map = plugin._maps[this.$documentView.currLevel];
var zmap = plugin._zmaps[this.$documentView.currLevel];
var drag = zenGet(this.draggable,false) ? true:false;
var title = zenGet(this.title,'');
if (zenGet(this.lat) && zenGet(this.lng)) {
var marker = new google.maps.Marker({
position: new google.maps.LatLng(this.lat,this.lng),
map: map,
title: title,
draggable: drag
});
if (zenGet(this.icon,'') != '') {
marker.icon = this.icon;
}
plugin._markers[plugin.$documentView.currLevel].push(marker);
zmap._markers.push(this);
this.$marker = marker;
} else if (zenGet(this.address,false)) {
var geocoder = new google.maps.Geocoder();
var instance = this;
var icon = this.icon;
var marker = new google.maps.Marker({
map: null,
draggable: drag,
title: title
});
plugin._markers[plugin.$documentView.currLevel].push(marker);
zmap._markers.push(instance);
instance.$marker = marker;
geocoder.geocode( {'address':this.address}, function (results, status) {
if (status == google.maps.GeocoderStatus.OK) {
marker.setPosition(results[0].geometry.location);
marker.setMap(map);
if (zenGet(icon,'') != '') {
marker.icon = icon;
}
} else {
alert(status);
}
});
}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_onCheckLibraries = function() {
if (typeof google === 'undefined') {
alert('Google Maps is not correctly loaded. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_openInfoWindow = function(infoKey,markerKey) {
var map = this._maps[this.$documentView.currLevel];
var infowindow = this.$documentView.getItemByKey(infoKey);
var marker = this.$documentView.getItemByKey(markerKey);
if(!marker) {marker = infowindow.$marker;}
else {
marker = marker.$marker; // Get the google maps marker
infowindow.$marker = marker;
}
if (infowindow) {
if (marker) {
infowindow.$infowindow.open(map,marker);
}
else {
infowindow.$infowindow.open(map);
}
}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_refreshDirections = function() {
var map = this.$documentView.getPluginByLayoutObjectType(this.$type)._maps[this.$documentView.currLevel];
var directionsDisplay = this.$directionsDisplay;
var directionsService = this.$directionsService;
directionsDisplay.setMap(map);
var travelMode = zenGet(this.travelMode,google.maps.DirectionsTravelMode.DRIVING);
var start = new google.maps.LatLng(zenGet(this.startLat),zenGet(this.startLng));
if (typeof this.startLat === 'undefined' || typeof this.startLng === 'undefined') {
start = map.getCenter();
}
var end = new google.maps.LatLng(zenGet(this.endLat),zenGet(this.endLng));
var request = {
origin:start,
destination:end,
travelMode: travelMode
};
directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setDirections(response);
}
});
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_refreshGMap = function() {
var instance = this;
var plugin = this.$documentView.getPluginByLayoutObjectType(this.$type);
var map;
if (zenGet(instance.centerLat) && zenGet(instance.centerLng)) {
map = plugin.refreshMapCenterLatLng(instance.centerLat, instance.centerLng, instance, plugin);
} else if (zenGet(instance.address)) {
map = plugin.refreshMapCenterLatLng(51.48, 0, instance, plugin);
plugin.centerMapAddress(instance.address, map);
} else {
map = plugin.refreshMapCenterLatLng(51.48, 0, instance, plugin);
alert('No coordinates or address.');
}
if (zenGet(instance.centerAtUser)) {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition( function (position) {
var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
map.setCenter(pos);
if (zenGet(instance.showMarkerAtCenter,false)) {
var centerMarker;
for (var i=0;i<instance._markers.length;i++) {
if (instance._markers[i].centerMarker) {
centerMarker = plugin._markers[instance.$documentView.currLevel][i];
}
}
if (centerMarker) {
centerMarker.setMap(null);
centerMarker.position = pos;
centerMarker.title = zenGet(instance.centerMarkerTitle,'');
centerMarker.draggable = zenGet(instance.centerMarkerDraggable,false);
centerMarker.setMap(map);
}
}
}, function() {
alert('Error: The Geolocation service failed.');
});
} else {
alert('This browser either does not support geolocation or the feature is not turned on.');
}
} else {
if (zenGet(instance.showMarkerAtCenter,false)) {
var centerMarker;
for (var i=0;i<instance._markers.length;i++) {
if (instance._markers[i].centerMarker) {
centerMarker = plugin._markers[instance.$documentView.currLevel][i];
}
}
if (centerMarker) {
centerMarker.setMap(null);
centerMarker.position = map.getCenter();
centerMarker.title = zenGet(instance.centerMarkerTitle,'');
centerMarker.draggable = zenGet(instance.centerMarkerDraggable,false);
centerMarker.setMap(map);
}
}
}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_refreshInfoWindow = function() {
var map = this.$documentView.getPluginByLayoutObjectType(this.$type)._maps[this.$documentView.currLevel];
var marker = false;
var options = {};
var content = '';
if (zenGet(this.$content)) {
content = this.$content;
} else if (this.$children) {
for (var i = 0; i<this.$children.length; i++) {
content = content + this.$children[i].$render();
}
}
options.content = content;
if (zenGet(this.zIndex) !== '') {
options.zIndex = this.zIndex;
}
options.position = new google.maps.LatLng(zenGet(this.lat,0),zenGet(this.lng,0));
this.$infowindow.setOptions(options);
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_refreshMap = function() {
var localMap = this.getGMap();
if (localMap != null) {
google.maps.event.trigger(localMap,'refresh');
}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_refreshMapCenterLatLng = function(lat,lng,instance,plugin) {
var centerLatLng = new google.maps.LatLng(lat,lng);
var map = plugin._maps[instance.$documentView.currLevel];
plugin._zmaps[instance.$documentView.currLevel] = instance;
var mapOptions = plugin.buildMapOptions(instance,centerLatLng);
map.setOptions(mapOptions);
return map;
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_refreshMarker = function() {
var plugin = this.$documentView.getPluginByLayoutObjectType(this.$type)
var map = plugin._maps[this.$documentView.currLevel];
var zmap = plugin._zmaps[this.$documentView.currLevel];
var drag = zenGet(this.draggable,false) ? true:false;
var title = zenGet(this.title,'');
this.$marker.setMap(null)
if (zenGet(this.lat) && zenGet(this.lng)) {
this.$marker.position = new google.maps.LatLng(this.lat,this.lng);
this.$marker.title = title;
this.$marker.draggable = drag;
if (zenGet(this.icon,'') != '') {
this.$marker.icon = this.icon;
}
this.$marker.setMap(map);
} else if (zenGet(this.address,false)) {
var geocoder = new google.maps.Geocoder();
var instance = this;
var icon = this.icon;
geocoder.geocode( {'address':this.address}, function (results, status) {
if (status == google.maps.GeocoderStatus.OK) {
instance.$marker.position = results[0].geometry.location;
instance.$marker.draggable = drag;
instance.$marker.title = title;
if (zenGet(icon,'') != '') {
instance.$marker.icon = icon;
}
instance.$marker.setMap(map);
} else {
alert(status);
}
});
}
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_renderGMap = function() {
var html = [];
var docView = this.$documentView;
var cHeight = zenGet(this.height);
cHeight = (cHeight==='') ? 100 : parseInt(cHeight,10);
var cWidth = zenGet(this.width);
cWidth = (cWidth==='') ? 100 : parseInt(cWidth,10);
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var plugin = this.$documentView.getPluginByLayoutObjectType(this.$type);
plugin.mapCounter = plugin.mapCounter+1;
var id = docView.id+'-'+docView.currLevel+'-' + this.$documentView.getPluginByLayoutObjectType(this.$type).mapCounter + '-' + this.id;
this.$id = id;
html.push('<div id="'+id+'" '+hidden+' style="width:'+cWidth+'px;height:'+cHeight+'px;position:relative;"></div>');
return html.join('');
}

self._ZEN_Mojo_Plugin_googleMaps3Helper_resizeMap = function() {
var localMap = this.getGMap();
if (localMap != null) {
google.maps.event.trigger(localMap,'resize');
}
}
self._ZEN_Mojo_Plugin_googleMaps3Helper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_googleMaps3Helper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_googleMaps3Helper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_googleMaps3Helper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.googleMaps3Helper';
	p._type = 'googleMaps3Helper';
	p.serialize = _ZEN_Mojo_Plugin_googleMaps3Helper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_googleMaps3Helper_getSettings;
	p.buildMapOptions = _ZEN_Mojo_Plugin_googleMaps3Helper_buildMapOptions;
	p.centerMapAddress = _ZEN_Mojo_Plugin_googleMaps3Helper_centerMapAddress;
	p.closeInfoWindow = _ZEN_Mojo_Plugin_googleMaps3Helper_closeInfoWindow;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_googleMaps3Helper_createLayoutObjects;
	p.getFeatures = _ZEN_Mojo_Plugin_googleMaps3Helper_getFeatures;
	p.getGMap = _ZEN_Mojo_Plugin_googleMaps3Helper_getGMap;
	p.getMarkers = _ZEN_Mojo_Plugin_googleMaps3Helper_getMarkers;
	p.initializeDirections = _ZEN_Mojo_Plugin_googleMaps3Helper_initializeDirections;
	p.initializeGMap = _ZEN_Mojo_Plugin_googleMaps3Helper_initializeGMap;
	p.initializeInfoWindow = _ZEN_Mojo_Plugin_googleMaps3Helper_initializeInfoWindow;
	p.initializeMapCenterLatLng = _ZEN_Mojo_Plugin_googleMaps3Helper_initializeMapCenterLatLng;
	p.initializeMarker = _ZEN_Mojo_Plugin_googleMaps3Helper_initializeMarker;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_googleMaps3Helper_onCheckLibraries;
	p.openInfoWindow = _ZEN_Mojo_Plugin_googleMaps3Helper_openInfoWindow;
	p.refreshDirections = _ZEN_Mojo_Plugin_googleMaps3Helper_refreshDirections;
	p.refreshGMap = _ZEN_Mojo_Plugin_googleMaps3Helper_refreshGMap;
	p.refreshInfoWindow = _ZEN_Mojo_Plugin_googleMaps3Helper_refreshInfoWindow;
	p.refreshMap = _ZEN_Mojo_Plugin_googleMaps3Helper_refreshMap;
	p.refreshMapCenterLatLng = _ZEN_Mojo_Plugin_googleMaps3Helper_refreshMapCenterLatLng;
	p.refreshMarker = _ZEN_Mojo_Plugin_googleMaps3Helper_refreshMarker;
	p.renderGMap = _ZEN_Mojo_Plugin_googleMaps3Helper_renderGMap;
	p.resizeMap = _ZEN_Mojo_Plugin_googleMaps3Helper_resizeMap;
}
/* EOF */