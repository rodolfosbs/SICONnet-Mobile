/*** Zen Module: ZEN_Mojo_Plugin_highCharts401Helper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/highCharts-4.0.1-Helper'] = '_ZEN_Mojo_Plugin_highCharts401Helper';
self._ZEN_Mojo_Plugin_highCharts401Helper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_highCharts401Helper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_highCharts401Helper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'highCharts-4.0.1-Helper';
	o.version = '1.0.3';
}
function _ZEN_Mojo_Plugin_highCharts401Helper_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_highCharts401Helper_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_highCharts401Helper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = false;
instance.$showTitle = false;
instance.$render = this.renderChart;
instance.$executeCodeBeforeChildren = this.initializeChart;
instance.$refresh = function(){
instance.$chart.destroy();
instance.$executeCodeBeforeChildren();
}
switch(type) {
case '$areachart':
instance.chartType = 'area';
break;
case '$arearangechart':
instance.chartType = 'arearange';
break;
case '$areasplinechart':
instance.chartType = 'areaspline';
break;
case '$areasplinerangechart':
instance.chartType = 'areasplinerange';
break;
case '$barchart':
instance.chartType = 'bar';
break;
case '$boxplotchart':
instance.chartType = 'boxplot';
break;
case '$bubblechart':
instance.chartType = 'bubble';
break;
case '$columnchart':
instance.chartType = 'column';
break;
case '$columnrangechart':
instance.chartType = 'columnrange';
break;
case '$errorbarchart':
instance.chartType = 'errorbar';
break;
case '$funnelchart':
instance.chartType = 'funnel';
break;
case '$gaugechart':
instance.chartType = 'gauge';
break;
case '$heatmapchart':
instance.chartType = 'heatmap';
break;
case '$linechart':
instance.chartType = 'line';
break;
case '$piechart':
instance.chartType = 'pie';
break;
case '$pyramidchart':
instance.chartType = 'pyramid';
break;
case '$scatterchart':
instance.chartType = 'scatter';
break;
case '$serieschart':
instance.chartType = 'series';
break;
case '$solidgaugechart':
instance.chartType = 'solidgauge';
break;
case '$splinechart':
instance.chartType = 'spline';
break;
case '$waterfallchart':
instance.chartType = 'waterfall';
break;
}
return instance;
}

self._ZEN_Mojo_Plugin_highCharts401Helper_getFeatures = function() {
var features = [
{identifier:'$chart'},
/* Shortcuts for most common chart types */
{identifier:'$areachart'},
{identifier:'$arearangechart'}, //Requires highcharts-more.js
{identifier:'$areasplinechart'},
{identifier:'$areasplinerangechart'}, //Requires highcharts-more.js
{identifier:'$barchart'},
{identifier:'$boxplotchart'},
{identifier:'$bubblechart'}, //Requires highcharts-more.js
{identifier:'$columnchart'},
{identifier:'$columnrangechart'}, //Requires highcharts-more.js
{identifier:'$errorbarchart'},
{identifier:'$funnelchart'},
{identifier:'$gaugechart'}, //Requires highcharts-more.js
{identifier:'$heatmapchart'},
{identifier:'$linechart'},
{identifier:'$piechart'},
{identifier:'$pyramidchart'},
{identifier:'$scatterchart'},
{identifier:'$serieschart'},
{identifier:'$solidgaugechart'}, //Requires highcharts-more.js
{identifier:'$splinechart'},
{identifier:'$waterfallchart'},
];
return features;
}

