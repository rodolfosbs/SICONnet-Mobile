/*** Zen Module: sicomweb_poc2_gen_help ***/

self._zenClassIdx['http://www.intersystems.com/zen/mojo/HelperCustom'] = 'sicomweb_poc2_gen_help_HelperCustom';
self.sicomweb_poc2_gen_help_HelperCustom = function(index,id) {
	if (index>=0) {sicomweb_poc2_gen_help_HelperCustom__init(this,index,id);}
}

self.sicomweb_poc2_gen_help_HelperCustom__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin__init) ?zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id):_ZEN_Mojo_Plugin_baseHelperPlugin__init(o,index,id);
	o.pluginName = 'HelperCustom';
	o.version = '1.0';
}
function sicomweb_poc2_gen_help_HelperCustom_serialize(set,s)
{
	var o = this;s[0]='4034182545';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=o.onupdate;s[8]=o.pluginName;s[9]=o.renderFlag;s[10]=o.tuple;s[11]=o.version;s[12]=(o.visible?1:0);
}
function sicomweb_poc2_gen_help_HelperCustom_getSettings(s)
{
	s['name'] = 'string';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.sicomweb_poc2_gen_help_HelperCustom_createLayoutObjects = function(type,instance) {
instance.$hasBlock = false;
instance.$hide = this.hideElement;
instance.$show = this.showElement;
instance.$getDisplayText = this.getDisplayText;
this.$pageManager.hiddenArray = [];
switch(type) {
case '$topo':
instance.$isLoop = true;
instance.$children = [];
break;
}
switch(type) {
case '$topo':
instance.$render = this.renderNavBar;
instance.$refresh = this.refreshNavBar;
break;
}
return instance;
}

self.sicomweb_poc2_gen_help_HelperCustom_getFeatures = function() {
var features = [
{identifier:'$topo'}
];
return features;
}

self.sicomweb_poc2_gen_help_HelperCustom_refreshNavBar = function() {
var tbItem = $('#'+this.$id);
if (zenGet(this.inverse)) {
tbItem.addClass("navbar-inverse");
}
else {
tbItem.removeClass("navbar-inverse");
}
if (zenGet(this.hidden) !== '') {this.hidden?this.$hide():this.$show();}
}

self.sicomweb_poc2_gen_help_HelperCustom_renderNavBar = function() {
var html 			= 	[];
var brandTarget 	= 	zenGet(this.brandTarget,'#');
var brand 			= 	zenGet(this.brand, false);
var brandImage		=   '';
var id 				= 	((zenGet(this.id) ? zenGet(this.id) : null)) || (this.$makeId());
this.$id = id;
var collapseId 		= 	'';
var dataTargetId 	= 	'';
var headerClass 	= 	zenGet(this.headerClass, 'navbar-header');
var containerClass 	= 	zenGet(this.containerClass, 'container-fluid');
var navClass 		= 	zenGet(this.navClass, 'navbar-default');
var inverse 		= 	zenGet(this.inverse, false) ? ' navbar-inverse' : '';
var style			=	zenGet(this.style) ? ' style="'+zenGet(this.style)+'"' : '';
var position		=	zenGet(this.position) ? ' navbar-'+zenGet(this.position) : '';
var collapseDisabled=   zenGet(this.collapseDisabled, false);
var ocultaMenuLateral = zenGet(this.ocultaMenuLateral, false);
var btnMenuLateral = zenGet(this.btnMenuLateral, "");
if(!collapseDisabled)
{
collapseId = id+'-1';
dataTargetId = '#'+collapseId;
}
if(brand)
{
brandImage = zenGet(this.brandImage,false) ? '<a class="navbar-brand" href="'+brandTarget+'" style="padding:10px !important;"><img alt="'+brand+'" src="'+zenGet(this.brandImage)+'"></a>'
: '<a class="navbar-brand" href="'+brandTarget+'" style="padding:10px !important;">'+brand+'</a>';
}
html.push('<nav id="'+id+'" class="navbar '+navClass+inverse+position+'" '+style+'>');
html.push('<div class="'+containerClass+'">');
html.push('<div class="'+headerClass+'">');
if(collapseDisabled)
{
html.push(brandImage+'</div>');
}
else
{
html.push('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="'+dataTargetId+'">');
html.push('<span class="sr-only">Toggle navigation</span><span class="icon-bar" style="background-color: #ffffff;"></span><span class="icon-bar" style="background-color: #ffffff;"></span><span class="icon-bar" style="background-color: #ffffff;"></span>');
html.push('</button>');
html.push(brandImage);
html.push("</div>");
html.push('<div class="collapse navbar-collapse" id="'+collapseId+'">');
if (this.$children)
{
for (var n=0;n<this.$children.length;n++)
{
var child = this.$children[n];
html.push(child.$renderItem());
}
}
html.push('</div>');
}
html.push('</div>');
html.push('</nav>');
return html.join('');
}
self.sicomweb_poc2_gen_help_HelperCustom__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_baseHelperPlugin');
	sicomweb_poc2_gen_help_HelperCustom.prototype = zenCreate('_ZEN_Mojo_Plugin_baseHelperPlugin',-1);
	var p = sicomweb_poc2_gen_help_HelperCustom.prototype;
	if (null==p) {return;}
	p.constructor = sicomweb_poc2_gen_help_HelperCustom;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_baseHelperPlugin) ? zenMaster._ZEN_Mojo_Plugin_baseHelperPlugin.prototype:_ZEN_Mojo_Plugin_baseHelperPlugin.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'sicomweb.poc2.gen.help.HelperCustom';
	p._type = 'HelperCustom';
	p.serialize = sicomweb_poc2_gen_help_HelperCustom_serialize;
	p.getSettings = sicomweb_poc2_gen_help_HelperCustom_getSettings;
	p.createLayoutObjects = sicomweb_poc2_gen_help_HelperCustom_createLayoutObjects;
	p.getFeatures = sicomweb_poc2_gen_help_HelperCustom_getFeatures;
	p.refreshNavBar = sicomweb_poc2_gen_help_HelperCustom_refreshNavBar;
	p.renderNavBar = sicomweb_poc2_gen_help_HelperCustom_renderNavBar;
}

