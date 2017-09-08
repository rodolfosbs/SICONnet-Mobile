/*** Zen Module: ZEN_Mojo_Plugin_HTML5Helper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/HTML5Helper'] = '_ZEN_Mojo_Plugin_HTML5Helper';
self._ZEN_Mojo_Plugin_HTML5Helper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_HTML5Helper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_HTML5Helper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'HTML5Helper';
	o.version = '1.1.5';
}
function _ZEN_Mojo_Plugin_HTML5Helper_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_HTML5Helper_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_HTML5Helper_createLayoutObjects = function(type,instance) {
var defaultSetValue = function(value,notify) {
this.value = value;
this.$setAttribute('value',value);
};
var defaultGetValue = function() {
return (this.$getAttribute('value'));
};
instance.$hasBlock = false;
instance.showTitle = false;
switch(type) {
case '__looperDefault':
instance.$isLoop = true;
instance.children = [];
instance.$children = instance.children;
break;
default:
break;
}
instance.$_renderAttributeString = this.genericRenderAttributeStr;
instance.$setAttribute = this.defaultSetAttribute;
instance.$getAttribute = this.defaultGetAttribute;
instance.$show = this.defaultShow;
instance.$hide = this.defaultHide;
instance.$toggleVisibility = this.defaultToggleVisibility;
instance.$refresh = this.defaultRefresh;
switch(type) {
case '$a':
instance.$getAttributes = this.getAttributesA;
instance.$render = this.renderA;
break;
case '$abbr':
instance.$getAttributes = this.getAttributesAbbr;
instance.$render = this.renderAbbr;
break;
case '$address':
instance.$getAttributes = this.getAttributesAddress;
instance.$render = this.renderAddress;
break;
case '$area':
instance.$getAttributes = this.getAttributesArea;
instance.$render = this.renderArea;
break;
case '$article':
instance.$getAttributes = this.getAttributesArticle;
instance.$render = this.renderArticle;
break;
case '$aside':
instance.$getAttributes = this.getAttributesAside;
instance.$render = this.renderAside;
break;
case '$audio':
instance.$getAttributes = this.getAttributesAudio;
instance.$render = this.renderAudio;
break;
case '$b':
instance.$getAttributes = this.getAttributesB;
instance.$render = this.renderB;
break;
case '$bdi':
instance.$getAttributes = this.getAttributesBdi;
instance.$render = this.renderBdi;
break;
case '$bdo':
instance.$getAttributes = this.getAttributesBdo;
instance.$render = this.renderBdo;
break;
case '$blockquote':
instance.$getAttributes = this.getAttributesBlockquote;
instance.$render = this.renderBlockquote;
break;
case '$br':
instance.$getAttributes = this.getAttributesBr;
instance.$render = this.renderBr;
break;
case '$button':
instance.$getAttributes = this.getAttributesButton;
instance.$render = this.renderButton;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
break;
case '$canvas':
instance.$getAttributes = this.getAttributesCanvas;
instance.$render = this.renderCanvas;
break;
case '$caption':
instance.$getAttributes = this.getAttributesCaption;
instance.$render = this.renderCaption;
break;
case '$cite':
instance.$getAttributes = this.getAttributesCite;
instance.$render = this.renderCite;
break;
case '$code':
instance.$getAttributes = this.getAttributesCode;
instance.$render = this.renderCode;
break;
case '$col':
instance.$getAttributes = this.getAttributesCol;
instance.$render = this.renderCol;
break;
case '$colgroup':
instance.$getAttributes = this.getAttributesColgroup;
instance.$render = this.renderColgroup;
break;
case '$datalist':
instance.$getAttributes = this.getAttributesDatalist;
instance.$render = this.renderDatalist;
break;
case '$dd':
instance.$getAttributes = this.getAttributesDd;
instance.$render = this.renderDd;
break;
case '$del':
instance.$getAttributes = this.getAttributesDel;
instance.$render = this.renderDel;
break;
case '$details':
instance.$getAttributes = this.getAttributesDetails;
instance.$render = this.renderDetails;
break;
case '$dfn':
instance.$getAttributes = this.getAttributesDfn;
instance.$render = this.renderDfn;
break;
case '$dialog':
instance.$getAttributes = this.getAttributesDialog;
instance.$render = this.renderDialog;
break;
case '$div':
instance.$getAttributes = this.getAttributesDiv;
instance.$render = this.renderDiv;
break;
case '$dl':
instance.$getAttributes = this.getAttributesDl;
instance.$render = this.renderDl;
break;
case '$dt':
instance.$getAttributes = this.getAttributesDt;
instance.$render = this.renderDt;
break;
case '$em':
instance.$getAttributes = this.getAttributesEm;
instance.$render = this.renderEm;
break;
case '$embed':
instance.$getAttributes = this.getAttributesEmbed;
instance.$render = this.renderEmbed;
break;
case '$fieldset':
instance.$getAttributes = this.getAttributesFieldset;
instance.$render = this.renderFieldset;
break;
case '$figcaption':
instance.$getAttributes = this.getAttributesFigcaption;
instance.$render = this.renderFigcaption;
break;
case '$figure':
instance.$getAttributes = this.getAttributesFigure;
instance.$render = this.renderFigure;
break;
case '$footer':
instance.$getAttributes = this.getAttributesFooter;
instance.$render = this.renderFooter;
break;
case '$form':
instance.$getAttributes = this.getAttributesForm;
instance.$render = this.renderForm;
break;
case '$h1':
instance.$getAttributes = this.getAttributesH1;
instance.$render = this.renderH1;
break;
case '$h2':
instance.$getAttributes = this.getAttributesH2;
instance.$render = this.renderH2;
break;
case '$h3':
instance.$getAttributes = this.getAttributesH3;
instance.$render = this.renderH3;
break;
case '$h4':
instance.$getAttributes = this.getAttributesH4;
instance.$render = this.renderH4;
break;
case '$h5':
instance.$getAttributes = this.getAttributesH5;
instance.$render = this.renderH5;
break;
case '$h6':
instance.$getAttributes = this.getAttributesH6;
instance.$render = this.renderH6;
break;
case '$header':
instance.$getAttributes = this.getAttributesHeader;
instance.$render = this.renderHeader;
break;
case '$hr':
instance.$getAttributes = this.getAttributesHr;
instance.$render = this.renderHr;
break;
case '$i':
instance.$getAttributes = this.getAttributesI;
instance.$render = this.renderI;
break;
case '$iframe':
instance.$getAttributes = this.getAttributesIframe;
instance.$render = this.renderIframe;
break;
case '$img':
instance.$getAttributes = this.getAttributesImg;
instance.$render = this.renderImg;
break;
case '$input':
instance.$getAttributes = this.getAttributesInput;
instance.$render = this.renderInput;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
break;
case '$ins':
instance.$getAttributes = this.getAttributesIns;
instance.$render = this.renderIns;
break;
case '$kbd':
instance.$getAttributes = this.getAttributesKbd;
instance.$render = this.renderKbd;
break;
case '$keygen':
instance.$getAttributes = this.getAttributesKeygen;
instance.$render = this.renderKeygen;
break;
case '$label':
instance.$getAttributes = this.getAttributesLabel;
instance.$render = this.renderLabel;
break;
case '$legend':
instance.$getAttributes = this.getAttributesLegend;
instance.$render = this.renderLegend;
break;
case '$li':
instance.$getAttributes = this.getAttributesLi;
instance.$render = this.renderLi;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
break;
case '$main':
instance.$getAttributes = this.getAttributesMain;
instance.$render = this.renderMain;
break;
case '$map':
instance.$getAttributes = this.getAttributesMap;
instance.$render = this.renderMap;
break;
case '$mark':
instance.$getAttributes = this.getAttributesMark;
instance.$render = this.renderMark;
break;
case '$menu':
instance.$getAttributes = this.getAttributesMenu;
instance.$render = this.renderMenu;
break;
case '$meter':
instance.$getAttributes = this.getAttributesMeter;
instance.$render = this.renderMeter;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
break;
case '$nav':
instance.$getAttributes = this.getAttributesNav;
instance.$render = this.renderNav;
break;
case '$object':
instance.$getAttributes = this.getAttributesObject;
instance.$render = this.renderObject;
break;
case '$ol':
instance.$getAttributes = this.getAttributesOl;
instance.$render = this.renderOl;
break;
case '$optgroup':
instance.$getAttributes = this.getAttributesOptgroup;
instance.$render = this.renderOptgroup;
break;
case '$option':
instance.$getAttributes = this.getAttributesOption;
instance.$render = this.renderOption;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
break;
case '$output':
instance.$getAttributes = this.getAttributesOutput;
instance.$render = this.renderOutput;
break;
case '$p':
instance.$getAttributes = this.getAttributesP;
instance.$render = this.renderP;
break;
case '$param':
instance.$getAttributes = this.getAttributesParam;
instance.$render = this.renderParam;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
break;
case '$pre':
instance.$getAttributes = this.getAttributesPre;
instance.$render = this.renderPre;
break;
case '$progress':
instance.$getAttributes = this.getAttributesProgress;
instance.$render = this.renderProgress;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
break;
case '$q':
instance.$getAttributes = this.getAttributesQ;
instance.$render = this.renderQ;
break;
case '$rp':
instance.$getAttributes = this.getAttributesRp;
instance.$render = this.renderRp;
break;
case '$rt':
instance.$getAttributes = this.getAttributesRt;
instance.$render = this.renderRt;
break;
case '$ruby':
instance.$getAttributes = this.getAttributesRuby;
instance.$render = this.renderRuby;
break;
case '$s':
instance.$getAttributes = this.getAttributesS;
instance.$render = this.renderS;
break;
case '$samp':
instance.$getAttributes = this.getAttributesSamp;
instance.$render = this.renderSamp;
break;
case '$section':
instance.$getAttributes = this.getAttributesSection;
instance.$render = this.renderSection;
break;
case '$select':
instance.$getAttributes = this.getAttributesSelect;
instance.$render = this.renderSelect;
instance.$setValue = defaultSetValue;
instance.$getValue = defaultGetValue;
instance.$setAttribute = this.setAttributeSelect;
break;
case '$small':
instance.$getAttributes = this.getAttributesSmall;
instance.$render = this.renderSmall;
break;
case '$source':
instance.$getAttributes = this.getAttributesSource;
instance.$render = this.renderSource;
break;
case '$span':
instance.$getAttributes = this.getAttributesSpan;
instance.$render = this.renderSpan;
break;
case '$strong':
instance.$getAttributes = this.getAttributesStrong;
instance.$render = this.renderStrong;
break;
case '$sub':
instance.$getAttributes = this.getAttributesSub;
instance.$render = this.renderSub;
break;
case '$summary':
instance.$getAttributes = this.getAttributesSummary;
instance.$render = this.renderSummary;
break;
case '$sup':
instance.$getAttributes = this.getAttributesSup;
instance.$render = this.renderSup;
break;
case '$table':
instance.$getAttributes = this.getAttributesTable;
instance.$render = this.renderTable;
break;
case '$tbody':
instance.$getAttributes = this.getAttributesTbody;
instance.$render = this.renderTbody;
break;
case '$td':
instance.$getAttributes = this.getAttributesTd;
instance.$render = this.renderTd;
break;
case '$textarea':
instance.$getAttributes = this.getAttributesTextarea;
instance.$render = this.renderTextarea;
break;
case '$tfoot':
instance.$getAttributes = this.getAttributesTfoot;
instance.$render = this.renderTfoot;
break;
case '$th':
instance.$getAttributes = this.getAttributesTh;
instance.$render = this.renderTh;
break;
case '$thead':
instance.$getAttributes = this.getAttributesThead;
instance.$render = this.renderThead;
break;
case '$time':
instance.$getAttributes = this.getAttributesTime;
instance.$render = this.renderTime;
break;
case '$tr':
instance.$getAttributes = this.getAttributesTr;
instance.$render = this.renderTr;
break;
case '$track':
instance.$getAttributes = this.getAttributesTrack;
instance.$render = this.renderTrack;
break;
case '$u':
instance.$getAttributes = this.getAttributesU;
instance.$render = this.renderU;
break;
case '$ul':
instance.$getAttributes = this.getAttributesUl;
instance.$render = this.renderUl;
break;
case '$var':
instance.$getAttributes = this.getAttributesVar;
instance.$render = this.renderVar;
break;
case '$video':
instance.$getAttributes = this.getAttributesVideo;
instance.$render = this.renderVideo;
break;
case '$wbr':
instance.$getAttributes = this.getAttributesWbr;
instance.$render = this.renderWbr;
break;
}
return instance;
}

self._ZEN_Mojo_Plugin_HTML5Helper_defaultGetAttribute = function(attr) {
var div = this.$findElement();
if (!div) return(null);
var rValue = null;
switch(attr) {
case 'accesskey':
rValue = div.accessKey;
break;
case 'cssClass':
rValue = div.className;
break;
case 'contenteditable':
rValue = div.contentEditable;
break;
case 'tabindex':
rValue = div.tabIndex;
break;
case 'colspan':
rValue = div.colSpan;
break;
case 'crossorigin':
rValue = div.crossOrigin;
break;
case 'datetime':
rValue = div.dateTime;
break;
case 'defaultTrack':
rValue = div.htmlDefault;
break;
case 'forInput':
rValue = div.htmlFor;
break;
case 'formaction':
rValue = div.formAction;
break;
case 'formenctype':
rValue = div.formEnctype;
break;
case 'formmethod':
rValue = div.formMethod;
break;
case 'formnovalidate':
rValue = div.formNoValidate;
break;
case 'formtarget':
rValue = div.formTarget;
break;
case 'ismap':
rValue = div.isMap;
break;
case 'maxlength':
rValue = div.maxLength;
break;
case 'novalidate':
rValue = div.noValidate;
break;
case 'readonly':
rValue = div.readOnly;
break;
case 'rowspan':
rValue = div.rowSpan;
break;
case 'mimeType':
rValue = div.type;
break;
case 'buttonType':
rValue = div.type;
break;
case 'inputType':
rValue = div.type;
break;
case 'menuType':
rValue = div.type;
break;
case 'numberingScheme':
rValue = div.type;
break;
case 'usemap':
rValue = div.useMap;
break;
default:
rValue = div[attr];
break;
};
return rValue;
}

self._ZEN_Mojo_Plugin_HTML5Helper_defaultHide = function() {
var div = this.$findElement();
if (!div) return;
if (div.hidden || div.style.display=='none') return;
this._styleDisplay = div.style.display;
div.hidden = true;
div.style.display = 'none';
if (this.style) {
var sa = this.style.split(';');
for (var idx = sa.length-1;idx>=0;idx--) {
if (sa[idx]) {
var attr = sa[idx].split(' ').join('');
if (attr && attr.indexOf('display')==0) {
sa[idx]='';
}
}
}
this.style = sa.join(';');
}
}

self._ZEN_Mojo_Plugin_HTML5Helper_defaultRefresh = function() {
var attrs = this.$getAttributes();
var div = this.$findElement();
var fal = attrs.length;
for (var j=0;j<fal;j++) {
var attr = attrs[j];
var attrName = attr.name;
if (attr.instanceName) attrName=attr.instanceName;
if (!attr.special && typeof(this[attrName])!='undefined') {
if (attr.unary) {
var newValue = zenGet(this[attrName],false);
this.$setAttribute(attr.name, newValue);
if (!newValue) div.removeAttribute(attr.name);
}
else {
if (attr.remapToKey) {
this.$setAttribute(attr.name,this.$documentView.getItemByKey(zenGet(this[attrName],'')).$makeId());
}
else {
this.$setAttribute(attr.name, zenGet(this[attrName],''));
}
}
}
}
var rawExtras = this.$extra;
if (rawExtras) {
if (typeof(rawExtras)=='string') {
var packedExtras = rawExtras.split(' ').join('');
var pairs = packedExtras.split(';');
var len = pairs.length;
var reo = {};
for (var i=0;i<len;i++) {
var va = pairs[i].split('=');
reo[va[0]] = va[1];
}
rawExtras = reo;
}
for (var p in rawExtras) this.$setAttribute(p,rawExtras[p]);
}
var cbRoot = "zenPage.getComponent("+this.$documentView.index+").eventHandler("+this.$index+",event,";
if (this.key) {
var clickCB = cbRoot+"'click');";
var changeCB = cbRoot+"'change');";
if (this.$ignoreSelect) div.setAttribute('onclick','');
else {
div.setAttribute('onclick',clickCB);
}
if (this.$_isControl) {
if (this.$ignoreChange) div.setAttribute('onchange','');
else {
div.setAttribute('onchange',changeCB);
}
}
}
var eventAttrs = [];
var dataAttrs = [];
for (var prop in this) {
if (prop.indexOf("data")==0) dataAttrs.push(prop);
else if (prop.indexOf("on")==0) eventAttrs.push(prop.substring(2));
}
var dal = dataAttrs.length;
for (var j=0;j<dal;j++) {
var da = dataAttrs[j];
div[da] = this[da];
}
var eal = eventAttrs.length;
for (var j=0;j<eal;j++) {
var ea = eventAttrs[j];
var cb = cbRoot+"'"+ea+"');";
if (this.$ignoreEvent) cb = '';
div.setAttribute('on'+ea,cb);
}
if (typeof(this.hidden)!='undefined') {
if (zenGet(this.hidden,false)) {
this.$hide();
}
else {
this.$show();
}
}
if (this.$content || this.$content=='') {
var tempContent = zenGet(this.$content);
if ( typeof(tempContent) === 'array' ||  typeof(tempContent) === 'object') {
tempContent = tempContent.toString();
}
for (var i = div.childNodes.length-1;i>=0;i--) {
var kid = div.childNodes[i];
if (kid.nodeType==3) div.removeChild(kid);
}
var k = document.createTextNode(tempContent);
div.insertBefore(k,div.childNodes[0]);
}
}

self._ZEN_Mojo_Plugin_HTML5Helper_defaultSetAttribute = function(attr,value) {
var div = this.$findElement();
if (!div) return;
switch(attr) {
case 'hidden':
if (value) this.$hide();
else this.$show();
break;
case 'accesskey':
div.accessKey = value;
break;
case 'cssClass':
div.className = value;
break;
case 'contenteditable':
div.contentEditable = value;
break;
case 'tabindex':
div.tabIndex = value;
break;
case 'colspan':
div.colSpan = value;
break;
case 'crossorigin':
div.crossOrigin = value;
break;
case 'datetime':
div.dateTime = value;
break;
case 'defaultTrack':
div.htmlDefault = value;
break;
case 'forInput':
div.htmlFor = value;
break;
case 'formaction':
div.formAction = value;
break;
case 'formenctype':
div.formEnctype = value;
break;
case 'formmethod':
div.formMethod = value;
break;
case 'formnovalidate':
div.formNoValidate = value;
break;
case 'formtarget':
div.formTarget = value;
break;
case 'ismap':
div.isMap = value;
break;
case 'maxlength':
div.maxLength = value;
break;
case 'novalidate':
div.noValidate = value;
break;
case 'readonly':
div.readOnly = value;
break;
case 'rowspan':
div.rowSpan = value;
break;
case 'mimeType':
div.type = value;
break;
case 'buttonType':
div.type = value;
break;
case 'inputType':
div.type = value;
break;
case 'menuType':
div.type = value;
break;
case 'numberingScheme':
div.type = value;
break;
case 'usemap':
div.useMap = value;
break;
default:
div.setAttribute(attr,value);
break;
};
}

self._ZEN_Mojo_Plugin_HTML5Helper_defaultShow = function() {
var div = this.$findElement();
if (!div) return;
if (!div.hidden) {
if (div.style && div.style.display!='none') return;
}
div.hidden = false;
if (this._styleDisplay) div.style.display = this._styleDisplay;
else div.style.display = '';
}

self._ZEN_Mojo_Plugin_HTML5Helper_defaultToggleVisibility = function() {
var div = this.$findElement();
if (!div) return;
if (div.hidden) {
this.$show();
} else {
this.$hide();
}
}

self._ZEN_Mojo_Plugin_HTML5Helper_genericRenderAttributeStr = function(obj,attrs,isControl) {
var aStr = [];
var fal = attrs.length;
for (var j=0;j<fal;j++) {
var attr = attrs[j];
if (!attr.special) {
var instanceName = attr.instanceName;
if (!instanceName) instanceName=attr.name;
if (attr.unary) {
aStr.push(zenGet(obj[instanceName],false) ? attr.name+' ':'');
}
else {
if (attr.remapToKey) {
aStr.push(zenGet(obj[instanceName],false) ? attr.name+'="'+obj.$documentView.getItemByKey(zenGet(obj[instanceName],'')).$makeId()+'" ' : '');
}
else {
aStr.push(zenGet(obj[instanceName],false) ? attr.name+'="'+zenGet(obj[instanceName],'')+'" ' : '');
}
}
}
}
var rawExtras = obj.$extra;
var rawExtraStr = '';
if (rawExtras) {
if (typeof(rawExtras)=='string') { // Assume we're preprocessed
rawExtraStr = ' '+rawExtras+' ';
}
else if (typeof(rawExtras)=='object') { // walk the object
var rea = [];
for (var p in rawExtras) rea.push(p+'="'+rawExtras[p]+'"');
rawExtraStr = rea.join(' ');
}
}
aStr.push(' '+rawExtraStr+' ');
var dataAttrs = [];
var eventAttrs = [];
if (obj.key) {
if (!obj.$ignoreSelect) eventAttrs.push('click');
if ((isControl)&&(!obj.$ignoreChange)) eventAttrs.push('change');
}
for (var prop in obj) {
if (prop.indexOf("data-")==0) dataAttrs.push(prop);
else if ((prop.indexOf("on")==0)&&(!obj.$ignoreEvent)) eventAttrs.push(prop.substring(2));
}
var extraData = [];
var extraDataStr = "";
var dal = dataAttrs.length;
for (var j=0;j<dal;j++) {
var da = dataAttrs[j];
extraData.push(da+'="'+obj[da]+'"');
}
if (dal>0) extraDataStr = " "+extraData.join(" ");
var cbData = [];
var cbDataStr = "";
var eal = eventAttrs.length;
for (var j=0;j<eal;j++) {
var ea = eventAttrs[j];
cbData.push('on'+ea+'="$$$event(\''+ea+'\');"');
}
if (eal>0) cbDataStr = " "+cbData.join(" ");
aStr.push(extraDataStr+cbDataStr);
if (zenGet(obj.hidden,false)) {
var style='';
var append = true;
if (obj.style && obj.style.length>0) {
var packedStyle = obj.style.split(' ').join('');
var sa = packedStyle.split(';');
for (var i=0;i<sa.length;i++) {
if (sa[i].indexOf('display')==0) {
var va = sa[i].split(':');
obj._styleDisplay = va[1];
sa[i]='display:none';
append = false;
}
}
if (append) sa.push('display:none');
style = 'style="'+sa.join(';')+'" ';
}
else {
style = 'style="display:none;" ';
}
append = true;
for (var idx = aStr.length-1;idx>=0;idx--) {
if (aStr[idx] && aStr[idx].indexOf('style')==0) {
aStr[idx] = style;
append = false;
idx = -1;
}
}
if (append) aStr.push(style);
}
var tempContent = zenGet(obj.$content);
if ( typeof(tempContent) === 'array' ||  typeof(tempContent) === 'object') {
tempContent = tempContent.toString();
}
var content = zenEscapeXML(tempContent);
return({attrs:(aStr.join(' ')),content:(content),hasEvents:(eal>0)});
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesA = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'download' },
{name:'href' },
{name:'hreflang' },
{name:'media' },
{name:'rel' },
{name:'target' },
{name:'type', instanceName:'mimeType' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesAbbr = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesAddress = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesArea = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'alt' },
{name:'coords' },
{name:'download' },
{name:'href' },
{name:'hreflang' },
{name:'media' },
{name:'rel' },
{name:'shape' },
{name:'target' },
{name:'type', instanceName:'mimeType' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesArticle = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesAside = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesAudio = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'autoplay', unary:1 },
{name:'controls', unary:1 },
{name:'loop', unary:1 },
{name:'muted', unary:1 },
{name:'preload' },
{name:'src' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesB = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesBdi = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesBdo = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'dir' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesBlockquote = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'cite' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesBr = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesButton = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'autofocus', unary:1 },
{name:'disabled', unary:1 },
{name:'form' },
{name:'formaction' },
{name:'formenctype' },
{name:'formmethod' },
{name:'formnovalidate', unary:1 },
{name:'formtarget' },
{name:'name' },
{name:'type', instanceName:'buttonType' },
{name:'value' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesCanvas = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'height' },
{name:'width' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesCaption = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesCite = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesCode = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesCol = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'span' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesColgroup = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDatalist = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDd = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDel = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'cite' },
{name:'datetime' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDetails = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'open', unary:1 }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDfn = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDialog = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'open', unary:1 }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDiv = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDl = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesDt = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesEm = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesEmbed = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'height' },
{name:'src' },
{name:'type', instanceName:'mimeType' },
{name:'width' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesFieldset = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'disabled', unary:1 },
{name:'form' },
{name:'name' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesFigcaption = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesFigure = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesFooter = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesForm = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'accept-charset', instanceName:'acceptCharset' },
{name:'action' },
{name:'autocomplete' },
{name:'enctype' },
{name:'method' },
{name:'name' },
{name:'novalidate', unary:1 },
{name:'target' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesH1 = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesH2 = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesH3 = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesH4 = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesH5 = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesH6 = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesHeader = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesHr = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesI = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesIframe = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'height' },
{name:'name' },
{name:'sandbox' },
{name:'seamless', unary:1 },
{name:'src' },
{name:'srcdoc' },
{name:'width' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesImg = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'alt' },
{name:'crossorigin' },
{name:'height' },
{name:'ismap', unary:1 },
{name:'src' },
{name:'usemap' },
{name:'width' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesInput = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'accept' },
{name:'alt' },
{name:'autocomplete' },
{name:'autofocus', unary:1 },
{name:'checked', unary:1 },
{name:'disabled', unary:1 },
{name:'form' },
{name:'formaction' },
{name:'formenctype' },
{name:'formmethod' },
{name:'formnovalidate', unary:1 },
{name:'formtarget' },
{name:'height' },
{name:'list', remapToKey:1 },
{name:'max' },
{name:'maxlength' },
{name:'min' },
{name:'multiple', unary:1 },
{name:'name' },
{name:'pattern' },
{name:'placeholder' },
{name:'readonly', unary:1 },
{name:'required', unary:1 },
{name:'size' },
{name:'src' },
{name:'step' },
{name:'type', instanceName:'inputType' },
{name:'value' },
{name:'width' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesIns = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'cite' },
{name:'datetime' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesKbd = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesKeygen = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'autofocus', unary:1 },
{name:'challenge', unary:1 },
{name:'disabled', unary:1 },
{name:'form' },
{name:'keyType' },
{name:'name' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesLabel = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'for', instanceName:'forInput', remapToKey:1 },
{name:'form' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesLegend = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesLi = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'value' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesMain = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesMap = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'name' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesMark = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesMenu = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'label' },
{name:'type', instanceName:'menuType' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesMeter = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'form' },
{name:'high' },
{name:'low' },
{name:'max' },
{name:'min' },
{name:'optimum' },
{name:'value' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesNav = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesObject = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'data' },
{name:'form' },
{name:'height' },
{name:'name' },
{name:'type', instanceName:'mimeType' },
{name:'usemap' },
{name:'width' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesOl = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'reversed', unary:1 },
{name:'start' },
{name:'type', instanceName:'numberingScheme' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesOptgroup = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'disabled', unary:1 },
{name:'label' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesOption = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'disabled', unary:1 },
{name:'label' },
{name:'selected', unary:1 },
{name:'value' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesOutput = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'for', instanceName:'forInput', remapToKey:1 },
{name:'form' },
{name:'name' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesP = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesParam = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'name' },
{name:'value' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesPre = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesProgress = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'max' },
{name:'value' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesQ = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'cite' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesRp = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesRt = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesRuby = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesS = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSamp = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSection = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSelect = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'autofocus', unary:1 },
{name:'disabled', unary:1 },
{name:'form' },
{name:'multiple', unary:1 },
{name:'name' },
{name:'required', unary:1 },
{name:'size' },
{name:'value' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSmall = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSource = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'media' },
{name:'src' },
{name:'type', instanceName:'mimeType' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSpan = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesStrong = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSub = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSummary = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesSup = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTable = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'sortable', unary:1 }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTbody = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTd = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'colspan' },
{name:'headers' },
{name:'rowspan' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTextarea = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'autofocus', unary:1 },
{name:'cols' },
{name:'disabled', unary:1 },
{name:'form' },
{name:'maxlength' },
{name:'name' },
{name:'placeholder' },
{name:'readonly', unary:1 },
{name:'required', unary:1 },
{name:'rows' },
{name:'wrap' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTfoot = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTh = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'colspan' },
{name:'headers' },
{name:'rowspan' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesThead = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTime = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'datetime' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTr = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesTrack = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'default', instanceName:'defaultTrack', unary:1 },
{name:'kind' },
{name:'label' },
{name:'src' },
{name:'srclang' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesU = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesUl = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesVar = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesVideo = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' },
{name:'autoplay', unary:1 },
{name:'controls', unary:1 },
{name:'height' },
{name:'loop', unary:1 },
{name:'muted', unary:1 },
{name:'poster' },
{name:'preload' },
{name:'src' },
{name:'width' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getAttributesWbr = function() {
var attrs = [
{name:'accesskey' },
{name:'class', instanceName:'cssClass' },
{name:'contenteditable' },
{name:'dir' },
{name:'draggable' },
{name:'hidden', unary:1 },
{name:'id', special:1 },
{name:'lang' },
{name:'spellcheck' },
{name:'style' },
{name:'tabindex' },
{name:'title' },
{name:'translate' }
];
return(attrs);
}

self._ZEN_Mojo_Plugin_HTML5Helper_getFeatures = function() {
var features = [
{identifier:'$a'},
{identifier:'$abbr'},
{identifier:'$address'},
{identifier:'$area'},
{identifier:'$article'},
{identifier:'$aside'},
{identifier:'$audio'},
{identifier:'$b'},
{identifier:'$bdi'},
{identifier:'$bdo'},
{identifier:'$blockquote'},
{identifier:'$br'},
{identifier:'$button'},
{identifier:'$canvas'},
{identifier:'$caption'},
{identifier:'$cite'},
{identifier:'$code'},
{identifier:'$col'},
{identifier:'$colgroup'},
{identifier:'$datalist'},
{identifier:'$dd'},
{identifier:'$del'},
{identifier:'$details'},
{identifier:'$dfn'},
{identifier:'$dialog'},
{identifier:'$div'},
{identifier:'$dl'},
{identifier:'$dt'},
{identifier:'$em'},
{identifier:'$embed'},
{identifier:'$fieldset'},
{identifier:'$figcaption'},
{identifier:'$figure'},
{identifier:'$footer'},
{identifier:'$form'},
{identifier:'$h1'},
{identifier:'$h2'},
{identifier:'$h3'},
{identifier:'$h4'},
{identifier:'$h5'},
{identifier:'$h6'},
{identifier:'$header'},
{identifier:'$hr'},
{identifier:'$i'},
{identifier:'$iframe'},
{identifier:'$img'},
{identifier:'$input'},
{identifier:'$ins'},
{identifier:'$kbd'},
{identifier:'$keygen'},
{identifier:'$label'},
{identifier:'$legend'},
{identifier:'$li'},
{identifier:'$main'},
{identifier:'$map'},
{identifier:'$mark'},
{identifier:'$menu'},
{identifier:'$meter'},
{identifier:'$nav'},
{identifier:'$object'},
{identifier:'$ol'},
{identifier:'$optgroup'},
{identifier:'$option'},
{identifier:'$output'},
{identifier:'$p'},
{identifier:'$param'},
{identifier:'$pre'},
{identifier:'$progress'},
{identifier:'$q'},
{identifier:'$rp'},
{identifier:'$rt'},
{identifier:'$ruby'},
{identifier:'$s'},
{identifier:'$samp'},
{identifier:'$section'},
{identifier:'$select'},
{identifier:'$small'},
{identifier:'$source'},
{identifier:'$span'},
{identifier:'$strong'},
{identifier:'$sub'},
{identifier:'$summary'},
{identifier:'$sup'},
{identifier:'$table'},
{identifier:'$tbody'},
{identifier:'$td'},
{identifier:'$textarea'},
{identifier:'$tfoot'},
{identifier:'$th'},
{identifier:'$thead'},
{identifier:'$time'},
{identifier:'$tr'},
{identifier:'$track'},
{identifier:'$u'},
{identifier:'$ul'},
{identifier:'$var'},
{identifier:'$video'},
{identifier:'$wbr'}
];
return features;
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderA = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<a id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</a>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderAbbr = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<abbr id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</abbr>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderAddress = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<address id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</address>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderArea = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<area id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</area>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderArticle = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<article id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</article>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderAside = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<aside id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</aside>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderAudio = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<audio id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</audio>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderB = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<b id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</b>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderBdi = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<bdi id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</bdi>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderBdo = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<bdo id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</bdo>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderBlockquote = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<blockquote id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</blockquote>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderBr = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<br id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</br>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderButton = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),1);
this.$_isControl = 1;
var html = ['<button id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</button>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderCanvas = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<canvas id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</canvas>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderCaption = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<caption id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</caption>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderCite = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<cite id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</cite>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderCode = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<code id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</code>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderCol = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<col id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</col>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderColgroup = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<colgroup id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</colgroup>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDatalist = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<datalist id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</datalist>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDd = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<dd id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</dd>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDel = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<del id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</del>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDetails = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<details id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</details>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDfn = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<dfn id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</dfn>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDialog = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<dialog id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</dialog>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDiv = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<div id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</div>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDl = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<dl id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</dl>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderDt = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<dt id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</dt>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderEm = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<em id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</em>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderEmbed = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<embed id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</embed>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderFieldset = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<fieldset id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</fieldset>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderFigcaption = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<figcaption id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</figcaption>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderFigure = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<figure id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</figure>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderFooter = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<footer id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</footer>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderForm = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<form id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</form>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderH1 = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<h1 id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</h1>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderH2 = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<h2 id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</h2>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderH3 = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<h3 id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</h3>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderH4 = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<h4 id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</h4>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderH5 = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<h5 id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</h5>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderH6 = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<h6 id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</h6>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderHeader = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<header id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</header>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderHr = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<hr id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</hr>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderI = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<i id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</i>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderIframe = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<iframe id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</iframe>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderImg = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<img id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</img>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderInput = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),1);
this.$_isControl = 1;
var html = ['<input id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</input>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderIns = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<ins id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</ins>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderKbd = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<kbd id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</kbd>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderKeygen = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<keygen id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</keygen>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderLabel = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<label id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</label>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderLegend = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<legend id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</legend>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderLi = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<li id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</li>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderMain = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<main id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</main>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderMap = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<map id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</map>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderMark = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<mark id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</mark>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderMenu = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<menu id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</menu>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderMeter = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<meter id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</meter>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderNav = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<nav id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</nav>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderObject = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<object id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</object>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderOl = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<ol id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</ol>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderOptgroup = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<optgroup id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</optgroup>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderOption = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<option id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</option>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderOutput = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<output id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</output>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderP = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<p id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</p>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderParam = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<param id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</param>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderPre = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<pre id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</pre>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderProgress = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<progress id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</progress>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderQ = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<q id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</q>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderRp = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<rp id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</rp>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderRt = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<rt id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</rt>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderRuby = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<ruby id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</ruby>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderS = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<s id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</s>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSamp = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<samp id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</samp>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSection = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<section id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</section>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSelect = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),1);
this.$_isControl = 1;
var html = ['<select id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</select>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSmall = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<small id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</small>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSource = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<source id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</source>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSpan = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<span id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</span>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderStrong = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<strong id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</strong>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSub = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<sub id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</sub>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSummary = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<summary id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</summary>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderSup = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<sup id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</sup>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTable = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<table id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</table>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTbody = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<tbody id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</tbody>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTd = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<td id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</td>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTextarea = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),1);
this.$_isControl = 1;
var html = ['<textarea id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</textarea>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTfoot = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<tfoot id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</tfoot>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTh = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<th id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</th>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderThead = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<thead id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</thead>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTime = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<time id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</time>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTr = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<tr id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</tr>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderTrack = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<track id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</track>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderU = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<u id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</u>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderUl = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<ul id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</ul>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderVar = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<var id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</var>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderVideo = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<video id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</video>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_renderWbr = function() {
this.id = this.$makeId();
var attrObj = this.$_renderAttributeString(this,this.$getAttributes(),0);
this.$_isControl = 0;
var html = ['<wbr id="'+this.id+'" ',attrObj.attrs,' >',attrObj.content];
if (!this.children) this.children = this.$children;
if (this.children) {
for (var n = 0; n < this.children.length;n++) {
var child = this.children[n];
html.push(child.$renderItem());
}
}
html.push('</wbr>');
if (attrObj.hasEvents) {
return (this.$documentView.injectEventHandler(html.join(''),this));
}
return html.join('');
}

self._ZEN_Mojo_Plugin_HTML5Helper_setAttributeSelect = function(attr,value) {
var div = this.$findElement();
if (!div) return;
switch(attr) {
case 'accesskey':
div.accessKey = value;
break;
case 'cssClass':
div.className = value;
break;
case 'contenteditable':
div.contentEditable = value;
break;
case 'tabindex':
div.tabIndex = value;
break;
case 'value':
div.value = value;
var arr = div.options;
if (arr && arr.length) {
for(var idx=0;idx<arr.length;idx++) {
var p=arr[idx];
if(p.value==value) {
p.selected=true;
}
}
}
break;
default:
div[attr] = value;
break;
};
}
self._ZEN_Mojo_Plugin_HTML5Helper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_HTML5Helper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_HTML5Helper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_HTML5Helper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.HTML5Helper';
	p._type = 'HTML5Helper';
	p.serialize = _ZEN_Mojo_Plugin_HTML5Helper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_HTML5Helper_getSettings;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_HTML5Helper_createLayoutObjects;
	p.defaultGetAttribute = _ZEN_Mojo_Plugin_HTML5Helper_defaultGetAttribute;
	p.defaultHide = _ZEN_Mojo_Plugin_HTML5Helper_defaultHide;
	p.defaultRefresh = _ZEN_Mojo_Plugin_HTML5Helper_defaultRefresh;
	p.defaultSetAttribute = _ZEN_Mojo_Plugin_HTML5Helper_defaultSetAttribute;
	p.defaultShow = _ZEN_Mojo_Plugin_HTML5Helper_defaultShow;
	p.defaultToggleVisibility = _ZEN_Mojo_Plugin_HTML5Helper_defaultToggleVisibility;
	p.genericRenderAttributeStr = _ZEN_Mojo_Plugin_HTML5Helper_genericRenderAttributeStr;
	p.getAttributesA = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesA;
	p.getAttributesAbbr = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesAbbr;
	p.getAttributesAddress = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesAddress;
	p.getAttributesArea = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesArea;
	p.getAttributesArticle = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesArticle;
	p.getAttributesAside = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesAside;
	p.getAttributesAudio = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesAudio;
	p.getAttributesB = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesB;
	p.getAttributesBdi = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesBdi;
	p.getAttributesBdo = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesBdo;
	p.getAttributesBlockquote = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesBlockquote;
	p.getAttributesBr = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesBr;
	p.getAttributesButton = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesButton;
	p.getAttributesCanvas = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesCanvas;
	p.getAttributesCaption = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesCaption;
	p.getAttributesCite = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesCite;
	p.getAttributesCode = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesCode;
	p.getAttributesCol = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesCol;
	p.getAttributesColgroup = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesColgroup;
	p.getAttributesDatalist = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDatalist;
	p.getAttributesDd = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDd;
	p.getAttributesDel = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDel;
	p.getAttributesDetails = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDetails;
	p.getAttributesDfn = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDfn;
	p.getAttributesDialog = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDialog;
	p.getAttributesDiv = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDiv;
	p.getAttributesDl = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDl;
	p.getAttributesDt = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesDt;
	p.getAttributesEm = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesEm;
	p.getAttributesEmbed = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesEmbed;
	p.getAttributesFieldset = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesFieldset;
	p.getAttributesFigcaption = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesFigcaption;
	p.getAttributesFigure = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesFigure;
	p.getAttributesFooter = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesFooter;
	p.getAttributesForm = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesForm;
	p.getAttributesH1 = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesH1;
	p.getAttributesH2 = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesH2;
	p.getAttributesH3 = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesH3;
	p.getAttributesH4 = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesH4;
	p.getAttributesH5 = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesH5;
	p.getAttributesH6 = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesH6;
	p.getAttributesHeader = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesHeader;
	p.getAttributesHr = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesHr;
	p.getAttributesI = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesI;
	p.getAttributesIframe = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesIframe;
	p.getAttributesImg = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesImg;
	p.getAttributesInput = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesInput;
	p.getAttributesIns = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesIns;
	p.getAttributesKbd = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesKbd;
	p.getAttributesKeygen = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesKeygen;
	p.getAttributesLabel = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesLabel;
	p.getAttributesLegend = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesLegend;
	p.getAttributesLi = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesLi;
	p.getAttributesMain = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesMain;
	p.getAttributesMap = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesMap;
	p.getAttributesMark = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesMark;
	p.getAttributesMenu = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesMenu;
	p.getAttributesMeter = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesMeter;
	p.getAttributesNav = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesNav;
	p.getAttributesObject = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesObject;
	p.getAttributesOl = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesOl;
	p.getAttributesOptgroup = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesOptgroup;
	p.getAttributesOption = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesOption;
	p.getAttributesOutput = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesOutput;
	p.getAttributesP = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesP;
	p.getAttributesParam = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesParam;
	p.getAttributesPre = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesPre;
	p.getAttributesProgress = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesProgress;
	p.getAttributesQ = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesQ;
	p.getAttributesRp = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesRp;
	p.getAttributesRt = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesRt;
	p.getAttributesRuby = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesRuby;
	p.getAttributesS = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesS;
	p.getAttributesSamp = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSamp;
	p.getAttributesSection = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSection;
	p.getAttributesSelect = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSelect;
	p.getAttributesSmall = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSmall;
	p.getAttributesSource = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSource;
	p.getAttributesSpan = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSpan;
	p.getAttributesStrong = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesStrong;
	p.getAttributesSub = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSub;
	p.getAttributesSummary = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSummary;
	p.getAttributesSup = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesSup;
	p.getAttributesTable = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTable;
	p.getAttributesTbody = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTbody;
	p.getAttributesTd = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTd;
	p.getAttributesTextarea = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTextarea;
	p.getAttributesTfoot = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTfoot;
	p.getAttributesTh = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTh;
	p.getAttributesThead = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesThead;
	p.getAttributesTime = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTime;
	p.getAttributesTr = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTr;
	p.getAttributesTrack = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesTrack;
	p.getAttributesU = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesU;
	p.getAttributesUl = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesUl;
	p.getAttributesVar = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesVar;
	p.getAttributesVideo = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesVideo;
	p.getAttributesWbr = _ZEN_Mojo_Plugin_HTML5Helper_getAttributesWbr;
	p.getFeatures = _ZEN_Mojo_Plugin_HTML5Helper_getFeatures;
	p.renderA = _ZEN_Mojo_Plugin_HTML5Helper_renderA;
	p.renderAbbr = _ZEN_Mojo_Plugin_HTML5Helper_renderAbbr;
	p.renderAddress = _ZEN_Mojo_Plugin_HTML5Helper_renderAddress;
	p.renderArea = _ZEN_Mojo_Plugin_HTML5Helper_renderArea;
	p.renderArticle = _ZEN_Mojo_Plugin_HTML5Helper_renderArticle;
	p.renderAside = _ZEN_Mojo_Plugin_HTML5Helper_renderAside;
	p.renderAudio = _ZEN_Mojo_Plugin_HTML5Helper_renderAudio;
	p.renderB = _ZEN_Mojo_Plugin_HTML5Helper_renderB;
	p.renderBdi = _ZEN_Mojo_Plugin_HTML5Helper_renderBdi;
	p.renderBdo = _ZEN_Mojo_Plugin_HTML5Helper_renderBdo;
	p.renderBlockquote = _ZEN_Mojo_Plugin_HTML5Helper_renderBlockquote;
	p.renderBr = _ZEN_Mojo_Plugin_HTML5Helper_renderBr;
	p.renderButton = _ZEN_Mojo_Plugin_HTML5Helper_renderButton;
	p.renderCanvas = _ZEN_Mojo_Plugin_HTML5Helper_renderCanvas;
	p.renderCaption = _ZEN_Mojo_Plugin_HTML5Helper_renderCaption;
	p.renderCite = _ZEN_Mojo_Plugin_HTML5Helper_renderCite;
	p.renderCode = _ZEN_Mojo_Plugin_HTML5Helper_renderCode;
	p.renderCol = _ZEN_Mojo_Plugin_HTML5Helper_renderCol;
	p.renderColgroup = _ZEN_Mojo_Plugin_HTML5Helper_renderColgroup;
	p.renderDatalist = _ZEN_Mojo_Plugin_HTML5Helper_renderDatalist;
	p.renderDd = _ZEN_Mojo_Plugin_HTML5Helper_renderDd;
	p.renderDel = _ZEN_Mojo_Plugin_HTML5Helper_renderDel;
	p.renderDetails = _ZEN_Mojo_Plugin_HTML5Helper_renderDetails;
	p.renderDfn = _ZEN_Mojo_Plugin_HTML5Helper_renderDfn;
	p.renderDialog = _ZEN_Mojo_Plugin_HTML5Helper_renderDialog;
	p.renderDiv = _ZEN_Mojo_Plugin_HTML5Helper_renderDiv;
	p.renderDl = _ZEN_Mojo_Plugin_HTML5Helper_renderDl;
	p.renderDt = _ZEN_Mojo_Plugin_HTML5Helper_renderDt;
	p.renderEm = _ZEN_Mojo_Plugin_HTML5Helper_renderEm;
	p.renderEmbed = _ZEN_Mojo_Plugin_HTML5Helper_renderEmbed;
	p.renderFieldset = _ZEN_Mojo_Plugin_HTML5Helper_renderFieldset;
	p.renderFigcaption = _ZEN_Mojo_Plugin_HTML5Helper_renderFigcaption;
	p.renderFigure = _ZEN_Mojo_Plugin_HTML5Helper_renderFigure;
	p.renderFooter = _ZEN_Mojo_Plugin_HTML5Helper_renderFooter;
	p.renderForm = _ZEN_Mojo_Plugin_HTML5Helper_renderForm;
	p.renderH1 = _ZEN_Mojo_Plugin_HTML5Helper_renderH1;
	p.renderH2 = _ZEN_Mojo_Plugin_HTML5Helper_renderH2;
	p.renderH3 = _ZEN_Mojo_Plugin_HTML5Helper_renderH3;
	p.renderH4 = _ZEN_Mojo_Plugin_HTML5Helper_renderH4;
	p.renderH5 = _ZEN_Mojo_Plugin_HTML5Helper_renderH5;
	p.renderH6 = _ZEN_Mojo_Plugin_HTML5Helper_renderH6;
	p.renderHeader = _ZEN_Mojo_Plugin_HTML5Helper_renderHeader;
	p.renderHr = _ZEN_Mojo_Plugin_HTML5Helper_renderHr;
	p.renderI = _ZEN_Mojo_Plugin_HTML5Helper_renderI;
	p.renderIframe = _ZEN_Mojo_Plugin_HTML5Helper_renderIframe;
	p.renderImg = _ZEN_Mojo_Plugin_HTML5Helper_renderImg;
	p.renderInput = _ZEN_Mojo_Plugin_HTML5Helper_renderInput;
	p.renderIns = _ZEN_Mojo_Plugin_HTML5Helper_renderIns;
	p.renderKbd = _ZEN_Mojo_Plugin_HTML5Helper_renderKbd;
	p.renderKeygen = _ZEN_Mojo_Plugin_HTML5Helper_renderKeygen;
	p.renderLabel = _ZEN_Mojo_Plugin_HTML5Helper_renderLabel;
	p.renderLegend = _ZEN_Mojo_Plugin_HTML5Helper_renderLegend;
	p.renderLi = _ZEN_Mojo_Plugin_HTML5Helper_renderLi;
	p.renderMain = _ZEN_Mojo_Plugin_HTML5Helper_renderMain;
	p.renderMap = _ZEN_Mojo_Plugin_HTML5Helper_renderMap;
	p.renderMark = _ZEN_Mojo_Plugin_HTML5Helper_renderMark;
	p.renderMenu = _ZEN_Mojo_Plugin_HTML5Helper_renderMenu;
	p.renderMeter = _ZEN_Mojo_Plugin_HTML5Helper_renderMeter;
	p.renderNav = _ZEN_Mojo_Plugin_HTML5Helper_renderNav;
	p.renderObject = _ZEN_Mojo_Plugin_HTML5Helper_renderObject;
	p.renderOl = _ZEN_Mojo_Plugin_HTML5Helper_renderOl;
	p.renderOptgroup = _ZEN_Mojo_Plugin_HTML5Helper_renderOptgroup;
	p.renderOption = _ZEN_Mojo_Plugin_HTML5Helper_renderOption;
	p.renderOutput = _ZEN_Mojo_Plugin_HTML5Helper_renderOutput;
	p.renderP = _ZEN_Mojo_Plugin_HTML5Helper_renderP;
	p.renderParam = _ZEN_Mojo_Plugin_HTML5Helper_renderParam;
	p.renderPre = _ZEN_Mojo_Plugin_HTML5Helper_renderPre;
	p.renderProgress = _ZEN_Mojo_Plugin_HTML5Helper_renderProgress;
	p.renderQ = _ZEN_Mojo_Plugin_HTML5Helper_renderQ;
	p.renderRp = _ZEN_Mojo_Plugin_HTML5Helper_renderRp;
	p.renderRt = _ZEN_Mojo_Plugin_HTML5Helper_renderRt;
	p.renderRuby = _ZEN_Mojo_Plugin_HTML5Helper_renderRuby;
	p.renderS = _ZEN_Mojo_Plugin_HTML5Helper_renderS;
	p.renderSamp = _ZEN_Mojo_Plugin_HTML5Helper_renderSamp;
	p.renderSection = _ZEN_Mojo_Plugin_HTML5Helper_renderSection;
	p.renderSelect = _ZEN_Mojo_Plugin_HTML5Helper_renderSelect;
	p.renderSmall = _ZEN_Mojo_Plugin_HTML5Helper_renderSmall;
	p.renderSource = _ZEN_Mojo_Plugin_HTML5Helper_renderSource;
	p.renderSpan = _ZEN_Mojo_Plugin_HTML5Helper_renderSpan;
	p.renderStrong = _ZEN_Mojo_Plugin_HTML5Helper_renderStrong;
	p.renderSub = _ZEN_Mojo_Plugin_HTML5Helper_renderSub;
	p.renderSummary = _ZEN_Mojo_Plugin_HTML5Helper_renderSummary;
	p.renderSup = _ZEN_Mojo_Plugin_HTML5Helper_renderSup;
	p.renderTable = _ZEN_Mojo_Plugin_HTML5Helper_renderTable;
	p.renderTbody = _ZEN_Mojo_Plugin_HTML5Helper_renderTbody;
	p.renderTd = _ZEN_Mojo_Plugin_HTML5Helper_renderTd;
	p.renderTextarea = _ZEN_Mojo_Plugin_HTML5Helper_renderTextarea;
	p.renderTfoot = _ZEN_Mojo_Plugin_HTML5Helper_renderTfoot;
	p.renderTh = _ZEN_Mojo_Plugin_HTML5Helper_renderTh;
	p.renderThead = _ZEN_Mojo_Plugin_HTML5Helper_renderThead;
	p.renderTime = _ZEN_Mojo_Plugin_HTML5Helper_renderTime;
	p.renderTr = _ZEN_Mojo_Plugin_HTML5Helper_renderTr;
	p.renderTrack = _ZEN_Mojo_Plugin_HTML5Helper_renderTrack;
	p.renderU = _ZEN_Mojo_Plugin_HTML5Helper_renderU;
	p.renderUl = _ZEN_Mojo_Plugin_HTML5Helper_renderUl;
	p.renderVar = _ZEN_Mojo_Plugin_HTML5Helper_renderVar;
	p.renderVideo = _ZEN_Mojo_Plugin_HTML5Helper_renderVideo;
	p.renderWbr = _ZEN_Mojo_Plugin_HTML5Helper_renderWbr;
	p.setAttributeSelect = _ZEN_Mojo_Plugin_HTML5Helper_setAttributeSelect;
}
/* EOF */