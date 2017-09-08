/*** Zen Module: ZEN_Mojo_Component__core ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/documentView'] = '_ZEN_Mojo_Component_documentView';
self._ZEN_Mojo_Component_documentView = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_documentView__init(this,index,id);}
}

self._ZEN_Mojo_Component_documentView__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.OnDrawContent = '';
	o.blockClass = '';
	o.blockStyle = '';
	o.content = '';
	o.contentProperty = '';
	o.controller = '';
	o.controllerId = '';
	o.currLevel = '0';
	o.developerMode = false;
	o.displayMode = 'layout';
	o.documentStyle = '';
	o.effectsEnabled = true;
	o.enclosingClass = 'dvEnclosingClass';
	o.evenRowClass = '';
	o.evenRowStyle = '';
	o.fadeColor = 'rgb(120,120,160)';
	o.fadeEffect = 'fade';
	o.fadeSteps = '12';
	o.headerRowClass = '';
	o.headerRowStyle = '';
	o.imageBackArrow = 'deepsee\/ds2_arrow_west_44_w.png';
	o.initialDocumentKey = '';
	o.initialLayoutKey = '';
	o.isMobile = false;
	o.maxPanels = '5';
	o.minContentHeight = '';
	o.minContentWidth = '';
	o.oddRowClass = '';
	o.oddRowStyle = '';
	o.onfetchcodetable = '';
	o.onfetchlookupdata = '';
	o.ongetHTML = '';
	o.ongetcontroller = '';
	o.ongetdata = '';
	o.ongetlayout = '';
	o.onload = '';
	o.onlookup = '';
	o.onnotifyView = '';
	o.onrender = '';
	o.onresolvemethod = '';
	o.onresolvepluginconflicts = '';
	o.pageManager = null;
	o.panelsPerFrame = '1';
	o.paraClass = '';
	o.paraStyle = '';
	o.seed = '';
	o.tableBorder = false;
	o.tableClass = '';
	o.tableStyle = '';
	o.titleClass = '';
	o.titleStyle = '';
}
function _ZEN_Mojo_Component_documentView_serialize(set,s)
{
	var o = this;s[0]='140797550';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.OnDrawContent;s[7]=o.align;s[8]=o.aux;s[9]=o.blockClass;s[10]=o.blockStyle;s[11]=o.containerStyle;s[12]=o.content;s[13]=o.contentProperty;s[14]=o.controller;s[15]=o.controllerId;s[16]=o.currLevel;s[17]=(o.developerMode?1:0);s[18]=o.displayMode;s[19]=o.documentStyle;s[20]=(o.dragEnabled?1:0);s[21]=(o.dropEnabled?1:0);s[22]=(o.dynamic?1:0);s[23]=(o.effectsEnabled?1:0);s[24]=o.enclosingClass;s[25]=o.enclosingStyle;s[26]=o.error;s[27]=o.evenRowClass;s[28]=o.evenRowStyle;s[29]=o.fadeColor;s[30]=o.fadeEffect;s[31]=o.fadeSteps;s[32]=o.headerRowClass;s[33]=o.headerRowStyle;s[34]=o.height;s[35]=(o.hidden?1:0);s[36]=o.hint;s[37]=o.hintClass;s[38]=o.hintStyle;s[39]=o.imageBackArrow;s[40]=o.initialDocumentKey;s[41]=o.initialLayoutKey;s[42]=(o.isMobile?1:0);s[43]=o.label;s[44]=o.labelClass;s[45]=o.labelDisabledClass;s[46]=o.labelStyle;s[47]=o.maxPanels;s[48]=o.minContentHeight;s[49]=o.minContentWidth;s[50]=o.oddRowClass;s[51]=o.oddRowStyle;s[52]=o.onafterdrag;s[53]=o.onbeforedrag;s[54]=o.ondrag;s[55]=o.ondrop;s[56]=o.onfetchcodetable;s[57]=o.onfetchlookupdata;s[58]=o.ongetHTML;s[59]=o.ongetcontroller;s[60]=o.ongetdata;s[61]=o.ongetlayout;s[62]=o.onhide;s[63]=o.onload;s[64]=o.onlookup;s[65]=o.onnotifyView;s[66]=o.onrefresh;s[67]=o.onrender;s[68]=o.onresolvemethod;s[69]=o.onresolvepluginconflicts;s[70]=o.onshow;s[71]=o.onupdate;s[72]=o.overlayMode;s[73]=set.addObject(o.pageManager,'pageManager');s[74]=o.panelsPerFrame;s[75]=o.paraClass;s[76]=o.paraStyle;s[77]=o.renderFlag;s[78]=o.seed;s[79]=(o.showLabel?1:0);s[80]=o.slice;s[81]=(o.tableBorder?1:0);s[82]=o.tableClass;s[83]=o.tableStyle;s[84]=o.title;s[85]=o.titleClass;s[86]=o.titleStyle;s[87]=o.tuple;s[88]=o.valign;s[89]=(o.visible?1:0);s[90]=o.width;
}
function _ZEN_Mojo_Component_documentView_getSettings(s)
{
	s['name'] = 'string';
	s['blockClass'] = 'cssClass';
	s['blockStyle'] = 'style';
	s['content'] = 'html';
	s['contentProperty'] = 'string';
	s['controllerId'] = 'id';
	s['currLevel'] = 'integer';
	s['developerMode'] = 'boolean';
	s['displayMode'] = 'enum:layout,data,html,iframe';
	s['documentStyle'] = 'style';
	s['effectsEnabled'] = 'boolean';
	s['evenRowClass'] = 'cssClass';
	s['evenRowStyle'] = 'style';
	s['fadeColor'] = 'string';
	s['fadeEffect'] = 'string';
	s['fadeSteps'] = 'integer';
	s['headerRowClass'] = 'cssClass';
	s['headerRowStyle'] = 'style';
	s['imageBackArrow'] = 'uri';
	s['initialDocumentKey'] = 'string';
	s['initialLayoutKey'] = 'string';
	s['isMobile'] = 'boolean';
	s['maxPanels'] = 'integer';
	s['minContentHeight'] = 'length';
	s['minContentWidth'] = 'length';
	s['oddRowClass'] = 'cssClass';
	s['oddRowStyle'] = 'style';
	s['onfetchcodetable'] = 'eventHandler';
	s['onfetchlookupdata'] = 'eventHandler';
	s['ongetHTML'] = 'eventHandler';
	s['ongetcontroller'] = 'eventHandler';
	s['ongetdata'] = 'eventHandler';
	s['ongetlayout'] = 'eventHandler';
	s['onload'] = 'eventHandler';
	s['onlookup'] = 'eventHandler';
	s['onnotifyView'] = 'eventHandler';
	s['onrender'] = 'eventHandler';
	s['onresolvemethod'] = 'eventHandler';
	s['onresolvepluginconflicts'] = 'eventHandler';
	s['pageManager'] = 'string';
	s['panelsPerFrame'] = 'integer';
	s['paraClass'] = 'cssClass';
	s['paraStyle'] = 'style';
	s['seed'] = 'string';
	s['tableBorder'] = 'boolean';
	s['tableClass'] = 'cssClass';
	s['tableStyle'] = 'style';
	s['titleClass'] = 'cssClass';
	s['titleStyle'] = 'style';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_documentView_addArrayToGraph = function(parent,array,data,context) {
if (parent && !parent.$children) {
parent.$children = [];
}
for (var n = 0; n < array.length; n++) {
var item = array[n];
if (item) {
var type = zenGet(item.type);
var instance = this.createLayoutObject(type,item,data,context);
if (parent) {
parent.$children.push(instance);
instance.$parent = parent;
}
if (instance.$isLoop) {
var loop = zenGet(instance.value);
if (('string'== typeof loop) || (loop !== null && typeof loop.length == 'undefined')) {
loop = [loop];
}
if (instance.sortBy) {
var sortData = instance.sortBy.toString().split('/');
var sortSequence = [];
for (var i = 0; i < sortData.length; i++) {
var sortDetails = sortData[i].split(':');
var sortItem = {
prop: sortDetails[0],
asc: (sortDetails.length < 2) || (String(sortDetails[1]).toLowerCase() != 'desc')
};
sortSequence.push(sortItem);
}
var sortCount = sortSequence.length;
loop.sort(function(a,b) {
for (var i=0; i < sortCount; i++) {
var sortData = sortSequence[i];
var a1 = a[sortData.prop];
var b1 = b[sortData.prop];
if ((parseFloat(a1)!=a1) || (parseFloat(b1)!=b1)) {
a1 = a1 ? a1.toString().toLowerCase() : '';
b1 = b1 ? b1.toString().toLowerCase() : '';
}
else {
a1 = parseFloat(a1);
b1 = parseFloat(b1);
}
if (a1<b1) return (sortData.asc ? -1 : 1);
if (a1>b1) return (sortData.asc ? 1: -1);
}
return 0;
});
}
for (var j = 0; j < loop.length; j++) {
var context2 = {};
if (zenGet(instance.value)!=='') {
if (instance.$path) {
context2.$path = instance.$path;
}
context2.$parent = context;
context2.$loopValue = loop[j];
context2.$loopIndex = j;
context2.$loopNumber = j+1;
context2.$loop = loop;
context2.$loopKey = (context && 'undefined'!=typeof context.$loopKey) ? (context.$loopKey+':'+j) : j;
}
else {
context2 = context;
}
var list = this.getChildList(data,item,context2);
var container = this.createLayoutObject('$loop');
instance.$children.push(container);
container.$parent = instance;
this.addArrayToGraph(container,list,data,context2);
}
}
else if (item.children) {
var context2 = context;
if (item.context) context2 = item.context;
this.addArrayToGraph(instance,item.children,data,context2);
}
}
}
}

self._ZEN_Mojo_Component_documentView_applyPopupValue = function(key,group) {
var value = '';
var instance = this.getItemByKey(key,this.currLevel);
switch(instance.controlType) {
case '$date':
value = group.getValue();
break;
case '$time':
zenPage.endModal();
var post = '';
value = zenGet(this._currHour);
if (value !== '') {
/*
if (value<12) {
value = value==0?12:value;
post = 'am';
}
else {
value = value>12?value-12:value;
post = 'pm';
}
*/
var m = zenGet(this._currMinute);
m = (m=='')?'00':(m<10)?'0'+m:m;
value = value + ':' + m;
}
value += post;
break;
}
this.setControlValue(key,value);
this.eventHandler(instance.$index,null,'change');
}

self._ZEN_Mojo_Component_documentView_applyValueToPath = function(data,path,value) {
if (!path) {
return;
}
var tokens = [];
var currToken = '';
var state = 0;
path = path.toString();
for (var p = 0; p < path.length; p++) {
var ch = path.charAt(p);
switch (state) {
case 0:
if (ch=='[') {
currToken = '';
state = 1;
}
break;
case 1:
if (ch==']') {
tokens.push(currToken);
currToken = '';
state = 0;
}
else {
currToken += ch;
}
break;
}
}
var context = data;
if (context === null) {
context = {};
}
var lastContext = null;
var lastProp = null;
for (var n = 0; n < tokens.length; n++) {
var token = tokens[n];
if (token.toString().charAt(0)=='\'' && token.toString().charAt(token.length-1)=='\'') {
token = token.substring(1,token.length-1);
if (context===null && lastProp) {
lastContext[lastProp] = {};
}
if (n==tokens.length-1) {
context[token] = value;
}
else {
lastProp = token;
lastContext = context;
context = context[token];
}
}
else {
token = parseInt(token,10);
if (context===null && lastProp) {
lastContext[lastProp] = [];
}
if (n==tokens.length-1) {
context[token] = value;
}
else {
lastProp = token;
lastContext = context;
context = context[token];
}
}
}
}

self._ZEN_Mojo_Component_documentView_backArrowHandler = function(evt) {
evt = evt ? evt : window.event;
this.popDocument(true);
this.onselect('$cancel','');
}

self._ZEN_Mojo_Component_documentView_browserSupportsCanvas = function() {
return !!document.createElement('canvas').getContext;
}

self._ZEN_Mojo_Component_documentView_chartElementClick = function(idx,key) {
var chart = this._charts[idx];
if (chart) {
this._targetChart = chart;
this.onselect(key,chart.getSelectedItem());
delete this._targetChart;
}
}

self._ZEN_Mojo_Component_documentView_chartRangeChange = function(idx,final) {
var chart = this._charts[idx];
if (chart) {
var items = chart.getSeriesSize();
if (final || items<200) {
var rangeControl = this._chartControllers[idx]
if (rangeControl) {
chart.setTimeRange(rangeControl.startRange,rangeControl.endRange,final);
}
}
}
}

self._ZEN_Mojo_Component_documentView_checkLibraries = function() {
this._checkedLibraries = true;
this.pageManager.checkLibraries();
}

self._ZEN_Mojo_Component_documentView_connectToController = function() {
this.controller = '';
if (!zenIsMissing(this.controllerId)) {
if (this.composite) {
this.controller = this.composite.getChildById(this.controllerId);
}
else {
this.controller = zenPage.getComponentById(this.controllerId);
}
if (this.controller && this.controller.register) {
this.controller.register(this);
}
else {
alert('ZEN: Unable to connect component to dataController (' + this.id + ').');
}
if (this.controller) {
if ('' == this.controller.modelError) {
this.controller.loadModel(false);
}
}
}
}

self._ZEN_Mojo_Component_documentView_createLayoutGraph = function(layout,data,context) {
var graph = this.createLayoutObject('$root',layout,data,context);
if (layout && layout.children) {
this.addArrayToGraph(graph,layout.children,data,context);
}
return graph;
}

self._ZEN_Mojo_Component_documentView_createLayoutObject = function(type,item,data,context) {
var instance = this.createLayoutObjectBase();
instance.$item = item ? item : null;
instance.$type = type;
context = (item&&item.context)?item.context:context;
if (item && item.key && item.key!=='') {
instance.$key = item.key;
if (context && 'undefined' != typeof context.$loopKey && context.$loopKey!=='') {
instance.$key = instance.$key + ':' + context.$loopKey;
}
}
if (this._layoutIndex[this.currLevel]) {
instance.$index = this._indexCounter[this.currLevel]++;
instance.$renderCount = this._renderCounter[this.currLevel]++;
this._layoutIndex[this.currLevel][instance.$index] = instance;
if (instance.$key && instance.$key!=='') {
this._keyIndex[this.currLevel][instance.$key] = instance;
}
}
if (item && item.notifyOnResize) {
this._notifyResize[this.currLevel].push(instance);
}
var namedStyles = null;
if (item) {
var path = null;
for (var p in item) {
if (p!='children') {
var val = item[p];
val = (('undefined'==typeof val)||(val===null) ? '' : val);
var datapath = (p=='value') ? {} : null;
var ifnull = (p=='value'||p=='text'||p=='content') ? zenGet(item.ifnull) : '';
if (val.toString().charAt(0)=='=' && val.toString().indexOf('$method')==-1) {
val = this.evalNode(data,val,context,item,datapath,ifnull,instance);
if (p=='value' && datapath.path) {
path = datapath.path;
}
}
else if (typeof val == 'object') {
var valObj = val;
for (var nestP in val) {
var nestVal = val[nestP];
if (typeof nestVal == 'string') {
if (nestVal.charAt(0)== '=') {
nestVal = this.evalNode(data,nestVal,context,item,datapath,ifnull,instance);
}
valObj[nestP] = nestVal;
}
}
val = valObj;
}
instance[p] = val;
}
}
for (var p in item) {
if (p!='children') {
var val = item[p];
val = (('undefined'==typeof val)||(val===null) ? '' : val);
var datapath = (p=='value') ? {} : null;
var ifnull = (p=='value'||p=='text'||p=='content') ? zenGet(item.ifnull) : '';
if (val.toString().length >= 9 && val.toString().charAt(0)=='=' && val.toString().indexOf('$method')>-1) {
val = this.evalNode(data,val,context,item,datapath,ifnull,instance);
if (p=='value' && datapath.path) {
path = datapath.path;
}
instance[p] = val;
}
}
}
if (path!=='') {
instance.$path = path;
}
if (zenGet(item.hasBlock,true)==false) {
instance.$hasBlock = false;
}
}
switch(type) {
case '$root':
instance.$renderItem = this.renderRoot;
break;
default:
instance.$renderItem = this.renderItem;
break;
}
if (this.getPluginMapping(type) != undefined) {
this.getPluginByLayoutObjectType(type).createLayoutObjects(type,instance);
}
if (instance.$extra && typeof instance.$extra === 'object') {
for (var p in instance.$extra) {
if (!instance[p]) {
} else {
delete instance.$extra[p];
}
}
}
return instance;
}