self._zenClassIdx['http://www.scania.com/sicomweb/PageManagerCustom'] = 'sicomweb_poc2_gen_help_PageManagerCustom';
self.sicomweb_poc2_gen_help_PageManagerCustom = function(index,id) {
	if (index>=0) {sicomweb_poc2_gen_help_PageManagerCustom__init(this,index,id);}
}

self.sicomweb_poc2_gen_help_PageManagerCustom__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager__init) ?zenMaster._ZEN_Mojo_Plugin_basePageManager__init(o,index,id):_ZEN_Mojo_Plugin_basePageManager__init(o,index,id);
	o.onPageShow = '';
	o.pluginName = 'PageManagerCustom';
	o.version = '1.0';
}
function sicomweb_poc2_gen_help_PageManagerCustom_serialize(set,s)
{
	var o = this;s[0]='4105251506';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.aux;s[7]=set.serializeList(o,o.helperPlugins,true,'helperPlugins');s[8]=o.onPageShow;s[9]=o.onupdate;s[10]=o.pluginName;s[11]=o.renderFlag;s[12]=(o.suppressCodeExecution?1:0);s[13]=(o.suppressRender?1:0);s[14]=(o.suppressStopPropagation?1:0);s[15]=o.tuple;s[16]=o.version;s[17]=(o.visible?1:0);
}
function sicomweb_poc2_gen_help_PageManagerCustom_getSettings(s)
{
	s['name'] = 'string';
	s['onPageShow'] = 'eventHandler';
	s['pluginName'] = 'string';
	s['version'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.sicomweb_poc2_gen_help_PageManagerCustom_afterPopDocument = function(docView,render) {
return null;
}

self.sicomweb_poc2_gen_help_PageManagerCustom_afterRenderDocument = function(docView,displayMode,html) {
if (this.onPageShow && (this.onPageShow != '')) {
zenInvokeCallbackMethod(this.onPageShow,this,'onPageShow','layoutkey',this.$documentView.getLayoutKey(),'documentkey',this.$documentView.getDocumentKey());
}
}

self.sicomweb_poc2_gen_help_PageManagerCustom_onCheckLibraries = function() {
if (typeof $ === 'undefined') {
alert('jQuery library is not loaded correctly. Check your includes.');
return false;
} else if (typeof $.fn.emulateTransitionEnd === 'undefined') {
alert('bootstrap library is not loaded correctly. Check your includes.');
return false;
}
return true;
}
self.sicomweb_poc2_gen_help_PageManagerCustom__Loader = function() {
	zenLoadClass('_ZEN_Mojo_Plugin_basePageManager');
	sicomweb_poc2_gen_help_PageManagerCustom.prototype = zenCreate('_ZEN_Mojo_Plugin_basePageManager',-1);
	var p = sicomweb_poc2_gen_help_PageManagerCustom.prototype;
	if (null==p) {return;}
	p.constructor = sicomweb_poc2_gen_help_PageManagerCustom;
	p.superClass = ('undefined' == typeof _ZEN_Mojo_Plugin_basePageManager) ? zenMaster._ZEN_Mojo_Plugin_basePageManager.prototype:_ZEN_Mojo_Plugin_basePageManager.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'sicomweb.poc2.gen.help.PageManagerCustom';
	p._type = 'PageManagerCustom';
	p.serialize = sicomweb_poc2_gen_help_PageManagerCustom_serialize;
	p.getSettings = sicomweb_poc2_gen_help_PageManagerCustom_getSettings;
	p.afterPopDocument = sicomweb_poc2_gen_help_PageManagerCustom_afterPopDocument;
	p.afterRenderDocument = sicomweb_poc2_gen_help_PageManagerCustom_afterRenderDocument;
	p.onCheckLibraries = sicomweb_poc2_gen_help_PageManagerCustom_onCheckLibraries;
}
/* EOF */