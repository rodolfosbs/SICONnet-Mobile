/*** Zen Module: ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/dojo1912DChartHelperDocumentation'] = '_ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation';
self._ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperDocumentation__init(o,index,id);
}
function _ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation_serialize(set,s)
{
	var o = this;s[0]='3874650476';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.renderFlag;s[9]=o.tuple;s[10]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation_getDocumentation = function(identifier) {
var documentation = {attributes:[]};
switch (identifier) {
case '$Chart':
documentation = {
description:'The $Chart object represents a 2D chart. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Dojo API.',
attributes:[
{name:'children',type:'array',description:'Array of child objects, each of which corresponds to a data point in the chart. Each child object can have the following properties: name, type, plotType, data, title, and options. The type property can be $Plot, $Series, or $Axis. The plotType property defaults to dojox/charting/plot2d/Grid. The data property is an array of values or of objects, as appropriate for the scenario; specify this property for a $Series. The options property is an object that contains options for this child. '},
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'legend',type:'string',description:''},
{name:'style',type:'string',description:''},
{name:'theme',type:'string',description:'',refreshable:true},
{name:'title',type:'string',description:''},
{name:'$ignoreSelect',type:'boolean',description:'If true, suppress default generation of select handers (if any).'},				]
};
break;
case '$ChartLegend':
documentation = {
description:'The $ChartLegend object represents a chart legend. You can specify the following properties of this object. Except where noted, these properties correspond to options of the same name defined in the Dojo API.',
attributes:[
{name:'key',type:'string',description:'Key that identifies this layout object. The name of a key cannot include a colon (:).'},
{name:'outline',type:'boolean',description:''},
{name:'selectable',type:'boolean',description:''},				]
};
break;
}
return documentation;
}
self._ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperDocumentation');
	_ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperDocumentation',-1);
	var p = _ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperDocumentation) ? zenMaster._ZEN_Mojo_Plugin_baseHelperDocumentation.prototype:_ZEN_Mojo_Plugin_baseHelperDocumentation.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.dojo1912DChartHelperDocumentation';
	p._type = 'dojo1912DChartHelperDocumentation';
	p.serialize = _ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation_getSettings;
	p.getDocumentation = _ZEN_Mojo_Plugin_dojo1912DChartHelperDocumentation_getDocumentation;
}
/* EOF */