self._ZEN_Mojo_Component_documentView_createLayoutObjectBase = function() {
if (!this._layoutBase) {
this._layoutBase = function(view) {
this.$documentView = view;
this.$item = null;
this.$type = '';
this.$isLoop = false;
this.$showTitle = true;
this.$titleClass = 'dvTitle';
this.$hasBlock = true;
this.$renderItem = function() { return 'renderItem';},
this.$render = function() { return '('+this.$type+')';},
this.$executeCodeTraversal = function() {
this.$executeCodeBeforeChildren();
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
child.$executeCodeTraversal();
}
}
this.$executeCodeAfterChildren();
};
this.$executeCodeBeforeChildren = function() {/*console.log('executeCodeBeforeChildren: ' + this.$type);*/};
this.$executeCodeAfterChildren = function() {/*console.log('executeCodeAfterChildren: ' + this.$type);*/};
this.$children = null;
this.$getChild = function(idx) { return this.$children ? this.$children[idx] : null; };
this.$setSize = function(w,h) { alert("Not implemented");};
this.$makeId = function(which) {
var id = this.$id ? this.$id : 'dv_'+this.$documentView.index+'_'+this.$documentView.currLevel + '_' + this.$index + '_' + this.$renderCount;
return  id+((which&&(which!==''))?('_'+which):'');
},
this.$findElement = function(which) {
if (this.idAlias && typeof this.idAlias === 'object' && this.idAlias[which]!==undefined) {
which = this.idAlias[which];
}
return document.getElementById(this.$makeId(which?which:''));
},
this.$getObjectByKey = function(key) {
var instance = null;
var dv = this.$documentView;
if (key && dv) {
instance = dv.getItemByKey(key);
}
return instance;
},
this.$getDisplayText = function() {
var text = ''
var format = zenGet(this.format);
if ('undefined'!=typeof this.text) {
text = this.text;
format = '';
}
else {
if ('object'==typeof this.value) {
if ('undefined'!=typeof this.value.text) {
text = this.value.text;
format = '';
}
else if ('undefined'!=typeof this.value.value) {
text = this.value.value;
}
}
else if ('undefined'!=typeof this.value) {
text = this.value;
}
}
if (format && text) {
if (format == '$date') {
text = this.$documentView.formatDate(text);
}
else {
text = zenFormatNumber(text,format);
}
}
return text;
}
this.$setValue = function(value,notify) { this.value = value; };
this.$getValue = function(which) {
if (which && 'undefined'!=typeof this.value) {
if ('object'==typeof this.value) {
switch(which) {
case 'text':
return  ('undefined'!=typeof this.value.text) ? this.value.text : (('undefined'!=typeof this.value.value) ? this.value.value : '');
case 'value':
return ('undefined'!=typeof this.value.value) ? this.value.value : '';
}
}
else {
switch(which) {
case 'text':
return  ('undefined'!=typeof this.text) ? this.text : this.value;
case 'value':
return this.value;
}
}
}
return ('undefined'!=typeof this.value) ? this.value : '';
};
this.$getControlValue = function() { return ''; };
this.$applyChangeToInstance = function() { };
this.$hide = function(hide) {
var div = this.$findElement();
if (div) {
div.style.display = hide ? 'none' : '';
}
};
this.$disable = function(disabled) {
};
}
}
return new this._layoutBase(this);
}

self._ZEN_Mojo_Component_documentView_dashboardLoaded = function(index) {
if (this._layoutIndex && this._layoutIndex[this.currLevel]) {
var inst = this._layoutIndex[this.currLevel][index];
if (inst) {
var div = inst.$findElement('loading');
if (div) {
div.style.display = 'none';
}
}
}
this.endWait(false);
}

self._ZEN_Mojo_Component_documentView_disableItem = function(key,disable,level) {
level = zenGet(level,this.currLevel);
var instance = this.getItemByKey(key,level);
if (instance && instance.$disable) {
instance.$disable(disable);
}
}

self._ZEN_Mojo_Component_documentView_disconnectFromController = function() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

self._ZEN_Mojo_Component_documentView_endWait = function(render) {
render = zenGet(render,true);
if (this._fadeTimer) {
window.clearTimeout(this._fadeTimer);
this._fadeTimer = null;
}
this._waiting = false;
var canvas = this.findElement('canvas');
if (canvas) {
canvas.style.display = 'none';
}
if (render) {
window.setTimeout('zenPage.getComponent('+this.index+').render();',10);
}
}

self._ZEN_Mojo_Component_documentView_evalNode = function(data,expr,context,item,datapath,ifnull,instance) {
var value = '';
expr = zenGet(expr);
var prop = expr.toString();
var propList = null;
var isNot = false;
var path = null;
var matchedProp = null;
var regX = /\u003D(\!?)\[((?:[\w.\$]+(?:(?:\[\d+\])|[\w.\$]+)*)|\[(?:[\w,.\$])+\])\]/m;
var propSubRegX = new RegExp('([\w\$]+)\[(\d+)\]','m');
var sourceRoot = data;
if (context) {
sourceRoot = context.$loopValue;
}
var allEmpty = true;
var matchCount = 0;
var source = null;
var tempVal = '';
var subMatch = null;
var subIndex = null;
var propName = null;
var propCount = 0;
var fullMatch;
var match = regX.exec(prop);
while (match) {
matchCount++;
path = null;
if (match.index > 0) {
value += prop.substring(0,match.index);
}
fullMatch = match[0];
prop = prop.substring(match.index + fullMatch.length);
isNot = (match[1] == '!');
matchedProp = match[2];
if ((matchedProp.charAt(0) == '[') && (matchedProp.charAt(matchedProp.length - 1) == ']')) {
value = matchedProp.substring(1,matchedProp.length-1).split(',');
}
else {
propList = matchedProp.split('.');
if (propList.length > 0) {
tempVal = '';
if (propList[0] == '$method') {
tempVal = '$method';
if (this.onresolvemethod != '') {
propList.splice(0,1);
var which = propList.join('.');
tempVal = zenInvokeCallbackMethod(this.onresolvemethod,this,'onresolvemethod','context',context ? context : {$instance:instance},'which',which);
}
}
else {
source = sourceRoot;
path = null;
propCount = propList.length;
for (var n = 0; n < propCount; n++) {
propName = propList[n];
subIndex = '';
subMatch = propSubRegX.exec(propName);
if (subMatch) {
propName = subMatch[1];
subIndex = subMatch[2];
}
switch (propName) {
case '$root':
source = data;
path = '';
break;
case '$loopValue':
if (path === null) {
if (context && context.$path) {
path = context.$path;
if (context.$loopIndex !== '') {
path += '[' + context.$loopIndex + ']';
}
}
else {
path = '';
}
}
break;
case '$loop':
case '$loopIndex':
case '$loopNumber':
source = context ? context[propName] : '';
break;
default:
if (!source) {
source = '';
}
else {
if (path === null) {
if (context && context.$path) {
path = context.$path;
if (context.$loopIndex !== '') {
path += '[' + context.$loopIndex + ']';
}
}
else {
path = '';
}
}
source = zenGet(source[propName]);
path += "['" + propName + "']";
if ((source !== '') && (subIndex !== '')) {
source = zenGet(source[subIndex]);
path += '[' + subIndex + ']';
}
}
break;
}
if ((n < (propCount - 1)) && (typeof source != 'object')) {
source = '';
}
if (source === '') {
break;
}
}
tempVal = source;
}
if (isNot) {
value = (tempVal && (tempVal !== '') && (tempVal !==0) && (tempVal !== '0')) ? false : true;
}
else {
switch (typeof tempVal) {
case 'boolean':
case 'object':
value = tempVal;
break;
case 'number':
if (value === '') {
value = tempVal;
}
else {
value += tempVal;
}
break;
case 'string':
value += tempVal;
break;
}
if (tempVal !== '') {
allEmpty = false;
}
}
}
}
match = regX.exec(prop);
}
if (matchCount > 0 && datapath && path) {
datapath.path = path;
}
if (prop != '') {
value += prop;
}
if (ifnull) {
if ((value==='') || ((matchCount > 0) && allEmpty)) {
if (ifnull == '$hide') {
value = '';
}
else {
value = this.evalNode(data,ifnull,item.context?item.context:context,item,datapath?datapath:null,'');
}
}
}
return value;
}

self._ZEN_Mojo_Component_documentView_evalSpec = function(spec) {
var specObject = null;
if (spec == '') {
specObject = {};
}
else if (typeof spec == 'object') {
specObject = spec;
}
else {
try {
eval('specObject = ' + spec);
}
catch(ex) {
specObject = ex.message;
}
}
return specObject;
}

self._ZEN_Mojo_Component_documentView_eventHandler = function(index,evt,evtType,v1,v2) {
evt = evt ? evt : window.event;
if (evt&&evt.type=='keydown' && evtType=='click') {
if (evt.keyCode != zenENTER) {
return true;
}
}
this.lastEvent = evt;
var instance = null;
if (this._layoutIndex[this.currLevel][index]) {
instance = this._layoutIndex[this.currLevel][index];
}
var notify = true;
var ret = true;
var final = false;
final = (evtType=='change');
if (evtType && instance && instance.$eventHandlers && instance.$eventHandlers[evtType]) {
var handler = instance.$eventHandlers[evtType];
if ('function'==typeof handler) {
instance.$eventMethod = handler;
instance.$notify = notify;
ret = instance.$eventMethod(evt,v1,v2);
notify = instance.$notify;
instance.$eventMethod = null;
}
}
if (evtType=='change') {
instance.$applyChangeToInstance();
}
if ((evtType=='change') && instance.apply) {
var data = this.getSourceData();
this.applyValueToPath(data,instance.$path,instance.value);
}
var key = instance ? zenGet(instance.$key) : '';
var value = '';
if (instance) {
if (instance.$isLoop) {
value = zenGet(v1);
}
else {
value = instance.$getValue();
}
}
switch(key) {
case '$popDocument':
notify = false;
this.popDocument();
break;
case '$lookupSelect':
var currControl = this.getCurrentControl();
if (currControl && currControl.$setValue) {
var data = this.getSourceData();
var value = (data && data.children) ? data.children[v1] : '';
if ('object' == typeof value && !value.$code && currControl.codeTable) {
value.$code = currControl.codeTable;
}
this.popDocument();
currControl.$setValue(value,true);
this.popCurrentControl();
}
else {
this.popDocument();
}
if (currControl) {
currControl.$findElement('control').focus();
}
notify = false;
break;
}
var propagation = false;
if (notify) {
switch (evtType) {
case 'change':
case 'keyup':
if (evtType=='keyup' && evt.keyCode==13) {
}
else {
propagation=this.onchange(key,final?value:instance.$getControlValue(),final,evt);
}
break;
case 'select':
case 'click':
propagation=this.onselect(key,value,evt);
break;
default:
propagation=this.onevent(evtType,key,value,evt);
break;
}
if(!propagation){
if (evt && evt.stopPropagation) {
evt.stopPropagation();
}
}
}
if (!propagation) {
if (evt && evt.stopPropagation && !this.getSuppressStopPropagation()) {
evt.stopPropagation();
}
}
return ret;
}

self._ZEN_Mojo_Component_documentView_executeCode = function(key,data,layout) {
var graph = this._lastGraph;
var instance = null;
if (key) {
instance = this.getItemByKey(key);
}
if (instance) {
instance.$executeCodeTraversal();
}
else {
if (graph) {
graph.$executeCodeTraversal();
}
}
}

self._ZEN_Mojo_Component_documentView_fadeHandler = function(direction) {
var enc = this.getEnclosingDiv();
if (enc == null) return;
var canvas = this.findElement('canvas');
var delay = 25;
if (canvas) {
var cw = enc.offsetWidth;
var ch = enc.offsetHeight;
if (this._fadeCounter==0) {
canvas.style.display = 'block';
canvas.width = cw;
canvas.height = ch;
if (this.fadeEffect=='fade-flakes') {
if (!this._flakes || direction=='out') {
this._flakes = new Array(1000);
for (var n = 0; n < 1000; n++) {
this._flakes[n] = {	x:(Math.random()*cw/2)+(Math.random()*cw/2),
y:(Math.random()*ch/2)+(Math.random()*ch/2),
dx:Math.random()*10-5,
dy:Math.random()*10-5,
};
}
}
}
else if (this.fadeEffect=='fade-tiles') {
if (!this._tiles || direction=='out') {
this._tiles = [];
var tcount = 20;
var twid = cw/tcount;
var thgt = ch/tcount;
if (twid>thgt) {
thgt = twid;
}
else {
twid = thgt;
}
for (var r = 0; r < tcount; r++) {
this._tiles[r] = [];
for (var c = 0; c < tcount; c++) {
this._tiles[r][c] = {x:c*twid,y:r*thgt,width:twid,height:thgt};
}
}
}
}
else {
delete this._tiles;
delete this._flakes;
}
}
var ctx = canvas.getContext('2d');
ctx.clearRect(0,0,cw,ch);
var max = parseInt(this.fadeSteps,10);
this._fadeCounter++;
var pct = this._fadeCounter/max;
pct = (direction=='out') ? pct*1.5 : (1-pct);
pct = (pct < 0) ? 0 : pct;
pct = (pct > 1) ? 1 : pct;
if (this._tiles) {
}
ctx.globalAlpha = pct;
ctx.fillStyle = this.fadeColor;
ctx.fillRect(0,0,cw,ch);
if (this._flakes) {
for (var n = 0; n < this._flakes.length; n++) {
var flake = this._flakes[n];
ctx.beginPath();
ctx.rect(Math.round(flake.x),Math.round(flake.y), 3, 3);
ctx.fillStyle = n%4?'rgba(100,100,250,0.5)':'rgba(250,250,250,0.9)';
ctx.fill();
flake.x += flake.dx;
flake.y += flake.dy;
flake.dx *= 1.05;
flake.dy *= 1.05;
}
}
if (this._tiles) {
ctx.globalAlpha = 1;
for (var r = 0; r < this._tiles.length; r++) {
for (var c = 0; c < this._tiles[r].length; c++) {
var tile = this._tiles[r][c];
if (tile.on) {
ctx.beginPath();
ctx.rect(tile.x,tile.y, Math.ceil(tile.width)-1, Math.ceil(tile.height)-1);
ctx.fillStyle = 'rgb(255,255,255)';
ctx.fill();
}
else if (Math.random()>0.83) {
tile.on = (direction=='out') ? true : false;
}
}
}
}
/*
var imgData = ctx.getImageData(0, 0, cw, ch);
for (var i=0; i<imgData.data.length; i+=(4*(Math.floor(Math.random()*500)+1))) {
imgData.data[i]=255;
imgData.data[i+1]=255;
imgData.data[i+2]=255;
}
ctx.putImageData(imgData,0,0);
*/
if (this._fadeCounter < max) {
this._fadeTimer = window.setTimeout('zenPage.getComponent('+this.index+').fadeHandler(\''+direction+'\');',delay);
}
else {
this._fadeTimer = null;
if (direction=='in') {
canvas.style.display = 'none';
}
if (this._fadeNotify && 'function' == typeof this._fadeNotify) {
this._fadeNotify();
}
}
}
}

