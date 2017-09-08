/*** Zen Module: ZEN_Mojo_Plugin_googleMapsHelper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/googleMapsHelper'] = '_ZEN_Mojo_Plugin_googleMapsHelper';
self._ZEN_Mojo_Plugin_googleMapsHelper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_googleMapsHelper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_googleMapsHelper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.mapCounter = '0';
	o.pluginName = 'googleMapsHelper';
	o.version = '1.0.5';
}
function _ZEN_Mojo_Plugin_googleMapsHelper_serialize(set,s)
{
	var o = this;s[0]='9719969';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.mapCounter;s[8]=o.onupdate;s[9]=o.pluginName;s[10]=o.renderFlag;s[11]=o.tuple;s[12]=o.version;s[13]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_googleMapsHelper_getSettings(s)
{
	s['name'] = 'string';
	s['mapCounter'] = 'integer';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_googleMapsHelper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = false;
switch(type) {
case '$map':
instance.$render = this.renderGMap;
instance.$executeCodeBeforeChildren = this.initializeGMap;
instance.$isLoop = true;
instance.$children = [];
break;
case '$marker':
instance.$render = new function() {};
instance.$executeCodeBeforeChildren = this.initializeMarker;
break;
case '$directions':
instance.$render = new function() {};
instance.$executeCodeBeforeChildren = this.initializeDirections;
break;
}
return instance;
}

self._ZEN_Mojo_Plugin_googleMapsHelper_getFeatures = function() {
var features = [
{identifier:'$map'},
{identifier:'$marker'},
{identifier:'$directions'},
];
return features;
}

self._ZEN_Mojo_Plugin_googleMapsHelper_getGMap = function() {
return this._maps[this.$documentView.currLevel];
}

self._ZEN_Mojo_Plugin_googleMapsHelper_initializeDirections = function() {
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
}

self._ZEN_Mojo_Plugin_googleMapsHelper_initializeGMap = function() {
var centerLatLng = new google.maps.LatLng(zenGet(this.centerLat),zenGet(this.centerLng));
var plugin = this.$documentView.getPluginByLayoutObjectType(this.$type);
var instance = this;
var mapOptions = {
zoom: zenGet(this.zoom,8),
center: centerLatLng,
mapTypeId : zenGet(this.mapTypeId,google.maps.MapTypeId.HYBRID)
};
if (typeof plugin._maps == 'undefined') {
plugin._maps = {};
}
map = new google.maps.Map(document.getElementById(this.$documentView.id+'-'+this.$documentView.currLevel+'-'+plugin.mapCounter+'-'+this.id),mapOptions);
plugin._maps[this.$documentView.currLevel] = map;
if (zenGet(instance.centerAtUser,false)) {
if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
map.setCenter(pos);
if (zenGet(instance.showMarkerAtCenter,false)) {
var marker = new google.maps.Marker({
position: pos,
map: map,
title: zenGet(instance.centerMarkerTitle,'')
});
}
}, function() {});
} else {
}
} else {
if (zenGet(instance.showMarkerAtCenter,false)) {
var marker = new google.maps.Marker({
position: map.getCenter(),
map: map,
title: zenGet(instance.centerMarkerTitle,'')
});
}
}
}

self._ZEN_Mojo_Plugin_googleMapsHelper_initializeMarker = function() {
var map = this.$documentView.getPluginByLayoutObjectType(this.$type)._maps[this.$documentView.currLevel];
var markerObj = {
position: new google.maps.LatLng(zenGet(this.lat),zenGet(this.lng)),
map: map,
title: zenGet(this.title,'')
}
if (zenGet(this.icon,'') != '') {
markerObj.icon = this.icon;
}
var marker = new google.maps.Marker(markerObj);
}

self._ZEN_Mojo_Plugin_googleMapsHelper_onCheckLibraries = function() {
if (typeof google === 'undefined') {
alert('Google Maps is not correctly loaded. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_googleMapsHelper_refreshMap = function() {
var localMap = this.getGMap();
if (typeof localMap != 'undefined') {
google.maps.event.trigger(localMap,'refresh');
}
}

self._ZEN_Mojo_Plugin_googleMapsHelper_renderGMap = function() {
var html = [];
var docView = this.$documentView;
var cHeight = zenGet(this.height);
cHeight = (cHeight==='') ? 100 : parseInt(cHeight,10);
var cWidth = zenGet(this.width);
cWidth = (cWidth==='') ? 100 : parseInt(cWidth,10);
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var plugin = this.$documentView.getPluginByLayoutObjectType(this.$type);
plugin.mapCounter = plugin.mapCounter+1;
html.push('<div id="'+docView.id+'-'+docView.currLevel+'-' + this.$documentView.getPluginByLayoutObjectType(this.$type).mapCounter + '-' + this.id + '" '+hidden+' style="width:'+cWidth+'px;height:'+cHeight+'px;position:relative;"></div>');
return html.join('');
}

self._ZEN_Mojo_Plugin_googleMapsHelper_resizeMap = function() {
var localMap = this.getGMap();
if (typeof localMap != 'undefined') {
google.maps.event.trigger(localMap,'resize');
}
}
self._ZEN_Mojo_Plugin_googleMapsHelper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_googleMapsHelper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_googleMapsHelper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_googleMapsHelper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.googleMapsHelper';
	p._type = 'googleMapsHelper';
	p.serialize = _ZEN_Mojo_Plugin_googleMapsHelper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_googleMapsHelper_getSettings;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_googleMapsHelper_createLayoutObjects;
	p.getFeatures = _ZEN_Mojo_Plugin_googleMapsHelper_getFeatures;
	p.getGMap = _ZEN_Mojo_Plugin_googleMapsHelper_getGMap;
	p.initializeDirections = _ZEN_Mojo_Plugin_googleMapsHelper_initializeDirections;
	p.initializeGMap = _ZEN_Mojo_Plugin_googleMapsHelper_initializeGMap;
	p.initializeMarker = _ZEN_Mojo_Plugin_googleMapsHelper_initializeMarker;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_googleMapsHelper_onCheckLibraries;
	p.refreshMap = _ZEN_Mojo_Plugin_googleMapsHelper_refreshMap;
	p.renderGMap = _ZEN_Mojo_Plugin_googleMapsHelper_renderGMap;
	p.resizeMap = _ZEN_Mojo_Plugin_googleMapsHelper_resizeMap;
}
/* EOF */