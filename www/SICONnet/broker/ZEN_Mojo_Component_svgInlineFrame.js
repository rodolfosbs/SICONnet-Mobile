/*** Zen Module: ZEN_Mojo_Component_svgInlineFrame ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/svgInlineFrame'] = '_ZEN_Mojo_Component_svgInlineFrame';
self._ZEN_Mojo_Component_svgInlineFrame = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Component_svgInlineFrame__init(this,index,id);}
}

self._ZEN_Mojo_Component_svgInlineFrame__init = function(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgFrame__init) ?zenMaster._ZEN_SVGComponent_svgFrame__init(o,index,id):_ZEN_SVGComponent_svgFrame__init(o,index,id);
	o.children = new Array();
	o.disabled = false;
	o.layout = '';
}
function _ZEN_Mojo_Component_svgInlineFrame_serialize(set,s)
{
	var o = this;s[0]='2554189503';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.align;s[7]=o.autoHeight;s[8]=o.autoWidth;s[9]=o.aux;s[10]=o.backgroundStyle;s[11]=set.serializeList(o,o.children,true,'children');s[12]=o.containerStyle;s[13]=(o.disabled?1:0);s[14]=(o.dragCanvas?1:0);s[15]=(o.dragEnabled?1:0);s[16]=(o.dropEnabled?1:0);s[17]=(o.dynamic?1:0);s[18]=o.editMode;s[19]=o.enclosingClass;s[20]=o.enclosingStyle;s[21]=o.error;s[22]=o.frameStyle;s[23]=o.gridX;s[24]=o.gridY;s[25]=o.height;s[26]=(o.hidden?1:0);s[27]=o.hint;s[28]=o.hintClass;s[29]=o.hintStyle;s[30]=(o.inlineSVG?1:0);s[31]=o.label;s[32]=o.labelClass;s[33]=o.labelDisabledClass;s[34]=o.labelStyle;s[35]=o.layout;s[36]=o.offsetX;s[37]=o.offsetY;s[38]=o.onafterdrag;s[39]=o.onbeforedrag;s[40]=o.ondrag;s[41]=o.ondragCanvas;s[42]=o.ondrop;s[43]=o.onhide;s[44]=o.onmouseWheel;s[45]=o.onmoveItem;s[46]=o.onrefresh;s[47]=o.onresizeItem;s[48]=o.onselectItem;s[49]=o.onshow;s[50]=o.onupdate;s[51]=o.onzoom;s[52]=o.overlayMode;s[53]=set.serializeArray(o,o.parameters,true,'parameters');s[54]=o.renderFlag;s[55]=set.addObject(o.selectedItem,'selectedItem');s[56]=set.serializeList(o,o.selectedItems,true,'selectedItems');s[57]=(o.showLabel?1:0);s[58]=o.slice;s[59]=(o.snapToGrid?1:0);s[60]=(o.svgAutoSize?1:0);s[61]=o.svgHeight;s[62]=o.svgPage;s[63]=o.svgWidth;s[64]=o.title;s[65]=o.tuple;s[66]=o.valign;s[67]=(o.visible?1:0);s[68]=o.width;s[69]=o.zoom;s[70]=o.zoomLevels;s[71]=(o.zoomWithWheel?1:0);
}
function _ZEN_Mojo_Component_svgInlineFrame_getSettings(s)
{
	s['name'] = 'string';
	s['disabled'] = 'boolean';
	s['layout'] = 'enum:vertical,horizontal,flow,none';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Component_svgInlineFrame_addChild = function(component) {
zenASSERT(component && zenIsComponent(component),'Invalid component',arguments);
if (!component.isOfType('svgComponent')) {
alert('Only SVG components can be added to svg groups');
return;
}
this.children[this.children.length] = component;
component.parent = this;
if (this.document && this.svgGroup) {
component.renderSVG(this.document,this.svgGroup);
}
}

self._ZEN_Mojo_Component_svgInlineFrame_getFrameHTML = function(width,height) {
var html = [];
html.push('<svg id="'+this.makeId('zenRoot')+'" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="'+width+'" height="'+height+'">');
html.push('<g id="zenScalingGroup">');
html.push('<g id="zenUnderlay"/>');
html.push('<g id="'+this.makeId('zenCanvas')+'">');
html.push('</g>');
html.push('<g id="zenOverlay"/>');
html.push('</g>');
html.push('<g id="zenFixedOverlay"/>');
html.push('</svg>');
return html.join('');
}

self._ZEN_Mojo_Component_svgInlineFrame_layoutChildren = function() {
var height = 0;
var width = 0;
switch(this.layout) {
case 'vertical':
var x=0,y=0;
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if ('relative' == child.position && !child.hidden) {
child.setPosition(x,y);
if (child.layoutChildren) {
child.layoutChildren();
}
y += parseInt(child.height,10);
width = (parseInt(child.width,10) > width) ? parseInt(child.width,10) : width;
}
}
height = y;
break;
case 'horizontal':
var x=0,y=0;
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if ('relative' == child.position && !child.hidden) {
child.setPosition(x,y);
if (child.layoutChildren) {
child.layoutChildren();
}
x += parseInt(child.width,10);
height = (parseInt(child.height,10) > height) ? parseInt(child.height,10) : height;
}
}
width = x;
break;
case 'flow':
var flowWidth = this.width;
var x=0,y=0;
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if ('relative' == child.position && !child.hidden) {
child.setPosition(x,y);
if (child.layoutChildren) {
child.layoutChildren();
}
var cw = parseInt(child.width,10);
if (x > 0 && (x+cw) > flowWidth) {
x = 0;
y = height;
child.setPosition(x,y);
if (child.layoutChildren) {
child.layoutChildren();
}
cw = parseInt(child.width,10);
}
x += cw;
height = ((y + parseInt(child.height,10)) > height) ? (y+parseInt(child.height,10)) : height;
width = (x > width) ? x : width;
}
}
break;
case 'none':
default:
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if ('relative' == child.position && !child.hidden) {
child.setPosition(child.x,child.y);
if (child.layoutChildren) {
child.layoutChildren();
}
width = ((parseInt(child.x,10)+parseInt(child.width,10)) > width) ? parseInt(child.width,10)+parseInt(child.x,10) : width;
height = ((parseInt(child.y,10)+parseInt(child.height,10)) > height) ? parseInt(child.height,10)+parseInt(child.y,10) : height;
}
}
break;
}
if (this.setBoundingBox) {
this.setBoundingBox(width, height);
}
}

self._ZEN_Mojo_Component_svgInlineFrame_removeChild = function(component) {
zenPage.deleteComponent(component);
}

self._ZEN_Mojo_Component_svgInlineFrame_renderInlineSVG = function(document,parent) {
this.document = document;
if (null == parent) {
this.svgRoot = this.findElement('zenRoot');
this.svgGroup = this.findElement('zenCanvas');
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('id',this.makeId('zenBackground'));
rect.setAttribute('x',0);
rect.setAttribute('y',0);
rect.setAttribute('width','100%');
rect.setAttribute('height','100%');
if (null != this.backgroundStyle) {
rect.setAttribute('style',this.backgroundStyle);
}
this.svgGroup.insertBefore(rect, this.svgGroup.firstChild);
this.svgBackground = rect;
}
else {
this.createEnclosingGroup(parent);
}
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
child.renderSVG(this.document,this.svgGroup);
}
this.layoutChildren();
}

self._ZEN_Mojo_Component_svgInlineFrame_renderSVG = function(document,parent) {
this.document = document;
if (null == parent) {
this.svgRoot = this.document.getElementById('zenRoot');
this.svgGroup = this.document.getElementById('zenCanvas');
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('id','zenBackground');
rect.setAttribute('x',0);
rect.setAttribute('y',0);
rect.setAttribute('width','100%');
rect.setAttribute('height','100%');
if (null != this.backgroundStyle) {
rect.setAttribute('style',this.backgroundStyle);
}
this.svgGroup.insertBefore(rect, this.svgGroup.firstChild);
this.svgBackground = rect;
}
else {
this.createEnclosingGroup(parent);
}
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
child.renderSVG(this.document,this.svgGroup);
}
this.layoutChildren();
}

self._ZEN_Mojo_Component_svgInlineFrame_setFrameSize = function(w,h) {
this.width = parseInt(w,10);
this.height = parseInt(h,10);
var root = this.findElement('zenRoot');
root.setAttribute('width',this.width);
root.setAttribute('height',this.height);
}

self._ZEN_Mojo_Component_svgInlineFrame_setOverlayMode = function(mode) {
this.overlayMode = mode;
for (var n = 0; n < this.children.length; n++) {
this.children[n].setOverlayMode(mode);
}
}

self._ZEN_Mojo_Component_svgInlineFrame_setPropertyAll = function(property,value,value2) {
if ('disabled' == property) return;
this.setProperty(property, value, value2);
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if (child.setPropertyAll) {
child.setPropertyAll(property,value,value2);
}
else {
child.setProperty(property,value,value2);
}
}
}

self._ZEN_Mojo_Component_svgInlineFrame_svgLoadHandler = function(win) {
this.document = this.getSVGDocument();
this.svgWindow = win;
this.renderInlineSVG(this.document,null);
this.svgBackground.addEventListener('mousedown',new Function('evt','return zenPage.getComponent('+this.index+').mousedownHandler(evt);'),false);
this.svgRoot.addEventListener('DOMMouseScroll', new Function('evt','return zenPage.getComponent('+this.index+').mousewheelHandler(evt);'), false);
this._mmHandler = new Function('evt','return zenPage.getComponent('+this.index+').mousemoveHandler(evt);');
this._muHandler = new Function('evt','return zenPage.getComponent('+this.index+').mouseupHandler(evt);');
this._mouseTarget = null;
this._currOperation = null;
this._isMoved = false;
this._deltaX = 0;
this._deltaY = 0;
this._startX = 0;
this._startY = 0;
this._runtimeEditMode = 'none';
var mode = this.editMode;
this.editMode = '';
this.setEditMode(mode);
if (this.zoom != 100) {
this.setProperty('zoom',this.zoom);
}
}

self._ZEN_Mojo_Component_svgInlineFrame_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
self._ZEN_Mojo_Component_svgInlineFrame__Loader = function() {
	zenLoadClass('_ZEN_SVGComponent_svgFrame');
	_ZEN_Mojo_Component_svgInlineFrame.prototype = zenCreate('_ZEN_SVGComponent_svgFrame',-1);
	var p = _ZEN_Mojo_Component_svgInlineFrame.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Component_svgInlineFrame;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgFrame) ? zenMaster._ZEN_SVGComponent_svgFrame.prototype:_ZEN_SVGComponent_svgFrame.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Component.svgInlineFrame';
	p._type = 'svgInlineFrame';
	p.serialize = _ZEN_Mojo_Component_svgInlineFrame_serialize;
	p.getSettings = _ZEN_Mojo_Component_svgInlineFrame_getSettings;
	p.ReallyRefreshContents = _ZEN_Mojo_Component_svgInlineFrame_ReallyRefreshContents;
	p.addChild = _ZEN_Mojo_Component_svgInlineFrame_addChild;
	p.getFrameHTML = _ZEN_Mojo_Component_svgInlineFrame_getFrameHTML;
	p.layoutChildren = _ZEN_Mojo_Component_svgInlineFrame_layoutChildren;
	p.removeChild = _ZEN_Mojo_Component_svgInlineFrame_removeChild;
	p.renderInlineSVG = _ZEN_Mojo_Component_svgInlineFrame_renderInlineSVG;
	p.renderSVG = _ZEN_Mojo_Component_svgInlineFrame_renderSVG;
	p.setFrameSize = _ZEN_Mojo_Component_svgInlineFrame_setFrameSize;
	p.setOverlayMode = _ZEN_Mojo_Component_svgInlineFrame_setOverlayMode;
	p.setPropertyAll = _ZEN_Mojo_Component_svgInlineFrame_setPropertyAll;
	p.svgLoadHandler = _ZEN_Mojo_Component_svgInlineFrame_svgLoadHandler;
}
/* EOF */