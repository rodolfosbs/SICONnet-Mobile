/*** Zen Module: ZEN_Mojo_Plugin_dojo1912DChartHelper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/dojo-1.9.1-2DChartHelper'] = '_ZEN_Mojo_Plugin_dojo1912DChartHelper';
self._ZEN_Mojo_Plugin_dojo1912DChartHelper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_dojo1912DChartHelper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'dojo-1.9.1-2DChartHelper';
	o.version = '1.0.8';
}
function _ZEN_Mojo_Plugin_dojo1912DChartHelper_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_dojo1912DChartHelper_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = true;
if (zenGet(instance.renderInline,false)) {
instance.$hasBlock = false;
}
instance.$showTitle = false;
instance.$executeCodeBeforeChildren = this.linkDojoItem;
instance.$getDojoItem = function() { return this.$dojoItem; };
instance.$hide = this.hideChart;
instance.$show = this.showChart;
var defaultSetValue = function(value,notify) {
this.value = value;
this.$dojoItem.set('value',value);
};
var defaultGetValue = function() {
return this.$dojoItem.get('value');
};
switch (type) {
case '$Chart':
instance.$render = this.renderChart;
instance.$refresh = this.refreshChart;
instance.$executeCodeBeforeChildren = this.setupChart;
instance.$dojoType = 'dojox/charting/Chart';
instance.$hasBlock = false;
break;
case '$ChartLegend':
instance.$render = this.renderChartLegend;
instance.$refresh = this.refreshChartLegend;
instance.$hasBlock = false;
break;
}
return null;
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_getDojoTypes = function() {
if (typeof this._registeredTypes == 'undefined') {
return [];
}
if (typeof this._registeredTypes[this.$documentView.currLevel] == 'undefined') {
return [];
}
return this._registeredTypes[this.$documentView.currLevel];
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_getFeatures = function() {
return [
{identifier:'$Chart'},
{identifier:'$ChartLegend'},
];
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_hideChart = function() {
var props = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
dojo.query('#'+this.$makeId('dojo')).style('display','none');
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_linkDojoItem = function() {
var registry = require("dijit/registry");
var item = registry.byId(this.$makeId('dojo'));
this.$dojoItem = item;
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_onCheckLibraries = function() {
if (typeof require === 'undefined') {
alert('Dojo library is not loaded correctly. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_refreshChart = function() {
var props = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
var chart = this.$dojoItem;
require([zenGet(this.theme,'dojox/charting/themes/Claro')], function(theme){
chart.setTheme(theme);
});
if (this.$children) {
for (var i = 0; i < this.$children.length; i++) {
var child = this.$children[i];
switch (child.type) {
case '$Series':
chart.updateSeries(child.title,child.data,true);
break;
}
}
}
chart.render();
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_refreshChartLegend = function() {
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_registerDojoType = function(instance) {
var documentView = instance.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(instance.$type);
if (typeof plugin._registeredTypes == 'undefined') {
plugin._registeredTypes = [];
}
if (typeof plugin._registeredTypes[documentView.currLevel] == 'undefined') {
plugin._registeredTypes[documentView.currLevel] = [];
}
var thisLevel = plugin._registeredTypes[documentView.currLevel];
if (thisLevel.indexOf(instance.$dojoType) == -1) {
thisLevel.push(instance.$dojoType);
}
if (typeof instance.$additionalRequires != 'undefined') {
for (var i = 0; i < instance.$additionalRequires.length; i++) {
thisLevel.push(instance.$additionalRequires[i]);
}
}
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_registerDojoTypeByType = function(type) {
var documentView = this.$documentView;
if (typeof this._registeredTypes == 'undefined') {
this._registeredTypes = [];
}
if (typeof this._registeredTypes[documentView.currLevel] == 'undefined') {
this._registeredTypes[documentView.currLevel] = [];
}
var thisLevel = this._registeredTypes[documentView.currLevel];
if (thisLevel.indexOf(type) == -1) {
thisLevel.push(type);
}
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_renderChart = function() {
var html = [];
var props = [];
var attributes = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
html.push('<div id="'+this.$makeId('dojo')+'" style="'+zenGet(this.style,'')+'">');
html.push('</div>');
var content = documentView.injectEventHandler(html.join(''),this);
return content;
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_renderChartLegend = function() {
var html = [];
var props = [];
var attributes = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
html.push('<div id="'+this.$makeId('dojo')+'">');
html.push('</div>');
var content = documentView.injectEventHandler(html.join(''),this);
return content;
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_setupChart = function(update) {
var instance = this;
var requiredModules = [];
var hasLegend = zenGet(instance.legend,'') == '' ? false : true;
var legendInstance = null;
requiredModules.push(zenGet(instance.theme,'dojox/charting/themes/Claro'));
if (hasLegend) {
legendInstance = instance.$documentView.getItemByKey(instance.legend);
if (legendInstance.selectable) {
requiredModules.push("dojox/charting/widget/SelectableLegend");
} else {
requiredModules.push("dojox/charting/widget/Legend");
}
}
if (instance.$children) {
for (var i = 0; i < instance.$children.length; i++) {
var child = instance.$children[i];
if (child.type=='$Plot') {
requiredModules.push(zenGet(child.plotType,'dojox/charting/plot2d/Default'));
var childOptions = child.options;
if (childOptions && zenGet(childOptions.markers,false)) {
requiredModules.push("dojox/charting/plot2d/Markers");
}
if (childOptions && zenGet(childOptions.tooltip,false)) {
requiredModules.push("dojox/charting/action2d/Tooltip");
}
if (childOptions && zenGet(childOptions.highlight,false)) {
requiredModules.push("dojox/charting/action2d/Highlight");
}
if (childOptions && zenGet(childOptions.shake,false)) {
requiredModules.push("dojox/charting/action2d/Shake");
}
if (childOptions && zenGet(childOptions.moveSlice,false)) {
requiredModules.push("dojox/charting/action2d/MoveSlice");
}
if (childOptions && zenGet(childOptions.magnify,false)) {
requiredModules.push("dojox/charting/action2d/Magnify");
}
if (childOptions && zenGet(childOptions.mousezoomandpan,false)) {
requiredModules.push("dojox/charting/action2d/MouseZoomAndPan");
}
if (childOptions && zenGet(childOptions.touchzoomandpan,false)) {
requiredModules.push("dojox/charting/action2d/TouchZoomAndPan");
}
if (childOptions && typeof zenGet(childOptions.animate,null) === 'object') {
requiredModules.push("dojo/fx/easing");
}
}
}
}
requiredModules.push("dojox/charting/axis2d/Default");
require(['dojox/charting/Chart'].concat(requiredModules), function(Chart, Theme) {
var chart;
if (update) {
chart = instance.$dojoItem;
} else {
chart = new Chart(instance.$makeId('dojo'),zenGet(instance.title,null));
}
chart.setTheme(Theme);
if (instance.$children) {
for (var i = 0; i < instance.$children.length; i++) {
var child = instance.$children[i];
switch (child.type) {
case '$Plot':
var childOptions = child.options;
var animate = childOptions ? zenGet(childOptions.animate,null) : null;
if (animate != null && typeof animate === 'object') {
if (animate.easing) {
var Easing = require("dojo/fx/easing");
animate.easing = Easing[animate.easing];
}
}
var Type = require(child.plotType);
var options = {
type:Type,
animate:animate
};
if (childOptions) {
for (attr in childOptions) {
if (attr != 'animate') {
options[attr] = childOptions[attr];
} else {
options.animate = animate;
}
}
}
chart.addPlot(zenGet(child.name,'default'), options);
if (childOptions && zenGet(childOptions.tooltip,false)) {
var Tooltip = require("dojox/charting/action2d/Tooltip");
new Tooltip(chart,zenGet(child.name,'default'),zenGet(childOptions.tooltipOptions,{}));
}
if (childOptions && zenGet(childOptions.highlight,false)) {
var Highlight = require("dojox/charting/action2d/Highlight");
new Highlight(chart,zenGet(child.name,'default'),zenGet(childOptions.highlightOptions,{}));
}
if (childOptions && zenGet(childOptions.magnify,false)) {
var Magnify = require("dojox/charting/action2d/Magnify");
new Magnify(chart,zenGet(child.name,'default'),zenGet(childOptions.magnifyOptions,{}));
}
if (childOptions && zenGet(childOptions.moveSlice,false)) {
var MoveSlice = require("dojox/charting/action2d/MoveSlice");
new MoveSlice(chart,zenGet(child.name,'default'));
}
if (childOptions && zenGet(childOptions.shake,false)) {
var Shake = require("dojox/charting/action2d/Shake");
new Shake(chart,zenGet(child.name,'default'),zenGet(childOptions.shakeOptions,{}));
}
if (childOptions && zenGet(childOptions.mousezoomandpan,false)) {
var MZaP = require("dojox/charting/action2d/MouseZoomAndPan");
new MZaP(chart,zenGet(child.name,'default'),zenGet(childOptions.mousezoomandpanOptions,{}));
}
if (childOptions && zenGet(childOptions.touchzoomandpan,false)) {
var TZaP = require("dojox/charting/action2d/TouchZoomAndPan");
new TZaP(chart,zenGet(child.name,'default'),zenGet(childOptions.touchzoomandpanOptions,{}));
}
if (!instance.$ignoreSelect) {
var onEvent = function(event) {
if (event && event.type == "onclick") {
instance.$documentView.onselect(instance.key,event);
}
}
if (child.plotType != 'dojox/charting/plot2d/Grid') {
chart.connectToPlot(zenGet(child.name,'default'),{},onEvent);
}
}
break;
case '$Series':
chart.addSeries(child.title,child.data,child.options);
break;
case '$Axis':
chart.addAxis(child.name,child.options);
break;
}
}
}
chart.render();
if (hasLegend) {
var Legend = null;
if (legendInstance.selectable) {
Legend = require("dojox/charting/widget/SelectableLegend");
} else {
Legend = require("dojox/charting/widget/Legend");
}
var legend = new Legend({chart:chart,outline:zenGet(legendInstance.outline,false)},legendInstance.$makeId('dojo'));
}
instance.$dojoItem = chart;
});
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelper_showChart = function() {
var props = [];
var documentView = this.$documentView;
var plugin = documentView.getPluginByLayoutObjectType(this.$type);
dojo.query('#'+this.$makeId('dojo')).style('display','block');
}
self._ZEN_Mojo_Plugin_dojo1912DChartHelper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_dojo1912DChartHelper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_dojo1912DChartHelper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_dojo1912DChartHelper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.dojo1912DChartHelper';
	p._type = 'dojo1912DChartHelper';
	p.serialize = _ZEN_Mojo_Plugin_dojo1912DChartHelper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_dojo1912DChartHelper_getSettings;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_dojo1912DChartHelper_createLayoutObjects;
	p.getDojoTypes = _ZEN_Mojo_Plugin_dojo1912DChartHelper_getDojoTypes;
	p.getFeatures = _ZEN_Mojo_Plugin_dojo1912DChartHelper_getFeatures;
	p.hideChart = _ZEN_Mojo_Plugin_dojo1912DChartHelper_hideChart;
	p.linkDojoItem = _ZEN_Mojo_Plugin_dojo1912DChartHelper_linkDojoItem;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_dojo1912DChartHelper_onCheckLibraries;
	p.refreshChart = _ZEN_Mojo_Plugin_dojo1912DChartHelper_refreshChart;
	p.refreshChartLegend = _ZEN_Mojo_Plugin_dojo1912DChartHelper_refreshChartLegend;
	p.registerDojoType = _ZEN_Mojo_Plugin_dojo1912DChartHelper_registerDojoType;
	p.registerDojoTypeByType = _ZEN_Mojo_Plugin_dojo1912DChartHelper_registerDojoTypeByType;
	p.renderChart = _ZEN_Mojo_Plugin_dojo1912DChartHelper_renderChart;
	p.renderChartLegend = _ZEN_Mojo_Plugin_dojo1912DChartHelper_renderChartLegend;
	p.setupChart = _ZEN_Mojo_Plugin_dojo1912DChartHelper_setupChart;
	p.showChart = _ZEN_Mojo_Plugin_dojo1912DChartHelper_showChart;
}
/* EOF */