self._ZEN_Mojo_Component_documentView_fetchCodeTable = function(code,allCodes) {
var codes = [];
/*
{$code:'usstates',value:'MA',text:'Massachusetts'},
{$code:'usstates',value:'WA',text:'Washington'},
{$code:'usstates',value:'WY',text:'Wyoming'},
*/
if (this.onfetchcodetable!='') {
codes = zenInvokeCallbackMethod(this.onfetchcodetable,this,'onfetchcodetable','code',code,'allCodes',allCodes);
}
return codes;
}

self._ZEN_Mojo_Component_documentView_fetchLookupData = function(key,value) {
var data = null;
/*{ children:[
{value:'MA',text:'Massachusetts'},
{text:'Washington'},
{value:'WY',text:'Wyoming'},
]}
*/
if (this.onfetchlookupdata!='') {
data = zenInvokeCallbackMethod(this.onfetchlookupdata,this,'onfetchlookupdata','key',key,'value',value);
}
return data;
}

self._ZEN_Mojo_Component_documentView_flipTable = function(info) {
var hasColHdrs = false;
var hasRowHdrs = false;
var newRows = [];
var colHdrs = [];
if (info.rows && info.rows.length) {
for (var r = 0; r < info.rows.length; r++) {
var rowInfo = info.rows[r];
if (rowInfo.rowHdr && rowInfo.rowHdr!=='') {
hasColHdrs = true;
colHdrs[r] = rowInfo.rowHdr;
}
else {
colHdrs[r] = '';
}
if (rowInfo.columns && rowInfo.columns.length) {
for (var c = 0; c < rowInfo.columns.length; c++) {
if (!newRows[c]) {
newRows[c] = {type:'row', columns:[],styles:[],classes:[]};
}
if (rowInfo.type=='hdr') {
hasRowHdrs = true;
newRows[c].rowHdr = rowInfo.columns[c];
newRows[c].hdrStyle = (rowInfo.styles&&rowInfo.styles[c])?rowInfo.styles[c]:'';
newRows[c].hdrClass = (rowInfo.classes && rowInfo.classes[c]) ? rowInfo.classes[c] : '';
}
else {
newRows[c].columns.push(rowInfo.columns[c]);
newRows[c].styles.push((rowInfo.styles&&rowInfo.styles[c])?rowInfo.styles[c]:'');
newRows[c].classes.push((rowInfo.classes && rowInfo.classes[c]) ? rowInfo.classes[c] : '');
}
}
}
}
}
var newInfo = { hasRowHeaders:hasRowHdrs, rows:newRows, tableBorder:zenGet(info.tableBorder), tableClass:zenGet(info.tableClass) };
if (hasColHdrs) {
newInfo.rows.splice(0,0,{type:'hdr',columns:colHdrs});
}
return newInfo;
}

self._ZEN_Mojo_Component_documentView_focusElement = function(key,level) {
level = zenGet(level,this.currLevel);
var instance = this.getItemByKey(key,level);
if (instance && instance.$findElement) {
var control = instance.$findElement('control');
if (control) {
control.focus();
}
else {
var div = instance.$findElement();
if (div) {
div.focus();
}
}
}
}

self._ZEN_Mojo_Component_documentView_formatDate = function(date) {
if (!date) return '';
var text = '';
var t = date.toString().split('-');
var year = t[0] ? parseInt(t[0],10) : '';
var month = t[1] ? parseInt(t[1],10) : '';
var day = t[2] ? parseInt(t[2],10) : '';
var today = new Date();
var d = new Date(year,month-1,day);
if (d.getFullYear() == today.getFullYear() &&
d.getMonth() == today.getMonth() &&
d.getDate() == today.getDate()) {
text = $$$Text('Today');
}
else if (d.getFullYear() == today.getFullYear() &&
d.getMonth() == today.getMonth() &&
(d.getDate()+1) == today.getDate()) {
text = $$$Text('Yesterday');
}
else {
var months = _zenResource['zenMonthNames'].split(',');
text = months[month-1] + ' ' + day;
}
return text;
}

self._ZEN_Mojo_Component_documentView_generateTable = function(instance,info,flip,active) {
/*
var info = {
tableBorder:true:false,
hasRowHeaders:true,
rows:[
{type:'hdr',columns:['Column 1','Column 2','Column 3']},
{type:'row',rowHdr:'Row 1', hdrStyle:'', columns:[1,2,3], styles:['color:red;']},
{type:'row',rowHdr:'Row 2', hdrStyle:'', columns:[4,5,6], styles:['','color:red;']},
{type:'row',rowHdr:'Row 3', hdrStyle:'', columns:[7,8,9], styles:['color:red;']},
]
}
*/
active = zenGet(active,false);
var selectedIndex = parseInt(zenGet(instance.selectedIndex),10);
selectedIndex = isNaN(selectedIndex) ? '' : selectedIndex;
if (flip) {
info = this.flipTable(info);
}
var html = [];
var zebra = zenGet(info.showZebra,true);
var tableBorder = zenGet(info.tableBorder);
var tableClass = zenGet(info.tableClass,'dvTable');
var hrStyle = this.getBaseStyle('headerRowStyle');
var hrClass = this.getBaseClass('headerRowClass');
var thStyle = '';
var tdStyle = '';
var tableStyle = zenGet(info.style);
if (tableBorder) {
thStyle = 'border-right: 1px solid #808080;border-bottom: 1px solid #808080;' + thStyle;
tdStyle = 'border-right: 1px solid #808080;border-bottom: 1px solid #808080;' + tdStyle;
tableStyle = 'border-left: 1px solid #808080;border-top: 1px solid #808080;' + tableStyle;
}
var evenClass = this.getBaseClass('evenRowClass');
var oddClass = this.getBaseClass('oddRowClass');
var evenStyle = zebra ? this.getBaseStyle('evenRowStyle') : '';
var oddStyle = zebra ? this.getBaseStyle('evenOddStyle') : '';
var summary = zenGet(instance.summary,'data table');
if (info.rows && info.rows.length) {
html.push('<table summary="'+summary+'" class="'+tableClass+'" '+(active?'active="1"':'')+' border="0" cellspacing="0" cellpadding="0" style="'+tableStyle+'">');
var rowIndex = 0;
for (var r = 0; r < info.rows.length; r++) {
var rowInfo = info.rows[r];
if (rowInfo) {
switch (rowInfo.type) {
case 'hdr':
html.push('<tr ' + (hrClass?'class="'+hrClass+'" ':'') + (hrStyle?'style="'+hrStyle+'" ':'') + ' headerRow="1">');
if (info.hasRowHeaders) {
var headerStyle = '';
if (thStyle) headerStyle += thStyle;
if (rowInfo.hdrStyle) headerStyle += rowInfo.hdrStyle;
html.push('<th '+(rowInfo.hdrClass?'class="'+rowInfo.hdrClass+'" ':'') + (headerStyle?'style="'+headerStyle+'" ':'') + '>');
html.push(rowInfo.rowHdr ? rowInfo.rowHdr : '&#160;');
html.push('</th>');
}
if (rowInfo.columns && rowInfo.columns.length) {
for (var c = 0; c < rowInfo.columns.length; c++) {
var cellStyle = (rowInfo.styles&&rowInfo.styles[c]) ? rowInfo.styles[c] : '';
cellStyle = (rowInfo.hdrStyle?rowInfo.hdrStyle:'') + cellStyle;
var cellClass = (rowInfo.classes && rowInfo.classes[c]) ? rowInfo.classes[c] : '';
var classAttr = (cellClass ? 'class="'+cellClass+'" ' : '');
cellStyle = thStyle + cellStyle;
html.push('<th ' + classAttr + (cellStyle?'style="'+cellStyle+'" ':'') + '>');
var chdr = zenGet(rowInfo.columns[c]);
if (chdr=='$checkbox') {
chdr = '<input type="checkbox" onclick="alert(\'click\');"/>';
}
html.push(chdr ? chdr : '&#160;');
html.push('</th>');
}
}
html.push('</tr>');
break;
case 'row':
default:
var rcls = r%2==0 ? oddClass : evenClass;
var rstyle = '';
if (zebra) {
rstyle = r%2==0 ? oddStyle : evenStyle;
rcls += ' ' + (r%2==0 ? 'dvOddRow' : 'dvEvenRow');
}
if (selectedIndex===rowIndex) {
rcls = 'dvSelectedRow';
}
var activate = '';
if (active && instance) {
activate = (this.isMobile?'ontouchstart':'onclick') + '="zenPage.getComponent('+instance.$documentView.index+').eventHandler('+instance.$index+',event,\'click\','+rowIndex+');"';
if (!this.isMobile) {
activate += ' tabindex="0"';
activate += ' onkeydown="return zenPage.getComponent('+instance.$documentView.index+').eventHandler('+instance.$index+',event,\'click\','+rowIndex+');"';
}
}
html.push('<tr id="'+instance.$makeId('tr_'+rowIndex)+'" '+(rcls?'class="'+rcls+'" ':'')+(rstyle?'style="'+rstyle+'" ':'')+activate+'>');
if (info.hasRowHeaders) {
var hdrStyle = (rowInfo.hdrStyle?rowInfo.hdrStyle:'');
if (thStyle) hdrStyle = thStyle + hdrStyle;
var hdrClass = (rowInfo.hdrClass?'class="'+rowInfo.hdrClass+'" ':'');
html.push('<th '+hdrClass+(hdrStyle?'style="'+hdrStyle+'" ':'')+'>&#160;');
html.push(rowInfo.rowHdr ? rowInfo.rowHdr : '&#160;');
html.push('</th>');
}
if (rowInfo.columns && rowInfo.columns.length) {
for (var c = 0; c < rowInfo.columns.length; c++) {
var cellStyle = (rowInfo.styles&&rowInfo.styles[c]) ? rowInfo.styles[c] : '';
if (tdStyle) cellStyle = tdStyle + cellStyle;
if (rstyle) cellStyle = rstyle + cellStyle;
var cellClass = (rowInfo.classes && rowInfo.classes[c]) ? rowInfo.classes[c] : '';
html.push('<td '+(cellClass?'class="'+cellClass+'" ':'')+(cellStyle?'style="'+cellStyle+'" ':'')+'>');
html.push(rowInfo.columns[c]?rowInfo.columns[c]:'&#160;');
html.push('</td>');
}
}
html.push('</tr>');
rowIndex++;
break;
}
}
}
html.push('</table>');
}
return html.join('');
}

self._ZEN_Mojo_Component_documentView_getBaseClass = function(property) {
var baseClass = '';
switch(property) {
case 'documentClass':
case 'titleClass':
case 'blockClass':
case 'paraClass':
case 'tableClass':
case 'headerRowClass':
case 'oddRowClass':
case 'evenRowClass':
baseClass = this[property];
var layout = this.getLayout();
if (layout) {
baseClass = zenGet(layout[property],baseClass);
}
break;
}
return baseClass;
}

self._ZEN_Mojo_Component_documentView_getBaseStyle = function(property) {
var style = '';
switch(property) {
case 'documentStyle':
case 'titleStyle':
case 'blockStyle':
case 'paraStyle':
case 'tableStyle':
case 'headerRowStyle':
case 'oddRowStyle':
case 'evenRowStyle':
case 'tableBorder':
style = this[property];
var layout = this.getLayout();
if (layout) {
style = zenGet(layout[property],style);
}
break;
}
return style;
}

self._ZEN_Mojo_Component_documentView_getChildList = function(data,item,context) {
try {
var list = [];
if (item && item.children && item.children.length) {
for (var n = 0; n < item.children.length; n++) {
var child = item.children[n];
if (child) {
if (zenGet(child.type)=='$loop') {
var clist = this.processLoop(data,child,context);
for (var j = 0; j < clist.length; j++) {
list.push(clist[j]);
}
}
else {
list.push(child);
}
}
}
}
}
catch(ex) {
alert(ex.message);
}
return list;
}

self._ZEN_Mojo_Component_documentView_getContent = function(content) {
return this.content;
}

self._ZEN_Mojo_Component_documentView_getControlValue = function(key,level) {
level = zenGet(level,this.currLevel);
var instance = this.getItemByKey(key,level);
var value = '';
if (instance && instance.$getValue) {
value = instance.$getValue();
}
return value;
}

