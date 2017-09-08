/*** Zen Module: ZEN_Mojo_Plugin_charts101HelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/charts101HelperDocumentation'] = '_ZEN_Mojo_Plugin_charts101HelperDocumentation';
self._ZEN_Mojo_Plugin_charts101HelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_charts101HelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_charts101HelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_charts101HelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_charts101HelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_charts101HelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
var defAttributes = [
{name:'height',type:'number',refreshable:false,description:'Height of the canvas for this chart.'},
{name:'width',type:'number',refreshable:false,description:'Width of the canvas for this chart.'},
{name:'cssClass',type:'string',refreshable:false,description:'CSS class name(s) of the canvas for this chart.'},
{name:'style',type:'string',refreshable:false,description:'Style defintion of the canvas for this chart.'},
{name:'data',type:'object',refreshable:true,description:'The data to be displayed by the chart. This data must be structured differently for most chart types. See http://www.chartjs.org/docs/'},
{name:'options',type:'object',refreshable:true,description:'The options to be set on the chart. The allowed options are different for most chart types. See http://www.chartjs.org/docs/'},
{name:'$ignoreSelect',type:'boolean',description:'If true, suppress default generation of select handers (if any).'},
];
switch (identifier) {
case '$chart':
defAttributes.push({name:'chartType',type:'string',refreshable:true,description:'The type of chart to render, the default is "bar".'});
documentation = {
description:'Displays a chart specified by chartType ($barchart by default).',
attributes:defAttributes
};
break;
case '$linechart':
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
case '$doughnutchart':
documentation = {
description:'Displays a doughnut chart.',
attributes:defAttributes
};
break;
case '$piechart':
documentation = {
description:'Displays a pie chart.',
attributes:defAttributes
};
break;
case '$polarareachart':
documentation = {
description:'Displays a polar area chart.',
attributes:defAttributes
};
break;
case '$radarchart':
documentation = {
description:'Displays a radar chart.',
attributes:defAttributes
};
break;
}
return documentation;
}
self._ZEN_Mojo_Plugin_charts101HelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_charts101HelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_charts101HelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_charts101HelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.charts101HelperDocumentation';
	p._type = 'charts101HelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_charts101HelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_charts101HelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_charts101HelperDocumentation_getDocumentation;
}
/* EOF */