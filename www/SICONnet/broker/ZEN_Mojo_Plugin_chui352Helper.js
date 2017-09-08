/*** Zen Module: ZEN_Mojo_Plugin_chui352Helper ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/chui-3.5.2-Helper'] = '_ZEN_Mojo_Plugin_chui352Helper';
self._ZEN_Mojo_Plugin_chui352Helper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_chui352Helper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_chui352Helper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'chui-3.5.2-Helper';
	o.version = '0.5.7';
}
function _ZEN_Mojo_Plugin_chui352Helper_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_chui352Helper_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_chui352Helper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = false;
instance.$showTitle = false;
switch(type) {
case '$list':
instance.$isLoop = true;
instance.$children = [];
break;
default:
break;
}
switch(type) {
case '$article':
instance.$render = this.renderArticle;
break;
case '$aside':
instance.$render = this.renderAside;
break;
case '$button':
instance.$render = this.renderButton;
break;
case '$div':
instance.$render = this.renderDiv;
break;
case '$h1':
case '$h2':
case '$h3':
case '$h4':
case '$h5':
instance.headerSize = type.charAt(2);
instance.$render = this.renderH;
break;
case '$link':
instance.$render = this.renderLink;
break;
case '$list':
instance.$render = this.renderList;
break;
case '$listitem':
instance.$render = this.renderListitem;
break;
case '$navbar':
instance.$render = this.renderNavbar;
break;
case '$p':
instance.$render = this.renderP;
break;
case '$section':
instance.$render = this.renderSection;
break;
}
return instance;
}

self._ZEN_Mojo_Plugin_chui352Helper_getFeatures = function() {
var features = [
{identifier:'$article'},
{identifier:'$aside'},
{identifier:'$button'},
{identifier:'$div'},
{identifier:'$h1'},
{identifier:'$h2'},
{identifier:'$h3'},
{identifier:'$h4'},
{identifier:'$h5'},
{identifier:'$link'},
{identifier:'$list'},
{identifier:'$listitem'},
{identifier:'$navbar'},
{identifier:'$p'},
{identifier:'$section'},
];
return features;
}

self._ZEN_Mojo_Plugin_chui352Helper_onCheckLibraries = function() {
if (typeof $ === 'undefined') {
alert('jQuery library is not loaded correctly. Check your includes.');
return false;
} else if (typeof $.UIGoToArticle === 'undefined') {
alert('Chocolate Chip UI library is not loaded correctly. Check your includes.');
return false;
}
return true;
}

self._ZEN_Mojo_Plugin_chui352Helper_renderArticle = function() {
var html = [];
var docView = this.$documentView;
var pageId = 'page'+docView.currLevel;
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var title = zenGet(this.title,'') ? 'title="'+zenGet(this.title,'')+'"' : '';
var currentOrNext = (docView.currLevel == 0) ? 'current' : 'next';
html.push('<article id="'+pageId+'" '+hidden+' '+title+' class="'+currentOrNext+'">');
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('</article>');
return html.join('');
}

self._ZEN_Mojo_Plugin_chui352Helper_renderAside = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false);
var cssClass = zenGet(this.cssClass,'');
var nav = zenGet(this.nav,true) ? 'nav' : '';
var showDetail = zenGet(this.showDetail,false) ? 'show-detail' : '';
if (!hidden) {
html.push('<aside id="'+this.$makeId()+'" class="'+cssClass+'">');
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
if (zenGet(this.nav,true)) {
html.push('<span class="'+nav+'"></span>');
} else if (zenGet(this.showDetail,false)) {
html.push('<span class="'+showDetail+'"></span>');
}
html.push('</aside>');
}
return html.join('');
}

self._ZEN_Mojo_Plugin_chui352Helper_renderButton = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false);
var caption = zenGet(this.caption,'');
var cssClass = zenGet(this.cssClass,'') + ' button';
if (!hidden) {
html.push('<a id="'+this.$makeId()+'" class="'+cssClass+'" onclick="$$$event(\'click\');">');
html.push(caption);
html.push('</a>');
var content = docView.injectEventHandler(html.join(''),this);
}
return content;
}

self._ZEN_Mojo_Plugin_chui352Helper_renderDiv = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false);
var cssClass = zenGet(this.cssClass,'');
if (!hidden) {
html.push('<div id="'+this.$makeId()+'" class="'+cssClass+'">');
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('</div>');
}
return html.join('');
}

self._ZEN_Mojo_Plugin_chui352Helper_renderH = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var caption = zenGet(this.caption,'');
var headerSize = zenGet(this.headerSize,1);
var cssClass = zenGet(this.cssClass,'');
html.push('<h'+headerSize+' id="'+this.$makeId()+'" class="'+cssClass+'" '+hidden+'>');
html.push(caption);
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('</h'+headerSize+'>');
return html.join('');
}

self._ZEN_Mojo_Plugin_chui352Helper_renderLink = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false);
var caption = zenGet(this.caption,'');
var cssClass = zenGet(this.cssClass,'');
if (!hidden) {
html.push('<a id="'+this.$makeId()+'" href="'+zenGet(this.href,'')+'" class="'+cssClass+'" onclick="$$$event(\'click\');">');
html.push(caption);
html.push('</a>');
var content = docView.injectEventHandler(html.join(''),this);
}
return content;
}

self._ZEN_Mojo_Plugin_chui352Helper_renderList = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var caption = zenGet(this.caption,'');
var switchedClass = zenGet(this.switched,false) ? ' switched' : '';
var cssClass = zenGet(this.cssClass,'list') + switchedClass;
if (!hidden && caption !== '') {
html.push('<h2>'+caption+'</h2>');
}
html.push('<ul id="'+this.$makeId()+'" '+hidden+' class="'+cssClass+'">');
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('</ul>');
return html.join('');
}

self._ZEN_Mojo_Plugin_chui352Helper_renderListitem = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var caption = zenGet(this.caption,'');
var navigationClass = zenGet(this.showNavigation,false) ? ' nav' : '';
var datagoto = zenGet(this.showNavigation,false) ? ' data-goto' : '';
var compClass = zenGet(this.complex,false) ? ' comp' : '';
var detailClass = zenGet(this.showDetail,false) ? ' show-detail' : '';
var cssClass = zenGet(this.cssClass,'') + navigationClass + detailClass + compClass;
html.push('<li id="'+this.$makeId()+'" '+hidden+' '+datagoto+' class="'+cssClass+'" onclick="$$$event(\'click\');">');
html.push(caption);
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('</li>');
var content = docView.injectEventHandler(html.join(''),this);
return content;
}

self._ZEN_Mojo_Plugin_chui352Helper_renderNavbar = function() {
var html = [];
var docView = this.$documentView;
var pageId = 'page'+docView.currLevel;
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
html.push('<nav id="'+this.$makeId()+'" '+hidden + ' class="current">');
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('<h1>'+zenGet(this.title,'')+'</h1>');
html.push('</nav>');
return html.join('');
}

self._ZEN_Mojo_Plugin_chui352Helper_renderP = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
var caption = zenGet(this.caption,'');
var cssClass = zenGet(this.cssClass,'');
html.push('<p id="'+this.$makeId()+'" class="'+cssClass+'" '+hidden+'>');
html.push(caption);
html.push('</p>');
return html.join('');
}

self._ZEN_Mojo_Plugin_chui352Helper_renderSection = function() {
var html = [];
var docView = this.$documentView;
var hidden = zenGet(this.hidden,false) ? 'hidden' : '';
html.push('<section id="'+this.$makeId()+'" '+hidden+'>');
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('</section>');
return html.join('');
}
self._ZEN_Mojo_Plugin_chui352Helper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_chui352Helper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_chui352Helper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_chui352Helper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.chui352Helper';
	p._type = 'chui352Helper';
	p.serialize = _ZEN_Mojo_Plugin_chui352Helper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_chui352Helper_getSettings;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_chui352Helper_createLayoutObjects;
	p.getFeatures = _ZEN_Mojo_Plugin_chui352Helper_getFeatures;
	p.onCheckLibraries = _ZEN_Mojo_Plugin_chui352Helper_onCheckLibraries;
	p.renderArticle = _ZEN_Mojo_Plugin_chui352Helper_renderArticle;
	p.renderAside = _ZEN_Mojo_Plugin_chui352Helper_renderAside;
	p.renderButton = _ZEN_Mojo_Plugin_chui352Helper_renderButton;
	p.renderDiv = _ZEN_Mojo_Plugin_chui352Helper_renderDiv;
	p.renderH = _ZEN_Mojo_Plugin_chui352Helper_renderH;
	p.renderLink = _ZEN_Mojo_Plugin_chui352Helper_renderLink;
	p.renderList = _ZEN_Mojo_Plugin_chui352Helper_renderList;
	p.renderListitem = _ZEN_Mojo_Plugin_chui352Helper_renderListitem;
	p.renderNavbar = _ZEN_Mojo_Plugin_chui352Helper_renderNavbar;
	p.renderP = _ZEN_Mojo_Plugin_chui352Helper_renderP;
	p.renderSection = _ZEN_Mojo_Plugin_chui352Helper_renderSection;
}
/* EOF */