self._ZEN_Mojo_Component_documentView_getController = function() {
if (this.ongetcontroller) {
return zenInvokeCallbackMethod(this.ongetcontroller,this,'ongetcontroller','view',this);
}
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

self._ZEN_Mojo_Component_documentView_getCurrentControl = function() {
var instance = null;
if (this._controlStack && this._controlStack.length) {
instance = this._controlStack[this._controlStack.length-1];
}
return instance;
}

self._ZEN_Mojo_Component_documentView_getDeveloperHTML = function() {
var html = [];
html.push('<br style="clear:both;" />');
html.push('<div style="border-top:1px solid #D0D0D0;padding:4px;padding-left:40px;">');
if (this.currLevel>0) {
html.push('<input type="image" src="deepsee/ds2_arrow_west_44_w.png" style="height:12px;" value=" Pop " onclick="zenPage.getComponent('+this.index+').popDocument();" alt="Go back" tabindex="0"/>&#160;');
}
if (this.displayMode=='data') {
html.push('<input type="image" src="deepsee/ds2_gear_44.png" class="dvDevIcon" value=" Show Layout " alt="Show Layout" onclick="zenPage.getComponent('+this.index+').setProperty(\'displayMode\',\'layout\');" tabindex="0"/>');
}
else {
html.push('<input type="image" src="deepsee/ds2_gear_44.png" class="dvDevIcon" value=" Show Data " alt="Show Data" onclick="zenPage.getComponent('+this.index+').setProperty(\'displayMode\',\'data\');" tabindex="0"/>&#160;');
}
if (this.isMobile) {
html.push(' [mobile]');
}
html.push('</div>');
return html.join('');
}

self._ZEN_Mojo_Component_documentView_getDocumentCriteria = function() {
var criteria = '';
if (this._dataCriteria && this._dataCriteria[this.currLevel]) {
criteria = this._dataCriteria[this.currLevel];
}
return criteria;
}

self._ZEN_Mojo_Component_documentView_getDocumentKey = function() {
var key = '';
if (this._dataKey && this._dataKey[this.currLevel]) {
key = this._dataKey[this.currLevel];
}
return key;
}

self._ZEN_Mojo_Component_documentView_getItemByKey = function(key,level) {
var instance = null;
level = zenGet(level,this.currLevel);
if (this._keyIndex && this._keyIndex[level] && this._keyIndex[level][key]) {
instance = this._keyIndex[level][key];
}
return instance;
}

self._ZEN_Mojo_Component_documentView_getItemDivByKey = function(key,level) {
level = zenGet(level,this.currLevel);
var instance = this.getItemByKey(key,level);
var div = null;
if (instance) {
div = instance.$findElement();
}
return div;
}

self._ZEN_Mojo_Component_documentView_getLayout = function() {
if (this._layout && this._layout[this.currLevel]) {
return this._layout[this.currLevel];
}
var layoutKey = this.getLayoutKey();
switch (layoutKey) {
case '$lookupLayout':
if (this._lookupLayout) {
return this._lookupLayout;
}
break;
}
var layout = null;
if (this.ongetlayout!='' && !this._inGetLayout) {
this._inGetLayout = true;
layout = zenInvokeCallbackMethod(this.ongetlayout,this,'ongetlayout','key',layoutKey,'criteria',this.getLayoutCriteria());
delete this._inGetLayout;
}
if (this._layout) {
this._layout[this.currLevel] = layout;
}
return layout;
}

self._ZEN_Mojo_Component_documentView_getLayoutCriteria = function() {
var criteria = '';
if (this._layoutCriteria && this._layoutCriteria[this.currLevel]) {
criteria = this._layoutCriteria[this.currLevel];
}
return criteria;
}

self._ZEN_Mojo_Component_documentView_getLayoutKey = function() {
var key = '';
if (this._layoutKey && this._layoutKey[this.currLevel]) {
key = this._layoutKey[this.currLevel];
}
return key;
}

self._ZEN_Mojo_Component_documentView_getLevel = function() {
return this.currLevel;
}

self._ZEN_Mojo_Component_documentView_getPanelDiv = function(level) {
level = zenGet(level,0);
var div = this.findElement('panel_'+level);
return div;
}

self._ZEN_Mojo_Component_documentView_getPluginByLayoutObjectType = function(identifier) {
return this.getPluginByName(this.getPluginMapping(identifier));
}

self._ZEN_Mojo_Component_documentView_getPluginByName = function(pluginName) {
return this.pageManager.getPluginByName(pluginName);
}

self._ZEN_Mojo_Component_documentView_getPluginConflicts = function() {
return this.pluginConflicts;
}

self._ZEN_Mojo_Component_documentView_getPluginMap = function() {
return this.pluginMap;
}

self._ZEN_Mojo_Component_documentView_getPluginMapping = function(identifier) {
return this.pluginMap[identifier];
}

self._ZEN_Mojo_Component_documentView_getPopupContent = function(group,key) {
var html = [];
html.push('<div class="dvTimePopup">');
html.push('<div id="'+this.makeId('timeTable')+'">');
html.push(this.getTimeTableHTML());
html.push('</div>');
html.push('<table summary="list of buttons" border="0" cellspacing="0" cellpadding="0" style="width:100%;"><tr>');
html.push('<td style="width:70%;"><a style="text-decoration:none;color:#404040;font-size:12px;" href="#" onclick="zenPage.getComponent('+this.index+').resetTime();return false;" alt="Reset">Reset</a></td>');
html.push('<td style="text-align:center;"><input type="image" class="dvTimePopupIcon" src="deepsee/ds2_clock_44.png" onclick="zenPage.getComponent('+this.index+').toggleMinutes();"/></td>');
html.push('<td style="text-align:center;"><input type="image" class="dvTimePopupIcon" src="deepsee/ds2_check_44.png" onclick="zenPage.getComponent('+this.index+').applyPopupValue(\''+key+'\');" alt="Select"/></td>');
html.push('<td style="text-align:center;"><input type="image" class="dvTimePopupIcon" src="deepsee/ds2_x_44.png" onclick="zenPage.endModal();" alt="Close"/></td>');
html.push('</tr></table>');
html.push('</div>');
var info = {
style:'width:auto;background:#F0F0F0;',
content: html.join('')
};
return info;
}

self._ZEN_Mojo_Component_documentView_getSourceData = function() {
var layout = this.getLayout();
if (layout && layout.sourceData) {
return layout.sourceData;
}
var docKey = this.getDocumentKey();
switch (docKey) {
case '$lookupData':
if (this._lookupData) {
return this._lookupData;
}
break;
}
if (this._data && this._data[this.currLevel]) {
return this._data[this.currLevel];
}
var model = null;
if (this.ongetdata!='') {
model = zenInvokeCallbackMethod(this.ongetdata,this,'ongetdata','key',docKey,'criteria',this.getDocumentCriteria());
}
return model;
}

self._ZEN_Mojo_Component_documentView_getSuppressCodeExecution = function() {
if (zenGet(this.pageManager.suppressCodeExecution,false)) {
return true;
}
return false;
}

self._ZEN_Mojo_Component_documentView_getSuppressRender = function() {
if (zenGet(this.pageManager.suppressRender,false)) {
return true;
}
return false;
}

self._ZEN_Mojo_Component_documentView_getSuppressStopPropagation = function() {
if (zenGet(this.pageManager.suppressStopPropagation,false)) {
return true;
}
return false;
}

self._ZEN_Mojo_Component_documentView_getTargetChart = function() {
return this._targetChart ? this._targetChart : null;
}

self._ZEN_Mojo_Component_documentView_getText = function(text,context) {
text = zenGet(text);
if (text==='') {
text = '&#160;';
}
else if (context && (context[text]||context[text]==='')) {
text = zenEscapeXML(context[text]);
}
else {
text = zenEscapeXML(text);
}
return text;
}

self._ZEN_Mojo_Component_documentView_getTimeTableHTML = function() {
var html = [];
var currHour = zenGet(this._currHour);
var currMinute = zenGet(this._currMinute);
var allMinutes = zenGet(this._allMinutes,false);
html.push('<table summary="list of hours" class="dvTimePopupHours" border="0" cellspacing="0" cellpadding="0">');
for (var r=0;r<2;r++) {
var post = r==0 ? 'am' : 'pm';
html.push('<tr>');
for (var n=0;n<12;n++) {
var h = (r*12)+n;
var cls = (h===currHour) ? 'dvTimeSelected' : 'dvTime';
html.push('<td class="'+cls+'" onclick="zenPage.getComponent('+this.index+').hourClick('+h+');" tabindex="0">' + h + '</td>');
}
html.push('</tr>');
}
html.push('</table>');
html.push('<table summary="list of minutes" class="dvTimePopupMinutes" border="0" cellspacing="0" cellpadding="0">');
if (allMinutes) {
for (var r=0;r<6;r++) {
html.push('<tr>');
for (var n=0;n<10;n++) {
var m = (r*10) + n;
var dm = ':' + ((m<10) ? '0'+m : m);
var cls = (m===currMinute) ? 'dvTimeSelected' : 'dvTime';
html.push('<td class="'+cls+'" onclick="zenPage.getComponent('+this.index+').minuteClick('+m+');" tabindex="0">' + dm + '</td>');
}
html.push('</tr>');
}
}
else {
for (var r=0;r<2;r++) {
html.push('<tr>');
for (var n=0;n<6;n++) {
var m = (r*30) + (n*5);
var dm = ':' + ((m<10) ? '0'+m : m);
var cls = (m===currMinute) ? 'dvTimeSelected' : 'dvTime';
html.push('<td class="'+cls+'" onclick="zenPage.getComponent('+this.index+').minuteClick('+m+');" tabindex="0">' + dm + '</td>');
}
html.push('</tr>');
}
}
html.push('</table>');
return html.join('');
}

self._ZEN_Mojo_Component_documentView_hideItem = function(key,hide,level) {
level = zenGet(level,this.currLevel);
var instance = this.getItemByKey(key,level);
if (instance && instance.$hide) {
instance.$hide(hide);
}
}

self._ZEN_Mojo_Component_documentView_hourClick = function(hour) {
this._currHour = hour;
var div = this.findElement('timeTable');
div.innerHTML = this.getTimeTableHTML();
}

self._ZEN_Mojo_Component_documentView_injectEventHandler = function(content,instance) {
if (content.toString().indexOf('$$$event')>=0) {
var t = content.toString().split('$$$event(');
for (var n = 1; n < t.length; n++) {
var t2 = t[n].split(')');
var evtType = t2[0];
t2[0] = 'zenPage.getComponent('+this.index+').eventHandler(' + instance.$index + ',event,' + evtType;
t[n] = t2.join(')');
}
content = t.join('');
}
return content;
}

self._ZEN_Mojo_Component_documentView_invalidate = function() {
if (this._data) {
for (var n = this.currLevel; n >= 0; n--) {
this._layout[n] = null;
this._data[n] = null;
}
}
}

self._ZEN_Mojo_Component_documentView_minuteClick = function(minute) {
if (this._currHour=='') {
this._currHour = 0;
}
this._currMinute = minute;
var div = this.findElement('timeTable');
div.innerHTML = this.getTimeTableHTML();
}

self._ZEN_Mojo_Component_documentView_notifyView = function(reason,data1,data2,data3) {
var ret = true;
if (this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

self._ZEN_Mojo_Component_documentView_onchange = function(key,value,final,event) {
var event = event || null;
if (zenPage.templateDispatchMode && zenPage.templateDispatchBaseNamespace != '') {
var newArea = 'events-'+key.split(':')[0];
if (zenPage.currArea !== newArea) {
zenPage.currArea = newArea;
zenPage.loadTemplateNS(zenPage.templateDispatchBaseNamespace+'/events',key.split(':')[0],newArea);
}
}
var template = zenPage.getTemplate();
return (template && template.onchange) ? template.onchange(key,value,final,this.id,event) : null;
}

self._ZEN_Mojo_Component_documentView_onevent = function(eventType,key,value,event) {
var event = event || null;
if (zenPage.templateDispatchMode && zenPage.templateDispatchBaseNamespace != '') {
var newArea = 'events-'+key.split(':')[0];
if (zenPage.currArea !== newArea) {
zenPage.currArea = newArea;
zenPage.loadTemplateNS(zenPage.templateDispatchBaseNamespace+'/events',key.split(':')[0],newArea);
}
}
var template = zenPage.getTemplate();
return (template && template.onevent) ? template.onevent(eventType,key,value,this.id,event) : null;
}

self._ZEN_Mojo_Component_documentView_onloadHandler = function() {
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () {};
}

self._ZEN_Mojo_Component_documentView_onselect = function(key,value,event) {
var event = event || null;
if (zenPage.templateDispatchMode && zenPage.templateDispatchBaseNamespace != '') {
var newArea = 'events-'+key.split(':')[0];
if (zenPage.currArea !== newArea) {
zenPage.currArea = newArea;
zenPage.loadTemplateNS(zenPage.templateDispatchBaseNamespace+'/events',key.split(':')[0],newArea);
}
}
var template = zenPage.getTemplate();
return (template && template.onselect) ? template.onselect(key,value,this.id,event) : null;
}

self._ZEN_Mojo_Component_documentView_popAll = function(render,clearDataCache) {
if (!this.content && this.currLevel > 0) {
for (var n = this.currLevel; n > 0; n--) {
this._layout[n] = null;
this._data[n] = null;
this._layoutKey[n] = '';
this._layoutCriteria[n] = '';
this._dataKey[n] = '';
this._dataCriteria[n] = '';
}
this.currLevel = 0;
if (!this.getSuppressRender()) {
if (zenGet(render,true)) {
this._layout[this.currLevel] = null;
if (zenGet(clearDataCache,false)) {
this._data[this.currLevel] = null;
}
this.renderDocument();
this.updateFrameOffset(true);
}
else {
this.updateFrameOffset(false);
}
}
this.pageManager.afterPopDocument(this,render);
}
}

self._ZEN_Mojo_Component_documentView_popCurrentControl = function() {
if (this._controlStack) {
this._controlStack.pop();
}
}

self._ZEN_Mojo_Component_documentView_popDocument = function(render,clearDataCache) {
if (!this.content && this.currLevel > 0) {
this._layout[this.currLevel] = null;
this._data[this.currLevel] = null;
this._layoutKey[this.currLevel] = '';
this._layoutCriteria[this.currLevel] = '';
this._dataKey[this.currLevel] = '';
this._dataCriteria[this.currLevel] = '';
this.currLevel--;
if (!this.getSuppressRender()) {
if (zenGet(render,false)) {
this._layout[this.currLevel] = null;
if (zenGet(clearDataCache,false)) {
this._data[this.currLevel] = null;
}
this.renderDocument();
}
this.updateFrameOffset(true);
}
this.pageManager.afterPopDocument(this,render);
}
}

self._ZEN_Mojo_Component_documentView_popDocuments = function(number,render,clearDataCache) {
number = parseInt(number);
if (number >= 0) {
} else {
return;
}
if (number > this.currLevel) {
number = this.currLevel;
}
if (!this.content && this.currLevel > 0) {
for (var n = this.currLevel; n > (this.currLevel-number); n--) {
this._layout[n] = null;
this._data[n] = null;
this._layoutKey[n] = '';
this._layoutCriteria[n] = '';
this._dataKey[n] = '';
this._dataCriteria[n] = '';
}
this.currLevel = this.currLevel - number;
if (!this.getSuppressRender()) {
if (zenGet(render,true)) {
this._layout[this.currLevel] = null;
if (zenGet(clearDataCache,false)) {
this._data[this.currLevel] = null;
}
this.renderDocument();
this.updateFrameOffset(true);
}
else {
this.updateFrameOffset(false);
}
}
this.pageManager.afterPopDocument(this,render);
}
}

self._ZEN_Mojo_Component_documentView_processLoop = function(data,item,context) {
var list = [];
context = (item&&item.context)?item.context:context;
var loop = this.evalNode(data,zenGet(item.value),context,item);
if (('string'== typeof loop) || (loop !== null && typeof loop.length == 'undefined')) {
loop = [loop];
}
for (var j = 0; j < loop.length; j++) {
var context2 = {};
if (zenGet(item.value)!=='') {
if (item.$path) {
context2.$path = item.$path;
}
context2.$parent = context;
context2.$loopValue = loop[j];
context2.$loopIndex = j;
context2.$loopNumber = j+1;
context2.$loop = loop;
context2.$loopKey = (context && 'undefined'!=typeof context.$loopKey) ? (context.$loopKey+':'+j) : j;
}
else {
context2 = context;
}
if (item && item.children && item.children.length) {
for (var n = 0; n < item.children.length; n++) {
var child = item.children[n];
if (child) {
var type = zenGet(child.type);
if (type=='$loop') {
var clist = this.processLoop(data,child,context2);
for (var k = 0; k < clist.length; k++) {
var child2 = clist[k];
if (child2)  {
var processedChild = {type:zenGet(child2.type),
value:zenGet(child2.value),
context:child2.context,
title:zenGet(child2.title),
children:(child2.children?child2.children:null)};
list.push(processedChild);
for (var p in child2) {
if (child2[p] && !processedChild[p]) {
processedChild[p] = child2[p];
}
}
}
}
}
else {
var processedChild = {type:type,
value:zenGet(child.value),
context:context2,
title:zenGet(child.title),
children:(child.children?child.children:null)};
list.push(processedChild);
for (var p in child) {
if (child[p] && !processedChild[p]) {
processedChild[p] = child[p];
}
}
}
}
}
}
}
return list;
}

self._ZEN_Mojo_Component_documentView_pushCurrentControl = function(instance) {
if (!this._controlStack) {
this._controlStack = [];
}
this._controlStack.push(instance);
}

self._ZEN_Mojo_Component_documentView_pushDocument = function(layoutKey,layoutCriteria,dataKey,dataCriteria) {
if ('object' == typeof layoutKey) {
throw 'invalid call';
return;
}
if (!this.content && this.currLevel < (parseInt(this.maxPanels,10)-1)) {
this.currLevel++;
this._layout[this.currLevel] = null;
this._data[this.currLevel] = null;
this._layoutKey[this.currLevel] = layoutKey;
this._layoutCriteria[this.currLevel] = layoutCriteria;
this._renderCounter[this.currLevel] = 0;
if ('undefined' != typeof this._dataKey) {
this._dataKey[this.currLevel] = dataKey;
this._dataCriteria[this.currLevel] = dataCriteria;
}
else {
this._data[this.currLevel] = this._data[this.currLevel-1];
this._dataKey[this.currLevel] = this._dataKey[this.currLevel-1];
this._dataCriteria[this.currLevel] = this._dataCriteria[this.currLevel-1];
}
this.renderDocument();
if (!this.getSuppressRender()) {
this.updateFrameOffset(true);
var panel = this.findElement('panel_'+this.currLevel);
if (panel) {
panel.scrollTop = 0;
panel.scrollLeft = 0;
}
}
}
}

self._ZEN_Mojo_Component_documentView_raiseResizeEvents = function() {
if (this._inresize) return;
var layout = this.getLayout();
if (this._notifyResize && this._notifyResize[this.currLevel]) {
this._inresize = true;
for (var n = 0; n < this._notifyResize[this.currLevel].length; n++) {
var inst = this._notifyResize[this.currLevel][n];
this.onevent('resize',zenGet(inst.$key),inst);
}
this._inresize = false;
}
}

self._ZEN_Mojo_Component_documentView_refreshItem = function(key,level) {
level = zenGet(level,this.currLevel);
var item = this.getItemByKey(key,level);
if (item && item.$refresh) {
item.$refresh();
} else if (item.$hasBlock) {
var div = this.getItemDivByKey(key,level);
if (div) {
var layout = this.getLayout();
var data = this.getSourceData();
div.innerHTML = this.renderLayout(key,data,layout);
}
}
}

self._ZEN_Mojo_Component_documentView_registerPlugins = function() {
this._hasConflicts = false;
this._hasPluginsRegistered = true;
this.pageManager.registerPlugins(this);
if (this._hasConflicts) {
zenInvokeCallbackMethod(this.onresolvepluginconflicts,this,'onresolvepluginconflicts','conflicts',this.getPluginConflicts());
}
}

self._ZEN_Mojo_Component_documentView_renderContents = function() {
if (!this._loaded) {
this._loaded = true;
if (this.onload!='') {
zenInvokeCallbackMethod(this.onload,this,'onload');
}
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () {};
}
var enc = this.getEnclosingDiv();
if (enc == null) return;
if (this.initialDocumentKey) {
this.setDocumentKey(this.initialDocumentKey);
this.initialDocumentKey = '';
}
if (this.initialLayoutKey) {
this.setLayoutKey(this.initialLayoutKey);
this.initialLayoutKey = '';
}
if (zenPage.isMobile && zenPage.isMobile()) {
}
else {
this.isMobile = false;
}
if (!this._layoutIndex) {
this._indexCounter = [];
this._renderCounter = [0];
this._layoutIndex = [];
this._keyIndex = [];
this._notifyResize = [];
this._layout = [];
this._data = [];
}
if (!this._layoutKey) {
this._layoutKey = [];
this._layoutCriteria = [];
}
if (!this._dataKey) {
this._dataKey = [];
this._dataCriteria = [];
}
enc.scrollTop = 0;
enc.scrollLeft = 0;
var userContent = this.content;
if (!userContent && this.ongetHTML!='') {
userContent = zenInvokeCallbackMethod(this.ongetHTML,this,'ongetHTML');
}
if (userContent) {
enc.innerHTML = userContent;
this._hasSkeleton = false;
return;
}
if (!this._hasPluginsRegistered) {
this.registerPlugins();
}
if (!this._checkedLibraries) {
this.checkLibraries();
}
if (!this._hasSkeleton) {
this.renderSkeleton();
this.setSize(enc.offsetWidth,enc.offsetHeight);
}
this.renderDocument();
}

self._ZEN_Mojo_Component_documentView_renderDocument = function() {
var enc = this.getEnclosingDiv();
if (enc == null) return;
var layout = this.getLayout();
var data = this.getSourceData();
if (this.onrender) {
zenInvokeCallbackMethod(this.onrender,this,'onrender');
}
this._svgFrames = [];
this._chartData = {};
this._chartLabels = {};
this._chartEventData = {};
this._charts = {};
this._chartControllers = {};
this._codeTables = {};
var displayMode = this.displayMode;
if (layout && 'undefined' != typeof layout.displayMode && displayMode!='data') {
displayMode = layout.displayMode;
}
var html = [];
var pluginDocumentAttr = [];
pluginDocumentAttr.push(this.pageManager.getDocumentAttributes(this,displayMode));
var docStyle = this.getBaseStyle('documentStyle');
var docClass = this.getBaseClass('documentClass');
if (docClass === '') docClass = 'dvDocument';
html.push('<div ' + (docClass == '' ? '' : 'class="' + docClass + '" ') + (docStyle == '' ? '' : 'style="'+docStyle+'" ') + ' ' + pluginDocumentAttr.join('')+'>');
switch (displayMode) {
case 'html':
if (data) {
if (this.contentProperty) {
html.push(data[this.contentProperty]);
}
else {
html.push(data);
}
}
break;
case 'iframe':
if (data) {
if (this.contentProperty) {
html.push('<iframe id="'+this.makeId('iframe')+'" src="'+this.contentProperty+'"/>');
}
else {
html.push('No contentProperty defined.');
}
}
break;
case 'data':
var counter = {count:0};
html.push('<div style="background:white;">');
html.push('<div style="color:#404040;padding:2px;background:#D0E0D0;">Data</div>');
html.push('<div>documentKey:<b>'+this.getDocumentKey()+'</b></div>');
html.push(this.renderGeneric(data,0,counter));
html.push('<div style="color:#404040;padding:2px;background:#D0E0D0;">Layout</div>');
html.push('<div>layoutKey:<b>'+this.getLayoutKey()+'</b></div>');
html.push(this.renderGeneric(layout,0,counter));
html.push('</div>');
break;
case 'layout':
default:
if (layout && layout.children) {
var key = '';
html.push(this.renderLayout(key,data,layout));
}
else {
html.push('<div style="padding:10px;">');
html.push('No layout defined.');
if (this.currLevel>0) {
html.push(' (' + this.currLevel + ')');
html.push('<br/><a href="#" onclick="zenPage.getComponent('+this.index+').popDocument();" tabindex="0">Back</a>');
}
html.push('</div>');
}
break;
}
if (this.developerMode) {
html.push(this.getDeveloperHTML());
}
html.push('</div>');
var dvStyle = '';
var minWidth = this.minContentWidth;
var minHeight = this.minContentHeight;
if (layout && zenGet(layout.minContentWidth)) {
minWidth = layout.minContentWidth;
}
if (layout && zenGet(layout.minContentHeight)) {
minHeight = layout.minContentHeight;
}
if (minWidth) {
dvStyle = dvStyle + 'min-width:' + minWidth + ';';
}
if (minHeight) {
dvStyle = dvStyle + 'min-height:' + minHeight + ';';
}
var panelClass = '';
if (layout) {
panelClass = zenGet(layout.panelClass,'dvInnerPanel');
dvStyle += zenGet(layout.panelStyle);
}
if (!this.getSuppressRender()) {
var panel = this.getPanelDiv(this.currLevel);
panel.innerHTML = '<div '+(panelClass == '' ? '' : 'class="'+panelClass+'" ') + (dvStyle == '' ? '' : 'style="'+dvStyle+'" ') + '>' + html.join('') + '</div>';
}
for (var n = 0; n < this._svgFrames.length; n++) {
var frame = this._svgFrames[n];
frame.svgLoadHandler(window);
/* !!!!
var parent = frame.findElement('zenRoot').parentNode;
if (parent) {
var th = 24;
frame.setFrameSize(parent.offsetWidth,parent.offsetHeight-th);
var chart = frame.children[0];
chart.setProperty('width',parent.offsetWidth);
chart.setProperty('height',parent.offsetHeight-th);
}
*/
}
var codeList = [];
var codeNames = {};
for (var c in this._codeTables) {
if (this._codeTables[c] && !codeNames[this._codeTables[c]]) {
codeList.push(this._codeTables[c]);
codeNames[this._codeTables[c]] = true;
}
}
var allCodes = codeList.join(',');
if (allCodes) {
for (var c in this._codeTables) {
var instance = null;
if (this._layoutIndex[this.currLevel][c]) {
instance = this._layoutIndex[this.currLevel][c];
}
if (instance && instance.$setOptionList) {
instance.$setOptionList(this.fetchCodeTable(instance.codeTable,allCodes));
allCodes = '';	// only pass to first call
}
}
}
var iframe = this.findElement('iframe');
if (iframe) {
iframe.style.width = (enc.offsetWidth-4) + 'px';
iframe.style.height = (enc.offsetHeight-4) + 'px';
}
this.raiseResizeEvents();
this.pageManager.afterRenderDocument(this,displayMode,html);
if (!this.getSuppressCodeExecution()) {
switch (displayMode) {
case 'layout':
if (layout && layout.children) {
var key = '';
this.executeCode(key,data,layout);
}
break;
}
}
}

self._ZEN_Mojo_Component_documentView_renderGeneric = function(data,level,counter) {
var html = [];
if (!data) {
html.push('null');
}
else {
var indent = level * 10;
var bg = counter.count%2==0 ? 'none' : '#F0F0F0';
html.push('<div style="font-size:12px;padding-left:'+indent+'px;background:'+bg+';">{');
for (var p in data) {
counter.count++;
html.push('<span class="dvGenericTitle">' + p + ':</span>');
var val = data[p];
if (val===null || val==='') {
html.push('<span class="dvGenericValue" style="color:#D08080;">' + (val===null?'null':'\'\'') + '</span><br/>');
}
else if (typeof val == 'object') {
if ('undefined' != typeof val.length) {
html.push('[');
for (var n = 0; n < val.length; n++) {
var val2 = val[n];
if (typeof val2 == 'object') {
html.push(this.renderGeneric(val2,level+1,counter));
}
else {
html.push('<span class="dvGenericValue" style="color:#8080D0;">\'' + zenEscapeXML(val2) + '\'</span><br/>');
}
}
html.push(']');
}
else {
html.push(this.renderGeneric(data[p],level+1,counter));
}
}
else if (typeof val === 'function') {
html.push('<span class="dvGenericValue">\'' + zenEscapeXML(data[p].toString()) + '\'</span><br/>');
}
else {
html.push('<span class="dvGenericValue">\'' + zenEscapeXML(data[p]) + '\'</span><br/>');
}
}
html.push('}</div>');
}
return html.join('');
}

self._ZEN_Mojo_Component_documentView_renderItem = function() {
var html = [];
var hidden = zenGet(this.hidden,false);
var ifnull = (zenGet(this.ifnull)=='$hide');
var docView = this.$documentView;
if (this.$hasBlock) {
var activate = '';
var value = zenGet(this.value);
if (!this.$isLoop && this.active && !zenGet(this.disabled,false)) {
activate = (this.isMobile?'ontouchstart':'onclick') + '="zenPage.getComponent('+docView.index+').eventHandler('+this.$index+',event,\'click\',\''+value+'\');"';
if (!this.isMobile) {
activate += ' tabindex="0"';
activate += ' onkeydown="return zenPage.getComponent('+docView.index+').eventHandler('+this.$index+',event,\'click\',\''+value+'\');"';
}
}
var blockStyle = zenGet(this.blockStyle);
var text = zenGet(this.text);
var content = zenGet(this.content);
if (hidden || (ifnull && value==''&& text==''&& content=='')) {
blockStyle += 'display:none;';
}
var tooltip = '';
if (this.tooltip) {
tooltip = 'title="'+zenEscapeXML(this.tooltip)+'"';
}
var keyAttr = 'undefined' != typeof this.key ? (' key="'+this.key+'"') : '';
var catAttr = 'undefined' != typeof this.category ? (' category="'+this.category+'"') : '';
html.push('<div class="'+zenGet(this.blockClass,'dvBlock')+'" id="'+this.$makeId()+'"'+keyAttr+catAttr+' $type="'+this.$type+'" '+activate+' style="'+blockStyle+'" '+tooltip+'>');
}
var titleHTML = '';
if (this.$showTitle) {
var title = zenGet(this.title);
if (title) {
var tcls = zenGet(this.titleClass,this.$titleClass);
titleHTML = '<div class="'+(tcls)+'" style="'+zenGet(this.titleStyle)+'">' + zenEscapeXML(title) + '</div>';
}
}
if (titleHTML) {
html.push(titleHTML);
}
if (this.$render && 'function'==typeof this.$render) {
html.push(this.$render());
}
else if (null !== this.$render) {
html.push('<span style="color:red;">Invalid $render function</span>: ' + this.$type);
}
if (this.$hasBlock) {
html.push('</div>');
}
return html.join('');
}

self._ZEN_Mojo_Component_documentView_renderLayout = function(key,data,layout) {
var html = [];
var oldLayout = null;
if (this._layout[this.currLevel]) {
oldLayout = this._layout[this.currLevel];
}
this._layout[this.currLevel] = layout;
var oldData = null;
if (this._data[this.currLevel]) {
oldData = this._data[this.currLevel];
}
this._data[this.currLevel] = data;
if (!key) {
this._indexCounter[this.currLevel] = 0;
this._layoutIndex[this.currLevel] = {};
}
this._keyIndex[this.currLevel] = {};
this._notifyResize[this.currLevel] = [];
var context = null;
var graph = this.createLayoutGraph(layout,data,context);
this._lastGraph = graph;
var instance = null;
if (key) {
instance = this.getItemByKey(key);
}
if (instance) {
html.push(instance.$renderItem());
}
else {
html.push(graph.$renderItem({data:data,context:null}));
}
this._layout[this.currLevel] = oldLayout;
this._data[this.currLevel] = oldData;
return html.join('');
}

self._ZEN_Mojo_Component_documentView_renderRoot = function() {
var html = [];
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
return html.join('');
}

self._ZEN_Mojo_Component_documentView_renderSkeleton = function() {
var enc = this.getEnclosingDiv();
var html = [];
this._hasSkeleton = true;
var maxPanels = parseInt(this.maxPanels,10);
html.push('<div id="'+this.makeId('frame')+'" class="dvFrame">');
for (var n = 0; n < maxPanels; n++) {
html.push('<div id="'+this.makeId('panel_'+n)+'" class="dvPanel">');
html.push('</div>');
}
html.push('</div>');
var cw = enc.offsetWidth-20;
var ch = enc.offsetHeight-20;
if (this.effectsEnabled && this.browserSupportsCanvas()) {
html.push('<canvas id="'+this.makeId('canvas')+'" class="dvCanvas" width="'+cw+'" height="'+ch+'"></canvas>');
}
enc.innerHTML = html.join('');
}

self._ZEN_Mojo_Component_documentView_resetScroll = function() {
var div = this.getPanelDiv(this.currLevel);
if (div) {
div.scrollTop = 0;
div.scrollLeft = 0;
}
}

self._ZEN_Mojo_Component_documentView_resetTime = function() {
this._currHour = '';
this._currMinute = '';
var div = this.findElement('timeTable');
div.innerHTML = this.getTimeTableHTML();
}

self._ZEN_Mojo_Component_documentView_resolveNamedStyle = function(namedStyle) {
var style = '';
if (namedStyle) {
var layout = this.getLayout();
if (layout && layout.namedStyles) {
var t = namedStyle.toString().split('+');
for (var n = 0; n < t.length; n++) {
if (t[n] && layout.namedStyles[t[n]]) {
style += layout.namedStyles[t[n]];
}
}
}
}
return style;
}

self._ZEN_Mojo_Component_documentView_resolveOptionList = function(instance) {
var list = null;
if (instance.codeTable) {
instance.$documentView._codeTables[instance.$index] = instance.codeTable;
}
else if (instance.valueList) {
var list = [];
if (typeof instance.valueList == 'object') {
if (instance.valueList.length) {
for (var n = 0; n < instance.valueList.length; n++) {
var value = zenGet(instance.valueList[n].value);
var text = zenGet(instance.valueList[n].text,value);
var disabled = zenGet(instance.valueList[n].disabled,0);
list.push({value:value,text:text,disabled:disabled});
}
}
}
else {
var tv = instance.valueList.toString().split(',');
if (instance.displayList) {
var td = instance.displayList.toString().split(',');
}
else {
var td = tv;
}
var ti = null;
if (instance.imageList) {
var ti = instance.imageList.toString().split(',');
}
var tdis = null;
if (instance.disabledList) {
var tdis = instance.disabledList.toString().split(',');
}
for (var n = 0; n < tv.length; n++) {
if (ti && tdis) {
list.push({value:tv[n],text:td[n],image:ti[n],disabled:tdis[n]});
}
else if (tdis) {
list.push({value:tv[n],text:td[n],disabled:tdis[n]});
}
else if (ti) {
list.push({value:tv[n],text:td[n],image:ti[n]});
}
else {
list.push({value:tv[n],text:td[n]});
}
}
}
}
return list;
}

self._ZEN_Mojo_Component_documentView_sendEventToController = function(reason,data1,data2,data3) {
var controller = this.getController();
if (controller && controller.notifyController) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

self._ZEN_Mojo_Component_documentView_setContent = function(content) {
this.setProperty('content',content);
}

self._ZEN_Mojo_Component_documentView_setControlError = function(key,error,level,focus) {
level = zenGet(level,this.currLevel);
error = zenGet(error);
focus = (typeof focus == 'undefined' ? (error !== '') : !!focus);
var instance = this.getItemByKey(key,level);
if (instance && instance.$setError) {
instance.$setError(zenGet(error));
}
if (focus) {
this.focusElement(key,level);
}
}

self._ZEN_Mojo_Component_documentView_setControlHint = function(key,hint,level) {
level = zenGet(level,this.currLevel);
var instance = this.getItemByKey(key,level);
if (instance && instance.$setHint) {
instance.$setHint(zenGet(hint));
}
}

self._ZEN_Mojo_Component_documentView_setControlValue = function(key,value,level) {
level = zenGet(level,this.currLevel);
var instance = this.getItemByKey(key,level);
if (instance && instance.$setValue) {
instance.$setValue(value,false);
if (instance.$applyChangeToInstance) {
instance.$applyChangeToInstance();
if (instance.apply) {
var data = this.getSourceData();
this.applyValueToPath(data,instance.$path,instance.value);
}
}
}
}

self._ZEN_Mojo_Component_documentView_setControllerId = function(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

self._ZEN_Mojo_Component_documentView_setDocumentKey = function(key,criteria,level) {
level = zenGet(level,this.currLevel);
if (!this._dataKey) {
this._dataKey = [];
this._dataCriteria = [];
}
this._dataKey[level] = key;
this._dataCriteria[level] = zenGet(criteria);
if (this._data && this._data[level]) {
this._data[level] = null;
}
if (this._waiting) {
this.endWait();
}
}

self._ZEN_Mojo_Component_documentView_setItemValue = function(key,value,level) {
level = zenGet(level,this.currLevel);
this.setControlValue(key,value,level);
}

self._ZEN_Mojo_Component_documentView_setLayoutKey = function(key,criteria,level) {
level = zenGet(level,this.currLevel);
if (!this._layoutKey) {
this._layoutKey = [];
this._layoutCriteria = [];
}
this._layoutKey[level] = key;
this._layoutCriteria[level] = zenGet(criteria);
if (this._layout && this._layout[level]) {
this._layout[level] = null;
}
if (this._waiting) {
this.endWait();
}
}

self._ZEN_Mojo_Component_documentView_setPluginMapping = function(identifier,pluginName) {
if (this.getPluginByName(pluginName) == undefined) {
return;
}
if (this.pluginMap[identifier]!=undefined) {
this.pluginMap[identifier] = pluginName;
}
}

self._ZEN_Mojo_Component_documentView_setProperty = function(property,value,value2) {
switch(property) {
case 'content':
var div = this.getEnclosingDiv();
value = value ? value : '';
this.content = value.toString();
div.innerHTML = value;
this._hasSkeleton = false;
this.currLevel = 0;
delete this._layoutIndex;
break;
case 'seed':
if (this.seed != value) {
this.seed = value;
this.render();
}
break;
case 'developerMode':
case 'displayMode':
case 'contentProperty':
this[property] = value;
this.render();
break;
case 'fadeSteps':
case 'fadeColor':
this[property] = value;
break;
case 'documentStyle':
case 'titleStyle':
case 'blockStyle':
case 'paraStyle':
case 'tableStyle':
case 'headerRowStyle':
case 'oddRowStyle':
case 'evenRowStyle':
case 'tableBorder':
this[property] = value;
this.render();
break;
default:
this.invokeSuper('setProperty',arguments);
break;
}
}

self._ZEN_Mojo_Component_documentView_setSize = function(width,height) {
var enc = this.getEnclosingDiv();
if (enc == null) return;
var maxPanels = parseInt(this.maxPanels,10);
var panelsPerFrame = parseInt(this.panelsPerFrame,10);
panelsPerFrame = (panelsPerFrame>=1) ? panelsPerFrame : 1;
enc.style.width = width + 'px';
enc.style.height = height + 'px';
enc.style.overflow = 'hidden';
var panelWidth = Math.floor(width/panelsPerFrame);
var frame = this.findElement('frame');
if (frame) {
frame.style.width = panelWidth*parseInt(this.maxPanels,10) + 'px';
frame.style.height = height + 'px';
}
for (var n = 0;n<maxPanels;n++) {
var panel = this.findElement('panel_'+n);
if (panel) {
panel.style.left = panelWidth*n + 'px';
panel.style.width = panelWidth + 'px';
panel.style.height = (height) + 'px';
}
}
var canvas = this.findElement('canvas');
if (canvas) {
canvas.style.width = (width) + 'px';
canvas.style.height = (height) + 'px';
}
this.updateFrameOffset(false);
}

self._ZEN_Mojo_Component_documentView_showPopup = function(ctrl,key,type,content) {
var value = key ? this.getControlValue(key) : '';
var left = zenGetLeft(ctrl) - zenGetLeftScroll(ctrl);
left += zenGetPageScrollLeft(this.window);
var iHgt = ctrl.offsetHeight;
var wScrollTop = zenGetPageScrollTop();
var top;
var obj = zenGetPageOffsets(ctrl);
var dHgt = 200; //have to use default height of popup, as it hasn't been rendered so far
var hgt = zenGetWindowHeight();
var uSpace = obj.top - wScrollTop;
var dSpace = hgt-uSpace-iHgt-2;
if (dHgt>dSpace) { // dropdown won't fit as is
if (dSpace>uSpace) {
top = obj.top+iHgt;
}
else {
top = obj.top-dHgt;
}
}
else {  // Dropdown is fine where it is but need to be in page coordinates
top = obj.top+iHgt;
}
switch (type) {
case '$date':
var group = zenPage.createComponent('modalGroup');
group.setProperty('onaction','zenPage.getComponent('+this.index+').applyPopupValue(\''+key+'\',group);');
var item = this.getItemByKey(key);
var calParms = (item && item.calParms) ? item.calParms : {};
/*
if ('' != this.minDate) {
var minD = zenParseDate(this.minDate);
if (-1 != minD) {
var year = parseInt(minD.substr(0,4),10);
calParms['minDate'] = this.minDate;
calParms['startYear'] = year;
}
}
if ('' != this.maxDate) {
var maxD = zenParseDate(this.maxDate);
if (-1 != maxD) {
var year = parseInt(maxD.substr(0,4),10);
calParms['maxDate'] = this.maxDate;
calParms['endYear'] = year;
}
}
if ('' != value) {
value = this.unformatValue(value);
value = (-1 == value) ? '' : value;
}
*/
if ('' == value) {
var now = new Date();
calParms['year'] = now.getFullYear();
calParms['month'] = now.getMonth() + 1;
}
group.show('Calendar','calendar',value,top,left,null,null,calParms);
break;
case '$time':
var group = this._timeGroup;
if (!group) {
group = zenPage.createComponent('modalGroup');
}
this._timeGroup = group;
this._allMinutes = false;
this._currHour = '';
this._currMinute = '';
if (value!=='') {
var t = value.toString().split(':');
var h = parseInt(t[0],10);
this._currHour = isNaN(h) ? '' : h;
var m = parseInt(t[1],10);
this._currMinute = isNaN(m) ? '' : m;
if (this._currMinute && this._currMinute%5!=0) {
this._allMinutes = true;
}
}
var func = new Function('group','return zenPage.getComponent('+this.index+').getPopupContent(group,\''+key+'\');');
group.show('Time','callback',func,top,left);
break;
case '$custom':
var group = this._contentGroup;
if (!group) {
group = zenPage.createComponent('modalGroup');
}
this._contentGroup = group;
this._contentGroupContent = zenGet(content);
var func = new Function('group','return {style:\'width:auto;background:#F8F8F8;\',content:zenPage.getComponent('+this.index+')._contentGroupContent};');
group.show('Content','callback',func,top,left);
break;
default:
alert('Unsupport popup type ' + type)
break;
}
}

self._ZEN_Mojo_Component_documentView_showTooltip = function(msg,ctrl) {
if (this._tooltip) {
document.body.removeChild(this._tooltip);
this._tooltip = null;
}
if (msg) {
var x = 100;
var y = 100;
var tooltip = document.createElement('div');
tooltip.className = 'dvTooltip';
tooltip.innerHTML = msg;
document.body.appendChild(tooltip);
if (ctrl) {
x = zenGetLeft(ctrl) - (tooltip.offsetWidth + 20);
y = zenGetTop(ctrl);
}
tooltip.style.left = x + 'px';
tooltip.style.top = y + 'px';
this._tooltip = tooltip;
}
}

self._ZEN_Mojo_Component_documentView_startFade = function(direction,notify) {
if (this._fadeTimer) {
window.clearTimeout(this._fadeTimer);
this._fadeTimer = null;
}
if (direction=='in') {
this.render();
}
this._fadeCounter = 0;
this._fadeNotify = notify;
this.fadeHandler(direction);
}

self._ZEN_Mojo_Component_documentView_startWait = function(msg,delay) {
if (this._waiting) return;
if (this._fadeTimer) {
window.clearTimeout(this._fadeTimer);
this._fadeTimer = null;
}
if (msg) {
var panel = this.getPanelDiv(this.currLevel);
panel.innerHTML = '<div class="dvWaitMessage">' + msg + '</div>';
}
this._waiting = true;
this._waitCounter = 0;
var enc = this.getEnclosingDiv();
this._docWid = enc.offsetWidth;
this._docHgt = enc.offsetHeight;
delay = zenGet(delay,250);
this._fadeTimer = window.setTimeout('zenPage.getComponent('+this.index+').waitHandler();',delay);
}

self._ZEN_Mojo_Component_documentView_toggleMinutes = function() {
this._allMinutes = !this._allMinutes;
this._currMinute = '';
var div = this.findElement('timeTable');
div.innerHTML = this.getTimeTableHTML();
}

self._ZEN_Mojo_Component_documentView_transitionHandler = function() {
var frame = this.findElement('frame');
if (frame && frame.removeEventListener && this._transEvent) {
var panelsPerFrame = parseInt(this.panelsPerFrame,10);
panelsPerFrame = (panelsPerFrame>=1) ? panelsPerFrame : 1;
var depth = this.currLevel-panelsPerFrame+1;
depth = depth < 0 ? 0 : depth;
for (var n = depth+1; n<parseInt(this.maxPanels,10); n++) {
var panel = this.getPanelDiv(n);
if (panel) {
panel.innerHTML = '';
}
}
frame.removeEventListener('transitionend', this._transEvent);
this._transEvent = null;
}
}

self._ZEN_Mojo_Component_documentView_updateFrameOffset = function(slide) {
var frame = this.findElement('frame');
if (frame) {
var panelsPerFrame = parseInt(this.panelsPerFrame,10);
panelsPerFrame = (panelsPerFrame>=1) ? panelsPerFrame : 1;
var depth = this.currLevel-panelsPerFrame+1;
depth = depth < 0 ? 0 : depth;
var enc = this.getEnclosingDiv();
var width = parseInt(enc.style.width,10);
var transitionProps = [ 'transition', 'WebkitTransition', 'MozTransition', 'msTransition' ];
var transitionProp = null;
for (var i = 0; i < transitionProps.length; i++) {
if (typeof frame.style[transitionProps[i]] != 'undefined') {
transitionProp = transitionProps[i];
break;
}
}
if (slide && this.effectsEnabled) {
frame.style[transitionProp] = 'all 0.4s ease';
}
else {
frame.style[transitionProp] = '';
}
var x = (-(width/panelsPerFrame)*depth);
if (this.isMobile && (typeof frame.style.webkitTransform == 'string')) {
frame.style.webkitTransform = 'translate3d('+x+'px, 0, 0)';
}
else {
frame.style.left = x + 'px';
}
if (frame.addEventListener) {
this._transEvent = new Function('zenPage.getComponent('+this.index+').transitionHandler();');
frame.addEventListener('transitionend', this._transEvent,false);
}
}
}

self._ZEN_Mojo_Component_documentView_updateLayout = function(effect) {
effect = zenGet(effect);
var handled = false;
if (effect && this.effectsEnabled && this.browserSupportsCanvas()) {
switch(effect) {
case 'fade':
case 'fade-flakes':
case 'fade-tiles':
this.fadeEffect = effect;
this.startFade('out',zenPage.getComponent(this.index).updateLayoutFadeHandler);
handled = true;
break;
}
}
if (!handled) {
if (this._layout && this._layout[this.currLevel]) {
delete this._layout[this.currLevel];
}
this.render();
}
}

self._ZEN_Mojo_Component_documentView_updateLayoutFadeHandler = function(effect) {
if (this._layout && this._layout[this.currLevel]) {
delete this._layout[this.currLevel];
}
this.startFade('in',null);
}

self._ZEN_Mojo_Component_documentView_waitHandler = function() {
var enc = this.getEnclosingDiv();
if (enc == null) return;
var canvas = this.findElement('canvas');
var delay = 50;
if (canvas) {
var ctx = canvas.getContext('2d');
var cw = enc.offsetWidth;
var ch = enc.offsetHeight;
if (cw!=this._docWid || ch!=this._docHgt) {
this._waitCounter = 0;
this._docWid = enc.offsetWidth;
this._docHgt = enc.offsetHeight;
}
if (this._waitCounter==0) {
canvas.style.display = 'block';
canvas.width = cw;
canvas.height = ch;
ctx.clearRect(0,0,cw,ch);
}
var speed = 10;
var cx = Math.floor(cw/2);
var cy = Math.floor(ch/2);
var rad = 100;
var radInner = rad * 0.9;
var angle = ((this._waitCounter*speed)/180 * Math.PI) + Math.PI;
var lx = cx + Math.cos(angle)*rad;
var ly = cy + Math.sin(angle)*rad;
var lxi = cx + Math.cos(angle)*radInner;
var lyi = cy + Math.sin(angle)*radInner;
var angle2 = angle - Math.PI;
var lx2 = cx + Math.cos(angle2)*(rad+2);
var ly2 = cy + Math.sin(angle2)*(rad+2);
var lx2i = cx + Math.cos(angle2)*(radInner-2);
var ly2i = cy + Math.sin(angle2)*(radInner-2);
ctx.lineWidth = rad/10 + 2;
ctx.lineCap = 'round';
ctx.strokeStyle = 'rgba(255,255,255,0.8)';
ctx.beginPath();
ctx.moveTo(lx2i,ly2i);
ctx.lineTo(lx2,ly2);
ctx.stroke();
var r = Math.floor((Math.sin(this._waitCounter/120)+1)*90);
var g = Math.floor((Math.sin(this._waitCounter/76)+1)*80);
var b = Math.floor((Math.cos(this._waitCounter/322)+1)*112);
ctx.strokeStyle = 'rgb('+r+','+g+','+b+')';
ctx.lineWidth = rad/10;
ctx.beginPath();
ctx.moveTo(lxi,lyi);
ctx.lineTo(lx,ly);
ctx.stroke();
this._waitCounter++;
this._fadeTimer = window.setTimeout('zenPage.getComponent('+this.index+').waitHandler();',delay);
}
}

self._ZEN_Mojo_Component_documentView_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_Component_documentView__Loader = function() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Mojo_Component_documentView.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Mojo_Component_documentView.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_documentView;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.documentView';
	p._type = 'documentView';
	p.serialize = _ZEN_Mojo_Component_documentView_serialize;
	p.getSettings = _ZEN_Mojo_Component_documentView_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_documentView_ReallyRefreshContents;
	p.addArrayToGraph = _ZEN_Mojo_Component_documentView_addArrayToGraph;
	p.applyPopupValue = _ZEN_Mojo_Component_documentView_applyPopupValue;
	p.applyValueToPath = _ZEN_Mojo_Component_documentView_applyValueToPath;
	p.backArrowHandler = _ZEN_Mojo_Component_documentView_backArrowHandler;
	p.browserSupportsCanvas = _ZEN_Mojo_Component_documentView_browserSupportsCanvas;
	p.chartElementClick = _ZEN_Mojo_Component_documentView_chartElementClick;
	p.chartRangeChange = _ZEN_Mojo_Component_documentView_chartRangeChange;
	p.checkLibraries = _ZEN_Mojo_Component_documentView_checkLibraries;
	p.connectToController = _ZEN_Mojo_Component_documentView_connectToController;
	p.createLayoutGraph = _ZEN_Mojo_Component_documentView_createLayoutGraph;
	p.createLayoutObject = _ZEN_Mojo_Component_documentView_createLayoutObject;
	p.createLayoutObjectBase = _ZEN_Mojo_Component_documentView_createLayoutObjectBase;
	p.dashboardLoaded = _ZEN_Mojo_Component_documentView_dashboardLoaded;
	p.disableItem = _ZEN_Mojo_Component_documentView_disableItem;
	p.disconnectFromController = _ZEN_Mojo_Component_documentView_disconnectFromController;
	p.endWait = _ZEN_Mojo_Component_documentView_endWait;
	p.evalNode = _ZEN_Mojo_Component_documentView_evalNode;
	p.evalSpec = _ZEN_Mojo_Component_documentView_evalSpec;
	p.eventHandler = _ZEN_Mojo_Component_documentView_eventHandler;
	p.executeCode = _ZEN_Mojo_Component_documentView_executeCode;
	p.fadeHandler = _ZEN_Mojo_Component_documentView_fadeHandler;
	p.fetchCodeTable = _ZEN_Mojo_Component_documentView_fetchCodeTable;
	p.fetchLookupData = _ZEN_Mojo_Component_documentView_fetchLookupData;
	p.flipTable = _ZEN_Mojo_Component_documentView_flipTable;
	p.focusElement = _ZEN_Mojo_Component_documentView_focusElement;
	p.formatDate = _ZEN_Mojo_Component_documentView_formatDate;
	p.generateTable = _ZEN_Mojo_Component_documentView_generateTable;
	p.getBaseClass = _ZEN_Mojo_Component_documentView_getBaseClass;
	p.getBaseStyle = _ZEN_Mojo_Component_documentView_getBaseStyle;
	p.getChildList = _ZEN_Mojo_Component_documentView_getChildList;
	p.getContent = _ZEN_Mojo_Component_documentView_getContent;
	p.getControlValue = _ZEN_Mojo_Component_documentView_getControlValue;
	p.getController = _ZEN_Mojo_Component_documentView_getController;
	p.getCurrentControl = _ZEN_Mojo_Component_documentView_getCurrentControl;
	p.getDeveloperHTML = _ZEN_Mojo_Component_documentView_getDeveloperHTML;
	p.getDocumentCriteria = _ZEN_Mojo_Component_documentView_getDocumentCriteria;
	p.getDocumentKey = _ZEN_Mojo_Component_documentView_getDocumentKey;
	p.getItemByKey = _ZEN_Mojo_Component_documentView_getItemByKey;
	p.getItemDivByKey = _ZEN_Mojo_Component_documentView_getItemDivByKey;
	p.getLayout = _ZEN_Mojo_Component_documentView_getLayout;
	p.getLayoutCriteria = _ZEN_Mojo_Component_documentView_getLayoutCriteria;
	p.getLayoutKey = _ZEN_Mojo_Component_documentView_getLayoutKey;
	p.getLevel = _ZEN_Mojo_Component_documentView_getLevel;
	p.getPanelDiv = _ZEN_Mojo_Component_documentView_getPanelDiv;
	p.getPluginByLayoutObjectType = _ZEN_Mojo_Component_documentView_getPluginByLayoutObjectType;
	p.getPluginByName = _ZEN_Mojo_Component_documentView_getPluginByName;
	p.getPluginConflicts = _ZEN_Mojo_Component_documentView_getPluginConflicts;
	p.getPluginMap = _ZEN_Mojo_Component_documentView_getPluginMap;
	p.getPluginMapping = _ZEN_Mojo_Component_documentView_getPluginMapping;
	p.getPopupContent = _ZEN_Mojo_Component_documentView_getPopupContent;
	p.getSourceData = _ZEN_Mojo_Component_documentView_getSourceData;
	p.getSuppressCodeExecution = _ZEN_Mojo_Component_documentView_getSuppressCodeExecution;
	p.getSuppressRender = _ZEN_Mojo_Component_documentView_getSuppressRender;
	p.getSuppressStopPropagation = _ZEN_Mojo_Component_documentView_getSuppressStopPropagation;
	p.getTargetChart = _ZEN_Mojo_Component_documentView_getTargetChart;
	p.getText = _ZEN_Mojo_Component_documentView_getText;
	p.getTimeTableHTML = _ZEN_Mojo_Component_documentView_getTimeTableHTML;
	p.hideItem = _ZEN_Mojo_Component_documentView_hideItem;
	p.hourClick = _ZEN_Mojo_Component_documentView_hourClick;
	p.injectEventHandler = _ZEN_Mojo_Component_documentView_injectEventHandler;
	p.invalidate = _ZEN_Mojo_Component_documentView_invalidate;
	p.minuteClick = _ZEN_Mojo_Component_documentView_minuteClick;
	p.notifyView = _ZEN_Mojo_Component_documentView_notifyView;
	p.onchange = _ZEN_Mojo_Component_documentView_onchange;
	p.onevent = _ZEN_Mojo_Component_documentView_onevent;
	p.onloadHandler = _ZEN_Mojo_Component_documentView_onloadHandler;
	p.onselect = _ZEN_Mojo_Component_documentView_onselect;
	p.popAll = _ZEN_Mojo_Component_documentView_popAll;
	p.popCurrentControl = _ZEN_Mojo_Component_documentView_popCurrentControl;
	p.popDocument = _ZEN_Mojo_Component_documentView_popDocument;
	p.popDocuments = _ZEN_Mojo_Component_documentView_popDocuments;
	p.processLoop = _ZEN_Mojo_Component_documentView_processLoop;
	p.pushCurrentControl = _ZEN_Mojo_Component_documentView_pushCurrentControl;
	p.pushDocument = _ZEN_Mojo_Component_documentView_pushDocument;
	p.raiseResizeEvents = _ZEN_Mojo_Component_documentView_raiseResizeEvents;
	p.refreshItem = _ZEN_Mojo_Component_documentView_refreshItem;
	p.registerPlugins = _ZEN_Mojo_Component_documentView_registerPlugins;
	p.renderContents = _ZEN_Mojo_Component_documentView_renderContents;
	p.renderDocument = _ZEN_Mojo_Component_documentView_renderDocument;
	p.renderGeneric = _ZEN_Mojo_Component_documentView_renderGeneric;
	p.renderItem = _ZEN_Mojo_Component_documentView_renderItem;
	p.renderLayout = _ZEN_Mojo_Component_documentView_renderLayout;
	p.renderRoot = _ZEN_Mojo_Component_documentView_renderRoot;
	p.renderSkeleton = _ZEN_Mojo_Component_documentView_renderSkeleton;
	p.resetScroll = _ZEN_Mojo_Component_documentView_resetScroll;
	p.resetTime = _ZEN_Mojo_Component_documentView_resetTime;
	p.resolveNamedStyle = _ZEN_Mojo_Component_documentView_resolveNamedStyle;
	p.resolveOptionList = _ZEN_Mojo_Component_documentView_resolveOptionList;
	p.sendEventToController = _ZEN_Mojo_Component_documentView_sendEventToController;
	p.setContent = _ZEN_Mojo_Component_documentView_setContent;
	p.setControlError = _ZEN_Mojo_Component_documentView_setControlError;
	p.setControlHint = _ZEN_Mojo_Component_documentView_setControlHint;
	p.setControlValue = _ZEN_Mojo_Component_documentView_setControlValue;
	p.setControllerId = _ZEN_Mojo_Component_documentView_setControllerId;
	p.setDocumentKey = _ZEN_Mojo_Component_documentView_setDocumentKey;
	p.setItemValue = _ZEN_Mojo_Component_documentView_setItemValue;
	p.setLayoutKey = _ZEN_Mojo_Component_documentView_setLayoutKey;
	p.setPluginMapping = _ZEN_Mojo_Component_documentView_setPluginMapping;
	p.setProperty = _ZEN_Mojo_Component_documentView_setProperty;
	p.setSize = _ZEN_Mojo_Component_documentView_setSize;
	p.showPopup = _ZEN_Mojo_Component_documentView_showPopup;
	p.showTooltip = _ZEN_Mojo_Component_documentView_showTooltip;
	p.startFade = _ZEN_Mojo_Component_documentView_startFade;
	p.startWait = _ZEN_Mojo_Component_documentView_startWait;
	p.toggleMinutes = _ZEN_Mojo_Component_documentView_toggleMinutes;
	p.transitionHandler = _ZEN_Mojo_Component_documentView_transitionHandler;
	p.updateFrameOffset = _ZEN_Mojo_Component_documentView_updateFrameOffset;
	p.updateLayout = _ZEN_Mojo_Component_documentView_updateLayout;
	p.updateLayoutFadeHandler = _ZEN_Mojo_Component_documentView_updateLayoutFadeHandler;
	p.waitHandler = _ZEN_Mojo_Component_documentView_waitHandler;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/mojoHtml'] = '_ZEN_Mojo_Component_mojoHtml';
self._ZEN_Mojo_Component_mojoHtml = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_mojoHtml__init(this,index,id);}
}

self._ZEN_Mojo_Component_mojoHtml__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_html__init) ?zenMaster._ZEN_Component_html__init(o,index,id):_ZEN_Component_html__init(o,index,id);
	o.OnDrawContent = '';
}
function _ZEN_Mojo_Component_mojoHtml_serialize(set,s)
{
	var o = this;s[0]='400802672';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.OnDrawContent;s[7]=o.align;s[8]=o.aux;s[9]=o.containerStyle;s[10]=o.content;s[11]=(o.dragEnabled?1:0);s[12]=(o.dropEnabled?1:0);s[13]=(o.dynamic?1:0);s[14]=o.enclosingClass;s[15]=o.enclosingStyle;s[16]=o.error;s[17]=o.height;s[18]=(o.hidden?1:0);s[19]=o.hint;s[20]=o.hintClass;s[21]=o.hintStyle;s[22]=o.label;s[23]=o.labelClass;s[24]=o.labelDisabledClass;s[25]=o.labelStyle;s[26]=o.onafterdrag;s[27]=o.onbeforedrag;s[28]=o.ondrag;s[29]=o.ondrop;s[30]=o.onhide;s[31]=o.onrefresh;s[32]=o.onshow;s[33]=o.onupdate;s[34]=o.overlayMode;s[35]=o.renderFlag;s[36]=o.seed;s[37]=(o.showLabel?1:0);s[38]=o.slice;s[39]=o.title;s[40]=o.tuple;s[41]=o.valign;s[42]=(o.visible?1:0);s[43]=o.width;
}
function _ZEN_Mojo_Component_mojoHtml_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_mojoHtml_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_Component_mojoHtml__Loader = function() {
	zenLoadClass('_ZEN_Component_html');
	_ZEN_Mojo_Component_mojoHtml.prototype = zenCreate('_ZEN_Component_html',-1);
	var p = _ZEN_Mojo_Component_mojoHtml.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_mojoHtml;
	p.superClass = ('undefined' == typeof _ZEN_Component_html) ? zenMaster._ZEN_Component_html.prototype:_ZEN_Component_html.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.mojoHtml';
	p._type = 'mojoHtml';
	p.serialize = _ZEN_Mojo_Component_mojoHtml_serialize;
	p.getSettings = _ZEN_Mojo_Component_mojoHtml_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_mojoHtml_ReallyRefreshContents;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/mojoGroup'] = '_ZEN_Mojo_Component_mojoGroup';
self._ZEN_Mojo_Component_mojoGroup = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_mojoGroup__init(this,index,id);}
}

