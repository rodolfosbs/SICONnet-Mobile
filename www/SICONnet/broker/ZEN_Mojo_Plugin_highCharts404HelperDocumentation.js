/*** Zen Module: ZEN_Mojo_Plugin_highCharts404HelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/highCharts404HelperDocumentation'] = '_ZEN_Mojo_Plugin_highCharts404HelperDocumentation';
self._ZEN_Mojo_Plugin_highCharts404HelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_highCharts404HelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_highCharts404HelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_highCharts404HelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_highCharts404HelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_highCharts404HelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
var defAttributes = [
{name:'height',type:'string',refreshable:false,description:'CSS height of the placeholder div for this chart. Defaults to px or %(if less than 100) if a number is provided.'},
{name:'width',type:'string',refreshable:false,description:'CSS width of the placeholder div for this chart. Defaults to px or %(if less than 100) if a number is provided.'},
{name:'cssClass',type:'string',refreshable:false,description:'CSS class name(s) of the placeholder div for this chart.'},
{name:'style',type:'string',refreshable:false,description:'Style defintion of the placeholder div for this chart.'},
{name:'options',type:'object',refreshable:true,description:'This object can define all data to be displayed by the chart. Some of the data can be specified in the other attributes, but the will be overridden by this attribute. See http://api.highcharts.com/highcharts for specific documentation.'},
{name:'title',type:'string',refreshable:true,description:'The title to be displayed above the chart'},
{name:'subtitle',type:'string',refreshable:true,description:'The subtitle to be displayed below the title'},
{name:'xAxis',type:'object',refreshable:true,description:'Can be defined as an object, array or string. An array will define the xAxis categories, a string will define the xAxis title, and an object can do either.'},
{name:'yAxis',type:'object',refreshable:true,description:'Can be defined as an object, array or string. An array will define the yAxis categories, a string will define the yAxis title, and an object can do either.'},
{name:'series',type:'array',refreshable:true,description:'Must be defined as an array of datasets. Each element in the series attribute represents a separate dataset.'},
{name:'seriesNames',type:'array',refreshable:true,description:'Must be defined as an array of strings. Each element will label its corresponding dataset in the series attribute.'},
{name:'$ignoreSelect',type:'boolean',description:'If true, suppress default generation of select handers (if any).'},
];
switch (identifier) {
case '$chart':
defAttributes.push({name:'chartType',type:'string',description:'The type of chart to render, the default is "bar".'});
documentation = {
description:'Displays a chart specified by chartType.',
attributes:defAttributes
};
break;
default:
documentation = {
description:'Displays a ' + identifier.substring(1,identifier.length-5) + ' chart.',
attributes:defAttributes
};
break;
/*case '$linechart':
documentation = {
description:'Displays a line chart.',
attributes:defAttributes
};
break;
case '$barchart':
documentation = {
description:'Displays a bar chart.',
attributes:defAttributes
};
break;
case '$columnchart':
documentation = {
description:'Displays a column chart.',
attributes:defAttributes
};
break;
case '$areachart':
documentation = {
description:'Displays an area chart.',
attributes:defAttributes
};
break;
case '$piechart':
documentation = {
description:'Displays a pie chart.',
attributes:defAttributes
};
break;
*/
}
return documentation;
}
self._ZEN_Mojo_Plugin_highCharts404HelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_highCharts404HelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_highCharts404HelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_highCharts404HelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.highCharts404HelperDocumentation';
	p._type = 'highCharts404HelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_highCharts404HelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_highCharts404HelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_highCharts404HelperDocumentation_getDocumentation;
}
/* EOF */