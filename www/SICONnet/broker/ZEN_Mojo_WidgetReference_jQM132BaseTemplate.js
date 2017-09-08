/*** Zen Module: ZEN_Mojo_WidgetReference_jQM132BaseTemplate ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/jQM132BaseTemplate'] = '_ZEN_Mojo_WidgetReference_jQM132BaseTemplate';
self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate = function(index,id) {
	if (index>=0) {_ZEN_Mojo_WidgetReference_jQM132BaseTemplate__init(this,index,id);}
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Component_contentTemplate__init) ?zenMaster._ZEN_Mojo_Component_contentTemplate__init(o,index,id):_ZEN_Mojo_Component_contentTemplate__init(o,index,id);
}
function _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_serialize(set,s)
{
	var o = this;s[0]='2350274433';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.aux;s[8]=o.containerStyle;s[9]=(o.dragEnabled?1:0);s[10]=(o.dropEnabled?1:0);s[11]=(o.dynamic?1:0);s[12]=o.enclosingClass;s[13]=o.enclosingStyle;s[14]=o.error;s[15]=o.height;s[16]=(o.hidden?1:0);s[17]=o.hint;s[18]=o.hintClass;s[19]=o.hintStyle;s[20]=o.label;s[21]=o.labelClass;s[22]=o.labelDisabledClass;s[23]=o.labelStyle;s[24]=o.onafterdrag;s[25]=o.onbeforedrag;s[26]=o.ondrag;s[27]=o.ondrop;s[28]=o.onhide;s[29]=o.onrefresh;s[30]=o.onshow;s[31]=o.onupdate;s[32]=o.overlayMode;s[33]=o.renderFlag;s[34]=(o.showLabel?1:0);s[35]=o.slice;s[36]=o.title;s[37]=o.tuple;s[38]=o.valign;s[39]=(o.visible?1:0);s[40]=o.width;
}
function _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_addBoldTag = function(text) {
return "<b>"+text+"</b>";
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatDocCSS = function(pCode) {
var docCSS = [];
var indent = 0;
var indentString = '';
if (!pCode) {
return docCSS;
}
for (var i = 0; i < pCode.length;i++) {
var line = pCode[i].line;
if (line.charAt(0) == '}'){
indent--;
indentString = '';
for (var k = 0; k < indent; k++) {
indentString = indentString + '&#160;&#160;&#160;&#160;';
}
}
var docLine = line;
docCSS.push({type:'$content',cssClass:'code',content:indentString+'<code>'+docLine+'</code>'});
if (line.charAt(line.length-1) == '{') {
indent++;
indentString = indentString + '&#160;&#160;&#160;&#160;';
}
}
return docCSS;
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatDocCode = function(pCode) {
var docCode = [];
var indent = 0;
var indentString = '';
if (!pCode) {
return docCode;
}
for (var i = 0; i < pCode.length;i++) {
var line = pCode[i].line;
if (line.charAt(0) == ']'){
indent--;
indentString = '';
for (var k = 0; k < indent; k++) {
indentString = indentString + '&#160;&#160;&#160;&#160;';
}
} else if (line.charAt(0) == '}'){
indent--;
indentString = '';
for (var k = 0; k < indent; k++) {
indentString = indentString + '&#160;&#160;&#160;&#160;';
}
}
var docLine = line;
var types = docLine.match(/\'\$\w*\'/g);
if (types) {
for (var j = 0; j < types.length; j++) {
docLine = docLine.replace(types[j],'\'</code><code class="layoutType">'+types[j].substring(1,types[j].length-1)+'</code><code>\'');
}
}
var keys = docLine.match(/\w*[:]/g);
if (keys) {
for (var j = 0; j < keys.length; j++) {
docLine = docLine.replace(keys[j],'</code><code class="keyType">'+keys[j].substring(0,keys[j].length-1)+'</code><code>:');
}
}
docCode.push({type:'$content',cssClass:'code',content:indentString+'<code>'+docLine+'</code>'});
if (line.charAt(line.length-1) == '[') {
indent++;
indentString = indentString + '&#160;&#160;&#160;&#160;';
} else if (line.charAt(line.length-1) == '{') {
indent++;
indentString = indentString + '&#160;&#160;&#160;&#160;';
}
}
return docCode;
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatDocLineNumbers = function(pCode) {
var docLineNumbers = [];
if (!pCode) {
return docLineNumbers;
}
for (var i = 0; i < pCode.length;i++) {
docLineNumbers.push({type:'$div',$content:i+1});
}
return docLineNumbers;
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatSampleCode = function(pCode,pData) {
var sampleCode = [];
if (!pCode) {
return sampleCode;
}
for (var i = 0; i < pCode.length;i++) {
var line = pCode[i].line;
sampleCode.push(line);
}
var joined = sampleCode.join('');
var a = joined.replace(/\b:/g,"':");
a = a.replace(/\x7B\b/g,"{'");
a = a.replace(/,\b/g,",'");
a = a.replace(/\'/g,'"');
sampleCode = JSON.parse(a);
sampleCode = this.resolveExpressions(sampleCode,pData);
return sampleCode;
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_getLayout = function(key,criteria) {
var content = null;
switch(key) {
case 'home':
var data = zenPage.getContent('data',key,criteria);
content = {
sourceData:data,
children:[
{type:'$div',cssClass:'headerDiv',children:[
{type:'$content',cssClass:'header',content:'=[headerTitle]'}
]},
{type:'$div',cssClass:'mainDiv',children:[
{type:'$h2',$content:'=[referenceTitle]'},
{type:'$p',$content:'=[referenceDescription]'},
{type:'$a',href:'=[linkAddress]',$content:'=[link]',$extra:{rel:'external'}},
{type:'$listview',inset:true,filter:true,filterplaceholder:'Search widgets',value:'=[widgets]',children:[
{type:'$listviewitem',label:'=[widgetname]',labelNoWrapper:false,content:'=[widgetOriginalName]',clickable:true,key:'show-widget',value:'=[widgetvalue]'}
]}
]},
]
};
break;
default :
var data = zenPage.getContent('data',key,criteria);
content = {
sourceData:data,
children:[
{type:'$div',cssClass:'headerDiv',children:[
{type:'$button',caption:'Back',mini:true,dataicon:'arrow-l',key:'back',inline:true,dataTheme:'b'},
{type:'$content',cssClass:'header',content:'=[headercontent]'}
]},
{type:'$div',cssClass:'mainDiv',children:[
{type:'$h1',$content:'=[widgetname]'},
{type:'$p',$content:'=[description]'},
{type:'$a',href:'=[linkAddress]',$content:'=[link]',$extra:{rel:'external'}}
]},
]
};
for (var i = 0; i < data.sections.length; i++) {
var sectionData = data.sections[i];
var sampleCode = this.formatSampleCode(sectionData.staticCode,{});
var docStaticCodeLineNumbers = this.formatDocLineNumbers(sectionData.staticCode);
var docStaticCode = this.formatDocCode(sectionData.staticCode);
var docStaticDataLineNumbers = this.formatDocLineNumbers(sectionData.staticData);
var docStaticData = this.formatDocCode(sectionData.staticData);
if (!sectionData.staticCode) {
sampleCode = this.formatSampleCode(sectionData.dynamicCode,this.formatSampleCode(sectionData.dynamicData));
}
var docDynamicCodeLineNumbers = this.formatDocLineNumbers(sectionData.dynamicCode);
var docDynamicCode = this.formatDocCode(sectionData.dynamicCode);
var docDynamicDataLineNumbers = this.formatDocLineNumbers(sectionData.dynamicData);
var docDynamicData = this.formatDocCode(sectionData.dynamicData);
var docCSSLineNumbers = this.formatDocLineNumbers(sectionData.css);
var docCSS = this.formatDocCSS(sectionData.css);
var docZenMojoCodeLineNumbers = this.formatDocLineNumbers(sectionData.zenMojoCode);
var docZenMojoCode = this.formatDocCSS(sectionData.zenMojoCode);
var docStaticCodeLayout = null;
if (docStaticCodeLineNumbers.length > 0) {
docStaticCodeLayout =	{type:'$collapsible',inset:false,dataTheme:'b',dataContentTheme:'a',label:'Zen Mojo Static Layout',children:[
{type:'$table',children:[
{type:'$tbody',children:[
{type:'$tr',children:[
{type:'$td',cssClass:'gutter',children:docStaticCodeLineNumbers},
{type:'$td',children:docStaticCode}
]}
]}
]}
]};
}
var docStaticDataLayout = null;
if (docStaticDataLineNumbers.length > 0) {
docStaticDataLayout = 	{type:'$collapsible',inset:false,dataTheme:'b',dataContentTheme:'a',label:'Zen Mojo Static Data',children:[
]};
}
var docDynamicCodeLayout = null;
if (docDynamicCodeLineNumbers.length > 0) {
docDynamicCodeLayout = 	{type:'$collapsible',inset:false,dataTheme:'b',dataContentTheme:'a',label:'Zen Mojo Dynamic Layout',children:[
{type:'$table',children:[
{type:'$tbody',children:[
{type:'$tr',children:[
{type:'$td',cssClass:'gutter',children:docDynamicCodeLineNumbers},
{type:'$td',children:docDynamicCode}
]}
]}
]}
]};
}
var docDynamicDataLayout = null;
if (docDynamicDataLineNumbers.length > 0) {
docDynamicDataLayout = 	{type:'$collapsible',inset:false,dataTheme:'b',dataContentTheme:'a',label:'Zen Mojo Dynamic Data',children:[
{type:'$table',children:[
{type:'$tbody',children:[
{type:'$tr',children:[
{type:'$td',cssClass:'gutter',children:docDynamicDataLineNumbers},
{type:'$td',children:docDynamicData}
]}
]}
]}
]};
}
var docCSSLayout = null;
if (docCSSLineNumbers.length > 0) {
var docCSSLayout = 	{type:'$collapsible',inset:false,dataTheme:'b',dataContentTheme:'a',label:'CSS',children:[
{type:'$table',children:[
{type:'$tbody',children:[
{type:'$tr',children:[
{type:'$td',cssClass:'gutter',children:docCSSLineNumbers},
{type:'$td',children:docCSS}
]}
]}
]}
]};
}
var docZenMojoCodeLayout = null;
if (docZenMojoCodeLineNumbers.length > 0) {
var docZenMojoCodeLayout = 	{type:'$collapsible',inset:false,dataTheme:'b',dataContentTheme:'a',label:'Zen Mojo Code',children:[
{type:'$table',children:[
{type:'$tbody',children:[
{type:'$tr',children:[
{type:'$td',cssClass:'gutter',children:docZenMojoCodeLineNumbers},
{type:'$td',children:docZenMojoCode}
]}
]}
]}
]};
}
var docs = [];
if (docStaticCodeLayout) {
docs.push(docStaticCodeLayout);
}
if (docStaticDataLayout) {
docs.push(docStaticDataLayout);
}
if (docDynamicCodeLayout) {
docs.push(docDynamicCodeLayout);
}
if (docDynamicDataLayout) {
docs.push(docDynamicDataLayout);
}
if (docCSSLayout) {
docs.push(docCSSLayout);
}
if (docZenMojoCodeLayout) {
docs.push(docZenMojoCodeLayout);
}
docs[0].expanded = true;
var section =	{type:'$div',cssClass:'sampleSection',children:[
{type:'$h2',$content:sectionData.header},
{type:'$content',content:sectionData.description},
{type:'$div',cssClass:'sampleArea',children:[
sampleCode
]},
{type:'$button',key:'show-source',value:'sample-'+i,caption:'View Source',mini:true,dataicon:'arrow-u',inline:true},
{type:'$popup',key:'sample-'+i,children:docs}
]};
content.children[1].children.push(section);
}
break;
}
return content;
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_onGetContent = function(which,key,criteria) {
switch (which)
{
case 'layout':
return this.getLayout(key,criteria);
case 'data':
return this.getData(key,criteria);
}
return null;
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_onselect = function(key,value,docViewId) {
var view = zen(docViewId);
var realKey = key.split(':')[0];
switch(realKey) {
case 'show-source':
view.getPluginByName('jQM-1.3.2-Helper').showPopup(value);
break;
case 'show-widget':
view.pushDocument(value,{},value,{});
break;
case 'back':
view.popDocument();
break;
}
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_resolveExpressions = function(sampleCode,pData) {
if (pData != null && pData != {}) {
for (var attribute in sampleCode) {
if (typeof sampleCode[attribute] == 'string' && sampleCode[attribute].charAt(0) == "=" && sampleCode[attribute].charAt(1) == "[" && sampleCode[attribute].charAt(sampleCode[attribute].length-1) == "]") {
var path = sampleCode[attribute].split("[")[1].split("]")[0];
sampleCode[attribute] = pData[path];
} else if (attribute == 'children' && typeof sampleCode[attribute] === 'object') {
for (var i = 0, length = sampleCode[attribute].length; i < length; i++) {
sampleCode[attribute][i] = this.resolveExpressions(sampleCode[attribute][i],pData);
}
}
}
}
return sampleCode;
}

self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_WidgetReference_jQM132BaseTemplate__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Component_contentTemplate');
	_ZEN_Mojo_WidgetReference_jQM132BaseTemplate.prototype = zenCreate('_ZEN_Mojo_Component_contentTemplate',-1);
	var p = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Component_contentTemplate) ? zenMaster._ZEN_Mojo_Component_contentTemplate.prototype:_ZEN_Mojo_Component_contentTemplate.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.WidgetReference.jQM132BaseTemplate';
	p._type = 'jQM132BaseTemplate';
	p.serialize = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_serialize;
	p.getSettings = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_ReallyRefreshContents;
	p.addBoldTag = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_addBoldTag;
	p.formatDocCSS = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatDocCSS;
	p.formatDocCode = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatDocCode;
	p.formatDocLineNumbers = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatDocLineNumbers;
	p.formatSampleCode = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_formatSampleCode;
	p.getLayout = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_getLayout;
	p.onGetContent = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_onGetContent;
	p.onselect = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_onselect;
	p.resolveExpressions = _ZEN_Mojo_WidgetReference_jQM132BaseTemplate_resolveExpressions;
}
/* EOF */