self._ZEN_Mojo_Component_mojoGroup__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.layout = 'vertical';
}
function _ZEN_Mojo_Component_mojoGroup_serialize(set,s)
{
	var o = this;s[0]='2521056755';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.cellAlign;s[9]=o.cellSize;s[10]=o.cellStyle;s[11]=o.cellVAlign;s[12]=set.serializeList(o,o.children,true,'children');s[13]=o.containerStyle;s[14]=(o.disabled?1:0);s[15]=(o.dragEnabled?1:0);s[16]=(o.dropEnabled?1:0);s[17]=(o.dynamic?1:0);s[18]=o.enclosingClass;s[19]=o.enclosingStyle;s[20]=o.error;s[21]=o.groupClass;s[22]=o.groupStyle;s[23]=o.height;s[24]=(o.hidden?1:0);s[25]=o.hint;s[26]=o.hintClass;s[27]=o.hintStyle;s[28]=o.label;s[29]=o.labelClass;s[30]=o.labelDisabledClass;s[31]=o.labelPosition;s[32]=o.labelStyle;s[33]=o.layout;s[34]=o.onafterdrag;s[35]=o.onbeforedrag;s[36]=o.onclick;s[37]=o.ondrag;s[38]=o.ondrop;s[39]=o.onhide;s[40]=o.onrefresh;s[41]=o.onshow;s[42]=o.onupdate;s[43]=o.overlayMode;s[44]=o.renderFlag;s[45]=(o.showLabel?1:0);s[46]=o.slice;s[47]=o.title;s[48]=o.tuple;s[49]=o.valign;s[50]=(o.visible?1:0);s[51]=o.width;
}
function _ZEN_Mojo_Component_mojoGroup_getSettings(s)
{
	s['name'] = 'string';
	s['layout'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_mojoGroup_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_Component_mojoGroup__Loader = function() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Mojo_Component_mojoGroup.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Mojo_Component_mojoGroup.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_mojoGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.mojoGroup';
	p._type = 'mojoGroup';
	p.serialize = _ZEN_Mojo_Component_mojoGroup_serialize;
	p.getSettings = _ZEN_Mojo_Component_mojoGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_mojoGroup_ReallyRefreshContents;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/contentProvider'] = '_ZEN_Mojo_Component_contentProvider';
self._ZEN_Mojo_Component_contentProvider = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_contentProvider__init(this,index,id);}
}

