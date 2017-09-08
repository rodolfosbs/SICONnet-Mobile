/*** Zen Module: ZEN_Mojo_Plugin_charts101Helper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/charts-1.0.1-Helper'] = '_ZEN_Mojo_Plugin_charts101Helper';
self._ZEN_Mojo_Plugin_charts101Helper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_charts101Helper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_charts101Helper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'charts-1.0.1-Helper';
	o.version = '1.0.4';
}
function _ZEN_Mojo_Plugin_charts101Helper_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_charts101Helper_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_charts101Helper_addData = function(key,data,labelOrIndex) {
var instance = this.$documentView.getItemByKey(key);
instance.$chart.addData(data,labelOrIndex);
}

self._ZEN_Mojo_Plugin_charts101Helper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = false;
instance.$render = this.renderChart;
instance.$hide = this.hideChart;
instance.$show = this.showChart;
instance.$executeCodeBeforeChildren = this.initializeChart;
instance.$refresh = function(){
instance.$chart.destroy();
instance.$executeCodeBeforeChildren();
}
switch(type) {
case '$linechart':
instance.chartType = 'line';
break;
case '$barchart':
instance.chartType = 'bar';
break;
case '$doughnutchart':
instance.chartType = 'doughnut';
break;
case '$piechart':
instance.chartType = 'pie';
break;
case '$polarareachart':
instance.chartType = 'polar';
break;
case '$radarchart':
instance.chartType = 'radar';
break;
case '$chart':
if (!instance.chartType) { instance.chartType='bar'; }
else if (instance.chartType == 'polararea') { instance.chartType='polar'; }
break;
}
return instance;
}

self._ZEN_Mojo_Plugin_charts101Helper_getFeatures = function() {
var features = [
{identifier:'$chart'},
/* Shortcuts for most common chart types */
{identifier:'$linechart'},
{identifier:'$barchart'},
{identifier:'$doughnutchart'},
{identifier:'$piechart'},
{identifier:'$polarareachart'},
{identifier:'$radarchart'},
];
return features;
}

self._ZEN_Mojo_Plugin_charts101Helper_hideChart = function(duration,callback) {
$('#'+this.$makeId('charts')).hide(duration, callback);
}

self._ZEN_Mojo_Plugin_charts101Helper_initializeChart = function() {
var data = zenGet(this.data,false) ? this.data:'';
var options = zenGet(this.options,false) ? this.options:{};
var eventHandler = function(evt){};
if (data) {
var ctx = this.$findElement('charts').getContext('2d');
var instance = this;
switch (this.chartType) {
case 'line':
this.$chart = new Chart(ctx).Line(data,options);
eventHandler = function(evt) {
var activeElements = instance.$chart.getPointsAtEvent(evt);
instance.$documentView.onselect(instance.key,activeElements);
};
break;
case 'bar':
this.$chart = new Chart(ctx).Bar(data,options);
eventHandler = function(evt) {
var activeElements = instance.$chart.getBarsAtEvent(evt);
instance.$documentView.onselect(instance.key,activeElements);
};
break;
case 'doughnut':
this.$chart = new Chart(ctx).Doughnut(data,options);
eventHandler = function(evt) {
var activeElements = instance.$chart.getSegmentsAtEvent(evt);
instance.$documentView.onselect(instance.key,activeElements);
};
break;
case 'pie':
this.$chart = new Chart(ctx).Pie(data,options);
eventHandler = function(evt) {
var activeElements = instance.$chart.getSegmentsAtEvent(evt);
instance.$documentView.onselect(instance.key,activeElements);
};
break;
case 'polar':
this.$chart = new Chart(ctx).PolarArea(data,options);
eventHandler = function(evt) {
var activeElements = instance.$chart.getSegmentsAtEvent(evt);
instance.$documentView.onselect(instance.key,activeElements);
};
break;
case 'radar':
this.$chart = new Chart(ctx).Radar(data,options);
eventHandler = function(evt) {
var activeElements = instance.$chart.getPointsAtEvent(evt);
instance.$documentView.onselect(instance.key,activeElements);
};
break;
default:
console.log('chartType "' + this.chartType + '" not recognized.');
break;
}
if (zenGet(this.hidden) !== '') {this.hidden?this.$hide():this.$show();}
}
if (this.$chart && !this.$ignoreSelect) {
this.$findElement('charts').onclick = eventHandler;
}
}

self._ZEN_Mojo_Plugin_charts101Helper_onCheckLibraries = function() {
if (typeof Chart != 'function') {
alert('Chart.js library is not loaded correctly. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_charts101Helper_removeData = function(key,index) {
var instance = this.$documentView.getItemByKey(key);
instance.$chart.removeData(index);
}

self._ZEN_Mojo_Plugin_charts101Helper_renderChart = function() {
var html = [];
var docView = this.$documentView;
var cHeight = zenGet(this.height);
cHeight = (cHeight==='') ? 100 : parseInt(cHeight,10);
var cWidth = zenGet(this.width);
cWidth = (cWidth==='') ? 100 : parseInt(cWidth,10);
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var cssClass = zenGet(this.cssClass,false)? this.cssClass+'"': '';
html.push('<canvas id="'+this.$makeId('charts')+'" width="'+cWidth+'" height="'+cHeight+'" '+hidden+' class="'+cssClass+'" style="'+zenGet(this.style,'')+'">');
html.push('</canvas>');
return html.join('');
}

self._ZEN_Mojo_Plugin_charts101Helper_showChart = function(duration,callback) {
$('#'+this.$makeId('charts')).show(duration, callback);
}

self._ZEN_Mojo_Plugin_charts101Helper_update = function(key) {
var instance = this.$documentView.getItemByKey(key);
instance.$chart.update();
}
self._ZEN_Mojo_Plugin_charts101Helper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_charts101Helper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_charts101Helper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_charts101Helper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.charts101Helper';
	p._type = 'charts101Helper';
	p.serialize = _ZEN_Mojo_Plugin_charts101Helper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_charts101Helper_getSettings;
	p.addData = _ZEN_Mojo_Plugin_charts101Helper_addData;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_charts101Helper_createLayoutObjects;
	p.getFeatures = _ZEN_Mojo_Plugin_charts101Helper_getFeatures;
	p.hideChart = _ZEN_Mojo_Plugin_charts101Helper_hideChart;
	p.initializeChart = _ZEN_Mojo_Plugin_charts101Helper_initializeChart;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_charts101Helper_onCheckLibraries;
	p.removeData = _ZEN_Mojo_Plugin_charts101Helper_removeData;
	p.renderChart = _ZEN_Mojo_Plugin_charts101Helper_renderChart;
	p.showChart = _ZEN_Mojo_Plugin_charts101Helper_showChart;
	p.update = _ZEN_Mojo_Plugin_charts101Helper_update;
}
/* EOF */