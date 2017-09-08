/*** Zen Module: ZEN_Mojo_Plugin__core ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/mojoDefaultHelper'] = '_ZEN_Mojo_Plugin_mojoDefaultHelper';
self._ZEN_Mojo_Plugin_mojoDefaultHelper = function(index,id) {
	if (index>=0) {_ZEN_Mojo_Plugin_mojoDefaultHelper__init(this,index,id);}
}

self._ZEN_Mojo_Plugin_mojoDefaultHelper__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'mojoDefaultHelper';
	o.version = '1.0.9';
}
function _ZEN_Mojo_Plugin_mojoDefaultHelper_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function _ZEN_Mojo_Plugin_mojoDefaultHelper_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self._ZEN_Mojo_Plugin_mojoDefaultHelper_createLayoutObjects = function(type,instance) {
instance.$hasBlock = false;
switch(type) {
case '$loop':
instance.$isLoop = true;
instance.$children = [];
break;
default:
break;
}
switch(type) {
case '$loop':
instance.$render = this.renderLoop;
break;
case '$content':
instance.$render = this.renderContentBlock;
break;
case '$if':
instance.$render = this.renderIf;
break;
default:
break;
}
return instance;
}

self._ZEN_Mojo_Plugin_mojoDefaultHelper_getFeatures = function() {
var features = [
{identifier:'$content'},
{identifier:'$loop'},
{identifier:'$if'}
];
return features;
}

self._ZEN_Mojo_Plugin_mojoDefaultHelper_renderContentBlock = function() {
var html = [];
var cssClass = zenGet(this.cssClass,'');
var eventHandler = zenGet(this.key) ? 'onclick="$$$event(\'click\');"' : '';
if (this.$ignoreSelect) {
eventHandler = '';
}
html.push('<div class="'+cssClass+'" style="'+zenGet(this.style)+'" '+eventHandler+'>');
html.push(this.content);
html.push('</div>');
var content = html.join('');
content = this.$documentView.injectEventHandler(content,this);
return content;
}

self._ZEN_Mojo_Plugin_mojoDefaultHelper_renderIf = function() {
var html = [];
if ((this.value === this.expectedValue) && this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
return html.join('');
}

self._ZEN_Mojo_Plugin_mojoDefaultHelper_renderLoop = function() {
var html = [];
if (this.$children) {
for (var n = 0; n < this.$children.length; n++) {
var child = this.$children[n];
html.push(child.$renderItem());
}
}
return html.join('');
}
self._ZEN_Mojo_Plugin_mojoDefaultHelper__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	_ZEN_Mojo_Plugin_mojoDefaultHelper.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = _ZEN_Mojo_Plugin_mojoDefaultHelper.prototype;
	if (null==p) {return;}
	p.constructor = _ZEN_Mojo_Plugin_mojoDefaultHelper;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Mojo.Plugin.mojoDefaultHelper';
	p._type = 'mojoDefaultHelper';
	p.serialize = _ZEN_Mojo_Plugin_mojoDefaultHelper_serialize;
	p.getSettings = _ZEN_Mojo_Plugin_mojoDefaultHelper_getSettings;
	p.createLayoutObjects = _ZEN_Mojo_Plugin_mojoDefaultHelper_createLayoutObjects;
	p.getFeatures = _ZEN_Mojo_Plugin_mojoDefaultHelper_getFeatures;
	p.renderContentBlock = _ZEN_Mojo_Plugin_mojoDefaultHelper_renderContentBlock;
	p.renderIf = _ZEN_Mojo_Plugin_mojoDefaultHelper_renderIf;
	p.renderLoop = _ZEN_Mojo_Plugin_mojoDefaultHelper_renderLoop;
}
/* EOF */