self._ZEN_Mojo_Component_contentProvider__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_composite__init) ?zenMaster._ZEN_Component_composite__init(o,index,id):_ZEN_Component_composite__init(o,index,id);
	o.OnGetCodeTable = '';
	o.OnGetTemplateList = '';
	o.currTemplate = '$default';
	o.layout = 'vertical';
	o.providerList = '';
	o.templateClass = '';
	o.templateClassArray = new Object();
	o.templateObjectArray = new Object();
	o.visible = false;
}
function _ZEN_Mojo_Component_contentProvider_serialize(set,s)
{
	var o = this;s[0]='926536769';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.OnGetCodeTable;s[7]=o.OnGetTemplateList;s[8]=o.align;s[9]=o.aux;s[10]=o.cellAlign;s[11]=o.cellSize;s[12]=o.cellStyle;s[13]=o.cellVAlign;s[14]=set.serializeList(o,o.children,true,'children');s[15]=(o.childrenCreated?1:0);s[16]=o.containerStyle;s[17]=o.currTemplate;s[18]=(o.disabled?1:0);s[19]=(o.dragEnabled?1:0);s[20]=(o.dropEnabled?1:0);s[21]=(o.dynamic?1:0);s[22]=o.enclosingClass;s[23]=o.enclosingStyle;s[24]=o.error;s[25]=o.groupClass;s[26]=o.groupStyle;s[27]=o.height;s[28]=(o.hidden?1:0);s[29]=o.hint;s[30]=o.hintClass;s[31]=o.hintStyle;s[32]=o.label;s[33]=o.labelClass;s[34]=o.labelDisabledClass;s[35]=o.labelPosition;s[36]=o.labelStyle;s[37]=o.layout;s[38]=o.onafterdrag;s[39]=o.onbeforedrag;s[40]=o.onclick;s[41]=o.ondrag;s[42]=o.ondrop;s[43]=o.onhide;s[44]=o.onrefresh;s[45]=o.onshow;s[46]=o.onupdate;s[47]=o.overlayMode;s[48]=o.providerList;s[49]=o.renderFlag;s[50]=(o.showLabel?1:0);s[51]=o.slice;s[52]=o.templateClass;s[53]=set.serializeArray(o,o.templateClassArray,false,'templateClassArray');s[54]=set.serializeArray(o,o.templateObjectArray,true,'templateObjectArray');s[55]=o.title;s[56]=o.tuple;s[57]=o.valign;s[58]=(o.visible?1:0);s[59]=o.width;
}
function _ZEN_Mojo_Component_contentProvider_getSettings(s)
{
	s['name'] = 'string';
	s['currTemplate'] = 'string';
	s['layout'] = 'string';
	s['providerList'] = 'csv';
	s['templateClass'] = 'className';
	s['templateClassArray'] = 'className';
	s['templateObjectArray'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_contentProvider_contentNotify = function(final,which,key,criteria,notify) {
if (final) {
var json = this.getChildById(which);
if (json && json.getContentObject) {
var content = json.getContentObject();
if (!this._lastKey) {
this._lastKey = {};
this._lastCriteria = {};
}
this._lastKey[which] = key;
this._lastCriteria[which] = criteria;
var cacheKey = key ? key : 'null';
var cacheCriteria = criteria ? criteria : 'null';
if (!this._localCache) {
this._localCache = {};
}
if (!this._localCache[which]) {
this._localCache[which] = {};
}
if (!this._localCache[which][cacheKey]) {
this._localCache[which][cacheKey] = {};
}
this._localCache[which][cacheKey][cacheCriteria] = content;
}
}
if (notify) {
notify(final);
}
}

self._ZEN_Mojo_Component_contentProvider_fetchCodeTable = function(key,force) {
var codes = null;
var force = zenGet(force,false);
if (!key) {
return null;
}
var ckey = key;
if (!force && this._codeTables) {
codes = this._codeTables[ckey];
}
if (!codes) {
var json = this.getChildById('$code');
if (json && json.getContentObject) {
if (json.parameters.key) {
json.parameters.key.value = key;
}
json.reloadContents();
var data = json.getContentObject();
if (data && data.codes) {
codes = data.codes;
}
}
if (!this._codeTables) {
this._codeTables = {};
}
this._codeTables[ckey] = codes;
}
return codes;
}

self._ZEN_Mojo_Component_contentProvider_getContent = function(which,key,criteria,force,notify) {
var content = null;
var defer = false;
force = zenGet(force,false);
criteria = zenGet(criteria);
if (!which) {
return null;
}
var action = {id:this.id,which:which,key:key?key:'null',criteria:criteria,force:force,content:null,
template:'', criteria:criteria,
fromTemplate:false, fromCache:false,reload:false,defer:false};
var templateObject = this.getTemplate();
if (!content && templateObject && templateObject.getContent) {
content = templateObject.getContent(which,key,criteria);
}
if (criteria && 'object' == typeof criteria) {
criteria = JSON.stringify(criteria);
}
if (content) {
action.fromTemplate = true;
action.template = templateObject._type;
}
else {
var cacheKey = key ? key : 'null';
var cacheCriteria = criteria ? criteria : 'null';
if (!force && this._localCache && this._localCache[which] && this._localCache[which][cacheKey]) {
content = this._localCache[which][cacheKey][cacheCriteria];
}
if (content) {
action.fromCache = true;
}
else {
var json = this.getChildById(which);
if (json && json.getContentObject) {
if (json.parameters.key) {
json.parameters.key.value = key;
}
if (json.parameters.criteria) {
json.parameters.criteria.value = criteria;
}
var defer = false;
var reload = force;
if (!this._lastKey) {
reload = true;
}
else if (!reload && (this._lastKey && (this._lastKey[which] != key))||(this._lastCriteria && (this._lastCriteria[which] != criteria))) {
reload = true;
}
if (reload) {
action.reload = true;
if (notify && json.reloadContentsAsynch) {
var index = this.index;
var func = function(final) { zenPage.getComponent(index).contentNotify(final,which,key,criteria,notify); }
json.reloadContentsAsynch(func,200);
defer = true;
content = null;
}
else {
json.reloadContents();
if (json.error) {
alert(json.error);
}
}
}
if (!defer) {
content = json.getContentObject();
if (!this._lastKey) {
this._lastKey = {};
this._lastCriteria = {};
}
this._lastKey[which] = key;
this._lastCriteria[which] = criteria;
}
}
}
if (!defer) {
if (!this._localCache) {
this._localCache = {};
}
if (!this._localCache[which]) {
this._localCache[which] = {};
}
if (!this._localCache[which][cacheKey]) {
this._localCache[which][cacheKey] = {};
}
this._localCache[which][cacheKey][cacheCriteria] = content;
if (notify) {
notify(true);
}
}
}
if (zenPage._zenCPLog) {
action.content = content;
action.defer = defer;
zenPage._zenCPLog.push(action);
if (zenPage.updateDebugWindow) {
zenPage.updateDebugWindow();
}
}
return content;
}

self._ZEN_Mojo_Component_contentProvider_getTemplate = function() {
return this.currTemplate ? this.templateObjectArray[this.currTemplate] : null;
}

self._ZEN_Mojo_Component_contentProvider_getTemplateClass = function() {
return this.currTemplate ? this.templateClassArray[this.currTemplate] : '';
}

self._ZEN_Mojo_Component_contentProvider_getTemplateInfo = function() {
var info = null;
var json = this.getChildById('$templateList');
if (json && json.getContentObject) {
var data = json.getContentObject();
if (data && data.children) {
info = data.children;
}
}
return info;
}

self._ZEN_Mojo_Component_contentProvider_invalidate = function(which,key) {
if (!which) {
delete this._localCache;
}
else if (this._localCache && this._localCache[which]) {
if (!key) {
delete this._localCache[which];
}
else {
delete this._localCache[which][key];
}
}
if (this._lastKey) {
delete this._lastKey[which];
delete this._lastCriteria[which];
}
}

self._ZEN_Mojo_Component_contentProvider_loadTemplateNS = function(ns,type,key) {
key = zenGet(key,'$default');
var load = true;
if (type == null) {
this.currTemplate = null;
return;
}
this.currTemplate = key;
if (this.templateObjectArray[this.currTemplate]) {
if (this.templateObjectArray[this.currTemplate]._type == type) {
load = false;
}
}
if (load) {
var templateObject = zenPage.createComponentNS(ns,type);
var templateClass = templateObject ? templateObject._serverClass : '';
this.templateObjectArray[this.currTemplate] = templateObject;
this.templateClassArray[this.currTemplate] = templateClass;
}
var templateObject = this.templateObjectArray[this.currTemplate];
var templateClass = this.templateClassArray[this.currTemplate];
this.templateClass = templateClass;
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if (child.parameters && child.parameters['templateClass'] && child.OnGetTargetObject) {
child.parameters['templateClass'].value = templateClass;
child.reloadContents();
}
}
if (templateObject && templateObject.onLoadTemplate) {
templateObject.onLoadTemplate();
}
}

self._ZEN_Mojo_Component_contentProvider_submitData = function(key,data,notify) {
var notify = zenGet(notify);
var response = null;
if (typeof data === 'undefined' ) {
data = {};
}
var json = this.getChildById('$submit');
if (json && json.getContentObject) {
if (json.parameters.id) {
if (data && 'undefined'!=typeof data._id) {
json.parameters.id.value = data._id;
}
else if (data && 'undefined'!=typeof data.id) {
json.parameters.id.value = data.id;
}
else {
json.parameters.id.value = '';
}
}
if (json.parameters.templateClass) {
json.parameters.templateClass.value = this.getTemplateClass();
}
json.setContentObject(data);
json.submitContent(key,'%ZEN.proxyObject',notify,250);
if (json.error) {
alert('Error: ' + json.error);
}
response = json.getContentObject();
if (response && response.action=='none') {
response = null;
}
}
return response;
}

self._ZEN_Mojo_Component_contentProvider_GetJSONCodeTable = function(pParms,pObject) {
	return zenInstanceMethod(this,'GetJSONCodeTable','L,O','STATUS',arguments);
}

self._ZEN_Mojo_Component_contentProvider_GetJSONContent = function(pParms,pObject) {
	return zenClassMethod(this,'GetJSONContent','L,O','STATUS',arguments);
}

self._ZEN_Mojo_Component_contentProvider_GetTemplateList = function(pParms,pMetaData,pData) {
	return zenInstanceMethod(this,'GetTemplateList','L,L,L','STATUS',arguments);
}

self._ZEN_Mojo_Component_contentProvider_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}