self._ZEN_Mojo_Plugin_highCharts401Helper_initializeChart = function() {
var instance = this;
var options = (zenGet(instance.options,false)? instance.options: {});
if (zenGet(instance.title,false)) {
if (!options.title) { options.title = {}; }
options.title.text = instance.title;
}
if (zenGet(instance.subtitle,false)) {
if (!options.subtitle) { options.subtitle = {}; }
options.subtitle.text = instance.subtitle;
}
switch (typeof instance.xAxis) {
case 'object':
if (instance.xAxis instanceof Array) {
if (!options.xAxis) { options.xAxis = {}; }
options.xAxis.categories = instance.xAxis;
}
else {
options.xAxis = instance.xAxis;
}
break;
case 'string':
if (!options.xAxis) { options.xAxis = {}; }
options.xAxis.title = { text: instance.yAxis };
break;
}
switch (typeof instance.yAxis) {
case 'object':
if (instance.yAxis instanceof Array) {
if (!options.yAxis) { options.yAxis = {}; }
options.yAxis.categories = instance.yAxis;
}
else {
options.yAxis = instance.yAxis;
}
break;
case 'string':
if (!options.yAxis) { options.yAxis = {}; }
options.yAxis.title = { text: instance.yAxis };
break;
}
if (!options.series) {options.series = [];}
for (var i = 0; i < (instance.series? instance.series.length: 0); i++) {
options.series.push({
name: (zenGet(instance.seriesNames, false)? zenGet(instance.seriesNames[i], ''): ''),
data: instance.series[i]
});
}
if (!options.chart) { options.chart = {}; }
options.chart.renderTo = instance.$makeId('highcharts');
options.chart.type = zenGet(instance.chartType, zenGet(options.chart.type,'line'));
if (!this.$ignoreSelect) {
instance = this;
defaultEventHandler = function(evt) {
instance.$documentView.onselect(instance.key,{chartX:evt.chartX,chartY:evt.chartY});
};
pointEventHandler = function(evt) {
var findIndexByPoint = function(data, point) {
for (var i = 0; i < data.length; i++) {
if (data[i] == point) {
return i;
}
}
return -1;
}
instance.$documentView.onselect(instance.key,{seriesIndex:evt.point.series.index,dataIndex:findIndexByPoint(evt.point.series.data, evt.point)});
}
if (typeof options.chart.events == 'undefined') {
options.chart.events = {click:defaultEventHandler};
} else if (typeof options.chart.events.click == 'undefined') {
options.chart.events.click = defaultEventHandler;
}
if (typeof options.plotOptions == 'undefined') {
options.plotOptions = {series:{point:{events:{click:pointEventHandler}}}};
} else if (typeof options.plotOptions.series == 'undefined') {
options.plotOptions.series = {point:{events:{click:pointEventHandler}}};
} else if (typeof options.plotOptions.series.point == 'undefined') {
options.plotOptions.series.point = {events:{click:pointEventHandler}};
} else if (typeof options.plotOptions.series.point.events == 'undefined') {
options.plotOptions.series.point.events = {click:pointEventHandler};
} else if (typeof options.plotOptions.series.point.events.click == 'undefined') {
options.plotOptions.series.point.events.click = pointEventHandler;
}
}
instance.$chart = new Highcharts.Chart(options);
instance.getChart = function() {
if (this.$chart) { return this.$chart }
return null;
}
}

self._ZEN_Mojo_Plugin_highCharts401Helper_onCheckLibraries = function() {
if (typeof $ === 'undefined') {
alert('jQuery library is not loaded correctly. Check your includes.');
return false;
} else
if (typeof Highcharts != 'object') {
alert('HighCharts library is not loaded correctly. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_highCharts401Helper_renderChart = function() {
var html = [];
var docView = this.$documentView;
var cHeight = zenGet(this.height);
var cWidth = zenGet(this.width);
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var cssClass = zenGet(this.cssClass,false)? 'class="'+this.cssClass+'"': '';
if (typeof cHeight == 'number' || parseInt(cHeight,10) == cHeight) {
if (cHeight > 100) {
cHeight = cHeight.toString() + 'px';
} else {
cHeight = cHeight.toString() + '%';
}
}
if (typeof cWidth == 'number' || parseInt(cWidth,10) == cWidth) {
if (cWidth > 100) {
cWidth = cWidth.toString() + 'px';
} else {
cWidth = cWidth.toString() + '%';
}
}
html.push('<div id="'+this.$makeId('highcharts')+'" '+hidden+' '+cssClass+' style="width:'+cWidth+';height:'+cHeight+';'+zenGet(this.style,'')+'">');
html.push('</div>');
return html.join('');
}
self._ZEN_Mojo_Plugin_highCharts401Helper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_highCharts401Helper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_highCharts401Helper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_highCharts401Helper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.highCharts401Helper';
	p._type = 'highCharts401Helper';
	p.serialize = _ZEN_Mojo_Plugin_highCharts401Helper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_highCharts401Helper_getSettings;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_highCharts401Helper_createLayoutObjects;
	p.getFeatures = _ZEN_Mojo_Plugin_highCharts401Helper_getFeatures;
	p.initializeChart = _ZEN_Mojo_Plugin_highCharts401Helper_initializeChart;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_highCharts401Helper_onCheckLibraries;
	p.renderChart = _ZEN_Mojo_Plugin_highCharts401Helper_renderChart;
}
/* EOF */