self._ZEN_Mojo_Component_contentProvider_SubmitJSONContent = function(pCommand,pProvider,pSubmitObject,pResponseObject) {
	return zenInstanceMethod(this,'SubmitJSONContent','L,O,O,O','STATUS',arguments);
}
self._ZEN_Mojo_Component_contentProvider__Loader = function() {
	zenLoadClass('_ZEN_Component_composite');
	_ZEN_Mojo_Component_contentProvider.prototype = zenCreate('_ZEN_Component_composite',-1);
	var p = _ZEN_Mojo_Component_contentProvider.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_contentProvider;
	p.superClass = ('undefined' == typeof _ZEN_Component_composite) ? zenMaster._ZEN_Component_composite.prototype:_ZEN_Component_composite.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.contentProvider';
	p._type = 'contentProvider';
	p.serialize = _ZEN_Mojo_Component_contentProvider_serialize;
	p.getSettings = _ZEN_Mojo_Component_contentProvider_getSettings;
	p.GetJSONCodeTable = _ZEN_Mojo_Component_contentProvider_GetJSONCodeTable;
	p.GetJSONContent = _ZEN_Mojo_Component_contentProvider_GetJSONContent;
	p.GetTemplateList = _ZEN_Mojo_Component_contentProvider_GetTemplateList;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_contentProvider_ReallyRefreshContents;
	p.SubmitJSONContent = _ZEN_Mojo_Component_contentProvider_SubmitJSONContent;
	p.contentNotify = _ZEN_Mojo_Component_contentProvider_contentNotify;
	p.fetchCodeTable = _ZEN_Mojo_Component_contentProvider_fetchCodeTable;
	p.getContent = _ZEN_Mojo_Component_contentProvider_getContent;
	p.getTemplate = _ZEN_Mojo_Component_contentProvider_getTemplate;
	p.getTemplateClass = _ZEN_Mojo_Component_contentProvider_getTemplateClass;
	p.getTemplateInfo = _ZEN_Mojo_Component_contentProvider_getTemplateInfo;
	p.invalidate = _ZEN_Mojo_Component_contentProvider_invalidate;
	p.loadTemplateNS = _ZEN_Mojo_Component_contentProvider_loadTemplateNS;
	p.submitData = _ZEN_Mojo_Component_contentProvider_submitData;
}

self._zenClassIdx['http://www.intersystems.com/zen/mojo/mojoPane'] = '_ZEN_Mojo_Component_mojoPane';
self._ZEN_Mojo_Component_mojoPane = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_mojoPane__init(this,index,id);}
}

self._ZEN_Mojo_Component_mojoPane__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Component_pane__init) ?zenMaster._ZEN_Component_pane__init(o,index,id):_ZEN_Component_pane__init(o,index,id);
	o.layout = 'vertical';
}
function _ZEN_Mojo_Component_mojoPane_serialize(set,s)
{
	var o = this;s[0]='3306517082';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.cellAlign;s[9]=o.cellSize;s[10]=o.cellStyle;s[11]=o.cellVAlign;s[12]=set.serializeList(o,o.children,true,'children');s[13]=o.containerStyle;s[14]=(o.disabled?1:0);s[15]=(o.dragEnabled?1:0);s[16]=(o.dropEnabled?1:0);s[17]=(o.dynamic?1:0);s[18]=o.enclosingClass;s[19]=o.enclosingStyle;s[20]=o.error;s[21]=o.groupClass;s[22]=o.groupStyle;s[23]=o.height;s[24]=(o.hidden?1:0);s[25]=o.hint;s[26]=o.hintClass;s[27]=o.hintStyle;s[28]=o.label;s[29]=o.labelClass;s[30]=o.labelDisabledClass;s[31]=o.labelPosition;s[32]=o.labelStyle;s[33]=o.layout;s[34]=o.onafterdrag;s[35]=o.onbeforedrag;s[36]=o.onclick;s[37]=o.ondrag;s[38]=o.ondrop;s[39]=o.onhide;s[40]=o.onrefresh;s[41]=o.onshow;s[42]=o.onupdate;s[43]=o.overlayMode;s[44]=o.paneName;s[45]=o.renderFlag;s[46]=(o.showLabel?1:0);s[47]=o.slice;s[48]=o.title;s[49]=o.tuple;s[50]=o.valign;s[51]=(o.visible?1:0);s[52]=o.width;
}
function _ZEN_Mojo_Component_mojoPane_getSettings(s)
{
	s['name'] = 'string';
	s['layout'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_mojoPane_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_Component_mojoPane__Loader = function() {
	zenLoadClass('_ZEN_Component_pane');
	_ZEN_Mojo_Component_mojoPane.prototype = zenCreate('_ZEN_Component_pane',-1);
	var p = _ZEN_Mojo_Component_mojoPane.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_mojoPane;
	p.superClass = ('undefined' == typeof _ZEN_Component_pane) ? zenMaster._ZEN_Component_pane.prototype:_ZEN_Component_pane.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.mojoPane';
	p._type = 'mojoPane';
	p.serialize = _ZEN_Mojo_Component_mojoPane_serialize;
	p.getSettings = _ZEN_Mojo_Component_mojoPane_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_mojoPane_ReallyRefreshContents;
}
/* EOF */