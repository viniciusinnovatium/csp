/*** ZEN Client Class Definitions ***/
/*** Package:   %ZEN.Component ***/
/*** Namespace:   ^^u:\kit\little\release\mgr\ ***/
/*** Generated: 2009-05-12 12:40:51 ***/

// version number: must match %ZENVersion
js_ZEN_Component = 14;

// ================================================================================
_zenClassIdx['object'] = '_ZEN_Component_object';
function _ZEN_Component_object(index,id) {
	if (index>=0) {_ZEN_Component_object__init(this,index,id);}
}

function _ZEN_Component_object__init(o,index,id) {
	o.index = index;
	o.id = id;
	o.name = '';
	o.parent = null;
	o.composite = null;
	o.aux = '';
	o.onupdate = '';
	o.renderFlag = '0';
	o.tuple = '';
	o.visible = false;
	o.window = null;
}
function _ZEN_Component_object_serialize(set,s)
{
	s[0]='3874650476';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.onupdate;s[8]=this.renderFlag;s[9]=this.tuple;s[10]=(this.visible?1:0);
}
function _ZEN_Component_object_getSettings(s)
{
	s['id'] = 'string';
	s['name'] = 'string';
	s['aux'] = 'string';
	s['onupdate'] = 'eventHandler';
}

function _ZEN_Component_object_findElement(subid) {
return this.window.document.getElementById(subid + '_' + this.index + (null==this.tuple||''==this.tuple?'':'.'+this.tuple));
}

function _ZEN_Component_object_fireOnUpdateEvent() {
if (this.onupdateHandler) {
this.onupdateHandler();
}
if ('' != this.onupdate) {
zenInvokeCallbackMethod(this.onupdate,this,'onupdate');
}
}

function _ZEN_Component_object_getProperty(property,key) {
if ('' != property) {
return this[property];
}
return null;
}

function _ZEN_Component_object_getSettings(settings) {
}

function _ZEN_Component_object_getType() {
return this._type;
}

function _ZEN_Component_object_invokeSuper(method,args) {
var val = null;
try {
var oldMethod = this._methodContext;
var oldContext = this._superContext;
this._superContext = (this._superContext&&(method==this._methodContext)) ? this._superContext.superClass : this.superClass;
this._methodContext = method;
val = this._superContext[method].apply(this,args);
this._superContext = oldContext;
this._methodContext = oldMethod;
}
catch(ex) {
zenExceptionHandler(ex,arguments,'Error in invokeSuper.\nMethod: ' + method);
}
return val;
}

function _ZEN_Component_object_isOfType(type) {
var obj = this;
while (obj) {
if (obj._type == type) {
return true;
}
obj = obj.superClass;
}
return false;
}

function _ZEN_Component_object_makeId(subid) {
return subid + '_' + this.index + (null!=this.tuple&&''!=this.tuple ? ('.'+this.tuple) : '');
}

function _ZEN_Component_object_render() {
if (this.renderContents) {
try {
this.renderContents();
}
catch(ex) {
var src = 'Source: <' + this._type + ' id="' + this.id + '">\n';
zenExceptionHandler(ex,arguments,'Error invoking renderContents method.\n' + src);
}
}
}

function _ZEN_Component_object_renderSVG(document,parent) {
alert('ZEN ERROR\nHTML Components cannot be used within an svgFrame:\nType: '+ this._type + '; index: ' + this.index + '; id: \'' + this.id + '\'');
}

function _ZEN_Component_object_setProperty(property,value,value2) {
switch(property) {
case 'id':
if (zenPage) {
zenPage.setComponentId(this,value);
}
else {
this.id = value;
}
break;
case 'name':
this.name = value;
break;
case 'aux':
this.aux = value;
break;
default:
if ('' != property && ('object'!=typeof(this[property]))) {
this[property] = value;
}
return false;
}
return true;
}
function _ZEN_Component_object__Loader() {
	var p = _ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.object';
	p._type = 'object';
	p.serialize = _ZEN_Component_object_serialize;
	p.getSettings = _ZEN_Component_object_getSettings;
	p.findElement = _ZEN_Component_object_findElement;
	p.fireOnUpdateEvent = _ZEN_Component_object_fireOnUpdateEvent;
	p.getProperty = _ZEN_Component_object_getProperty;
	p.getSettings = _ZEN_Component_object_getSettings;
	p.getType = _ZEN_Component_object_getType;
	p.invokeSuper = _ZEN_Component_object_invokeSuper;
	p.isOfType = _ZEN_Component_object_isOfType;
	p.makeId = _ZEN_Component_object_makeId;
	p.render = _ZEN_Component_object_render;
	p.renderSVG = _ZEN_Component_object_renderSVG;
	p.setProperty = _ZEN_Component_object_setProperty;
}

// ================================================================================
_zenClassIdx['component'] = '_ZEN_Component_component';
function _ZEN_Component_component(index,id) {
	if (index>=0) {_ZEN_Component_component__init(this,index,id);}
}

function _ZEN_Component_component__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.align = '';
	o.containerStyle = '';
	o.dragEnabled = false;
	o.dropEnabled = false;
	o.dynamic = false;
	o.enclosingClass = 'zendiv';
	o.enclosingStyle = '';
	o.error = '';
	o.height = '';
	o.hidden = false;
	o.hint = '';
	o.hintClass = 'zenHint';
	o.hintStyle = '';
	o.label = '';
	o.labelClass = 'zenLabel';
	o.labelStyle = '';
	o.onafterdrag = '';
	o.onbeforedrag = '';
	o.ondrag = '';
	o.ondrop = '';
	o.onhide = '';
	o.onrefresh = '';
	o.onshow = '';
	o.overlayMode = '0';
	o.showLabel = true;
	o.slice = '';
	o.title = '';
	o.valign = '';
	o.visible = true;
	o.width = '';
}
function _ZEN_Component_component_serialize(set,s)
{
	s[0]='1038571008';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.onupdate;s[31]=this.overlayMode;s[32]=this.renderFlag;s[33]=(this.showLabel?1:0);s[34]=this.slice;s[35]=this.title;s[36]=this.tuple;s[37]=this.valign;s[38]=(this.visible?1:0);s[39]=this.width;
}
function _ZEN_Component_component_getSettings(s)
{
	s['name'] = 'string';
	s['align'] = 'enum:left,right,center';
	s['containerStyle'] = 'style';
	s['dragEnabled'] = 'boolean';
	s['dropEnabled'] = 'boolean';
	s['enclosingClass'] = 'cssClass';
	s['enclosingStyle'] = 'style';
	s['height'] = 'length';
	s['hidden'] = 'boolean';
	s['hint'] = 'caption';
	s['hintClass'] = 'cssClass';
	s['hintStyle'] = 'style';
	s['label'] = 'caption';
	s['labelClass'] = 'cssClass';
	s['labelStyle'] = 'style';
	s['onafterdrag'] = 'eventHandler';
	s['onbeforedrag'] = 'eventHandler';
	s['ondrag'] = 'eventHandler';
	s['ondrop'] = 'eventHandler';
	s['onhide'] = 'eventHandler';
	s['onrefresh'] = 'eventHandler';
	s['onshow'] = 'eventHandler';
	s['showLabel'] = 'boolean';
	s['slice'] = 'integer';
	s['title'] = 'caption';
	s['valign'] = 'enum:top,bottom,middle';
	s['width'] = 'length';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_component_dragHandler() {
try {
var dragData = new zenDragData();
dragData.sourceComponent = this;
if ('' != this.onbeforedrag) {
if (!zenInvokeCallbackMethod(this.onbeforedrag,this,'onbeforedrag','dragData',dragData)) {
if (null == dragData.value) {
dragData = null;
}
return dragData;
}
}
if (!this.dragStartHandler ||
!this.dragStartHandler(dragData) ||
(null == dragData.value)) {
return null;
}
if ('' != this.ondrag) {
if (!zenInvokeCallbackMethod(this.ondrag,this,'ondrag','dragData',dragData)) {
return null;
}
}
}
catch(ex) {
zenExceptionHandler(ex,arguments,'Error in dragHandler.');
}
return dragData;
}

function _ZEN_Component_component_dragNotifyHandler(dragData) {
try {
if (this.dragFinishHandler) {
this.dragFinishHandler(dragData);
}
zenInvokeCallbackMethod(this.onafterdrag,this,'onafterdrag','dragData',dragData);
}
catch(ex) {
zenExceptionHandler(ex,arguments,'Error in dragNotifyHandler.');
}
}

function _ZEN_Component_component_dropHandler() {
try {
var dragData = ZLM.getDragData();
dragData.targetComponent = this;
if ('' != this.ondrop) {
if (!zenInvokeCallbackMethod(this.ondrop,this,'ondrop','dragData',dragData)) {
return;
}
}
if (this.dropStartHandler && !this.dropStartHandler(dragData)) {
return;
}
if (dragData.sourceComponent) {
dragData.sourceComponent.dragNotifyHandler(dragData);
}
}
catch(ex) {
zenExceptionHandler(ex,arguments,'Error in dropHandler.');
}
}

function _ZEN_Component_component_getEnclosingDiv() {
return this.window.document.getElementById(('' == this.id) ? 'zen'+this.index : this.id);
}

function _ZEN_Component_component_getHidden() {
return this.hidden;
}

function _ZEN_Component_component_getHintElement() {
return this.window.document.getElementById('zenhint_'+this.index);
}

function _ZEN_Component_component_getLabelElement() {
return this.window.document.getElementById('zenlbl_'+this.index);
}

function _ZEN_Component_component_progressBarHandler() {
this.progressBarTimerId = null;
this._progressBarCount++;
if (this._progressBarDiv) {
var style = '';
if (null != this._progressBarDivWid) {
style += 'width: ' + this._progressBarDivWid + 'px;';
}
if (null != this._progressBarDivHgt) {
style += 'height: ' + this._progressBarDivHgt + 'px;';
}
if ('' == style) {
style = 'width: 100%';
}
this._progressBarDiv.innerHTML = '<div align="center" style="'+style+'"><table class="zenProgressBar" border="0" cellpadding="0" cellspacing="0" width="200px"><tr><td width="'+((this._progressBarCount%20)*10)+'px">&nbsp;</td><td class="zenProgressBarThumb" width="10px">&nbsp;</td><td width="99%">&nbsp;</td></tr></table></div>';
}
this.progressBarTimerId = self.setTimeout("zenPage.getComponent("+this.index+").progressBarHandler()",75);
}

function _ZEN_Component_component_refreshContents(sync) {
if (!this.visible) { return; }
switch (zenRefreshMode) {
case 0:
if (sync) {
var old = zenSynchronousMode;
zenSynchronousMode = true;
}
this.ReallyRefreshContents();
if (sync) {
zenSynchronousMode = old;
}
break;
case 1:
zenASSERT(zenThreadId!=null,'thread id should not be null',arguments);
zenASSERT(zenRefreshList,'refresh list should not be null',arguments);
zenRefreshList[zenThreadId][this.index] = this;
break;
}
}

function _ZEN_Component_component_setHidden(flag) {
var enc = this.getEnclosingDiv();
zenASSERT(enc,"Unable to find enclosing element.",arguments);
if (flag) {
zenInvokeCallbackMethod(this.onhide,this,'onhide');
}
else {
zenInvokeCallbackMethod(this.onshow,this,'onshow');
}
this.hidden = flag;
enc.style.display = this.hidden ? 'none' : '';
var label = this.getLabelElement();
if (label) {
label.style.display = this.hidden ? 'none' : '';
}
}

function _ZEN_Component_component_setOverlayMode(mode) {
var enc = this.getEnclosingDiv();
if (!enc) return;
var overlay = this.window.document.getElementById('overlay_'+this.index);
if (overlay) {
enc.removeChild(overlay);
delete overlay;
}
this.overlayMode = mode;
if (mode > 0) {
var overlay = this.window.document.createElement('div');
overlay.id = 'overlay_' + this.index;
enc.appendChild(overlay);
overlay.className = (2==mode) ? 'zenOverlaySelected' : 'zenOverlay';
overlay.style.top = zenGetTop(enc) - 1 - zenGetTopScroll(enc);
overlay.style.left = zenGetLeft(enc) - 1 - zenGetLeftScroll(enc);
overlay.style.width = enc.offsetWidth;
overlay.style.height = enc.offsetHeight;
if (2==mode) {
if (overlay.style.opacity != null) {
overlay.style.background = 'yellow';
overlay.style.opacity = '0.5';
}
else if (overlay.style.filter != null) {
overlay.style.background = 'yellow';
overlay.style.filter = 'alpha(opacity=50)';
}
}
overlay.onclick = new Function("zenPage.onoverlayHandler("+this.index+");");
}
}

function _ZEN_Component_component_setProperty(property,value,value2) {
switch(property) {
case 'hidden':
this.setHidden(value);
break;
case 'hint':
case 'hintClass':
case 'hintStyle':
this[property] = value;
var hint = this.getHintElement();
if (hint) {
switch(property) {
case 'hint':
hint.innerHTML = value;
break;
case 'hintClass':
hint.className = value;
break;
case 'hintStyle':
hint.style.cssText = value;
break;
}
}
else if (this.parent) {
this.parent.refreshContents();
}
break;
case 'label':
case 'labelClass':
case 'labelStyle':
this[property] = value;
var label = this.getLabelElement();
if (label) {
switch(property) {
case 'label':
label.innerHTML = value;
break;
case 'labelClass':
label.className = value;
break;
case 'labelStyle':
label.style.cssText = value;
break;
}
}
else if (this.parent) {
this.parent.refreshContents();
}
break;
case 'containerStyle':
case 'align':
case 'valign':
case 'width':
case 'height':
case 'slice':
this[property] = value;
if (this.parent) {
this.parent.refreshContents();
}
break;
case 'enclosingClass':
this.enclosingClass = value;
var enc = this.getEnclosingDiv();
enc.className = value;
break;
case 'enclosingStyle':
this.enclosingStyle = value;
var enc = this.getEnclosingDiv();
enc.style.cssText = value;
break;
case 'dragEnabled':
case 'dropEnabled':
this[property] = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_component_startProgressBar(div) {
this.stopProgressBar();
if (!zenSynchronousMode) {
this._progressBarCount = 0;
if (div) {
this._progressBarDiv = div;
delete this._progressBarDivWid;
delete this._progressBarDivHgt;
}
else {
this._progressBarDiv = this.getEnclosingDiv();
this._progressBarDivWid = this._progressBarDiv.offsetWidth;
this._progressBarDivHgt = this._progressBarDiv.offsetHeight;
}
this.progressBarTimerId = self.setTimeout("zenPage.getComponent("+this.index+").progressBarHandler()",zenProgressBarTimeout);
}
}

function _ZEN_Component_component_stopProgressBar() {
if (this.progressBarTimerId) {
self.clearTimeout(this.progressBarTimerId);
this.progressBarTimerId = null;
}
}

function _ZEN_Component_component_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_component__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Component_component.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Component_component.prototype;
	p.constructor = _ZEN_Component_component;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.component';
	p._type = 'component';
	p.serialize = _ZEN_Component_component_serialize;
	p.getSettings = _ZEN_Component_component_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_component_ReallyRefreshContents;
	p.dragHandler = _ZEN_Component_component_dragHandler;
	p.dragNotifyHandler = _ZEN_Component_component_dragNotifyHandler;
	p.dropHandler = _ZEN_Component_component_dropHandler;
	p.getEnclosingDiv = _ZEN_Component_component_getEnclosingDiv;
	p.getHidden = _ZEN_Component_component_getHidden;
	p.getHintElement = _ZEN_Component_component_getHintElement;
	p.getLabelElement = _ZEN_Component_component_getLabelElement;
	p.progressBarHandler = _ZEN_Component_component_progressBarHandler;
	p.refreshContents = _ZEN_Component_component_refreshContents;
	p.setHidden = _ZEN_Component_component_setHidden;
	p.setOverlayMode = _ZEN_Component_component_setOverlayMode;
	p.setProperty = _ZEN_Component_component_setProperty;
	p.startProgressBar = _ZEN_Component_component_startProgressBar;
	p.stopProgressBar = _ZEN_Component_component_stopProgressBar;
}

// ================================================================================
_zenClassIdx['abstractGroup'] = '_ZEN_Component_abstractGroup';
function _ZEN_Component_abstractGroup(index,id) {
	if (index>=0) {_ZEN_Component_abstractGroup__init(this,index,id);}
}

function _ZEN_Component_abstractGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.children = new Array();
	o.disabled = false;
}
function _ZEN_Component_abstractGroup_serialize(set,s)
{
	s[0]='1107266678';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=set.serializeList(this,this.children,true,'children');s[9]=this.containerStyle;s[10]=(this.disabled?1:0);s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.onafterdrag;s[26]=this.onbeforedrag;s[27]=this.ondrag;s[28]=this.ondrop;s[29]=this.onhide;s[30]=this.onrefresh;s[31]=this.onshow;s[32]=this.onupdate;s[33]=this.overlayMode;s[34]=this.renderFlag;s[35]=(this.showLabel?1:0);s[36]=this.slice;s[37]=this.title;s[38]=this.tuple;s[39]=this.valign;s[40]=(this.visible?1:0);s[41]=this.width;
}
function _ZEN_Component_abstractGroup_getSettings(s)
{
	s['name'] = 'string';
	s['disabled'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_abstractGroup_addChild(component,refresh) {
zenASSERT(component && zenIsComponent(component),'Invalid component',arguments);
if (!component.isOfType('component')) {
alert('Only HTML components can be added to groups');
return;
}
this.children[this.children.length] = component;
component.parent = this;
if (this.childrenMutated) {
this.childrenMutated();
}
if (refresh) {
this.refreshContents();
}
}

function _ZEN_Component_abstractGroup_addChildAfter(component,sibling,refresh) {
zenASSERT(component && zenIsComponent(component),'Invalid component',arguments);
if (!component.isOfType('component')) {
alert('Only HTML components can be added to groups');
return;
}
var index = this.getChildIndex(sibling);
if (index < 0) {
alert('addChildAfter: sibling is not in this group');
return;
}
this.children.splice(index+1,0,component);
component.parent = this;
if (this.childrenMutated) {
this.childrenMutated();
}
if (refresh) {
this.refreshContents();
}
}

function _ZEN_Component_abstractGroup_addChildBefore(component,sibling,refresh) {
zenASSERT(component && zenIsComponent(component),'Invalid component',arguments);
if (!component.isOfType('component')) {
alert('Only HTML components can be added to groups');
return;
}
var index = this.getChildIndex(sibling);
if (index < 0) {
alert('addChildBefore: sibling is not in this group');
return;
}
this.children.splice(index,0,component);
component.parent = this;
if (this.childrenMutated) {
this.childrenMutated();
}
if (refresh) {
this.refreshContents();
}
}

function _ZEN_Component_abstractGroup_getChildIndex(child) {
for (var n = 0; n < this.children.length; n++) {
if (this.children[n] == child) {
return n;
}
}
return -1;
}

function _ZEN_Component_abstractGroup_onloadHandler() {
if (this.disabled && this.parent && !this.parent.disabled) {
this.setProperty('disabled',true);
}
}

function _ZEN_Component_abstractGroup_removeChild(component) {
zenPage.deleteComponent(component);
if (this.childrenMutated) {
this.childrenMutated();
}
}

function _ZEN_Component_abstractGroup_setOverlayMode(mode) {
this.overlayMode = mode;
for (var n = 0; n < this.children.length; n++) {
this.children[n].setOverlayMode(mode);
}
}

function _ZEN_Component_abstractGroup_setProperty(property,value,value2) {
switch(property) {
case 'disabled':
value = (value) ? true : false;
this.disabled = value;
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
child.setProperty(property,value);
}
if (this.ondisabledHandler) {
this.ondisabledHandler();
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_abstractGroup_setPropertyAll(property,value,value2) {
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

function _ZEN_Component_abstractGroup_updateControlsInGroup() {
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if (child.updateControlsInGroup) {
child.updateControlsInGroup();
}
else if (child.setValue) {
child.setValue(child.value);
}
}
}

function _ZEN_Component_abstractGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_abstractGroup__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_abstractGroup.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_abstractGroup.prototype;
	p.constructor = _ZEN_Component_abstractGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.abstractGroup';
	p._type = 'abstractGroup';
	p.serialize = _ZEN_Component_abstractGroup_serialize;
	p.getSettings = _ZEN_Component_abstractGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_abstractGroup_ReallyRefreshContents;
	p.addChild = _ZEN_Component_abstractGroup_addChild;
	p.addChildAfter = _ZEN_Component_abstractGroup_addChildAfter;
	p.addChildBefore = _ZEN_Component_abstractGroup_addChildBefore;
	p.getChildIndex = _ZEN_Component_abstractGroup_getChildIndex;
	p.onloadHandler = _ZEN_Component_abstractGroup_onloadHandler;
	p.removeChild = _ZEN_Component_abstractGroup_removeChild;
	p.setOverlayMode = _ZEN_Component_abstractGroup_setOverlayMode;
	p.setProperty = _ZEN_Component_abstractGroup_setProperty;
	p.setPropertyAll = _ZEN_Component_abstractGroup_setPropertyAll;
	p.updateControlsInGroup = _ZEN_Component_abstractGroup_updateControlsInGroup;
}

// ================================================================================
_zenClassIdx['activeGroup'] = '_ZEN_Component_activeGroup';
function _ZEN_Component_activeGroup(index,id) {
	if (index>=0) {_ZEN_Component_activeGroup__init(this,index,id);}
}

function _ZEN_Component_activeGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_abstractGroup__init) ?zenMaster._ZEN_Component_abstractGroup__init(o,index,id):_ZEN_Component_abstractGroup__init(o,index,id);
	o.enclosingClass = 'activeGroup';
}
function _ZEN_Component_activeGroup_serialize(set,s)
{
	s[0]='1107266678';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=set.serializeList(this,this.children,true,'children');s[9]=this.containerStyle;s[10]=(this.disabled?1:0);s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.onafterdrag;s[26]=this.onbeforedrag;s[27]=this.ondrag;s[28]=this.ondrop;s[29]=this.onhide;s[30]=this.onrefresh;s[31]=this.onshow;s[32]=this.onupdate;s[33]=this.overlayMode;s[34]=this.renderFlag;s[35]=(this.showLabel?1:0);s[36]=this.slice;s[37]=this.title;s[38]=this.tuple;s[39]=this.valign;s[40]=(this.visible?1:0);s[41]=this.width;
}
function _ZEN_Component_activeGroup_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_activeGroup_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
}

function _ZEN_Component_activeGroup_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_activeGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_activeGroup__Loader() {
	zenLoadClass('_ZEN_Component_abstractGroup');
	_ZEN_Component_activeGroup.prototype = zenCreate('_ZEN_Component_abstractGroup',-1);
	var p = _ZEN_Component_activeGroup.prototype;
	p.constructor = _ZEN_Component_activeGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_abstractGroup) ? zenMaster._ZEN_Component_abstractGroup.prototype:_ZEN_Component_abstractGroup.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.activeGroup';
	p._type = 'activeGroup';
	p.serialize = _ZEN_Component_activeGroup_serialize;
	p.getSettings = _ZEN_Component_activeGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_activeGroup_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_activeGroup_onloadHandler;
	p.setProperty = _ZEN_Component_activeGroup_setProperty;
}

// ================================================================================
_zenClassIdx['activeHGroup'] = '_ZEN_Component_activeHGroup';
function _ZEN_Component_activeHGroup(index,id) {
	if (index>=0) {_ZEN_Component_activeHGroup__init(this,index,id);}
}

function _ZEN_Component_activeHGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_activeGroup__init) ?zenMaster._ZEN_Component_activeGroup__init(o,index,id):_ZEN_Component_activeGroup__init(o,index,id);
	o.autoExpand = '';
	o.handlePattern = '';
	o.handleThickness = '';
	o.noResize = '';
	o.soundFX = '';
	o.split = '';
}
function _ZEN_Component_activeHGroup_serialize(set,s)
{
	s[0]='1459445051';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.autoExpand;s[8]=this.aux;s[9]=set.serializeList(this,this.children,true,'children');s[10]=this.containerStyle;s[11]=(this.disabled?1:0);s[12]=(this.dragEnabled?1:0);s[13]=(this.dropEnabled?1:0);s[14]=(this.dynamic?1:0);s[15]=this.enclosingClass;s[16]=this.enclosingStyle;s[17]=this.error;s[18]=this.handlePattern;s[19]=this.handleThickness;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=this.label;s[26]=this.labelClass;s[27]=this.labelStyle;s[28]=this.noResize;s[29]=this.onafterdrag;s[30]=this.onbeforedrag;s[31]=this.ondrag;s[32]=this.ondrop;s[33]=this.onhide;s[34]=this.onrefresh;s[35]=this.onshow;s[36]=this.onupdate;s[37]=this.overlayMode;s[38]=this.renderFlag;s[39]=(this.showLabel?1:0);s[40]=this.slice;s[41]=this.soundFX;s[42]=this.split;s[43]=this.title;s[44]=this.tuple;s[45]=this.valign;s[46]=(this.visible?1:0);s[47]=this.width;
}
function _ZEN_Component_activeHGroup_getSettings(s)
{
	s['name'] = 'string';
	s['autoExpand'] = 'string';
	s['handlePattern'] = 'string';
	s['handleThickness'] = 'string';
	s['noResize'] = 'string';
	s['soundFX'] = 'string';
	s['split'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_activeHGroup_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZLM.registerManagerClass("activeHGroup",ZLM_AHG.initActiveHGroup);
ZLM.initLayout();
}

function _ZEN_Component_activeHGroup_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_activeHGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_activeHGroup__Loader() {
	zenLoadClass('_ZEN_Component_activeGroup');
	_ZEN_Component_activeHGroup.prototype = zenCreate('_ZEN_Component_activeGroup',-1);
	var p = _ZEN_Component_activeHGroup.prototype;
	p.constructor = _ZEN_Component_activeHGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_activeGroup) ? zenMaster._ZEN_Component_activeGroup.prototype:_ZEN_Component_activeGroup.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.activeHGroup';
	p._type = 'activeHGroup';
	p.serialize = _ZEN_Component_activeHGroup_serialize;
	p.getSettings = _ZEN_Component_activeHGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_activeHGroup_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_activeHGroup_onloadHandler;
	p.setProperty = _ZEN_Component_activeHGroup_setProperty;
}

// ================================================================================
_zenClassIdx['activeVGroup'] = '_ZEN_Component_activeVGroup';
function _ZEN_Component_activeVGroup(index,id) {
	if (index>=0) {_ZEN_Component_activeVGroup__init(this,index,id);}
}

function _ZEN_Component_activeVGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_activeGroup__init) ?zenMaster._ZEN_Component_activeGroup__init(o,index,id):_ZEN_Component_activeGroup__init(o,index,id);
	o.autoExpand = '';
	o.handlePattern = '';
	o.handleThickness = '';
	o.noResize = '';
	o.soundFX = '';
	o.split = '';
}
function _ZEN_Component_activeVGroup_serialize(set,s)
{
	s[0]='1459445051';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.autoExpand;s[8]=this.aux;s[9]=set.serializeList(this,this.children,true,'children');s[10]=this.containerStyle;s[11]=(this.disabled?1:0);s[12]=(this.dragEnabled?1:0);s[13]=(this.dropEnabled?1:0);s[14]=(this.dynamic?1:0);s[15]=this.enclosingClass;s[16]=this.enclosingStyle;s[17]=this.error;s[18]=this.handlePattern;s[19]=this.handleThickness;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=this.label;s[26]=this.labelClass;s[27]=this.labelStyle;s[28]=this.noResize;s[29]=this.onafterdrag;s[30]=this.onbeforedrag;s[31]=this.ondrag;s[32]=this.ondrop;s[33]=this.onhide;s[34]=this.onrefresh;s[35]=this.onshow;s[36]=this.onupdate;s[37]=this.overlayMode;s[38]=this.renderFlag;s[39]=(this.showLabel?1:0);s[40]=this.slice;s[41]=this.soundFX;s[42]=this.split;s[43]=this.title;s[44]=this.tuple;s[45]=this.valign;s[46]=(this.visible?1:0);s[47]=this.width;
}
function _ZEN_Component_activeVGroup_getSettings(s)
{
	s['name'] = 'string';
	s['autoExpand'] = 'string';
	s['handlePattern'] = 'string';
	s['handleThickness'] = 'string';
	s['noResize'] = 'string';
	s['soundFX'] = 'string';
	s['split'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_activeVGroup_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZLM.registerManagerClass("activeVGroup",ZLM_AVG.initActiveVGroup);
ZLM.initLayout();
}

function _ZEN_Component_activeVGroup_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_activeVGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_activeVGroup__Loader() {
	zenLoadClass('_ZEN_Component_activeGroup');
	_ZEN_Component_activeVGroup.prototype = zenCreate('_ZEN_Component_activeGroup',-1);
	var p = _ZEN_Component_activeVGroup.prototype;
	p.constructor = _ZEN_Component_activeVGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_activeGroup) ? zenMaster._ZEN_Component_activeGroup.prototype:_ZEN_Component_activeGroup.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.activeVGroup';
	p._type = 'activeVGroup';
	p.serialize = _ZEN_Component_activeVGroup_serialize;
	p.getSettings = _ZEN_Component_activeVGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_activeVGroup_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_activeVGroup_onloadHandler;
	p.setProperty = _ZEN_Component_activeVGroup_setProperty;
}

// ================================================================================
_zenClassIdx['corkboard'] = '_ZEN_Component_corkboard';
function _ZEN_Component_corkboard(index,id) {
	if (index>=0) {_ZEN_Component_corkboard__init(this,index,id);}
}

function _ZEN_Component_corkboard__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_activeGroup__init) ?zenMaster._ZEN_Component_activeGroup__init(o,index,id):_ZEN_Component_activeGroup__init(o,index,id);
}
function _ZEN_Component_corkboard_serialize(set,s)
{
	s[0]='1107266678';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=set.serializeList(this,this.children,true,'children');s[9]=this.containerStyle;s[10]=(this.disabled?1:0);s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.onafterdrag;s[26]=this.onbeforedrag;s[27]=this.ondrag;s[28]=this.ondrop;s[29]=this.onhide;s[30]=this.onrefresh;s[31]=this.onshow;s[32]=this.onupdate;s[33]=this.overlayMode;s[34]=this.renderFlag;s[35]=(this.showLabel?1:0);s[36]=this.slice;s[37]=this.title;s[38]=this.tuple;s[39]=this.valign;s[40]=(this.visible?1:0);s[41]=this.width;
}
function _ZEN_Component_corkboard_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_corkboard_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZLM.registerManagerClass("corkboardGroup",ZLM_VCB.initCorkboard);
ZLM.initLayout();
}

function _ZEN_Component_corkboard_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_corkboard_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_corkboard__Loader() {
	zenLoadClass('_ZEN_Component_activeGroup');
	_ZEN_Component_corkboard.prototype = zenCreate('_ZEN_Component_activeGroup',-1);
	var p = _ZEN_Component_corkboard.prototype;
	p.constructor = _ZEN_Component_corkboard;
	p.superClass = ('undefined' == typeof _ZEN_Component_activeGroup) ? zenMaster._ZEN_Component_activeGroup.prototype:_ZEN_Component_activeGroup.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.corkboard';
	p._type = 'corkboard';
	p.serialize = _ZEN_Component_corkboard_serialize;
	p.getSettings = _ZEN_Component_corkboard_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_corkboard_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_corkboard_onloadHandler;
	p.setProperty = _ZEN_Component_corkboard_setProperty;
}

// ================================================================================
_zenClassIdx['desktop'] = '_ZEN_Component_desktop';
function _ZEN_Component_desktop(index,id) {
	if (index>=0) {_ZEN_Component_desktop__init(this,index,id);}
}

function _ZEN_Component_desktop__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_activeGroup__init) ?zenMaster._ZEN_Component_activeGroup__init(o,index,id):_ZEN_Component_activeGroup__init(o,index,id);
	o.colStyle = '';
	o.rowStyle = 'ALIGN_ROW_TOP';
}
function _ZEN_Component_desktop_serialize(set,s)
{
	s[0]='243468980';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=set.serializeList(this,this.children,true,'children');s[9]=this.colStyle;s[10]=this.containerStyle;s[11]=(this.disabled?1:0);s[12]=(this.dragEnabled?1:0);s[13]=(this.dropEnabled?1:0);s[14]=(this.dynamic?1:0);s[15]=this.enclosingClass;s[16]=this.enclosingStyle;s[17]=this.error;s[18]=this.height;s[19]=(this.hidden?1:0);s[20]=this.hint;s[21]=this.hintClass;s[22]=this.hintStyle;s[23]=this.label;s[24]=this.labelClass;s[25]=this.labelStyle;s[26]=this.onafterdrag;s[27]=this.onbeforedrag;s[28]=this.ondrag;s[29]=this.ondrop;s[30]=this.onhide;s[31]=this.onrefresh;s[32]=this.onshow;s[33]=this.onupdate;s[34]=this.overlayMode;s[35]=this.renderFlag;s[36]=this.rowStyle;s[37]=(this.showLabel?1:0);s[38]=this.slice;s[39]=this.title;s[40]=this.tuple;s[41]=this.valign;s[42]=(this.visible?1:0);s[43]=this.width;
}
function _ZEN_Component_desktop_getSettings(s)
{
	s['name'] = 'string';
	s['colStyle'] = 'enum:,FILL_COLUMN,ALIGN_COLUMN_LEFT,ALIGN_COLUMN_CENTER,ALIGN_COLUMN_RIGHT,FILL_WIDTH,ALIGN_WIDTH_LEFT,ALIGN_WIDTH_CENTER,ALIGN_WIDTH_RIGHT,FILL_UNIFORM,ALIGN_UNIFORM_LEFT,ALIGN_UNIFORM_CENTER,ALIGN_UNIFORM_RIGHT';
	s['rowStyle'] = 'enum:FILL_ROW,ALIGN_ROW_TOP,ALIGN_ROW_CENTER,ALIGN_ROW_BOTTOM,FILL_UNIFORM,ALIGN_UNIFORM_TOP,ALIGN_UNIFORM_CENTER,ALIGN_UNIFORM_BOTTOM';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_desktop_getState() {
var manager = ZLM.getGroupManager("desktop_"+this.index);
if (manager) {
return(manager.getState(manager.engine));
}
return(null);
}

function _ZEN_Component_desktop_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZLM.registerManagerClass("desktopGroup",ZLM_VDP.initDesktop);
ZLM.initLayout();
}

function _ZEN_Component_desktop_restoreState(layout) {
var manager = ZLM.getGroupManager("desktop_"+this.index);
if (manager) {
manager.restoreState(manager.engine,layout);
}
}

function _ZEN_Component_desktop_setColumnStyle(style) {
var manager = ZLM.getGroupManager("desktop_"+this.index);
if (manager) {
manager.setColumnStyle(manager.engine,style);
}
}

function _ZEN_Component_desktop_setProperty(property,value,value2) {
switch(property) {
case 'rowStyle':
var desk = this.getEnclosingDiv();
desk.setRowStyle(value);
break;
case 'colStyle' :
var desk = this.getEnclosingDiv();
desk.setColStyle(value);
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_desktop_setRowStyle(style) {
var manager = ZLM.getGroupManager("desktop_"+this.index);
if (manager) {
manager.setRowStyle(manager.engine,style);
}
}

function _ZEN_Component_desktop_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_desktop__Loader() {
	zenLoadClass('_ZEN_Component_activeGroup');
	_ZEN_Component_desktop.prototype = zenCreate('_ZEN_Component_activeGroup',-1);
	var p = _ZEN_Component_desktop.prototype;
	p.constructor = _ZEN_Component_desktop;
	p.superClass = ('undefined' == typeof _ZEN_Component_activeGroup) ? zenMaster._ZEN_Component_activeGroup.prototype:_ZEN_Component_activeGroup.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.desktop';
	p._type = 'desktop';
	p.serialize = _ZEN_Component_desktop_serialize;
	p.getSettings = _ZEN_Component_desktop_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_desktop_ReallyRefreshContents;
	p.getState = _ZEN_Component_desktop_getState;
	p.onloadHandler = _ZEN_Component_desktop_onloadHandler;
	p.restoreState = _ZEN_Component_desktop_restoreState;
	p.setColumnStyle = _ZEN_Component_desktop_setColumnStyle;
	p.setProperty = _ZEN_Component_desktop_setProperty;
	p.setRowStyle = _ZEN_Component_desktop_setRowStyle;
}

// ================================================================================
_zenClassIdx['group'] = '_ZEN_Component_group';
function _ZEN_Component_group(index,id) {
	if (index>=0) {_ZEN_Component_group__init(this,index,id);}
}

function _ZEN_Component_group__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_abstractGroup__init) ?zenMaster._ZEN_Component_abstractGroup__init(o,index,id):_ZEN_Component_abstractGroup__init(o,index,id);
	o.cellAlign = '';
	o.cellSize = '';
	o.cellStyle = '';
	o.cellVAlign = '';
	o.groupClass = 'group';
	o.groupStyle = '';
	o.labelPosition = 'top';
	o.layout = 'vertical';
	o.onclick = '';
}
function _ZEN_Component_group_serialize(set,s)
{
	s[0]='4052196350';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.renderFlag;s[44]=(this.showLabel?1:0);s[45]=this.slice;s[46]=this.title;s[47]=this.tuple;s[48]=this.valign;s[49]=(this.visible?1:0);s[50]=this.width;
}
function _ZEN_Component_group_getSettings(s)
{
	s['name'] = 'string';
	s['cellAlign'] = 'enum:left,right,center,even';
	s['cellSize'] = 'enum:same,stretch';
	s['cellStyle'] = 'style';
	s['cellVAlign'] = 'enum:top,bottom,middle,even';
	s['groupClass'] = 'cssClass';
	s['groupStyle'] = 'style';
	s['labelPosition'] = 'enum:left,top';
	s['layout'] = 'string';
	s['onclick'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_group_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_group_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_group__Loader() {
	zenLoadClass('_ZEN_Component_abstractGroup');
	_ZEN_Component_group.prototype = zenCreate('_ZEN_Component_abstractGroup',-1);
	var p = _ZEN_Component_group.prototype;
	p.constructor = _ZEN_Component_group;
	p.superClass = ('undefined' == typeof _ZEN_Component_abstractGroup) ? zenMaster._ZEN_Component_abstractGroup.prototype:_ZEN_Component_abstractGroup.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.group';
	p._type = 'group';
	p.serialize = _ZEN_Component_group_serialize;
	p.getSettings = _ZEN_Component_group_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_group_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_group_setProperty;
}

// ================================================================================
_zenClassIdx['page'] = '_ZEN_Component_abstractPage';
function _ZEN_Component_abstractPage(index,id) {
	if (index>=0) {_ZEN_Component_abstractPage__init(this,index,id);}
}

function _ZEN_Component_abstractPage__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.SVGClassList = '';
	o.UserSVGPackageList = '';
	o.backgroundTimerInterval = '1000';
	o.cellVAlign = 'top';
	o.designMode = false;
	o.dragAndDrop = false;
	o.groupClass = 'page';
	o.height = '100%';
	o.isPopup = false;
	o.lastModalIndex = '0';
	o.nextIndex = '0';
	o.onoverlay = '';
	o.popupParent = '';
	o.title = '';
	o.useSVG = false;
	o.width = '100%';
}
function _ZEN_Component_abstractPage_serialize(set,s)
{
	s[0]='3504261621';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.SVGClassList;s[7]=this.UserSVGPackageList;s[8]=this.align;s[9]=this.aux;s[10]=this.backgroundTimerInterval;s[11]=this.cellAlign;s[12]=this.cellSize;s[13]=this.cellStyle;s[14]=this.cellVAlign;s[15]=set.serializeList(this,this.children,true,'children');s[16]=this.containerStyle;s[17]=(this.designMode?1:0);s[18]=(this.disabled?1:0);s[19]=(this.dragAndDrop?1:0);s[20]=(this.dragEnabled?1:0);s[21]=(this.dropEnabled?1:0);s[22]=(this.dynamic?1:0);s[23]=this.enclosingClass;s[24]=this.enclosingStyle;s[25]=this.error;s[26]=this.groupClass;s[27]=this.groupStyle;s[28]=this.height;s[29]=(this.hidden?1:0);s[30]=this.hint;s[31]=this.hintClass;s[32]=this.hintStyle;s[33]=(this.isPopup?1:0);s[34]=this.label;s[35]=this.labelClass;s[36]=this.labelPosition;s[37]=this.labelStyle;s[38]=this.lastModalIndex;s[39]=this.layout;s[40]=this.nextIndex;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.ondrag;s[45]=this.ondrop;s[46]=this.onhide;s[47]=this.onoverlay;s[48]=this.onrefresh;s[49]=this.onshow;s[50]=this.onupdate;s[51]=this.overlayMode;s[52]=this.popupParent;s[53]=this.renderFlag;s[54]=(this.showLabel?1:0);s[55]=this.slice;s[56]=this.title;s[57]=this.tuple;s[58]=(this.useSVG?1:0);s[59]=this.valign;s[60]=(this.visible?1:0);s[61]=this.width;
}
function _ZEN_Component_abstractPage_getSettings(s)
{
	s['name'] = 'string';
	s['SVGClassList'] = 'string';
	s['UserSVGPackageList'] = 'string';
	s['backgroundTimerInterval'] = 'integer';
	s['dragAndDrop'] = 'boolean';
	s['isPopup'] = 'boolean';
	s['lastModalIndex'] = 'integer';
	s['nextIndex'] = 'integer';
	s['onoverlay'] = 'eventHandler';
	s['popupParent'] = 'integer';
	s['title'] = 'caption';
	s['useSVG'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_abstractPage_backgroundTimerHandler() {
if (this._bgTaskID) {
this.MonitorBackgroundTask(this._bgTaskID);
}
}

function _ZEN_Component_abstractPage_cancelPopup() {
if (zenASSERT(this.isPopup,"cancelPopup called on non-popup window.",arguments)) { return; }
window.close();
}

function _ZEN_Component_abstractPage_clearBackgroundTask() {
if (null != this._bgTimerID) {
self.clearTimeout(this._bgTimerID);
delete this._bgTimerID;
}
delete this._bgTaskID;
}

function _ZEN_Component_abstractPage_createComponent(name) {
return this.createComponentNS('',name);
}

function _ZEN_Component_abstractPage_createComponentNS(ns,name,parent,div) {
var component = null;
try {
if (div && div.zen) {
alert('ZEN ERROR:\ncreateComponentNS: Attempt to create a component within a div element already in use:\n----------------\n'+ div.zen);
return null;
}
ns = ('zen' == ns) ? '' : ns;
ns = (ZENNS == ns) ? '' : ns;
var idx = ('' == ns) ? name : (ns+'/'+name);
var cls = _zenClassIdx[idx];
if (cls) {
this.nextIndex++;
var index = this.nextIndex;
var id = '';  // set this via settings
component = zenCreate(cls,index,id);
}
else {
alert('ZEN ERROR:\ncreateComponentNS: Unable to find component:\n----------------\n'+ idx);
}
if (component && parent) {
parent.addChild(component);
if (div) {
div.id = 'zen' + component.index;
div.zen = component.index;
component.refreshContents(true);
}
}
}
catch(ex) {
zenExceptionHandler(ex,arguments,'Error in createComponentNS.');
}
return component;
}

function _ZEN_Component_abstractPage_deleteComponent(comp,refresh,sync) {
zenASSERT(comp,"Attempt to delete invalid object",arguments);
refresh = ('undefined' == typeof refresh) ? true : sync;
sync = ('undefined' == typeof sync) ? false : sync;
if (comp.onDelete) {
comp.onDelete();
}
var group = comp.parent;
if (null != group) {
for (var n = 0; n < group.children.length; n++) {
if (comp == group.children[n]) {
group.children.splice(n,1);
comp.parent = '';
if (refresh && comp.visible && ('undefined' == typeof comp.svgComponent)) {
group.refreshContents(sync);
}
break;
}
}
}
if ('' != comp.index) {
_zenIndex[comp.index] = null;
}
if ('' != comp.id) {
delete _zenIds[comp.id];
}
}

function _ZEN_Component_abstractPage_endModal() {
if (zenASSERT(this.modalStack && (this.modalStack.length>0),"endModal should not be called while there is no current modal component.",arguments)) { return; }
var trap = self.document.getElementById("zenMouseTrap");
if (zenASSERT(trap,"Unable to find zenMouseTrap div.",arguments)) { return; }
var component = this.modalStack[this.modalStack.length - 1];
this.modalStack.length = this.modalStack.length - 1;
if (0 == this.modalStack.length) {
trap.style.display = "none";
trap.onmouseup = null;
trap.onmousedown = null;
trap.onmousemove = null;
if (this._hideEmbeds && self.document.embeds) {
this._hideEmbeds = false;
for (var n = 0; n < self.document.embeds.length; n++) {
self.document.embeds[n].style.display = '';
}
}
}
else {
trap.style.zIndex = 100 + (this.modalStack.length*10);
}
var zindex = (this.modalStack.length>0) ? (100 + (this.modalStack.length*10)) : 0;
if (component.onEndModalHandler) {
component.onEndModalHandler(zindex);
}
else {
component.setHidden(true);
}
}

function _ZEN_Component_abstractPage_fireOnLoadEvent() {
if (this.dragAndDrop && ZLM) {
ZLM.initDataDragDrop();
}
for (var n = _zenIndex.length - 1; n >= 0; n--) {
if (_zenIndex[n] && _zenIndex[n].onloadHandler) {
_zenIndex[n].onloadHandler();
}
}
return true;
}

function _ZEN_Component_abstractPage_fireOnResizeEvent() {
if (zenPage.onresizeHandler) {
zenPage.onresizeHandler();
}
return true;
}

function _ZEN_Component_abstractPage_fireOnUnloadEvent() {
var hasRet = false;
var msg = '';
for (var n = _zenIndex.length - 1; n >= 0; n--) {
if (_zenIndex[n] && _zenIndex[n].onunloadHandler) {
var val = _zenIndex[n].onunloadHandler();
if (!hasRet) {
val = (null == val) ? true : ((typeof val == 'string') ? val : true);
if (typeof val == 'string') {
hasRet = true;
msg = val;
}
}
}
}
if (hasRet) {
return msg;
}
return true;
}

function _ZEN_Component_abstractPage_firePopupAction(action,value,close) {
if (zenASSERT(this.isPopup,"firePopupAction called on non-popup window.",arguments)) { return; }
action = zenGet(action,'ok');
value = zenGet(value);
close = zenGet(close,true);
if ('string' == typeof action) {
action = decodeURIComponent(action);
}
if ('string' == typeof value) {
value = decodeURIComponent(value);
}
if (window.dialogArguments && window.dialogArguments.popupActionHandler) {
window.dialogArguments.popupActionHandler(this.popupParent,window.dialogArguments._popupName,action,value);
}
else if (window.opener && window.opener.zenPage.popupActionHandler) {
var mode = window.opener.zenSynchronousMode;
window.opener.zenSynchronousMode = true;
window.opener.zenPage.popupActionHandler(this.popupParent,window.opener.zenPage._popupName,action,value);
window.opener.zenPopupWindow = null;
window.opener.zenSynchronousMode = mode;
}
if (close) {
window.close();
}
delete this._popupName;
}

function _ZEN_Component_abstractPage_getComponent(index) {
if ('string'==typeof(index)) {
var p = index.split('.');
if (p.length>1) {
var comp = _zenIndex[p[0]];
if (comp) {
comp.tuple = p[1];
}
return comp;
}
}
return _zenIndex[index];
}

function _ZEN_Component_abstractPage_getComponentById(id,tuple) {
var comp = _zenIds[id];
if (comp && 'undefined' != tuple) {
comp.tuple = tuple;
}
return comp;
}

function _ZEN_Component_abstractPage_gotoPage(url) {
if (null!=url && ''!=url) {
self.document.location = zenLink(url);
}
}

function _ZEN_Component_abstractPage_launchPopupWindow(url,pageName,features,parms,parent) {
zenLaunchPopupWindow(url, pageName, features,parms,parent);
}

function _ZEN_Component_abstractPage_onloadHandler() {
}

function _ZEN_Component_abstractPage_onoverlayHandler(index) {
zenInvokeCallbackMethod(this.onoverlay,this,'onoverlay','index',index);
}

function _ZEN_Component_abstractPage_popupActionHandler(parent,name,action,value) {
if ('' == parent || null == parent) {
if (this.onPopupAction) {
this.onPopupAction(name,action,value);
}
}
else {
var comp = this.getComponent(parent);
if (comp && comp.onPopupAction) {
comp.onPopupAction(name,action,value);
}
}
}

function _ZEN_Component_abstractPage_setBackgroundTask(taskid) {
this.clearBackgroundTask();
this._bgTaskID = taskid;
this._bgTimerID = self.setTimeout("zenPage.backgroundTimerHandler()",this.backgroundTimerInterval);
}

function _ZEN_Component_abstractPage_setComponentId(obj,id) {
var div = null;
if (obj.getEnclosingDiv) {
div = obj.getEnclosingDiv();
}
if ('' != obj.id) {
delete _zenIds[obj.id];
}
obj.id = id;
if ('' != obj.id) {
_zenIds[obj.id] = obj;
}
if (div) {
div.id = (''==obj.id) ? 'zen' + obj.index : obj.id;
}
}

function _ZEN_Component_abstractPage_setTraceOption(name,flag) {
switch(name) {
case 'serialize':
zenDEBUGSerialize = flag;
break;
case 'js':
cspRunServerDebugWindow	= flag;
break;
case 'events':
zenDEBUGTraceEvents = flag;
if (flag) {
zenTRACE("TRACE started",this.title,'');
}
break;
}
}

function _ZEN_Component_abstractPage_startModal(component) {
if (zenASSERT(component&&zenIsComponent(component),"startModal called with an invalid component.",arguments)) { return; }
var trap = self.document.getElementById("zenMouseTrap");
if (zenASSERT(trap,"Unable to find zenMouseTrap div.",arguments)) { return; }
if (null == this.modalStack) {
this.modalStack = new Array();
}
this.modalStack[this.modalStack.length] = component;
trap.style.display = "";
trap.style.zIndex = 100 + (this.modalStack.length*10);
trap.onmouseup = function() {zenPage.endModal();}
trap.onmousedown = null;
trap.onmousemove = null;
trap.style.background = (zenModalBackground ? zenModalBackground : 'gray');
if (trap.style.opacity != null) {
trap.style.opacity = '0.1';
}
else if (trap.style.filter != null) {
trap.style.filter = 'alpha(opacity=10)';
if (self.document.embeds) {
this._hideEmbeds = true;
for (var n = 0; n < self.document.embeds.length; n++) {
self.document.embeds[n].style.display = 'none';
}
}
}
var page = zenPage.getEnclosingDiv();
zenASSERT(page,"Unable to find enclosing div for page.",arguments);
trap.style.width=document.body.clientWidth;
trap.style.height=document.body.clientHeight;
trap.style.top="0px";
trap.style.left="0px";
var zindex = 101 + (this.modalStack.length*10);
if (component.onStartModalHandler) {
component.onStartModalHandler(zindex);
}
else {
var enc  = component.getEnclosingDiv();
enc.style.position = "absolute";
enc.style.zIndex = zindex;
component.setHidden(false);
}
}

function _ZEN_Component_abstractPage_MonitorBackgroundTask(pTaskID) {
	zenClassMethod(this,'MonitorBackgroundTask','L','',arguments);
}

function _ZEN_Component_abstractPage_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_abstractPage__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_abstractPage.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_abstractPage.prototype;
	p.constructor = _ZEN_Component_abstractPage;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.abstractPage';
	p._type = 'abstractPage';
	p.serialize = _ZEN_Component_abstractPage_serialize;
	p.getSettings = _ZEN_Component_abstractPage_getSettings;
	p.MonitorBackgroundTask = _ZEN_Component_abstractPage_MonitorBackgroundTask;
	p.ReallyRefreshContents = _ZEN_Component_abstractPage_ReallyRefreshContents;
	p.backgroundTimerHandler = _ZEN_Component_abstractPage_backgroundTimerHandler;
	p.cancelPopup = _ZEN_Component_abstractPage_cancelPopup;
	p.clearBackgroundTask = _ZEN_Component_abstractPage_clearBackgroundTask;
	p.createComponent = _ZEN_Component_abstractPage_createComponent;
	p.createComponentNS = _ZEN_Component_abstractPage_createComponentNS;
	p.deleteComponent = _ZEN_Component_abstractPage_deleteComponent;
	p.endModal = _ZEN_Component_abstractPage_endModal;
	p.fireOnLoadEvent = _ZEN_Component_abstractPage_fireOnLoadEvent;
	p.fireOnResizeEvent = _ZEN_Component_abstractPage_fireOnResizeEvent;
	p.fireOnUnloadEvent = _ZEN_Component_abstractPage_fireOnUnloadEvent;
	p.firePopupAction = _ZEN_Component_abstractPage_firePopupAction;
	p.getComponent = _ZEN_Component_abstractPage_getComponent;
	p.getComponentById = _ZEN_Component_abstractPage_getComponentById;
	p.gotoPage = _ZEN_Component_abstractPage_gotoPage;
	p.launchPopupWindow = _ZEN_Component_abstractPage_launchPopupWindow;
	p.onloadHandler = _ZEN_Component_abstractPage_onloadHandler;
	p.onoverlayHandler = _ZEN_Component_abstractPage_onoverlayHandler;
	p.popupActionHandler = _ZEN_Component_abstractPage_popupActionHandler;
	p.setBackgroundTask = _ZEN_Component_abstractPage_setBackgroundTask;
	p.setComponentId = _ZEN_Component_abstractPage_setComponentId;
	p.setTraceOption = _ZEN_Component_abstractPage_setTraceOption;
	p.startModal = _ZEN_Component_abstractPage_startModal;
}

// ================================================================================
_zenClassIdx['page'] = '_ZEN_Component_page';
function _ZEN_Component_page(index,id) {
	if (index>=0) {_ZEN_Component_page__init(this,index,id);}
}

function _ZEN_Component_page__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_abstractPage__init) ?zenMaster._ZEN_Component_abstractPage__init(o,index,id):_ZEN_Component_abstractPage__init(o,index,id);
}
function _ZEN_Component_page_serialize(set,s)
{
	s[0]='3504261621';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.SVGClassList;s[7]=this.UserSVGPackageList;s[8]=this.align;s[9]=this.aux;s[10]=this.backgroundTimerInterval;s[11]=this.cellAlign;s[12]=this.cellSize;s[13]=this.cellStyle;s[14]=this.cellVAlign;s[15]=set.serializeList(this,this.children,true,'children');s[16]=this.containerStyle;s[17]=(this.designMode?1:0);s[18]=(this.disabled?1:0);s[19]=(this.dragAndDrop?1:0);s[20]=(this.dragEnabled?1:0);s[21]=(this.dropEnabled?1:0);s[22]=(this.dynamic?1:0);s[23]=this.enclosingClass;s[24]=this.enclosingStyle;s[25]=this.error;s[26]=this.groupClass;s[27]=this.groupStyle;s[28]=this.height;s[29]=(this.hidden?1:0);s[30]=this.hint;s[31]=this.hintClass;s[32]=this.hintStyle;s[33]=(this.isPopup?1:0);s[34]=this.label;s[35]=this.labelClass;s[36]=this.labelPosition;s[37]=this.labelStyle;s[38]=this.lastModalIndex;s[39]=this.layout;s[40]=this.nextIndex;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.ondrag;s[45]=this.ondrop;s[46]=this.onhide;s[47]=this.onoverlay;s[48]=this.onrefresh;s[49]=this.onshow;s[50]=this.onupdate;s[51]=this.overlayMode;s[52]=this.popupParent;s[53]=this.renderFlag;s[54]=(this.showLabel?1:0);s[55]=this.slice;s[56]=this.title;s[57]=this.tuple;s[58]=(this.useSVG?1:0);s[59]=this.valign;s[60]=(this.visible?1:0);s[61]=this.width;
}
function _ZEN_Component_page_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_page_MonitorBackgroundTask(pTaskID) {
	zenClassMethod(this,'MonitorBackgroundTask','L','',arguments);
}

function _ZEN_Component_page_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_page__Loader() {
	zenLoadClass('_ZEN_Component_abstractPage');
	_ZEN_Component_page.prototype = zenCreate('_ZEN_Component_abstractPage',-1);
	var p = _ZEN_Component_page.prototype;
	p.constructor = _ZEN_Component_page;
	p.superClass = ('undefined' == typeof _ZEN_Component_abstractPage) ? zenMaster._ZEN_Component_abstractPage.prototype:_ZEN_Component_abstractPage.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.page';
	p._type = 'page';
	p.serialize = _ZEN_Component_page_serialize;
	p.getSettings = _ZEN_Component_page_getSettings;
	p.MonitorBackgroundTask = _ZEN_Component_page_MonitorBackgroundTask;
	p.ReallyRefreshContents = _ZEN_Component_page_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['buttonBar'] = '_ZEN_Component_buttonBar';
function _ZEN_Component_buttonBar(index,id) {
	if (index>=0) {_ZEN_Component_buttonBar__init(this,index,id);}
}

function _ZEN_Component_buttonBar__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
}
function _ZEN_Component_buttonBar_serialize(set,s)
{
	s[0]='4052196350';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.renderFlag;s[44]=(this.showLabel?1:0);s[45]=this.slice;s[46]=this.title;s[47]=this.tuple;s[48]=this.valign;s[49]=(this.visible?1:0);s[50]=this.width;
}
function _ZEN_Component_buttonBar_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_buttonBar_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZMS.initialize();
var div =this.getEnclosingDiv();
for(var k=div.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.className=="buttonBar") {
div.buttonBar=k;
ZMS.sizeButtonBar(k);
ZLM.notifyResize(document.body);
return;
}
}
}

function _ZEN_Component_buttonBar_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_buttonBar_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_buttonBar__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_buttonBar.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_buttonBar.prototype;
	p.constructor = _ZEN_Component_buttonBar;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.buttonBar';
	p._type = 'buttonBar';
	p.serialize = _ZEN_Component_buttonBar_serialize;
	p.getSettings = _ZEN_Component_buttonBar_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_buttonBar_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_buttonBar_onloadHandler;
	p.setProperty = _ZEN_Component_buttonBar_setProperty;
}

// ================================================================================
_zenClassIdx['composite'] = '_ZEN_Component_composite';
function _ZEN_Component_composite(index,id) {
	if (index>=0) {_ZEN_Component_composite__init(this,index,id);}
}

function _ZEN_Component_composite__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.childrenCreated = false;
}
function _ZEN_Component_composite_serialize(set,s)
{
	s[0]='4157585797';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=(this.childrenCreated?1:0);s[14]=this.containerStyle;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=(this.hidden?1:0);s[26]=this.hint;s[27]=this.hintClass;s[28]=this.hintStyle;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelPosition;s[32]=this.labelStyle;s[33]=this.layout;s[34]=this.onafterdrag;s[35]=this.onbeforedrag;s[36]=this.onclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onhide;s[40]=this.onrefresh;s[41]=this.onshow;s[42]=this.onupdate;s[43]=this.overlayMode;s[44]=this.renderFlag;s[45]=(this.showLabel?1:0);s[46]=this.slice;s[47]=this.title;s[48]=this.tuple;s[49]=this.valign;s[50]=(this.visible?1:0);s[51]=this.width;
}
function _ZEN_Component_composite_getSettings(s)
{
	s['name'] = 'string';
	s['childrenCreated'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_composite_getChildById(id) {
var cid = (''==this.id) ? 'id'+this.index : this.id;
return zenPage.getComponentById(cid+'.'+id);
}

function _ZEN_Component_composite_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_composite__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_composite.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_composite.prototype;
	p.constructor = _ZEN_Component_composite;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.composite';
	p._type = 'composite';
	p.serialize = _ZEN_Component_composite_serialize;
	p.getSettings = _ZEN_Component_composite_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_composite_ReallyRefreshContents;
	p.getChildById = _ZEN_Component_composite_getChildById;
}

// ================================================================================
_zenClassIdx['tableNavigator'] = '_ZEN_Component_tableNavigator';
function _ZEN_Component_tableNavigator(index,id) {
	if (index>=0) {_ZEN_Component_tableNavigator__init(this,index,id);}
}

function _ZEN_Component_tableNavigator__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_composite__init) ?zenMaster._ZEN_Component_composite__init(o,index,id):_ZEN_Component_composite__init(o,index,id);
	o.tablePaneId = '';
}
function _ZEN_Component_tableNavigator_serialize(set,s)
{
	s[0]='2463567212';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=(this.childrenCreated?1:0);s[14]=this.containerStyle;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=(this.hidden?1:0);s[26]=this.hint;s[27]=this.hintClass;s[28]=this.hintStyle;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelPosition;s[32]=this.labelStyle;s[33]=this.layout;s[34]=this.onafterdrag;s[35]=this.onbeforedrag;s[36]=this.onclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onhide;s[40]=this.onrefresh;s[41]=this.onshow;s[42]=this.onupdate;s[43]=this.overlayMode;s[44]=this.renderFlag;s[45]=(this.showLabel?1:0);s[46]=this.slice;s[47]=this.tablePaneId;s[48]=this.title;s[49]=this.tuple;s[50]=this.valign;s[51]=(this.visible?1:0);s[52]=this.width;
}
function _ZEN_Component_tableNavigator_getSettings(s)
{
	s['name'] = 'string';
	s['tablePaneId'] = 'id';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_tableNavigator_gotoPage(where) {
if (null == this.tablePane) return;
switch(where) {
case 'first':
this.tablePane.firstPage();
break;
case 'last':
this.tablePane.lastPage();
break;
case 'next':
this.tablePane.nextPage();
break;
case 'prev':
this.tablePane.previousPage();
break;
default:
var page = parseInt(where,10);
if (!isNaN(page)) {
this.tablePane.gotoPage(page);
}
break;
}
}

function _ZEN_Component_tableNavigator_renderContents() {
this.setProperty('tablePaneId',this.tablePaneId);
}

function _ZEN_Component_tableNavigator_setProperty(property,value,value2) {
switch(property) {
case 'tablePaneId':
if (this.tablePane && this.tablePane.removeNavigator) {
this.tablePane.removeNavigator();
this.tablePane = null;
}
this.tablePaneId = value;
if (this.composite) {
this.tablePane = this.composite.getChildById(this.tablePaneId);
}
else {
this.tablePane = zenPage.getComponentById(this.tablePaneId);
}
if (this.tablePane && this.tablePane.addNavigator) {
this.tablePane.addNavigator(this);
}
this.updateState();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_tableNavigator_updateState() {
var btnFirst = this.getChildById('btnFirst');
var btnPrev = this.getChildById('btnPrev');
var btnNext = this.getChildById('btnNext');
var btnLast = this.getChildById('btnLast');
var ctrlPageNo = this.getChildById('pageNo');
var ctrlPageCount = this.getChildById('pageCount');
zenASSERT(ctrlPageNo,'tableNavigator: Unable to find pageNo control',arguments);
var table = this.tablePane;
if (null == table) {
ctrlPageNo.setProperty('disabled',true);
ctrlPageCount.setProperty('disabled',true);
btnFirst.setProperty('disabled',true);
btnPrev.setProperty('disabled',true);
btnNext.setProperty('disabled',true);
btnLast.setProperty('disabled',true);
return;
}
var pageNo = table.getProperty('currPage');
var pageCount = table.getPageCount();
ctrlPageNo.setValue(pageNo);
ctrlPageCount.setValue(pageCount);
ctrlPageNo.setProperty('disabled',pageCount==1);
ctrlPageCount.setProperty('disabled',false);
btnFirst.setProperty('disabled',pageNo==1);
btnPrev.setProperty('disabled',pageNo==1);
btnNext.setProperty('disabled',pageNo==pageCount);
btnLast.setProperty('disabled',pageNo==pageCount);
}

function _ZEN_Component_tableNavigator_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_tableNavigator__Loader() {
	zenLoadClass('_ZEN_Component_composite');
	_ZEN_Component_tableNavigator.prototype = zenCreate('_ZEN_Component_composite',-1);
	var p = _ZEN_Component_tableNavigator.prototype;
	p.constructor = _ZEN_Component_tableNavigator;
	p.superClass = ('undefined' == typeof _ZEN_Component_composite) ? zenMaster._ZEN_Component_composite.prototype:_ZEN_Component_composite.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.tableNavigator';
	p._type = 'tableNavigator';
	p.serialize = _ZEN_Component_tableNavigator_serialize;
	p.getSettings = _ZEN_Component_tableNavigator_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_tableNavigator_ReallyRefreshContents;
	p.gotoPage = _ZEN_Component_tableNavigator_gotoPage;
	p.renderContents = _ZEN_Component_tableNavigator_renderContents;
	p.setProperty = _ZEN_Component_tableNavigator_setProperty;
	p.updateState = _ZEN_Component_tableNavigator_updateState;
}

// ================================================================================
_zenClassIdx['contextMenu'] = '_ZEN_Component_contextMenu';
function _ZEN_Component_contextMenu(index,id) {
	if (index>=0) {_ZEN_Component_contextMenu__init(this,index,id);}
}

function _ZEN_Component_contextMenu__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
}
function _ZEN_Component_contextMenu_serialize(set,s)
{
	s[0]='4052196350';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.renderFlag;s[44]=(this.showLabel?1:0);s[45]=this.slice;s[46]=this.title;s[47]=this.tuple;s[48]=this.valign;s[49]=(this.visible?1:0);s[50]=this.width;
}
function _ZEN_Component_contextMenu_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_contextMenu_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZMS.initialize();
var div = this.getEnclosingDiv();
for (var k=div.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.className=="contextMenu") {
ZMS.estimateContextMenuSize(k);
ZMS.setContextMenuSize(k);
div.item=k;
return;
}
}
}

function _ZEN_Component_contextMenu_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_contextMenu_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_contextMenu__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_contextMenu.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_contextMenu.prototype;
	p.constructor = _ZEN_Component_contextMenu;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.contextMenu';
	p._type = 'contextMenu';
	p.serialize = _ZEN_Component_contextMenu_serialize;
	p.getSettings = _ZEN_Component_contextMenu_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_contextMenu_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_contextMenu_onloadHandler;
	p.setProperty = _ZEN_Component_contextMenu_setProperty;
}

// ================================================================================
_zenClassIdx['csComboBox'] = '_ZEN_Component_csComboBox';
function _ZEN_Component_csComboBox(index,id) {
	if (index>=0) {_ZEN_Component_csComboBox__init(this,index,id);}
}

function _ZEN_Component_csComboBox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.defaultCaption = 'Select...';
	o.icon = '/csp/broker/images/SmDownArrow.png';
	o.onchange = '';
	o.value = '';
}
function _ZEN_Component_csComboBox_serialize(set,s)
{
	s[0]='2727825242';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=this.defaultCaption;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=(this.hidden?1:0);s[26]=this.hint;s[27]=this.hintClass;s[28]=this.hintStyle;s[29]=this.icon;s[30]=this.label;s[31]=this.labelClass;s[32]=this.labelPosition;s[33]=this.labelStyle;s[34]=this.layout;s[35]=this.onafterdrag;s[36]=this.onbeforedrag;s[37]=this.onchange;s[38]=this.onclick;s[39]=this.ondrag;s[40]=this.ondrop;s[41]=this.onhide;s[42]=this.onrefresh;s[43]=this.onshow;s[44]=this.onupdate;s[45]=this.overlayMode;s[46]=this.renderFlag;s[47]=(this.showLabel?1:0);s[48]=this.slice;s[49]=this.title;s[50]=this.tuple;s[51]=this.valign;s[52]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[53]=(this.visible?1:0);s[54]=this.width;
}
function _ZEN_Component_csComboBox_getSettings(s)
{
	s['name'] = 'string';
	s['defaultCaption'] = 'string';
	s['icon'] = 'uri';
	s['onchange'] = 'eventHandler';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_csComboBox_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZMS.initialize();
var div=this.getEnclosingDiv();
for (var k=div.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.className=="csComboBox") {
ZMS.organizeComboBox(k);
div.item=k;
return;
}
}
}

function _ZEN_Component_csComboBox_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_csComboBox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_csComboBox__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_csComboBox.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_csComboBox.prototype;
	p.constructor = _ZEN_Component_csComboBox;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.csComboBox';
	p._type = 'csComboBox';
	p.serialize = _ZEN_Component_csComboBox_serialize;
	p.getSettings = _ZEN_Component_csComboBox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_csComboBox_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_csComboBox_onloadHandler;
	p.setProperty = _ZEN_Component_csComboBox_setProperty;
}

// ================================================================================
_zenClassIdx['csMenuBar'] = '_ZEN_Component_csMenuBar';
function _ZEN_Component_csMenuBar(index,id) {
	if (index>=0) {_ZEN_Component_csMenuBar__init(this,index,id);}
}

function _ZEN_Component_csMenuBar__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
}
function _ZEN_Component_csMenuBar_serialize(set,s)
{
	s[0]='4052196350';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.renderFlag;s[44]=(this.showLabel?1:0);s[45]=this.slice;s[46]=this.title;s[47]=this.tuple;s[48]=this.valign;s[49]=(this.visible?1:0);s[50]=this.width;
}
function _ZEN_Component_csMenuBar_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_csMenuBar_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZMS.initialize();
var div=this.getEnclosingDiv();
for (var k=div.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.className=="csMenuBar") {
div.item=k;
ZMS.sizeMenuBar(k);
ZMS.organizeMenuBar(k);
return;
}
}
}

function _ZEN_Component_csMenuBar_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_csMenuBar_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_csMenuBar__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_csMenuBar.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_csMenuBar.prototype;
	p.constructor = _ZEN_Component_csMenuBar;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.csMenuBar';
	p._type = 'csMenuBar';
	p.serialize = _ZEN_Component_csMenuBar_serialize;
	p.getSettings = _ZEN_Component_csMenuBar_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_csMenuBar_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_csMenuBar_onloadHandler;
	p.setProperty = _ZEN_Component_csMenuBar_setProperty;
}

// ================================================================================
_zenClassIdx['csMenuBarItem'] = '_ZEN_Component_csMenuBarItem';
function _ZEN_Component_csMenuBarItem(index,id) {
	if (index>=0) {_ZEN_Component_csMenuBarItem__init(this,index,id);}
}

function _ZEN_Component_csMenuBarItem__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.caption = '';
	o.contextKey = '';
}
function _ZEN_Component_csMenuBarItem_serialize(set,s)
{
	s[0]='531681263';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.cellAlign;s[10]=this.cellSize;s[11]=this.cellStyle;s[12]=this.cellVAlign;s[13]=set.serializeList(this,this.children,true,'children');s[14]=this.containerStyle;s[15]=this.contextKey;s[16]=(this.disabled?1:0);s[17]=(this.dragEnabled?1:0);s[18]=(this.dropEnabled?1:0);s[19]=(this.dynamic?1:0);s[20]=this.enclosingClass;s[21]=this.enclosingStyle;s[22]=this.error;s[23]=this.groupClass;s[24]=this.groupStyle;s[25]=this.height;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=this.label;s[31]=this.labelClass;s[32]=this.labelPosition;s[33]=this.labelStyle;s[34]=this.layout;s[35]=this.onafterdrag;s[36]=this.onbeforedrag;s[37]=this.onclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onhide;s[41]=this.onrefresh;s[42]=this.onshow;s[43]=this.onupdate;s[44]=this.overlayMode;s[45]=this.renderFlag;s[46]=(this.showLabel?1:0);s[47]=this.slice;s[48]=this.title;s[49]=this.tuple;s[50]=this.valign;s[51]=(this.visible?1:0);s[52]=this.width;
}
function _ZEN_Component_csMenuBarItem_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'string';
	s['contextKey'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_csMenuBarItem_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZMS.initialize();
var div=this.getEnclosingDiv();
for (var k=div.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.className=="csMenuBarItem") {
ZMS.createMenuBarItemSubtree(k,20);
div.item=k;
}
}
}

function _ZEN_Component_csMenuBarItem_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_csMenuBarItem_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_csMenuBarItem__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_csMenuBarItem.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_csMenuBarItem.prototype;
	p.constructor = _ZEN_Component_csMenuBarItem;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.csMenuBarItem';
	p._type = 'csMenuBarItem';
	p.serialize = _ZEN_Component_csMenuBarItem_serialize;
	p.getSettings = _ZEN_Component_csMenuBarItem_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_csMenuBarItem_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_csMenuBarItem_onloadHandler;
	p.setProperty = _ZEN_Component_csMenuBarItem_setProperty;
}

// ================================================================================
_zenClassIdx['csMenuItem'] = '_ZEN_Component_csMenuItem';
function _ZEN_Component_csMenuItem(index,id) {
	if (index>=0) {_ZEN_Component_csMenuItem__init(this,index,id);}
}

function _ZEN_Component_csMenuItem__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.altCaption = '';
	o.altIcon = '';
	o.altKey = '';
	o.caption = '';
	o.contextKey = '';
	o.icon = '';
	o.iconDisabled = '';
	o.key = '';
	o.onclick = '';
	o.toggleMode = false;
}
function _ZEN_Component_csMenuItem_serialize(set,s)
{
	s[0]='159267113';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.altCaption;s[8]=this.altIcon;s[9]=this.altKey;s[10]=this.aux;s[11]=this.caption;s[12]=this.cellAlign;s[13]=this.cellSize;s[14]=this.cellStyle;s[15]=this.cellVAlign;s[16]=set.serializeList(this,this.children,true,'children');s[17]=this.containerStyle;s[18]=this.contextKey;s[19]=(this.disabled?1:0);s[20]=(this.dragEnabled?1:0);s[21]=(this.dropEnabled?1:0);s[22]=(this.dynamic?1:0);s[23]=this.enclosingClass;s[24]=this.enclosingStyle;s[25]=this.error;s[26]=this.groupClass;s[27]=this.groupStyle;s[28]=this.height;s[29]=(this.hidden?1:0);s[30]=this.hint;s[31]=this.hintClass;s[32]=this.hintStyle;s[33]=this.icon;s[34]=this.iconDisabled;s[35]=this.key;s[36]=this.label;s[37]=this.labelClass;s[38]=this.labelPosition;s[39]=this.labelStyle;s[40]=this.layout;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.ondrag;s[45]=this.ondrop;s[46]=this.onhide;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onupdate;s[50]=this.overlayMode;s[51]=this.renderFlag;s[52]=(this.showLabel?1:0);s[53]=this.slice;s[54]=this.title;s[55]=(this.toggleMode?1:0);s[56]=this.tuple;s[57]=this.valign;s[58]=(this.visible?1:0);s[59]=this.width;
}
function _ZEN_Component_csMenuItem_getSettings(s)
{
	s['name'] = 'string';
	s['altCaption'] = 'string';
	s['altIcon'] = 'uri';
	s['altKey'] = 'string';
	s['caption'] = 'string';
	s['contextKey'] = 'string';
	s['icon'] = 'uri';
	s['iconDisabled'] = 'uri';
	s['key'] = 'string';
	s['onclick'] = 'eventHandler';
	s['toggleMode'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_csMenuItem_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZMS.initialize();
var div=this.getEnclosingDiv();
for (var k=div.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.className=="csMenuItem") {
ZMS.createMenuItemSubtree(k,20);
div.item=k;
return;
}
}
}

function _ZEN_Component_csMenuItem_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_csMenuItem_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_csMenuItem__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_csMenuItem.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_csMenuItem.prototype;
	p.constructor = _ZEN_Component_csMenuItem;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.csMenuItem';
	p._type = 'csMenuItem';
	p.serialize = _ZEN_Component_csMenuItem_serialize;
	p.getSettings = _ZEN_Component_csMenuItem_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_csMenuItem_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_csMenuItem_onloadHandler;
	p.setProperty = _ZEN_Component_csMenuItem_setProperty;
}

// ================================================================================
_zenClassIdx['dragGroup'] = '_ZEN_Component_dragGroup';
function _ZEN_Component_dragGroup(index,id) {
	if (index>=0) {_ZEN_Component_dragGroup__init(this,index,id);}
}

function _ZEN_Component_dragGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.enclosingClass = 'dragGroup';
	o.header = '';
	o.imageClose = '/csp/broker/images/grayDragClose.png';
	o.imageContract = '/csp/broker/images/grayDragContract.png';
	o.imageExpand = '/csp/broker/images/grayDragExpand.png';
	o.imageMaximize = '/csp/broker/images/grayDragMax.png';
	o.imageMinimize = '/csp/broker/images/grayDragMin.png';
	o.imageResize = '/csp/broker/images/grayDragResize.png';
	o.imageResizeSize = '16';
}
function _ZEN_Component_dragGroup_serialize(set,s)
{
	s[0]='582828870';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.header;s[24]=this.height;s[25]=(this.hidden?1:0);s[26]=this.hint;s[27]=this.hintClass;s[28]=this.hintStyle;s[29]=this.imageClose;s[30]=this.imageContract;s[31]=this.imageExpand;s[32]=this.imageMaximize;s[33]=this.imageMinimize;s[34]=this.imageResize;s[35]=this.imageResizeSize;s[36]=this.label;s[37]=this.labelClass;s[38]=this.labelPosition;s[39]=this.labelStyle;s[40]=this.layout;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.ondrag;s[45]=this.ondrop;s[46]=this.onhide;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onupdate;s[50]=this.overlayMode;s[51]=this.renderFlag;s[52]=(this.showLabel?1:0);s[53]=this.slice;s[54]=this.title;s[55]=this.tuple;s[56]=this.valign;s[57]=(this.visible?1:0);s[58]=this.width;
}
function _ZEN_Component_dragGroup_getSettings(s)
{
	s['name'] = 'string';
	s['header'] = 'caption';
	s['imageClose'] = 'uri';
	s['imageContract'] = 'uri';
	s['imageExpand'] = 'uri';
	s['imageMaximize'] = 'uri';
	s['imageMinimize'] = 'uri';
	s['imageResize'] = 'uri';
	s['imageResizeSize'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dragGroup_adjustChildArea() {
var thisDiv = this.getEnclosingDiv();
var headerDiv = this.getHeaderDiv();
var childDiv = this.getChildDiv();
childDiv.style.height=thisDiv.clientHeight-headerDiv.offsetHeight;
}

function _ZEN_Component_dragGroup_adjustHandleWidth() {
var thisDiv = this.getEnclosingDiv();
var handle = thisDiv.dragHandle;
var oldW=thisDiv.clientWidth;
var iconW = handle.closer.offsetWidth;
if (thisDiv.maximized==1) iconW*=2;
else iconW*=3;
var titleW = oldW-iconW;
if (titleW>0) ZLM.setOffsetWidth(handle.textCell,titleW);
}

function _ZEN_Component_dragGroup_adjustResizeBox() {
var thisDiv = this.getEnclosingDiv();
var box = thisDiv.resize;
var newTop = thisDiv.offsetHeight-this.imageResizeSize-1;
var newLeft = thisDiv.offsetWidth-this.imageResizeSize-1;
box.style.top=newTop;
box.style.left=newLeft;
}

function _ZEN_Component_dragGroup_compress(event) {
var thisDiv = this.getEnclosingDiv();
ZLM.killEvent(event);
thisDiv.oldPrefHeight = thisDiv.prefHeight;
thisDiv.dragItem.style.display="none";
thisDiv.resize.style.display="none";
thisDiv.dragHandle.expander.style.display="block";
thisDiv.dragHandle.iconifier.style.display="none";
thisDiv.compressed=1;
thisDiv.prefHeight=thisDiv.iconHeight;
thisDiv.layoutMgr.layoutBlock(thisDiv.layoutEngine);
}

function _ZEN_Component_dragGroup_constrainDragX(engine,wrapper,intendedX) {
var thisDiv=this.getEnclosingDiv();
var pad = parseInt(this.imageResizeSize)+1;
var x = parseInt(intendedX)+ pad;
if (x<thisDiv.minWidth) x = thisDiv.minWidth;
thisDiv.prefWidth=x;
return(x-pad);
}

function _ZEN_Component_dragGroup_constrainDragY(engine,wrapper,intendedY) {
var thisDiv=this.getEnclosingDiv();
var pad = parseInt(this.imageResizeSize)+1;
var y = parseInt(intendedY)+pad;
if (y<thisDiv.minHeight) y = thisDiv.minHeight;
thisDiv.prefHeight=y;
this.resize(thisDiv.prefWidth,thisDiv.prefHeight);
thisDiv.layoutMgr.layoutBlock(thisDiv.layoutEngine);
return(y-pad);
}

function _ZEN_Component_dragGroup_endDrag(engine,wrapper) {
var thisDiv=this.getEnclosingDiv();
thisDiv.layoutMgr.layoutBlock(thisDiv.layoutEngine);
ZLM.notifyResize(thisDiv);
}

function _ZEN_Component_dragGroup_expand(event) {
var thisDiv = this.getEnclosingDiv();
ZLM.killEvent(event);
thisDiv.compressed=0;
thisDiv.prefHeight = thisDiv.oldPrefHeight;
thisDiv.dragItem.style.display="block";
thisDiv.resize.style.display="block";
thisDiv.dragHandle.expander.style.display="none";
thisDiv.dragHandle.iconifier.style.display="block";
thisDiv.layoutMgr.layoutBlock(thisDiv.layoutEngine);
}

function _ZEN_Component_dragGroup_getChildDiv() {
return this.findElement('children');
}

function _ZEN_Component_dragGroup_getHeaderDiv() {
return this.findElement('header');
}

function _ZEN_Component_dragGroup_getState() {
var r = this.getEnclosingDiv();
var str=r.id+":"+encodeURIComponent(this.header)+":";
str=str+r.prefWidth+":"+r.prefHeight+":"+r.minWidth+":"+r.minHeight+":"+r.compressed+":"+r.maximized+":";
str=str+r.oldTop+":"+r.oldLeft+":"+r.oldWidth+":"+r.oldHeight+":"+r.oldPrefHeight;
return(str);
}

function _ZEN_Component_dragGroup_maximize(event) {
var thisDiv = this.getEnclosingDiv();
ZLM.killEvent(event);
thisDiv.maximized = 1;
thisDiv.dragHandle.expander.style.display="none";
thisDiv.dragHandle.iconifier.style.display="none";
thisDiv.dragHandle.maxxer.style.display="none";
thisDiv.dragHandle.minner.style.display="block";
thisDiv.dragItem.style.display="block";
thisDiv.resize.style.display="none";
this.saveGeometry();
var dskW = thisDiv.parentNode.parentNode.clientWidth-2;
var dskH = thisDiv.parentNode.parentNode.clientHeight-2;
this.resize(dskW,dskH);
ZLM.setLocalAttribute(thisDiv.dragHandle,"onmousedown","");
thisDiv.dragHandle.style.cursor="auto";
thisDiv.parentNode.style.overflow="hidden";
thisDiv.style.top="0px";
thisDiv.style.left="0px";
thisDiv.style.zIndex="100";
ZLM.notifyResize(thisDiv);
}

function _ZEN_Component_dragGroup_normalize(event) {
var thisDiv = this.getEnclosingDiv();
ZLM.killEvent(event);
thisDiv.maximized = 0;
thisDiv.dragHandle.minner.style.display="none";
thisDiv.dragHandle.maxxer.style.display="block";
if (thisDiv.compressed==1) {
thisDiv.dragHandle.expander.style.display="block";
thisDiv.dragItem.style.display="none";
}
else {
thisDiv.dragHandle.iconifier.style.display="block";
thisDiv.resize.style.display="block";
}
this.restoreGeometry();
ZLM.setLocalAttribute(thisDiv.dragHandle,"onmousedown","ZLM.drag(this.parentNode,event);");
thisDiv.dragHandle.style.cursor="move";
thisDiv.parentNode.style.overflow="auto";
thisDiv.style.zIndex="0";
thisDiv.layoutMgr.layoutBlock(thisDiv.layoutEngine);
}

function _ZEN_Component_dragGroup_renderContents() {
this.renderResize();
this.renderHeader();
var thisDiv = this.getEnclosingDiv();
thisDiv.compressed = 0;
thisDiv.maximized = 0;
thisDiv.prefWidth = thisDiv.offsetWidth;
thisDiv.prefHeight = thisDiv.offsetHeight;
thisDiv.minWidth = thisDiv.prefWidth;
thisDiv.minHeight = thisDiv.iconHeight+thisDiv.resize.size+1;
thisDiv.oldTop = 0;
thisDiv.oldLeft = 0;
thisDiv.oldWidth = 0;
thisDiv.oldHeight = 0;
thisDiv.oldPrefHeight = 0;
this.adjustChildArea();
}

function _ZEN_Component_dragGroup_renderHeader() {
var header = this.getHeaderDiv();
var group = this.getEnclosingDiv();
if (header) {
var iconify = ZLM.simulateTag("img src='"+this.imageContract+"' style='cursor:pointer; display:inline;' onmousedown='this.pane.zenObject.compress(event);'");
var expander = ZLM.simulateTag("img src='"+this.imageExpand+"' style='cursor:pointer; display:none;' onmousedown='this.pane.zenObject.expand(event);'");
var maxxer = ZLM.simulateTag("img src='"+this.imageMaximize+"' style='cursor:pointer; display:inline;' onmousedown='this.pane.zenObject.maximize(event);'");
var minner = ZLM.simulateTag("img src='"+this.imageMinimize+"' style='cursor:pointer; display:none;' onmousedown='this.pane.zenObject.normalize(event);'");
var closer = ZLM.simulateTag("img src='"+this.imageClose+"' style='cursor:pointer; display:block;' onclick='ZLM_VDP.closePane(this.pane);'");
var a = new Array()
a["style"]="padding:1;";
a["class"]="dragHeaderText";
if (this.header) var title = ZLM.makeElement("td",a,this.header);
else var title = ZLM.makeElement("td",a,"Untitled group");
a.pop();
var c0 = ZLM.makeElement("td",a,[iconify,expander]);
var c2 = ZLM.makeElement("td",a,[maxxer,minner]);
var c3 = ZLM.makeElement("td",a,[closer]);
var row = ZLM.makeElement("tr",null,[c0,title,c2,c3]);
var body = ZLM.makeElement("tbody",null,row);
var table = ZLM.simulateTag("table cellspacing='0'");
table.appendChild(body);
ZLM.setLocalAttribute(header,"onmousedown","ZLM.drag(this.parentNode,event);");
header.appendChild(table);
header.maxxer = maxxer;
header.minner = minner;
header.closer = closer;
header.iconifier = iconify;
header.expander = expander;
header.textCell=title;
maxxer.pane = group;
minner.pane = group;
closer.pane = group;
expander.pane = group;
iconify.pane = group;
var oldH = header.offsetHeight;
var oldW = header.offsetWidth;
group.style.width="1000px";
var targetH = header.offsetHeight;
while (targetH!=oldH) {
oldW+=10;
group.style.width=oldW+"px";
oldH=header.offsetHeight;
}
group.style.width=oldW+"px";
group.dragHandle=header;
group.dragItem=this.getChildDiv();
group.iconHeight=targetH;
group.zenObject=this;
this.adjustHandleWidth();
this.adjustResizeBox();
}
}

function _ZEN_Component_dragGroup_renderResize() {
var group = this.getEnclosingDiv();
var sz = parseInt(this.imageResizeSize);
if (group) {
var resize = ZLM.simulateTag("img src='"+this.imageResize+"' style='cursor:nw-resize; position:absolute; z-index:65535; width:"+sz+"; height:"+sz+";' onmousedown='ZLM.drag(this,event);'");
resize.pane = group;
resize.size = sz;
group.appendChild(resize);
group.resize=resize;
ZLM.registerDragItem(resize,this);
}
}

function _ZEN_Component_dragGroup_resize(width,height) {
var thisDiv = this.getEnclosingDiv();
thisDiv.style.width=width;
thisDiv.style.height=height;
this.adjustHandleWidth();
this.adjustChildArea();
this.adjustResizeBox();
}

function _ZEN_Component_dragGroup_restoreGeometry() {
var thisDiv = this.getEnclosingDiv();
thisDiv.style.top=this.oldTop;
thisDiv.style.left=this.oldLeft;
ZLM.setOffsetWidth(thisDiv,this.oldWidth);
ZLM.setOffsetHeight(thisDiv,this.oldHeight);
this.adjustHandleWidth();
this.adjustChildArea();
this.adjustResizeBox();
}

function _ZEN_Component_dragGroup_restoreState(str) {
var n = this.getEnclosingDiv();
var d = str.split(':');
n.prefWidth=parseInt(d[2]);
n.prefHeight=parseInt(d[3]);
n.minWidth=parseInt(d[4]);
n.minHeight=parseInt(d[5]);
n.oldTop=parseInt(d[8]);
n.oldLeft=parseInt(d[9]);
n.oldWidth=parseInt(d[10]);
n.oldHeight=parseInt(d[11]);
n.oldPrefHeight=parseInt(d[12]);
if (d[7]=="1"){
if (d[6]==1) n.compressed=1;
else n.compressed=0;
n.maximized = 1;
n.dragHandle.expander.style.display="none";
n.dragHandle.iconifier.style.display="none";
n.dragHandle.maxxer.style.display="none";
n.dragHandle.minner.style.display="block";
n.dragItem.style.display="block";
n.resize.style.display="none";
this.resize(n.parentNode.clientWidth-2,n.parentNode.clientHeight-2);
ZLM.setLocalAttribute(n.dragHandle,"onmousedown","");
n.dragHandle.style.cursor="auto";
n.parentNode.style.overflow="hidden";
n.style.top="0px";
n.style.left="0px";
n.style.zIndex="100";
ZLM.notifyResize(n);
}
else {
n.maximized = 0;
n.dragHandle.minner.style.display="none";
n.dragHandle.maxxer.style.display="block";
if (d[6]=="1") {
n.compressed=1;
n.dragHandle.expander.style.display="block";
n.dragHandle.iconifier.style.display="none";
n.dragItem.style.display="none";
n.resize.style.display="none";
}
else {
n.compressed=0;
n.dragHandle.expander.style.display="none";
n.dragHandle.iconifier.style.display="block";
n.resize.style.display="block";
n.dragItem.style.display="block";
}
ZLM.setLocalAttribute(n.dragHandle,"onmousedown","ZLM.drag(this.parentNode,event);");
n.dragHandle.style.cursor="move";
n.parentNode.style.overflow="auto";
n.style.zIndex="0";
}
}

function _ZEN_Component_dragGroup_saveGeometry() {
var thisDiv = this.getEnclosingDiv();
this.oldTop = thisDiv.offsetTop;
this.oldLeft = thisDiv.offsetLeft;
this.oldWidth = thisDiv.offsetWidth;
this.oldHeight = thisDiv.offsetHeight;
}

function _ZEN_Component_dragGroup_setProperty(property,value,value2) {
switch(property) {
case 'header':
this.header = value;
break;
case 'imageClose':
case 'imageMinimize':
case 'imageMaximize':
case 'imageExpand':
case 'imageContract':
this[property] = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_dragGroup_startDrag(engine,wrapper) {
}

function _ZEN_Component_dragGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dragGroup__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_dragGroup.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_dragGroup.prototype;
	p.constructor = _ZEN_Component_dragGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dragGroup';
	p._type = 'dragGroup';
	p.serialize = _ZEN_Component_dragGroup_serialize;
	p.getSettings = _ZEN_Component_dragGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_dragGroup_ReallyRefreshContents;
	p.adjustChildArea = _ZEN_Component_dragGroup_adjustChildArea;
	p.adjustHandleWidth = _ZEN_Component_dragGroup_adjustHandleWidth;
	p.adjustResizeBox = _ZEN_Component_dragGroup_adjustResizeBox;
	p.compress = _ZEN_Component_dragGroup_compress;
	p.constrainDragX = _ZEN_Component_dragGroup_constrainDragX;
	p.constrainDragY = _ZEN_Component_dragGroup_constrainDragY;
	p.endDrag = _ZEN_Component_dragGroup_endDrag;
	p.expand = _ZEN_Component_dragGroup_expand;
	p.getChildDiv = _ZEN_Component_dragGroup_getChildDiv;
	p.getHeaderDiv = _ZEN_Component_dragGroup_getHeaderDiv;
	p.getState = _ZEN_Component_dragGroup_getState;
	p.maximize = _ZEN_Component_dragGroup_maximize;
	p.normalize = _ZEN_Component_dragGroup_normalize;
	p.renderContents = _ZEN_Component_dragGroup_renderContents;
	p.renderHeader = _ZEN_Component_dragGroup_renderHeader;
	p.renderResize = _ZEN_Component_dragGroup_renderResize;
	p.resize = _ZEN_Component_dragGroup_resize;
	p.restoreGeometry = _ZEN_Component_dragGroup_restoreGeometry;
	p.restoreState = _ZEN_Component_dragGroup_restoreState;
	p.saveGeometry = _ZEN_Component_dragGroup_saveGeometry;
	p.setProperty = _ZEN_Component_dragGroup_setProperty;
	p.startDrag = _ZEN_Component_dragGroup_startDrag;
}

// ================================================================================
_zenClassIdx['expando'] = '_ZEN_Component_expando';
function _ZEN_Component_expando(index,id) {
	if (index>=0) {_ZEN_Component_expando__init(this,index,id);}
}

function _ZEN_Component_expando__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.OnDrawContent = '';
	o.animate = false;
	o.caption = '';
	o.childIndent = '';
	o.expanded = true;
	o.framed = false;
	o.groupClass = 'expandoTable';
	o.imageContracted = '/csp/broker/images/disclosure-contracted.gif';
	o.imageExpanded = '/csp/broker/images/disclosure-expanded.gif';
	o.oncontract = '';
	o.onexpand = '';
	o.remember = false;
}
function _ZEN_Component_expando_serialize(set,s)
{
	s[0]='395421197';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnDrawContent;s[7]=this.align;s[8]=(this.animate?1:0);s[9]=this.aux;s[10]=this.caption;s[11]=this.cellAlign;s[12]=this.cellSize;s[13]=this.cellStyle;s[14]=this.cellVAlign;s[15]=this.childIndent;s[16]=set.serializeList(this,this.children,true,'children');s[17]=this.containerStyle;s[18]=(this.disabled?1:0);s[19]=(this.dragEnabled?1:0);s[20]=(this.dropEnabled?1:0);s[21]=(this.dynamic?1:0);s[22]=this.enclosingClass;s[23]=this.enclosingStyle;s[24]=this.error;s[25]=(this.expanded?1:0);s[26]=(this.framed?1:0);s[27]=this.groupClass;s[28]=this.groupStyle;s[29]=this.height;s[30]=(this.hidden?1:0);s[31]=this.hint;s[32]=this.hintClass;s[33]=this.hintStyle;s[34]=this.imageContracted;s[35]=this.imageExpanded;s[36]=this.label;s[37]=this.labelClass;s[38]=this.labelPosition;s[39]=this.labelStyle;s[40]=this.layout;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.oncontract;s[45]=this.ondrag;s[46]=this.ondrop;s[47]=this.onexpand;s[48]=this.onhide;s[49]=this.onrefresh;s[50]=this.onshow;s[51]=this.onupdate;s[52]=this.overlayMode;s[53]=(this.remember?1:0);s[54]=this.renderFlag;s[55]=(this.showLabel?1:0);s[56]=this.slice;s[57]=this.title;s[58]=this.tuple;s[59]=this.valign;s[60]=(this.visible?1:0);s[61]=this.width;
}
function _ZEN_Component_expando_getSettings(s)
{
	s['name'] = 'string';
	s['animate'] = 'boolean';
	s['caption'] = 'caption';
	s['childIndent'] = 'length';
	s['expanded'] = 'boolean';
	s['framed'] = 'boolean';
	s['imageContracted'] = 'uri';
	s['imageExpanded'] = 'uri';
	s['oncontract'] = 'eventHandler';
	s['onexpand'] = 'eventHandler';
	s['remember'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_expando_animateExpand(delta,divid) {
delta = parseInt(delta);
delete this._exTimerId;
this._progress = parseInt(this._progress) + parseInt(delta);
div = this.findElement(divid);
if (this._progress > 0 && this._progress < 100) {
var h = parseInt(((this._progress / 100) * this._height));
h = (h <= 1) ? 1 : h;
div.style.height = h + 'px';
if (div.style.opacity != null) {
div.style.opacity = this._progress / 100;
}
else if (div.style.filter != null) {
div.style.filter = 'alpha(opacity=' + this._progress + ')';
}
div.scrollIntoView();
this._exTimerId = self.setTimeout("zenPage.getComponent("+this.index+").animateExpand("+(delta*1.3)+",'"+divid+"')",20);
}
else {
div.style.height = 	this._cssHeight;
if (null != div.style.opacity) {
div.style.opacity = this._cssOpacity;
}
else if (div.style.filter != null) {
div.style.filter = '';
}
div.style.overflow = this._cssOverflow;
div.style.display = this.expanded ? '' : 'none';
div.scrollIntoView();
}
}

function _ZEN_Component_expando_getExpanded(tuple) {
if ('undefined' != typeof tuple) {
var div = this.window.document.getElementById('expandoChildren_' + this.index + '.' + tuple);
return div ? (div.style.display=='none' ? false : true) : false;
}
return this.expanded;
}

function _ZEN_Component_expando_onloadHandler() {
if (this.remember) {
var exp = parseInt(zenLoadCookie(this,'expando'),10);
if (exp > 0) {
this.setExpanded(exp == 2);
}
}
}

function _ZEN_Component_expando_setExpanded(flag,tuple) {
this.expanded = flag;
var divid = '';
var div = null;
var img = null;
if ('undefined' == typeof tuple) {
divid = 'expandoChildren';
div = this.findElement(divid);
img = this.findElement('image');
}
else {
divid = 'expandoChildren_' + this.index + '.' + tuple;
div = this.window.document.getElementById(divid);
img = this.window.document.getElementById('image_' + this.index + '.' + tuple);
}
zenASSERT(div,'Unable to find div element for children',arguments);
if (this.expanded) {
zenInvokeCallbackMethod(this.onexpand,this,'onexpand','tuple',tuple);
}
else {
zenInvokeCallbackMethod(this.oncontract,this,'oncontract','tuple',tuple);
}
if (this.animate) {
this._cssHeight = div.style.height;
this._cssOverflow = div.style.overflow;
if (div.style.opacity != null) {
this._cssOpacity = div.style.opacity;
}
if (this.expanded) {
var h = div.clientHeight;
if (h > 0) {
this._height = h;
}
else if (div.style.height!='') {
this._height = div.style.height;
}
else if (null == this._height) {
this._height = 100; // guess
}
if (div.style.opacity != null) {
div.style.opacity = 0.0;
}
div.style.height = '1px';
div.style.overflow = 'hidden';
div.style.display = '';
}
else {
this._height = div.clientHeight;
div.style.overflow = 'hidden';
if (div.style.opacity != null) {
div.style.opacity = 1.0;
}
}
if (this._exTimerId) {
window.clearTimeout(this._exTimerId);
}
this._progress = this.expanded ? 0 : 100;
var delta = this.expanded ? 10 : -10;
this._exTimerId = self.setTimeout("zenPage.getComponent("+this.index+").animateExpand("+delta+",'"+divid+"')",20);
}
else {
div.style.display = this.expanded ? '' : 'none';
}
if (img) {
img.src = this.expanded ? this.imageExpanded : this.imageContracted;
}
if (this.remember && ('undefined' == typeof tuple)) {
zenStoreCookie(this,'expando',this.expanded ? '2' : '1');
}
}

function _ZEN_Component_expando_setProperty(property,value,value2) {
switch(property) {
case 'animate':
this.animate = value ? true : false;
break;
case 'expanded':
value = value ? true : false;
this.setExpanded(value);
break;
case 'childIndent':
this[property] = value;
this.refreshContents();
break;
case 'caption':
this.caption = value;
var span = this.findElement('caption');
if (span) {
span.innerHTML = this.caption;
}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_expando_toggleExpanded(tuple) {
if ('undefined' == typeof tuple) {
this.setExpanded(!this.getExpanded());
}
else {
this.setExpanded(!this.getExpanded(), tuple);
}
}

function _ZEN_Component_expando_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_expando__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_expando.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_expando.prototype;
	p.constructor = _ZEN_Component_expando;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.expando';
	p._type = 'expando';
	p.serialize = _ZEN_Component_expando_serialize;
	p.getSettings = _ZEN_Component_expando_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_expando_ReallyRefreshContents;
	p.animateExpand = _ZEN_Component_expando_animateExpand;
	p.getExpanded = _ZEN_Component_expando_getExpanded;
	p.onloadHandler = _ZEN_Component_expando_onloadHandler;
	p.setExpanded = _ZEN_Component_expando_setExpanded;
	p.setProperty = _ZEN_Component_expando_setProperty;
	p.toggleExpanded = _ZEN_Component_expando_toggleExpanded;
}

// ================================================================================
_zenClassIdx['fieldSet'] = '_ZEN_Component_fieldSet';
function _ZEN_Component_fieldSet(index,id) {
	if (index>=0) {_ZEN_Component_fieldSet__init(this,index,id);}
}

function _ZEN_Component_fieldSet__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.groupClass = 'fieldset';
	o.legend = '';
	o.title = '';
}
function _ZEN_Component_fieldSet_serialize(set,s)
{
	s[0]='3911643586';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.legend;s[34]=this.onafterdrag;s[35]=this.onbeforedrag;s[36]=this.onclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onhide;s[40]=this.onrefresh;s[41]=this.onshow;s[42]=this.onupdate;s[43]=this.overlayMode;s[44]=this.renderFlag;s[45]=(this.showLabel?1:0);s[46]=this.slice;s[47]=this.title;s[48]=this.tuple;s[49]=this.valign;s[50]=(this.visible?1:0);s[51]=this.width;
}
function _ZEN_Component_fieldSet_getSettings(s)
{
	s['name'] = 'string';
	s['legend'] = 'caption';
	s['title'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_fieldSet_ondisabledHandler() {
var fs = this.findElement('fieldset');
fs.disabled = this.disabled;
fs.className = this.disabled ? 'fieldSetDisabled' : 'fieldSet';
}

function _ZEN_Component_fieldSet_setProperty(property,value,value2) {
switch(property) {
case 'legend':
var lgd = this.findElement('legend');
this.legend = value;
if (lgd) {
lgd.innerHTML = value;
}
break;
case 'title':
var lgd = this.findElement('legend');
this.title = value;
if (lgd) {
lgd.title = value;
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_fieldSet_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_fieldSet__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_fieldSet.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_fieldSet.prototype;
	p.constructor = _ZEN_Component_fieldSet;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.fieldSet';
	p._type = 'fieldSet';
	p.serialize = _ZEN_Component_fieldSet_serialize;
	p.getSettings = _ZEN_Component_fieldSet_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_fieldSet_ReallyRefreshContents;
	p.ondisabledHandler = _ZEN_Component_fieldSet_ondisabledHandler;
	p.setProperty = _ZEN_Component_fieldSet_setProperty;
}

// ================================================================================
_zenClassIdx['form'] = '_ZEN_Component_form';
function _ZEN_Component_form(index,id) {
	if (index>=0) {_ZEN_Component_form__init(this,index,id);}
}

function _ZEN_Component_form__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.OnLoadForm = '';
	o.OnSubmitForm = '';
	o.autoValidate = true;
	o.controller = '';
	o.controllerId = '';
	o.enctype = '';
	o.groupClass = 'form';
	o.groupStyle = 'padding: 5px;';
	o.invalidMessage = 'This form contains invalid values.\nPlease correct the following field(s) and try again.';
	o.key = '';
	o.messageTargetId = '';
	o.nextPage = '';
	o.noModelMessage = '';
	o.onchange = '';
	o.ondefault = '';
	o.oninvalid = '';
	o.onnotifyView = '';
	o.onreset = '';
	o.onsubmit = '';
	o.onvalidate = '';
	o.readOnlyMessage = 'This data is read only.';
	o.target = '';
}
function _ZEN_Component_form_serialize(set,s)
{
	s[0]='2579300838';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnLoadForm;s[7]=this.OnSubmitForm;s[8]=this.align;s[9]=(this.autoValidate?1:0);s[10]=this.aux;s[11]=this.cellAlign;s[12]=this.cellSize;s[13]=this.cellStyle;s[14]=this.cellVAlign;s[15]=set.serializeList(this,this.children,true,'children');s[16]=this.containerStyle;s[17]=this.controller;s[18]=this.controllerId;s[19]=(this.disabled?1:0);s[20]=(this.dragEnabled?1:0);s[21]=(this.dropEnabled?1:0);s[22]=(this.dynamic?1:0);s[23]=this.enclosingClass;s[24]=this.enclosingStyle;s[25]=this.enctype;s[26]=this.error;s[27]=this.groupClass;s[28]=this.groupStyle;s[29]=this.height;s[30]=(this.hidden?1:0);s[31]=this.hint;s[32]=this.hintClass;s[33]=this.hintStyle;s[34]=this.invalidMessage;s[35]=this.key;s[36]=this.label;s[37]=this.labelClass;s[38]=this.labelPosition;s[39]=this.labelStyle;s[40]=this.layout;s[41]=this.messageTargetId;s[42]=this.nextPage;s[43]=this.noModelMessage;s[44]=this.onafterdrag;s[45]=this.onbeforedrag;s[46]=this.onchange;s[47]=this.onclick;s[48]=this.ondefault;s[49]=this.ondrag;s[50]=this.ondrop;s[51]=this.onhide;s[52]=this.oninvalid;s[53]=this.onnotifyView;s[54]=this.onrefresh;s[55]=this.onreset;s[56]=this.onshow;s[57]=this.onsubmit;s[58]=this.onupdate;s[59]=this.onvalidate;s[60]=this.overlayMode;s[61]=this.readOnlyMessage;s[62]=this.renderFlag;s[63]=(this.showLabel?1:0);s[64]=this.slice;s[65]=this.target;s[66]=this.title;s[67]=this.tuple;s[68]=this.valign;s[69]=(this.visible?1:0);s[70]=this.width;
}
function _ZEN_Component_form_getSettings(s)
{
	s['name'] = 'string';
	s['autoValidate'] = 'boolean';
	s['controllerId'] = 'id';
	s['enctype'] = 'string';
	s['invalidMessage'] = 'caption';
	s['key'] = 'string';
	s['messageTargetId'] = 'id';
	s['nextPage'] = 'uri';
	s['noModelMessage'] = 'caption';
	s['onchange'] = 'eventHandler';
	s['ondefault'] = 'eventHandler';
	s['oninvalid'] = 'eventHandler';
	s['onnotifyView'] = 'eventHandler';
	s['onreset'] = 'eventHandler';
	s['onsubmit'] = 'eventHandler';
	s['onvalidate'] = 'eventHandler';
	s['readOnlyMessage'] = 'caption';
	s['target'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_form_bindValues(dataBinding,clear) {
var controller = this.getController();
if (controller) {
if (!controller.hasData()) {
this.showMessage(this.noModelMessage);
}
else {
this.showMessage('');
}
var controls = this.getControlList();
for (var n = 0; n < controls.length; n++) {
var ctrl = controls[n];
if (ctrl) {
ctrl.setProperty('invalid',false);
}
if (ctrl && !zenIsMissing(ctrl.dataBinding) && (null==dataBinding || dataBinding==ctrl.dataBinding)) {
var data = controller.getDataByName(ctrl.dataBinding);
if (ctrl.onDataModelChange) {
ctrl.onDataModelChange(controller.modelClass,controller.modelId);
}
if ((clear||ctrl.clearOnLoad) && ctrl.clearCache) {
ctrl.clearCache();
}
if (null==data) {
if ('%id' != ctrl.dataBinding) {
ctrl.setProperty('disabled',true);
}
ctrl.setValue('');
}
else {
ctrl.setProperty('disabled',false);
ctrl.setValue(data);
}
}
}
}
else {
this.showMessage('');
}
}

function _ZEN_Component_form_clearModified(reset) {
var controls = this.getControlList();
for (var n = 0; n < controls.length; n++) {
var child = controls[n];
child.setProperty('originalValue','');
if (reset) {
child.setProperty('value','');
this.controlChangeHandler(child,false);
}
}
zenInvokeCallbackMethod(this.onchange,this,'onchange','control',null);
}

function _ZEN_Component_form_connectToController() {
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

function _ZEN_Component_form_controlChangeHandler(control,fire) {
if ('undefined' == typeof fire || fire) {
zenInvokeCallbackMethod(this.onchange,this,'onchange','control',control);
}
var controller = this.getController();
if (controller && '' != control.dataBinding) {
this.sendEventToController('propertyChange',control.dataBinding,control.value);
}
}

function _ZEN_Component_form_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_Component_form_getControlList(sortBy) {
var controlList = (null != sortBy) ? new Object() : new Array();
var done = false;
var parent = new Array();
var cno = new Array();
var level = 0;
parent[0] = this;
cno[0] = 0;
do {
var child = parent[level].children[cno[level]];
if (child) {
if (child.isOfType('control')) {
switch (sortBy) {
case 'name':
if (null != child.name && '' != child.name) {
controlList[child.name] = child;
}
break;
case 'id':
if (null != child.id && '' != child.id) {
controlList[child.id] = child;
}
break;
default:
controlList[controlList.length] = child;
break;
}
}
else if (child.isOfType('group') && (child.children.length > 0)) {
level++;
parent[level] = child;
cno[level] = 0;
continue;
}
}
var found = false;
while (!found) {
cno[level]++;
if (cno[level] < parent[level].children.length) {
found = true;
}
else if (level > 0) {
level--;
}
else {
found = true;
done = true;
}
}
} while(!done);
return controlList;
}

function _ZEN_Component_form_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_Component_form_getFormElement() {
var form = this.findElement('form');
zenASSERT(form,"Unable to find form element",arguments);
return form;
}

function _ZEN_Component_form_isModified() {
var flag = false;
var controls = this.getControlList();
for (var n = 0; n < controls.length; n++) {
var child = controls[n];
if (child.isModified()) {
flag = true;
break;
}
}
return flag;
}

function _ZEN_Component_form_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_Component_form_notifyViewHandler(reason,data1,data2,data3) {
switch(reason) {
case 'dataChange':
var controller = this.getController();
var ds = controller.getProperty('defaultSeries');
if (null == data3 || ds == data3) {
this.bindValues(data1,false);
}
break;
case 'seriesChange':
this.bindValues(null,true);
break;
case 'modelChange':
this.bindValues(null,true);
break;
}
}

function _ZEN_Component_form_onloadHandler() {
this.connectToController();
var controller = this.getController();
if (controller && !controller.hasData()) {
this.bindValues(null,false);
}
this.clearModified();
}

function _ZEN_Component_form_reload(key) {
this.key = key;
var ctrl = this.findElement('formKey');
zenASSERT(ctrl,"Unable to find formKey element",arguments);
ctrl.value = key;
if ('' != this.OnLoadForm) {
this.ReloadForm(this.index, this.OnLoadForm, this.key);
}
}

function _ZEN_Component_form_reset() {
this.getFormElement().reset();
this.clearModified(true);
}

function _ZEN_Component_form_save() {
var id = '';
var controller = this.getController();
if (controller && ''!=controller.getProperty('modelClass')) {
if (controller.isModelReadOnly()) {
alert(this.readOnlyMessage);
return id;
}
if (!this.validate()) {
return id;
}
id = controller.save();
}
return id;
}

function _ZEN_Component_form_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_Component_form_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_Component_form_setProperty(property,value,value2) {
switch(property) {
case 'target':
case 'enctype':
var form = this.getFormElement();
form[property] = value;
break;
case 'messageTargetId':
case 'noModelMessage':
case 'invalidMessage':
case 'readOnlyMessage':
form[property] = value;
break;
case 'key':
this.reload(value);
break;
case 'nextPage':
var next = this.findElement('nextPage');
zenASSERT(next,"Unable to find nextPage element",arguments);
next.value = value;
this.nextPage = value;
break;
case 'OnSubmitForm':
var m = this.findElement('submitMethod');
zenASSERT(m,"Unable to find submitMethod element",arguments);
m.value = value;
this.OnSubmitForm = value;
break;
case 'autoValidate':
this.autoValidate = value ? true : false;
break;
case 'controllerId':
this.setControllerId(value);
this.bindValues();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_form_setValuesByName(values) {
var controls = this.getControlList('name');
for (var name in values) {
if (controls[name]) {
controls[name].setValue(values[name]);
}
}
}

function _ZEN_Component_form_showMessage(message) {
if (!zenIsMissing(this.messageTargetId)) {
var ctrl = zenPage.getComponentById(this.messageTargetId);
if (ctrl) {
ctrl.setProperty('value',message);
return true;
}
}
return false;
}

function _ZEN_Component_form_submit(action) {
var canSubmit = true;
var controls = this.getControlList();
for (var n = 0; n < controls.length; n++) {
var child = controls[n];
if (child.onsubmit) {
zenInvokeCallbackMethod(child.onsubmit,child,'onsubmit');
}
}
var controller = this.getController();
if (controller && ''!=controller.getProperty('modelClass')) {
if (controller.isModelReadOnly()) {
alert(this.readOnlyMessage);
return
}
}
if (this.autoValidate && !this.validate()) {
return;
}
if ('' != this.onsubmit) {
canSubmit = zenInvokeCallbackMethod(this.onsubmit,this,'onsubmit');
}
if (canSubmit) {
var controller = this.getController();
if (controller && ''!=controller.getProperty('modelClass')) {
var formKey = this.findElement('formKey');
var modelClass = this.findElement('modelClass');
formKey.value = controller.getProperty('modelId');
modelClass.value = controller.getProperty('modelClass');
}
var ctrl = this.findElement('action');
ctrl.value = (null == action) ? 'submit' : action;
this.getFormElement().submit();
}
}

function _ZEN_Component_form_submitHandler() {
zenInvokeCallbackMethod(this.ondefault,this,'ondefault');
return false;
}

function _ZEN_Component_form_validate() {
var valid = true;
var invalidList = new Array();
var invalidMessage = new Object();
if ('' != this.onvalidate) {
valid = zenInvokeCallbackMethod(this.onvalidate,this,'onvalidate','invalidList',invalidList);
}
var controller = this.getController();
if (valid) {
var controls = this.getControlList();
for (var n = 0; n < controls.length; n++) {
var child = controls[n];
var dcMsg = '';
child.setProperty('invalid',false);
if (controller && ('' != child.dataBinding)) {
dcMsg = controller.isPropertyValid(child.dataBinding, child.getValue());
}
if ('' != dcMsg) {
invalidMessage[invalidList.length] = dcMsg;
invalidList[invalidList.length] = child;
}
else {
if (!child.validationHandler()) {
invalidList[invalidList.length] = child;
}
}
}
}
if (invalidList.length > 0) {
valid = false;
if ('' != this.oninvalid) {
valid = zenInvokeCallbackMethod(this.oninvalid,this,'oninvalid','invalidList',invalidList);
}
else {
var msg = this.invalidMessage + '\n-------------------\n';
for (var n = 0; n < invalidList.length; n++) {
var ctrl = invalidList[n];
ctrl.setProperty('invalid',true);
if (n==0) {
ctrl.focus();
}
if (null == invalidMessage[n] || '' == invalidMessage[n]) {
msg += ctrl.getInvalidReason() + '\n';
}
else {
msg += invalidMessage[n] + '\n';
}
}
alert(msg);
}
}
return valid;
}

function _ZEN_Component_form_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}

function _ZEN_Component_form_ReloadForm(pFormIndex,pOnLoadForm,pKey) {
	zenInstanceMethod(this,'ReloadForm','L,L,L','',arguments);
}
function _ZEN_Component_form__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_form.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_form.prototype;
	p.constructor = _ZEN_Component_form;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.form';
	p._type = 'form';
	p.serialize = _ZEN_Component_form_serialize;
	p.getSettings = _ZEN_Component_form_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_form_ReallyRefreshContents;
	p.ReloadForm = _ZEN_Component_form_ReloadForm;
	p.bindValues = _ZEN_Component_form_bindValues;
	p.clearModified = _ZEN_Component_form_clearModified;
	p.connectToController = _ZEN_Component_form_connectToController;
	p.controlChangeHandler = _ZEN_Component_form_controlChangeHandler;
	p.disconnectFromController = _ZEN_Component_form_disconnectFromController;
	p.getControlList = _ZEN_Component_form_getControlList;
	p.getController = _ZEN_Component_form_getController;
	p.getFormElement = _ZEN_Component_form_getFormElement;
	p.isModified = _ZEN_Component_form_isModified;
	p.notifyView = _ZEN_Component_form_notifyView;
	p.notifyViewHandler = _ZEN_Component_form_notifyViewHandler;
	p.onloadHandler = _ZEN_Component_form_onloadHandler;
	p.reload = _ZEN_Component_form_reload;
	p.reset = _ZEN_Component_form_reset;
	p.save = _ZEN_Component_form_save;
	p.sendEventToController = _ZEN_Component_form_sendEventToController;
	p.setControllerId = _ZEN_Component_form_setControllerId;
	p.setProperty = _ZEN_Component_form_setProperty;
	p.setValuesByName = _ZEN_Component_form_setValuesByName;
	p.showMessage = _ZEN_Component_form_showMessage;
	p.submit = _ZEN_Component_form_submit;
	p.submitHandler = _ZEN_Component_form_submitHandler;
	p.validate = _ZEN_Component_form_validate;
}

// ================================================================================
_zenClassIdx['dynaForm'] = '_ZEN_Component_dynaForm';
function _ZEN_Component_dynaForm(index,id) {
	if (index>=0) {_ZEN_Component_dynaForm__init(this,index,id);}
}

function _ZEN_Component_dynaForm__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_form__init) ?zenMaster._ZEN_Component_form__init(o,index,id):_ZEN_Component_form__init(o,index,id);
	o.OnGetPropertyInfo = '';
	o.controller = '';
	o.controllerId = '';
	o.defaultGroupId = '';
	o.injectControls = 'after';
	o.onnotifyView = '';
}
function _ZEN_Component_dynaForm_serialize(set,s)
{
	s[0]='1712633522';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnGetPropertyInfo;s[7]=this.OnLoadForm;s[8]=this.OnSubmitForm;s[9]=this.align;s[10]=(this.autoValidate?1:0);s[11]=this.aux;s[12]=this.cellAlign;s[13]=this.cellSize;s[14]=this.cellStyle;s[15]=this.cellVAlign;s[16]=set.serializeList(this,this.children,true,'children');s[17]=this.containerStyle;s[18]=this.controller;s[19]=this.controllerId;s[20]=this.defaultGroupId;s[21]=(this.disabled?1:0);s[22]=(this.dragEnabled?1:0);s[23]=(this.dropEnabled?1:0);s[24]=(this.dynamic?1:0);s[25]=this.enclosingClass;s[26]=this.enclosingStyle;s[27]=this.enctype;s[28]=this.error;s[29]=this.groupClass;s[30]=this.groupStyle;s[31]=this.height;s[32]=(this.hidden?1:0);s[33]=this.hint;s[34]=this.hintClass;s[35]=this.hintStyle;s[36]=this.injectControls;s[37]=this.invalidMessage;s[38]=this.key;s[39]=this.label;s[40]=this.labelClass;s[41]=this.labelPosition;s[42]=this.labelStyle;s[43]=this.layout;s[44]=this.messageTargetId;s[45]=this.nextPage;s[46]=this.noModelMessage;s[47]=this.onafterdrag;s[48]=this.onbeforedrag;s[49]=this.onchange;s[50]=this.onclick;s[51]=this.ondefault;s[52]=this.ondrag;s[53]=this.ondrop;s[54]=this.onhide;s[55]=this.oninvalid;s[56]=this.onnotifyView;s[57]=this.onrefresh;s[58]=this.onreset;s[59]=this.onshow;s[60]=this.onsubmit;s[61]=this.onupdate;s[62]=this.onvalidate;s[63]=this.overlayMode;s[64]=this.readOnlyMessage;s[65]=this.renderFlag;s[66]=(this.showLabel?1:0);s[67]=this.slice;s[68]=this.target;s[69]=this.title;s[70]=this.tuple;s[71]=this.valign;s[72]=(this.visible?1:0);s[73]=this.width;
}
function _ZEN_Component_dynaForm_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['defaultGroupId'] = 'id';
	s['injectControls'] = 'enum:before,after';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dynaForm_connectToController() {
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

function _ZEN_Component_dynaForm_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_Component_dynaForm_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_Component_dynaForm_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_Component_dynaForm_notifyViewHandler(reason,data1,data2,data3) {
switch(reason) {
case 'modelChange':
if (null != this.controller) {
var ok = this.RecreateForm(this.controller);
}
break;
default:
return this.invokeSuper('notifyViewHandler',arguments);
}
return true;
}

function _ZEN_Component_dynaForm_onRefreshContents() {
this.bindValues(null,true);
}

function _ZEN_Component_dynaForm_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_Component_dynaForm_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_Component_dynaForm_setProperty(property,value,value2) {
switch(property) {
case 'defaultGroupId':
form[property] = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_dynaForm_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}

function _ZEN_Component_dynaForm_RecreateForm(pController) {
	return zenInstanceMethod(this,'RecreateForm','O','BOOLEAN',arguments);
}

function _ZEN_Component_dynaForm_ReloadForm(pFormIndex,pOnLoadForm,pKey) {
	zenInstanceMethod(this,'ReloadForm','L,L,L','',arguments);
}
function _ZEN_Component_dynaForm__Loader() {
	zenLoadClass('_ZEN_Component_form');
	_ZEN_Component_dynaForm.prototype = zenCreate('_ZEN_Component_form',-1);
	var p = _ZEN_Component_dynaForm.prototype;
	p.constructor = _ZEN_Component_dynaForm;
	p.superClass = ('undefined' == typeof _ZEN_Component_form) ? zenMaster._ZEN_Component_form.prototype:_ZEN_Component_form.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dynaForm';
	p._type = 'dynaForm';
	p.serialize = _ZEN_Component_dynaForm_serialize;
	p.getSettings = _ZEN_Component_dynaForm_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_dynaForm_ReallyRefreshContents;
	p.RecreateForm = _ZEN_Component_dynaForm_RecreateForm;
	p.ReloadForm = _ZEN_Component_dynaForm_ReloadForm;
	p.connectToController = _ZEN_Component_dynaForm_connectToController;
	p.disconnectFromController = _ZEN_Component_dynaForm_disconnectFromController;
	p.getController = _ZEN_Component_dynaForm_getController;
	p.notifyView = _ZEN_Component_dynaForm_notifyView;
	p.notifyViewHandler = _ZEN_Component_dynaForm_notifyViewHandler;
	p.onRefreshContents = _ZEN_Component_dynaForm_onRefreshContents;
	p.sendEventToController = _ZEN_Component_dynaForm_sendEventToController;
	p.setControllerId = _ZEN_Component_dynaForm_setControllerId;
	p.setProperty = _ZEN_Component_dynaForm_setProperty;
}

// ================================================================================
_zenClassIdx['hgroup'] = '_ZEN_Component_hgroup';
function _ZEN_Component_hgroup(index,id) {
	if (index>=0) {_ZEN_Component_hgroup__init(this,index,id);}
}

function _ZEN_Component_hgroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.layout = 'horizontal';
}
function _ZEN_Component_hgroup_serialize(set,s)
{
	s[0]='4052196350';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.renderFlag;s[44]=(this.showLabel?1:0);s[45]=this.slice;s[46]=this.title;s[47]=this.tuple;s[48]=this.valign;s[49]=(this.visible?1:0);s[50]=this.width;
}
function _ZEN_Component_hgroup_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_hgroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_hgroup__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_hgroup.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_hgroup.prototype;
	p.constructor = _ZEN_Component_hgroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.hgroup';
	p._type = 'hgroup';
	p.serialize = _ZEN_Component_hgroup_serialize;
	p.getSettings = _ZEN_Component_hgroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_hgroup_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['menu'] = '_ZEN_Component_menu';
function _ZEN_Component_menu(index,id) {
	if (index>=0) {_ZEN_Component_menu__init(this,index,id);}
}

function _ZEN_Component_menu__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.caption = '';
	o.disabled = false;
	o.groupClass = 'menuTable';
	o.help = '';
	o.image = '';
	o.imageHeight = '16';
	o.imageWidth = '16';
	o.layout = 'horizontal';
	o.link = '';
	o.linkResource = '';
	o.onactivate = '';
	o.onclick = '';
	o.onshowHelp = '';
	o.subMenuActive = false;
	o.subMenuLevel = '0';
	o.target = '';
}
function _ZEN_Component_menu_serialize(set,s)
{
	s[0]='3598656517';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.cellAlign;s[10]=this.cellSize;s[11]=this.cellStyle;s[12]=this.cellVAlign;s[13]=set.serializeList(this,this.children,true,'children');s[14]=this.containerStyle;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=this.help;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=this.image;s[31]=this.imageHeight;s[32]=this.imageWidth;s[33]=this.label;s[34]=this.labelClass;s[35]=this.labelPosition;s[36]=this.labelStyle;s[37]=this.layout;s[38]=this.link;s[39]=this.linkResource;s[40]=this.onactivate;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.ondrag;s[45]=this.ondrop;s[46]=this.onhide;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onshowHelp;s[50]=this.onupdate;s[51]=this.overlayMode;s[52]=this.renderFlag;s[53]=(this.showLabel?1:0);s[54]=this.slice;s[55]=(this.subMenuActive?1:0);s[56]=this.subMenuLevel;s[57]=this.target;s[58]=this.title;s[59]=this.tuple;s[60]=this.valign;s[61]=(this.visible?1:0);s[62]=this.width;
}
function _ZEN_Component_menu_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['disabled'] = 'boolean';
	s['help'] = 'caption';
	s['image'] = 'uri';
	s['imageHeight'] = 'length';
	s['imageWidth'] = 'length';
	s['link'] = 'uri';
	s['linkResource'] = 'resource';
	s['onactivate'] = 'eventHandler';
	s['onclick'] = 'eventHandler';
	s['onshowHelp'] = 'eventHandler';
	s['subMenuActive'] = 'boolean';
	s['target'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_menu_onActionHandler() {
}

function _ZEN_Component_menu_onEndModalHandler(zindex) {
var hdr = this.findElement('a');
zenASSERT(hdr,"Unable to find anchor div.",arguments);
if (2 == this.subMenuLevel) {
var submenu = self.document.getElementById('zenModalDiv');
}
else {
var submenu = this.findElement('submenu');
}
zenASSERT(submenu,"Unable to find submenu div.",arguments);
hdr.className = 'menuItem';
submenu.style.display = 'none';
this.activeSubmenu=null;
this.subMenuActive = false;
}

function _ZEN_Component_menu_onItemActionHandler(depth) {
if (depth > 1) {
zenPage.endModal();
}
if (this.parent.onItemActionHandler) {
this.parent.onItemActionHandler(depth+1);
}
}

function _ZEN_Component_menu_onItemShowHelpHandler(mode,item) {
if (this.parent.onItemShowHelpHandler) {
this.parent.onItemShowHelpHandler(mode,item);
}
else {
if (mode) {
zenInvokeCallbackMethod(this.onshowHelp, this, 'onshowHelp', 'help',item.help);
}
else {
zenInvokeCallbackMethod(this.onshowHelp, this, 'onshowHelp', 'help','');
}
}
}

function _ZEN_Component_menu_onShowHelpHandler(mode) {
}

function _ZEN_Component_menu_onStartModalHandler(zindex) {
var trap = self.document.getElementById("zenMouseTrap");
if (zenASSERT(trap,"Unable to find zenMouseTrap div.",arguments)) { return; }
var hdr = this.findElement('a');
zenASSERT(hdr,"Unable to find anchor div.",arguments);
var submenuDiv = this.findElement('submenu');
zenASSERT(submenuDiv,"Unable to find submenu div.",arguments);
var vertical = true;
if (1==this.subMenuLevel && this.parent.layout && this.parent.layout == 'horizontal') {
vertical = false;
}
var top,right;
if (vertical) {
var top = zenGetTop(hdr);
var right = zenGetLeft(hdr) + hdr.offsetWidth;
}
else {
var top = zenGetTop(hdr) + hdr.offsetHeight;
var right = zenGetLeft(hdr);
}
var submenu = submenuDiv;
if (2 == this.subMenuLevel) {
var div = self.document.getElementById('zenModalDiv');
div.innerHTML = submenuDiv.innerHTML;
submenu = div;
}
submenu.style.position = 'absolute';
submenu.style.top = top;
submenu.style.left = right;
submenu.style.display = '';
this.getEnclosingDiv().style.zIndex = zindex;
hdr.style.zIndex = zindex+1;
submenu.style.zIndex = zindex+1;
document.body.appendChild(submenu);
this.activeSubmenu=submenu;
}

function _ZEN_Component_menu_showSubMenu() {
var hdr = this.findElement('a');
if (null == hdr) {
return;
}
zenASSERT(hdr,"Unable to find anchor div.",arguments);
if (this.subMenuActive) {
return;
}
zenInvokeCallbackMethod(this.onactivate,this,'onactivate');
this.subMenuActive = true;
hdr.className = 'menuItemActive';
zenPage.startModal(this);
}

function _ZEN_Component_menu_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_menu__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_menu.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_menu.prototype;
	p.constructor = _ZEN_Component_menu;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.menu';
	p._type = 'menu';
	p.serialize = _ZEN_Component_menu_serialize;
	p.getSettings = _ZEN_Component_menu_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_menu_ReallyRefreshContents;
	p.onActionHandler = _ZEN_Component_menu_onActionHandler;
	p.onEndModalHandler = _ZEN_Component_menu_onEndModalHandler;
	p.onItemActionHandler = _ZEN_Component_menu_onItemActionHandler;
	p.onItemShowHelpHandler = _ZEN_Component_menu_onItemShowHelpHandler;
	p.onShowHelpHandler = _ZEN_Component_menu_onShowHelpHandler;
	p.onStartModalHandler = _ZEN_Component_menu_onStartModalHandler;
	p.showSubMenu = _ZEN_Component_menu_showSubMenu;
}

// ================================================================================
_zenClassIdx['hmenu'] = '_ZEN_Component_hmenu';
function _ZEN_Component_hmenu(index,id) {
	if (index>=0) {_ZEN_Component_hmenu__init(this,index,id);}
}

function _ZEN_Component_hmenu__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_menu__init) ?zenMaster._ZEN_Component_menu__init(o,index,id):_ZEN_Component_menu__init(o,index,id);
	o.caption = '';
	o.cellAlign = 'left';
	o.disabled = false;
	o.groupClass = 'hmenuTable';
	o.help = '';
	o.image = '';
	o.imageHeight = '16';
	o.imageWidth = '16';
	o.link = '';
	o.linkResource = '';
	o.onclick = '';
	o.target = '';
	o.width = '100%';
}
function _ZEN_Component_hmenu_serialize(set,s)
{
	s[0]='3598656517';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.cellAlign;s[10]=this.cellSize;s[11]=this.cellStyle;s[12]=this.cellVAlign;s[13]=set.serializeList(this,this.children,true,'children');s[14]=this.containerStyle;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=this.help;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=this.image;s[31]=this.imageHeight;s[32]=this.imageWidth;s[33]=this.label;s[34]=this.labelClass;s[35]=this.labelPosition;s[36]=this.labelStyle;s[37]=this.layout;s[38]=this.link;s[39]=this.linkResource;s[40]=this.onactivate;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.ondrag;s[45]=this.ondrop;s[46]=this.onhide;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onshowHelp;s[50]=this.onupdate;s[51]=this.overlayMode;s[52]=this.renderFlag;s[53]=(this.showLabel?1:0);s[54]=this.slice;s[55]=(this.subMenuActive?1:0);s[56]=this.subMenuLevel;s[57]=this.target;s[58]=this.title;s[59]=this.tuple;s[60]=this.valign;s[61]=(this.visible?1:0);s[62]=this.width;
}
function _ZEN_Component_hmenu_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['disabled'] = 'boolean';
	s['help'] = 'caption';
	s['image'] = 'uri';
	s['imageHeight'] = 'length';
	s['imageWidth'] = 'length';
	s['link'] = 'uri';
	s['linkResource'] = 'resource';
	s['onclick'] = 'eventHandler';
	s['target'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_hmenu_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_hmenu__Loader() {
	zenLoadClass('_ZEN_Component_menu');
	_ZEN_Component_hmenu.prototype = zenCreate('_ZEN_Component_menu',-1);
	var p = _ZEN_Component_hmenu.prototype;
	p.constructor = _ZEN_Component_hmenu;
	p.superClass = ('undefined' == typeof _ZEN_Component_menu) ? zenMaster._ZEN_Component_menu.prototype:_ZEN_Component_menu.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.hmenu';
	p._type = 'hmenu';
	p.serialize = _ZEN_Component_hmenu_serialize;
	p.getSettings = _ZEN_Component_hmenu_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_hmenu_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['vmenu'] = '_ZEN_Component_vmenu';
function _ZEN_Component_vmenu(index,id) {
	if (index>=0) {_ZEN_Component_vmenu__init(this,index,id);}
}

function _ZEN_Component_vmenu__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_menu__init) ?zenMaster._ZEN_Component_menu__init(o,index,id):_ZEN_Component_menu__init(o,index,id);
	o.caption = '';
	o.cellVAlign = 'top';
	o.disabled = false;
	o.enclosingClass = 'vmenu';
	o.groupClass = 'vmenuTable';
	o.help = '';
	o.image = '';
	o.imageHeight = '16';
	o.imageWidth = '16';
	o.layout = 'vertical';
	o.link = '';
	o.linkResource = '';
	o.onclick = '';
	o.target = '';
}
function _ZEN_Component_vmenu_serialize(set,s)
{
	s[0]='3598656517';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.cellAlign;s[10]=this.cellSize;s[11]=this.cellStyle;s[12]=this.cellVAlign;s[13]=set.serializeList(this,this.children,true,'children');s[14]=this.containerStyle;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=this.help;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=this.image;s[31]=this.imageHeight;s[32]=this.imageWidth;s[33]=this.label;s[34]=this.labelClass;s[35]=this.labelPosition;s[36]=this.labelStyle;s[37]=this.layout;s[38]=this.link;s[39]=this.linkResource;s[40]=this.onactivate;s[41]=this.onafterdrag;s[42]=this.onbeforedrag;s[43]=this.onclick;s[44]=this.ondrag;s[45]=this.ondrop;s[46]=this.onhide;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onshowHelp;s[50]=this.onupdate;s[51]=this.overlayMode;s[52]=this.renderFlag;s[53]=(this.showLabel?1:0);s[54]=this.slice;s[55]=(this.subMenuActive?1:0);s[56]=this.subMenuLevel;s[57]=this.target;s[58]=this.title;s[59]=this.tuple;s[60]=this.valign;s[61]=(this.visible?1:0);s[62]=this.width;
}
function _ZEN_Component_vmenu_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['disabled'] = 'boolean';
	s['help'] = 'caption';
	s['image'] = 'uri';
	s['imageHeight'] = 'length';
	s['imageWidth'] = 'length';
	s['link'] = 'uri';
	s['linkResource'] = 'resource';
	s['onclick'] = 'eventHandler';
	s['target'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_vmenu_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_vmenu__Loader() {
	zenLoadClass('_ZEN_Component_menu');
	_ZEN_Component_vmenu.prototype = zenCreate('_ZEN_Component_menu',-1);
	var p = _ZEN_Component_vmenu.prototype;
	p.constructor = _ZEN_Component_vmenu;
	p.superClass = ('undefined' == typeof _ZEN_Component_menu) ? zenMaster._ZEN_Component_menu.prototype:_ZEN_Component_menu.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.vmenu';
	p._type = 'vmenu';
	p.serialize = _ZEN_Component_vmenu_serialize;
	p.getSettings = _ZEN_Component_vmenu_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_vmenu_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['modalGroup'] = '_ZEN_Component_modalGroup';
function _ZEN_Component_modalGroup(index,id) {
	if (index>=0) {_ZEN_Component_modalGroup__init(this,index,id);}
}

function _ZEN_Component_modalGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.groupTitle = '';
	o.groupType = '';
	o.hidden = true;
	o.okCaption = 'OK';
	o.onaction = '';
	o.onhideGroup = '';
	o.onshowGroup = '';
	o.seed = '';
	o.value = '';
}
function _ZEN_Component_modalGroup_serialize(set,s)
{
	s[0]='577476537';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.groupTitle;s[24]=this.groupType;s[25]=this.height;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=this.label;s[31]=this.labelClass;s[32]=this.labelPosition;s[33]=this.labelStyle;s[34]=this.layout;s[35]=this.okCaption;s[36]=this.onaction;s[37]=this.onafterdrag;s[38]=this.onbeforedrag;s[39]=this.onclick;s[40]=this.ondrag;s[41]=this.ondrop;s[42]=this.onhide;s[43]=this.onhideGroup;s[44]=this.onrefresh;s[45]=this.onshow;s[46]=this.onshowGroup;s[47]=this.onupdate;s[48]=this.overlayMode;s[49]=this.renderFlag;s[50]=this.seed;s[51]=(this.showLabel?1:0);s[52]=this.slice;s[53]=this.title;s[54]=this.tuple;s[55]=this.valign;s[56]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[57]=(this.visible?1:0);s[58]=this.width;
}
function _ZEN_Component_modalGroup_getSettings(s)
{
	s['name'] = 'string';
	s['groupTitle'] = 'caption';
	s['okCaption'] = 'caption';
	s['onaction'] = 'eventHandler';
	s['onhideGroup'] = 'eventHandler';
	s['onshowGroup'] = 'eventHandler';
	s['seed'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_modalGroup_actionHandler() {
switch(this.groupType) {
case 'calendar':
var ctrl = zenPage.getComponent(this.controlIndex);
this.value = ctrl.getValue();
zenInvokeCallbackMethod(this.onaction,this,'onaction','group',this);
break;
}
zenPage.endModal();
}

function _ZEN_Component_modalGroup_getValue() {
return this.getProperty('value');
}

function _ZEN_Component_modalGroup_mousedownHandler(evt) {
var div = self.document.getElementById('zenFloatingDiv');
evt = evt ? evt : window.event;
var x = parseInt(div.style.left,10);
var y = parseInt(div.style.top,10);
this.deltaX = evt.clientX - x;
this.deltaY = evt.clientY - y;
div.onmousemove = this.wrapMethod('mousemoveHandler');
div.onmouseup = this.wrapMethod('mouseupHandler');
if (evt.stopPropagation) { evt.stopPropagation(); }
if (evt.preventDefault) { evt.preventDefault(); }
}

function _ZEN_Component_modalGroup_mousemoveHandler(evt) {
var div = self.document.getElementById('zenFloatingDiv');
evt = evt ? evt : window.event;
div.style.left = (evt.clientX - this.deltaX) + 'px';
div.style.top = (evt.clientY - this.deltaY) + 'px';
if (evt.stopPropagation) { evt.stopPropagation(); }
}

function _ZEN_Component_modalGroup_mouseupHandler(evt) {
var div = self.document.getElementById('zenFloatingDiv');
evt = evt ? evt : window.event;
div.onmousemove = null;
div.onmouseup = null;
if (evt.stopPropagation) { evt.stopPropagation(); }
}

function _ZEN_Component_modalGroup_onEndModalHandler(zindex) {
var div = self.document.getElementById('zenFloatingDiv');
div.style.display = "none";
zenTrapTAB = (null == this._oldTrapTAB) ? false : this._oldTrapTAB;
if (zenPage && 'dynamic' == this.groupType) {
this.visible = false;
zenPage.removeChild(this);
}
div.onmousedown = null;
div.onmouseup = null;
div.onmousemove = null;
zenInvokeCallbackMethod(this.onhideGroup,this,'onhideGroup','group',this);
}

function _ZEN_Component_modalGroup_onStartModalHandler(zindex) {
var div = self.document.getElementById('zenFloatingDiv');
zenASSERT(div,'Unable to find floating div',arguments);
var update = false;
div.className = 'modalGroup';
div.onmousedown = null;
div.onmouseup = null;
div.onmousemove = null;
div.style.width = (this._width == null) ? 'auto' : this._width;
div.style.height = (this._height == null) ? 'auto' : this._height;
this._width = null;
this._height = null;
var contents = '';
switch (this.groupType) {
case 'calendar':
var cal = zenPage.createComponent('calendar');
this.addChild(cal);
cal.setProperty('startYear',1900);
cal.setProperty('onchange','zenPage.getComponent('+this.index+').actionHandler();');
if (this._parms) {
for (var p in this._parms) {
cal.setProperty(p,this._parms[p]);
}
}
cal.setProperty('value',this.value);
this.controlIndex = cal.index;
break;
case 'msgBox':
contents = this.value;
break;
default:
break;
}
var html = new Array();
if ('' != this.groupTitle) {
html[html.length] = '<div class="modalGroupTitle" onselectstart="return false;" onmousedown="zenPage.getComponent('+this.index+').mousedownHandler(event);">';
html[html.length] = '<table border="1" cellpadding="0" cellspacing="0"><tr><td width="90%" align="left">' + this.groupTitle + '</td>';
html[html.length] = '<td align="right"><input class="modalGroupCloseButton" type="button" value="X" onclick="zenPage.endModal();"></td></tr></table>';
html[html.length] = '</div>';
}
if ('static' != this.groupType) {
if ('' != contents) {
html[html.length] = '<div class="modalGroupBody">';
html[html.length] = contents;
html[html.length] = '</div>';
html[html.length] = '<div class="modalGroupFooter">';
html[html.length] = '<input type="button" value="'+this.okCaption+'" onclick="zenPage.endModal();" />';
html[html.length] = '</div>';
}
}
if ('static' == this.groupType) {
var staticHTML = this._htmlStash;
if (null == staticHTML) {
var enc = this.getEnclosingDiv();
staticHTML = enc.innerHTML;
this._htmlStash = staticHTML;
}
html[html.length] = '<div class="modalGroupBody">';
html[html.length] = staticHTML;
html[html.length] = '</div>';
update = true;
}
else {
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
var divid = ('' == child.id) ? 'zen'+child.index : child.id;
html[html.length] = '<div id="'+divid+'" class="modalGroupBody"></div>';
}
}
div.innerHTML = html.join('');
if ('static' != this.groupType) {
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if (child.renderContents) {
child.renderContents();
}
else {
child.refreshContents();
}
}
}
else if (update) {
this.updateControlsInGroup();
}
var page = zenPage.getEnclosingDiv();
var top,left;
if (this._top==null) {
top = 200;
top += document.body.scrollTop;
}
else {
top = this._top;
this._top = null;
}
if (this._left==null) {
left = (page.offsetWidth - div.offsetWidth)/2;
left += document.body.scrollLeft;
}
else {
left = this._left;
this._left = null;
}
div.style.top = top + 'px';
div.style.left = left + 'px';
zenInvokeCallbackMethod(this.onshowGroup,this,'onshowGroup','group',this);
this._oldTrapTAB = zenTrapTAB;
zenTrapTAB = true;
div.style.zIndex = zindex;
div.style.display = "";
div.focus();
}

function _ZEN_Component_modalGroup_show(title,type,value,top,left,wid,hgt,parms) {
var enc = this.getEnclosingDiv();
if (enc) {
this.groupType = 'static'
this.groupTitle = (null==title||''==title) ? this.groupTitle : title;
}
else {
this.groupType = type==null ? 'dynamic' : type;
this.value = value==null ? '' : value;
this.groupTitle = title==null ? '' : title;
if (zenPage && 'dynamic' == this.groupType) {
zenPage.addChild(this);
}
}
this._top = top;
this._left = left;
this._width = wid;
this._height = hgt;
this._parms = parms;
zenPage.startModal(this);
}

function _ZEN_Component_modalGroup_wrapMethod(methodName) {
return new Function('evt','return zenPage.getComponent('+this.index+').'+methodName+'(evt);');
}

function _ZEN_Component_modalGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_modalGroup__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_modalGroup.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_modalGroup.prototype;
	p.constructor = _ZEN_Component_modalGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.modalGroup';
	p._type = 'modalGroup';
	p.serialize = _ZEN_Component_modalGroup_serialize;
	p.getSettings = _ZEN_Component_modalGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_modalGroup_ReallyRefreshContents;
	p.actionHandler = _ZEN_Component_modalGroup_actionHandler;
	p.getValue = _ZEN_Component_modalGroup_getValue;
	p.mousedownHandler = _ZEN_Component_modalGroup_mousedownHandler;
	p.mousemoveHandler = _ZEN_Component_modalGroup_mousemoveHandler;
	p.mouseupHandler = _ZEN_Component_modalGroup_mouseupHandler;
	p.onEndModalHandler = _ZEN_Component_modalGroup_onEndModalHandler;
	p.onStartModalHandler = _ZEN_Component_modalGroup_onStartModalHandler;
	p.show = _ZEN_Component_modalGroup_show;
	p.wrapMethod = _ZEN_Component_modalGroup_wrapMethod;
}

// ================================================================================
_zenClassIdx['pane'] = '_ZEN_Component_pane';
function _ZEN_Component_pane(index,id) {
	if (index>=0) {_ZEN_Component_pane__init(this,index,id);}
}

function _ZEN_Component_pane__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.paneName = '';
}
function _ZEN_Component_pane_serialize(set,s)
{
	s[0]='3486075863';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.paneName;s[44]=this.renderFlag;s[45]=(this.showLabel?1:0);s[46]=this.slice;s[47]=this.title;s[48]=this.tuple;s[49]=this.valign;s[50]=(this.visible?1:0);s[51]=this.width;
}
function _ZEN_Component_pane_getSettings(s)
{
	s['name'] = 'string';
	s['paneName'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_pane_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_pane__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_pane.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_pane.prototype;
	p.constructor = _ZEN_Component_pane;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.pane';
	p._type = 'pane';
	p.serialize = _ZEN_Component_pane_serialize;
	p.getSettings = _ZEN_Component_pane_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_pane_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['repeatingGroup'] = '_ZEN_Component_repeatingGroup';
function _ZEN_Component_repeatingGroup(index,id) {
	if (index>=0) {_ZEN_Component_repeatingGroup__init(this,index,id);}
}

function _ZEN_Component_repeatingGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.OnCreateResultSet = '';
	o.OnExecuteResultSet = '';
	o.columnName = '';
	o.groupByClause = '';
	o.maxRows = '100';
	o.onclickitem = '';
	o.orderByClause = '';
	o.parameters = new Array();
	o.queryClass = '';
	o.queryName = '';
	o.selectedIndex = '-1';
	o.sql = ''; // encrypted
	o.tableName = '';
	o.whereClause = '';
}
function _ZEN_Component_repeatingGroup_serialize(set,s)
{
	s[0]='4233397609';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnCreateResultSet;s[7]=this.OnExecuteResultSet;s[8]=this.align;s[9]=this.aux;s[10]=this.cellAlign;s[11]=this.cellSize;s[12]=this.cellStyle;s[13]=this.cellVAlign;s[14]=set.serializeList(this,this.children,true,'children');s[15]=this.columnName;s[16]=this.containerStyle;s[17]=(this.disabled?1:0);s[18]=(this.dragEnabled?1:0);s[19]=(this.dropEnabled?1:0);s[20]=(this.dynamic?1:0);s[21]=this.enclosingClass;s[22]=this.enclosingStyle;s[23]=this.error;s[24]=this.groupByClause;s[25]=this.groupClass;s[26]=this.groupStyle;s[27]=this.height;s[28]=(this.hidden?1:0);s[29]=this.hint;s[30]=this.hintClass;s[31]=this.hintStyle;s[32]=this.label;s[33]=this.labelClass;s[34]=this.labelPosition;s[35]=this.labelStyle;s[36]=this.layout;s[37]=this.maxRows;s[38]=this.onafterdrag;s[39]=this.onbeforedrag;s[40]=this.onclick;s[41]=this.onclickitem;s[42]=this.ondrag;s[43]=this.ondrop;s[44]=this.onhide;s[45]=this.onrefresh;s[46]=this.onshow;s[47]=this.onupdate;s[48]=this.orderByClause;s[49]=this.overlayMode;s[50]=set.serializeList(this,this.parameters,true,'parameters');s[51]=this.queryClass;s[52]=this.queryName;s[53]=this.renderFlag;s[54]=this.selectedIndex;s[55]=(this.showLabel?1:0);s[56]=this.slice;s[57]=this.sql;s[58]=this.tableName;s[59]=this.title;s[60]=this.tuple;s[61]=this.valign;s[62]=(this.visible?1:0);s[63]=this.whereClause;s[64]=this.width;
}
function _ZEN_Component_repeatingGroup_getSettings(s)
{
	s['name'] = 'string';
	s['columnName'] = 'string';
	s['groupByClause'] = 'string';
	s['maxRows'] = 'integer';
	s['onclickitem'] = 'eventHandler';
	s['orderByClause'] = 'string';
	s['parameters'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['selectedIndex'] = 'integer';
	s['sql'] = 'sql';
	s['tableName'] = 'string';
	s['whereClause'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_repeatingGroup_itemClickHandler(tuple) {
this.selectItem(tuple);
}

function _ZEN_Component_repeatingGroup_selectItem(tuple) {
if (this.selectedIndex >= 0) {
var div = this.findElement('div' + (parseInt(this.selectedIndex)+1));
if (div) {
div.className = 'repeatingGroup';
}
}
this.selectedIndex = tuple;
if (this.selectedIndex >= 0) {
var div = this.findElement('div' + (parseInt(this.selectedIndex)+1));
if (div) {
div.className = 'repeatingGroupSelected';
}
}
zenInvokeCallbackMethod(this.onclickitem,this,'onclickitem','item',tuple);
}

function _ZEN_Component_repeatingGroup_setProperty(property,value,value2) {
switch(property) {
case 'selectedIndex':
this.selectItem(parseInt(value,10));
break;
case 'parameters':
if ('' != value) {
value = value - 1;
if (this.parameters[value]) {
if (this.parameters[value].value != value2) {
this.parameters[value].value = value2;
}
}
}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_repeatingGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_repeatingGroup__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_repeatingGroup.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_repeatingGroup.prototype;
	p.constructor = _ZEN_Component_repeatingGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.repeatingGroup';
	p._type = 'repeatingGroup';
	p.serialize = _ZEN_Component_repeatingGroup_serialize;
	p.getSettings = _ZEN_Component_repeatingGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_repeatingGroup_ReallyRefreshContents;
	p.itemClickHandler = _ZEN_Component_repeatingGroup_itemClickHandler;
	p.selectItem = _ZEN_Component_repeatingGroup_selectItem;
	p.setProperty = _ZEN_Component_repeatingGroup_setProperty;
}

// ================================================================================
_zenClassIdx['tab'] = '_ZEN_Component_tab';
function _ZEN_Component_tab(index,id) {
	if (index>=0) {_ZEN_Component_tab__init(this,index,id);}
}

function _ZEN_Component_tab__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.caption = '';
	o.link = '';
	o.tabResource = '';
}
function _ZEN_Component_tab_serialize(set,s)
{
	s[0]='1064911741';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.cellAlign;s[10]=this.cellSize;s[11]=this.cellStyle;s[12]=this.cellVAlign;s[13]=set.serializeList(this,this.children,true,'children');s[14]=this.containerStyle;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=(this.hidden?1:0);s[26]=this.hint;s[27]=this.hintClass;s[28]=this.hintStyle;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelPosition;s[32]=this.labelStyle;s[33]=this.layout;s[34]=this.link;s[35]=this.onafterdrag;s[36]=this.onbeforedrag;s[37]=this.onclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onhide;s[41]=this.onrefresh;s[42]=this.onshow;s[43]=this.onupdate;s[44]=this.overlayMode;s[45]=this.renderFlag;s[46]=(this.showLabel?1:0);s[47]=this.slice;s[48]=this.tabResource;s[49]=this.title;s[50]=this.tuple;s[51]=this.valign;s[52]=(this.visible?1:0);s[53]=this.width;
}
function _ZEN_Component_tab_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['link'] = 'uri';
	s['tabResource'] = 'resource';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_tab_activate() {
if (this.parent.getTabIndex) {
this.parent.showTab(this.parent.getTabIndex(this));
return true;
}
return false;
}

function _ZEN_Component_tab_ondisabledHandler() {
if (this.parent.tabDisabledHandler) {
this.parent.tabDisabledHandler(this);
}
}

function _ZEN_Component_tab_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_tab__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_tab.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_tab.prototype;
	p.constructor = _ZEN_Component_tab;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.tab';
	p._type = 'tab';
	p.serialize = _ZEN_Component_tab_serialize;
	p.getSettings = _ZEN_Component_tab_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_tab_ReallyRefreshContents;
	p.activate = _ZEN_Component_tab_activate;
	p.ondisabledHandler = _ZEN_Component_tab_ondisabledHandler;
}

// ================================================================================
_zenClassIdx['tabFrame'] = '_ZEN_Component_tabFrame';
function _ZEN_Component_tabFrame(index,id) {
	if (index>=0) {_ZEN_Component_tabFrame__init(this,index,id);}
}

function _ZEN_Component_tabFrame__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
}
function _ZEN_Component_tabFrame_serialize(set,s)
{
	s[0]='4052196350';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.renderFlag;s[44]=(this.showLabel?1:0);s[45]=this.slice;s[46]=this.title;s[47]=this.tuple;s[48]=this.valign;s[49]=(this.visible?1:0);s[50]=this.width;
}
function _ZEN_Component_tabFrame_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_tabFrame_onloadHandler() {
this.invokeSuper('onloadHandler',arguments);
ZWL.initTabFrame();
}

function _ZEN_Component_tabFrame_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_tabFrame_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_tabFrame__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_tabFrame.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_tabFrame.prototype;
	p.constructor = _ZEN_Component_tabFrame;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.tabFrame';
	p._type = 'tabFrame';
	p.serialize = _ZEN_Component_tabFrame_serialize;
	p.getSettings = _ZEN_Component_tabFrame_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_tabFrame_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_tabFrame_onloadHandler;
	p.setProperty = _ZEN_Component_tabFrame_setProperty;
}

// ================================================================================
_zenClassIdx['tabGroup'] = '_ZEN_Component_tabGroup';
function _ZEN_Component_tabGroup(index,id) {
	if (index>=0) {_ZEN_Component_tabGroup__init(this,index,id);}
}

function _ZEN_Component_tabGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
	o.currTab = '1';
	o.onhideTab = '';
	o.onshowTab = '';
	o.remember = false;
	o.showBody = true;
	o.showTabBar = false;
}
function _ZEN_Component_tabGroup_serialize(set,s)
{
	s[0]='2303258771';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=this.currTab;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.groupClass;s[23]=this.groupStyle;s[24]=this.height;s[25]=(this.hidden?1:0);s[26]=this.hint;s[27]=this.hintClass;s[28]=this.hintStyle;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelPosition;s[32]=this.labelStyle;s[33]=this.layout;s[34]=this.onafterdrag;s[35]=this.onbeforedrag;s[36]=this.onclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onhide;s[40]=this.onhideTab;s[41]=this.onrefresh;s[42]=this.onshow;s[43]=this.onshowTab;s[44]=this.onupdate;s[45]=this.overlayMode;s[46]=(this.remember?1:0);s[47]=this.renderFlag;s[48]=(this.showBody?1:0);s[49]=(this.showLabel?1:0);s[50]=(this.showTabBar?1:0);s[51]=this.slice;s[52]=this.title;s[53]=this.tuple;s[54]=this.valign;s[55]=(this.visible?1:0);s[56]=this.width;
}
function _ZEN_Component_tabGroup_getSettings(s)
{
	s['name'] = 'string';
	s['currTab'] = 'integer';
	s['onhideTab'] = 'eventHandler';
	s['onshowTab'] = 'eventHandler';
	s['remember'] = 'boolean';
	s['showBody'] = 'boolean';
	s['showTabBar'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_tabGroup_childrenMutated() {
if (this.currTab > this.children.length) {
this.currTab = 0;
}
}

function _ZEN_Component_tabGroup_getCurrTabNo() {
return parseInt(this.currTab,10);
}

function _ZEN_Component_tabGroup_getTabCount() {
return this.children.length;
}

function _ZEN_Component_tabGroup_getTabIndex(tab) {
return this.getChildIndex(tab) + 1;
}

function _ZEN_Component_tabGroup_onloadHandler() {
if (this.remember) {
var tab = parseInt(zenLoadCookie(this,'currTab'),10);
if (tab > 0) {
this.showTab(tab);
}
}
}

function _ZEN_Component_tabGroup_setProperty(property,value,value2) {
switch(property) {
case 'remember':
this.remember = value ? true : false;
break;
case 'currTab':
this.showTab(parseInt(value,10));
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_tabGroup_showNextTab() {
this.showTab(parseInt(this.currTab,10)+1);
}

function _ZEN_Component_tabGroup_showPreviousTab() {
this.showTab(parseInt(this.currTab,10)-1);
}

function _ZEN_Component_tabGroup_showTab(tabno) {
if (this.currTab == tabno) return true;
if (tabno <= 0 || tabno > this.children.length) {
this.currTab = 0;
return true;
}
if (this.children[tabno-1].disabled) return true;
if (this.currTab > 0 && this.children.length > 0) {
var ret = zenInvokeCallbackMethod(this.onhideTab,this,'onhideTab');
if (this.onhideTab != '' && ret!=null && ret==false) {
return false;
}
this.children[this.currTab-1].setHidden(true);
if (this.showTabBar) {
var btn = this.findElement('btn_' + (this.currTab));
zenASSERT(btn,"Unable to find tab bar button element (1)",arguments);
btn.className = 'tabGroupButtonOff';
}
if (this.onhideTabHandler) {
this.onhideTabHandler(this.currTab);
}
}
this.currTab = tabno;
if (this.currTab > 0) {
this.children[this.currTab-1].setHidden(false);
if (this.showTabBar) {
var btn = this.findElement('btn_' + (this.currTab));
zenASSERT(btn,"Unable to find tab bar button element (2)",arguments);
btn.className = 'tabGroupButtonOn';
}
if (this.onshowTabHandler) {
this.onshowTabHandler(tabno);
}
zenInvokeCallbackMethod(this.onshowTab,this,'onshowTab');
}
if (this.remember) {
zenStoreCookie(this,'currTab',this.currTab);
}
return true;
}

function _ZEN_Component_tabGroup_tabDisabledHandler(tab) {
var tabno = this.getTabIndex(tab);
if (tabno > 0) {
var btn = this.findElement('btn_' + tabno);
if (btn) {
if (tab.disabled) {
btn.className = 'tabGroupButtonDisabled';
}
else {
btn.className = (tabno==this.currTab) ? 'tabGroupButtonOn' : 'tabGroupButtonOff';
}
}
}
}

function _ZEN_Component_tabGroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_tabGroup__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_tabGroup.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_tabGroup.prototype;
	p.constructor = _ZEN_Component_tabGroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.tabGroup';
	p._type = 'tabGroup';
	p.serialize = _ZEN_Component_tabGroup_serialize;
	p.getSettings = _ZEN_Component_tabGroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_tabGroup_ReallyRefreshContents;
	p.childrenMutated = _ZEN_Component_tabGroup_childrenMutated;
	p.getCurrTabNo = _ZEN_Component_tabGroup_getCurrTabNo;
	p.getTabCount = _ZEN_Component_tabGroup_getTabCount;
	p.getTabIndex = _ZEN_Component_tabGroup_getTabIndex;
	p.onloadHandler = _ZEN_Component_tabGroup_onloadHandler;
	p.setProperty = _ZEN_Component_tabGroup_setProperty;
	p.showNextTab = _ZEN_Component_tabGroup_showNextTab;
	p.showPreviousTab = _ZEN_Component_tabGroup_showPreviousTab;
	p.showTab = _ZEN_Component_tabGroup_showTab;
	p.tabDisabledHandler = _ZEN_Component_tabGroup_tabDisabledHandler;
}

// ================================================================================
_zenClassIdx['lookoutMenu'] = '_ZEN_Component_lookoutMenu';
function _ZEN_Component_lookoutMenu(index,id) {
	if (index>=0) {_ZEN_Component_lookoutMenu__init(this,index,id);}
}

function _ZEN_Component_lookoutMenu__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_tabGroup__init) ?zenMaster._ZEN_Component_tabGroup__init(o,index,id):_ZEN_Component_tabGroup__init(o,index,id);
	o.cellVAlign = 'top';
	o.enclosingClass = 'lookoutMenu';
	o.expandable = false;
	o.expanded = true;
	o.oncontract = '';
	o.onexpand = '';
}
function _ZEN_Component_lookoutMenu_serialize(set,s)
{
	s[0]='3799701102';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=this.currTab;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=(this.expandable?1:0);s[23]=(this.expanded?1:0);s[24]=this.groupClass;s[25]=this.groupStyle;s[26]=this.height;s[27]=(this.hidden?1:0);s[28]=this.hint;s[29]=this.hintClass;s[30]=this.hintStyle;s[31]=this.label;s[32]=this.labelClass;s[33]=this.labelPosition;s[34]=this.labelStyle;s[35]=this.layout;s[36]=this.onafterdrag;s[37]=this.onbeforedrag;s[38]=this.onclick;s[39]=this.oncontract;s[40]=this.ondrag;s[41]=this.ondrop;s[42]=this.onexpand;s[43]=this.onhide;s[44]=this.onhideTab;s[45]=this.onrefresh;s[46]=this.onshow;s[47]=this.onshowTab;s[48]=this.onupdate;s[49]=this.overlayMode;s[50]=(this.remember?1:0);s[51]=this.renderFlag;s[52]=(this.showBody?1:0);s[53]=(this.showLabel?1:0);s[54]=(this.showTabBar?1:0);s[55]=this.slice;s[56]=this.title;s[57]=this.tuple;s[58]=this.valign;s[59]=(this.visible?1:0);s[60]=this.width;
}
function _ZEN_Component_lookoutMenu_getSettings(s)
{
	s['name'] = 'string';
	s['expandable'] = 'boolean';
	s['expanded'] = 'boolean';
	s['oncontract'] = 'eventHandler';
	s['onexpand'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_lookoutMenu_adjustTabs() {
var enc = this.getEnclosingDiv();
var encWid = (enc.offsetWidth<2) ? 2 : enc.offsetWidth;
var grip = this.findElement("grip");
var gripHeight = grip ? grip.offsetHeight : 0;
if (('' == enc.style.height) && enc.offsetHeight < 50) {
var btn = this.findElement("btn_1");
if (btn) {
enc.style.height = (btn.offsetHeight*(this.children.length+2)) + 'px';
}
else {
enc.style.height = '100px';
}
}
if (0 == this.children.length) return;
var currTab = this.currTab > 0 ? this.currTab : this.children.length;
var top = 0;
var y1 = top + gripHeight;
for (var n = 1; n <= currTab; n++) {
var btn = this.findElement("btn_" + n);
btn.style.top = y1;
btn.style.width = encWid - 2;
y1 += btn.offsetHeight;
}
var adj = 0;
var y2 = top + enc.offsetHeight - 2;
var test = y2 - ((this.children.length + 1 - currTab)*btn.offsetHeight);
if (test < y1) {
adj = y1 - test;
}
for (var n = this.children.length; n > currTab; n--) {
var btn = this.findElement("btn_" + n);
y2 -= btn.offsetHeight;
btn.style.top = y2 + adj;
btn.style.width = encWid - 2;
}
if (this.currTab > 0 && this.children.length > 0) {
var tab = this.children[this.currTab-1];
if (tab) {
var div = tab.getEnclosingDiv();
div.className = 'lookoutTab';
div.style.width = encWid - (zenIsIE ? 2 : 4);
div.style.top = y1;
div.style.height = (y2 - y1) > 0 ? (y2 - y1 - 2) : 0;
}
}
}

function _ZEN_Component_lookoutMenu_getExpanded() {
return this.expanded;
}

function _ZEN_Component_lookoutMenu_gripClickHandler() {
this.setExpanded(!this.getExpanded());
}

function _ZEN_Component_lookoutMenu_onRefreshContents() {
this.adjustTabs();
}

function _ZEN_Component_lookoutMenu_onloadHandler() {
this.adjustTabs();
if (this.disabled && this.parent && !this.parent.disabled) {
this.setProperty('disabled',true);
}
this.invokeSuper('onloadHandler',arguments);
}

function _ZEN_Component_lookoutMenu_onshowTabHandler(tabno) {
this.adjustTabs();
}

function _ZEN_Component_lookoutMenu_setExpanded(flag) {
this.expanded = flag;
if (!this.expandable) return;
var div = this.findElement('menuChildren');
zenASSERT(div,'Unable to find div element for children',arguments);
var img = this.findElement('image');
if (this.expanded) {
zenInvokeCallbackMethod(this.onexpand,this,'onexpand');
}
else {
zenInvokeCallbackMethod(this.oncontract,this,'oncontract');
}
div.style.display = this.expanded ? '' : 'none';
if (img) {
img.src = this.expanded ? this.imageExpanded : this.imageContracted;
}
}

function _ZEN_Component_lookoutMenu_setProperty(property,value,value2) {
switch(property) {
case 'expanded':
value = value ? true : false;
this.setExpanded(value);
this
break;
case 'expandable':
value = value ? true : false;
this.expandable = value;
this.refreshContents();
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_lookoutMenu_setSize(width,height) {
width = parseInt(width,10);
height = parseInt(height,10);
var enc = this.getEnclosingDiv();
if (this.expandable && !this.expanded) {
var grip = this.findElement("grip");
enc.style.height = (grip ? grip.offsetHeight : '0px');
enc.style.width = '12px';
}
else {
if (!isNaN(height)) {
enc.style.height = height + 'px';
}
if (!isNaN(width)) {
enc.style.width = width + 'px';
}
}
this.adjustTabs();
}

function _ZEN_Component_lookoutMenu_tabDisabledHandler(tab) {
for (var n = 0; n < this.children.length; n++) {
var child = this.children[n];
if (tab == child) {
var btn = this.findElement("btn_" + (n+1));
btn.disabled = tab.disabled;
if (this.currTab == (n+1)) {
this.showTab(0);
this.adjustTabs();
}
break;
}
}
}

function _ZEN_Component_lookoutMenu_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_lookoutMenu__Loader() {
	zenLoadClass('_ZEN_Component_tabGroup');
	_ZEN_Component_lookoutMenu.prototype = zenCreate('_ZEN_Component_tabGroup',-1);
	var p = _ZEN_Component_lookoutMenu.prototype;
	p.constructor = _ZEN_Component_lookoutMenu;
	p.superClass = ('undefined' == typeof _ZEN_Component_tabGroup) ? zenMaster._ZEN_Component_tabGroup.prototype:_ZEN_Component_tabGroup.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.lookoutMenu';
	p._type = 'lookoutMenu';
	p.serialize = _ZEN_Component_lookoutMenu_serialize;
	p.getSettings = _ZEN_Component_lookoutMenu_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_lookoutMenu_ReallyRefreshContents;
	p.adjustTabs = _ZEN_Component_lookoutMenu_adjustTabs;
	p.getExpanded = _ZEN_Component_lookoutMenu_getExpanded;
	p.gripClickHandler = _ZEN_Component_lookoutMenu_gripClickHandler;
	p.onRefreshContents = _ZEN_Component_lookoutMenu_onRefreshContents;
	p.onloadHandler = _ZEN_Component_lookoutMenu_onloadHandler;
	p.onshowTabHandler = _ZEN_Component_lookoutMenu_onshowTabHandler;
	p.setExpanded = _ZEN_Component_lookoutMenu_setExpanded;
	p.setProperty = _ZEN_Component_lookoutMenu_setProperty;
	p.setSize = _ZEN_Component_lookoutMenu_setSize;
	p.tabDisabledHandler = _ZEN_Component_lookoutMenu_tabDisabledHandler;
}

// ================================================================================
_zenClassIdx['vgroup'] = '_ZEN_Component_vgroup';
function _ZEN_Component_vgroup(index,id) {
	if (index>=0) {_ZEN_Component_vgroup__init(this,index,id);}
}

function _ZEN_Component_vgroup__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_group__init) ?zenMaster._ZEN_Component_group__init(o,index,id):_ZEN_Component_group__init(o,index,id);
}
function _ZEN_Component_vgroup_serialize(set,s)
{
	s[0]='4052196350';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.cellAlign;s[9]=this.cellSize;s[10]=this.cellStyle;s[11]=this.cellVAlign;s[12]=set.serializeList(this,this.children,true,'children');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.groupClass;s[22]=this.groupStyle;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelPosition;s[31]=this.labelStyle;s[32]=this.layout;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onhide;s[39]=this.onrefresh;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.overlayMode;s[43]=this.renderFlag;s[44]=(this.showLabel?1:0);s[45]=this.slice;s[46]=this.title;s[47]=this.tuple;s[48]=this.valign;s[49]=(this.visible?1:0);s[50]=this.width;
}
function _ZEN_Component_vgroup_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_vgroup_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_vgroup__Loader() {
	zenLoadClass('_ZEN_Component_group');
	_ZEN_Component_vgroup.prototype = zenCreate('_ZEN_Component_group',-1);
	var p = _ZEN_Component_vgroup.prototype;
	p.constructor = _ZEN_Component_vgroup;
	p.superClass = ('undefined' == typeof _ZEN_Component_group) ? zenMaster._ZEN_Component_group.prototype:_ZEN_Component_group.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.vgroup';
	p._type = 'vgroup';
	p.serialize = _ZEN_Component_vgroup_serialize;
	p.getSettings = _ZEN_Component_vgroup_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_vgroup_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['buttonBarItem'] = '_ZEN_Component_buttonBarItem';
function _ZEN_Component_buttonBarItem(index,id) {
	if (index>=0) {_ZEN_Component_buttonBarItem__init(this,index,id);}
}

function _ZEN_Component_buttonBarItem__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.caption = '';
	o.icon = '';
	o.iconDisabled = '';
	o.onclick = '';
}
function _ZEN_Component_buttonBarItem_serialize(set,s)
{
	s[0]='3413647176';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.containerStyle;s[10]=(this.dragEnabled?1:0);s[11]=(this.dropEnabled?1:0);s[12]=(this.dynamic?1:0);s[13]=this.enclosingClass;s[14]=this.enclosingStyle;s[15]=this.error;s[16]=this.height;s[17]=(this.hidden?1:0);s[18]=this.hint;s[19]=this.hintClass;s[20]=this.hintStyle;s[21]=this.icon;s[22]=this.iconDisabled;s[23]=this.label;s[24]=this.labelClass;s[25]=this.labelStyle;s[26]=this.onafterdrag;s[27]=this.onbeforedrag;s[28]=this.onclick;s[29]=this.ondrag;s[30]=this.ondrop;s[31]=this.onhide;s[32]=this.onrefresh;s[33]=this.onshow;s[34]=this.onupdate;s[35]=this.overlayMode;s[36]=this.renderFlag;s[37]=(this.showLabel?1:0);s[38]=this.slice;s[39]=this.title;s[40]=this.tuple;s[41]=this.valign;s[42]=(this.visible?1:0);s[43]=this.width;
}
function _ZEN_Component_buttonBarItem_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'string';
	s['icon'] = 'uri';
	s['iconDisabled'] = 'uri';
	s['onclick'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_buttonBarItem_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_buttonBarItem_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_buttonBarItem__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_buttonBarItem.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_buttonBarItem.prototype;
	p.constructor = _ZEN_Component_buttonBarItem;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.buttonBarItem';
	p._type = 'buttonBarItem';
	p.serialize = _ZEN_Component_buttonBarItem_serialize;
	p.getSettings = _ZEN_Component_buttonBarItem_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_buttonBarItem_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_buttonBarItem_setProperty;
}

// ================================================================================
_zenClassIdx['buttonView'] = '_ZEN_Component_buttonView';
function _ZEN_Component_buttonView(index,id) {
	if (index>=0) {_ZEN_Component_buttonView__init(this,index,id);}
}

function _ZEN_Component_buttonView__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.OnGetButtonInfo = '';
	o.columns = '4';
	o.onselect = '';
	o.seed = '';
	o.value = '';
}
function _ZEN_Component_buttonView_serialize(set,s)
{
	s[0]='3473428570';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnGetButtonInfo;s[7]=this.align;s[8]=this.aux;s[9]=this.columns;s[10]=this.containerStyle;s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.onafterdrag;s[26]=this.onbeforedrag;s[27]=this.ondrag;s[28]=this.ondrop;s[29]=this.onhide;s[30]=this.onrefresh;s[31]=this.onselect;s[32]=this.onshow;s[33]=this.onupdate;s[34]=this.overlayMode;s[35]=this.renderFlag;s[36]=this.seed;s[37]=(this.showLabel?1:0);s[38]=this.slice;s[39]=this.title;s[40]=this.tuple;s[41]=this.valign;s[42]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[43]=(this.visible?1:0);s[44]=this.width;
}
function _ZEN_Component_buttonView_getSettings(s)
{
	s['name'] = 'string';
	s['columns'] = 'integer';
	s['onselect'] = 'eventHandler';
	s['seed'] = 'string';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_buttonView_itemClicked(idx) {
var item = this.findElement('item_' + idx);
if (item) {
if ('bvwItemDisabled' == item.className) return;
if ('bvwItemDisabledAlways' == item.className) return;
var value = item.getAttribute('bvwValue');
var group = item.getAttribute('bvwGroup');
if ('bvwItemSelected' == item.className) {
this.value = '';
var n = 1;
while (true) {
n++;
var el = this.findElement('item_' + n);
if (!el) break;
if (((''==group)||(group == el.getAttribute('bvwGroup')))) {
if ('bvwItemDisabledAlways' != el.className) {
el.className = 'bvwItem';
}
}
else if (el.className == 'bvwItemSelected') {
this.value += el.getAttribute('bvwGroup') + ':' +  el.getAttribute('bvwValue') + ';';
}
}
}
else {
if (value == -1) {
this.resetItems();
}
else {
var n = 1;
while (true) {
n++;
var el = this.findElement('item_' + n);
if (!el) break;
if ((n != idx)&&((''==group)||(group == el.getAttribute('bvwGroup')))) {
if ('bvwItemDisabledAlways' != el.className) {
el.className = 'bvwItemDisabled';
}
}
}
item.className = 'bvwItemSelected';
if ('' == group) {
this.value = ':' +  value + ';';
}
else {
this.value += group + ':' +  value + ';';
}
}
}
}
var rst = this.findElement('item_1');
if (rst) {
if ('' != this.value) {
rst.className = 'bvwItemReset';
}
else {
rst.className = 'bvwItemDisabled';
}
}
zenInvokeCallbackMethod(this.onselect,this,'onselect','value',this.value);
}

function _ZEN_Component_buttonView_resetItems() {
var rst = this.findElement('item_1');
if (rst) {
rst.className = 'bvwItemDisabled';
}
var n = 1;
while (true) {
n++;
var item = this.findElement('item_' + n);
if (null == item) break;
if ('bvwItemDisabledAlways' != item.className) {
item.className = 'bvwItem';
}
}
this.value = '';
}

function _ZEN_Component_buttonView_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_buttonView__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_buttonView.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_buttonView.prototype;
	p.constructor = _ZEN_Component_buttonView;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.buttonView';
	p._type = 'buttonView';
	p.serialize = _ZEN_Component_buttonView_serialize;
	p.getSettings = _ZEN_Component_buttonView_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_buttonView_ReallyRefreshContents;
	p.itemClicked = _ZEN_Component_buttonView_itemClicked;
	p.resetItems = _ZEN_Component_buttonView_resetItems;
}

// ================================================================================
_zenClassIdx['colorPane'] = '_ZEN_Component_colorPane';
function _ZEN_Component_colorPane(index,id) {
	if (index>=0) {_ZEN_Component_colorPane__init(this,index,id);}
}

function _ZEN_Component_colorPane__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.currCol = '0';
	o.currRow = '0';
	o.currSlice = '0';
	o.face = '1';
	o.onchange = '';
	o.ondblclick = '';
	o.value = '#FFFFFF';
}
function _ZEN_Component_colorPane_serialize(set,s)
{
	s[0]='3107727700';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=this.currCol;s[10]=this.currRow;s[11]=this.currSlice;s[12]=(this.dragEnabled?1:0);s[13]=(this.dropEnabled?1:0);s[14]=(this.dynamic?1:0);s[15]=this.enclosingClass;s[16]=this.enclosingStyle;s[17]=this.error;s[18]=this.face;s[19]=this.height;s[20]=(this.hidden?1:0);s[21]=this.hint;s[22]=this.hintClass;s[23]=this.hintStyle;s[24]=this.label;s[25]=this.labelClass;s[26]=this.labelStyle;s[27]=this.onafterdrag;s[28]=this.onbeforedrag;s[29]=this.onchange;s[30]=this.ondblclick;s[31]=this.ondrag;s[32]=this.ondrop;s[33]=this.onhide;s[34]=this.onrefresh;s[35]=this.onshow;s[36]=this.onupdate;s[37]=this.overlayMode;s[38]=this.renderFlag;s[39]=(this.showLabel?1:0);s[40]=this.slice;s[41]=this.title;s[42]=this.tuple;s[43]=this.valign;s[44]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[45]=(this.visible?1:0);s[46]=this.width;
}
function _ZEN_Component_colorPane_getSettings(s)
{
	s['name'] = 'string';
	s['currCol'] = 'integer';
	s['currRow'] = 'integer';
	s['currSlice'] = 'integer';
	s['face'] = 'integer';
	s['onchange'] = 'eventHandler';
	s['ondblclick'] = 'eventHandler';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_colorPane_dblclickHandler() {
zenInvokeCallbackMethod(this.ondblclick,this,'ondblclick');
}

function _ZEN_Component_colorPane_getValue() {
return this.getProperty('value');
}

function _ZEN_Component_colorPane_onloadHandler() {
this.setValue(this.value);
}

function _ZEN_Component_colorPane_renderContents() {
var div = this.window.document.getElementById('colorPane_' + this.index);
zenASSERT(div,'Unable to find div element',arguments);
zenASSERT((this.face>0&&this.face<7),'Out of range value for face',arguments);
var hues = new Array('00','10','20','30','40','50','60','70','80','90','A0','B0','C0','D0','E0','F0','FF');
var rgb,sv,rv,cv,xv;
xv = hues[this.currSlice*1];
rv = hues[this.currRow*1];
cv = hues[this.currCol*1];
switch (this.face*1) {
case 1:
rgb = cv + xv + rv;
rgbBottom = '0000FF';
rgbRight = 'FF0000';
break;
case 2:
rgb = xv + rv + cv;
rgbBottom = '00FF00';
rgbRight = '0000FF';
break;
case 3:
rgb = rv + cv + xv;
rgbBottom = 'FF0000';
rgbRight = '00FF00';
break;
}
this.renderIndicator();
var html = new Array();
html[html.length] = '<table class="colorPane" border="0" cellpadding="0" cellspacing="0">';
for (var r = 0; r < hues.length; r++) {
html[html.length] = '<tr>';
sv = hues[r];
switch (this.face*1) {
case 1:
rgb = '00' + sv + '00';
break;
case 2:
rgb = sv + '00' + '00';
break;
case 3:
rgb = '00' + '00' + sv;
break;
}
html[html.length] = ((r==this.currSlice)?'<td style="font-size:1.2em;"><b>&#187;</b></td>':'<td>&nbsp;</td>');
html[html.length] = '<td nowrap class="colorPaneCell" width="16" onclick="zenPage.getComponent('+this.index+').selectSlice('+r+');">';
html[html.length] = '<div style="background: #' + rgb + '; border:1px solid black;">&nbsp;</div>';
html[html.length] = '</td>';
if (0 == r) {
html[html.length] = '<td rowspan="' + hues.length + '" align="center" width="16" >&nbsp;</td>';
}
rv = hues[r];
for (var c = 0; c < hues.length; c++) {
cv = hues[c];
switch (this.face*1) {
case 1:
rgb = cv + xv + rv;
break;
case 2:
rgb = xv + rv + cv;
break;
case 3:
rgb = rv + cv + xv;
break;
}
html[html.length] = '<td id="td_'+r+'_'+c+'_'+this.index+'" class="'+((r==this.currRow && c==this.currCol)?'colorPaneCellSelected'+this.face:'colorPaneCell')+'" width="16" onclick="zenPage.getComponent('+this.index+').selectCell('+r+','+c+');" ondblclick="zenPage.getComponent('+this.index+').dblclickHandler();" zenValue="'+rgb+'">';
html[html.length] = '<div style="background: #' + rgb + '; border:1px solid black;">&nbsp;</div>';
html[html.length] = '</td>';
}
if (0 == r) {
html[html.length] = '<td rowspan="' + hues.length + '" align="center" width="16" >&nbsp;</td>';
html[html.length] = '<td rowspan="' + hues.length + '" class="colorPaneRotator" style="background: #'+rgbRight+'" align="center" width="16" onclick="zenPage.getComponent('+this.index+').rotateCube(1);">&nbsp;</td>';
}
html[html.length] = '</tr>';
}
html[html.length] = '<tr><td colspan="' + (4+hues.length) + '" >&nbsp;</td></tr>';
html[html.length] = '<tr><td colspan="3">&nbsp;</td><td colspan="' + hues.length + '" class="colorPaneRotator" style="background: #'+rgbBottom+'" align="center"  onclick="zenPage.getComponent('+this.index+').rotateCube(0);">&nbsp;</td><td>&nbsp;</td></tr>';
html[html.length] = '</table>';
div.innerHTML = html.join('');
}

function _ZEN_Component_colorPane_renderIndicator() {
var div = this.window.document.getElementById('colorInd_' + this.index);
zenASSERT(div,'Unable to find div element',arguments);
var r = 0, g = 0, b = 0;
if ('' != this.value) {
r = parseInt('0x' + this.value.substr(1,2));
g = parseInt('0x' + this.value.substr(3,2));
b = parseInt('0x' + this.value.substr(5,2));
}
var html = new Array();
html[html.length] = '<table width="100%" cellspacing="0" border="0">';
html[html.length] = '<tr><td style="white-space:nowrap; background: #DDDDDD; border: 1px black solid; color: darkblue;">';
html[html.length] = '&nbsp;R<input id="R_'+this.index+'" type="text" size="1" value="'+r+'" onchange="zenPage.getComponent('+this.index+').rgbChanged();">&nbsp;';
html[html.length] = '&nbsp;G<input id="G_'+this.index+'" type="text" size="1" value="'+g+'" onchange="zenPage.getComponent('+this.index+').rgbChanged();">&nbsp;';
html[html.length] = '&nbsp;B<input id="B_'+this.index+'" type="text" size="1" value="'+b+'" onchange="zenPage.getComponent('+this.index+').rgbChanged();">&nbsp;';
html[html.length] = '</td>';
var clr = 'rgb('+(r<128?255:0)+','+(g<128?255:0)+','+(b<128?255:0)+')'
html[html.length] = '<td style="width:90%; border: 1px black solid; color: '+clr+'; font-family:courier new; font-weight: bold; text-align:center; background:' + this.value + ';">'+this.value+'</td></tr>';
html[html.length] = '</table>';
div.innerHTML = html.join('');
}

function _ZEN_Component_colorPane_rgbChanged() {
var r = this.findElement('R').value * 1;
var g = this.findElement('G').value * 1;
var b = this.findElement('B').value * 1;
r = isNaN(r) ? 0 : r;
g = isNaN(g) ? 0 : g;
b = isNaN(b) ? 0 : b;
r = r < 0 ? 0 : r;
g = g < 0 ? 0 : g;
b = b < 0 ? 0 : b;
r = r > 255 ? 255 : r;
g = g > 255 ? 255 : g;
b = b > 255 ? 255 : b;
var rgb = '#' + (r<10?'0':'') + r.toString(16) + (g<10?'0':'') + g.toString(16) + (b<10?'0':'') + b.toString(16);
this.setValue(rgb);
}

function _ZEN_Component_colorPane_rotateCube(direction) {
var table = new Array();
table[1] = new Array(2,3);
table[2] = new Array(3,1);
table[3] = new Array(1,2);
this.face = table[this.face][direction];
this.render();
}

function _ZEN_Component_colorPane_selectCell(r,c) {
var td = this.findElement('td_' + this.currRow + '_' + this.currCol);
if (td) {
td.className = 'colorPaneCell';
}
this.currRow = r;
this.currCol = c;
this.value = '';
var td = this.findElement('td_' + this.currRow + '_' + this.currCol);
if (td) {
td.className = 'colorPaneCellSelected'+this.face;
this.value = '#' + td.getAttribute('zenValue');
}
this.renderIndicator()
zenInvokeCallbackMethod(this.onchange,this,'onchange');
}

function _ZEN_Component_colorPane_selectSlice(slice) {
this.currSlice = slice;
this.render();
}

function _ZEN_Component_colorPane_setProperty(property,value,value2) {
switch(property) {
case 'value':
this.value = value;
var r = 0, g = 0, b = 0;
if ('' != this.value) {
r = parseInt('0x' + this.value.substr(1,2));
g = parseInt('0x' + this.value.substr(3,2));
b = parseInt('0x' + this.value.substr(5,2));
}
switch (this.face*1) {
case 1: //(RxB)
this.currRow = Math.floor((r+1) / 16);
this.currCol = Math.floor((b+1) / 16);
this.currSlice = Math.floor((g+1) / 16);
break;
case 2: //(GxB)
this.currRow = Math.floor((g+1) / 16);
this.currCol = Math.floor((b+1) / 16);
this.currSlice = Math.floor((r+1) / 16);
break;
case 3: //(RxG)
this.currRow = Math.floor((r+1) / 16);
this.currCol = Math.floor((g+1) / 16);
this.currSlice = Math.floor((b+1) / 16);
break;
}
this.render();
break;
default:
this.invokeSuper('setProperty',arguments);
break;
}
}

function _ZEN_Component_colorPane_setValue(value) {
this.setProperty('value',value);
}

function _ZEN_Component_colorPane_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_colorPane__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_colorPane.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_colorPane.prototype;
	p.constructor = _ZEN_Component_colorPane;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.colorPane';
	p._type = 'colorPane';
	p.serialize = _ZEN_Component_colorPane_serialize;
	p.getSettings = _ZEN_Component_colorPane_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_colorPane_ReallyRefreshContents;
	p.dblclickHandler = _ZEN_Component_colorPane_dblclickHandler;
	p.getValue = _ZEN_Component_colorPane_getValue;
	p.onloadHandler = _ZEN_Component_colorPane_onloadHandler;
	p.renderContents = _ZEN_Component_colorPane_renderContents;
	p.renderIndicator = _ZEN_Component_colorPane_renderIndicator;
	p.rgbChanged = _ZEN_Component_colorPane_rgbChanged;
	p.rotateCube = _ZEN_Component_colorPane_rotateCube;
	p.selectCell = _ZEN_Component_colorPane_selectCell;
	p.selectSlice = _ZEN_Component_colorPane_selectSlice;
	p.setProperty = _ZEN_Component_colorPane_setProperty;
	p.setValue = _ZEN_Component_colorPane_setValue;
}

// ================================================================================
_zenClassIdx['control'] = '_ZEN_Component_control';
function _ZEN_Component_control(index,id) {
	if (index>=0) {_ZEN_Component_control__init(this,index,id);}
}

function _ZEN_Component_control__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.clientType = '';
	o.controlClass = '';
	o.controlStyle = '';
	o.dataBinding = '';
	o.disabled = false;
	o.invalid = false;
	o.invalidMessage = 'out-of-range or invalid value.';
	o.onblur = '';
	o.onchange = '';
	o.onclick = '';
	o.ondblclick = '';
	o.onfocus = '';
	o.onkeydown = '';
	o.onkeypress = '';
	o.onkeyup = '';
	o.onmousedown = '';
	o.onmouseout = '';
	o.onmouseover = '';
	o.onmouseup = '';
	o.onsubmit = '';
	o.onvalidate = '';
	o.originalValue = '';
	o.readOnly = false;
	o.required = false;
	o.requiredMessage = 'required.';
	o.tabIndex = '';
	o.value = '';
}
function _ZEN_Component_control_serialize(set,s)
{
	s[0]='1247505462';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.invalid?1:0);s[26]=this.invalidMessage;s[27]=this.label;s[28]=this.labelClass;s[29]=this.labelStyle;s[30]=this.onafterdrag;s[31]=this.onbeforedrag;s[32]=this.onblur;s[33]=this.onchange;s[34]=this.onclick;s[35]=this.ondblclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onfocus;s[39]=this.onhide;s[40]=this.onkeydown;s[41]=this.onkeypress;s[42]=this.onkeyup;s[43]=this.onmousedown;s[44]=this.onmouseout;s[45]=this.onmouseover;s[46]=this.onmouseup;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onsubmit;s[50]=this.onupdate;s[51]=this.onvalidate;s[52]=this.originalValue;s[53]=this.overlayMode;s[54]=(this.readOnly?1:0);s[55]=this.renderFlag;s[56]=(this.required?1:0);s[57]=this.requiredMessage;s[58]=(this.showLabel?1:0);s[59]=this.slice;s[60]=this.tabIndex;s[61]=this.title;s[62]=this.tuple;s[63]=this.valign;s[64]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[65]=(this.visible?1:0);s[66]=this.width;
}
function _ZEN_Component_control_getSettings(s)
{
	s['name'] = 'string';
	s['clientType'] = 'enum:string,boolean,integer,float';
	s['controlClass'] = 'cssClass';
	s['controlStyle'] = 'style';
	s['dataBinding'] = 'string';
	s['disabled'] = 'boolean';
	s['invalid'] = 'boolean';
	s['invalidMessage'] = 'caption';
	s['onblur'] = 'eventHandler';
	s['onchange'] = 'eventHandler';
	s['onclick'] = 'eventHandler';
	s['ondblclick'] = 'eventHandler';
	s['onfocus'] = 'eventHandler';
	s['onkeydown'] = 'eventHandler';
	s['onkeypress'] = 'eventHandler';
	s['onkeyup'] = 'eventHandler';
	s['onmousedown'] = 'eventHandler';
	s['onmouseout'] = 'eventHandler';
	s['onmouseover'] = 'eventHandler';
	s['onmouseup'] = 'eventHandler';
	s['onsubmit'] = 'eventHandler';
	s['onvalidate'] = 'eventHandler';
	s['originalValue'] = 'value';
	s['readOnly'] = 'boolean';
	s['required'] = 'boolean';
	s['requiredMessage'] = 'caption';
	s['tabIndex'] = 'integer';
	s['value'] = 'value';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_control_dragStartHandler(dragData) {
if (!this.getDragData(dragData)) {
return false;
}
var icon = this.getEnclosingDiv().cloneNode(true);
icon.style.position="absolute";
icon.style.border ="1px solid darkgray";
icon.style.background ="#D0D0F0";
ZLM.setDragAvatar(icon);
return true;
}

function _ZEN_Component_control_dropStartHandler(dragData) {
this.setValue(dragData.toString());
return true;
}

function _ZEN_Component_control_focus() {
var el = this.findElement('control');
if (el) {
try {
el.focus();
}
catch(ex) {
}
}
}

function _ZEN_Component_control_getDisabled() {
return this.getProperty('disabled');
}

function _ZEN_Component_control_getDragData(dragData) {
dragData.value = this.getValue();
if (null != this.text) {
dragData.text = this.text;
}
else {
dragData.text = dragData.value;
}
return true;
}

function _ZEN_Component_control_getForm() {
var form = null;
var parent = this.parent;
while (parent) {
if (parent.isOfType('form')) {
form = parent;
break;
}
parent = parent.parent;
}
return form;
}

function _ZEN_Component_control_getInvalidReason() {
if (this.required && zenIsMissing(this.getValue())) {
return this.label + ' ' + this.requiredMessage;
}
return this.label + ' ' + this.invalidMessage;
}

function _ZEN_Component_control_getProperty(property,key) {
var el = this.findElement('control');
switch(property) {
case 'value':
if (el) {
this.value = this.unformatValue ? this.unformatValue(el.value) : el.value;
}
return this.normalizeValue(this.value);
}
return this.invokeSuper('getProperty',arguments);
}

function _ZEN_Component_control_getReadOnly() {
return this.getProperty('readOnly');
}

function _ZEN_Component_control_getValue() {
return this.getProperty('value');
}

function _ZEN_Component_control_isModified() {
return this.value != this.originalValue;
}

function _ZEN_Component_control_isValid() {
return true;
}

function _ZEN_Component_control_normalizeValue(val) {
switch(this.clientType) {
case 'boolean':
if ((''==val)&&('string'==typeof val)) { val = false; }
else if (('true'==val)||('on'==val)) { val = true; }
else if (('false'==val)||('off'==val)||('0'==val)) { val = false; }
else { val = val ? true : false; }
break;
case 'integer':
if (!((''==val)&&('string'==typeof val))) {
val = parseInt(val,10);
val = isNaN(val) ? '' : val;
}
break;
case 'float':
if (!((''==val)&&('string'==typeof val))) {
val = parseFloat(val,10);
val = isNaN(val) ? '' : val;
}
break;
case 'string':
val = zenTrim(val);
break;
}
return val;
}

function _ZEN_Component_control_onSerialize() {
var el = this.findElement('control');
if (el) {
this.value = this.normalizeValue(this.unformatValue ? this.unformatValue(el.value) : el.value);
}
}

function _ZEN_Component_control_onchangeHandler() {
var value = this.getValue();
var form = this.getForm();
if (form) {
form.controlChangeHandler(this);
}
if (this.invalid && this.validationHandler()) {
this.setProperty('invalid',false);
}
zenInvokeCallbackMethod(this.onchange,this,'onchange');
}

function _ZEN_Component_control_select() {
var el = this.findElement('control');
if (el) {
el.select();
}
}

function _ZEN_Component_control_setDisabled(flag) {
this.setProperty('disabled',flag);
}

function _ZEN_Component_control_setProperty(property,value,value2) {
var el = this.findElement('control');
switch(property) {
case 'value':
value = this.normalizeValue(value);
if (el) {
el.value = this.formatValue ? this.formatValue(value) : value;
}
this.value = value;
break;
case 'clientType':
this.clientType = value;
break;
case 'originalValue':
this.originalValue = this.value;
break;
case 'required':
value = (value) ? true : false;
this.required = value;
break;
case 'invalid':
value = (value) ? true : false;
this.invalid = value;
if (el) { el.className = (value ? 'zenInvalid' : this.controlClass);}
break;
case 'controlClass':
this.controlClass = value;
if (el) { el.className = (this.invalid ? 'zenInvalid' : this.controlClass);}
break;
case 'controlStyle':
this.controlStyle = value;
if (el) { el.style.cssText = value;	}
break;
case 'disabled':
value = (value) ? true : false;
if (el) { el.disabled = value;	}
this.disabled = value;
var lbl = this.getLabelElement();
if (lbl) {
if (this.disabled) {
lbl.className = 'zenLabelDisabled';
}
else {
lbl.className = (''==this.labelClass) ? 'zenLabel' : this.labelClass;
}
}
break;
case 'readOnly':
value = (value) ? true : false;
if (el) { el.readOnly = value;	}
this.readOnly = value;
break;
case 'title':
if (el) { el.title = value;	}
this.title = value;
var label = this.getLabelElement();
if (label) {
label.title = value;
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_control_setReadOnly(flag) {
this.setProperty('readOnly',flag);
}

function _ZEN_Component_control_setValue(value,value2) {
this.setProperty('value',value,value2);
}

function _ZEN_Component_control_sysName() {
var name = '';
if (''==this.name) {
name = '$V_' + ((this.composite) ? (this.composite.id=='' ? this.composite.index : this.composite.id)+'.':'') + this.id;
}
else if ('Cache'==this.name.substr(0,5)) {
name = this.name;
}
else {
name = '$V_' + this.name;
}
return name;
}

function _ZEN_Component_control_validationHandler() {
if (this.readOnly || this.disabled) {
return true;
}
if (zenIsMissing(this.getValue())) {
return !this.required;
}
if (this.onvalidate) {
return zenInvokeCallbackMethod(this.onvalidate,this,'onvalidate');
}
return this.isValid();
}

function _ZEN_Component_control_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_control__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_control.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_control.prototype;
	p.constructor = _ZEN_Component_control;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.control';
	p._type = 'control';
	p.serialize = _ZEN_Component_control_serialize;
	p.getSettings = _ZEN_Component_control_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_control_ReallyRefreshContents;
	p.dragStartHandler = _ZEN_Component_control_dragStartHandler;
	p.dropStartHandler = _ZEN_Component_control_dropStartHandler;
	p.focus = _ZEN_Component_control_focus;
	p.getDisabled = _ZEN_Component_control_getDisabled;
	p.getDragData = _ZEN_Component_control_getDragData;
	p.getForm = _ZEN_Component_control_getForm;
	p.getInvalidReason = _ZEN_Component_control_getInvalidReason;
	p.getProperty = _ZEN_Component_control_getProperty;
	p.getReadOnly = _ZEN_Component_control_getReadOnly;
	p.getValue = _ZEN_Component_control_getValue;
	p.isModified = _ZEN_Component_control_isModified;
	p.isValid = _ZEN_Component_control_isValid;
	p.normalizeValue = _ZEN_Component_control_normalizeValue;
	p.onSerialize = _ZEN_Component_control_onSerialize;
	p.onchangeHandler = _ZEN_Component_control_onchangeHandler;
	p.select = _ZEN_Component_control_select;
	p.setDisabled = _ZEN_Component_control_setDisabled;
	p.setProperty = _ZEN_Component_control_setProperty;
	p.setReadOnly = _ZEN_Component_control_setReadOnly;
	p.setValue = _ZEN_Component_control_setValue;
	p.sysName = _ZEN_Component_control_sysName;
	p.validationHandler = _ZEN_Component_control_validationHandler;
}

// ================================================================================
_zenClassIdx['abstractListBox'] = '_ZEN_Component_abstractListBox';
function _ZEN_Component_abstractListBox(index,id) {
	if (index>=0) {_ZEN_Component_abstractListBox__init(this,index,id);}
}

function _ZEN_Component_abstractListBox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.controlClass = 'listBox';
	o.hzScroll = false;
	o.listHeight = '';
	o.listWidth = '';
	o.selectedIndex = '-1';
	o.text = '';
	o.onCreate();
}
function _ZEN_Component_abstractListBox_serialize(set,s)
{
	s[0]='1380240869';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.hzScroll?1:0);s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.listHeight;s[32]=this.listWidth;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onblur;s[36]=this.onchange;s[37]=this.onclick;s[38]=this.ondblclick;s[39]=this.ondrag;s[40]=this.ondrop;s[41]=this.onfocus;s[42]=this.onhide;s[43]=this.onkeydown;s[44]=this.onkeypress;s[45]=this.onkeyup;s[46]=this.onmousedown;s[47]=this.onmouseout;s[48]=this.onmouseover;s[49]=this.onmouseup;s[50]=this.onrefresh;s[51]=this.onshow;s[52]=this.onsubmit;s[53]=this.onupdate;s[54]=this.onvalidate;s[55]=this.originalValue;s[56]=this.overlayMode;s[57]=(this.readOnly?1:0);s[58]=this.renderFlag;s[59]=(this.required?1:0);s[60]=this.requiredMessage;s[61]=this.selectedIndex;s[62]=(this.showLabel?1:0);s[63]=this.slice;s[64]=this.tabIndex;s[65]=this.text;s[66]=this.title;s[67]=this.tuple;s[68]=this.valign;s[69]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[70]=(this.visible?1:0);s[71]=this.width;
}
function _ZEN_Component_abstractListBox_getSettings(s)
{
	s['name'] = 'string';
	s['hzScroll'] = 'boolean';
	s['listHeight'] = 'length';
	s['listWidth'] = 'length';
	s['selectedIndex'] = 'integer';
	s['text'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_abstractListBox_clickItem(idx) {
if (this.disabled) return;
if (this.readOnly) return;
var change = (idx != this.selectedIndex);
this.focus();
this.selectItem(idx);
if (change) {
this.onchangeHandler();
}
}

function _ZEN_Component_abstractListBox_dblClickItem(idx) {
if (this.disabled) return;
zenInvokeCallbackMethod(this.ondblclick,this,'ondblclick');
}

function _ZEN_Component_abstractListBox_dragStartHandler(dragData) {
var ok = false;
var dragItem = this._dragSource;
if (null != dragItem) {
delete this._dragSource;
var anchor = this.findElement('item_' + dragItem);
if (anchor) {
dragData.sourceItem = dragItem;
ok = true;
dragData.value = this.getOptionValue(dragItem);
dragData.text = this.getOptionText(dragItem);
var icon = anchor.cloneNode(true);
icon.style.position ="absolute";
icon.style.width = this.getEnclosingDiv().offsetWidth + 'px';
icon.style.border = "1px solid darkgray";
ZLM.setDragAvatar(icon);
}
}
return ok;
}

function _ZEN_Component_abstractListBox_focus() {
var inv = this.findElement('invisible');
if (inv) {
inv.focus();
}
}

function _ZEN_Component_abstractListBox_getItemEl(idx) {
return this.findElement('item_' + idx);
}

function _ZEN_Component_abstractListBox_getOptionCount() {
return 0;
}

function _ZEN_Component_abstractListBox_getOptionText(idx) {
return '';
}

function _ZEN_Component_abstractListBox_getOptionValue(idx) {
return '';
}

function _ZEN_Component_abstractListBox_itemMouseDown(evt,idx) {
if (this.dragEnabled) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
this._dragSource = idx;
var change = (idx != this.selectedIndex);
this.selectItem(idx);
if (change) {
this.onchangeHandler();
}
return false;
}
return true;
}

function _ZEN_Component_abstractListBox_itemMouseUp(evt) {
if (this.dragEnabled) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
delete this._dragSource;
return false;
}
return true;
}

function _ZEN_Component_abstractListBox_lbKeyBlur() {
this.hasFocus = false;
this.selectItem(this.selectedIndex);
}

function _ZEN_Component_abstractListBox_lbKeyDownHandler(evt) {
if (this.disabled) return false;
if (this.readOnly) return false;
evt = evt ? evt : window.event;
var ret = true;
var row = this.currRow;
var col = this.currColumn;
switch(evt.keyCode) {
case zenENTER:
break;
case zenPAGEUP:
ret = false;
this.moveToItem('pageup');
break;
case zenPAGEDN:
ret = false;
this.moveToItem('pagedn');
break;
case zenEND:
ret = false;
this.moveToItem('end');
break;
case zenHOME:
ret = false;
this.moveToItem('home');
break;
case zenUP:
ret = false;
this.moveToItem('up');
break;
case zenDOWN:
ret = false;
this.moveToItem('down');
break;
default:
break;
}
if (!ret) {
if (evt.preventDefault) {
evt.preventDefault();
}
evt.cancelBubble = true;
}
return ret;
}

function _ZEN_Component_abstractListBox_lbKeyFocus() {
this.hasFocus = true;
this.selectItem(this.selectedIndex);
}

function _ZEN_Component_abstractListBox_lbKeyPressHandler(evt) {
if (this.disabled) return false;
if (this.readOnly) return false;
evt = evt ? evt : window.event;
var ret = true;
switch(evt.keyCode) {
default:
if (evt.ctrlKey || evt.altKey) {
break;
}
var charCode = evt.charCode ? evt.charCode : evt.keyCode;
if (charCode >= 32) {
ret = false;
var ch = evt.charCode ? String.fromCharCode(evt.charCode) : null;
if ('string' == typeof ch) {
ch = ch.toUpperCase();
var size = this.getOptionCount();
var found = false;
var start = this.selectedIndex+1;
for (var pass = 0; pass < 2 && !found; pass++) {
for (var i = start; i < size; i++) {
var t = this.getOptionText(i);
if ('string' == typeof t) {
if (t.charAt(0).toUpperCase() == ch) {
this.selectItem(i);
found = true;
break;
}
}
}
start = 0;
}
}
}
break;
}
return ret;
}

function _ZEN_Component_abstractListBox_moveToItem(dir) {
var ret = false;
var idx = this.selectedIndex;
var size = this.getOptionCount();
switch(dir) {
case 'up':
if (idx > 0) {
ret = true;
this.selectItem(idx-1);
}
break;
case 'down':
if (idx < size-1) {
ret = true;
this.selectItem(idx+1);
}
break;
case 'home':
if (size > 0) {
ret = true;
this.selectItem(0);
}
break;
case 'end':
if (size > 0) {
ret = true;
this.selectItem(size - 1);
}
break;
case 'pageup':
if (size > 0) {
ret = true;
idx = idx > 10 ? idx - 10 : 0;
this.selectItem(idx);
}
break;
case 'pagedn':
if (size > 0) {
ret = true;
idx = idx < (size - 10) ? idx + 10 : size-1;
this.selectItem(idx);
}
break;
}
if (idx != this.selectedIndex) {
this.onchangeHandler();
}
return ret;
}

function _ZEN_Component_abstractListBox_onCreate() {
this.hasFocus = false;
}

function _ZEN_Component_abstractListBox_selectItem(idx) {
var hidden = this.findElement('hidden');
zenASSERT(hidden,'Unable to find hidden element',arguments);
var value,text;
if (this.selectedIndex != -1) {
var div = this.getItemEl(this.selectedIndex);
if (div) {
div.className = 'listBoxItem';
}
}
var size = this.getOptionCount();
if (idx < 0 || idx > size) {
this.selectedIndex = -1;
value = '';
text = '';
}
else {
this.selectedIndex = idx;
value = this.getOptionValue(idx);
text = this.getOptionText(idx);
}
if (this.selectedIndex != -1) {
var div = this.getItemEl(this.selectedIndex);
if (div) {
div.className = (this.hasFocus&&!this.disabled) ? 'listBoxItemFocus' : 'listBoxItemSelected';
zenScrollIntoView(this.findElement('list'),div,!this.hzScroll);
}
}
hidden.value = value;
this.value = value;
this.text = text;
}

function _ZEN_Component_abstractListBox_setProperty(property,value,value2) {
var hidden = this.findElement('hidden');
switch(property) {
case 'selectedIndex':
value = parseInt(value);
this.selectItem(value);
break;
case 'listHeight':
this.listHeight = value;
var list = this.findElement('list');
if (list) {
list.style.height = value;
}
break;
case 'listWidth':
this.listWidth = value;
var list = this.findElement('list');
if (list) {
list.style.width = value;
}
break;
case 'value':
var size = this.getOptionCount();
for (var idx = 0; idx < size; idx++) {
if (value == this.getOptionValue(idx)) {
this.selectItem(idx);
}
}
break;
case 'text':
break;
case 'disabled':
value = (value) ? true : false;
this.disabled = value;
var list = this.findElement('list');
if (list) {
list.className = this.disabled ? 'listBoxDisabled' : this.controlClass;
}
this.selectItem(this.selectedIndex);
this.invokeSuper('setProperty',arguments);
break;
case 'readOnly':
value = (value) ? true : false;
this.readOnly = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_abstractListBox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_abstractListBox__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_abstractListBox.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_abstractListBox.prototype;
	p.constructor = _ZEN_Component_abstractListBox;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.abstractListBox';
	p._type = 'abstractListBox';
	p.serialize = _ZEN_Component_abstractListBox_serialize;
	p.getSettings = _ZEN_Component_abstractListBox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_abstractListBox_ReallyRefreshContents;
	p.clickItem = _ZEN_Component_abstractListBox_clickItem;
	p.dblClickItem = _ZEN_Component_abstractListBox_dblClickItem;
	p.dragStartHandler = _ZEN_Component_abstractListBox_dragStartHandler;
	p.focus = _ZEN_Component_abstractListBox_focus;
	p.getItemEl = _ZEN_Component_abstractListBox_getItemEl;
	p.getOptionCount = _ZEN_Component_abstractListBox_getOptionCount;
	p.getOptionText = _ZEN_Component_abstractListBox_getOptionText;
	p.getOptionValue = _ZEN_Component_abstractListBox_getOptionValue;
	p.itemMouseDown = _ZEN_Component_abstractListBox_itemMouseDown;
	p.itemMouseUp = _ZEN_Component_abstractListBox_itemMouseUp;
	p.lbKeyBlur = _ZEN_Component_abstractListBox_lbKeyBlur;
	p.lbKeyDownHandler = _ZEN_Component_abstractListBox_lbKeyDownHandler;
	p.lbKeyFocus = _ZEN_Component_abstractListBox_lbKeyFocus;
	p.lbKeyPressHandler = _ZEN_Component_abstractListBox_lbKeyPressHandler;
	p.moveToItem = _ZEN_Component_abstractListBox_moveToItem;
	p.onCreate = _ZEN_Component_abstractListBox_onCreate;
	p.selectItem = _ZEN_Component_abstractListBox_selectItem;
	p.setProperty = _ZEN_Component_abstractListBox_setProperty;
}

// ================================================================================
_zenClassIdx['dataListBox'] = '_ZEN_Component_dataListBox';
function _ZEN_Component_dataListBox(index,id) {
	if (index>=0) {_ZEN_Component_dataListBox__init(this,index,id);}
}

function _ZEN_Component_dataListBox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_abstractListBox__init) ?zenMaster._ZEN_Component_abstractListBox__init(o,index,id):_ZEN_Component_abstractListBox__init(o,index,id);
	o.OnCreateResultSet = '';
	o.OnDrawItem = '';
	o.OnExecuteResultSet = '';
	o.columnName = '';
	o.groupByClause = '';
	o.itemCount = '';
	o.maxRows = '100';
	o.orderByClause = '';
	o.parameters = new Array();
	o.queryClass = '';
	o.queryName = '';
	o.sql = ''; // encrypted
	o.sqlLookup = ''; // encrypted
	o.tableName = '';
	o.whereClause = '';
	o.onCreate();
}
function _ZEN_Component_dataListBox_serialize(set,s)
{
	s[0]='1146456179';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnCreateResultSet;s[7]=this.OnDrawItem;s[8]=this.OnExecuteResultSet;s[9]=this.align;s[10]=this.aux;s[11]=this.clientType;s[12]=this.columnName;s[13]=this.containerStyle;s[14]=this.controlClass;s[15]=this.controlStyle;s[16]=this.dataBinding;s[17]=(this.disabled?1:0);s[18]=(this.dragEnabled?1:0);s[19]=(this.dropEnabled?1:0);s[20]=(this.dynamic?1:0);s[21]=this.enclosingClass;s[22]=this.enclosingStyle;s[23]=this.error;s[24]=this.groupByClause;s[25]=this.height;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=(this.hzScroll?1:0);s[31]=(this.invalid?1:0);s[32]=this.invalidMessage;s[33]=this.itemCount;s[34]=this.label;s[35]=this.labelClass;s[36]=this.labelStyle;s[37]=this.listHeight;s[38]=this.listWidth;s[39]=this.maxRows;s[40]=this.onafterdrag;s[41]=this.onbeforedrag;s[42]=this.onblur;s[43]=this.onchange;s[44]=this.onclick;s[45]=this.ondblclick;s[46]=this.ondrag;s[47]=this.ondrop;s[48]=this.onfocus;s[49]=this.onhide;s[50]=this.onkeydown;s[51]=this.onkeypress;s[52]=this.onkeyup;s[53]=this.onmousedown;s[54]=this.onmouseout;s[55]=this.onmouseover;s[56]=this.onmouseup;s[57]=this.onrefresh;s[58]=this.onshow;s[59]=this.onsubmit;s[60]=this.onupdate;s[61]=this.onvalidate;s[62]=this.orderByClause;s[63]=this.originalValue;s[64]=this.overlayMode;s[65]=set.serializeList(this,this.parameters,true,'parameters');s[66]=this.queryClass;s[67]=this.queryName;s[68]=(this.readOnly?1:0);s[69]=this.renderFlag;s[70]=(this.required?1:0);s[71]=this.requiredMessage;s[72]=this.selectedIndex;s[73]=(this.showLabel?1:0);s[74]=this.slice;s[75]=this.sql;s[76]=this.sqlLookup;s[77]=this.tabIndex;s[78]=this.tableName;s[79]=this.text;s[80]=this.title;s[81]=this.tuple;s[82]=this.valign;s[83]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[84]=(this.visible?1:0);s[85]=this.whereClause;s[86]=this.width;
}
function _ZEN_Component_dataListBox_getSettings(s)
{
	s['name'] = 'string';
	s['columnName'] = 'string';
	s['groupByClause'] = 'string';
	s['itemCount'] = 'integer';
	s['maxRows'] = 'integer';
	s['orderByClause'] = 'string';
	s['parameters'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['sql'] = 'sql';
	s['sqlLookup'] = 'sql';
	s['tableName'] = 'string';
	s['whereClause'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dataListBox_executeQuery() {
this.refreshContents();
}

function _ZEN_Component_dataListBox_getOptionCount() {
return !zenIsMissing(this.itemCount) ? this.itemCount : 0;
}

function _ZEN_Component_dataListBox_getOptionText(idx) {
var value = '';
var item = self.document.getElementById('item_' + idx + '_' + this.index);
if (item) {
value = item.getAttribute('zenText');
}
return value;
}

function _ZEN_Component_dataListBox_getOptionValue(idx) {
var value = '';
var item = self.document.getElementById('item_' + idx + '_' + this.index);
if (item) {
value = item.getAttribute('zenValue');
}
return value;
}

function _ZEN_Component_dataListBox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dataListBox__Loader() {
	zenLoadClass('_ZEN_Component_abstractListBox');
	_ZEN_Component_dataListBox.prototype = zenCreate('_ZEN_Component_abstractListBox',-1);
	var p = _ZEN_Component_dataListBox.prototype;
	p.constructor = _ZEN_Component_dataListBox;
	p.superClass = ('undefined' == typeof _ZEN_Component_abstractListBox) ? zenMaster._ZEN_Component_abstractListBox.prototype:_ZEN_Component_abstractListBox.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dataListBox';
	p._type = 'dataListBox';
	p.serialize = _ZEN_Component_dataListBox_serialize;
	p.getSettings = _ZEN_Component_dataListBox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_dataListBox_ReallyRefreshContents;
	p.executeQuery = _ZEN_Component_dataListBox_executeQuery;
	p.getOptionCount = _ZEN_Component_dataListBox_getOptionCount;
	p.getOptionText = _ZEN_Component_dataListBox_getOptionText;
	p.getOptionValue = _ZEN_Component_dataListBox_getOptionValue;
}

// ================================================================================
_zenClassIdx['listBox'] = '_ZEN_Component_listBox';
function _ZEN_Component_listBox(index,id) {
	if (index>=0) {_ZEN_Component_listBox__init(this,index,id);}
}

function _ZEN_Component_listBox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_abstractListBox__init) ?zenMaster._ZEN_Component_abstractListBox__init(o,index,id):_ZEN_Component_abstractListBox__init(o,index,id);
	o.options = new Array();
	o.onCreate();
}
function _ZEN_Component_listBox_serialize(set,s)
{
	s[0]='2670819123';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.hzScroll?1:0);s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.listHeight;s[32]=this.listWidth;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onblur;s[36]=this.onchange;s[37]=this.onclick;s[38]=this.ondblclick;s[39]=this.ondrag;s[40]=this.ondrop;s[41]=this.onfocus;s[42]=this.onhide;s[43]=this.onkeydown;s[44]=this.onkeypress;s[45]=this.onkeyup;s[46]=this.onmousedown;s[47]=this.onmouseout;s[48]=this.onmouseover;s[49]=this.onmouseup;s[50]=this.onrefresh;s[51]=this.onshow;s[52]=this.onsubmit;s[53]=this.onupdate;s[54]=this.onvalidate;s[55]=set.serializeList(this,this.options,true,'options');s[56]=this.originalValue;s[57]=this.overlayMode;s[58]=(this.readOnly?1:0);s[59]=this.renderFlag;s[60]=(this.required?1:0);s[61]=this.requiredMessage;s[62]=this.selectedIndex;s[63]=(this.showLabel?1:0);s[64]=this.slice;s[65]=this.tabIndex;s[66]=this.text;s[67]=this.title;s[68]=this.tuple;s[69]=this.valign;s[70]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[71]=(this.visible?1:0);s[72]=this.width;
}
function _ZEN_Component_listBox_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_listBox_appendOption(value,text,style) {
var option = zenPage.createComponent('option');
if (value != null) option.value = value;
option.text = (text != null) ? text : option.value;
if (style != null) option.style = style;
this.options[this.options.length] = option;
this.renderListBox();
}

function _ZEN_Component_listBox_dropStartHandler(dragData) {
var value = dragData.value;
var text = dragData.text;
if (this != dragData.sourceComponent) {
this.appendOption(value,text);
}
else {
var tgtId = ZLM.getDragInnerDestination().id;
var tgtIndex = -1;
if (tgtId && tgtId.indexOf('item')!=-1) {
tgtIndex = tgtId.split('_')[1];
}
dragData.targetItem = tgtIndex;
var srcIndex = dragData.sourceItem;
this.moveOption(srcIndex,tgtIndex);
}
return true;
}

function _ZEN_Component_listBox_getOptionCount() {
return this.options.length;
}

function _ZEN_Component_listBox_getOptionText(idx) {
return this.options[idx].text;
}

function _ZEN_Component_listBox_getOptionValue(idx) {
return this.options[idx].value;
}

function _ZEN_Component_listBox_insertOption(index,value,text,style) {
var option = zenPage.createComponent('option');
if (value != null) option.value = value;
option.text = (text != null) ? text : option.value;
if (style != null) option.style = style;
this.options.splice(index,0,option);
this.renderListBox();
}

function _ZEN_Component_listBox_moveOption(index,newIndex) {
if (index < 0 || index > this.options.length) return;
if (newIndex < 0 || newIndex > this.options.length) {
newIndex = this.options.length;
}
if (index == newIndex) return;
var option = this.options[index];
this.options.splice(index,1);
this.options.splice(newIndex,0,option);
this.renderListBox();
}

function _ZEN_Component_listBox_onRefreshContents() {
this.renderListBox();
}

function _ZEN_Component_listBox_onloadHandler() {
this.renderListBox();
}

function _ZEN_Component_listBox_removeOption(index) {
this.options.splice(index,1);
if (this.selectedIndex >= this.options.length) {
this.selectedIndex = -1;
}
this.renderListBox();
}

function _ZEN_Component_listBox_renderListBox() {
var div = this.findElement('list');
zenASSERT(div,'Unable to find listBox element',arguments);
var html = new Array();
var option,val,text,cls,style;
var hasSel = false;
for (var n = 0; n < this.options.length; n++) {
option = this.options[n];
val = option.value;
text = (option.text!='') ? option.text : option.value;
if (!hasSel && this.value == option.value) {
this.selectedIndex = n;
cls = 'listBoxItemSelected';
hasSel = true;
}
else {
cls = 'listBoxItem';
}
var mouseEvents = '';
if (zenPage.dragAndDrop) {
mouseEvents = ' onmousedown="return zenPage.getComponent('+this.index+').itemMouseDown(event,'+n+');"';
mouseEvents += ' onmouseup="return zenPage.getComponent('+this.index+').itemMouseUp(event);"';
}
style = (option.style=='') ? '' : ('style="'+option.style+'"');
html[html.length] = '<div'+ mouseEvents + ' class="'+cls+'" id="'+this.makeId('item_'+n)+'" onclick="zenPage.getComponent('+this.index+').clickItem('+n+');return false;" ondblclick="zenPage.getComponent('+this.index+').dblClickItem('+n+');" '+style+'>&nbsp;'+text+'&nbsp;<\/div>';
}
div.innerHTML = html.join("");
}

function _ZEN_Component_listBox_resetOptions() {
this.options.length = 0;
this.selectedIndex = -1;
this.text = '';
this.setValue('');
this.renderListBox();
}

function _ZEN_Component_listBox_setOption(index,value,text,style) {
var option = this.options[index];
if (null != option) {
if (value != null) option.value = value;
option.text = (text != null) ? text : option.value;
if (style != null) option.style = style;
this.renderListBox();
}
}

function _ZEN_Component_listBox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_listBox__Loader() {
	zenLoadClass('_ZEN_Component_abstractListBox');
	_ZEN_Component_listBox.prototype = zenCreate('_ZEN_Component_abstractListBox',-1);
	var p = _ZEN_Component_listBox.prototype;
	p.constructor = _ZEN_Component_listBox;
	p.superClass = ('undefined' == typeof _ZEN_Component_abstractListBox) ? zenMaster._ZEN_Component_abstractListBox.prototype:_ZEN_Component_abstractListBox.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.listBox';
	p._type = 'listBox';
	p.serialize = _ZEN_Component_listBox_serialize;
	p.getSettings = _ZEN_Component_listBox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_listBox_ReallyRefreshContents;
	p.appendOption = _ZEN_Component_listBox_appendOption;
	p.dropStartHandler = _ZEN_Component_listBox_dropStartHandler;
	p.getOptionCount = _ZEN_Component_listBox_getOptionCount;
	p.getOptionText = _ZEN_Component_listBox_getOptionText;
	p.getOptionValue = _ZEN_Component_listBox_getOptionValue;
	p.insertOption = _ZEN_Component_listBox_insertOption;
	p.moveOption = _ZEN_Component_listBox_moveOption;
	p.onRefreshContents = _ZEN_Component_listBox_onRefreshContents;
	p.onloadHandler = _ZEN_Component_listBox_onloadHandler;
	p.removeOption = _ZEN_Component_listBox_removeOption;
	p.renderListBox = _ZEN_Component_listBox_renderListBox;
	p.resetOptions = _ZEN_Component_listBox_resetOptions;
	p.setOption = _ZEN_Component_listBox_setOption;
}

// ================================================================================
_zenClassIdx['button'] = '_ZEN_Component_button';
function _ZEN_Component_button(index,id) {
	if (index>=0) {_ZEN_Component_button__init(this,index,id);}
}

function _ZEN_Component_button__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.caption = '';
	o.controlClass = 'button';
}
function _ZEN_Component_button_serialize(set,s)
{
	s[0]='882897798';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.clientType;s[10]=this.containerStyle;s[11]=this.controlClass;s[12]=this.controlStyle;s[13]=this.dataBinding;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.onafterdrag;s[32]=this.onbeforedrag;s[33]=this.onblur;s[34]=this.onchange;s[35]=this.onclick;s[36]=this.ondblclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onfocus;s[40]=this.onhide;s[41]=this.onkeydown;s[42]=this.onkeypress;s[43]=this.onkeyup;s[44]=this.onmousedown;s[45]=this.onmouseout;s[46]=this.onmouseover;s[47]=this.onmouseup;s[48]=this.onrefresh;s[49]=this.onshow;s[50]=this.onsubmit;s[51]=this.onupdate;s[52]=this.onvalidate;s[53]=this.originalValue;s[54]=this.overlayMode;s[55]=(this.readOnly?1:0);s[56]=this.renderFlag;s[57]=(this.required?1:0);s[58]=this.requiredMessage;s[59]=(this.showLabel?1:0);s[60]=this.slice;s[61]=this.tabIndex;s[62]=this.title;s[63]=this.tuple;s[64]=this.valign;s[65]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[66]=(this.visible?1:0);s[67]=this.width;
}
function _ZEN_Component_button_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_button_setProperty(property,value,value2) {
switch(property) {
case 'caption':
this.caption = value;
var el = this.findElement('control');
if (el) {
el.value = this.caption;
}
break;
case 'value':
this.value = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_button_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_button__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_button.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_button.prototype;
	p.constructor = _ZEN_Component_button;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.button';
	p._type = 'button';
	p.serialize = _ZEN_Component_button_serialize;
	p.getSettings = _ZEN_Component_button_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_button_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_button_setProperty;
}

// ================================================================================
_zenClassIdx['submit'] = '_ZEN_Component_submit';
function _ZEN_Component_submit(index,id) {
	if (index>=0) {_ZEN_Component_submit__init(this,index,id);}
}

function _ZEN_Component_submit__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_button__init) ?zenMaster._ZEN_Component_button__init(o,index,id):_ZEN_Component_button__init(o,index,id);
	o.action = 'submit';
	o.nextPage = '';
}
function _ZEN_Component_submit_serialize(set,s)
{
	s[0]='1004900127';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.action;s[7]=this.align;s[8]=this.aux;s[9]=this.caption;s[10]=this.clientType;s[11]=this.containerStyle;s[12]=this.controlClass;s[13]=this.controlStyle;s[14]=this.dataBinding;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.height;s[23]=(this.hidden?1:0);s[24]=this.hint;s[25]=this.hintClass;s[26]=this.hintStyle;s[27]=(this.invalid?1:0);s[28]=this.invalidMessage;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelStyle;s[32]=this.nextPage;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onblur;s[36]=this.onchange;s[37]=this.onclick;s[38]=this.ondblclick;s[39]=this.ondrag;s[40]=this.ondrop;s[41]=this.onfocus;s[42]=this.onhide;s[43]=this.onkeydown;s[44]=this.onkeypress;s[45]=this.onkeyup;s[46]=this.onmousedown;s[47]=this.onmouseout;s[48]=this.onmouseover;s[49]=this.onmouseup;s[50]=this.onrefresh;s[51]=this.onshow;s[52]=this.onsubmit;s[53]=this.onupdate;s[54]=this.onvalidate;s[55]=this.originalValue;s[56]=this.overlayMode;s[57]=(this.readOnly?1:0);s[58]=this.renderFlag;s[59]=(this.required?1:0);s[60]=this.requiredMessage;s[61]=(this.showLabel?1:0);s[62]=this.slice;s[63]=this.tabIndex;s[64]=this.title;s[65]=this.tuple;s[66]=this.valign;s[67]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[68]=(this.visible?1:0);s[69]=this.width;
}
function _ZEN_Component_submit_getSettings(s)
{
	s['name'] = 'string';
	s['action'] = 'string';
	s['nextPage'] = 'uri';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_submit_onclickHandler() {
var form = this.getForm();
zenASSERT(form,"Submit button is not part of a form",arguments);
if (form) {
if ('' != this.nextPage) {
form.setProperty('nextPage',this.nextPage);
}
zenInvokeCallbackMethod(this.onclick,this,'onclick');
form.submit(this.action);
}
}

function _ZEN_Component_submit_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_submit__Loader() {
	zenLoadClass('_ZEN_Component_button');
	_ZEN_Component_submit.prototype = zenCreate('_ZEN_Component_button',-1);
	var p = _ZEN_Component_submit.prototype;
	p.constructor = _ZEN_Component_submit;
	p.superClass = ('undefined' == typeof _ZEN_Component_button) ? zenMaster._ZEN_Component_button.prototype:_ZEN_Component_button.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.submit';
	p._type = 'submit';
	p.serialize = _ZEN_Component_submit_serialize;
	p.getSettings = _ZEN_Component_submit_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_submit_ReallyRefreshContents;
	p.onclickHandler = _ZEN_Component_submit_onclickHandler;
}

// ================================================================================
_zenClassIdx['calendar'] = '_ZEN_Component_calendar';
function _ZEN_Component_calendar(index,id) {
	if (index>=0) {_ZEN_Component_calendar__init(this,index,id);}
}

function _ZEN_Component_calendar__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.dayList = '';
	o.endYear = '';
	o.firstDayOfWeek = '0';
	o.fixedMonth = false;
	o.gapWidth = '40px';
	o.maxDate = '';
	o.minDate = '';
	o.month = '';
	o.monthList = '';
	o.showTime = false;
	o.startYear = '';
	o.timeCaption = '';
	o.year = '';
}
function _ZEN_Component_calendar_serialize(set,s)
{
	s[0]='854513344';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=this.dayList;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.endYear;s[21]=this.error;s[22]=this.firstDayOfWeek;s[23]=(this.fixedMonth?1:0);s[24]=this.gapWidth;s[25]=this.height;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=(this.invalid?1:0);s[31]=this.invalidMessage;s[32]=this.label;s[33]=this.labelClass;s[34]=this.labelStyle;s[35]=this.maxDate;s[36]=this.minDate;s[37]=this.month;s[38]=this.monthList;s[39]=this.onafterdrag;s[40]=this.onbeforedrag;s[41]=this.onblur;s[42]=this.onchange;s[43]=this.onclick;s[44]=this.ondblclick;s[45]=this.ondrag;s[46]=this.ondrop;s[47]=this.onfocus;s[48]=this.onhide;s[49]=this.onkeydown;s[50]=this.onkeypress;s[51]=this.onkeyup;s[52]=this.onmousedown;s[53]=this.onmouseout;s[54]=this.onmouseover;s[55]=this.onmouseup;s[56]=this.onrefresh;s[57]=this.onshow;s[58]=this.onsubmit;s[59]=this.onupdate;s[60]=this.onvalidate;s[61]=this.originalValue;s[62]=this.overlayMode;s[63]=(this.readOnly?1:0);s[64]=this.renderFlag;s[65]=(this.required?1:0);s[66]=this.requiredMessage;s[67]=(this.showLabel?1:0);s[68]=(this.showTime?1:0);s[69]=this.slice;s[70]=this.startYear;s[71]=this.tabIndex;s[72]=this.timeCaption;s[73]=this.title;s[74]=this.tuple;s[75]=this.valign;s[76]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[77]=(this.visible?1:0);s[78]=this.width;s[79]=this.year;
}
function _ZEN_Component_calendar_getSettings(s)
{
	s['name'] = 'string';
	s['dayList'] = 'csv';
	s['endYear'] = 'integer';
	s['firstDayOfWeek'] = 'integer';
	s['fixedMonth'] = 'boolean';
	s['gapWidth'] = 'length';
	s['maxDate'] = 'string';
	s['minDate'] = 'string';
	s['month'] = 'integer';
	s['monthList'] = 'csv';
	s['showTime'] = 'boolean';
	s['startYear'] = 'integer';
	s['timeCaption'] = 'caption';
	s['year'] = 'integer';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_calendar_changeMonth() {
var selYear = this.findElement('calendarYear');
var selMonth = this.findElement('calendarMonth');
if (!selYear || !selMonth) return;
var year = selYear.value;
var month = selMonth.value;
this.year = ('' == year) ? this.year : year;
this.month = ('' == month) ? this.month : month;
this.renderCalendar();
}

function _ZEN_Component_calendar_findEndYear() {
var ret = null;
if ('' == this.endYear) {
if ('' != this.maxDate) {
var maxD = zenParseDate(this.maxDate);
if (-1 != maxD) {
ret = parseInt(maxD.substr(0,4),10);
}
}
if (null == ret) {
var now = new Date();
ret = now.getFullYear() + 30;
}
}
else {
ret = this.endYear;
}
return ret;
}

function _ZEN_Component_calendar_findStartYear() {
var ret = null;
if ('' == this.startYear) {
if ('' != this.minDate) {
var minD = zenParseDate(this.minDate);
if (-1 != minD) {
ret = parseInt(minD.substr(0,4),10);
}
}
if (null == ret) {
var now = new Date();
ret = now.getFullYear() - 10;
}
}
else {
ret = this.startYear;
}
return ret;
}

function _ZEN_Component_calendar_nextMonth() {
if (this.readOnly || this.disabled) return;
if (this.month == 12 && this.year == this.endYear) return;
this.month++;
if (this.month > 12) {
this.month = 1;
this.year++;
}
var selYear = this.findElement('calendarYear');
var selMonth = this.findElement('calendarMonth');
selYear.value = this.year;
selMonth.value = this.month;
this.renderCalendar();
}

function _ZEN_Component_calendar_parseDate(value) {
var tYear = parseInt(value.substr(0,4),10);
var tMonth = parseInt(value.substr(5,2),10);
var tDay = parseInt(value.substr(8,2),10);
var tTime = '';
if (this.showTime) {
var tTime = value.substr(11);
tTime = zenNormalizeTime(tTime);
}
if (tYear >= this.findStartYear() && tYear <= this.findEndYear() &&
tMonth >= 1 && tMonth <= 12 &&
tDay >= 1 && tDay <= 31) {
var d = new Date(tYear,tMonth-1,tDay);
this.year = d.getFullYear();
this.month = d.getMonth() + 1;
var selYear = this.findElement('calendarYear');
var selMonth = this.findElement('calendarMonth');
if (selYear && selMonth) {
selYear.value = this.year;
selMonth.value = this.month;
}
if (this.showTime) {
var ctrl = this.findElement('time');
if (ctrl) {
ctrl.value = tTime;
}
}
value = this.year+'-'+(this.month<10?'0':'')+this.month+'-'+(d.getDate()<10?'0':'')+d.getDate()+(''==tTime?'':' ')+tTime;
}
else {
value = '';
}
return value;
}

function _ZEN_Component_calendar_prevMonth() {
if (this.readOnly || this.disabled) return;
if (this.month == 1 && this.year == this.findStartYear()) return;
this.month--;
if (this.month <= 0) {
this.month = 12;
this.year--;
}
var selYear = this.findElement('calendarYear');
var selMonth = this.findElement('calendarMonth');
selYear.value = this.year;
selMonth.value = this.month;
this.renderCalendar();
}

function _ZEN_Component_calendar_renderCalendar() {
var div = this.findElement('calendarDiv');
if (!div) return;
zenASSERT(div,"Unable to find calendarDiv.",arguments);
var html = new Array();
html[html.length] = '<table class="calendar" width="100%" border="0" cellpadding="0" cellspacing="0">';
var days = this.dayList.split(',');
html[html.length] = '<tr>';
for (var d = 0; d < 7; d++) {
var dnum = (d + parseInt(this.firstDayOfWeek,10)) % 7;
var dname = (days[dnum]==null || days[dnum]=='') ? '&nbsp;' : days[dnum];
html[html.length] = '<th '+(this.disabled?'class="calendarDisabled"':'')+'>' + dname + '</th>';
}
html[html.length] = '</tr>';
var tYear = parseInt(this.value.substr(0,4),10);
var tMonth = parseInt(this.value.substr(5,2),10);
var tDay = parseInt(this.value.substr(8,2),10);
if ('' != this.minDate) {
var minD = zenParseDate(this.minDate);
if (-1 != minD) {
var minYear = parseInt(minD.substr(0,4),10);
var minMonth = parseInt(minD.substr(5,2),10);
var minDay = parseInt(minD.substr(8,2),10);
}
}
if ('' != this.maxDate) {
var maxD = zenParseDate(this.maxDate);
if (-1 != maxD) {
var maxYear = parseInt(maxD.substr(0,4),10);
var maxMonth = parseInt(maxD.substr(5,2),10);
var maxDay = parseInt(maxD.substr(8,2),10);
}
}
var currMonth = new Date(this.year,this.month - 1);
var firstDay = currMonth.getDay();
var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
var now = new Date();
if (this.year%4 == 0) {
if (this.year%100 == 0 && this.year%400 != 0) {
}
else {
daysInMonth[1] = 29;
}
}
var adj = firstDay - parseInt(this.firstDayOfWeek,10);
adj = (adj < 0) ? adj + 7 : adj;
var prevCell = 41 - adj;
var nextCell = 42 - adj;
if (this.fixedMonth) {
prevCell = -100;
nextCell = -100;
}
var val = '';
var dayno = parseInt(this.firstDayOfWeek,10) - firstDay;
dayno = dayno > 0 ? dayno - 7: dayno;
for (var r = 0; r < 6; r++) {
html[html.length] = '<tr>';
for (var d = 0; d < 7; d++) {
var dnum = (d + parseInt(this.firstDayOfWeek,10)) % 7;
dayno++;
var cell = (dayno>0 && dayno <= daysInMonth[this.month-1]) ? dayno : '';
if ('' == cell) {
if (dayno == prevCell) {
html[html.length] = '<td class="' + (this.disabled?"calendarDisabled":"calendarLink") + '" onclick="zenPage.getComponent(' + this.index + ').prevMonth();">&laquo;</td>';
}
else if (dayno == nextCell) {
html[html.length] = '<td class="' + (this.disabled?"calendarDisabled":"calendarLink") + '" onclick="zenPage.getComponent(' + this.index + ').nextMonth();">&raquo;</td>';
}
else {
html[html.length] = '<td class="'+(this.disabled?"calendarDisabled":"calendarEmpty")+'">&nbsp;</td>';
}
}
else {
var onclk = ' onclick="zenPage.getComponent(' + this.index + ').selectDay('+dayno+');"';
var style;
if (this.disabled) {
style = 'class="calendarDisabled"';
}
else if (maxYear && ((this.year > maxYear) || (this.year == maxYear && this.month > maxMonth) || (this.year == maxYear && this.month == maxMonth && dayno > maxDay))) {
style = 'class="calendarDisabled"';
onclk = '';
}
else if (minYear && ((this.year < minYear) || (this.year == minYear && this.month < minMonth) || (this.year == minYear && this.month == minMonth && dayno < minDay))) {
style = 'class="calendarDisabled"';
onclk = '';
}
else if (this.year == tYear && this.month == tMonth && dayno == tDay) {
style = 'class="calendarSelected"';
}
else if (this.year == now.getFullYear() && this.month == (now.getMonth()+1) && dayno == now.getDate()) {
style = 'class="calendarToday"';
}
else {
style = 'class="calendarDay'+dnum+'"';
}
html[html.length] = '<td ' + style + onclk + '>' + cell + '</td>';
}
}
html[html.length] = '</tr>';
}
html[html.length] = '</table>';
div.innerHTML = html.join("");
}

function _ZEN_Component_calendar_renderCalendarAll() {
if (this.getEnclosingDiv() == null) return;
if ('' == this.monthList) {
this.monthList = zenText('zenMonthNames');
}
if ('' == this.dayList) {
this.dayList = zenText('zenDayShortNames');
}
if (zenIsMissing(this.startYear)) this.startYear = 1900;
if (zenIsMissing(this.year)) this.year = 2000;
if (zenIsMissing(this.month)) this.month = 1;
var year = this.year;
var month = this.month;
var tTime = '';
if ('' != this.value) {
year = parseInt(this.value.substr(0,4),10);
month = parseInt(this.value.substr(5,2),10);
if (this.showTime) {
var tTime = this.value.substr(11);
tTime = zenNormalizeTime(tTime);
}
}
var html = new Array();
html[html.length] = '<input type="hidden" id="'+this.makeId('control')+'" name="'+ this.sysName() +'" value="'+this.value+'">';
html[html.length] = '<table class="calendarOutline" title="'+this.title+'" border="1" cellspacing="0" cellpadding="0">';
html[html.length] = '<tr><td align="left">';
var months = this.monthList.split(',');
if (this.fixedMonth) {
var mname = (months[month-1]==null ? '' : months[month-1]);
html[html.length] = '<span class="calendarLabel">' + mname + '</span>';
}
else {
html[html.length] = '<select class="calendarSelect" id="'+this.makeId('calendarMonth')+'" onchange="zenPage.getComponent('+this.index+').changeMonth();">';
for (var m = 0; m < 12; m++) {
var mname = (months[m]==null ? '' : months[m]);
html[html.length] = '<option value="'+(m+1)+'" '+ ((m+1)==month ? 'selected' : '') +'>'+mname;
}
html[html.length] = '</select>';
}
html[html.length] = '</td><td class="calendarGap" width="'+this.gapWidth+'">&nbsp;</td><td align="right">';
if (this.fixedMonth) {
html[html.length] = '<span class="calendarLabel">' + year + '</span>';
}
else {
html[html.length] = '<select class="calendarSelect" id="'+this.makeId('calendarYear')+'" onchange="zenPage.getComponent('+this.index+').changeMonth();">';
for (y = this.findStartYear(); y <= this.findEndYear(); y++) {
html[html.length] = '<option value="'+y+'" '+(y==year ? 'selected' : '') + '>'+y;
}
html[html.length] = '</select>';
}
html[html.length] = '</td></tr><tr><td align="center" colspan="3">';
html[html.length] = '<div id="'+this.makeId('calendarDiv')+'"></div>';
html[html.length] = '</td></tr></table>';
if (this.showTime) {
html[html.length] = '<div class="calendarTimeDiv" id="'+this.makeId('timeDiv')+'">'+this.timeCaption+'<input id="'+this.makeId('time')+'" type="text" size="6" '+(this.disabled?'disabled ':'')+(this.readOnly?'readonly ':'')+'onkeypress="zenPage.getComponent('+this.index+').timeKeyHandler(event);" value="'+tTime+'"/></div>';
}
this.getEnclosingDiv().innerHTML = html.join('');
this.renderCalendar();
}

function _ZEN_Component_calendar_renderContents() {
this.renderCalendarAll();
}

function _ZEN_Component_calendar_selectDay(day) {
if (this.readOnly || this.disabled) return;
if (null == day) {
day = parseInt(this.value.substr(8,2),10);
if (isNaN(day)) {
var now = new Date();
day = now.getDate();
}
}
this.value = this.year + '-' + ((this.month < 10) ? '0' : '') + this.month + '-' + ((day < 10) ? '0' : '') + day;
if (this.showTime) {
var t = this.findElement('time').value;
t = zenNormalizeTime(t);
if ('' != t) {
this.value += ' ' + t;
}
}
this.findElement('control').value = this.value;
this.renderCalendar();
this.onchangeHandler();
}

function _ZEN_Component_calendar_setProperty(property,value,value2) {
var el = this.findElement('control');
switch(property) {
case 'value':
if (value != '') {
value = this.parseDate(value);
}
if (el) el.value = value;
this.value = value;
this.renderCalendar();
break;
case 'month':
value = parseInt(value,10);
value = (value < 1) ? 1 : value;
value = (value > 12) ? 12 : value;
this.month = value;
this.renderCalendarAll();
break;
case 'year':
value = parseInt(value,10);
value = (value < this.findStartYear()) ? this.findStartYear() : value;
value = (value > this.findEndYear()) ? this.findEndYear() : value;
this.year = value;
this.renderCalendarAll();
break;
case 'readOnly':
value = value ? true : false;
this.readOnly = value;
if (el) el.readOnly = value;
break;
case 'startYear':
if ('' != value) {
value = parseInt(value,10);
if (isNaN(value)) {
value = '';
}
else {
value = value < 1600 ? 1600 : value;
}
}
this.startYear = value;
this.renderCalendarAll();
break;
case 'endYear':
if ('' != value) {
value = parseInt(value,10);
if (isNaN(value)) {
value = '';
}
else {
value = parseInt(value,10);
value = value > 9999 ? 9999 : value;
}
}
this.endYear = value;
this.renderCalendarAll();
break;
case 'minDate':
case 'maxDate':
if (value != '') {
var v = zenParseDate(value);
value = (-1 == v) ? '' : v;
}
this[property] = value;
this.renderCalendarAll();
break;
case 'monthList':
this.monthList = value;
this.renderCalendarAll();
break;
case 'dayList':
this.dayList = value;
this.renderCalendar();
break;
case 'timeCaption':
this.timeCaption = value;
this.renderCalendar();
break;
case 'firstDayOfWeek':
value = parseInt(value,10);
value = (value < 0) ? 0 : value;
value = (value > 6) ? 6 : value;
this.firstDayOfWeek = value;
this.renderCalendar();
break;
case 'gapWidth':
this.gapWidth = value;
this.renderCalendarAll();
break;
case 'fixedMonth':
this.fixedMonth = value ? true : false;
this.renderCalendarAll();
break;
case 'showTime':
this.showTime = value ? true : false;
this.renderCalendarAll();
break;
case 'disabled':
value = value ? true : false;
this.disabled = value;
var year = this.findElement('calendarYear');
var month = this.findElement('calendarMonth');
year.disabled = value;
month.disabled = value;
el.disabled = value;
this.renderCalendar();
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_calendar_timeKeyHandler(evt) {
evt = evt ? evt : window.event;
switch(evt.keyCode) {
case zenENTER:
this.selectDay();
return false;
default:
break;
}
return true;
}

function _ZEN_Component_calendar_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_calendar__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_calendar.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_calendar.prototype;
	p.constructor = _ZEN_Component_calendar;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.calendar';
	p._type = 'calendar';
	p.serialize = _ZEN_Component_calendar_serialize;
	p.getSettings = _ZEN_Component_calendar_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_calendar_ReallyRefreshContents;
	p.changeMonth = _ZEN_Component_calendar_changeMonth;
	p.findEndYear = _ZEN_Component_calendar_findEndYear;
	p.findStartYear = _ZEN_Component_calendar_findStartYear;
	p.nextMonth = _ZEN_Component_calendar_nextMonth;
	p.parseDate = _ZEN_Component_calendar_parseDate;
	p.prevMonth = _ZEN_Component_calendar_prevMonth;
	p.renderCalendar = _ZEN_Component_calendar_renderCalendar;
	p.renderCalendarAll = _ZEN_Component_calendar_renderCalendarAll;
	p.renderContents = _ZEN_Component_calendar_renderContents;
	p.selectDay = _ZEN_Component_calendar_selectDay;
	p.setProperty = _ZEN_Component_calendar_setProperty;
	p.timeKeyHandler = _ZEN_Component_calendar_timeKeyHandler;
}

// ================================================================================
_zenClassIdx['checkbox'] = '_ZEN_Component_checkbox';
function _ZEN_Component_checkbox(index,id) {
	if (index>=0) {_ZEN_Component_checkbox__init(this,index,id);}
}

function _ZEN_Component_checkbox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.caption = '';
	o.captionClass = 'checkboxCaption';
	o.clientType = 'boolean';
	o.controlClass = 'checkbox';
}
function _ZEN_Component_checkbox_serialize(set,s)
{
	s[0]='709246303';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.captionClass;s[10]=this.clientType;s[11]=this.containerStyle;s[12]=this.controlClass;s[13]=this.controlStyle;s[14]=this.dataBinding;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.height;s[23]=(this.hidden?1:0);s[24]=this.hint;s[25]=this.hintClass;s[26]=this.hintStyle;s[27]=(this.invalid?1:0);s[28]=this.invalidMessage;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelStyle;s[32]=this.onafterdrag;s[33]=this.onbeforedrag;s[34]=this.onblur;s[35]=this.onchange;s[36]=this.onclick;s[37]=this.ondblclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onfocus;s[41]=this.onhide;s[42]=this.onkeydown;s[43]=this.onkeypress;s[44]=this.onkeyup;s[45]=this.onmousedown;s[46]=this.onmouseout;s[47]=this.onmouseover;s[48]=this.onmouseup;s[49]=this.onrefresh;s[50]=this.onshow;s[51]=this.onsubmit;s[52]=this.onupdate;s[53]=this.onvalidate;s[54]=this.originalValue;s[55]=this.overlayMode;s[56]=(this.readOnly?1:0);s[57]=this.renderFlag;s[58]=(this.required?1:0);s[59]=this.requiredMessage;s[60]=(this.showLabel?1:0);s[61]=this.slice;s[62]=this.tabIndex;s[63]=this.title;s[64]=this.tuple;s[65]=this.valign;s[66]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[67]=(this.visible?1:0);s[68]=this.width;
}
function _ZEN_Component_checkbox_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['captionClass'] = 'cssClass';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_checkbox_clickCaption() {
if (this.disabled) return;
if (this.readOnly) return;
var cb = this.findElement('control');
zenASSERT(cb,'Unable to find checkbox element',arguments);
cb.checked = !cb.checked;
var hidden = this.findElement('hidden');
zenASSERT(hidden,'Unable to find hidden element',arguments);
hidden.value = cb.checked ? '1' : '0';
this.value = cb.checked;
zenInvokeCallbackMethod(this.onclick,this,'onclick');
this.onchangeHandler();
}

function _ZEN_Component_checkbox_clickCheckbox() {
if (this.readOnly) return false;
var cb = this.findElement('control');
zenASSERT(cb,'Unable to find checkbox element',arguments);
var hidden = this.findElement('hidden');
zenASSERT(hidden,'Unable to find hidden element',arguments);
hidden.value = cb.checked ? '1' : '0';
this.value = cb.checked;
zenInvokeCallbackMethod(this.onclick,this,'onclick');
this.onchangeHandler();
return true;
}

function _ZEN_Component_checkbox_getProperty(property,key) {
switch(property) {
case 'value':
return this.normalizeValue(this.value);
}
return this.invokeSuper('getProperty',arguments);
}

function _ZEN_Component_checkbox_onSerialize() {
var cb = this.findElement('control');
if (cb) {
this.value = cb.checked;
}
}

function _ZEN_Component_checkbox_setProperty(property,value,value2) {
var el = this.findElement('control');
var hidden = this.findElement('hidden');
switch(property) {
case 'value':
value = this.normalizeValue(value);
this.value = value;
if (el) { el.checked = value; }
if (hidden) { hidden.value = value ? '1' : '0'; }
break;
case 'caption':
var caption = this.findElement('caption');
this.caption = value;
if (caption) { caption.innerHTML = value; }
break;
case 'captionClass':
var caption = this.findElement('caption');
this.captionClass = value;
if (caption) { caption.className = value; }
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_checkbox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_checkbox__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_checkbox.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_checkbox.prototype;
	p.constructor = _ZEN_Component_checkbox;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.checkbox';
	p._type = 'checkbox';
	p.serialize = _ZEN_Component_checkbox_serialize;
	p.getSettings = _ZEN_Component_checkbox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_checkbox_ReallyRefreshContents;
	p.clickCaption = _ZEN_Component_checkbox_clickCaption;
	p.clickCheckbox = _ZEN_Component_checkbox_clickCheckbox;
	p.getProperty = _ZEN_Component_checkbox_getProperty;
	p.onSerialize = _ZEN_Component_checkbox_onSerialize;
	p.setProperty = _ZEN_Component_checkbox_setProperty;
}

// ================================================================================
_zenClassIdx['colorPicker'] = '_ZEN_Component_colorPicker';
function _ZEN_Component_colorPicker(index,id) {
	if (index>=0) {_ZEN_Component_colorPicker__init(this,index,id);}
}

function _ZEN_Component_colorPicker__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.colorList = ',black,gray,darkblue,darkred,darkgreen,blue,red,green,yellow,orange,plum,purple,white';
}
function _ZEN_Component_colorPicker_serialize(set,s)
{
	s[0]='1217723316';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.colorList;s[10]=this.containerStyle;s[11]=this.controlClass;s[12]=this.controlStyle;s[13]=this.dataBinding;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.onafterdrag;s[32]=this.onbeforedrag;s[33]=this.onblur;s[34]=this.onchange;s[35]=this.onclick;s[36]=this.ondblclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onfocus;s[40]=this.onhide;s[41]=this.onkeydown;s[42]=this.onkeypress;s[43]=this.onkeyup;s[44]=this.onmousedown;s[45]=this.onmouseout;s[46]=this.onmouseover;s[47]=this.onmouseup;s[48]=this.onrefresh;s[49]=this.onshow;s[50]=this.onsubmit;s[51]=this.onupdate;s[52]=this.onvalidate;s[53]=this.originalValue;s[54]=this.overlayMode;s[55]=(this.readOnly?1:0);s[56]=this.renderFlag;s[57]=(this.required?1:0);s[58]=this.requiredMessage;s[59]=(this.showLabel?1:0);s[60]=this.slice;s[61]=this.tabIndex;s[62]=this.title;s[63]=this.tuple;s[64]=this.valign;s[65]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[66]=(this.visible?1:0);s[67]=this.width;
}
function _ZEN_Component_colorPicker_getSettings(s)
{
	s['name'] = 'string';
	s['colorList'] = 'csv';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_colorPicker_selectColor(color,notify) {
notify = (null==notify) ? false : notify;
var ctrl = this.findElement('colorPicker');
zenASSERT(ctrl,"Unable to find control.",arguments);
if (this.disabled) {
return;
}
var oldcolor = ctrl.value;
ctrl.value = color;
this.value = color;
var div;
div = this.findElement('colorPicker'+'_'+oldcolor);
if (div) {
div.className = 'colorPickerCell';
}
div = this.findElement('colorPicker'+'_'+color);
if (div) {
div.className = 'colorPickerCellSelected';
}
if (notify) {
this.onchangeHandler();
}
}

function _ZEN_Component_colorPicker_setProperty(property,value,value2) {
switch(property) {
case 'colorList':
this.colorList = value;
this.refreshContents();
break;
case 'value':
this.selectColor(value,false);
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_colorPicker_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_colorPicker__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_colorPicker.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_colorPicker.prototype;
	p.constructor = _ZEN_Component_colorPicker;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.colorPicker';
	p._type = 'colorPicker';
	p.serialize = _ZEN_Component_colorPicker_serialize;
	p.getSettings = _ZEN_Component_colorPicker_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_colorPicker_ReallyRefreshContents;
	p.selectColor = _ZEN_Component_colorPicker_selectColor;
	p.setProperty = _ZEN_Component_colorPicker_setProperty;
}

// ================================================================================
_zenClassIdx['dateSelect'] = '_ZEN_Component_dateSelect';
function _ZEN_Component_dateSelect(index,id) {
	if (index>=0) {_ZEN_Component_dateSelect__init(this,index,id);}
}

function _ZEN_Component_dateSelect__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.controlClass = 'dateSelect';
	o.format = 'MDY';
	o.maxYear = '';
	o.minYear = '';
	o.monthList = '';
	o.shortMonth = false;
	o.showMonthNumber = false;
}
function _ZEN_Component_dateSelect_serialize(set,s)
{
	s[0]='3939645954';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.format;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.maxYear;s[32]=this.minYear;s[33]=this.monthList;s[34]=this.onafterdrag;s[35]=this.onbeforedrag;s[36]=this.onblur;s[37]=this.onchange;s[38]=this.onclick;s[39]=this.ondblclick;s[40]=this.ondrag;s[41]=this.ondrop;s[42]=this.onfocus;s[43]=this.onhide;s[44]=this.onkeydown;s[45]=this.onkeypress;s[46]=this.onkeyup;s[47]=this.onmousedown;s[48]=this.onmouseout;s[49]=this.onmouseover;s[50]=this.onmouseup;s[51]=this.onrefresh;s[52]=this.onshow;s[53]=this.onsubmit;s[54]=this.onupdate;s[55]=this.onvalidate;s[56]=this.originalValue;s[57]=this.overlayMode;s[58]=(this.readOnly?1:0);s[59]=this.renderFlag;s[60]=(this.required?1:0);s[61]=this.requiredMessage;s[62]=(this.shortMonth?1:0);s[63]=(this.showLabel?1:0);s[64]=(this.showMonthNumber?1:0);s[65]=this.slice;s[66]=this.tabIndex;s[67]=this.title;s[68]=this.tuple;s[69]=this.valign;s[70]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[71]=(this.visible?1:0);s[72]=this.width;
}
function _ZEN_Component_dateSelect_getSettings(s)
{
	s['name'] = 'string';
	s['format'] = 'enum:MDY,DMY,YMD,DM,MD,YM,MY,Y,M';
	s['maxYear'] = 'integer';
	s['minYear'] = 'integer';
	s['monthList'] = 'csv';
	s['shortMonth'] = 'boolean';
	s['showMonthNumber'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dateSelect_focus() {
var el = null;
switch (this.format.charAt(0)) {
case 'Y':
el = this.findElement('year');
break;
case 'M':
el = this.findElement('month');
break;
case 'D':
el = this.findElement('day');
break;
}
if (el) {
try {
el.focus();
}
catch(ex) {
}
}
}

function _ZEN_Component_dateSelect_getDay() {
var day = this.findElement('day');
return (day ? day.value : '');
}

function _ZEN_Component_dateSelect_getMonth() {
var month = this.findElement('month');
return (month ? month.value : '');
}

function _ZEN_Component_dateSelect_getYear() {
var year = this.findElement('year');
return (year ? year.value : '');
}

function _ZEN_Component_dateSelect_isCompleteDate() {
var year = this.findElement('year');
var month = this.findElement('month');
var day = this.findElement('day');
var control = 0;
var blank = 0;
if (year) {
control++;
if (year.value=="") { blank++; }
}
if (month) {
control++;
if (month.value=="") { blank++; }
}
if (day) {
control++;
if (day.value=="") { blank++; }
}
if ((blank>0)&&(blank!=control)) {
return false;
}
return true;
}

function _ZEN_Component_dateSelect_isValid() {
var d = zenParseDate(this.getValue());
if (-1 == d) return false;
return true;
}

function _ZEN_Component_dateSelect_ondatechangeHandler(which) {
var year = this.findElement('year');
var month = this.findElement('month');
var day = this.findElement('day');
switch(which) {
case 'year':
if (year.value=='') {
if (month) { month.value = ''; }
if (day) { day.value = ''; }
}
break;
case 'month':
if (month.value=='') {
if (year) { year.value = ''; }
if (day) { day.value = ''; }
}
break;
case 'day':
if (day.value=='') {
if (month) { month.value = ''; }
if (year) { year.value = ''; }
}
break;
}
var yearVal = year ? parseInt(year.value) : '';
var monthVal = month ? parseInt(month.value) : '';
var dayVal = day ? parseInt(day.value) : '';
yearVal = isNaN(yearVal) ? '' : yearVal;
monthVal = isNaN(monthVal) ? '' : monthVal;
dayVal = isNaN(dayVal) ? '' : dayVal;
if ((yearVal=='')&&(this.format=='MD' || this.format=='DM' || this.format=='M')) {
var now = new Date();
yearVal = now.getFullYear();
}
if ((dayVal=='')&&(this.format=='YM' || this.format=='MY' || this.format=='M' || this.format=='Y')) {
dayVal = 1;
}
if ((monthVal=='')&&(this.format=='Y')) {
monthVal = 1;
}
var complete = this.isCompleteDate();
if (!complete) {
this.value = 'missing';
}
else if ((yearVal=='')&&(monthVal=='')&&(dayVal=='')) {
this.value = '';
}
else {
var d = new Date(yearVal,monthVal-1,dayVal);
if (d.getMonth() != (monthVal - 1)) {
d.setDate((monthVal==2) ? 28 : 30);
if (day) {
day.value = (monthVal==2) ? 28 : 30;
}
d.setMonth(monthVal - 1);
}
this.value = zenDateToString(d);
}
if (day && 'day' != which) {
this.updateDayList();
}
var el = this.findElement('control');
if (el) {
el.value = this.value;
}
this.onchangeHandler();
}

function _ZEN_Component_dateSelect_setProperty(property,value,value2) {
var el = this.findElement('control'); // hidden
var year = this.findElement('year');
var month = this.findElement('month');
var day = this.findElement('day');
switch(property) {
case 'value':
var yearVal = '';
var monthVal = '';
var dayVal = '';
if (value != '') {
var now = new Date();
value = value.toString();
yearVal = parseInt(value.substr(0,4),10);
yearVal = (isNaN(yearVal) ? now.getFullYear() : yearVal);
monthVal = parseInt(value.substr(5,2),10);
monthVal = (isNaN(monthVal) ? 1 : monthVal);
dayVal = parseInt(value.substr(8,2),10);
dayVal = (isNaN(dayVal) ? 1 : dayVal);
}
if (el) { el.value = value; }
if (year) { year.value = yearVal; }
if (month) { month.value = monthVal; }
if (day) {
day.value = dayVal;
this.updateDayList();
}
break;
case 'minYear':
case 'maxYear':
this[property] = value;
this.updateYearList();
break;
case 'controlClass':
this.controlClass = value;
if (year) { year.className = (this.invalid ? 'zenInvalid' : this.controlClass);}
if (month) { month.className = (this.invalid ? 'zenInvalid' : this.controlClass);}
if (day) { day.className = (this.invalid ? 'zenInvalid' : this.controlClass);}
break;
case 'controlStyle':
this.controlStyle = value;
if (year) { year.style.cssText = value;	}
if (month) { month.style.cssText = value; }
if (day) { day.style.cssText = value;	}
break;
case 'disabled':
value = (value) ? true : false;
this.disabled = value;
var d = (this.readOnly || this.disabled);
if (year) { year.disabled = d; }
if (month) { month.disabled = d; }
if (day) { day.disabled = d; }
var lbl = this.getLabelElement();
if (lbl) {
if (this.disabled) {
lbl.className = 'zenLabelDisabled';
}
else {
lbl.className = (''==this.labelClass) ? 'zenLabel' : this.labelClass;
}
}
break;
case 'readOnly':
value = (value) ? true : false;
this.readOnly = value;
var d = (this.readOnly || this.disabled);
if (year) { year.disabled = d; }
if (month) { month.disabled = d; }
if (day) { day.disabled = d; }
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_dateSelect_updateDayList() {
var year = this.getYear();
if (year=='') {
var now = new Date();
year = now.getFullYear();
}
var month = this.getMonth();
if (month=='') {
month = 1;
}
var day = this.findElement('day');
if (day) {
var tDay = day.value;
day.options.length = 0;
var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
if (year%4 == 0) {
if (year%100 == 0 && year%400 != 0) {
}
else {
daysInMonth[1] = 29;
}
}
day.options[day.options.length] = new Option('','');
for (var d = 1; d <= daysInMonth[month-1]; d++) {
day.options[day.options.length] = new Option(d,d,false,d==tDay);
}
}
}

function _ZEN_Component_dateSelect_updateYearList() {
var year = this.findElement('year');
if (year) {
var now = new Date();
var tYear = parseInt(this.value.substr(0,4),10);
year.options.length = 0;
var minY = parseInt(this.minYear,10);
var maxY = parseInt(this.maxYear,10);
minY = isNaN(minY) ? 1900 : minY;
maxY = isNaN(maxY) ? (now.getFullYear() + 20) : maxY;
minY = (minY < 1840) ? 1840 : minY;
maxY = (maxY > 3000) ? 3000 : maxY;
year.options[year.options.length] = new Option('','');
for (var y = minY; y <= maxY; y++) {
year.options[year.options.length] = new Option(y,y,false,y==tYear);
}
}
}

function _ZEN_Component_dateSelect_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dateSelect__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_dateSelect.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_dateSelect.prototype;
	p.constructor = _ZEN_Component_dateSelect;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dateSelect';
	p._type = 'dateSelect';
	p.serialize = _ZEN_Component_dateSelect_serialize;
	p.getSettings = _ZEN_Component_dateSelect_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_dateSelect_ReallyRefreshContents;
	p.focus = _ZEN_Component_dateSelect_focus;
	p.getDay = _ZEN_Component_dateSelect_getDay;
	p.getMonth = _ZEN_Component_dateSelect_getMonth;
	p.getYear = _ZEN_Component_dateSelect_getYear;
	p.isCompleteDate = _ZEN_Component_dateSelect_isCompleteDate;
	p.isValid = _ZEN_Component_dateSelect_isValid;
	p.ondatechangeHandler = _ZEN_Component_dateSelect_ondatechangeHandler;
	p.setProperty = _ZEN_Component_dateSelect_setProperty;
	p.updateDayList = _ZEN_Component_dateSelect_updateDayList;
	p.updateYearList = _ZEN_Component_dateSelect_updateYearList;
}

// ================================================================================
_zenClassIdx['dateText'] = '_ZEN_Component_dateText';
function _ZEN_Component_dateText(index,id) {
	if (index>=0) {_ZEN_Component_dateText__init(this,index,id);}
}

function _ZEN_Component_dateText__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.controlClass = 'comboboxInput';
	o.dayList = '';
	o.firstDayOfWeek = '0';
	o.format = 'YMD';
	o.invalidDateMessage = 'Invalid Date';
	o.maxDate = '';
	o.minDate = '';
	o.monthList = '';
	o.onshowPopup = '';
	o.separator = '-';
	o.showTime = false;
	o.size = '15';
	o.timeCaption = '';
}
function _ZEN_Component_dateText_serialize(set,s)
{
	s[0]='1388691862';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=this.dayList;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.firstDayOfWeek;s[22]=this.format;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=(this.invalid?1:0);s[29]=this.invalidDateMessage;s[30]=this.invalidMessage;s[31]=this.label;s[32]=this.labelClass;s[33]=this.labelStyle;s[34]=this.maxDate;s[35]=this.minDate;s[36]=this.monthList;s[37]=this.onafterdrag;s[38]=this.onbeforedrag;s[39]=this.onblur;s[40]=this.onchange;s[41]=this.onclick;s[42]=this.ondblclick;s[43]=this.ondrag;s[44]=this.ondrop;s[45]=this.onfocus;s[46]=this.onhide;s[47]=this.onkeydown;s[48]=this.onkeypress;s[49]=this.onkeyup;s[50]=this.onmousedown;s[51]=this.onmouseout;s[52]=this.onmouseover;s[53]=this.onmouseup;s[54]=this.onrefresh;s[55]=this.onshow;s[56]=this.onshowPopup;s[57]=this.onsubmit;s[58]=this.onupdate;s[59]=this.onvalidate;s[60]=this.originalValue;s[61]=this.overlayMode;s[62]=(this.readOnly?1:0);s[63]=this.renderFlag;s[64]=(this.required?1:0);s[65]=this.requiredMessage;s[66]=this.separator;s[67]=(this.showLabel?1:0);s[68]=(this.showTime?1:0);s[69]=this.size;s[70]=this.slice;s[71]=this.tabIndex;s[72]=this.timeCaption;s[73]=this.title;s[74]=this.tuple;s[75]=this.valign;s[76]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[77]=(this.visible?1:0);s[78]=this.width;
}
function _ZEN_Component_dateText_getSettings(s)
{
	s['name'] = 'string';
	s['dayList'] = 'csv';
	s['firstDayOfWeek'] = 'integer';
	s['format'] = 'enum:MDY,DMY,YMD';
	s['invalidDateMessage'] = 'caption';
	s['maxDate'] = 'string';
	s['minDate'] = 'string';
	s['monthList'] = 'csv';
	s['onshowPopup'] = 'eventHandler';
	s['separator'] = 'enum:-,/,., ';
	s['showTime'] = 'boolean';
	s['size'] = 'integer';
	s['timeCaption'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dateText_applyDate(group) {
var value = group.getValue();
var oldval = this.value;
var ctrl = this.findElement('control');
ctrl.value = this.formatValue(value);
this.value = value;
if (oldval != this.value) {
this.onchangeHandler();
}
}

function _ZEN_Component_dateText_formatValue(val) {
if ('' != val) {
if (-1 == val) {
val = this.invalidDateMessage;
}
else {
val = zenParseDate(val,this.showTime,this.format,this.separator);
}
}
return val
}

function _ZEN_Component_dateText_isValid() {
var value = this.getValue();
if ('' == value) return true;
var d = zenParseDate(value,this.showTime);
if (-1 == d) return false;
if (('' != this.minDate)||('' != this.maxDate)) {
var currD = zenStringToDate(value);
}
if ('' != this.minDate) {
var minD = zenStringToDate(this.minDate);
if (minD.getTime() > currD.getTime()) return false;
}
if ('' != this.maxDate) {
var maxD = zenStringToDate(this.maxDate);
if (maxD.getTime() < currD.getTime()) return false;
}
return true;
}

function _ZEN_Component_dateText_ondatechangeHandler() {
var ctrl = this.findElement('control');
zenASSERT(ctrl,'Unable to find input element',arguments);
var v = zenParseDate(this.unformatValue(ctrl.value),this.showTime,this.format,this.separator);
ctrl.value = (-1 == v) ? this.invalidDateMessage : v;
this.onchangeHandler();
}

function _ZEN_Component_dateText_onloadHandler() {
this.setValue(this.value);
}

function _ZEN_Component_dateText_setProperty(property,value,value2) {
var el = this.findElement('control');
switch(property) {
case 'value':
this.value = value;
if (el) {
el.value = this.formatValue(value);
}
break;
case 'format':
case 'separator':
this[property] = value;
if (el) {
el.value = this.formatValue(this.value);
}
break;
case 'showTime':
value = value ? true : false;
this.showTime = value;
break;
case 'disabled':
case 'readOnly':
this.invokeSuper('setProperty',arguments);
var btn = this.findElement('btn');
if (btn) {
btn.disabled = this.readOnly || this.disabled;
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_dateText_showDateSelector() {
if (this.disabled || this.readOnly) return;
var ctrl = this.findElement('control');
zenASSERT(ctrl,'Unable to find input element',arguments);
var value = ctrl.value;
var top,left;
var top = zenGetTop(ctrl) + ctrl.offsetHeight - zenGetTopScroll(ctrl);
var left = zenGetLeft(ctrl) - zenGetLeftScroll(ctrl);
top += this.window.document.body.scrollTop;
left += this.window.document.body.scrollLeft;
var group = zenPage.createComponent('modalGroup');
group.setProperty('onaction','zenPage.getComponent('+this.index+').applyDate(group);');
var calParms = new Object();
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
if ('' == value) {
var now = new Date();
calParms['year'] = now.getFullYear();
calParms['month'] = now.getMonth() + 1;
}
calParms['dayList'] = this.dayList;
calParms['monthList'] = this.monthList;
calParms['firstDayOfWeek'] = this.firstDayOfWeek;
if (this.showTime) {
calParms['timeCaption'] = this.timeCaption;
calParms['showTime'] = this.showTime;
}
zenInvokeCallbackMethod(this.onshowPopup,this,'onshowPopup','settings',calParms);
group.show('','calendar',value,top,left,null,null,calParms);
}

function _ZEN_Component_dateText_unformatValue(val) {
if ('' != val) {
if ('-'!=this.separator || 'YMD' != this.format) {
var t = val.toString().split(this.separator);
if (t.length>2) {
switch (this.format) {
case 'DMY':
val = t[2] + this.separator + t[1] + this.separator + t[0];
break;
case 'MDY':
val = t[2] + this.separator + t[0] + this.separator + t[1];
break;
case 'YMD':
val = t[0] + this.separator + t[1] + this.separator + t[2];
break;
}
}
val = zenParseDate(val,this.showTime,'YMD','-');
}
}
return val
}

function _ZEN_Component_dateText_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dateText__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_dateText.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_dateText.prototype;
	p.constructor = _ZEN_Component_dateText;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dateText';
	p._type = 'dateText';
	p.serialize = _ZEN_Component_dateText_serialize;
	p.getSettings = _ZEN_Component_dateText_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_dateText_ReallyRefreshContents;
	p.applyDate = _ZEN_Component_dateText_applyDate;
	p.formatValue = _ZEN_Component_dateText_formatValue;
	p.isValid = _ZEN_Component_dateText_isValid;
	p.ondatechangeHandler = _ZEN_Component_dateText_ondatechangeHandler;
	p.onloadHandler = _ZEN_Component_dateText_onloadHandler;
	p.setProperty = _ZEN_Component_dateText_setProperty;
	p.showDateSelector = _ZEN_Component_dateText_showDateSelector;
	p.unformatValue = _ZEN_Component_dateText_unformatValue;
}

// ================================================================================
_zenClassIdx['dynaGrid'] = '_ZEN_Component_dynaGrid';
function _ZEN_Component_dynaGrid(index,id) {
	if (index>=0) {_ZEN_Component_dynaGrid__init(this,index,id);}
}

function _ZEN_Component_dynaGrid__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.OnCreateDataSet = '';
	o.columnWidth = '';
	o.columns = new Array();
	o.controller = '';
	o.controllerId = '';
	o.currColumn = '1';
	o.currPage = '1';
	o.currRow = '1';
	o.dataSet = null;
	o.gridClass = 'dynaGrid';
	o.gridLabel = '';
	o.nowrap = true;
	o.onchangecell = '';
	o.onclickcolumn = '';
	o.onclickrow = '';
	o.ondblclick = '';
	o.ondrawcell = '';
	o.oneditcell = '';
	o.onnotifyView = '';
	o.onselectcell = '';
	o.rowLabelWidth = '100';
	o.rows = new Array();
	o.scrollIntoView = true;
	o.showColumnLabels = true;
	o.showRowLabels = true;
	o.onCreate();
}
function _ZEN_Component_dynaGrid_serialize(set,s)
{
	s[0]='145202215';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnCreateDataSet;s[7]=this.align;s[8]=this.aux;s[9]=this.clientType;s[10]=this.columnWidth;s[11]=set.serializeList(this,this.columns,true,'columns');s[12]=this.containerStyle;s[13]=this.controlClass;s[14]=this.controlStyle;s[15]=this.controller;s[16]=this.controllerId;s[17]=this.currColumn;s[18]=this.currPage;s[19]=this.currRow;s[20]=this.dataBinding;s[21]=set.addObject(this.dataSet,'dataSet');s[22]=(this.disabled?1:0);s[23]=(this.dragEnabled?1:0);s[24]=(this.dropEnabled?1:0);s[25]=(this.dynamic?1:0);s[26]=this.enclosingClass;s[27]=this.enclosingStyle;s[28]=this.error;s[29]=this.gridClass;s[30]=this.gridLabel;s[31]=this.height;s[32]=(this.hidden?1:0);s[33]=this.hint;s[34]=this.hintClass;s[35]=this.hintStyle;s[36]=(this.invalid?1:0);s[37]=this.invalidMessage;s[38]=this.label;s[39]=this.labelClass;s[40]=this.labelStyle;s[41]=(this.nowrap?1:0);s[42]=this.onafterdrag;s[43]=this.onbeforedrag;s[44]=this.onblur;s[45]=this.onchange;s[46]=this.onchangecell;s[47]=this.onclick;s[48]=this.onclickcolumn;s[49]=this.onclickrow;s[50]=this.ondblclick;s[51]=this.ondrag;s[52]=this.ondrawcell;s[53]=this.ondrop;s[54]=this.oneditcell;s[55]=this.onfocus;s[56]=this.onhide;s[57]=this.onkeydown;s[58]=this.onkeypress;s[59]=this.onkeyup;s[60]=this.onmousedown;s[61]=this.onmouseout;s[62]=this.onmouseover;s[63]=this.onmouseup;s[64]=this.onnotifyView;s[65]=this.onrefresh;s[66]=this.onselectcell;s[67]=this.onshow;s[68]=this.onsubmit;s[69]=this.onupdate;s[70]=this.onvalidate;s[71]=this.originalValue;s[72]=this.overlayMode;s[73]=(this.readOnly?1:0);s[74]=this.renderFlag;s[75]=(this.required?1:0);s[76]=this.requiredMessage;s[77]=this.rowLabelWidth;s[78]=set.serializeList(this,this.rows,true,'rows');s[79]=(this.scrollIntoView?1:0);s[80]=(this.showColumnLabels?1:0);s[81]=(this.showLabel?1:0);s[82]=(this.showRowLabels?1:0);s[83]=this.slice;s[84]=this.tabIndex;s[85]=this.title;s[86]=this.tuple;s[87]=this.valign;s[88]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[89]=(this.visible?1:0);s[90]=this.width;
}
function _ZEN_Component_dynaGrid_getSettings(s)
{
	s['name'] = 'string';
	s['columnWidth'] = 'length';
	s['controllerId'] = 'id';
	s['currColumn'] = 'integer';
	s['currPage'] = 'integer';
	s['currRow'] = 'integer';
	s['gridClass'] = 'cssClass';
	s['gridLabel'] = 'caption';
	s['nowrap'] = 'boolean';
	s['onchangecell'] = 'eventHandler';
	s['onclickcolumn'] = 'eventHandler';
	s['onclickrow'] = 'eventHandler';
	s['ondblclick'] = 'eventHandler';
	s['ondrawcell'] = 'eventHandler';
	s['oneditcell'] = 'eventHandler';
	s['onnotifyView'] = 'eventHandler';
	s['onselectcell'] = 'eventHandler';
	s['rowLabelWidth'] = 'length';
	s['scrollIntoView'] = 'boolean';
	s['showColumnLabels'] = 'boolean';
	s['showRowLabels'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dynaGrid_adjustSizes() {
var dataSet = this.getDataSet();
var cols = dataSet.getDimSize(2);
var rows = dataSet.getDimSize(1);
var encDiv = this.getEnclosingDiv();
var wrapper = this.findElement("wrapper");
var table = this.findElement("table");
var label = this.findElement("gridLabel");
if ('' != this.rowLabelWidth && label) {
label.style.width = parseFloat(this.rowLabelWidth) + 'px';
}
var lblwid = (label) ? label.offsetWidth : 0;
var budget = table.offsetWidth - lblwid - 24;
var wids = new Array(cols);
var needy = 0;
for (var c = 0; c < cols; c++) {
var cinfo = this.getColumnInfo(c);
if (cinfo && cinfo.hidden) continue;
if (cinfo && !isNaN(parseFloat(cinfo.width))) {
wids[c] = parseFloat(cinfo.width);
budget -= wids[c];
}
else if (!isNaN(parseFloat(this.columnWidth))) {
wids[c] = parseFloat(this.columnWidth);
budget -= wids[c];
}
else {
needy++;
}
}
if (needy > 0) {
var alloc = budget / needy;
alloc = (alloc < 100) ? 100 : alloc;
for (var c = 0; c < cols; c++) {
if (null == wids[c]) {
wids[c] = alloc;
}
}
}
var wid = 0;
if ('' != this.rowLabelWidth && label) {
wid = parseFloat(this.rowLabelWidth);
}
for (var c = 0; c < cols; c++) {
wid += parseFloat(wids[c]);
if (this.showColumnLabels) {
var th = this.findElement("thCol_"+(c+1));
if (th) {
th.style.width = wids[c] + 'px';
}
}
else {
var div = this.findElement("td_1_" + (c+1));
if (div && div.parentNode) {
div.parentNode.style.width = wids[c] + 'px';
}
}
}
wrapper.style.width = table.offsetWidth + 'px';
wrapper.style.height = table.offsetHeight + 'px';
}

function _ZEN_Component_dynaGrid_cellClickHandler(row,col) {
this.focus();
this.selectCell(row,col,true);
}

function _ZEN_Component_dynaGrid_cellDblClickHandler(row,col,evt) {
var edit = true;
if ('' != this.ondblclick) {
edit = zenFireEvent(this.index, this.ondblclick, 'ondblclick', evt);
}
if (edit) {
this.editCell();
}
}

function _ZEN_Component_dynaGrid_cellEditKeyHandler(evt) {
evt = evt ? evt : window.event;
var ret = true;
switch(evt.keyCode) {
case zenF2:
ret = false;
this.F2Mode = !this.F2Mode;
break;
case zenUP:
ret = false;
this.stopEditCell(false);
this.moveToCell('up');
this.focus();
break;
case zenDOWN:
ret = false;
this.stopEditCell(false);
this.moveToCell('down');
this.focus();
break;
case zenLEFT:
if (!this.F2Mode) {
ret = false;
this.stopEditCell(false);
this.moveToCell('left');
this.focus();
}
break;
case zenRIGHT:
if (!this.F2Mode) {
ret = false;
this.stopEditCell(false);
this.moveToCell('right');
this.focus();
}
break;
case zenESC:
ret = false;
this.stopEditCell(true);
this.focus();
break;
case zenENTER:
ret = false;
this.stopEditCell(false);
this.focus();
break;
}
if (!ret) {
if (evt.preventDefault) {
evt.preventDefault();
}
evt.cancelBubble = true;
}
return ret;
}

function _ZEN_Component_dynaGrid_columnLabelHandler(col) {
this.focus();
this.selectCell(this.currRow,col,true);
zenInvokeCallbackMethod(this.onclickcolumn,this,'onclickcolumn','column',col);
}

function _ZEN_Component_dynaGrid_connectToController() {
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

function _ZEN_Component_dynaGrid_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_Component_dynaGrid_editCell(defval) {
var value;
var r = this.currRow;
var c = this.currColumn;
if (!this.isCellEditable(r,c)) {
return;
}
if (r > 0 && c > 0) {
var div = this.findElement("td_"+r + "_" + c);
zenASSERT(div,"Unable to find div element",arguments);
value = (null!=defval) ? defval : this.getCellValue(r,c);
div.innerHTML = this.getEditCellHTML(r,c,value);
this.oldOnclick = div.onclick;
div.onclick = '';
this.currDiv = div;
var celledit = this.window.document.getElementById("cellEditor");
var w = div.parentNode.offsetWidth-1;
var h = div.parentNode.offsetHeight-(zenIsIE ? 4 : 2);
celledit.style.cssText = 'width:'+w+'px;height:'+h+'px;';
this.cellHasFocus = true;
if (null == defval && celledit.select) {
celledit.select();
}
if (celledit.focus) {
celledit.focus();
}
}
}

function _ZEN_Component_dynaGrid_focus() {
var inv = this.findElement('invisible');
if (inv) {
inv.focus();
}
}

function _ZEN_Component_dynaGrid_getCellContents(data,r,c) {
var usercode = '';
if (this.ondrawcell) {
this.row = r;
this.column = c;
usercode = zenInvokeCallbackMethod(this.ondrawcell,this,'ondrawcell','data',data);
delete this.row;
delete this.column;
}
if (usercode && '' != usercode) {
data = usercode;
}
else {
if ('' == data) {
data = '&nbsp;';
}
else {
data = zenEscapeXML(data);
}
}
return data;
}

function _ZEN_Component_dynaGrid_getCellValue(r,c) {
var dataSet = this.getDataSet();
return zenIsMissing(dataSet) ? '' : dataSet.getData(r-1,c-1,this.currPage-1);
}

function _ZEN_Component_dynaGrid_getColumnCount() {
var dataSet = this.getDataSet();
return zenIsMissing(dataSet) ? 0 : dataSet.getDimSize(2);
}

function _ZEN_Component_dynaGrid_getColumnInfo(c) {
return this.columns[c];
}

function _ZEN_Component_dynaGrid_getColumnProperty(colno,property) {
if (colno < 1) return '';
var cinfo = this.columns[colno-1];
if (null == cinfo) return ''
return cinfo.getProperty(property);
}

function _ZEN_Component_dynaGrid_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_Component_dynaGrid_getCurrColumn() {
return this.currColumn;
}

function _ZEN_Component_dynaGrid_getCurrRow() {
return this.currRow;
}

function _ZEN_Component_dynaGrid_getDataSet() {
var controller = this.getController();
return (controller ? controller : this.dataSet);
}

function _ZEN_Component_dynaGrid_getEditCellHTML(r,c,value) {
var html = '';
var usercode = '';
if (this.oneditcell) {
usercode = zenInvokeCallbackMethod(this.oneditcell,this,'oneditcell','value',value);
}
if (usercode && '' != usercode) {
html = usercode;
}
else {
html = '<input class="dynaGridInput" id="cellEditor" type="text" value="'+zenEscapeXML(value)+'" onkeydown="zenPage.getComponent('+this.index+').cellEditKeyHandler(event);" onblur="zenPage.getComponent('+this.index+').stopEditCell();"/>';
}
return html;
}

function _ZEN_Component_dynaGrid_getPageCount() {
var dataSet = this.getDataSet();
return zenIsMissing(dataSet) ? 0 : dataSet.getDimSize(3);
}

function _ZEN_Component_dynaGrid_getRowCount() {
var dataSet = this.getDataSet();
return zenIsMissing(dataSet) ? 0 : dataSet.getDimSize(1);
}

function _ZEN_Component_dynaGrid_getRowInfo(r) {
return this.rows[r];
}

function _ZEN_Component_dynaGrid_getRowProperty(rowno,property) {
if (rowno < 1) return '';
var rinfo = this.getRowInfo(rowno-1);
if (null == rinfo) return ''
return rinfo.getProperty(property);
}

function _ZEN_Component_dynaGrid_gridKeyBlur() {
this.hasFocus = false;
this.selectCell(this.currRow,this.currColumn,false);
}

function _ZEN_Component_dynaGrid_gridKeyDownHandler(evt) {
evt = evt ? evt : window.event;
var ret = true;
var row = this.currRow;
var col = this.currColumn;
if ('' != this.onkeydown) {
ret = zenFireEvent(this.index, this.onkeydown, 'onkeydown', evt);
if (!ret) return ret;
}
switch(evt.keyCode) {
case zenENTER:
ret = false;
if (this.isCellEditable(row,col)) {
this.editCell();
}
break;
case zenF2:
ret = false;
if (this.isCellEditable(row,col)) {
this.F2Mode = true;
this.editCell();
}
break;
case zenPAGEUP:
case zenPAGEDN:
break;
case zenEND:
ret = false;
this.moveToCell(evt.ctrlKey ? 'ctrl-end' : 'end');
break;
case zenHOME:
ret = false;
this.moveToCell(evt.ctrlKey ? 'ctrl-home' : 'home');
break;
case zenUP:
ret = false;
this.moveToCell('up');
break;
case zenDOWN:
ret = false;
this.moveToCell('down');
break;
case zenLEFT:
ret = false;
this.moveToCell('left');
break;
case zenRIGHT:
ret = false;
this.moveToCell('right');
break;
case zenDELETE:
this.editCell('');
break;
case zenTAB:
break;
default:
break;
}
if (!ret) {
if (evt.preventDefault) {
evt.preventDefault();
}
evt.cancelBubble = true;
}
return ret;
}

function _ZEN_Component_dynaGrid_gridKeyFocus() {
this.hasFocus = true;
this.selectCell(this.currRow,this.currColumn,false);
}

function _ZEN_Component_dynaGrid_gridKeyPressHandler(evt) {
evt = evt ? evt : window.event;
var ret = true;
var row = this.currRow;
var col = this.currColumn;
if ('' != this.onkeypress) {
ret = zenFireEvent(this.index, this.onkeypress, 'onkeypress', evt);
if (!ret) return ret;
}
switch(evt.keyCode) {
case zenENTER:
case zenF2:
case zenF5:
case zenPAGEUP:
case zenPAGEDN:
case zenEND:
case zenHOME:
case zenUP:
case zenDOWN:
case zenLEFT:
case zenRIGHT:
case zenDELETE:
case zenTAB:
break;
default:
if (evt.ctrlKey || evt.altKey) {
break;
}
var charCode = evt.charCode ? evt.charCode : evt.keyCode;
if (charCode >= 32) {
ret = false;
if (this.isCellEditable(row,col)) {
var seed = evt.charCode ? String.fromCharCode(evt.charCode) : null;
this.editCell(seed);
}
}
break;
}
if (!ret) {
if (evt.preventDefault) {
evt.preventDefault();
}
evt.cancelBubble = true;
}
return ret;
}

function _ZEN_Component_dynaGrid_isCellEditable(r,c) {
if (this.disabled) return false;
var rinfo = this.getRowInfo(r-1);
var rro = (null!=rinfo) ? rinfo.readOnly : false;
var rhide = (null!=rinfo) ? rinfo.hidden : false;
var cinfo = this.getColumnInfo(c-1);
var cro = (null!=cinfo) ? cinfo.readOnly : false;
var chide = (null!=cinfo) ? cinfo.hidden : false;
return !this.readOnly && !cro && !rro && !chide && !rhide;
}

function _ZEN_Component_dynaGrid_isCellVisible(r,c) {
var rinfo = this.getRowInfo(r-1);
var rhide = (null!=rinfo) ? rinfo.hidden : false;
var cinfo = this.getColumnInfo(c-1);
var chide = (null!=cinfo) ? cinfo.hidden : false;
return !chide && !rhide;
}

function _ZEN_Component_dynaGrid_moveToCell(dir) {
var ret = false;
var row = this.currRow;
var col = this.currColumn;
var rowCount = this.getRowCount();
var colCount = this.getColumnCount();
switch(dir) {
case 'up':
row--;
while (row > 0) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
row--;
}
break;
case 'down':
row++;
while (row <= rowCount) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
row++;
}
break;
case 'left':
col--;
while (col > 0) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
col--;
}
break;
case 'right':
col++;
while (col <= colCount) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
col++;
}
break;
case 'home':
row = 1;
while (row < rowCount) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
row++;
}
break;
case 'end':
row = rowCount;
while (row > 0) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
row--;
}
break;
case 'ctrl-home':
col = 1;
while (col < colCount) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
col++;
}
break;
case 'ctrl-end':
col = colCount;
while (col > 0) {
if (this.isCellVisible(row,col)) {
this.selectCell(row, col,true);
ret = true;
break;
}
col--;
}
break;
}
return ret;
}

function _ZEN_Component_dynaGrid_nextPage() {
var dataSet = this.getDataSet();
if (dataSet.getDimensions() < 3) {
return;
}
var page = this.getProperty('currPage')*1;
page = (page>=dataSet.getDimSize(3)) ? 1 : (page+1);
this.setProperty('currPage',page);
}

function _ZEN_Component_dynaGrid_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_Component_dynaGrid_notifyViewHandler(reason,data1,data2,data3) {
switch(reason) {
case 'dataChange':
case 'modelChange':
this.render();
break;
case 'seriesChange':
break;
}
}

function _ZEN_Component_dynaGrid_onCreate() {
this.currDiv = null;
this.hasFocus = false;
this.cellHasFocus = false;
this.F2Mode = false;
}

function _ZEN_Component_dynaGrid_previousPage() {
var dataSet = this.getDataSet();
if (dataSet.getDimensions() < 3) {
return;
}
var page = this.getProperty('currPage')*1;
page = (page == 1) ? dataSet.getDimSize(3) : (page-1);
this.setProperty('currPage',page);
}

function _ZEN_Component_dynaGrid_renderContents() {
var controller = this.getController();
if (null == controller) {
this.connectToController();
}
var encDiv = this.getEnclosingDiv();
if (encDiv == null) return;
var html = new Array();
html[html.length] = '<div id="'+this.makeId('wrapper')+'" class="dynaGridWrapper">';
html[html.length] = '<input type="hidden" id="'+this.makeId('control')+'" name="'+this.name+'" value="'+this.value+'"/>';
var gcls = this.disabled ? 'dynaGridDisabled' : this.gridClass;
html[html.length] = '<table id="'+this.makeId('table')+'" class="'+gcls+'" border="0" cellspacing="0" cellpadding="0">';
var dataSet = this.getDataSet();
var cols = dataSet.getDimSize(2);
if (cols < 2) {
this.F2Mode = true;
}
else {
this.F2Mode = false;
}
if (zenIsMissing(dataSet)) {
html[html.length] = '<tr><td>dynaGrid has no data.</td></tr>';
}
else {
zenASSERT(dataSet.getDimensions()>0,"dataSet must have at least one dimension.",arguments);
if (this.showColumnLabels) {
html[html.length] = '<tr>';
if (this.showRowLabels) {
var glbl;
if (dataSet.getDimensions() > 2) {
glbl = dataSet.getLabel(this.currPage-1,3);
glbl = (''==glbl? this.currPage : glbl);
glbl = '<a onclick="zenPage.getComponent('+this.index+').previousPage();">&laquo;</a>' + '&nbsp;' + '<a onclick="zenPage.getComponent('+this.index+').nextPage();">&raquo;</a>&nbsp;' + glbl;
}
else {
glbl = (''==this.gridLabel?'&nbsp;':this.gridLabel);
}
html[html.length] = '<th nowrap="1" id="gridLabel_'+this.index+'" class="dynaGridLabel"'+'>'+glbl+'</th>';
}
for (var c = 0; c < cols; c++) {
var cinfo = this.getColumnInfo(c);
if (cinfo && cinfo.hidden) continue;
var data = dataSet.getLabel(c,2);
data = ('' == data) ? '&nbsp;' : data;
var thstyle = '';
var thtip = '';
html[html.length] = '<th nowrap="1" id="thCol_'+(c+1)+'_'+this.index+'" class="dynaGridColumn"'+' onclick="zenPage.getComponent('+this.index+').columnLabelHandler('+(c+1)+');">' + data + '</th>';
}
html[html.length] = '</tr>';
}
for (var r = 0; r < dataSet.getDimSize(1); r++) {
var rinfo = this.getRowInfo(r);
if (rinfo && rinfo.hidden) continue;
var rstyle = (null!=rinfo&&null!=rinfo.style) ? rinfo.style : '';
var rtip = (null!=rinfo&&null!=rinfo.title) ? rinfo.title : '';
var rro = (null!=rinfo&&null!=rinfo.readOnly) ? rinfo.readOnly : false;
var rhgt = (null!=rinfo&&null!=rinfo.height) ? (''!=rinfo.height?' height="'+rinfo.height+'"':'') : '';
html[html.length] = '<tr'+rhgt+'>';
if (this.showRowLabels) {
var data = dataSet.getLabel(r,1);
data = ('' == data) ? '&nbsp;' : data;
html[html.length] = '<th nowrap="1" id="thRow_'+(r+1)+'_'+this.index+'" class="dynaGridRow"'+' onclick="zenPage.getComponent('+this.index+').rowLabelHandler('+(r+1)+');">' + data + '</th>';
}
for (var c = 0; c < cols; c++) {
var cinfo = this.getColumnInfo(c);
if (cinfo && cinfo.hidden) continue;
var tdstyle = rstyle;
var tdtip = rtip;
var cro = (null!=cinfo) ? cinfo.readOnly : false;
if (null!=cinfo) {
tdstyle += cinfo.style;
tdtip = (''!=cinfo.title) ? cinfo.title : tdtip;
}
if ('' != tdstyle) {
tdstyle = ' style="'+tdstyle+'"';
}
if ('' != tdtip) {
tdtip = ' title="'+tdtip+'"';
}
var events = ' onclick="zenPage.getComponent('+this.index+').cellClickHandler('+(r+1)+','+(c+1)+');" ondblclick="zenPage.getComponent('+this.index+').cellDblClickHandler('+(r+1)+','+(c+1)+',event);"'
var data = dataSet.getData(r,c,this.currPage-1);
data = this.getCellContents(data,r+1,c+1);
var cls = (this.currRow == (r+1) && this.currColumn == (c+1)) ? ' class="selected"' : '';
html[html.length] = '<td ' + (this.nowrap ? 'nowrap="1" ' : '') + 'valign="middle"'+tdstyle+tdtip+'>';
if (r==0 && c==0) {
html[html.length] = '<input type="text" id="'+this.makeId('invisible')+'" style="top:0px;left:0px;position:absolute;border: 0px solid green;width:0;height:0;" onkeydown="zenPage.getComponent('+this.index+').gridKeyDownHandler(event);" onkeypress="zenPage.getComponent('+this.index+').gridKeyPressHandler(event);" onfocus="zenPage.getComponent('+this.index+').gridKeyFocus();" onblur="zenPage.getComponent('+this.index+').gridKeyBlur();"/>';
}
html[html.length] = '<div id="td_'+(r+1)+'_'+(c+1)+'_'+this.index+'" '+events+cls+'>'+data+'</div>';
html[html.length] = '</td>';
}
html[html.length] = '</tr>';
}
}
html[html.length] = '</table>';
html[html.length] = '</div>';
encDiv.innerHTML = html.join('');
this.adjustSizes();
}

function _ZEN_Component_dynaGrid_rowLabelHandler(row) {
this.focus();
this.selectCell(row,this.currColumn,true);
zenInvokeCallbackMethod(this.onclickrow,this,'onclickrow','row',row);
}

function _ZEN_Component_dynaGrid_selectCell(r,c,notify) {
if (this.currRow > 0 && this.currColumn > 0) {
var div = this.findElement("td_"+this.currRow + "_" + this.currColumn);
if (div) {
div.className = '';
}
}
this.currRow = r;
this.currColumn = c;
if (notify) {
this.selectCellHandler(r,c);
}
if (this.currRow > 0 && this.currColumn > 0) {
var div = this.findElement("td_"+this.currRow + "_" + this.currColumn);
if (div) {
div.className = this.hasFocus ? 'focus' : 'selected';
if (this.hasFocus && this.scrollIntoView) {
var flag = false;
if (this.currColumn == 1) {
var lbl = this.findElement((this.currRow==1) ? "gridLabel" : "thRow_"+this.currRow);
if (lbl) {
zenScrollIntoView(this.getEnclosingDiv(),lbl);
flag = true;
}
}
else if (this.currRow == 1) {
var lbl = this.findElement((this.currColumn==1) ? "gridLabel" : "thCol_"+this.currColumn);
if (lbl) {
zenScrollIntoView(this.getEnclosingDiv(),lbl);
flag = true;
}
}
if (!flag) {
zenScrollIntoView(this.getEnclosingDiv(),div);
}
}
}
}
}

function _ZEN_Component_dynaGrid_selectCellHandler(r,c) {
zenInvokeCallbackMethod(this.onselectcell,this,'onselectcell','row',r,'col',c);
}

function _ZEN_Component_dynaGrid_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_Component_dynaGrid_setCellValue(value,r,c) {
var dataSet = this.getDataSet();
if (!zenIsMissing(dataSet)) {
dataSet.setData(value,r-1,c-1,this.currPage-1);
var controller = this.getController();
if (controller) {
this.sendEventToController('propertyChange',controller.getPropertyName(r-1),value,c);
}
}
var div = this.findElement("td_"+r + "_" + c);
if (div) {
value = this.getCellContents(value,r,c);
div.innerHTML = value;
}
}

function _ZEN_Component_dynaGrid_setColumnProperty(colno,property,value) {
if (colno < 1) return;
var cinfo = this.getColumnInfo(colno-1);
if (null == cinfo) {
cinfo = zenPage.createComponent('gridColumn');
this.columns[colno-1] = cinfo;
}
cinfo.setProperty(property,value);
if ('width' == property) {
this.adjustSizes();
}
else {
this.render();
}
return true;
}

function _ZEN_Component_dynaGrid_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_Component_dynaGrid_setProperty(property,value,value2) {
switch(property) {
case 'value':
var el = this.findElement('control');
if (el) {
el.value = value;
}
this.value = value;
break;
case 'nowrap':
case 'readOnly':
case 'disabled':
case 'showColumnLabels':
case 'showRowLabels':
value = value ? true : false;
this[property] = value;
this.render();
break;
case 'currPage':
case 'rowLabelWidth':
this[property] = value;
this.render();
break;
case 'gridLabel':
this.gridLabel = value;
var th = this.findElement("gridLabel");
if (th) {
th.innerHTML = (''==this.gridLabel) ? '&nbsp;' : this.gridLabel;
}
break;
case 'controllerId':
this.setControllerId(value);
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_dynaGrid_setRowProperty(rowno,property,value) {
if (rowno < 1) return;
var rinfo = this.getRowInfo(rowno-1);
if (null == rinfo) {
rinfo = zenPage.createComponent('gridRow');
this.rows[rowno-1] = rinfo;
}
rinfo.setProperty(property,value);
this.render();
return true;
}

function _ZEN_Component_dynaGrid_stopEditCell(cancel) {
cancel = (null==cancel) ? false : cancel;
var value;
if (this.currDiv && this.cellHasFocus) {
this.cellHasFocus = false;
this.F2Mode = false;
var cell = this.window.document.getElementById("cellEditor");
zenASSERT(cell,"Unable to find cellEditor control",arguments);
if (cell) {
value = !cancel ? cell.value : this.getCellValue(this.currRow, this.currColumn);
this.currDiv.onclick = this.oldOnclick;
this.setCellValue(value, this.currRow, this.currColumn);
cell.value = '';
}
this.currDiv = null;
if (!cancel) {
zenInvokeCallbackMethod(this.onchangecell,this,'onchangecell');
}
zenInvokeCallbackMethod(this.onchange,this,'onchange');
this.focus();
}
}

function _ZEN_Component_dynaGrid_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dynaGrid__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_dynaGrid.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_dynaGrid.prototype;
	p.constructor = _ZEN_Component_dynaGrid;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dynaGrid';
	p._type = 'dynaGrid';
	p.serialize = _ZEN_Component_dynaGrid_serialize;
	p.getSettings = _ZEN_Component_dynaGrid_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_dynaGrid_ReallyRefreshContents;
	p.adjustSizes = _ZEN_Component_dynaGrid_adjustSizes;
	p.cellClickHandler = _ZEN_Component_dynaGrid_cellClickHandler;
	p.cellDblClickHandler = _ZEN_Component_dynaGrid_cellDblClickHandler;
	p.cellEditKeyHandler = _ZEN_Component_dynaGrid_cellEditKeyHandler;
	p.columnLabelHandler = _ZEN_Component_dynaGrid_columnLabelHandler;
	p.connectToController = _ZEN_Component_dynaGrid_connectToController;
	p.disconnectFromController = _ZEN_Component_dynaGrid_disconnectFromController;
	p.editCell = _ZEN_Component_dynaGrid_editCell;
	p.focus = _ZEN_Component_dynaGrid_focus;
	p.getCellContents = _ZEN_Component_dynaGrid_getCellContents;
	p.getCellValue = _ZEN_Component_dynaGrid_getCellValue;
	p.getColumnCount = _ZEN_Component_dynaGrid_getColumnCount;
	p.getColumnInfo = _ZEN_Component_dynaGrid_getColumnInfo;
	p.getColumnProperty = _ZEN_Component_dynaGrid_getColumnProperty;
	p.getController = _ZEN_Component_dynaGrid_getController;
	p.getCurrColumn = _ZEN_Component_dynaGrid_getCurrColumn;
	p.getCurrRow = _ZEN_Component_dynaGrid_getCurrRow;
	p.getDataSet = _ZEN_Component_dynaGrid_getDataSet;
	p.getEditCellHTML = _ZEN_Component_dynaGrid_getEditCellHTML;
	p.getPageCount = _ZEN_Component_dynaGrid_getPageCount;
	p.getRowCount = _ZEN_Component_dynaGrid_getRowCount;
	p.getRowInfo = _ZEN_Component_dynaGrid_getRowInfo;
	p.getRowProperty = _ZEN_Component_dynaGrid_getRowProperty;
	p.gridKeyBlur = _ZEN_Component_dynaGrid_gridKeyBlur;
	p.gridKeyDownHandler = _ZEN_Component_dynaGrid_gridKeyDownHandler;
	p.gridKeyFocus = _ZEN_Component_dynaGrid_gridKeyFocus;
	p.gridKeyPressHandler = _ZEN_Component_dynaGrid_gridKeyPressHandler;
	p.isCellEditable = _ZEN_Component_dynaGrid_isCellEditable;
	p.isCellVisible = _ZEN_Component_dynaGrid_isCellVisible;
	p.moveToCell = _ZEN_Component_dynaGrid_moveToCell;
	p.nextPage = _ZEN_Component_dynaGrid_nextPage;
	p.notifyView = _ZEN_Component_dynaGrid_notifyView;
	p.notifyViewHandler = _ZEN_Component_dynaGrid_notifyViewHandler;
	p.onCreate = _ZEN_Component_dynaGrid_onCreate;
	p.previousPage = _ZEN_Component_dynaGrid_previousPage;
	p.renderContents = _ZEN_Component_dynaGrid_renderContents;
	p.rowLabelHandler = _ZEN_Component_dynaGrid_rowLabelHandler;
	p.selectCell = _ZEN_Component_dynaGrid_selectCell;
	p.selectCellHandler = _ZEN_Component_dynaGrid_selectCellHandler;
	p.sendEventToController = _ZEN_Component_dynaGrid_sendEventToController;
	p.setCellValue = _ZEN_Component_dynaGrid_setCellValue;
	p.setColumnProperty = _ZEN_Component_dynaGrid_setColumnProperty;
	p.setControllerId = _ZEN_Component_dynaGrid_setControllerId;
	p.setProperty = _ZEN_Component_dynaGrid_setProperty;
	p.setRowProperty = _ZEN_Component_dynaGrid_setRowProperty;
	p.stopEditCell = _ZEN_Component_dynaGrid_stopEditCell;
}

// ================================================================================
_zenClassIdx['objectInspector'] = '_ZEN_Component_objectInspector';
function _ZEN_Component_objectInspector(index,id) {
	if (index>=0) {_ZEN_Component_objectInspector__init(this,index,id);}
}

function _ZEN_Component_objectInspector__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_dynaGrid__init) ?zenMaster._ZEN_Component_dynaGrid__init(o,index,id):_ZEN_Component_dynaGrid__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.currMember = '';
	o.currMemberType = '';
	o.gridClass = 'inspectorGrid';
	o.gridLabel = 'Property';
	o.idEditable = false;
	o.onedit = '';
	o.onnotifyView = '';
	o.onselect = '';
	o.readOnly = false;
	o.rowLabelWidth = '150';
	o.showAll = false;
	o.onCreate();
}
function _ZEN_Component_objectInspector_serialize(set,s)
{
	s[0]='1167990251';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnCreateDataSet;s[7]=this.align;s[8]=this.aux;s[9]=this.clientType;s[10]=this.columnWidth;s[11]=set.serializeList(this,this.columns,true,'columns');s[12]=this.containerStyle;s[13]=this.controlClass;s[14]=this.controlStyle;s[15]=this.controller;s[16]=this.controllerId;s[17]=this.currColumn;s[18]=this.currMember;s[19]=this.currMemberType;s[20]=this.currPage;s[21]=this.currRow;s[22]=this.dataBinding;s[23]=set.addObject(this.dataSet,'dataSet');s[24]=(this.disabled?1:0);s[25]=(this.dragEnabled?1:0);s[26]=(this.dropEnabled?1:0);s[27]=(this.dynamic?1:0);s[28]=this.enclosingClass;s[29]=this.enclosingStyle;s[30]=this.error;s[31]=this.gridClass;s[32]=this.gridLabel;s[33]=this.height;s[34]=(this.hidden?1:0);s[35]=this.hint;s[36]=this.hintClass;s[37]=this.hintStyle;s[38]=(this.idEditable?1:0);s[39]=(this.invalid?1:0);s[40]=this.invalidMessage;s[41]=this.label;s[42]=this.labelClass;s[43]=this.labelStyle;s[44]=(this.nowrap?1:0);s[45]=this.onafterdrag;s[46]=this.onbeforedrag;s[47]=this.onblur;s[48]=this.onchange;s[49]=this.onchangecell;s[50]=this.onclick;s[51]=this.onclickcolumn;s[52]=this.onclickrow;s[53]=this.ondblclick;s[54]=this.ondrag;s[55]=this.ondrawcell;s[56]=this.ondrop;s[57]=this.onedit;s[58]=this.oneditcell;s[59]=this.onfocus;s[60]=this.onhide;s[61]=this.onkeydown;s[62]=this.onkeypress;s[63]=this.onkeyup;s[64]=this.onmousedown;s[65]=this.onmouseout;s[66]=this.onmouseover;s[67]=this.onmouseup;s[68]=this.onnotifyView;s[69]=this.onrefresh;s[70]=this.onselect;s[71]=this.onselectcell;s[72]=this.onshow;s[73]=this.onsubmit;s[74]=this.onupdate;s[75]=this.onvalidate;s[76]=this.originalValue;s[77]=this.overlayMode;s[78]=(this.readOnly?1:0);s[79]=this.renderFlag;s[80]=(this.required?1:0);s[81]=this.requiredMessage;s[82]=this.rowLabelWidth;s[83]=set.serializeList(this,this.rows,true,'rows');s[84]=(this.scrollIntoView?1:0);s[85]=(this.showAll?1:0);s[86]=(this.showColumnLabels?1:0);s[87]=(this.showLabel?1:0);s[88]=(this.showRowLabels?1:0);s[89]=this.slice;s[90]=this.tabIndex;s[91]=this.title;s[92]=this.tuple;s[93]=this.valign;s[94]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[95]=(this.visible?1:0);s[96]=this.width;
}
function _ZEN_Component_objectInspector_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['currMember'] = 'string';
	s['currMemberType'] = 'string';
	s['idEditable'] = 'boolean';
	s['onedit'] = 'eventHandler';
	s['onnotifyView'] = 'eventHandler';
	s['onselect'] = 'eventHandler';
	s['readOnly'] = 'boolean';
	s['showAll'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_objectInspector_acquireData() {
if (!this._dataLoaded) {
var obj = this.currObject;
this._labels = new Array();
this._data = new Array();
this._dataTypes = new Object();  // indexed by property
if (null == obj) {
}
else if (obj instanceof Array) {
/* !!!
for (var n = 0; n < obj.length; n++) {
var mbr = n;
var cls = '';
var btn = '';
var dblclk = '';
if (mbr == this.currMember) {
cls = 'class="objectInspectorSelected"';
if (!this.readOnly) {
btn = '<input type="button" class="objectInspectorButton" value="" onclick="zenPage.getComponent('+this.index+').editArrayItem(\''+mbr+'\');">';
dblclk = 'ondblclick="zenPage.getComponent('+this.index+').editArrayItem(\''+mbr+'\');"';
}
}
var val;
var lblCls;
lblCls = 'objectInspectorSetting';
val = obj[n];
val = (null != val) ? val : '<i>null</i>';
val = (typeof(val) == 'function') ? '<i>method</i>' : val;
if (val.length && val.length > 30) {
val = val.substr(0,30) + '&#8230;'; // clip
}
html[html.length] = '<tr '+cls+' '+dblclk+' onclick="zenPage.getComponent('+this.index+').selectMember(\''+mbr+'\',\''+mbrType+'\');"><td width="50%" class="'+lblCls+'" title="'+mbr+'">&nbsp;'+mbr+'&nbsp;</td><td nowrap width="50%">'+btn+'&nbsp;'+val+'&nbsp;</td></tr>';
}
*/
}
else {
var settings = new Object();
obj.getSettings(settings);
var props = new Array();
if ('undefined' != typeof obj._type) {
this._labels[this._labels.length] = 'type';
this._data[this._data.length] = obj._type;
this._dataTypes['type'] = 'readonly';
this._labels[this._labels.length] = 'index';
this._data[this._data.length] = obj.index;
this._dataTypes['index'] = 'readonly';
}
for (var mbr in obj) {
if ((this.showAll || (null!=settings[mbr]) || ('parent'==mbr)) && (mbr != 'index') && (mbr != '_type') && (mbr != 'constructor')) {
props[props.length] = mbr;
}
}
props.sort();
for (var i = 0; i < props.length; i++) {
var mbr = props[i];
var mbrType = settings[mbr];
if (mbr == this.currMember) {
}
if (settings[mbr] && obj.getProperty) {
val = obj.getProperty(mbr);
}
else {
val = obj[mbr];
}
val = this.getDisplayValue(val);
this._labels[this._labels.length] = mbr;
this._data[this._data.length] = val;
if ('id' == mbr && !this.idEditable) {
this._dataTypes[mbr] = 'readonly';
}
else {
this._dataTypes[mbr] = mbrType;
}
}
}
this._dataLoaded = true;
}
}

function _ZEN_Component_objectInspector_applyValue(property,value) {
var obj = this.getCurrObject();
var mbrType = this._dataTypes ? this._dataTypes[property] : null;
mbrType = (null == mbrType) ? 'string' : mbrType;
if (mbrType == 'boolean') {
value = zenBool(value);
}
var handled = obj.setProperty(property,value);
if (!handled && obj.refreshContents) {
obj.refreshContents();
}
}

function _ZEN_Component_objectInspector_connectToController() {
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

function _ZEN_Component_objectInspector_dblClickHandler() {
var r = this.currRow - 1;
var type = this.getRowType(r);
var mbr = this.getRowMemberName(r);
if ('boolean' == type && 1==this.currColumn) {
var b = !zenBool(this.getData(r,0));
this.setCellValue(b, this.currRow, 1);
}
else if ('readonly' != type) {
this.editMember(mbr);
}
}

function _ZEN_Component_objectInspector_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_Component_objectInspector_editMember(name) {
if (typeof this.currObject[this.currMember] == 'object') {
this.setCurrObject(this.currObject[this.currMember]);
return;
}
if ('' != this.onedit) {
zenInvokeCallbackMethod(this.onedit,this,'onedit');
return;
}
var obj = this.getCurrObject();
var mbr = this.getCurrMember();
if (zenPage && obj && '' != mbr) {
var value = obj.getProperty(mbr);
var mbrType = this.getCurrMemberType();
if (mbrType == 'boolean') {
value = (value) ? '1' : '0';
}
var parms = new Object();
parms.property = mbr;
parms.className = obj._serverClass;
parms.value = value;
parms.type = mbrType;
zenPage.launchPopupWindow('%ZEN.Dialog.componentValueEditor.cls','ValueEditor','resizable,width=500,height=500',parms,this);
}
}

function _ZEN_Component_objectInspector_getCellContents(data,r,c) {
if (c == 2) {
var mbr = this.getRowMemberName(r-1);
var type = this.getRowType(r-1);
data = '<div id="'+this.makeId('puBtn_'+r)+'" class="objectInspectorButtonDiv" style="display:none;">';
if ('readonly' != type) {
data += '<input class="objectInspectorButton" title="Launch the Value Editor" type="button" onclick="zenPage.getComponent('+this.index+').editMember(\''+mbr+'\');"/>';
}
data += '</div>';
}
else {
var usercode = '';
if (this.ondrawcell) {
this.row = r;
this.column = c;
usercode = zenInvokeCallbackMethod(this.ondrawcell,this,'ondrawcell','data',data);
delete this.row;
delete this.column;
}
if (usercode && '' != usercode) {
data = usercode;
}
else {
if ('' == data) {
data = '&nbsp;';
}
else {
data = zenEscapeXML(data);
}
}
}
return data;
}

function _ZEN_Component_objectInspector_getColumnInfo(c) {
var info = null;
if (1 == c) {
info = new Object();
info.readOnly = true;
info.width = 20;
info.style = 'padding:0px;height:20px;text-align:center;';
}
return info;
}

function _ZEN_Component_objectInspector_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_Component_objectInspector_getCurrMember() {
return this.currMember;
}

function _ZEN_Component_objectInspector_getCurrMemberType() {
return this.currMemberType;
}

function _ZEN_Component_objectInspector_getCurrObject() {
return this.currObject;
}

function _ZEN_Component_objectInspector_getData(d1,d2,d3) {
var data = (0==d2) ? this._data[d1] : null;
return (null == data) ? '' : data;
}

function _ZEN_Component_objectInspector_getDataSet() {
return this;
}

function _ZEN_Component_objectInspector_getDimSize(dim) {
this.acquireData();
switch(dim) {
case 1:
return this._data.length;
case 2:
return 2;
default:
return 0;
}
}

function _ZEN_Component_objectInspector_getDimensions() {
return 2;
}

function _ZEN_Component_objectInspector_getDisplayValue(val) {
switch(typeof val) {
case 'function':
val = '(method)';
break;
case 'object':
val = '(object)';
break;
case 'boolean':
val = val ? 'true' : 'false';
break;
case 'undefined':
val = '(null)';
break;
case 'string':
case 'number':
break;
}
val = (null != val) ? val : '(null)';
return val;
}

function _ZEN_Component_objectInspector_getEditCellHTML(r,c,value) {
var html = '';
var type = this.getRowType(r-1);
switch(type) {
case 'boolean':
value = zenBool(value);
html = '<select class="dynaGridInput" id="cellEditor" type="text" onblur="zenPage.getComponent('+this.index+').stopEditCell();" onchange="zenPage.getComponent('+this.index+').stopEditCell();"><option value="true"'+(value?' selected':'')+'>true</option><option value="false" '+(!value?' selected':'')+'>false</option></select>';
break;
default:
html = '<input class="dynaGridInput" id="cellEditor" type="text" value="'+zenEscapeXML(value)+'" onkeydown="zenPage.getComponent('+this.index+').cellEditKeyHandler(event);" onblur="zenPage.getComponent('+this.index+').stopEditCell();">';
break;
}
var usercode = '';
if (this.oneditcell) {
usercode = zenInvokeCallbackMethod(this.oneditcell,this,'oneditcell','value',value);
}
if (usercode && '' != usercode) {
html = usercode;
}
else {
}
return html;
}

function _ZEN_Component_objectInspector_getLabel(n,dim) {
var label = null;
switch(dim) {
case 1:
label = this._labels[n];
break;
case 2:
label = (0==n) ? 'Value' : '';
break;
default:
break;
}
return (null == label) ? '' : label;
}

function _ZEN_Component_objectInspector_getRowInfo(r) {
var type = this.getRowType(r);
var info = new Object();
if ('readonly' == type) {
info.readOnly = true;
}
info.title = this.getRowMemberName(r);
return info;
}

function _ZEN_Component_objectInspector_getRowMemberName(r) {
var lbl = this._labels ? this._labels[r] : '';
return (null == lbl) ? '' : lbl;
}

function _ZEN_Component_objectInspector_getRowType(r) {
var type = '';
var mbr = this.getRowMemberName(r);
if ('' != mbr) {
type = this._dataTypes[mbr];
}
return type;
}

function _ZEN_Component_objectInspector_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_Component_objectInspector_onCreate() {
this.ondblclick = 'zenPage.getComponent('+this.index+').dblClickHandler();'
this.currObject = null;
this.currMember = '';
return this.invokeSuper('onCreate',arguments);
}

function _ZEN_Component_objectInspector_onPopupAction(popupName,action,value) {
switch(popupName) {
case 'ValueEditor':
switch (action) {
case 'ok':
case 'apply':
var mbr = this.getCurrMember();
var r = 0;
for (var n = 0; n < this._labels.length; n++) {
if (this._labels[n] == mbr) {
r = n+1;
break;
}
}
if (r > 0) {
this.setCellValue(value, r, 1);
}
if ('ok' == action) {
this.setCurrMember('');
}
break;
}
break;
}
}

function _ZEN_Component_objectInspector_renderInspector() {
this._dataLoaded = false;
this.render();
}

function _ZEN_Component_objectInspector_selectCellHandler(r,c) {
var type = this.getRowType(r-1);
this.currMemberType = type;
this.currMember = this.getRowMemberName(r-1);
zenInvokeCallbackMethod(this.onselect,this,'onedit');
if (this._oldRow) {
var oldbtn = this.findElement('puBtn_'+this._oldRow);
if (oldbtn) {
oldbtn.style.display = 'none';
}
}
this._oldRow = r;
var newbtn = this.findElement('puBtn_'+r);
if (newbtn) {
newbtn.style.display = '';
}
}

function _ZEN_Component_objectInspector_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_Component_objectInspector_setCellValue(value,r,c) {
var type = this.getRowType(r-1);
if ('boolean' == type) {
value = zenBool(value);
}
value = this.getDisplayValue(value);
return this.invokeSuper('setCellValue',arguments);
}

function _ZEN_Component_objectInspector_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_Component_objectInspector_setCurrMember(name) {
this.currMember = name;
var r = 0;
for (var n = 0; n < this._labels.length; n++) {
if (this._labels[n] == name) {
r = n+1;
break;
}
}
if (r > 0) {
this.selectCell(r, 1);
}
}

function _ZEN_Component_objectInspector_setCurrObject(obj) {
this.currObject = obj;
this.currMember = '';
this.renderInspector();
}

function _ZEN_Component_objectInspector_setData(value,d1,d2,d3) {
var property = this._labels[d1];
this._data[d1] = this.getDisplayValue(value);
this.applyValue(property,value);
}

function _ZEN_Component_objectInspector_showCellButton(r,c) {
return true;
}

function _ZEN_Component_objectInspector_update() {
this.renderInspector();
}

function _ZEN_Component_objectInspector_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_objectInspector__Loader() {
	zenLoadClass('_ZEN_Component_dynaGrid');
	_ZEN_Component_objectInspector.prototype = zenCreate('_ZEN_Component_dynaGrid',-1);
	var p = _ZEN_Component_objectInspector.prototype;
	p.constructor = _ZEN_Component_objectInspector;
	p.superClass = ('undefined' == typeof _ZEN_Component_dynaGrid) ? zenMaster._ZEN_Component_dynaGrid.prototype:_ZEN_Component_dynaGrid.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.objectInspector';
	p._type = 'objectInspector';
	p.serialize = _ZEN_Component_objectInspector_serialize;
	p.getSettings = _ZEN_Component_objectInspector_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_objectInspector_ReallyRefreshContents;
	p.acquireData = _ZEN_Component_objectInspector_acquireData;
	p.applyValue = _ZEN_Component_objectInspector_applyValue;
	p.connectToController = _ZEN_Component_objectInspector_connectToController;
	p.dblClickHandler = _ZEN_Component_objectInspector_dblClickHandler;
	p.disconnectFromController = _ZEN_Component_objectInspector_disconnectFromController;
	p.editMember = _ZEN_Component_objectInspector_editMember;
	p.getCellContents = _ZEN_Component_objectInspector_getCellContents;
	p.getColumnInfo = _ZEN_Component_objectInspector_getColumnInfo;
	p.getController = _ZEN_Component_objectInspector_getController;
	p.getCurrMember = _ZEN_Component_objectInspector_getCurrMember;
	p.getCurrMemberType = _ZEN_Component_objectInspector_getCurrMemberType;
	p.getCurrObject = _ZEN_Component_objectInspector_getCurrObject;
	p.getData = _ZEN_Component_objectInspector_getData;
	p.getDataSet = _ZEN_Component_objectInspector_getDataSet;
	p.getDimSize = _ZEN_Component_objectInspector_getDimSize;
	p.getDimensions = _ZEN_Component_objectInspector_getDimensions;
	p.getDisplayValue = _ZEN_Component_objectInspector_getDisplayValue;
	p.getEditCellHTML = _ZEN_Component_objectInspector_getEditCellHTML;
	p.getLabel = _ZEN_Component_objectInspector_getLabel;
	p.getRowInfo = _ZEN_Component_objectInspector_getRowInfo;
	p.getRowMemberName = _ZEN_Component_objectInspector_getRowMemberName;
	p.getRowType = _ZEN_Component_objectInspector_getRowType;
	p.notifyView = _ZEN_Component_objectInspector_notifyView;
	p.onCreate = _ZEN_Component_objectInspector_onCreate;
	p.onPopupAction = _ZEN_Component_objectInspector_onPopupAction;
	p.renderInspector = _ZEN_Component_objectInspector_renderInspector;
	p.selectCellHandler = _ZEN_Component_objectInspector_selectCellHandler;
	p.sendEventToController = _ZEN_Component_objectInspector_sendEventToController;
	p.setCellValue = _ZEN_Component_objectInspector_setCellValue;
	p.setControllerId = _ZEN_Component_objectInspector_setControllerId;
	p.setCurrMember = _ZEN_Component_objectInspector_setCurrMember;
	p.setCurrObject = _ZEN_Component_objectInspector_setCurrObject;
	p.setData = _ZEN_Component_objectInspector_setData;
	p.showCellButton = _ZEN_Component_objectInspector_showCellButton;
	p.update = _ZEN_Component_objectInspector_update;
}

// ================================================================================
_zenClassIdx['fileUpload'] = '_ZEN_Component_fileUpload';
function _ZEN_Component_fileUpload(index,id) {
	if (index>=0) {_ZEN_Component_fileUpload__init(this,index,id);}
}

function _ZEN_Component_fileUpload__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.accept = '';
	o.controlClass = 'fileUpload';
	o.maxlength = '';
	o.size = '';
}
function _ZEN_Component_fileUpload_serialize(set,s)
{
	s[0]='423258873';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.accept;s[7]=this.align;s[8]=this.aux;s[9]=this.clientType;s[10]=this.containerStyle;s[11]=this.controlClass;s[12]=this.controlStyle;s[13]=this.dataBinding;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.maxlength;s[32]=this.onafterdrag;s[33]=this.onbeforedrag;s[34]=this.onblur;s[35]=this.onchange;s[36]=this.onclick;s[37]=this.ondblclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onfocus;s[41]=this.onhide;s[42]=this.onkeydown;s[43]=this.onkeypress;s[44]=this.onkeyup;s[45]=this.onmousedown;s[46]=this.onmouseout;s[47]=this.onmouseover;s[48]=this.onmouseup;s[49]=this.onrefresh;s[50]=this.onshow;s[51]=this.onsubmit;s[52]=this.onupdate;s[53]=this.onvalidate;s[54]=this.originalValue;s[55]=this.overlayMode;s[56]=(this.readOnly?1:0);s[57]=this.renderFlag;s[58]=(this.required?1:0);s[59]=this.requiredMessage;s[60]=(this.showLabel?1:0);s[61]=this.size;s[62]=this.slice;s[63]=this.tabIndex;s[64]=this.title;s[65]=this.tuple;s[66]=this.valign;s[67]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[68]=(this.visible?1:0);s[69]=this.width;
}
function _ZEN_Component_fileUpload_getSettings(s)
{
	s['name'] = 'string';
	s['accept'] = 'csv';
	s['maxlength'] = 'integer';
	s['size'] = 'integer';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_fileUpload_setProperty(property,value,value2) {
var el = this.findElement('control');
switch(property) {
case 'size':
this.size = value;
if (el) { el.size = value; }
break;
case 'accept':
this.accept = value;
if (el) { el.accept = value; }
break;
case 'maxlength':
this.maxlength = value;
if (el) { el.maxlength = value; }
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_fileUpload_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_fileUpload__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_fileUpload.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_fileUpload.prototype;
	p.constructor = _ZEN_Component_fileUpload;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.fileUpload';
	p._type = 'fileUpload';
	p.serialize = _ZEN_Component_fileUpload_serialize;
	p.getSettings = _ZEN_Component_fileUpload_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_fileUpload_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_fileUpload_setProperty;
}

// ================================================================================
_zenClassIdx['hidden'] = '_ZEN_Component_hidden';
function _ZEN_Component_hidden(index,id) {
	if (index>=0) {_ZEN_Component_hidden__init(this,index,id);}
}

function _ZEN_Component_hidden__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.hidden = true;
}
function _ZEN_Component_hidden_serialize(set,s)
{
	s[0]='1247505462';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.invalid?1:0);s[26]=this.invalidMessage;s[27]=this.label;s[28]=this.labelClass;s[29]=this.labelStyle;s[30]=this.onafterdrag;s[31]=this.onbeforedrag;s[32]=this.onblur;s[33]=this.onchange;s[34]=this.onclick;s[35]=this.ondblclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onfocus;s[39]=this.onhide;s[40]=this.onkeydown;s[41]=this.onkeypress;s[42]=this.onkeyup;s[43]=this.onmousedown;s[44]=this.onmouseout;s[45]=this.onmouseover;s[46]=this.onmouseup;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onsubmit;s[50]=this.onupdate;s[51]=this.onvalidate;s[52]=this.originalValue;s[53]=this.overlayMode;s[54]=(this.readOnly?1:0);s[55]=this.renderFlag;s[56]=(this.required?1:0);s[57]=this.requiredMessage;s[58]=(this.showLabel?1:0);s[59]=this.slice;s[60]=this.tabIndex;s[61]=this.title;s[62]=this.tuple;s[63]=this.valign;s[64]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[65]=(this.visible?1:0);s[66]=this.width;
}
function _ZEN_Component_hidden_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_hidden_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_hidden__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_hidden.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_hidden.prototype;
	p.constructor = _ZEN_Component_hidden;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.hidden';
	p._type = 'hidden';
	p.serialize = _ZEN_Component_hidden_serialize;
	p.getSettings = _ZEN_Component_hidden_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_hidden_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['image'] = '_ZEN_Component_image';
function _ZEN_Component_image(index,id) {
	if (index>=0) {_ZEN_Component_image__init(this,index,id);}
}

function _ZEN_Component_image__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.alt = '';
	o.src = '';
	o.srcDisabled = '';
	o.srcMissing = '/csp/broker/images/spacer.gif';
	o.streamId = ''; // encrypted
	o.text = '';
}
function _ZEN_Component_image_serialize(set,s)
{
	s[0]='366457626';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.alt;s[8]=this.aux;s[9]=this.clientType;s[10]=this.containerStyle;s[11]=this.controlClass;s[12]=this.controlStyle;s[13]=this.dataBinding;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.onafterdrag;s[32]=this.onbeforedrag;s[33]=this.onblur;s[34]=this.onchange;s[35]=this.onclick;s[36]=this.ondblclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onfocus;s[40]=this.onhide;s[41]=this.onkeydown;s[42]=this.onkeypress;s[43]=this.onkeyup;s[44]=this.onmousedown;s[45]=this.onmouseout;s[46]=this.onmouseover;s[47]=this.onmouseup;s[48]=this.onrefresh;s[49]=this.onshow;s[50]=this.onsubmit;s[51]=this.onupdate;s[52]=this.onvalidate;s[53]=this.originalValue;s[54]=this.overlayMode;s[55]=(this.readOnly?1:0);s[56]=this.renderFlag;s[57]=(this.required?1:0);s[58]=this.requiredMessage;s[59]=(this.showLabel?1:0);s[60]=this.slice;s[61]=this.src;s[62]=this.srcDisabled;s[63]=this.srcMissing;s[64]=this.streamId;s[65]=this.tabIndex;s[66]=this.text;s[67]=this.title;s[68]=this.tuple;s[69]=this.valign;s[70]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[71]=(this.visible?1:0);s[72]=this.width;
}
function _ZEN_Component_image_getSettings(s)
{
	s['name'] = 'string';
	s['alt'] = 'caption';
	s['src'] = 'uri';
	s['srcDisabled'] = 'uri';
	s['srcMissing'] = 'uri';
	s['streamId'] = 'string';
	s['text'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_image_getDragData(dragData) {
dragData.value = this.text;
dragData.text = this.text;
return true;
}

function _ZEN_Component_image_imageClick(evt) {
if (!this.disabled) {
zenFireEvent(this.index, this.onclick, 'onclick', evt);
}
}

function _ZEN_Component_image_itemMouseDown(evt) {
if (this.dragEnabled) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
return false;
}
return true;
}

function _ZEN_Component_image_itemMouseUp(evt) {
if (this.dragEnabled) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
return false;
}
return true;
}

function _ZEN_Component_image_setProperty(property,value,value2) {
var el = this.findElement('image');
switch(property) {
case 'src':
this.src = value;
if (!this.disabled || '' == this.srcDisabled) {
el.src = value;
}
break;
case 'srcDisabled':
this.srcDisabled = value;
if (this.disabled) {
el.src = value;
}
break;
case 'disabled':
value = value ? true : false;
this.disabled = value;
if (!this.disabled || '' == this.srcDisabled) {
if ('' != this.value) {
this.setProperty('value',this.value);
}
else {
el.src = this.src;
}
}
else {
el.src = this.srcDisabled;
}
break;
case 'value':
this.value = value;
if (!this.disabled || '' == this.srcDisabled) {
if ('' == this.value) {
el.src = this.srcMissing;
}
else {
el.src = '%25CSP.StreamServer.cls?STREAMOID=' + escape(this.value);
}
}
break;
case 'width':
case 'height':
this[property] = value;
if (el) {
el[property] = value;
}
break;
case 'controlStyle':
this.controlStyle = value;
if (el) { el.style.cssText = value;	}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_image_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_image__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_image.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_image.prototype;
	p.constructor = _ZEN_Component_image;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.image';
	p._type = 'image';
	p.serialize = _ZEN_Component_image_serialize;
	p.getSettings = _ZEN_Component_image_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_image_ReallyRefreshContents;
	p.getDragData = _ZEN_Component_image_getDragData;
	p.imageClick = _ZEN_Component_image_imageClick;
	p.itemMouseDown = _ZEN_Component_image_itemMouseDown;
	p.itemMouseUp = _ZEN_Component_image_itemMouseUp;
	p.setProperty = _ZEN_Component_image_setProperty;
}

// ================================================================================
_zenClassIdx['label'] = '_ZEN_Component_label';
function _ZEN_Component_label(index,id) {
	if (index>=0) {_ZEN_Component_label__init(this,index,id);}
}

function _ZEN_Component_label__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.controlClass = 'labelText';
}
function _ZEN_Component_label_serialize(set,s)
{
	s[0]='1247505462';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.invalid?1:0);s[26]=this.invalidMessage;s[27]=this.label;s[28]=this.labelClass;s[29]=this.labelStyle;s[30]=this.onafterdrag;s[31]=this.onbeforedrag;s[32]=this.onblur;s[33]=this.onchange;s[34]=this.onclick;s[35]=this.ondblclick;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onfocus;s[39]=this.onhide;s[40]=this.onkeydown;s[41]=this.onkeypress;s[42]=this.onkeyup;s[43]=this.onmousedown;s[44]=this.onmouseout;s[45]=this.onmouseover;s[46]=this.onmouseup;s[47]=this.onrefresh;s[48]=this.onshow;s[49]=this.onsubmit;s[50]=this.onupdate;s[51]=this.onvalidate;s[52]=this.originalValue;s[53]=this.overlayMode;s[54]=(this.readOnly?1:0);s[55]=this.renderFlag;s[56]=(this.required?1:0);s[57]=this.requiredMessage;s[58]=(this.showLabel?1:0);s[59]=this.slice;s[60]=this.tabIndex;s[61]=this.title;s[62]=this.tuple;s[63]=this.valign;s[64]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[65]=(this.visible?1:0);s[66]=this.width;
}
function _ZEN_Component_label_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_label_setProperty(property,value,value2) {
var el = this.findElement('label');
var span = this.findElement('labelSpan');
switch(property) {
case 'value':
this.value = value;
if (el) {el.value = value;}
if (span) {span.innerHTML = value;}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_label_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_label__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_label.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_label.prototype;
	p.constructor = _ZEN_Component_label;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.label';
	p._type = 'label';
	p.serialize = _ZEN_Component_label_serialize;
	p.getSettings = _ZEN_Component_label_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_label_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_label_setProperty;
}

// ================================================================================
_zenClassIdx['listControl'] = '_ZEN_Component_listControl';
function _ZEN_Component_listControl(index,id) {
	if (index>=0) {_ZEN_Component_listControl__init(this,index,id);}
}

function _ZEN_Component_listControl__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.displayList = '';
	o.maxRows = '500';
	o.parameters = new Array();
	o.queryClass = '';
	o.queryName = '';
	o.sql = ''; // encrypted
	o.valueList = '';
}
function _ZEN_Component_listControl_serialize(set,s)
{
	s[0]='3444018080';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=this.displayList;s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.maxRows;s[32]=this.onafterdrag;s[33]=this.onbeforedrag;s[34]=this.onblur;s[35]=this.onchange;s[36]=this.onclick;s[37]=this.ondblclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onfocus;s[41]=this.onhide;s[42]=this.onkeydown;s[43]=this.onkeypress;s[44]=this.onkeyup;s[45]=this.onmousedown;s[46]=this.onmouseout;s[47]=this.onmouseover;s[48]=this.onmouseup;s[49]=this.onrefresh;s[50]=this.onshow;s[51]=this.onsubmit;s[52]=this.onupdate;s[53]=this.onvalidate;s[54]=this.originalValue;s[55]=this.overlayMode;s[56]=set.serializeList(this,this.parameters,true,'parameters');s[57]=this.queryClass;s[58]=this.queryName;s[59]=(this.readOnly?1:0);s[60]=this.renderFlag;s[61]=(this.required?1:0);s[62]=this.requiredMessage;s[63]=(this.showLabel?1:0);s[64]=this.slice;s[65]=this.sql;s[66]=this.tabIndex;s[67]=this.title;s[68]=this.tuple;s[69]=this.valign;s[70]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[71]=this.valueList;s[72]=(this.visible?1:0);s[73]=this.width;
}
function _ZEN_Component_listControl_getSettings(s)
{
	s['name'] = 'string';
	s['displayList'] = 'csv';
	s['maxRows'] = 'integer';
	s['parameters'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['sql'] = 'sql';
	s['valueList'] = 'csv';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_listControl_setProperty(property,value,value2) {
switch(property) {
case 'maxRows':
case 'valueList':
case 'displayList':
this[property] = value;
this.refreshContents();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_listControl_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_listControl__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_listControl.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_listControl.prototype;
	p.constructor = _ZEN_Component_listControl;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.listControl';
	p._type = 'listControl';
	p.serialize = _ZEN_Component_listControl_serialize;
	p.getSettings = _ZEN_Component_listControl_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_listControl_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_listControl_setProperty;
}

// ================================================================================
_zenClassIdx['radioSet'] = '_ZEN_Component_radioSet';
function _ZEN_Component_radioSet(index,id) {
	if (index>=0) {_ZEN_Component_radioSet__init(this,index,id);}
}

function _ZEN_Component_radioSet__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_listControl__init) ?zenMaster._ZEN_Component_listControl__init(o,index,id):_ZEN_Component_listControl__init(o,index,id);
	o.captionClass = 'radioSetCaption';
	o.emptyCaption = 'None';
	o.optionCount = '0';
	o.titleList = '';
}
function _ZEN_Component_radioSet_serialize(set,s)
{
	s[0]='3954792726';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.captionClass;s[9]=this.clientType;s[10]=this.containerStyle;s[11]=this.controlClass;s[12]=this.controlStyle;s[13]=this.dataBinding;s[14]=(this.disabled?1:0);s[15]=this.displayList;s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.emptyCaption;s[20]=this.enclosingClass;s[21]=this.enclosingStyle;s[22]=this.error;s[23]=this.height;s[24]=(this.hidden?1:0);s[25]=this.hint;s[26]=this.hintClass;s[27]=this.hintStyle;s[28]=(this.invalid?1:0);s[29]=this.invalidMessage;s[30]=this.label;s[31]=this.labelClass;s[32]=this.labelStyle;s[33]=this.maxRows;s[34]=this.onafterdrag;s[35]=this.onbeforedrag;s[36]=this.onblur;s[37]=this.onchange;s[38]=this.onclick;s[39]=this.ondblclick;s[40]=this.ondrag;s[41]=this.ondrop;s[42]=this.onfocus;s[43]=this.onhide;s[44]=this.onkeydown;s[45]=this.onkeypress;s[46]=this.onkeyup;s[47]=this.onmousedown;s[48]=this.onmouseout;s[49]=this.onmouseover;s[50]=this.onmouseup;s[51]=this.onrefresh;s[52]=this.onshow;s[53]=this.onsubmit;s[54]=this.onupdate;s[55]=this.onvalidate;s[56]=this.optionCount;s[57]=this.originalValue;s[58]=this.overlayMode;s[59]=set.serializeList(this,this.parameters,true,'parameters');s[60]=this.queryClass;s[61]=this.queryName;s[62]=(this.readOnly?1:0);s[63]=this.renderFlag;s[64]=(this.required?1:0);s[65]=this.requiredMessage;s[66]=(this.showLabel?1:0);s[67]=this.slice;s[68]=this.sql;s[69]=this.tabIndex;s[70]=this.title;s[71]=this.titleList;s[72]=this.tuple;s[73]=this.valign;s[74]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[75]=this.valueList;s[76]=(this.visible?1:0);s[77]=this.width;
}
function _ZEN_Component_radioSet_getSettings(s)
{
	s['name'] = 'string';
	s['captionClass'] = 'cssClass';
	s['emptyCaption'] = 'caption';
	s['titleList'] = 'csv';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_radioSet_clickItem(choice) {
if (this.disabled) return false;
if (this.readOnly) return false;
var changed = false;
var radio = this.findElement('textRadio_' + choice);
zenASSERT(radio,'Unable to find radio element.',arguments);
radio.checked = true;
this.value = radio.value;
var hidden = this.findElement('hidden');
zenASSERT(hidden,'Unable to find hidden element.',arguments);
if (hidden.value != this.value) {
hidden.value = this.value;
changed = true;
}
zenInvokeCallbackMethod(this.onclick,this,'onclick');
if (changed) {
this.onchangeHandler();
}
return true;
}

function _ZEN_Component_radioSet_setCaptionClass(cls) {
for (var n = 0; n < this.optionCount; n++) {
var caption = this.findElement('caption_' + ((parseInt(n,10))+1));
if (caption) { caption.className = cls; }
}
}

function _ZEN_Component_radioSet_setProperty(property,value,value2) {
switch(property) {
case 'value':
this.value = value;
for (var n = 0; n < this.optionCount; n++) {
var radio = this.findElement('textRadio_' + ((parseInt(n,10))+1));
if (radio) {
radio.checked = (radio.value == this.value);
}
}
var hidden = this.findElement('hidden');
if (hidden) { hidden.value = this.value; }
break;
case 'readOnly':
case 'disabled':
value = (value) ? true : false;
if (this[property] != value) {
this[property] = value;
for (var n = 0; n < this.optionCount; n++) {
var radio = this.findElement('textRadio_' + ((n*1)+1));
if (radio) {radio.disabled = (this.disabled||this.readOnly); }
}
if ('disabled' == property) {
this.setCaptionClass(this.disabled ? 'radioSetCaptionDisabled' : this.captionClass);
}
}
break;
case 'captionClass':
this.captionClass = value;
if (!this.disabled) {
this.setCaptionClass(this.captionClass);
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_radioSet_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_radioSet__Loader() {
	zenLoadClass('_ZEN_Component_listControl');
	_ZEN_Component_radioSet.prototype = zenCreate('_ZEN_Component_listControl',-1);
	var p = _ZEN_Component_radioSet.prototype;
	p.constructor = _ZEN_Component_radioSet;
	p.superClass = ('undefined' == typeof _ZEN_Component_listControl) ? zenMaster._ZEN_Component_listControl.prototype:_ZEN_Component_listControl.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.radioSet';
	p._type = 'radioSet';
	p.serialize = _ZEN_Component_radioSet_serialize;
	p.getSettings = _ZEN_Component_radioSet_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_radioSet_ReallyRefreshContents;
	p.clickItem = _ZEN_Component_radioSet_clickItem;
	p.setCaptionClass = _ZEN_Component_radioSet_setCaptionClass;
	p.setProperty = _ZEN_Component_radioSet_setProperty;
}

// ================================================================================
_zenClassIdx['select'] = '_ZEN_Component_select';
function _ZEN_Component_select(index,id) {
	if (index>=0) {_ZEN_Component_select__init(this,index,id);}
}

function _ZEN_Component_select__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_listControl__init) ?zenMaster._ZEN_Component_listControl__init(o,index,id):_ZEN_Component_listControl__init(o,index,id);
	o.controlClass = 'select';
	o.showEmpty = true;
	o.size = '';
}
function _ZEN_Component_select_serialize(set,s)
{
	s[0]='3965674434';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=this.displayList;s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=this.maxRows;s[32]=this.onafterdrag;s[33]=this.onbeforedrag;s[34]=this.onblur;s[35]=this.onchange;s[36]=this.onclick;s[37]=this.ondblclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onfocus;s[41]=this.onhide;s[42]=this.onkeydown;s[43]=this.onkeypress;s[44]=this.onkeyup;s[45]=this.onmousedown;s[46]=this.onmouseout;s[47]=this.onmouseover;s[48]=this.onmouseup;s[49]=this.onrefresh;s[50]=this.onshow;s[51]=this.onsubmit;s[52]=this.onupdate;s[53]=this.onvalidate;s[54]=this.originalValue;s[55]=this.overlayMode;s[56]=set.serializeList(this,this.parameters,true,'parameters');s[57]=this.queryClass;s[58]=this.queryName;s[59]=(this.readOnly?1:0);s[60]=this.renderFlag;s[61]=(this.required?1:0);s[62]=this.requiredMessage;s[63]=(this.showEmpty?1:0);s[64]=(this.showLabel?1:0);s[65]=this.size;s[66]=this.slice;s[67]=this.sql;s[68]=this.tabIndex;s[69]=this.title;s[70]=this.tuple;s[71]=this.valign;s[72]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[73]=this.valueList;s[74]=(this.visible?1:0);s[75]=this.width;
}
function _ZEN_Component_select_getSettings(s)
{
	s['name'] = 'string';
	s['showEmpty'] = 'boolean';
	s['size'] = 'integer';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_select_getOptionText(idx) {
var el = this.findElement('control');
if (el && idx >= 0) {
var opt = el.options[idx];
return (null == opt) ? '' : opt.text;
}
return '';
}

function _ZEN_Component_select_getOptionValue(idx) {
var el = this.findElement('control');
if (el && idx >= 0) {
var opt = el.options[idx];
return (null == opt) ? '' : opt.value;
}
return '';
}

function _ZEN_Component_select_getSelectedIndex(idx) {
var el = this.findElement('control');
if (el) {
return el.selectedIndex;
}
return -1;
}

function _ZEN_Component_select_setProperty(property,value,value2) {
var el = this.findElement('control');
switch(property) {
case 'disabled':
value = (value) ? true : false;
this.disabled = value;
var d = (this.readOnly || this.disabled);
if (el) { el.disabled = d; }
var lbl = this.getLabelElement();
if (lbl) {
if (this.disabled) {
lbl.className = 'zenLabelDisabled';
}
else {
lbl.className = (''==this.labelClass) ? 'zenLabel' : this.labelClass;
}
}
break;
case 'readOnly':
value = (value) ? true : false;
this.readOnly = value;
var d = (this.readOnly || this.disabled);
if (el) { el.disabled = d; }
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_select_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_select__Loader() {
	zenLoadClass('_ZEN_Component_listControl');
	_ZEN_Component_select.prototype = zenCreate('_ZEN_Component_listControl',-1);
	var p = _ZEN_Component_select.prototype;
	p.constructor = _ZEN_Component_select;
	p.superClass = ('undefined' == typeof _ZEN_Component_listControl) ? zenMaster._ZEN_Component_listControl.prototype:_ZEN_Component_listControl.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.select';
	p._type = 'select';
	p.serialize = _ZEN_Component_select_serialize;
	p.getSettings = _ZEN_Component_select_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_select_ReallyRefreshContents;
	p.getOptionText = _ZEN_Component_select_getOptionText;
	p.getOptionValue = _ZEN_Component_select_getOptionValue;
	p.getSelectedIndex = _ZEN_Component_select_getSelectedIndex;
	p.setProperty = _ZEN_Component_select_setProperty;
}

// ================================================================================
_zenClassIdx['radioButton'] = '_ZEN_Component_radioButton';
function _ZEN_Component_radioButton(index,id) {
	if (index>=0) {_ZEN_Component_radioButton__init(this,index,id);}
}

function _ZEN_Component_radioButton__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.caption = '';
	o.captionClass = 'radioButtonCaption';
	o.controlClass = 'radio';
	o.optionValue = '';
}
function _ZEN_Component_radioButton_serialize(set,s)
{
	s[0]='3689099011';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.captionClass;s[10]=this.clientType;s[11]=this.containerStyle;s[12]=this.controlClass;s[13]=this.controlStyle;s[14]=this.dataBinding;s[15]=(this.disabled?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.height;s[23]=(this.hidden?1:0);s[24]=this.hint;s[25]=this.hintClass;s[26]=this.hintStyle;s[27]=(this.invalid?1:0);s[28]=this.invalidMessage;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelStyle;s[32]=this.onafterdrag;s[33]=this.onbeforedrag;s[34]=this.onblur;s[35]=this.onchange;s[36]=this.onclick;s[37]=this.ondblclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onfocus;s[41]=this.onhide;s[42]=this.onkeydown;s[43]=this.onkeypress;s[44]=this.onkeyup;s[45]=this.onmousedown;s[46]=this.onmouseout;s[47]=this.onmouseover;s[48]=this.onmouseup;s[49]=this.onrefresh;s[50]=this.onshow;s[51]=this.onsubmit;s[52]=this.onupdate;s[53]=this.onvalidate;s[54]=this.optionValue;s[55]=this.originalValue;s[56]=this.overlayMode;s[57]=(this.readOnly?1:0);s[58]=this.renderFlag;s[59]=(this.required?1:0);s[60]=this.requiredMessage;s[61]=(this.showLabel?1:0);s[62]=this.slice;s[63]=this.tabIndex;s[64]=this.title;s[65]=this.tuple;s[66]=this.valign;s[67]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[68]=(this.visible?1:0);s[69]=this.width;
}
function _ZEN_Component_radioButton_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['captionClass'] = 'cssClass';
	s['optionValue'] = 'value';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_radioButton_clickButton() {
if (this.disabled) return false;
if (this.readOnly) return false;
var btn = this.findElement('control');
zenASSERT(btn,'Unable to find radio element',arguments);
var changed = false;
if (btn.checked) {
for (var n in _zenIndex) {
if (_zenIndex[n] && _zenIndex[n].name == this.name && _zenIndex[n]._type == this._type) {
_zenIndex[n].value = this.optionValue;
var hidden = _zenIndex[n].findElement('hidden');
if (hidden) {
if (hidden.value != this.optionValue) {
changed = true;
hidden.value = this.optionValue;
}
}
}
}
}
zenInvokeCallbackMethod(this.onclick,this,'onclick');
if (changed) {
this.onchangeHandler();
}
return true;
}

function _ZEN_Component_radioButton_clickCaption() {
if (this.disabled) return;
if (this.readOnly) return;
var rb = this.findElement('control');
zenASSERT(rb,'Unable to find radioButton element',arguments);
if (rb.checked) return;
rb.checked = true;
this.clickButton();
}

function _ZEN_Component_radioButton_getProperty(property,key) {
switch(property) {
case 'value':
return this.normalizeValue(this.value);
}
return this.invokeSuper('getProperty',arguments);
}

function _ZEN_Component_radioButton_onSerialize() {
return;
}

function _ZEN_Component_radioButton_setProperty(property,value,value2) {
switch(property) {
case 'readOnly':
case 'disabled':
value = (value) ? true : false;
if (this[property] != value) {
this[property] = value;
var rb = this.findElement('control');
if (rb) {rb.disabled = (this.disabled||this.readOnly); }
var caption = this.findElement('caption');
if (caption) {caption.className = this.disabled ? 'radioButtonCaptionDisabled' : this.captionClass; }
}
break;
case 'optionValue':
this.optionValue = value;
var rb = this.findElement('control');
rb.value = value;
rb.checked = (this.optionValue == this.value);
break;
case 'value':
for (var n in _zenIndex) {
if (_zenIndex[n].name == this.name && _zenIndex[n]._type == this._type) {
_zenIndex[n].value = value;
var rb = _zenIndex[n].findElement('control');
var hidden = _zenIndex[n].findElement('hidden');
if (hidden) {
hidden.value = value;
}
rb.checked = (_zenIndex[n].optionValue == value);
}
}
break;
case 'caption':
var caption = this.findElement('caption');
this.caption = value;
caption.innerHTML = value;
break;
case 'captionClass':
var caption = this.findElement('caption');
this.captionClass = value;
if (caption && !this.disabled) {
caption.className = value;
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_radioButton_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_radioButton__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_radioButton.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_radioButton.prototype;
	p.constructor = _ZEN_Component_radioButton;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.radioButton';
	p._type = 'radioButton';
	p.serialize = _ZEN_Component_radioButton_serialize;
	p.getSettings = _ZEN_Component_radioButton_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_radioButton_ReallyRefreshContents;
	p.clickButton = _ZEN_Component_radioButton_clickButton;
	p.clickCaption = _ZEN_Component_radioButton_clickCaption;
	p.getProperty = _ZEN_Component_radioButton_getProperty;
	p.onSerialize = _ZEN_Component_radioButton_onSerialize;
	p.setProperty = _ZEN_Component_radioButton_setProperty;
}

// ================================================================================
_zenClassIdx['text'] = '_ZEN_Component_text';
function _ZEN_Component_text(index,id) {
	if (index>=0) {_ZEN_Component_text__init(this,index,id);}
}

function _ZEN_Component_text__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.controlClass = 'text';
	o.maxlength = '';
	o.size = '';
}
function _ZEN_Component_text_serialize(set,s)
{
	s[0]='1484169974';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.invalid?1:0);s[26]=this.invalidMessage;s[27]=this.label;s[28]=this.labelClass;s[29]=this.labelStyle;s[30]=this.maxlength;s[31]=this.onafterdrag;s[32]=this.onbeforedrag;s[33]=this.onblur;s[34]=this.onchange;s[35]=this.onclick;s[36]=this.ondblclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onfocus;s[40]=this.onhide;s[41]=this.onkeydown;s[42]=this.onkeypress;s[43]=this.onkeyup;s[44]=this.onmousedown;s[45]=this.onmouseout;s[46]=this.onmouseover;s[47]=this.onmouseup;s[48]=this.onrefresh;s[49]=this.onshow;s[50]=this.onsubmit;s[51]=this.onupdate;s[52]=this.onvalidate;s[53]=this.originalValue;s[54]=this.overlayMode;s[55]=(this.readOnly?1:0);s[56]=this.renderFlag;s[57]=(this.required?1:0);s[58]=this.requiredMessage;s[59]=(this.showLabel?1:0);s[60]=this.size;s[61]=this.slice;s[62]=this.tabIndex;s[63]=this.title;s[64]=this.tuple;s[65]=this.valign;s[66]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[67]=(this.visible?1:0);s[68]=this.width;
}
function _ZEN_Component_text_getSettings(s)
{
	s['name'] = 'string';
	s['maxlength'] = 'integer';
	s['size'] = 'integer';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_text_setProperty(property,value,value2) {
var el = this.findElement('control');
switch(property) {
case 'size':
this.size = value;
if (el) { el.size = value; }
break;
case 'maxlength':
this.maxlength = value;
if (el) { el.maxlength = value; }
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_text_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_text__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_text.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_text.prototype;
	p.constructor = _ZEN_Component_text;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.text';
	p._type = 'text';
	p.serialize = _ZEN_Component_text_serialize;
	p.getSettings = _ZEN_Component_text_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_text_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_text_setProperty;
}

// ================================================================================
_zenClassIdx['abstractComboBox'] = '_ZEN_Component_abstractComboBox';
function _ZEN_Component_abstractComboBox(index,id) {
	if (index>=0) {_ZEN_Component_abstractComboBox__init(this,index,id);}
}

function _ZEN_Component_abstractComboBox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_text__init) ?zenMaster._ZEN_Component_text__init(o,index,id):_ZEN_Component_text__init(o,index,id);
	o.buttonCaption = '';
	o.buttonImage = '/csp/broker/images/combobox.png';
	o.buttonImageDown = '/csp/broker/images/comboboxpress.png';
	o.buttonTitle = '';
	o.comboType = 'image';
	o.controlClass = 'comboboxInput';
	o.delay = '250';
	o.dropdownHeight = '';
	o.dropdownWidth = '';
	o.editable = false;
	o.hzScroll = false;
	o.isDropdownVisible = false;
	o.scrollIntoView = true;
	o.selectedIndex = '-1';
	o.text = '';
	o.unrestricted = false;
}
function _ZEN_Component_abstractComboBox_serialize(set,s)
{
	s[0]='2612752708';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.buttonCaption;s[9]=this.buttonImage;s[10]=this.buttonImageDown;s[11]=this.buttonTitle;s[12]=this.clientType;s[13]=this.comboType;s[14]=this.containerStyle;s[15]=this.controlClass;s[16]=this.controlStyle;s[17]=this.dataBinding;s[18]=this.delay;s[19]=(this.disabled?1:0);s[20]=(this.dragEnabled?1:0);s[21]=(this.dropEnabled?1:0);s[22]=this.dropdownHeight;s[23]=this.dropdownWidth;s[24]=(this.dynamic?1:0);s[25]=(this.editable?1:0);s[26]=this.enclosingClass;s[27]=this.enclosingStyle;s[28]=this.error;s[29]=this.height;s[30]=(this.hidden?1:0);s[31]=this.hint;s[32]=this.hintClass;s[33]=this.hintStyle;s[34]=(this.hzScroll?1:0);s[35]=(this.invalid?1:0);s[36]=this.invalidMessage;s[37]=(this.isDropdownVisible?1:0);s[38]=this.label;s[39]=this.labelClass;s[40]=this.labelStyle;s[41]=this.maxlength;s[42]=this.onafterdrag;s[43]=this.onbeforedrag;s[44]=this.onblur;s[45]=this.onchange;s[46]=this.onclick;s[47]=this.ondblclick;s[48]=this.ondrag;s[49]=this.ondrop;s[50]=this.onfocus;s[51]=this.onhide;s[52]=this.onkeydown;s[53]=this.onkeypress;s[54]=this.onkeyup;s[55]=this.onmousedown;s[56]=this.onmouseout;s[57]=this.onmouseover;s[58]=this.onmouseup;s[59]=this.onrefresh;s[60]=this.onshow;s[61]=this.onsubmit;s[62]=this.onupdate;s[63]=this.onvalidate;s[64]=this.originalValue;s[65]=this.overlayMode;s[66]=(this.readOnly?1:0);s[67]=this.renderFlag;s[68]=(this.required?1:0);s[69]=this.requiredMessage;s[70]=(this.scrollIntoView?1:0);s[71]=this.selectedIndex;s[72]=(this.showLabel?1:0);s[73]=this.size;s[74]=this.slice;s[75]=this.tabIndex;s[76]=this.text;s[77]=this.title;s[78]=this.tuple;s[79]=(this.unrestricted?1:0);s[80]=this.valign;s[81]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[82]=(this.visible?1:0);s[83]=this.width;
}
function _ZEN_Component_abstractComboBox_getSettings(s)
{
	s['name'] = 'string';
	s['buttonCaption'] = 'caption';
	s['buttonImage'] = 'uri';
	s['buttonImageDown'] = 'uri';
	s['buttonTitle'] = 'caption';
	s['comboType'] = 'enum:image,button,timer';
	s['delay'] = 'integer';
	s['dropdownHeight'] = 'length';
	s['dropdownWidth'] = 'length';
	s['editable'] = 'boolean';
	s['hzScroll'] = 'boolean';
	s['isDropdownVisible'] = 'boolean';
	s['scrollIntoView'] = 'boolean';
	s['selectedIndex'] = 'integer';
	s['text'] = 'string';
	s['unrestricted'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_abstractComboBox_adjustDropdownPosition() {
var div = this.getDropDownDiv();
zenASSERT(div,'Unable to find dropdown div',arguments);
var input = this.findElement('input');
zenASSERT(input,'Unable to find input element',arguments);
var top,right;
var top = zenGetTop(input) + input.offsetHeight - zenGetTopScroll(input);
var right = zenGetLeft(input) - zenGetLeftScroll(input);
top += document.body.scrollTop;
right += document.body.scrollLeft;
if (div.nativeHeight) div.style.height=div.nativeHeight;
var hgt = document.body.clientHeight;
var uSpace = top-input.offsetHeight;
var dSpace = hgt-top;
if (div.offsetHeight>dSpace) { //dropdown wont fit as is
if (dSpace>uSpace) { // beneath is best option but must shorten menu
if (!div.nativeHeight) div.nativeHeight=div.offsetHeight;
div.style.height=dSpace-10;
}
else { // open dropdown upwards
if (div.offsetHeight>uSpace) {
if (!div.nativeHeight) div.nativeHeight=div.offsetHeight;
div.style.height=uSpace-10;
}
top=uSpace-div.offsetHeight;
}
}
div.style.top = top;
div.style.left = right;
}

function _ZEN_Component_abstractComboBox_clearTimer() {
if ("timer" == this.comboType) {
if (this.actionTimerId) {
self.clearTimeout(this.actionTimerId);
this.actionTimerId = null;
}
}
}

function _ZEN_Component_abstractComboBox_comboboxButtonDown(evt) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
if (!this.disabled && !this.readOnly) {
var btn = this.findElement('btn');
if (btn) {
btn.src = this.buttonImageDown;
}
this.buttonIsDown = true;
}
}

function _ZEN_Component_abstractComboBox_comboboxButtonUp() {
if (!this.disabled && !this.readOnly && this.buttonIsDown) {
var btn = this.findElement('btn');
if (btn) {
btn.src = this.buttonImage;
}
}
}

function _ZEN_Component_abstractComboBox_comboboxMouseOut() {
if (!this.disabled && !this.readOnly && this.buttonIsDown) {
var btn = this.findElement('btn');
if (btn) {
btn.src = this.buttonImage;
}
}
}

function _ZEN_Component_abstractComboBox_comboboxMouseOver() {
if (!this.disabled && !this.readOnly && this.buttonIsDown) {
var btn = this.findElement('btn');
if (btn) {
btn.src = this.buttonImageDown;
}
}
}

function _ZEN_Component_abstractComboBox_dragStartHandler(dragData) {
if (!this.getDragData(dragData) || (''==this.text)) {
return false;
}
ZLM.setDragCaption(this.text);
return true;
}

function _ZEN_Component_abstractComboBox_findDisplayValue(value) {
if ('' == value) {
return '';
}
var text = null;
var count = this.getOptionCount();
for (var idx = 0; idx < count; idx++) {
if (value == this.getOptionValue(idx)) {
text = this.getOptionText(idx);
break;
}
}
return text;
}

function _ZEN_Component_abstractComboBox_findSelectedItem() {
if (this.isDropdownVisible && this.value != '') {
var count = this.getOptionCount();
for (var idx = 0; idx < count; idx++) {
if (this.value == this.getOptionValue(idx)) {
this.selectItem(idx,true,false);
break;
}
}
}
}

function _ZEN_Component_abstractComboBox_focus() {
var el = this.findElement('input');
if (el) {
el.focus();
}
}

function _ZEN_Component_abstractComboBox_getCacheDiv() {
return this.findElement('cache');
}

function _ZEN_Component_abstractComboBox_getDropDownDiv() {
return self.document.getElementById('zenModalDiv');
}

function _ZEN_Component_abstractComboBox_getItemEl(idx) {
return this.findElement('item_' + idx);
}

function _ZEN_Component_abstractComboBox_getOptionCount() {
return 0;
}

function _ZEN_Component_abstractComboBox_getOptionText(idx) {
return '';
}

function _ZEN_Component_abstractComboBox_getOptionValue(idx) {
return '';
}

function _ZEN_Component_abstractComboBox_inputBlurHandler(evt) {
evt = evt ? evt : window.event;
this.clearTimer();
if (this.isDropdownVisible && (!this.mouseDown)) {
zenPage.endModal();
}
zenInvokeCallbackMethod(this.onblur,this,'onblur');
return true;
}

function _ZEN_Component_abstractComboBox_inputChangeHandler() {
if (this.unrestricted) {
if (this.editable) {
var hidden = this.findElement('hidden');
var input = this.findElement('input');
this.value = input.value;
hidden.value = input.value;
}
this.onchangeHandler();
}
}

function _ZEN_Component_abstractComboBox_inputKeyHandler(evt) {
evt = evt ? evt : window.event;
var idx = parseInt(this.selectedIndex,10);
if (this.isDropdownVisible) {
switch(evt.keyCode) {
case zenUP:
this.clearTimer();
this.keyMode = true;
if (evt.preventDefault) {
evt.preventDefault();
}
if (idx > 0) {
this.selectItem(idx - 1,true,false);
}
return false;
case zenDOWN:
this.clearTimer();
this.keyMode = true;
if (evt.preventDefault) {
evt.preventDefault();
}
if (idx < (this.getOptionCount()-1)) {
this.selectItem(idx + 1,true,false);
}
return false;
case zenPAGEUP:
this.clearTimer();
this.keyMode = true;
if (evt.preventDefault) {
evt.preventDefault();
}
if (idx > 0) {
this.selectItem((idx > 10) ? idx - 10 : 0,true,false);
}
return false;
case zenPAGEDN:
this.clearTimer();
this.keyMode = true;
if (evt.preventDefault) {
evt.preventDefault();
}
var count = this.getOptionCount();
if (idx < (count-1)) {
this.selectItem((idx < count - 10) ? idx + 10 : count - 1,true,false);
}
return false;
case zenESC:
if (evt.preventDefault) {
evt.preventDefault();
}
zenPage.endModal();
return false;
case zenENTER:
this.clearTimer();
if (this.keyMode) {
this.selectItem(idx,false,true);
zenPage.endModal();
}
else {
this.renderDropdown();
}
return false;
default:
this.startTimer();
this.keyMode = null;
break;
}
}
else {
switch(evt.keyCode) {
case zenDOWN:
case zenENTER:
this.clearTimer();
this.keyMode = true;
this.showDropdown();
return false;
default:
this.startTimer();
break;
}
}
return zenInvokeCallbackMethod(this.onkeydown,this,'onkeydown');
}

function _ZEN_Component_abstractComboBox_itemMouseDown(evt,idx) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
this.mouseDown = true;
}

function _ZEN_Component_abstractComboBox_itemMouseUp(evt,idx) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
this.selectItem(idx,false,true);
this.findElement('input').focus();
this.mouseDown = false;
zenPage.endModal();
}

function _ZEN_Component_abstractComboBox_onDelete() {
this.clearTimer();
}

function _ZEN_Component_abstractComboBox_onEndModalHandler(zindex) {
this.clearTimer();
var div = this.getDropDownDiv();
var cache = this.getCacheDiv();
if (cache) {
if ('' != div.innerHTML) {
cache.style.cssText='display: none;';
cache.innerHTML = div.innerHTML;
div.innerHTML = '';
this._hasCache = true;
}
else {
cache.innerHTML = '';
delete this._hasCache;
}
}
div.style.cssText = "display:none;";
div.className = "";
div.mousedown = null;
div.mouseup = null;
this.isDropdownVisible = false;
this.keyMode = null;
this.findElement('input').focus();
}

function _ZEN_Component_abstractComboBox_onStartModalHandler(zindex) {
var div = this.getDropDownDiv();
zenASSERT(div,'Unable to find dropdown div',arguments);
var input = this.findElement('input');
zenASSERT(input,'Unable to find input element',arguments);
div.onmousedown = new Function("event","zenPage.getComponent("+this.index+").mouseDown=true;");
div.onmouseup = new Function("event","zenPage.getComponent("+this.index+").mouseDown=null;");
div.className = 'comboboxDropDown';
if (!this.hzScroll) {
div.style.overflowX = 'hidden';
}
div.style.height = this.dropdownHeight;
if ('' == this.dropdownWidth) {
var enc = this.getEnclosingDiv();
div.style.width = enc.offsetWidth;
}
else {
div.style.width = this.dropdownWidth;
}
div.style.zIndex = zindex;
div.style.display = "";
this.adjustDropdownPosition();
this.renderDropdown();
}

function _ZEN_Component_abstractComboBox_onresizeHandler() {
if (this.isDropdownVisible) {
this.adjustDropdownPosition();
}
}

function _ZEN_Component_abstractComboBox_renderDropdown() {
var div = this.getDropDownDiv();
zenASSERT(div,'Unable to find DropDown element',arguments);
div.innerHTML = "";
}

function _ZEN_Component_abstractComboBox_selectItem(idx,show,update) {
var out = zenPage.getComponentById('events');
var input = this.findElement('input');
var hidden = this.findElement('hidden');
zenASSERT(input,'Unable to find input element',arguments);
zenASSERT(hidden,'Unable to find hidden element',arguments);
var value,text;
if (parseInt(this.selectedIndex,10) >= 0) {
var el = this.getItemEl(parseInt(this.selectedIndex,10));
if (el) {
el.className = 'comboboxItem';
}
}
var size = this.getOptionCount();
if (idx < 0 || idx > size) {
this.selectedIndex = -1;
value = '';
text = '';
}
else {
idx = parseInt(idx,10);
this.selectedIndex = idx;
value = this.getOptionValue(idx);
text = this.getOptionText(idx);
var el = this.getItemEl(this.selectedIndex);
if (el) {
el.className = 'comboboxItemSelected';
if (show && this.scrollIntoView) {
if (this.selectedIndex == 0) {
this.getDropDownDiv().scrollTop = 0;
}
else {
zenScrollIntoView(this.getDropDownDiv(),el,!this.hzScroll);
}
}
}
}
if (update) {
this.value = value;
this.text = text;
hidden.value = value;
input.value = text;
this.onchangeHandler();
}
}

function _ZEN_Component_abstractComboBox_setProperty(property,value,value2) {
var input = this.findElement('input');
var hidden = this.findElement('hidden');
var btn = this.findElement('btn');
switch(property) {
case 'value':
this.value = value;
if (hidden) { hidden.value = value; }
if (input) { input.value = ''; }
if (this.unrestricted) {
if (input) { input.value = (null==value2) ? value : value2; }
}
else {
var text = this.findDisplayValue(this.value);
if (null != text) {
if (input) { input.value = text; }
this.text = text;
}
}
break;
case 'text':
break;
case 'unrestricted':
value = (value) ? true : false;
this.unrestricted = value;
break;
case 'controlStyle':
this.controlStyle = value;
if (input) { input.style.cssText = value;	}
break;
case 'disabled':
value = (value) ? true : false;
if (input) {input.disabled = value;}
if (btn) {btn.disabled = value; }
this.disabled = value;
this.invokeSuper('setProperty',arguments);
break;
case 'readOnly':
value = (value) ? true : false;
if (input) {input.readOnly = this.editable ? value : true;}
if (btn) { btn.disabled = value; }
this.readOnly = value;
break;
case 'buttonImage':
this.buttonImage = value;
var btn = this.findElement('btn');
if (btn) { btn.src = this.buttonImage; }
break;
case 'buttonImageDown':
this.buttonImageDown = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_abstractComboBox_showDropdown() {
if (!this.disabled && !this.readOnly) {
this.buttonIsDown = false;
zenPage.startModal(this);
}
}

function _ZEN_Component_abstractComboBox_startTimer() {
if ("timer" == this.comboType) {
this.clearTimer();
this.actionTimerId = self.setTimeout("zenPage.getComponent("+this.index+").timerHandler()",this.delay);
}
}

function _ZEN_Component_abstractComboBox_timerHandler() {
if (this.isDropdownVisible) {
this.renderDropdown();
}
else {
this.showDropdown();
}
}

function _ZEN_Component_abstractComboBox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_abstractComboBox__Loader() {
	zenLoadClass('_ZEN_Component_text');
	_ZEN_Component_abstractComboBox.prototype = zenCreate('_ZEN_Component_text',-1);
	var p = _ZEN_Component_abstractComboBox.prototype;
	p.constructor = _ZEN_Component_abstractComboBox;
	p.superClass = ('undefined' == typeof _ZEN_Component_text) ? zenMaster._ZEN_Component_text.prototype:_ZEN_Component_text.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.abstractComboBox';
	p._type = 'abstractComboBox';
	p.serialize = _ZEN_Component_abstractComboBox_serialize;
	p.getSettings = _ZEN_Component_abstractComboBox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_abstractComboBox_ReallyRefreshContents;
	p.adjustDropdownPosition = _ZEN_Component_abstractComboBox_adjustDropdownPosition;
	p.clearTimer = _ZEN_Component_abstractComboBox_clearTimer;
	p.comboboxButtonDown = _ZEN_Component_abstractComboBox_comboboxButtonDown;
	p.comboboxButtonUp = _ZEN_Component_abstractComboBox_comboboxButtonUp;
	p.comboboxMouseOut = _ZEN_Component_abstractComboBox_comboboxMouseOut;
	p.comboboxMouseOver = _ZEN_Component_abstractComboBox_comboboxMouseOver;
	p.dragStartHandler = _ZEN_Component_abstractComboBox_dragStartHandler;
	p.findDisplayValue = _ZEN_Component_abstractComboBox_findDisplayValue;
	p.findSelectedItem = _ZEN_Component_abstractComboBox_findSelectedItem;
	p.focus = _ZEN_Component_abstractComboBox_focus;
	p.getCacheDiv = _ZEN_Component_abstractComboBox_getCacheDiv;
	p.getDropDownDiv = _ZEN_Component_abstractComboBox_getDropDownDiv;
	p.getItemEl = _ZEN_Component_abstractComboBox_getItemEl;
	p.getOptionCount = _ZEN_Component_abstractComboBox_getOptionCount;
	p.getOptionText = _ZEN_Component_abstractComboBox_getOptionText;
	p.getOptionValue = _ZEN_Component_abstractComboBox_getOptionValue;
	p.inputBlurHandler = _ZEN_Component_abstractComboBox_inputBlurHandler;
	p.inputChangeHandler = _ZEN_Component_abstractComboBox_inputChangeHandler;
	p.inputKeyHandler = _ZEN_Component_abstractComboBox_inputKeyHandler;
	p.itemMouseDown = _ZEN_Component_abstractComboBox_itemMouseDown;
	p.itemMouseUp = _ZEN_Component_abstractComboBox_itemMouseUp;
	p.onDelete = _ZEN_Component_abstractComboBox_onDelete;
	p.onEndModalHandler = _ZEN_Component_abstractComboBox_onEndModalHandler;
	p.onStartModalHandler = _ZEN_Component_abstractComboBox_onStartModalHandler;
	p.onresizeHandler = _ZEN_Component_abstractComboBox_onresizeHandler;
	p.renderDropdown = _ZEN_Component_abstractComboBox_renderDropdown;
	p.selectItem = _ZEN_Component_abstractComboBox_selectItem;
	p.setProperty = _ZEN_Component_abstractComboBox_setProperty;
	p.showDropdown = _ZEN_Component_abstractComboBox_showDropdown;
	p.startTimer = _ZEN_Component_abstractComboBox_startTimer;
	p.timerHandler = _ZEN_Component_abstractComboBox_timerHandler;
}

// ================================================================================
_zenClassIdx['combobox'] = '_ZEN_Component_combobox';
function _ZEN_Component_combobox(index,id) {
	if (index>=0) {_ZEN_Component_combobox__init(this,index,id);}
}

function _ZEN_Component_combobox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_abstractComboBox__init) ?zenMaster._ZEN_Component_abstractComboBox__init(o,index,id):_ZEN_Component_abstractComboBox__init(o,index,id);
	o.displayList = '';
	o.options = new Array();
	o.valueList = '';
}
function _ZEN_Component_combobox_serialize(set,s)
{
	s[0]='220596446';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.buttonCaption;s[9]=this.buttonImage;s[10]=this.buttonImageDown;s[11]=this.buttonTitle;s[12]=this.clientType;s[13]=this.comboType;s[14]=this.containerStyle;s[15]=this.controlClass;s[16]=this.controlStyle;s[17]=this.dataBinding;s[18]=this.delay;s[19]=(this.disabled?1:0);s[20]=this.displayList;s[21]=(this.dragEnabled?1:0);s[22]=(this.dropEnabled?1:0);s[23]=this.dropdownHeight;s[24]=this.dropdownWidth;s[25]=(this.dynamic?1:0);s[26]=(this.editable?1:0);s[27]=this.enclosingClass;s[28]=this.enclosingStyle;s[29]=this.error;s[30]=this.height;s[31]=(this.hidden?1:0);s[32]=this.hint;s[33]=this.hintClass;s[34]=this.hintStyle;s[35]=(this.hzScroll?1:0);s[36]=(this.invalid?1:0);s[37]=this.invalidMessage;s[38]=(this.isDropdownVisible?1:0);s[39]=this.label;s[40]=this.labelClass;s[41]=this.labelStyle;s[42]=this.maxlength;s[43]=this.onafterdrag;s[44]=this.onbeforedrag;s[45]=this.onblur;s[46]=this.onchange;s[47]=this.onclick;s[48]=this.ondblclick;s[49]=this.ondrag;s[50]=this.ondrop;s[51]=this.onfocus;s[52]=this.onhide;s[53]=this.onkeydown;s[54]=this.onkeypress;s[55]=this.onkeyup;s[56]=this.onmousedown;s[57]=this.onmouseout;s[58]=this.onmouseover;s[59]=this.onmouseup;s[60]=this.onrefresh;s[61]=this.onshow;s[62]=this.onsubmit;s[63]=this.onupdate;s[64]=this.onvalidate;s[65]=set.serializeList(this,this.options,true,'options');s[66]=this.originalValue;s[67]=this.overlayMode;s[68]=(this.readOnly?1:0);s[69]=this.renderFlag;s[70]=(this.required?1:0);s[71]=this.requiredMessage;s[72]=(this.scrollIntoView?1:0);s[73]=this.selectedIndex;s[74]=(this.showLabel?1:0);s[75]=this.size;s[76]=this.slice;s[77]=this.tabIndex;s[78]=this.text;s[79]=this.title;s[80]=this.tuple;s[81]=(this.unrestricted?1:0);s[82]=this.valign;s[83]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[84]=this.valueList;s[85]=(this.visible?1:0);s[86]=this.width;
}
function _ZEN_Component_combobox_getSettings(s)
{
	s['name'] = 'string';
	s['displayList'] = 'csv';
	s['valueList'] = 'csv';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_combobox_appendOption(value,text,style) {
var option = zenPage.createComponent('option');
if (value != null) option.value = value;
option.text = (text != null) ? text : option.value;
if (style != null) option.style = style;
this.options[this.options.length] = option;
}

function _ZEN_Component_combobox_getOption(idx) {
return ('' == this.valueList) ? this.options[idx] : null;
}

function _ZEN_Component_combobox_getOptionCount() {
return ('' == this.valueList) ? this.options.length : this.valueList.split(',').length;
}

function _ZEN_Component_combobox_getOptionText(idx) {
var text;
if ('' != this.valueList) {
if ('' != this.displayList) {
text = this.displayList.split(',')[idx];
}
else {
text = this.valueList.split(',')[idx];
}
}
else {
text = this.options[idx].text;
}
return (null == text) ? '' : text;
}

function _ZEN_Component_combobox_getOptionValue(idx) {
var value;
if ('' != this.valueList) {
value = this.valueList.split(',')[idx];
}
else {
value = this.options[idx].value;
}
return (null == value) ? '' : value;
}

function _ZEN_Component_combobox_removeOption(index) {
this.options.splice(index,1);
}

function _ZEN_Component_combobox_renderDropdown() {
var div = this.getDropDownDiv();
zenASSERT(div,'Unable to find DropDown element',arguments);
var html = new Array();
html[html.length] = '<table class="comboboxTable" width="100%" border="0" cellpadding="0" cellspacing="0">';
if ('' != this.valueList) {
var values = this.valueList.split(',');
var texts = (''==this.displayList) ? values : this.displayList.split(',');
for (var n = 0; n < values.length; n++) {
var val = values[n];
var text = texts[n];
text = (''==text) ? '&nbsp;' : text;
html[html.length] = '<tr id="item_'+n+'_'+this.index+'" class="comboboxItem" onmousedown="zenPage.getComponent('+this.index+').itemMouseDown(event,'+n+');" onmouseup="zenPage.getComponent('+this.index+').itemMouseUp(event,'+n+');"><td width="100%"><a href="#">'+text+'<\/a><\/td><\/tr>';
}
}
else {
for (var n = 0; n < this.options.length; n++) {
var option = this.options[n];
var val = option.value;
var text = option.text.toString();
text = ('' == text) ? '&nbsp;' : text;
html[html.length] = '<tr id="item_'+n+'_'+this.index+'" class="comboboxItem" onmousedown="zenPage.getComponent('+this.index+').itemMouseDown(event,'+n+');" onmouseup="zenPage.getComponent('+this.index+').itemMouseUp(event,'+n+');"><td style="'+option.style+'" width="100%"><a href="#">'+text+'<\/a><\/td><\/tr>';
}
}
html[html.length] = '<\/table>';
div.innerHTML = html.join("");
zenPage.lastModalIndex = this.index;
var input = this.findElement('input');
zenASSERT(input,'Unable to find input element',arguments);
input.focus();
this.isDropdownVisible = true;
this.findSelectedItem();
}

function _ZEN_Component_combobox_resetOptions() {
this.valueList = '';
this.displayList = '';
this.options.length = 0;
this.selectedIndex = -1;
this.text = '';
this.setValue('');
}

function _ZEN_Component_combobox_setOption(index,value,text,style) {
var option = this.options[index];
if (null != option) {
if (value != null) option.value = value;
option.text = (text != null) ? text : option.value;
if (style != null) option.style = style;
}
}

function _ZEN_Component_combobox_setProperty(property,value,value2) {
switch(property) {
case 'valueList':
if (this.valueList != value) {
this.valueList = value;
this.setValue(this.getValue());
}
break;
case 'displayList':
if (this.displayList != value) {
this.displayList = value;
this.setValue(this.getValue());
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_combobox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_combobox__Loader() {
	zenLoadClass('_ZEN_Component_abstractComboBox');
	_ZEN_Component_combobox.prototype = zenCreate('_ZEN_Component_abstractComboBox',-1);
	var p = _ZEN_Component_combobox.prototype;
	p.constructor = _ZEN_Component_combobox;
	p.superClass = ('undefined' == typeof _ZEN_Component_abstractComboBox) ? zenMaster._ZEN_Component_abstractComboBox.prototype:_ZEN_Component_abstractComboBox.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.combobox';
	p._type = 'combobox';
	p.serialize = _ZEN_Component_combobox_serialize;
	p.getSettings = _ZEN_Component_combobox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_combobox_ReallyRefreshContents;
	p.appendOption = _ZEN_Component_combobox_appendOption;
	p.getOption = _ZEN_Component_combobox_getOption;
	p.getOptionCount = _ZEN_Component_combobox_getOptionCount;
	p.getOptionText = _ZEN_Component_combobox_getOptionText;
	p.getOptionValue = _ZEN_Component_combobox_getOptionValue;
	p.removeOption = _ZEN_Component_combobox_removeOption;
	p.renderDropdown = _ZEN_Component_combobox_renderDropdown;
	p.resetOptions = _ZEN_Component_combobox_resetOptions;
	p.setOption = _ZEN_Component_combobox_setOption;
	p.setProperty = _ZEN_Component_combobox_setProperty;
}

// ================================================================================
_zenClassIdx['dataCombo'] = '_ZEN_Component_dataCombo';
function _ZEN_Component_dataCombo(index,id) {
	if (index>=0) {_ZEN_Component_dataCombo__init(this,index,id);}
}

function _ZEN_Component_dataCombo__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_abstractComboBox__init) ?zenMaster._ZEN_Component_abstractComboBox__init(o,index,id):_ZEN_Component_abstractComboBox__init(o,index,id);
	o.OnCreateResultSet = '';
	o.OnExecuteResultSet = '';
	o.auxColumn = '0';
	o.cached = false;
	o.choiceColumn = '2';
	o.clearOnLoad = false;
	o.columnHeaders = '';
	o.columnName = '';
	o.contentType = 'text';
	o.dataLoaded = false;
	o.displayColumns = '';
	o.groupByClause = '';
	o.itemCount = '0';
	o.loadingMessage = 'Loading...';
	o.maxRows = '100';
	o.modelClass = '';
	o.multiColumn = true;
	o.onshowDropdown = '';
	o.orderByClause = '';
	o.parameters = new Array();
	o.queryClass = '';
	o.queryName = '';
	o.searchKeyLen = '0';
	o.showEmpty = true;
	o.showQuery = false;
	o.sql = ''; // encrypted
	o.sqlLookup = ''; // encrypted
	o.tableName = '';
	o.valueColumn = '1';
	o.whereClause = '';
}
function _ZEN_Component_dataCombo_serialize(set,s)
{
	s[0]='712757170';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnCreateResultSet;s[7]=this.OnExecuteResultSet;s[8]=this.align;s[9]=this.aux;s[10]=this.auxColumn;s[11]=this.buttonCaption;s[12]=this.buttonImage;s[13]=this.buttonImageDown;s[14]=this.buttonTitle;s[15]=(this.cached?1:0);s[16]=this.choiceColumn;s[17]=(this.clearOnLoad?1:0);s[18]=this.clientType;s[19]=this.columnHeaders;s[20]=this.columnName;s[21]=this.comboType;s[22]=this.containerStyle;s[23]=this.contentType;s[24]=this.controlClass;s[25]=this.controlStyle;s[26]=this.dataBinding;s[27]=(this.dataLoaded?1:0);s[28]=this.delay;s[29]=(this.disabled?1:0);s[30]=this.displayColumns;s[31]=(this.dragEnabled?1:0);s[32]=(this.dropEnabled?1:0);s[33]=this.dropdownHeight;s[34]=this.dropdownWidth;s[35]=(this.dynamic?1:0);s[36]=(this.editable?1:0);s[37]=this.enclosingClass;s[38]=this.enclosingStyle;s[39]=this.error;s[40]=this.groupByClause;s[41]=this.height;s[42]=(this.hidden?1:0);s[43]=this.hint;s[44]=this.hintClass;s[45]=this.hintStyle;s[46]=(this.hzScroll?1:0);s[47]=(this.invalid?1:0);s[48]=this.invalidMessage;s[49]=(this.isDropdownVisible?1:0);s[50]=this.itemCount;s[51]=this.label;s[52]=this.labelClass;s[53]=this.labelStyle;s[54]=this.loadingMessage;s[55]=this.maxRows;s[56]=this.maxlength;s[57]=this.modelClass;s[58]=(this.multiColumn?1:0);s[59]=this.onafterdrag;s[60]=this.onbeforedrag;s[61]=this.onblur;s[62]=this.onchange;s[63]=this.onclick;s[64]=this.ondblclick;s[65]=this.ondrag;s[66]=this.ondrop;s[67]=this.onfocus;s[68]=this.onhide;s[69]=this.onkeydown;s[70]=this.onkeypress;s[71]=this.onkeyup;s[72]=this.onmousedown;s[73]=this.onmouseout;s[74]=this.onmouseover;s[75]=this.onmouseup;s[76]=this.onrefresh;s[77]=this.onshow;s[78]=this.onshowDropdown;s[79]=this.onsubmit;s[80]=this.onupdate;s[81]=this.onvalidate;s[82]=this.orderByClause;s[83]=this.originalValue;s[84]=this.overlayMode;s[85]=set.serializeList(this,this.parameters,true,'parameters');s[86]=this.queryClass;s[87]=this.queryName;s[88]=(this.readOnly?1:0);s[89]=this.renderFlag;s[90]=(this.required?1:0);s[91]=this.requiredMessage;s[92]=(this.scrollIntoView?1:0);s[93]=this.searchKeyLen;s[94]=this.selectedIndex;s[95]=(this.showEmpty?1:0);s[96]=(this.showLabel?1:0);s[97]=(this.showQuery?1:0);s[98]=this.size;s[99]=this.slice;s[100]=this.sql;s[101]=this.sqlLookup;s[102]=this.tabIndex;s[103]=this.tableName;s[104]=this.text;s[105]=this.title;s[106]=this.tuple;s[107]=(this.unrestricted?1:0);s[108]=this.valign;s[109]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[110]=this.valueColumn;s[111]=(this.visible?1:0);s[112]=this.whereClause;s[113]=this.width;
}
function _ZEN_Component_dataCombo_getSettings(s)
{
	s['name'] = 'string';
	s['cached'] = 'boolean';
	s['clearOnLoad'] = 'boolean';
	s['columnHeaders'] = 'csv';
	s['columnName'] = 'string';
	s['contentType'] = 'enum:text,html';
	s['groupByClause'] = 'string';
	s['loadingMessage'] = 'caption';
	s['maxRows'] = 'integer';
	s['multiColumn'] = 'boolean';
	s['onshowDropdown'] = 'eventHandler';
	s['orderByClause'] = 'string';
	s['parameters'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['searchKeyLen'] = 'integer';
	s['showEmpty'] = 'boolean';
	s['showQuery'] = 'boolean';
	s['sql'] = 'sql';
	s['tableName'] = 'string';
	s['whereClause'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dataCombo_clearCache() {
this.dataLoaded = false;
delete this._hasCache;
var cache = this.getCacheDiv();
if (cache) {
cache.innerHTML = '';
}
}

function _ZEN_Component_dataCombo_executeQuery(param) {
this.loadDropdown(param,false);
}

function _ZEN_Component_dataCombo_findDisplayValue(value) {
var text = this.invokeSuper('findDisplayValue',arguments);
if (null == text && ('' != this.sqlLookup)) {
var form = this.getForm();
if (form) {
var controller = form.getController();
if (controller) {
this.modelClass = controller.getProperty('modelClass');
}
}
text = this.LookupDisplayValue(value);
}
return text;
}

function _ZEN_Component_dataCombo_getAuxValue() {
if (this.selectedIndex < 0) return '';
var value = this.getOptionAux(this.selectedIndex);
return (null==value) ? '' : value;
}

function _ZEN_Component_dataCombo_getOptionAux(idx) {
var value = '';
var tr = self.document.getElementById('item_' + idx + '_' + this.index);
if (tr) {
value = tr.getAttribute('zenAux');
}
return value;
}

function _ZEN_Component_dataCombo_getOptionCount() {
return (this.itemCount!=null) ? this.itemCount : 0;
}

function _ZEN_Component_dataCombo_getOptionText(idx) {
var value = '';
var tr = self.document.getElementById('item_' + idx + '_' + this.index);
if (tr) {
value = tr.getAttribute('zenText');
}
return value;
}

function _ZEN_Component_dataCombo_getOptionValue(idx) {
var value = '';
var tr = self.document.getElementById('item_' + idx + '_' + this.index);
if (tr) {
value = tr.getAttribute('zenValue');
}
return value;
}

function _ZEN_Component_dataCombo_loadDropdown(value,show) {
value = (null == value) ? '' : value;
if (show) {
ret = zenInvokeCallbackMethod(this.onshowDropdown,this,'onshowDropdown');
if (null != ret) {
value = ret;
}
}
if (this.searchKeyLen >= 0) {
value = value.substr(0,this.searchKeyLen);
}
var cache = this.getCacheDiv();
if (this.cached && cache.innerHTML != '') {
this._hasCache = true;
if (null == this.lastValue && value == '') {
this.lastValue = '';
}
}
if (cache) {
if ((this._hasCache) && this.dataLoaded && (this.lastValue == value)) {
if (show) {
var div = this.getDropDownDiv();
div.innerHTML = cache.innerHTML;
cache.innerHTML = '';
delete this._hasCache;
var input = this.findElement('input');
input.focus();
this.isDropdownVisible = true;
this.findSelectedItem();
}
return;
}
else {
cache.innerHTML = '';
delete this._hasCache;
}
}
this.dataLoaded = false;
this.lastValue = value;
if (show) {
zenPage.lastModalIndex = this.index;
var div = this.getDropDownDiv();
this.startProgressBar(div);
div.innerHTML = '<span class="comboboxLoading">' + this.loadingMessage + '</span>';
}
this.modelClass = '';
var form = this.getForm();
if (form) {
var controller = form.getController();
if (controller) {
this.modelClass = controller.getProperty('modelClass');
}
}
this.LoadDropDownContents(value,show?0:1);
}

function _ZEN_Component_dataCombo_renderDropdown() {
var input = this.findElement('input');
zenASSERT(input,'Unable to find input element',arguments);
var value = input.value;
this.loadDropdown(value,true);
}

function _ZEN_Component_dataCombo_setProperty(property,value,value2) {
switch(property) {
case 'itemCount':
break;
case 'parameters':
if ('' != value) {
value = value - 1;
if (this.parameters[value]) {
if (this.parameters[value].value != value2) {
this.parameters[value].value = value2;
this.clearCache();
}
}
}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_dataCombo_LoadDropDownContents(searchParm,cached) {
	zenInstanceMethod(this,'LoadDropDownContents','L,B','',arguments);
}

function _ZEN_Component_dataCombo_LookupDisplayValue(value) {
	return zenInstanceMethod(this,'LookupDisplayValue','L','VARCHAR',arguments);
}

function _ZEN_Component_dataCombo_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dataCombo__Loader() {
	zenLoadClass('_ZEN_Component_abstractComboBox');
	_ZEN_Component_dataCombo.prototype = zenCreate('_ZEN_Component_abstractComboBox',-1);
	var p = _ZEN_Component_dataCombo.prototype;
	p.constructor = _ZEN_Component_dataCombo;
	p.superClass = ('undefined' == typeof _ZEN_Component_abstractComboBox) ? zenMaster._ZEN_Component_abstractComboBox.prototype:_ZEN_Component_abstractComboBox.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dataCombo';
	p._type = 'dataCombo';
	p.serialize = _ZEN_Component_dataCombo_serialize;
	p.getSettings = _ZEN_Component_dataCombo_getSettings;
	p.LoadDropDownContents = _ZEN_Component_dataCombo_LoadDropDownContents;
	p.LookupDisplayValue = _ZEN_Component_dataCombo_LookupDisplayValue;
	p.ReallyRefreshContents = _ZEN_Component_dataCombo_ReallyRefreshContents;
	p.clearCache = _ZEN_Component_dataCombo_clearCache;
	p.executeQuery = _ZEN_Component_dataCombo_executeQuery;
	p.findDisplayValue = _ZEN_Component_dataCombo_findDisplayValue;
	p.getAuxValue = _ZEN_Component_dataCombo_getAuxValue;
	p.getOptionAux = _ZEN_Component_dataCombo_getOptionAux;
	p.getOptionCount = _ZEN_Component_dataCombo_getOptionCount;
	p.getOptionText = _ZEN_Component_dataCombo_getOptionText;
	p.getOptionValue = _ZEN_Component_dataCombo_getOptionValue;
	p.loadDropdown = _ZEN_Component_dataCombo_loadDropdown;
	p.renderDropdown = _ZEN_Component_dataCombo_renderDropdown;
	p.setProperty = _ZEN_Component_dataCombo_setProperty;
}

// ================================================================================
_zenClassIdx['password'] = '_ZEN_Component_password';
function _ZEN_Component_password(index,id) {
	if (index>=0) {_ZEN_Component_password__init(this,index,id);}
}

function _ZEN_Component_password__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_text__init) ?zenMaster._ZEN_Component_text__init(o,index,id):_ZEN_Component_text__init(o,index,id);
	o.controlClass = 'password';
}
function _ZEN_Component_password_serialize(set,s)
{
	s[0]='1484169974';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.containerStyle;s[10]=this.controlClass;s[11]=this.controlStyle;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=(this.dragEnabled?1:0);s[15]=(this.dropEnabled?1:0);s[16]=(this.dynamic?1:0);s[17]=this.enclosingClass;s[18]=this.enclosingStyle;s[19]=this.error;s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.invalid?1:0);s[26]=this.invalidMessage;s[27]=this.label;s[28]=this.labelClass;s[29]=this.labelStyle;s[30]=this.maxlength;s[31]=this.onafterdrag;s[32]=this.onbeforedrag;s[33]=this.onblur;s[34]=this.onchange;s[35]=this.onclick;s[36]=this.ondblclick;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onfocus;s[40]=this.onhide;s[41]=this.onkeydown;s[42]=this.onkeypress;s[43]=this.onkeyup;s[44]=this.onmousedown;s[45]=this.onmouseout;s[46]=this.onmouseover;s[47]=this.onmouseup;s[48]=this.onrefresh;s[49]=this.onshow;s[50]=this.onsubmit;s[51]=this.onupdate;s[52]=this.onvalidate;s[53]=this.originalValue;s[54]=this.overlayMode;s[55]=(this.readOnly?1:0);s[56]=this.renderFlag;s[57]=(this.required?1:0);s[58]=this.requiredMessage;s[59]=(this.showLabel?1:0);s[60]=this.size;s[61]=this.slice;s[62]=this.tabIndex;s[63]=this.title;s[64]=this.tuple;s[65]=this.valign;s[66]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[67]=(this.visible?1:0);s[68]=this.width;
}
function _ZEN_Component_password_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_password_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_password__Loader() {
	zenLoadClass('_ZEN_Component_text');
	_ZEN_Component_password.prototype = zenCreate('_ZEN_Component_text',-1);
	var p = _ZEN_Component_password.prototype;
	p.constructor = _ZEN_Component_password;
	p.superClass = ('undefined' == typeof _ZEN_Component_text) ? zenMaster._ZEN_Component_text.prototype:_ZEN_Component_text.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.password';
	p._type = 'password';
	p.serialize = _ZEN_Component_password_serialize;
	p.getSettings = _ZEN_Component_password_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_password_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['textarea'] = '_ZEN_Component_textarea';
function _ZEN_Component_textarea(index,id) {
	if (index>=0) {_ZEN_Component_textarea__init(this,index,id);}
}

function _ZEN_Component_textarea__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_control__init) ?zenMaster._ZEN_Component_control__init(o,index,id):_ZEN_Component_control__init(o,index,id);
	o.cols = '';
	o.controlClass = 'textarea';
	o.modFlag = false;
	o.rows = '';
}
function _ZEN_Component_textarea_serialize(set,s)
{
	s[0]='1330560528';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.clientType;s[9]=this.cols;s[10]=this.containerStyle;s[11]=this.controlClass;s[12]=this.controlStyle;s[13]=this.dataBinding;s[14]=(this.disabled?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=(this.invalid?1:0);s[27]=this.invalidMessage;s[28]=this.label;s[29]=this.labelClass;s[30]=this.labelStyle;s[31]=(this.modFlag?1:0);s[32]=this.onafterdrag;s[33]=this.onbeforedrag;s[34]=this.onblur;s[35]=this.onchange;s[36]=this.onclick;s[37]=this.ondblclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onfocus;s[41]=this.onhide;s[42]=this.onkeydown;s[43]=this.onkeypress;s[44]=this.onkeyup;s[45]=this.onmousedown;s[46]=this.onmouseout;s[47]=this.onmouseover;s[48]=this.onmouseup;s[49]=this.onrefresh;s[50]=this.onshow;s[51]=this.onsubmit;s[52]=this.onupdate;s[53]=this.onvalidate;s[54]=this.originalValue;s[55]=this.overlayMode;s[56]=(this.readOnly?1:0);s[57]=this.renderFlag;s[58]=(this.required?1:0);s[59]=this.requiredMessage;s[60]=this.rows;s[61]=(this.showLabel?1:0);s[62]=this.slice;s[63]=this.tabIndex;s[64]=this.title;s[65]=this.tuple;s[66]=this.valign;s[67]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[68]=(this.visible?1:0);s[69]=this.width;
}
function _ZEN_Component_textarea_getSettings(s)
{
	s['name'] = 'string';
	s['cols'] = 'integer';
	s['modFlag'] = 'boolean';
	s['rows'] = 'integer';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_textarea_isModified() {
return (''==this.originalValue) ? this.modFlag : (this.originalValue != this.value);
}

function _ZEN_Component_textarea_onchangeHandler() {
this.modFlag = true;
return this.invokeSuper('onchangeHandler',arguments);
}

function _ZEN_Component_textarea_onloadHandler() {
var el = this.findElement('control');
if (el) {
el.value = this.value;
}
}

function _ZEN_Component_textarea_setProperty(property,value,value2) {
var el = this.findElement('control');
switch(property) {
case 'originalValue':
this.modFlag = false;
if ('string'==typeof this.value && this.value.length < 50) {
this.originalValue = this.value;
}
else {
this.originalValue = '';
}
break;
case 'rows':
this.rows = value;
if (el) { el.rows = value; }
break;
case 'cols':
this.cols = value;
if (el) { el.cols = value; }
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_textarea_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_textarea__Loader() {
	zenLoadClass('_ZEN_Component_control');
	_ZEN_Component_textarea.prototype = zenCreate('_ZEN_Component_control',-1);
	var p = _ZEN_Component_textarea.prototype;
	p.constructor = _ZEN_Component_textarea;
	p.superClass = ('undefined' == typeof _ZEN_Component_control) ? zenMaster._ZEN_Component_control.prototype:_ZEN_Component_control.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.textarea';
	p._type = 'textarea';
	p.serialize = _ZEN_Component_textarea_serialize;
	p.getSettings = _ZEN_Component_textarea_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_textarea_ReallyRefreshContents;
	p.isModified = _ZEN_Component_textarea_isModified;
	p.onchangeHandler = _ZEN_Component_textarea_onchangeHandler;
	p.onloadHandler = _ZEN_Component_textarea_onloadHandler;
	p.setProperty = _ZEN_Component_textarea_setProperty;
}

// ================================================================================
_zenClassIdx['csComboBoxItem'] = '_ZEN_Component_csComboBoxItem';
function _ZEN_Component_csComboBoxItem(index,id) {
	if (index>=0) {_ZEN_Component_csComboBoxItem__init(this,index,id);}
}

function _ZEN_Component_csComboBoxItem__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.caption = '';
	o.contextKey = '';
	o.value = '';
}
function _ZEN_Component_csComboBoxItem_serialize(set,s)
{
	s[0]='3718680994';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.containerStyle;s[10]=this.contextKey;s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.onafterdrag;s[26]=this.onbeforedrag;s[27]=this.ondrag;s[28]=this.ondrop;s[29]=this.onhide;s[30]=this.onrefresh;s[31]=this.onshow;s[32]=this.onupdate;s[33]=this.overlayMode;s[34]=this.renderFlag;s[35]=(this.showLabel?1:0);s[36]=this.slice;s[37]=this.title;s[38]=this.tuple;s[39]=this.valign;s[40]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[41]=(this.visible?1:0);s[42]=this.width;
}
function _ZEN_Component_csComboBoxItem_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'string';
	s['contextKey'] = 'string';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_csComboBoxItem_onloadHandler() {
ZMS.initialize();
var div=this.getEnclosingDiv();
for (var k=div.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.className=="csComboBoxItem") {
ZMS.createComboItemSubtree(k);
div.item=k;
return;
}
}
}

function _ZEN_Component_csComboBoxItem_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_csComboBoxItem_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_csComboBoxItem__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_csComboBoxItem.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_csComboBoxItem.prototype;
	p.constructor = _ZEN_Component_csComboBoxItem;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.csComboBoxItem';
	p._type = 'csComboBoxItem';
	p.serialize = _ZEN_Component_csComboBoxItem_serialize;
	p.getSettings = _ZEN_Component_csComboBoxItem_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_csComboBoxItem_ReallyRefreshContents;
	p.onloadHandler = _ZEN_Component_csComboBoxItem_onloadHandler;
	p.setProperty = _ZEN_Component_csComboBoxItem_setProperty;
}

// ================================================================================
_zenClassIdx['csMenuSeparator'] = '_ZEN_Component_csMenuSeparator';
function _ZEN_Component_csMenuSeparator(index,id) {
	if (index>=0) {_ZEN_Component_csMenuSeparator__init(this,index,id);}
}

function _ZEN_Component_csMenuSeparator__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
}
function _ZEN_Component_csMenuSeparator_serialize(set,s)
{
	s[0]='1038571008';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.onupdate;s[31]=this.overlayMode;s[32]=this.renderFlag;s[33]=(this.showLabel?1:0);s[34]=this.slice;s[35]=this.title;s[36]=this.tuple;s[37]=this.valign;s[38]=(this.visible?1:0);s[39]=this.width;
}
function _ZEN_Component_csMenuSeparator_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_csMenuSeparator_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_csMenuSeparator_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_csMenuSeparator__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_csMenuSeparator.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_csMenuSeparator.prototype;
	p.constructor = _ZEN_Component_csMenuSeparator;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.csMenuSeparator';
	p._type = 'csMenuSeparator';
	p.serialize = _ZEN_Component_csMenuSeparator_serialize;
	p.getSettings = _ZEN_Component_csMenuSeparator_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_csMenuSeparator_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_csMenuSeparator_setProperty;
}

// ================================================================================
_zenClassIdx['dynaTree'] = '_ZEN_Component_dynaTree';
function _ZEN_Component_dynaTree(index,id) {
	if (index>=0) {_ZEN_Component_dynaTree__init(this,index,id);}
}

function _ZEN_Component_dynaTree__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.OnGetNodeInfo = '';
	o.OnGetTreeInfo = '';
	o.childIndent = '20';
	o.dataGlobal = ''; // encrypted
	o.imageContracted = '';
	o.imageExpanded = '';
	o.imageFolderClosed = '';
	o.imageFolderOpen = '';
	o.imageNode = '';
	o.nodeCount = '0';
	o.onchange = '';
	o.onclick = '';
	o.ondblclick = '';
	o.parameters = new Object();
	o.selectedIndex = '-1';
	o.showLines = false;
	o.text = '';
	o.value = '';
}
function _ZEN_Component_dynaTree_serialize(set,s)
{
	s[0]='3016110941';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnGetNodeInfo;s[7]=this.OnGetTreeInfo;s[8]=this.align;s[9]=this.aux;s[10]=this.childIndent;s[11]=this.containerStyle;s[12]=this.dataGlobal;s[13]=(this.dragEnabled?1:0);s[14]=(this.dropEnabled?1:0);s[15]=(this.dynamic?1:0);s[16]=this.enclosingClass;s[17]=this.enclosingStyle;s[18]=this.error;s[19]=this.height;s[20]=(this.hidden?1:0);s[21]=this.hint;s[22]=this.hintClass;s[23]=this.hintStyle;s[24]=this.imageContracted;s[25]=this.imageExpanded;s[26]=this.imageFolderClosed;s[27]=this.imageFolderOpen;s[28]=this.imageNode;s[29]=this.label;s[30]=this.labelClass;s[31]=this.labelStyle;s[32]=this.nodeCount;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.onchange;s[36]=this.onclick;s[37]=this.ondblclick;s[38]=this.ondrag;s[39]=this.ondrop;s[40]=this.onhide;s[41]=this.onrefresh;s[42]=this.onshow;s[43]=this.onupdate;s[44]=this.overlayMode;s[45]=set.serializeArray(this,this.parameters,true,'parameters');s[46]=this.renderFlag;s[47]=this.selectedIndex;s[48]=(this.showLabel?1:0);s[49]=(this.showLines?1:0);s[50]=this.slice;s[51]=this.text;s[52]=this.title;s[53]=this.tuple;s[54]=this.valign;s[55]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[56]=(this.visible?1:0);s[57]=this.width;
}
function _ZEN_Component_dynaTree_getSettings(s)
{
	s['name'] = 'string';
	s['childIndent'] = 'length';
	s['dataGlobal'] = 'glvn';
	s['imageContracted'] = 'uri';
	s['imageExpanded'] = 'uri';
	s['imageFolderClosed'] = 'uri';
	s['imageFolderOpen'] = 'uri';
	s['imageNode'] = 'uri';
	s['onchange'] = 'eventHandler';
	s['onclick'] = 'eventHandler';
	s['ondblclick'] = 'eventHandler';
	s['parameters'] = 'string';
	s['selectedIndex'] = 'integer';
	s['showLines'] = 'boolean';
	s['text'] = 'string';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dynaTree_dragStartHandler(dragData) {
var ok = false;
var dragItem = this._dragSource;
if (null != dragItem) {
dragData.sourceItem = dragItem;
delete this._dragSource;
var anchor = this.findElement('a_' + dragItem);
if (anchor) {
ok = true;
dragData.value = this.getNodeValue(dragItem);
if ('' == dragData.value) {
return false;
}
dragData.text = this.getNodeText(dragItem);
var icon = anchor.parentNode.cloneNode(true);
icon.style.position="absolute";
icon.style.border ="1px solid darkgray";
icon.style.background ="#D0D0F0";
ZLM.setDragAvatar(icon);
}
}
return ok;
}

function _ZEN_Component_dynaTree_expandAll(flag) {
var n = 0;
while(this.findElement('a_' + n)) {
var div = this.findElement('exp_' + n);
if (div) {
var img = this.findElement('image_' + n);
var icon = this.findElement('icon_' + n);
div.style.display = flag ? '' : 'none';
img.src = this.getExpandoImage(img.src, flag);
if (icon) {
icon.src = flag ? this.imageFolderOpen : this.imageFolderClosed;
}
}
n++;
}
}

function _ZEN_Component_dynaTree_getExpandoImage(src,expanded) {
if (this.showLines) {
if (src.indexOf('plus-') != -1) {
return expanded ? src.split('plus-').join('minus-') : src;
}
else {
return expanded ? src : src.split('minus-').join('plus-');
}
}
return expanded ? this.imageExpanded : this.imageContracted;
}

function _ZEN_Component_dynaTree_getNodeParent(nodeNo) {
var p = null;
var anchor = this.findElement('a_' + nodeNo);
if (anchor) {
p = anchor.getAttribute('zenParent');
}
return (p==null) ? -1 : p;
}

function _ZEN_Component_dynaTree_getNodeText(nodeNo) {
if (null == nodeNo) { nodeNo = this.selectedIndex; }
var anchor = this.findElement('a_' + nodeNo);
if (anchor) {
return anchor.getAttribute('zenText');
}
return null;
}

function _ZEN_Component_dynaTree_getNodeValue(nodeNo) {
if (null == nodeNo) { nodeNo = this.selectedIndex; }
var anchor = this.findElement('a_' + nodeNo);
if (anchor) {
return anchor.getAttribute('zenValue');
}
return null;
}

function _ZEN_Component_dynaTree_getSelectedIndex() {
return this.selectedIndex;
}

function _ZEN_Component_dynaTree_getValue() {
var val = null;
if (this.selectedIndex >=0) {
var anchor = this.findElement('a_' + this.selectedIndex);
if (anchor) {
val = anchor.getAttribute('zenValue');
}
}
return (val == null) ? '' : val;
}

function _ZEN_Component_dynaTree_itemClicked(idx,level) {
this.selectItem(idx);
var ret = zenInvokeCallbackMethod(this.onclick,this,'onclick','level',level);
return (null==ret) ? true : ret;
}

function _ZEN_Component_dynaTree_itemDblClicked(idx,level) {
var ret = zenInvokeCallbackMethod(this.ondblclick,this,'ondblclick','level',level);
return (null==ret) ? true : ret;
}

function _ZEN_Component_dynaTree_itemKeyPress(evt,idx,canExpand) {
if (canExpand) {
if ((32 == evt.charCode) || (32 == evt.keyCode)) {
this.toggleExpanded(idx);
return true;
}
}
return false;
}

function _ZEN_Component_dynaTree_itemMouseDown(evt,idx) {
if (this.dragEnabled) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
this._dragSource = idx;
this.selectItem(idx);
}
}

function _ZEN_Component_dynaTree_itemMouseUp(evt) {
if (this.dragEnabled) {
evt = evt ? evt : window.event;
if (evt.preventDefault) {
evt.preventDefault();
}
delete this._dragSource;
}
}

function _ZEN_Component_dynaTree_reloadNode(nodeNo) {
var anchor = this.findElement('a_' + nodeNo);
var div = this.findElement('exp_' + nodeNo);
if (anchor && div) {
anchor.setAttribute('zenLoad',0);
var state = anchor.getAttribute('zenState');
var value = anchor.getAttribute('zenValue');
var level = parseInt(anchor.getAttribute('zenLevel'));
div.innerHTML = '<div style="font-size:8pt; color: blue; padding-left:'+((level+2)*16)+ 'px;">loading...</div>';
this.LoadSubTree(nodeNo,level,value,state);
return true;
}
return false;
}

function _ZEN_Component_dynaTree_selectItem(idx) {
if (-1 != this.selectedIndex) {
var anchor = this.findElement('a_' + this.selectedIndex);
if (anchor) {
anchor.className = 'DynaTreeItem';
}
}
this.selectedIndex = idx;
this.text = '';
this.value = '';
if (-1 != this.selectedIndex) {
var anchor = this.findElement('a_' + this.selectedIndex);
if (anchor) {
anchor.className = 'dynaTreeItemSelected';
this.text = anchor.getAttribute('zenText');
this.value = anchor.getAttribute('zenValue');
}
}
zenInvokeCallbackMethod(this.onchange,this,'onchange');
}

function _ZEN_Component_dynaTree_setNodeStyle(nodeNo,style) {
var anchor = this.findElement('a_' + nodeNo);
if (anchor) {
anchor.style.cssText = style;
}
}

function _ZEN_Component_dynaTree_setNodeText(nodeNo,text) {
var anchor = this.findElement('a_' + nodeNo);
if (anchor) {
anchor.setAttribute('zenText',text);
anchor.innerHTML = text + '&nbsp;';
}
}

function _ZEN_Component_dynaTree_setNodeValue(nodeNo,value) {
var anchor = this.findElement('a_' + nodeNo);
if (anchor) {
anchor.setAttribute('zenValue',value);
}
}

function _ZEN_Component_dynaTree_setProperty(property,value,value2) {
switch(property) {
case 'OnGetTreeInfo':
if (this.OnGetTreeInfo != value) {
this.OnGetTreeInfo = value;
this.refreshContents(true);
}
break;
case 'OnGetNodeInfo':
if (this.OnGetNodeInfo != value) {
this.OnGetNodeInfo = value;
this.refreshContents(true);
}
break;
case 'childIndent':
case 'imageExpanded':
case 'imageContracted':
case 'imageFolderOpen':
case 'imageFolderClosed':
if (this[property] != value) {
this[property] = value;
this.refreshContents();
}
break;
case 'showLines':
value = value ? true : false;
if (this.showLines != value) {
this.showLines = value;
this.refreshContents();
}
break;
case 'parameters':
if ('' != value) {
if (this.parameters[value]) {
if (this.parameters[value].value != value2) {
this.parameters[value].value = value2;
this.refreshContents();
}
}
}
break;
case 'text':
case 'value':
break;
case 'selectedIndex':
this.selectItem(value);
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_dynaTree_toggleExpanded(nodeNo) {
var anchor = this.findElement('a_' + nodeNo);
var div = this.findElement('exp_' + nodeNo);
zenASSERT(div,'Unable to find div element for children',arguments);
var img = this.findElement('image_' + nodeNo);
zenASSERT(img,'Unable to find image element for children',arguments);
var icon = this.findElement('icon_' + nodeNo);
var expanded = !(div.style.display == '');
div.style.display = expanded ? '' : 'none';
img.src = this.getExpandoImage(img.src, expanded);
if (icon) {
icon.src = expanded ? this.imageFolderOpen : this.imageFolderClosed;
}
if (anchor && expanded && (1 == parseInt(anchor.getAttribute('zenLoad')))) {
anchor.setAttribute('zenLoad',0);
var state = anchor.getAttribute('zenState');
var value = anchor.getAttribute('zenValue');
var level = parseInt(anchor.getAttribute('zenLevel'));
div.innerHTML = '<div style="font-size:8pt; color: blue; padding-left:'+((level+2)*16)+ 'px;">loading...</div>';
this.LoadSubTree(nodeNo,level,value,state);
}
return false;
}

function _ZEN_Component_dynaTree_LoadSubTree(pNodeNo,pLevel,pValue,pState) {
	zenInstanceMethod(this,'LoadSubTree','L,L,L,L','',arguments);
}

function _ZEN_Component_dynaTree_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dynaTree__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_dynaTree.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_dynaTree.prototype;
	p.constructor = _ZEN_Component_dynaTree;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dynaTree';
	p._type = 'dynaTree';
	p.serialize = _ZEN_Component_dynaTree_serialize;
	p.getSettings = _ZEN_Component_dynaTree_getSettings;
	p.LoadSubTree = _ZEN_Component_dynaTree_LoadSubTree;
	p.ReallyRefreshContents = _ZEN_Component_dynaTree_ReallyRefreshContents;
	p.dragStartHandler = _ZEN_Component_dynaTree_dragStartHandler;
	p.expandAll = _ZEN_Component_dynaTree_expandAll;
	p.getExpandoImage = _ZEN_Component_dynaTree_getExpandoImage;
	p.getNodeParent = _ZEN_Component_dynaTree_getNodeParent;
	p.getNodeText = _ZEN_Component_dynaTree_getNodeText;
	p.getNodeValue = _ZEN_Component_dynaTree_getNodeValue;
	p.getSelectedIndex = _ZEN_Component_dynaTree_getSelectedIndex;
	p.getValue = _ZEN_Component_dynaTree_getValue;
	p.itemClicked = _ZEN_Component_dynaTree_itemClicked;
	p.itemDblClicked = _ZEN_Component_dynaTree_itemDblClicked;
	p.itemKeyPress = _ZEN_Component_dynaTree_itemKeyPress;
	p.itemMouseDown = _ZEN_Component_dynaTree_itemMouseDown;
	p.itemMouseUp = _ZEN_Component_dynaTree_itemMouseUp;
	p.reloadNode = _ZEN_Component_dynaTree_reloadNode;
	p.selectItem = _ZEN_Component_dynaTree_selectItem;
	p.setNodeStyle = _ZEN_Component_dynaTree_setNodeStyle;
	p.setNodeText = _ZEN_Component_dynaTree_setNodeText;
	p.setNodeValue = _ZEN_Component_dynaTree_setNodeValue;
	p.setProperty = _ZEN_Component_dynaTree_setProperty;
	p.toggleExpanded = _ZEN_Component_dynaTree_toggleExpanded;
}

// ================================================================================
_zenClassIdx['dynaView'] = '_ZEN_Component_dynaView';
function _ZEN_Component_dynaView(index,id) {
	if (index>=0) {_ZEN_Component_dynaView__init(this,index,id);}
}

function _ZEN_Component_dynaView__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.OnGetViewContents = '';
	o.itemCount = '0';
	o.onchange = '';
	o.onclick = '';
	o.ondblclick = '';
	o.onselect = '';
	o.parameters = new Object();
	o.rows = '5';
	o.selectedIndex = '-1';
	o.text = '';
	o.value = '';
	o.viewType = 'list';
	o.onCreate();
}
function _ZEN_Component_dynaView_serialize(set,s)
{
	s[0]='3279291046';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnGetViewContents;s[7]=this.align;s[8]=this.aux;s[9]=this.containerStyle;s[10]=(this.dragEnabled?1:0);s[11]=(this.dropEnabled?1:0);s[12]=(this.dynamic?1:0);s[13]=this.enclosingClass;s[14]=this.enclosingStyle;s[15]=this.error;s[16]=this.height;s[17]=(this.hidden?1:0);s[18]=this.hint;s[19]=this.hintClass;s[20]=this.hintStyle;s[21]=this.itemCount;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.onafterdrag;s[26]=this.onbeforedrag;s[27]=this.onchange;s[28]=this.onclick;s[29]=this.ondblclick;s[30]=this.ondrag;s[31]=this.ondrop;s[32]=this.onhide;s[33]=this.onrefresh;s[34]=this.onselect;s[35]=this.onshow;s[36]=this.onupdate;s[37]=this.overlayMode;s[38]=set.serializeArray(this,this.parameters,true,'parameters');s[39]=this.renderFlag;s[40]=this.rows;s[41]=this.selectedIndex;s[42]=(this.showLabel?1:0);s[43]=this.slice;s[44]=this.text;s[45]=this.title;s[46]=this.tuple;s[47]=this.valign;s[48]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[49]=this.viewType;s[50]=(this.visible?1:0);s[51]=this.width;
}
function _ZEN_Component_dynaView_getSettings(s)
{
	s['name'] = 'string';
	s['onchange'] = 'eventHandler';
	s['onclick'] = 'eventHandler';
	s['ondblclick'] = 'eventHandler';
	s['onselect'] = 'eventHandler';
	s['parameters'] = 'string';
	s['rows'] = 'integer';
	s['selectedIndex'] = 'integer';
	s['text'] = 'string';
	s['value'] = 'string';
	s['viewType'] = 'enum:details,list';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_dynaView_dvKeyBlur() {
this.hasFocus = false;
this.selectItem(this.selectedIndex);
}

function _ZEN_Component_dynaView_dvKeyDownHandler(evt) {
if (this.disabled) return false;
evt = evt ? evt : window.event;
var ret = true;
var row = this.currRow;
var col = this.currColumn;
switch(evt.keyCode) {
case zenENTER:
zenInvokeCallbackMethod(this.onselect,this,'onselect');
break;
case zenPAGEUP:
ret = !this.moveToItem('pageup');
break;
case zenPAGEDN:
ret = !this.moveToItem('pagedn');
break;
case zenEND:
ret = !this.moveToItem('end');
break;
case zenHOME:
ret = !this.moveToItem('home');
break;
case zenUP:
ret = !this.moveToItem('up');
break;
case zenDOWN:
ret = !this.moveToItem('down');
break;
case zenRIGHT:
ret = !this.moveToItem('right');
break;
case zenLEFT:
ret = !this.moveToItem('left');
break;
default:
break;
}
if (!ret) {
if (evt.preventDefault) {
evt.preventDefault();
}
evt.cancelBubble = true;
}
return ret;
}

function _ZEN_Component_dynaView_dvKeyFocus() {
this.hasFocus = true;
this.selectItem(this.selectedIndex);
}

function _ZEN_Component_dynaView_dvKeyPressHandler(evt) {
if (this.disabled) return false;
evt = evt ? evt : window.event;
var ret = true;
switch(evt.keyCode) {
default:
break;
}
return ret;
}

function _ZEN_Component_dynaView_focus() {
var inv = this.findElement('invisible');
if (inv) {
inv.focus();
}
}

function _ZEN_Component_dynaView_itemClicked(idx) {
this.focus();
this.selectItem(idx,false);
zenInvokeCallbackMethod(this.onclick,this,'onclick');
}

function _ZEN_Component_dynaView_itemDblClicked(idx) {
zenInvokeCallbackMethod(this.ondblclick,this,'ondblclick');
zenInvokeCallbackMethod(this.onselect,this,'onselect');
}

function _ZEN_Component_dynaView_moveToItem(dir) {
var ret = false;
var idx = this.selectedIndex;
var size = this.itemCount;
switch (this.viewType) {
case 'list':
switch(dir) {
case 'up':
if (idx > 0) {
ret = true;
this.selectItem(idx-1);
}
break;
case 'down':
if (idx < size-1) {
ret = true;
this.selectItem(idx+1);
}
break;
case 'left':
if (idx >= this.rows) {
ret = true;
this.selectItem(idx - this.rows);
}
break;
case 'right':
if (idx+this.rows < size) {
ret = true;
this.selectItem(idx + this.rows);
}
break;
case 'home':
if (size > 0) {
ret = true;
this.selectItem(0);
}
break;
case 'end':
if (size > 0) {
ret = true;
this.selectItem(size - 1);
}
break;
}
break;
case 'details':
switch(dir) {
case 'up':
if (idx > 0) {
ret = true;
this.selectItem(idx-1);
}
break;
case 'down':
if (idx < size-1) {
ret = true;
this.selectItem(idx+1);
}
break;
case 'home':
if (size > 0) {
ret = true;
this.selectItem(0);
}
break;
case 'end':
if (size > 0) {
ret = true;
this.selectItem(size - 1);
}
break;
case 'pageup':
if (size > 0) {
ret = true;
idx = idx > 10 ? idx - 10 : 0;
this.selectItem(idx);
}
break;
case 'pagedn':
if (size > 0) {
ret = true;
idx = idx < (size - 10) ? idx + 10 : size-1;
this.selectItem(idx);
}
break;
}
break;
}
return ret;
}

function _ZEN_Component_dynaView_onCreate() {
this.hasFocus = false;
}

function _ZEN_Component_dynaView_selectItem(idx,scroll) {
scroll = (null == scroll) ? true : scroll;
if ((idx != this.selectedIndex) && (-1 != this.selectedIndex)) {
var td = this.findElement('td_' + this.selectedIndex);
if (td) {
td.className = 'dynaViewItem';
}
}
this.selectedIndex = idx;
this.text = '';
this.value = '';
if (-1 != this.selectedIndex) {
var td = this.findElement('td_' + this.selectedIndex);
if (td) {
td.className = this.hasFocus ? 'dynaViewItemFocus' : 'dynaViewItemSelected';
this.text = td.getAttribute('zenText');
this.value = td.getAttribute('zenValue');
if (scroll) {
if ('details' == this.viewType && 0==this.selectedIndex) {
this.getEnclosingDiv().scrollTop = 0;
}
else {
zenScrollIntoView(this.getEnclosingDiv(),td);
}
}
}
}
zenInvokeCallbackMethod(this.onchange,this,'onchange');
}

function _ZEN_Component_dynaView_setProperty(property,value,value2) {
switch(property) {
case 'rows':
if (this.rows != value) {
this.rows = value;
this.refreshContents(true);
this.selectItem(this.selectedIndex);
}
break;
case 'viewType':
if (this.viewType != value) {
this.viewType = value;
this.refreshContents(true);
this.selectItem(this.selectedIndex);
}
break;
case 'parameters':
if ('' != value) {
if (this.parameters[value]) {
if (this.parameters[value].value != value2) {
this.parameters[value].value = value2;
this.refreshContents();
}
}
}
break;
case 'text':
case 'value':
break;
case 'selectedIndex':
this.selectItem(value,true);
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_dynaView_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_dynaView__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_dynaView.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_dynaView.prototype;
	p.constructor = _ZEN_Component_dynaView;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.dynaView';
	p._type = 'dynaView';
	p.serialize = _ZEN_Component_dynaView_serialize;
	p.getSettings = _ZEN_Component_dynaView_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_dynaView_ReallyRefreshContents;
	p.dvKeyBlur = _ZEN_Component_dynaView_dvKeyBlur;
	p.dvKeyDownHandler = _ZEN_Component_dynaView_dvKeyDownHandler;
	p.dvKeyFocus = _ZEN_Component_dynaView_dvKeyFocus;
	p.dvKeyPressHandler = _ZEN_Component_dynaView_dvKeyPressHandler;
	p.focus = _ZEN_Component_dynaView_focus;
	p.itemClicked = _ZEN_Component_dynaView_itemClicked;
	p.itemDblClicked = _ZEN_Component_dynaView_itemDblClicked;
	p.moveToItem = _ZEN_Component_dynaView_moveToItem;
	p.onCreate = _ZEN_Component_dynaView_onCreate;
	p.selectItem = _ZEN_Component_dynaView_selectItem;
	p.setProperty = _ZEN_Component_dynaView_setProperty;
}

// ================================================================================
_zenClassIdx['helpBox'] = '_ZEN_Component_helpBox';
function _ZEN_Component_helpBox(index,id) {
	if (index>=0) {_ZEN_Component_helpBox__init(this,index,id);}
}

function _ZEN_Component_helpBox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
}
function _ZEN_Component_helpBox_serialize(set,s)
{
	s[0]='1038571008';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.onupdate;s[31]=this.overlayMode;s[32]=this.renderFlag;s[33]=(this.showLabel?1:0);s[34]=this.slice;s[35]=this.title;s[36]=this.tuple;s[37]=this.valign;s[38]=(this.visible?1:0);s[39]=this.width;
}
function _ZEN_Component_helpBox_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_helpBox_showHelp(flag,title,msg) {
var div = this.findElement('helpBoxDiv');
zenASSERT(ctrl,"Unable to find div element.",arguments);
if (flag) {
div.className = 'helpBoxOn';
title = (!title || ''==title) ? 'Help' : title;
msg = (!msg || ''==msg) ? '&nbsp;' : msg;
div.innerHTML = '<div class="helpBoxTitle">'+title+'</div><div class="helpBoxMsg">'+msg+'</div>';
}
else {
div.className = 'helpBoxOff';
div.innerHTML = '&nbsp;';
}
}

function _ZEN_Component_helpBox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_helpBox__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_helpBox.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_helpBox.prototype;
	p.constructor = _ZEN_Component_helpBox;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.helpBox';
	p._type = 'helpBox';
	p.serialize = _ZEN_Component_helpBox_serialize;
	p.getSettings = _ZEN_Component_helpBox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_helpBox_ReallyRefreshContents;
	p.showHelp = _ZEN_Component_helpBox_showHelp;
}

// ================================================================================
_zenClassIdx['html'] = '_ZEN_Component_html';
function _ZEN_Component_html(index,id) {
	if (index>=0) {_ZEN_Component_html__init(this,index,id);}
}

function _ZEN_Component_html__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.OnDrawContent = '';
	o.content = '';
	o.seed = '';
}
function _ZEN_Component_html_serialize(set,s)
{
	s[0]='2123968296';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnDrawContent;s[7]=this.align;s[8]=this.aux;s[9]=this.containerStyle;s[10]=this.content;s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.onafterdrag;s[26]=this.onbeforedrag;s[27]=this.ondrag;s[28]=this.ondrop;s[29]=this.onhide;s[30]=this.onrefresh;s[31]=this.onshow;s[32]=this.onupdate;s[33]=this.overlayMode;s[34]=this.renderFlag;s[35]=this.seed;s[36]=(this.showLabel?1:0);s[37]=this.slice;s[38]=this.title;s[39]=this.tuple;s[40]=this.valign;s[41]=(this.visible?1:0);s[42]=this.width;
}
function _ZEN_Component_html_getSettings(s)
{
	s['name'] = 'string';
	s['content'] = 'html';
	s['seed'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_html_getContent(content) {
return this.content;
}

function _ZEN_Component_html_setContent(content) {
this.setProperty('content',content);
}

function _ZEN_Component_html_setProperty(property,value,value2) {
switch(property) {
case 'content':
var div = this.getEnclosingDiv();
zenASSERT(div!=null,'Unable to find html div element.',arguments);
value = value ? value : '';
this.content = value.toString();
if (-1 == this.content.search(/#\(/)) {
div.innerHTML = value;
}
else {
this.refreshContents();
}
break;
case 'seed':
if (this.seed != value) {
this.seed = value;
this.refreshContents();
}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_html_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_html__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_html.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_html.prototype;
	p.constructor = _ZEN_Component_html;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.html';
	p._type = 'html';
	p.serialize = _ZEN_Component_html_serialize;
	p.getSettings = _ZEN_Component_html_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_html_ReallyRefreshContents;
	p.getContent = _ZEN_Component_html_getContent;
	p.setContent = _ZEN_Component_html_setContent;
	p.setProperty = _ZEN_Component_html_setProperty;
}

// ================================================================================
_zenClassIdx['iframe'] = '_ZEN_Component_iframe';
function _ZEN_Component_iframe(index,id) {
	if (index>=0) {_ZEN_Component_iframe__init(this,index,id);}
}

function _ZEN_Component_iframe__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.frameAlign = '';
	o.frameBorder = false;
	o.longdesc = '';
	o.scrolling = '';
	o.src = '';
}
function _ZEN_Component_iframe_serialize(set,s)
{
	s[0]='3322176569';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.frameAlign;s[16]=(this.frameBorder?1:0);s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=this.longdesc;s[26]=this.onafterdrag;s[27]=this.onbeforedrag;s[28]=this.ondrag;s[29]=this.ondrop;s[30]=this.onhide;s[31]=this.onrefresh;s[32]=this.onshow;s[33]=this.onupdate;s[34]=this.overlayMode;s[35]=this.renderFlag;s[36]=this.scrolling;s[37]=(this.showLabel?1:0);s[38]=this.slice;s[39]=this.src;s[40]=this.title;s[41]=this.tuple;s[42]=this.valign;s[43]=(this.visible?1:0);s[44]=this.width;
}
function _ZEN_Component_iframe_getSettings(s)
{
	s['name'] = 'string';
	s['frameAlign'] = 'enum:left,right,center';
	s['frameBorder'] = 'boolean';
	s['longdesc'] = 'uri';
	s['scrolling'] = 'enum:auto,yes,no';
	s['src'] = 'uri';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_iframe_getDocument() {
var doc = null;
var iframe = this.findElement('iframe');
if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
doc = iframe.contentWindow.document;
}
return doc;
}

function _ZEN_Component_iframe_getPage() {
var page = null;
var iframe = this.findElement('iframe');
if (iframe && iframe.contentWindow && iframe.contentWindow.zenPage) {
page = iframe.contentWindow.zenPage;
}
return page;
}

function _ZEN_Component_iframe_setProperty(property,value,value2) {
var iframe = this.findElement('iframe');
switch(property) {
case 'src':
case 'longdesc':
case 'height':
case 'width':
case 'scrolling':
this[property] = value;
if (iframe) {
iframe[property] = value;
}
break;
case 'frameBorder':
this.frameBorder = value ? true : false;
if (iframe) {
iframe.frameBorder = value ? 1 : 0;
}
break;
case 'frameAlign':
this.frameAlign = value;
if (iframe) {
iframe.align = value;
}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_iframe_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_iframe__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_iframe.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_iframe.prototype;
	p.constructor = _ZEN_Component_iframe;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.iframe';
	p._type = 'iframe';
	p.serialize = _ZEN_Component_iframe_serialize;
	p.getSettings = _ZEN_Component_iframe_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_iframe_ReallyRefreshContents;
	p.getDocument = _ZEN_Component_iframe_getDocument;
	p.getPage = _ZEN_Component_iframe_getPage;
	p.setProperty = _ZEN_Component_iframe_setProperty;
}

// ================================================================================
_zenClassIdx['link'] = '_ZEN_Component_link';
function _ZEN_Component_link(index,id) {
	if (index>=0) {_ZEN_Component_link__init(this,index,id);}
}

function _ZEN_Component_link__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.caption = '';
	o.disabled = false;
	o.href = '';
	o.onclick = '';
	o.style = '';
	o.target = '';
	o.title = '';
}
function _ZEN_Component_link_serialize(set,s)
{
	s[0]='2264513986';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.containerStyle;s[10]=(this.disabled?1:0);s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.href;s[23]=this.label;s[24]=this.labelClass;s[25]=this.labelStyle;s[26]=this.onafterdrag;s[27]=this.onbeforedrag;s[28]=this.onclick;s[29]=this.ondrag;s[30]=this.ondrop;s[31]=this.onhide;s[32]=this.onrefresh;s[33]=this.onshow;s[34]=this.onupdate;s[35]=this.overlayMode;s[36]=this.renderFlag;s[37]=(this.showLabel?1:0);s[38]=this.slice;s[39]=this.style;s[40]=this.target;s[41]=this.title;s[42]=this.tuple;s[43]=this.valign;s[44]=(this.visible?1:0);s[45]=this.width;
}
function _ZEN_Component_link_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['disabled'] = 'boolean';
	s['href'] = 'uri';
	s['onclick'] = 'eventHandler';
	s['style'] = 'style';
	s['target'] = 'string';
	s['title'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_link_onClickHandler() {
if (this.onclick != '') {
return zenInvokeCallbackMethod(this.onclick,this,'onclick');
}
return true;
}

function _ZEN_Component_link_setProperty(property,value,value2) {
var a = this.findElement('a');
switch(property) {
case 'caption':
this.caption = value;
if (a) {
a.innerHTML = value;
}
break;
case 'title':
this.title = value;
if (a) {
a.title = value;
}
break;
case 'href':
this.href = value;
if (a && !this.diabled) {
a.href = value;
}
break;
case 'style':
this.style = value;
if (a) {
a.style.cssText = value;
}
break;
case 'disabled':
value = value ? true : false;
if (this.disabled != value) {
this.disabled = value;
var html = '';
if (this.disabled) {
html = '<span class="linkDisabled" id="'+this.makeId('a')+'" '+zenAttr('title',this.title)+' '+zenAttr('style',this.style)+'>'+zenEscapeXML(this.caption)+'</span>';
}
else {
html = '<a class="link" onclick="return zenPage.getComponent('+this.index+').onClickHandler();" href="'+this.href+'" id="'+this.makeId('a')+'" '+zenAttr('title',this.title)+' '+zenAttr('style',this.style)+'>'+zenEscapeXML(this.caption)+'</a>';
}
this.getEnclosingDiv().innerHTML = html;
}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_link_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_link__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_link.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_link.prototype;
	p.constructor = _ZEN_Component_link;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.link';
	p._type = 'link';
	p.serialize = _ZEN_Component_link_serialize;
	p.getSettings = _ZEN_Component_link_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_link_ReallyRefreshContents;
	p.onClickHandler = _ZEN_Component_link_onClickHandler;
	p.setProperty = _ZEN_Component_link_setProperty;
}

// ================================================================================
_zenClassIdx['locatorBar'] = '_ZEN_Component_locatorBar';
function _ZEN_Component_locatorBar(index,id) {
	if (index>=0) {_ZEN_Component_locatorBar__init(this,index,id);}
}

function _ZEN_Component_locatorBar__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.OnDrawBar = '';
	o.OnGetQuickLinks = '';
	o.links = new Array();
	o.seed = '';
}
function _ZEN_Component_locatorBar_serialize(set,s)
{
	s[0]='2847303279';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnDrawBar;s[7]=this.OnGetQuickLinks;s[8]=this.align;s[9]=this.aux;s[10]=this.containerStyle;s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.hint;s[20]=this.hintClass;s[21]=this.hintStyle;s[22]=this.label;s[23]=this.labelClass;s[24]=this.labelStyle;s[25]=set.serializeList(this,this.links,true,'links');s[26]=this.onafterdrag;s[27]=this.onbeforedrag;s[28]=this.ondrag;s[29]=this.ondrop;s[30]=this.onhide;s[31]=this.onrefresh;s[32]=this.onshow;s[33]=this.onupdate;s[34]=this.overlayMode;s[35]=this.renderFlag;s[36]=this.seed;s[37]=(this.showLabel?1:0);s[38]=this.slice;s[39]=this.title;s[40]=this.tuple;s[41]=this.valign;s[42]=(this.visible?1:0);s[43]=this.width;
}
function _ZEN_Component_locatorBar_getSettings(s)
{
	s['name'] = 'string';
	s['links'] = 'string';
	s['seed'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_locatorBar_onupdateHandler() {
this.refreshContents();
}

function _ZEN_Component_locatorBar_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_locatorBar__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_locatorBar.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_locatorBar.prototype;
	p.constructor = _ZEN_Component_locatorBar;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.locatorBar';
	p._type = 'locatorBar';
	p.serialize = _ZEN_Component_locatorBar_serialize;
	p.getSettings = _ZEN_Component_locatorBar_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_locatorBar_ReallyRefreshContents;
	p.onupdateHandler = _ZEN_Component_locatorBar_onupdateHandler;
}

// ================================================================================
_zenClassIdx['menuItem'] = '_ZEN_Component_menuItem';
function _ZEN_Component_menuItem(index,id) {
	if (index>=0) {_ZEN_Component_menuItem__init(this,index,id);}
}

function _ZEN_Component_menuItem__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.caption = '';
	o.disabled = false;
	o.help = '';
	o.image = '';
	o.imageHeight = '16';
	o.imageWidth = '16';
	o.link = '';
	o.linkResource = '';
	o.onclick = '';
	o.target = '';
}
function _ZEN_Component_menuItem_serialize(set,s)
{
	s[0]='1974313249';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.caption;s[9]=this.containerStyle;s[10]=(this.disabled?1:0);s[11]=(this.dragEnabled?1:0);s[12]=(this.dropEnabled?1:0);s[13]=(this.dynamic?1:0);s[14]=this.enclosingClass;s[15]=this.enclosingStyle;s[16]=this.error;s[17]=this.height;s[18]=this.help;s[19]=(this.hidden?1:0);s[20]=this.hint;s[21]=this.hintClass;s[22]=this.hintStyle;s[23]=this.image;s[24]=this.imageHeight;s[25]=this.imageWidth;s[26]=this.label;s[27]=this.labelClass;s[28]=this.labelStyle;s[29]=this.link;s[30]=this.linkResource;s[31]=this.onafterdrag;s[32]=this.onbeforedrag;s[33]=this.onclick;s[34]=this.ondrag;s[35]=this.ondrop;s[36]=this.onhide;s[37]=this.onrefresh;s[38]=this.onshow;s[39]=this.onupdate;s[40]=this.overlayMode;s[41]=this.renderFlag;s[42]=(this.showLabel?1:0);s[43]=this.slice;s[44]=this.target;s[45]=this.title;s[46]=this.tuple;s[47]=this.valign;s[48]=(this.visible?1:0);s[49]=this.width;
}
function _ZEN_Component_menuItem_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['disabled'] = 'boolean';
	s['help'] = 'caption';
	s['image'] = 'uri';
	s['imageHeight'] = 'length';
	s['imageWidth'] = 'length';
	s['link'] = 'uri';
	s['linkResource'] = 'resource';
	s['onclick'] = 'eventHandler';
	s['target'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_menuItem_doNothing() {
}

function _ZEN_Component_menuItem_getDisabled() {
return this.disabled;
}

function _ZEN_Component_menuItem_onActionHandler() {
if (this.parent.onItemActionHandler) {
this.parent.onItemActionHandler(1);
}
}

function _ZEN_Component_menuItem_onShowHelpHandler(mode) {
if (this.parent.onItemShowHelpHandler) {
this.parent.onItemShowHelpHandler(mode,this);
}
}

function _ZEN_Component_menuItem_setDisabled(flag) {
this.disabled = flag ? true : false;
var a = this.findElement("a");
zenASSERT(a,"Unable to find anchor element",arguments);
if (this.disabled) {
a.className = "menuItemDisabled";
a.disabled = true;
a.href = 'javascript:zenPage.getComponent('+this.index+').doNothing();';
}
else {
a.className = "menuItem";
a.disabled = false;
a.href = this.link;
}
}

function _ZEN_Component_menuItem_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_menuItem__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_menuItem.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_menuItem.prototype;
	p.constructor = _ZEN_Component_menuItem;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.menuItem';
	p._type = 'menuItem';
	p.serialize = _ZEN_Component_menuItem_serialize;
	p.getSettings = _ZEN_Component_menuItem_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_menuItem_ReallyRefreshContents;
	p.doNothing = _ZEN_Component_menuItem_doNothing;
	p.getDisabled = _ZEN_Component_menuItem_getDisabled;
	p.onActionHandler = _ZEN_Component_menuItem_onActionHandler;
	p.onShowHelpHandler = _ZEN_Component_menuItem_onShowHelpHandler;
	p.setDisabled = _ZEN_Component_menuItem_setDisabled;
}

// ================================================================================
_zenClassIdx['menuSeparator'] = '_ZEN_Component_menuSeparator';
function _ZEN_Component_menuSeparator(index,id) {
	if (index>=0) {_ZEN_Component_menuSeparator__init(this,index,id);}
}

function _ZEN_Component_menuSeparator__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
}
function _ZEN_Component_menuSeparator_serialize(set,s)
{
	s[0]='1038571008';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.onupdate;s[31]=this.overlayMode;s[32]=this.renderFlag;s[33]=(this.showLabel?1:0);s[34]=this.slice;s[35]=this.title;s[36]=this.tuple;s[37]=this.valign;s[38]=(this.visible?1:0);s[39]=this.width;
}
function _ZEN_Component_menuSeparator_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_menuSeparator_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_menuSeparator__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_menuSeparator.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_menuSeparator.prototype;
	p.constructor = _ZEN_Component_menuSeparator;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.menuSeparator';
	p._type = 'menuSeparator';
	p.serialize = _ZEN_Component_menuSeparator_serialize;
	p.getSettings = _ZEN_Component_menuSeparator_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_menuSeparator_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['objectBrowser'] = '_ZEN_Component_objectBrowser';
function _ZEN_Component_objectBrowser(index,id) {
	if (index>=0) {_ZEN_Component_objectBrowser__init(this,index,id);}
}

function _ZEN_Component_objectBrowser__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.onselect = '';
	o.rootObjectId = '';
	o.sourcePage = null;
	o.onCreate();
}
function _ZEN_Component_objectBrowser_serialize(set,s)
{
	s[0]='4286151904';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onselect;s[30]=this.onshow;s[31]=this.onupdate;s[32]=this.overlayMode;s[33]=this.renderFlag;s[34]=this.rootObjectId;s[35]=(this.showLabel?1:0);s[36]=this.slice;s[37]=set.addObject(this.sourcePage,'sourcePage');s[38]=this.title;s[39]=this.tuple;s[40]=this.valign;s[41]=(this.visible?1:0);s[42]=this.width;
}
function _ZEN_Component_objectBrowser_getSettings(s)
{
	s['name'] = 'string';
	s['onselect'] = 'eventHandler';
	s['rootObjectId'] = 'string';
	s['sourcePage'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_objectBrowser_getCurrObject() {
var page = this.sourcePage ? this.sourcePage : zenPage;
return page.getComponent(this.currObject);
}

function _ZEN_Component_objectBrowser_onCreate() {
this.currObject = 1;
}

function _ZEN_Component_objectBrowser_renderBrowser() {
var div = this.findElement('objectBrowser');
zenASSERT(div,"Unable to find div.",arguments);
var page = this.sourcePage ? this.sourcePage : zenPage;
var root = page.getComponentById(this.rootObjectId);
if (!root) {
root = page;
}
var html = new Array();
html[html.length] = '<ul class="objectBrowser">';
this.renderObject(root,html,1)
html[html.length] = '</ul>';
div.innerHTML = html.join("");
}

function _ZEN_Component_objectBrowser_renderContents() {
this.renderBrowser();
}

function _ZEN_Component_objectBrowser_renderObject(obj,html,level) {
var style = '';
if (obj.index == this.currObject) {
style = 'style="border: 1px solid black; background: yellow;"';
}
html[html.length] = '<li '+style+' onclick="zenPage.getComponent('+this.index+').selectObject('+obj.index+');">&nbsp;';
html[html.length] = obj._type + ((obj.id&&obj.id!='') ? (' <i>'+obj.id+'</i>') : '');
html[html.length] = '&nbsp;</li>';
if (obj.children && !obj.isOfType('composite')) {
html[html.length] = '<ul class="objectBrowser">';
for (var n in obj.children) {
this.renderObject(obj.children[n],html,level+1);
}
html[html.length] = '</ul>';
}
}

function _ZEN_Component_objectBrowser_selectObject(index) {
var page = this.sourcePage ? this.sourcePage : zenPage;
this.setCurrObject(page.getComponent(index));
}

function _ZEN_Component_objectBrowser_setCurrObject(obj) {
zenASSERT(obj&&zenIsComponent(obj),"Invalid component.",arguments);
this.currObject = obj.index;
this.renderBrowser();
zenInvokeCallbackMethod(this.onselect,this,'onselect');
}

function _ZEN_Component_objectBrowser_update() {
this.renderBrowser();
}

function _ZEN_Component_objectBrowser_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_objectBrowser__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_objectBrowser.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_objectBrowser.prototype;
	p.constructor = _ZEN_Component_objectBrowser;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.objectBrowser';
	p._type = 'objectBrowser';
	p.serialize = _ZEN_Component_objectBrowser_serialize;
	p.getSettings = _ZEN_Component_objectBrowser_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_objectBrowser_ReallyRefreshContents;
	p.getCurrObject = _ZEN_Component_objectBrowser_getCurrObject;
	p.onCreate = _ZEN_Component_objectBrowser_onCreate;
	p.renderBrowser = _ZEN_Component_objectBrowser_renderBrowser;
	p.renderContents = _ZEN_Component_objectBrowser_renderContents;
	p.renderObject = _ZEN_Component_objectBrowser_renderObject;
	p.selectObject = _ZEN_Component_objectBrowser_selectObject;
	p.setCurrObject = _ZEN_Component_objectBrowser_setCurrObject;
	p.update = _ZEN_Component_objectBrowser_update;
}

// ================================================================================
_zenClassIdx['simpleTablePane'] = '_ZEN_Component_simpleTablePane';
function _ZEN_Component_simpleTablePane(index,id) {
	if (index>=0) {_ZEN_Component_simpleTablePane__init(this,index,id);}
}

function _ZEN_Component_simpleTablePane__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.OnCreateResultSet = '';
	o.OnExecuteResultSet = '';
	o.columnName = '';
	o.groupByClause = '';
	o.hasFocus = false;
	o.initialExecute = true;
	o.maxRows = '100';
	o.multiSelect = false;
	o.ondblclick = '';
	o.onmultiselect = '';
	o.onselectrow = '';
	o.orderByClause = '';
	o.queryClass = '';
	o.queryName = '';
	o.rowSelect = true;
	o.selectedIndex = '-1';
	o.selectedRows = '';
	o.showRowNumbers = false;
	o.showRowSelector = true;
	o.showZebra = false;
	o.sql = ''; // encrypted
	o.tableName = '';
	o.value = '';
	o.whereClause = '';
}
function _ZEN_Component_simpleTablePane_serialize(set,s)
{
	s[0]='3614780545';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnCreateResultSet;s[7]=this.OnExecuteResultSet;s[8]=this.align;s[9]=this.aux;s[10]=this.columnName;s[11]=this.containerStyle;s[12]=(this.dragEnabled?1:0);s[13]=(this.dropEnabled?1:0);s[14]=(this.dynamic?1:0);s[15]=this.enclosingClass;s[16]=this.enclosingStyle;s[17]=this.error;s[18]=this.groupByClause;s[19]=(this.hasFocus?1:0);s[20]=this.height;s[21]=(this.hidden?1:0);s[22]=this.hint;s[23]=this.hintClass;s[24]=this.hintStyle;s[25]=(this.initialExecute?1:0);s[26]=this.label;s[27]=this.labelClass;s[28]=this.labelStyle;s[29]=this.maxRows;s[30]=(this.multiSelect?1:0);s[31]=this.onafterdrag;s[32]=this.onbeforedrag;s[33]=this.ondblclick;s[34]=this.ondrag;s[35]=this.ondrop;s[36]=this.onhide;s[37]=this.onmultiselect;s[38]=this.onrefresh;s[39]=this.onselectrow;s[40]=this.onshow;s[41]=this.onupdate;s[42]=this.orderByClause;s[43]=this.overlayMode;s[44]=this.queryClass;s[45]=this.queryName;s[46]=this.renderFlag;s[47]=(this.rowSelect?1:0);s[48]=this.selectedIndex;s[49]=this.selectedRows;s[50]=(this.showLabel?1:0);s[51]=(this.showRowNumbers?1:0);s[52]=(this.showRowSelector?1:0);s[53]=(this.showZebra?1:0);s[54]=this.slice;s[55]=this.sql;s[56]=this.tableName;s[57]=this.title;s[58]=this.tuple;s[59]=this.valign;s[60]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[61]=(this.visible?1:0);s[62]=this.whereClause;s[63]=this.width;
}
function _ZEN_Component_simpleTablePane_getSettings(s)
{
	s['name'] = 'string';
	s['columnName'] = 'string';
	s['groupByClause'] = 'string';
	s['initialExecute'] = 'boolean';
	s['maxRows'] = 'integer';
	s['multiSelect'] = 'boolean';
	s['ondblclick'] = 'eventHandler';
	s['onmultiselect'] = 'eventHandler';
	s['onselectrow'] = 'eventHandler';
	s['orderByClause'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['rowSelect'] = 'boolean';
	s['selectedIndex'] = 'integer';
	s['selectedRows'] = 'string';
	s['showRowNumbers'] = 'boolean';
	s['showRowSelector'] = 'boolean';
	s['showZebra'] = 'boolean';
	s['sql'] = 'sql';
	s['tableName'] = 'string';
	s['value'] = 'string';
	s['whereClause'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_simpleTablePane_cbClick(cb,row) {
this.ignoreClick = true; // transient flag
this.selectMultiRow(row,cb.checked);
zenInvokeCallbackMethod(this.onmultiselect,this,'onmultiselect');
}

function _ZEN_Component_simpleTablePane_cbHeaderClick(cb) {
this.selectAllMultiRows(cb.checked);
zenInvokeCallbackMethod(this.onmultiselect,this,'onmultiselect');
}

function _ZEN_Component_simpleTablePane_clickHandler(row) {
this.focus();
this.selectRow(row,false,'click');
}

function _ZEN_Component_simpleTablePane_dblclickHandler() {
zenInvokeCallbackMethod(this.ondblclick,this,'ondblclick');
}

function _ZEN_Component_simpleTablePane_focus() {
}

function _ZEN_Component_simpleTablePane_getValue() {
return this.getProperty('value');
}

function _ZEN_Component_simpleTablePane_isRowSelected(row) {
var idx = row;
if (!isNaN(this.pageSize)) {
idx = row + ((this.currPage-1) * this.pageSize);
}
var list = this.selectedRows.split(',');
return (list[idx]!=null && list[idx]!='');
}

function _ZEN_Component_simpleTablePane_onRefreshContents() {
this.stopProgressBar();
if (this.showZebra) { //PL 66143
var tBody = this.window.document.getElementById("tpBody_"+this.index);
if (tBody) tBody.style.backgroundColor="transparent";
}
if (!this.rowSelect) {
var idx = this.selectedIndex;
this.selectedIndex = -1; // force change
this.selectRow(idx,false);
}
else {
this.selectedIndex = -1;
}
if (this.navigator && this.navigator.updateState) {
this.navigator.updateState();
}
if (this.hasFocus) {
self.setTimeout("zenPage.getComponent("+this.index+").focus()",50);
}
}

function _ZEN_Component_simpleTablePane_onupdateHandler() {
if (this.showZebra) { // PL66143
var tBody = this.window.document.getElementById("tpBody_"+this.index);
if (tBody) tBody.style.backgroundColor="transparent";
}
if (this.refreshRequired && this.executeQuery) {
this.refreshRequired = false;
this.executeQuery(true);
return;
}
if (this.navigator && this.navigator.updateState) {
this.navigator.updateState();
}
}

function _ZEN_Component_simpleTablePane_refreshTable() {
if (null == this.progressBarTimerId) {
this.refreshContents();
this.startProgressBar();
}
}

function _ZEN_Component_simpleTablePane_selectAllMultiRows(flag) {
var rowCount = ('' == this.pageSize || 0 == this.pageSize) ? parseInt(this.rowCount.split(' ')[0]) : this.pageSize;
for (var row = 0; row < rowCount; row++) {
this.selectMultiRow(row, flag);
}
}

function _ZEN_Component_simpleTablePane_selectMultiRow(row,flag) {
var idx = row;
if (!isNaN(this.pageSize)) {
idx = row + ((this.currPage-1) * this.pageSize);
}
var val = '';
var tr = this.findElement("tr_" + row);
if (tr) {
val = tr.getAttribute('zenValue');
}
var list = this.selectedRows.split(',');
list[idx] = flag ? val : '';
this.selectedRows = list.join(',');
var rcb = this.findElement('cb_'+row);
if (rcb) {
rcb.checked = flag;
}
}

function _ZEN_Component_simpleTablePane_selectRow(row,scroll,which) {
if (!this.rowSelect) {
if (this.multiSelect && !this.ignoreClick) {
this.selectMultiRow(row,!this.isRowSelected(row));
zenInvokeCallbackMethod(this.onmultiselect,this,'onmultiselect');
}
this.ignoreClick = false;
return;
}
this.ignoreClick = false;
var changed = (row != this.selectedIndex);
if (this.selectedIndex >= 0) {
var tr = this.findElement("tr_" + this.selectedIndex);
if (tr) {
tr.className = this.trClass ? this.trClass : '';
}
var selector = this.findElement("selector_" + this.selectedIndex);
if (selector) {
selector.innerHTML="&nbsp;";
}
}
this.selectedIndex = row;
this.value = '';
if (this.selectedIndex >= 0) {
var tr = this.findElement("tr_" + this.selectedIndex);
if (tr) {
this.trClass = tr.className;
tr.className = 'tpSelected';
if (scroll) {
zenScrollIntoView(this.findElement('tpBody'),tr);
}
this.value = tr.getAttribute('zenValue');
}
var selector = this.findElement("selector_" + this.selectedIndex);
if (selector) {
selector.innerHTML="&raquo;";
}
}
if (changed) {
which = ('undefined' == typeof which) ? '' : which;
zenInvokeCallbackMethod(this.onselectrow,this,'onselectrow','which',which);
}
}

function _ZEN_Component_simpleTablePane_setProperty(property,value,value2) {
switch(property) {
case 'rowSelect':
value = value ? true : false;
if (value != this.rowSelect) {
this.rowSelect = value;
this.refreshTable();
}
break;
case 'multiSelect':
value = value ? true : false;
if (value != this.multiSelect) {
this.multiSelect = value;
this.refreshTable();
}
break;
case 'selectedRows':
if (value != this.selectedRows) {
this.selectedRows = value;
if (this.multiSelect) {
this.updateRowSelectBoxes();
}
}
break;
case 'selectedIndex':
this.selectRow(value,false);
break;
case 'showRowNumbers':
value = value ? true : false;
if (value != this.showRowNumbers) {
this.showRowNumbers = value;
this.refreshTable();
}
break;
case 'showRowSelector':
value = value ? true : false;
if (value != this.showRowSelector) {
this.showRowSelector = value;
this.refreshTable();
}
break;
case 'showZebra':
value = value ? true : false;
if (value != this.showZebra) {
this.showZebra = value;
this.refreshTable();
}
break;
case 'initialExecute':
this.initialExecute = value ? true : false;
break;
case 'value': // readonly
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_simpleTablePane_updateRowSelectBoxes() {
var list = this.selectedRows.split(',');
var rowCount = (this.pageSize < this.rowCount) ? this.pageSize : this.rowCount;
for (var row = 0; row < rowCount; row++) {
var idx = row + ((this.currPage-1) * this.pageSize);
var sel = (list[idx]!=null && list[idx]!='') ? true : false;
var rcb = this.findElement('cb_'+row);
if (rcb) {
rcb.checked = sel;
}
}
}

function _ZEN_Component_simpleTablePane_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_simpleTablePane__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_simpleTablePane.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_simpleTablePane.prototype;
	p.constructor = _ZEN_Component_simpleTablePane;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.simpleTablePane';
	p._type = 'simpleTablePane';
	p.serialize = _ZEN_Component_simpleTablePane_serialize;
	p.getSettings = _ZEN_Component_simpleTablePane_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_simpleTablePane_ReallyRefreshContents;
	p.cbClick = _ZEN_Component_simpleTablePane_cbClick;
	p.cbHeaderClick = _ZEN_Component_simpleTablePane_cbHeaderClick;
	p.clickHandler = _ZEN_Component_simpleTablePane_clickHandler;
	p.dblclickHandler = _ZEN_Component_simpleTablePane_dblclickHandler;
	p.focus = _ZEN_Component_simpleTablePane_focus;
	p.getValue = _ZEN_Component_simpleTablePane_getValue;
	p.isRowSelected = _ZEN_Component_simpleTablePane_isRowSelected;
	p.onRefreshContents = _ZEN_Component_simpleTablePane_onRefreshContents;
	p.onupdateHandler = _ZEN_Component_simpleTablePane_onupdateHandler;
	p.refreshTable = _ZEN_Component_simpleTablePane_refreshTable;
	p.selectAllMultiRows = _ZEN_Component_simpleTablePane_selectAllMultiRows;
	p.selectMultiRow = _ZEN_Component_simpleTablePane_selectMultiRow;
	p.selectRow = _ZEN_Component_simpleTablePane_selectRow;
	p.setProperty = _ZEN_Component_simpleTablePane_setProperty;
	p.updateRowSelectBoxes = _ZEN_Component_simpleTablePane_updateRowSelectBoxes;
}

// ================================================================================
_zenClassIdx['tablePane'] = '_ZEN_Component_tablePane';
function _ZEN_Component_tablePane(index,id) {
	if (index>=0) {_ZEN_Component_tablePane__init(this,index,id);}
}

function _ZEN_Component_tablePane__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_simpleTablePane__init) ?zenMaster._ZEN_Component_simpleTablePane__init(o,index,id):_ZEN_Component_simpleTablePane__init(o,index,id);
	o.OnCreateResultSet = '';
	o.OnExecuteResultSet = '';
	o.autoExecute = true;
	o.bodyHeight = '20.0em';
	o.caption = '';
	o.clearSnapshot = false;
	o.columnName = '';
	o.columns = new Array();
	o.conditions = new Array();
	o.currColumn = '';
	o.currPage = '1';
	o.dataSource = 'query';
	o.extraColumnWidth = '30';
	o.filtersDisabled = false;
	o.fixedHeaders = false;
	o.groupByClause = '';
	o.headerLayout = 'filtersOnTop';
	o.invalidMessage = 'Invalid Date';
	o.lastFilter = '';
	o.lastUpdate = '';
	o.maxRows = '100';
	o.nowrap = true;
	o.onheaderClick = '';
	o.onkeypress = '';
	o.orderByClause = '';
	o.pageSize = '0';
	o.parameters = new Array();
	o.queryClass = '';
	o.queryName = '';
	o.refreshRequired = false;
	o.rowCount = '';
	o.showFilters = true;
	o.showQuery = false;
	o.showValueInTooltip = false;
	o.snapshotId = '';
	o.sortOrder = '';
	o.sql = ''; // encrypted
	o.tableName = '';
	o.useKeys = false;
	o.useSnapshot = false;
	o.valueColumn = '';
	o.whereClause = '';
}
function _ZEN_Component_tablePane_serialize(set,s)
{
	s[0]='4278742429';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnCreateResultSet;s[7]=this.OnExecuteResultSet;s[8]=this.align;s[9]=(this.autoExecute?1:0);s[10]=this.aux;s[11]=this.bodyHeight;s[12]=this.caption;s[13]=(this.clearSnapshot?1:0);s[14]=this.columnName;s[15]=set.serializeList(this,this.columns,true,'columns');s[16]=set.serializeList(this,this.conditions,true,'conditions');s[17]=this.containerStyle;s[18]=this.currColumn;s[19]=this.currPage;s[20]=this.dataSource;s[21]=(this.dragEnabled?1:0);s[22]=(this.dropEnabled?1:0);s[23]=(this.dynamic?1:0);s[24]=this.enclosingClass;s[25]=this.enclosingStyle;s[26]=this.error;s[27]=this.extraColumnWidth;s[28]=(this.filtersDisabled?1:0);s[29]=(this.fixedHeaders?1:0);s[30]=this.groupByClause;s[31]=(this.hasFocus?1:0);s[32]=this.headerLayout;s[33]=this.height;s[34]=(this.hidden?1:0);s[35]=this.hint;s[36]=this.hintClass;s[37]=this.hintStyle;s[38]=(this.initialExecute?1:0);s[39]=this.invalidMessage;s[40]=this.label;s[41]=this.labelClass;s[42]=this.labelStyle;s[43]=this.lastFilter;s[44]=this.lastUpdate;s[45]=this.maxRows;s[46]=(this.multiSelect?1:0);s[47]=(this.nowrap?1:0);s[48]=this.onafterdrag;s[49]=this.onbeforedrag;s[50]=this.ondblclick;s[51]=this.ondrag;s[52]=this.ondrop;s[53]=this.onheaderClick;s[54]=this.onhide;s[55]=this.onkeypress;s[56]=this.onmultiselect;s[57]=this.onrefresh;s[58]=this.onselectrow;s[59]=this.onshow;s[60]=this.onupdate;s[61]=this.orderByClause;s[62]=this.overlayMode;s[63]=this.pageSize;s[64]=set.serializeList(this,this.parameters,true,'parameters');s[65]=this.queryClass;s[66]=this.queryName;s[67]=(this.refreshRequired?1:0);s[68]=this.renderFlag;s[69]=this.rowCount;s[70]=(this.rowSelect?1:0);s[71]=this.selectedIndex;s[72]=this.selectedRows;s[73]=(this.showFilters?1:0);s[74]=(this.showLabel?1:0);s[75]=(this.showQuery?1:0);s[76]=(this.showRowNumbers?1:0);s[77]=(this.showRowSelector?1:0);s[78]=(this.showValueInTooltip?1:0);s[79]=(this.showZebra?1:0);s[80]=this.slice;s[81]=this.snapshotId;s[82]=this.sortOrder;s[83]=this.sql;s[84]=this.tableName;s[85]=this.title;s[86]=this.tuple;s[87]=(this.useKeys?1:0);s[88]=(this.useSnapshot?1:0);s[89]=this.valign;s[90]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[91]=this.valueColumn;s[92]=(this.visible?1:0);s[93]=this.whereClause;s[94]=this.width;
}
function _ZEN_Component_tablePane_getSettings(s)
{
	s['name'] = 'string';
	s['autoExecute'] = 'boolean';
	s['bodyHeight'] = 'length';
	s['caption'] = 'caption';
	s['columnName'] = 'string';
	s['columns'] = 'string';
	s['conditions'] = 'string';
	s['currColumn'] = 'string';
	s['currPage'] = 'integer';
	s['dataSource'] = 'enum:query,columns';
	s['extraColumnWidth'] = 'length';
	s['filtersDisabled'] = 'boolean';
	s['fixedHeaders'] = 'boolean';
	s['groupByClause'] = 'string';
	s['headerLayout'] = 'enum:filtersOnTop,headersOnTop';
	s['invalidMessage'] = 'caption';
	s['lastUpdate'] = 'string';
	s['maxRows'] = 'integer';
	s['nowrap'] = 'boolean';
	s['onheaderClick'] = 'eventHandler';
	s['onkeypress'] = 'eventHandler';
	s['orderByClause'] = 'string';
	s['pageSize'] = 'integer';
	s['parameters'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['showFilters'] = 'boolean';
	s['showQuery'] = 'boolean';
	s['showValueInTooltip'] = 'boolean';
	s['sortOrder'] = 'enum:asc,desc';
	s['sql'] = 'sql';
	s['tableName'] = 'string';
	s['useKeys'] = 'boolean';
	s['useSnapshot'] = 'boolean';
	s['valueColumn'] = 'string';
	s['whereClause'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_tablePane_addNavigator(nav) {
this.navigator = nav;
}

function _ZEN_Component_tablePane_appendColumn(colName) {
var column = zenPage.createComponent('column');
column.colName = colName ? colName : '';
this.columns[this.columns.length] = column;
return column;
}

function _ZEN_Component_tablePane_applyFilters() {
if (this.autoExecute && !this.filtersDisabled) {
this.executeQuery();
return true;
}
return false;
}

function _ZEN_Component_tablePane_disableColumnFilters(flag) {
this.filtersDisabled = flag;
for (var n in this.columns) {
var column = this.columns[n];
if ('' != column.getColName() && '' != column.filterType) {
var n = 1;
while((ctrl = this.findElement("filter"+n+"_" + column.getColName())) != null) {
ctrl.disabled = flag;
n++;
}
}
}
}

function _ZEN_Component_tablePane_executeQuery(remember) {
if (!remember) {
this.currPage = 1; // go back to first page
}
this.selectAllMultiRows(false);
if (this.useSnapshot) {
this.clearSnapshot = true; // force query execution
this.refreshTable();
this.clearSnapshot = false;
}
else {
this.refreshTable();
}
}

function _ZEN_Component_tablePane_filterChanged(filterName,refresh,type,index) {
for (var n in this.columns) {
var column = this.columns[n];
if (filterName == column.getColName() && '' != column.filterType) {
var ctrl = this.findElement("filter1_" + filterName);
if (ctrl){
if ('date'==type && 1==index) {
ctrl.value = zenParseDate(ctrl.value);
if (-1 == ctrl.value) {
ctrl.value = this.invalidMessage;
refresh = false;
}
}
column.filterValue = ctrl.value;
this.lastFilter = filterName;
}
var ctrl2 = this.findElement("filter2_" + filterName);
if (ctrl2){
if ('date'==type && 2==index) {
ctrl2.value = zenParseDate(ctrl2.value);
if (-1 == ctrl2.value) {
ctrl2.value = this.invalidMessage;
refresh = false;
}
}
column.filterValue = column.filterValue + "," + ctrl2.value;
}
break;
}
}
if (refresh) {
this.applyFilters();
var ctrl = this.findElement((index==2) ? "filter2_" : "filter1_" + filterName);
if (ctrl){
ctrl.focus();
}
}
}

function _ZEN_Component_tablePane_filterKeyPressed(evt,filterName,type,index) {
evt = evt ? evt : window.event;
switch(evt.keyCode) {
case zenENTER:
this.filterChanged(filterName,true,type,index);
return false;
}
return true;
}

function _ZEN_Component_tablePane_findChildByClass(node,className) {
for (var tNode=node.firstChild;tNode!=null; tNode=tNode.nextSibling) {
if (tNode.nodeType==1 && tNode.className==className) return(tNode);
}
return(null);
}

function _ZEN_Component_tablePane_findChildByTag(node,tagName) {
for (var tNode=node.firstChild;tNode!=null; tNode=tNode.nextSibling) {
if (tNode.nodeType==1 && tNode.tagName==tagName) return(tNode);
}
return(null);
}

function _ZEN_Component_tablePane_findDescendantByClass(node,className) {
for (var tNode=node.firstChild;tNode!=null; tNode=tNode.nextSibling) {
if (tNode.nodeType==1) {
if (tNode.className==className) return(tNode);
var tRecurse = this.findDescendantByClass(tNode,className);
if (tRecurse!=null) return(tRecurse);
}
}
return(null);
}

function _ZEN_Component_tablePane_firstPage() {
if (1 != this.currPage) {
this.selectRow(-1);
this.currPage = 1;
this.refreshTable();
}
}

function _ZEN_Component_tablePane_focus() {
var inv = this.findElement('invisible');
if (inv) {
inv.focus();
}
}

function _ZEN_Component_tablePane_getColumnFilters() {
var out = new Object();
for (var n in this.columns) {
var column = this.columns[n];
if ('' != column.getColName() && '' != column.filterType) {
out[column.getColName()] = column.filterValue;
}
}
return out;
}

function _ZEN_Component_tablePane_getFilterValue(cname) {
var value = '';
for (var n in this.columns) {
var column = this.columns[n];
if (cname == column.getColName()) {
value = column.filterValue;
break;
}
}
return value;
}

function _ZEN_Component_tablePane_getPageCount() {
var rc = parseInt(this.rowCount,10);
if (!isNaN(rc) && rc > 0 && this.pageSize > 0) {
return Math.floor(rc / this.pageSize) + ((rc % this.pageSize) ? 1 : 0);
}
return 1;
}

function _ZEN_Component_tablePane_getRowData(row) {
if (row < 0) return null;
this._rowData = null;
if (this.useSnapshot) {
row = parseInt(row,10) + (parseInt(this.currPage,10)-1)*parseInt(this.pageSize,10);
var fetch = this.FetchRowFromSnapshot(this.index,this.snapshotId,row+1,this.currColumn,this.sortOrder);
}
var data = this._rowData;
delete this._rowData;
return data;
}

function _ZEN_Component_tablePane_gotoPage(page) {
if (page >= 1 && page != this.currPage && page <= this.getPageCount()) {
this.selectRow(-1);
this.currPage = page;
this.refreshTable();
}
}

function _ZEN_Component_tablePane_headerClick(name) {
if (this.currColumn == name) {
switch (this.sortOrder) {
case 'asc':
this.sortOrder = 'desc';
break;
case 'desc':
var th = this.findElement('th_'+this.currColumn);
if (th) {
th.className = '';
}
this.sortOrder = '';
this.currColumn = '';
break;
default:
this.sortOrder = 'asc';
break;
}
}
else {
if ('' != this.currColumn) {
var th = this.findElement('th_'+this.currColumn);
if (th) {
th.className = '';
}
}
this.currColumn = name;
if ('' != this.currColumn) {
var th = this.findElement('th_'+this.currColumn);
if (th) {
th.className = 'tpHdrSelected';
}
this.sortOrder = 'asc';
}
else {
this.sortOrder = '';
}
}
var go = this.useSnapshot;
if ('' != this.onheaderClick) {
go = zenInvokeCallbackMethod(this.onheaderClick,this,'onheaderClick');
}
if (go) {
this.currPage = 1; // go back to first page
this.selectAllMultiRows(false);
this.refreshTable();
}
return true;
}

function _ZEN_Component_tablePane_lastPage() {
if (this.getPageCount() != this.currPage) {
this.selectRow(-1);
this.currPage = this.getPageCount();
this.refreshTable();
}
}

function _ZEN_Component_tablePane_nextPage(giveFocus) {
if (this.currPage < this.getPageCount()) {
this.selectRow(-1);
this.currPage++;
this.hasFocus = (giveFocus) ? true : false;
this.refreshTable();
}
}

function _ZEN_Component_tablePane_onRefreshContents() {
this.invokeSuper('onRefreshContents',arguments);
this.resizeHeaders();
}

function _ZEN_Component_tablePane_onloadHandler() {
this.resizeHeaders();
}

function _ZEN_Component_tablePane_previousPage(giveFocus) {
if (this.currPage > 1) {
this.selectRow(-1);
this.currPage--;
this.hasFocus = (giveFocus) ? true : false;
this.refreshTable();
}
}

function _ZEN_Component_tablePane_removeNavigator() {
this.navigator = null;
}

function _ZEN_Component_tablePane_resetColumnFilters() {
for (var n in this.columns) {
var column = this.columns[n];
if ('' != column.getColName() && '' != column.filterType) {
column.filterValue = '';
var ctrl = this.findElement("filter1_" + column.getColName());
if (ctrl) {
ctrl.value = '';
}
var ctrl2 = this.findElement("filter2_" + column.getColName());
if (ctrl2) {
ctrl2.value = '';
}
}
}
}

function _ZEN_Component_tablePane_resizeHeaders() {
if (zenIsIE && this.fixedHeaders) {
var tDiv=this.getEnclosingDiv();
var tHeadDiv = this.findChildByClass(tDiv,"tpTable");
var tBodyDiv = this.findChildByClass(tDiv,"tpBodyFixed");
if (tHeadDiv==null || tBodyDiv==null) return;
var tEmpty = this.findDescendantByClass(tBodyDiv,"tpNoResults");
if (tEmpty) {
var tmp=tBodyDiv.clientWidth;
tHeadDiv.style.width=tmp;
return;
}
var tHead=this.findChildByClass(tHeadDiv,"tpHead");
var tBody=this.findChildByTag(this.findChildByClass(tBodyDiv,"tpTable"),"TBODY");
var tRow=this.findChildByTag(tBody,"TR");
if (tRow==null) return; //PL 64254
tHeadDiv.style.width="0";
var tmp=tHeadDiv.currentStyle.width;
var deltaW = tHeadDiv.clientWidth-tBodyDiv.clientWidth;
if (deltaW<0) deltaW=0;
var cWidth=new Array();
for (var k=tRow.firstChild;k!=null;k=k.nextSibling) {
var idx=cWidth.length;
if (k.nodeType==1 && k.tagName=="TD") cWidth[idx]=k.offsetWidth;
if (k.offsetWidth<1) return; //PL 64254C
if (k.className=="tpNoResults") return; //PL 64254B
}
for (k=tHead.firstChild;k!=null;k=k.nextSibling) {
if (k.nodeType==1 && k.tagName=="TR") {
var idx=0;
for (var n=k.firstChild;n!=null;n=n.nextSibling) {
if (n.nodeType==1 && n.tagName=="TH") {
if (idx<cWidth.length) {
n.style.width=cWidth[idx]+"px";
n.width=cWidth[idx]+"px";
}
else {
if (deltaW==0) deltaW=tBodyDiv.offsetWidth-tHeadDiv.offsetWidth;
if (deltaW<1) deltaW=1; //PL 64254D
n.style.width=deltaW+"px";
cWidth[idx]=deltaW;
}
if (n.style.width=="1px") n.style.display="none"; //PL 64254E
else n.style.display="";
idx++;
}
}
}
}
}
}

function _ZEN_Component_tablePane_setColumnFilters(state) {
for (var n in state) {
this.setFilterValue(n,state[n]);
}
}

function _ZEN_Component_tablePane_setDateFilter(group) {
var value = group.getValue();
var seed = group.seed.split(':');
var cname = seed[0];
var index = seed[1];
var ctrl = this.findElement("filter"+index+"_" + cname);
if (ctrl) {
ctrl.value = value;
this.filterChanged(cname,true);
}
}

function _ZEN_Component_tablePane_setFilterValue(cname,value) {
for (var n in this.columns) {
var column = this.columns[n];
if (cname == column.getColName()) {
column.filterValue = value;
if ('' != column.filterType) {
var multi = this.findElement("filter2_" + column.getColName());
var s = value.split(',');
var n = 1;
while((ctrl = this.findElement("filter"+n+"_" + column.getColName())) != null) {
ctrl.value = !multi ? value : (s[n-1] ? s[n-1] : '');
n++;
}
}
break;
}
}
}

function _ZEN_Component_tablePane_setProperty(property,value,value2) {
switch(property) {
case 'parameters':
if ('' != value) {
value = value - 1;
if (this.parameters[value]) {
if (this.parameters[value].value != value2) {
this.parameters[value].value = value2;
this.executeQuery();
}
}
}
break;
case 'currPage':
this.gotoPage(value);
break;
case 'pageSize':
if (value != this.pageSize) {
this.currPage = 1; // go back to start
this.pageSize = value;
this.refreshTable();
}
break;
case 'nowrap':
case 'showValueInTooltip':
value = value ? true : false;
if (value != this[property]) {
this[property] = value;
this.refreshTable();
}
break;
case 'headerLayout':
case 'fixedHeaders':
case 'bodyHeight':
case 'extraColumnWidth':
case 'caption':
case 'useKeys':
if (value != this[property]) {
this[property] = value;
this.refreshTable();
}
break;
case 'showFilters':
this.showColumnFilters(value ? true : false);
break;
case 'filtersDisabled':
this.disableColumnFilters(value ? true : false);
break;
case 'useSnapshot':
value = value ? true : false;
if (value != this.useSnapshot) {
this.useSnapshot = value;
this.pageSize = this.useSnapshot ? this.pageSize : 0;
this.refreshTable();
}
break;
default:
return this.invokeSuper('setProperty',arguments);
break;
}
return true;
}

function _ZEN_Component_tablePane_showColumnFilters(flag) {
this.showFilters = flag;
var tr = this.findElement('filterRow');
if (tr) {
tr.style.display = flag ? '' : 'none';
}
}

function _ZEN_Component_tablePane_showDateSelector(cname,index,type) {
if (this.filtersDisabled) return false;
var ctrl = this.findElement("filter"+index+"_" + cname);
zenASSERT(ctrl,'Unable to find filter element',arguments);
var value = ctrl.value;
var top,left;
var top = zenGetTop(ctrl) + ctrl.offsetHeight - zenGetTopScroll(ctrl);
var left = zenGetLeft(ctrl) - zenGetLeftScroll(ctrl);
top += document.body.scrollTop;
left += document.body.scrollLeft;
var group = zenPage.createComponent('modalGroup');
group.setProperty('seed',cname+":"+index);
group.setProperty('onaction','zenPage.getComponent('+this.index+').setDateFilter(group);');
if ('datetime' == type) {
var calParms = new Object();
calParms['showTime'] = true;
group.show('','calendar',value,top,left,null,null,calParms);
}
else {
group.show('','calendar',value,top,left);
}
}

function _ZEN_Component_tablePane_tpKeyDownHandler(evt) {
evt = evt ? evt : window.event;
var ret = true;
var row = this.selectedIndex;
var rows = (''!=this.rowCount) ? parseInt(this.rowCount.split(' ')[0]) : '';
var rowcount = ((''!=rows)&&('' == this.pageSize || 0 == this.pageSize)) ? rows : this.pageSize;
if ((''!=rows)&&(rowcount > rows)) {
rowcount = rows;
}
if ('' != this.onkeypress) {
ret = zenInvokeCallbackMethod(this.onkeypress,this,'onkeypress','evt',evt);
}
if (!ret) {
return false;
}
switch(evt.keyCode) {
case zenENTER:
break;
case zenPAGEUP:
this.previousPage(true);
break;
case zenPAGEDN:
this.nextPage(true);
break;
case zenEND:
if (evt.ctrlKey) {
this.lastPage();
}
else {
this.selectRow(rowcount-1,true,'keypress');
}
break;
case zenHOME:
ret = false;
if (evt.ctrlKey) {
this.firstPage();
}
else {
this.selectRow(0,true,'keypress');
}
break;
case zenUP:
ret = false;
if (row > 0) {
this.selectRow(row-1,true,'keypress');
}
break;
case zenDOWN:
ret = false;
if (row < rowcount-1) {
this.selectRow(row+1,true,'keypress');
}
break;
case zenDELETE:
break;
case zenTAB:
break;
default:
break;
}
if (!ret) {
if (evt.preventDefault) {
evt.preventDefault();
}
evt.cancelBubble = true;
}
return ret;
}

function _ZEN_Component_tablePane_tpKeyPressHandler(evt) {
evt = evt ? evt : window.event;
var ret = true;
if ('' != this.onkeypress) {
ret = zenInvokeCallbackMethod(this.onkeypress,this,'onkeypress','evt',evt);
}
return ret;
}

function _ZEN_Component_tablePane_FetchRowFromSnapshot(pIndex,pID,pRow,pCurrColumn,pSortOrder) {
	return zenClassMethod(this,'FetchRowFromSnapshot','L,L,L,L,L','BOOLEAN',arguments);
}

function _ZEN_Component_tablePane_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_tablePane__Loader() {
	zenLoadClass('_ZEN_Component_simpleTablePane');
	_ZEN_Component_tablePane.prototype = zenCreate('_ZEN_Component_simpleTablePane',-1);
	var p = _ZEN_Component_tablePane.prototype;
	p.constructor = _ZEN_Component_tablePane;
	p.superClass = ('undefined' == typeof _ZEN_Component_simpleTablePane) ? zenMaster._ZEN_Component_simpleTablePane.prototype:_ZEN_Component_simpleTablePane.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.tablePane';
	p._type = 'tablePane';
	p.serialize = _ZEN_Component_tablePane_serialize;
	p.getSettings = _ZEN_Component_tablePane_getSettings;
	p.FetchRowFromSnapshot = _ZEN_Component_tablePane_FetchRowFromSnapshot;
	p.ReallyRefreshContents = _ZEN_Component_tablePane_ReallyRefreshContents;
	p.addNavigator = _ZEN_Component_tablePane_addNavigator;
	p.appendColumn = _ZEN_Component_tablePane_appendColumn;
	p.applyFilters = _ZEN_Component_tablePane_applyFilters;
	p.disableColumnFilters = _ZEN_Component_tablePane_disableColumnFilters;
	p.executeQuery = _ZEN_Component_tablePane_executeQuery;
	p.filterChanged = _ZEN_Component_tablePane_filterChanged;
	p.filterKeyPressed = _ZEN_Component_tablePane_filterKeyPressed;
	p.findChildByClass = _ZEN_Component_tablePane_findChildByClass;
	p.findChildByTag = _ZEN_Component_tablePane_findChildByTag;
	p.findDescendantByClass = _ZEN_Component_tablePane_findDescendantByClass;
	p.firstPage = _ZEN_Component_tablePane_firstPage;
	p.focus = _ZEN_Component_tablePane_focus;
	p.getColumnFilters = _ZEN_Component_tablePane_getColumnFilters;
	p.getFilterValue = _ZEN_Component_tablePane_getFilterValue;
	p.getPageCount = _ZEN_Component_tablePane_getPageCount;
	p.getRowData = _ZEN_Component_tablePane_getRowData;
	p.gotoPage = _ZEN_Component_tablePane_gotoPage;
	p.headerClick = _ZEN_Component_tablePane_headerClick;
	p.lastPage = _ZEN_Component_tablePane_lastPage;
	p.nextPage = _ZEN_Component_tablePane_nextPage;
	p.onRefreshContents = _ZEN_Component_tablePane_onRefreshContents;
	p.onloadHandler = _ZEN_Component_tablePane_onloadHandler;
	p.previousPage = _ZEN_Component_tablePane_previousPage;
	p.removeNavigator = _ZEN_Component_tablePane_removeNavigator;
	p.resetColumnFilters = _ZEN_Component_tablePane_resetColumnFilters;
	p.resizeHeaders = _ZEN_Component_tablePane_resizeHeaders;
	p.setColumnFilters = _ZEN_Component_tablePane_setColumnFilters;
	p.setDateFilter = _ZEN_Component_tablePane_setDateFilter;
	p.setFilterValue = _ZEN_Component_tablePane_setFilterValue;
	p.setProperty = _ZEN_Component_tablePane_setProperty;
	p.showColumnFilters = _ZEN_Component_tablePane_showColumnFilters;
	p.showDateSelector = _ZEN_Component_tablePane_showDateSelector;
	p.tpKeyDownHandler = _ZEN_Component_tablePane_tpKeyDownHandler;
	p.tpKeyPressHandler = _ZEN_Component_tablePane_tpKeyPressHandler;
}

// ================================================================================
_zenClassIdx['spacer'] = '_ZEN_Component_spacer';
function _ZEN_Component_spacer(index,id) {
	if (index>=0) {_ZEN_Component_spacer__init(this,index,id);}
}

function _ZEN_Component_spacer__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
}
function _ZEN_Component_spacer_serialize(set,s)
{
	s[0]='1038571008';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.onupdate;s[31]=this.overlayMode;s[32]=this.renderFlag;s[33]=(this.showLabel?1:0);s[34]=this.slice;s[35]=this.title;s[36]=this.tuple;s[37]=this.valign;s[38]=(this.visible?1:0);s[39]=this.width;
}
function _ZEN_Component_spacer_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_spacer_setProperty(property,value,value2) {
switch(property) {
case 'height':
case 'width':
var el = this.findElement('spacer');
this[property] = value;
if (el) {
value = ('*' == value) ? '100%' : value;
if ('height'==property) {
el.style.height = value;
}
else {
el.style.width = value;
}
}
else {
this.refreshContents();
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_spacer_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_spacer__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_spacer.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_spacer.prototype;
	p.constructor = _ZEN_Component_spacer;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.spacer';
	p._type = 'spacer';
	p.serialize = _ZEN_Component_spacer_serialize;
	p.getSettings = _ZEN_Component_spacer_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_spacer_ReallyRefreshContents;
	p.setProperty = _ZEN_Component_spacer_setProperty;
}

// ================================================================================
_zenClassIdx['tableNavigatorBar'] = '_ZEN_Component_tableNavigatorBar';
function _ZEN_Component_tableNavigatorBar(index,id) {
	if (index>=0) {_ZEN_Component_tableNavigatorBar__init(this,index,id);}
}

function _ZEN_Component_tableNavigatorBar__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.maxButtons = '5';
	o.maxPageSize = '1000';
	o.msgFilter = 'Filter';
	o.msgFirstPage = 'Go to first page';
	o.msgFound = 'Results';
	o.msgLastPage = 'Go to last page';
	o.msgNextPage = 'Go to next page';
	o.msgOf = 'of';
	o.msgPage = 'Page';
	o.msgPageSize = 'Page size';
	o.msgPreviousPage = 'Go to previous page';
	o.onfilterChange = '';
	o.showFilter = false;
	o.showPageSize = false;
	o.tablePaneId = '';
}
function _ZEN_Component_tableNavigatorBar_serialize(set,s)
{
	s[0]='1787900285';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.maxButtons;s[24]=this.maxPageSize;s[25]=this.msgFilter;s[26]=this.msgFirstPage;s[27]=this.msgFound;s[28]=this.msgLastPage;s[29]=this.msgNextPage;s[30]=this.msgOf;s[31]=this.msgPage;s[32]=this.msgPageSize;s[33]=this.msgPreviousPage;s[34]=this.onafterdrag;s[35]=this.onbeforedrag;s[36]=this.ondrag;s[37]=this.ondrop;s[38]=this.onfilterChange;s[39]=this.onhide;s[40]=this.onrefresh;s[41]=this.onshow;s[42]=this.onupdate;s[43]=this.overlayMode;s[44]=this.renderFlag;s[45]=(this.showFilter?1:0);s[46]=(this.showLabel?1:0);s[47]=(this.showPageSize?1:0);s[48]=this.slice;s[49]=this.tablePaneId;s[50]=this.title;s[51]=this.tuple;s[52]=this.valign;s[53]=(this.visible?1:0);s[54]=this.width;
}
function _ZEN_Component_tableNavigatorBar_getSettings(s)
{
	s['name'] = 'string';
	s['maxButtons'] = 'integer';
	s['maxPageSize'] = 'integer';
	s['msgFilter'] = 'caption';
	s['msgFirstPage'] = 'caption';
	s['msgFound'] = 'caption';
	s['msgLastPage'] = 'caption';
	s['msgNextPage'] = 'caption';
	s['msgOf'] = 'caption';
	s['msgPage'] = 'caption';
	s['msgPageSize'] = 'caption';
	s['msgPreviousPage'] = 'caption';
	s['onfilterChange'] = 'eventHandler';
	s['showFilter'] = 'boolean';
	s['showPageSize'] = 'boolean';
	s['tablePaneId'] = 'id';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_tableNavigatorBar_gotoPage(where) {
if (null == this.tablePane) return;
switch(where) {
case 'first':
this.tablePane.firstPage();
break;
case 'last':
this.tablePane.lastPage();
break;
case 'next':
this.tablePane.nextPage();
break;
case 'prev':
this.tablePane.previousPage();
break;
default:
var page = parseInt(where,10);
if (!isNaN(page)) {
this.tablePane.gotoPage(page);
}
break;
}
return true;
}

function _ZEN_Component_tableNavigatorBar_onfilterHandler(value) {
zenInvokeCallbackMethod(this.onfilterChange,this,'onfilterChange','value',value);
}

function _ZEN_Component_tableNavigatorBar_onloadHandler() {
this.setProperty('tablePaneId',this.tablePaneId);
}

function _ZEN_Component_tableNavigatorBar_onpageSizeHandler(ctrl) {
var size = parseInt(ctrl.value,10);
size = isNaN(size) ? 0 : size;
size = (size < 0) ? 0 : size;
size = (size > this.maxPageSize) ? this.maxPageSize : size;
ctrl.value = size;
ctrl.focus();
if (null == this.tablePane) return;
this.tablePane.setProperty('pageSize',size);
}

function _ZEN_Component_tableNavigatorBar_renderButtons() {
if (this.getEnclosingDiv() == null) { return ''; }
var table = this.tablePane;
if (null == table) { return ''; }
var pageNo = table.getProperty('currPage');
var pageCount = table.getPageCount();
var html = new Array();
html[html.length] = '<span class="tnbrPagingButtons">';
html[html.length] = '&nbsp;' + this.msgPage + ':&nbsp;';
if (pageNo > 1) {
html[html.length] = '<a title="'+this.msgFirstPage+'" class="tnbrPageLink" style="cursor:pointer;" onmousedown="zenPage.getComponent(' + this.index + ').gotoPage(\'first\');"><b>|&lsaquo;</b></a>';
html[html.length] = '<a title="'+this.msgPreviousPage+'" class="tnbrPageLink" style="cursor:pointer" onmousedown="zenPage.getComponent(' + this.index + ').gotoPage(\'prev\');"><b>&lsaquo;&lsaquo;</b></a>';
}
else {
html[html.length] = '<a class="tnbrPageLinkDisabled"><b>|&lsaquo;</b></a>';
html[html.length] = '<a class="tnbrPageLinkDisabled"><b>&lsaquo;&lsaquo;</b></a>';
}
var maxButtons = parseInt(this.maxButtons,10);
maxButtons = (maxButtons < 1) ? 1 : maxButtons;
var startPage = ((Math.floor((pageNo-1)/maxButtons)) * maxButtons) + 1;
var endPage = startPage + (maxButtons - 1);
endPage = (endPage>pageCount) ? pageCount : endPage;
for (var p = startPage; p <= endPage; p++) {
var cls = (p==pageNo) ? 'tnbrPageLinkCurr' : 'tnbrPageLink';
html[html.length] = '<a class="'+cls+'" style="cursor:pointer;" onmousedown="return zenPage.getComponent(' + this.index + ').gotoPage('+p+');">'+p+'</a>';
}
if (pageNo < pageCount) {
html[html.length] = '<a title="'+this.msgNextPage+'" class="tnbrPageLink" style="cursor:pointer;" onmousedown="zenPage.getComponent(' + this.index + ').gotoPage(\'next\');"><b>&rsaquo;&rsaquo;</b></a>';
html[html.length] = '<a title="'+this.msgLastPage+'" class="tnbrPageLink" style="cursor:pointer;" onmousedown="zenPage.getComponent(' + this.index + ').gotoPage(\'last\');"><b>&rsaquo;|</b></a>';
}
else {
html[html.length] = '<a class="tnbrPageLinkDisabled"><b>&rsaquo;&rsaquo;</b></a>';
html[html.length] = '<a class="tnbrPageLinkDisabled"><b>&rsaquo;|</b></a>';
}
html[html.length] = this.msgOf + '&nbsp;' + pageCount + '&nbsp;';
return html.join('');
}

function _ZEN_Component_tableNavigatorBar_renderContents() {
if (this.getEnclosingDiv() == null) return;
var html = new Array();
html[html.length] = '<table class="tnbrTable" border="0" cellpadding="3" cellspacing="0"><tr>';
html[html.length] = '<td align="left" valign="center" nowrap>&nbsp;';
var table = this.tablePane;
if (null == table) {
html[html.length] = 'Not connected';
}
else {
var rowCount = table.getProperty('rowCount');
var pageSize = table.getProperty('pageSize');
if (this.showFilter) {
html[html.length] = '<span class="tnbrFilter">';
html[html.length] = this.msgFilter + ':&nbsp;';
html[html.length] = '<input id="'+this.makeId('filter')+'" type="text" size="8" onchange="zenPage.getComponent('+this.index+').onfilterHandler(this.value);"/>&nbsp;';
html[html.length] = '</span>';
}
if (this.showPageSize) {
html[html.length] = '<span class="tnbrFilter">';
html[html.length] = this.msgPageSize + ':&nbsp;';
html[html.length] = '<input id="'+this.makeId('pgsize')+'" type="text" size="4" onchange="zenPage.getComponent('+this.index+').onpageSizeHandler(this);" value="'+pageSize+'"/>&nbsp;';
html[html.length] = '</span>';
}
html[html.length] = '<span class="tnbrFound">';
html[html.length] = this.msgFound + ':&nbsp;<span id="'+this.makeId('rowCount')+'">' + rowCount;
html[html.length] = '</span></span>&nbsp;';
html[html.length] = '<span id="'+this.makeId('tnbrPagingSpan')+'">';
html[html.length] = this.renderButtons();
html[html.length] = '</span>';
}
html[html.length] = '</td>';
html[html.length] = '<td align="right" width="5%">&nbsp;</td></tr></table>';
this.getEnclosingDiv().innerHTML = html.join('');
}

function _ZEN_Component_tableNavigatorBar_setProperty(property,value,value2) {
switch(property) {
case 'tablePaneId':
if (this.tablePane && this.tablePane.removeNavigator) {
this.tablePane.removeNavigator();
this.tablePane = null;
}
this.tablePaneId = value;
if (this.composite) {
this.tablePane = this.composite.getChildById(this.tablePaneId);
}
else {
this.tablePane = zenPage.getComponentById(this.tablePaneId);
}
if (this.tablePane && this.tablePane.addNavigator) {
this.tablePane.addNavigator(this);
}
this.updateState();
break;
case 'maxButtons':
this.maxButtons = parseInt(value,10);
this.render();
break;
case 'showFilter':
this.showFilter = value ? true : false;
this.render();
break;
case 'maxPageSize':
this.maxPageSize = parseInt(value,10);
break;
default:
this.invokeSuper('setProperty',arguments);
break;
}
}

function _ZEN_Component_tableNavigatorBar_updateState() {
var span = this.findElement('tnbrPagingSpan');
if (span) {
span.innerHTML = this.renderButtons();
if (this.tablePane) {
var ctrl = this.findElement('pgsize');
if (ctrl) {
ctrl.value = this.tablePane.getProperty('pageSize');
}
var sp = this.findElement('rowCount');
if (sp) {
sp.innerHTML = this.tablePane.getProperty('rowCount');
}
}
}
else {
this.renderContents();
}
}

function _ZEN_Component_tableNavigatorBar_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_tableNavigatorBar__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_tableNavigatorBar.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_tableNavigatorBar.prototype;
	p.constructor = _ZEN_Component_tableNavigatorBar;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.tableNavigatorBar';
	p._type = 'tableNavigatorBar';
	p.serialize = _ZEN_Component_tableNavigatorBar_serialize;
	p.getSettings = _ZEN_Component_tableNavigatorBar_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_tableNavigatorBar_ReallyRefreshContents;
	p.gotoPage = _ZEN_Component_tableNavigatorBar_gotoPage;
	p.onfilterHandler = _ZEN_Component_tableNavigatorBar_onfilterHandler;
	p.onloadHandler = _ZEN_Component_tableNavigatorBar_onloadHandler;
	p.onpageSizeHandler = _ZEN_Component_tableNavigatorBar_onpageSizeHandler;
	p.renderButtons = _ZEN_Component_tableNavigatorBar_renderButtons;
	p.renderContents = _ZEN_Component_tableNavigatorBar_renderContents;
	p.setProperty = _ZEN_Component_tableNavigatorBar_setProperty;
	p.updateState = _ZEN_Component_tableNavigatorBar_updateState;
}

// ================================================================================
_zenClassIdx['timer'] = '_ZEN_Component_timer';
function _ZEN_Component_timer(index,id) {
	if (index>=0) {_ZEN_Component_timer__init(this,index,id);}
}

function _ZEN_Component_timer__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.ontimeout = '';
	o.timeout = '';
	o.timerid = '';
	o.visible = false;
}
function _ZEN_Component_timer_serialize(set,s)
{
	s[0]='1149628766';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.ontimeout;s[31]=this.onupdate;s[32]=this.overlayMode;s[33]=this.renderFlag;s[34]=(this.showLabel?1:0);s[35]=this.slice;s[36]=this.timeout;s[37]=this.timerid;s[38]=this.title;s[39]=this.tuple;s[40]=this.valign;s[41]=(this.visible?1:0);s[42]=this.width;
}
function _ZEN_Component_timer_getSettings(s)
{
	s['name'] = 'string';
	s['ontimeout'] = 'eventHandler';
	s['timeout'] = 'integer';
	s['timerid'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_timer_clearTimer() {
if (this.timerid) {
window.clearTimeout(this.timerid);
this.timerid = null;
}
}

function _ZEN_Component_timer_onDelete() {
this.clearTimer();
}

function _ZEN_Component_timer_onloadHandler() {
this.startTimer();
}

function _ZEN_Component_timer_setProperty(property,value,value2) {
switch(property) {
case 'timeout':
value = parseInt(value,10);
value = isNaN(value) ? 0 : value;
this.timeout = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Component_timer_startTimer() {
this.clearTimer();
if (0 != this.timeout && this.ontimeout && this.ontimer != '') {
var code = this.ontimeout;
code = code.replace(/\"/g,'\\\"');
this.timerid = window.setTimeout('zenFireEvent('+this.index+',"'+code+'","ontimeout");',this.timeout);
}
}

function _ZEN_Component_timer_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_timer__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_timer.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_timer.prototype;
	p.constructor = _ZEN_Component_timer;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.timer';
	p._type = 'timer';
	p.serialize = _ZEN_Component_timer_serialize;
	p.getSettings = _ZEN_Component_timer_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_timer_ReallyRefreshContents;
	p.clearTimer = _ZEN_Component_timer_clearTimer;
	p.onDelete = _ZEN_Component_timer_onDelete;
	p.onloadHandler = _ZEN_Component_timer_onloadHandler;
	p.setProperty = _ZEN_Component_timer_setProperty;
	p.startTimer = _ZEN_Component_timer_startTimer;
}

// ================================================================================
_zenClassIdx['titleBox'] = '_ZEN_Component_titleBox';
function _ZEN_Component_titleBox(index,id) {
	if (index>=0) {_ZEN_Component_titleBox__init(this,index,id);}
}

function _ZEN_Component_titleBox__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.subtitle = '';
	o.title = '';
	o.titleStyle = '';
}
function _ZEN_Component_titleBox_serialize(set,s)
{
	s[0]='1043578806';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.onupdate;s[31]=this.overlayMode;s[32]=this.renderFlag;s[33]=(this.showLabel?1:0);s[34]=this.slice;s[35]=this.subtitle;s[36]=this.title;s[37]=this.titleStyle;s[38]=this.tuple;s[39]=this.valign;s[40]=(this.visible?1:0);s[41]=this.width;
}
function _ZEN_Component_titleBox_getSettings(s)
{
	s['name'] = 'string';
	s['subtitle'] = 'caption';
	s['title'] = 'caption';
	s['titleStyle'] = 'style';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_titleBox_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_titleBox__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_titleBox.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_titleBox.prototype;
	p.constructor = _ZEN_Component_titleBox;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.titleBox';
	p._type = 'titleBox';
	p.serialize = _ZEN_Component_titleBox_serialize;
	p.getSettings = _ZEN_Component_titleBox_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_titleBox_ReallyRefreshContents;
}

// ================================================================================
_zenClassIdx['titlePane'] = '_ZEN_Component_titlePane';
function _ZEN_Component_titlePane(index,id) {
	if (index>=0) {_ZEN_Component_titlePane__init(this,index,id);}
}

function _ZEN_Component_titlePane__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.title = '';
}
function _ZEN_Component_titlePane_serialize(set,s)
{
	s[0]='1038571008';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.aux;s[8]=this.containerStyle;s[9]=(this.dragEnabled?1:0);s[10]=(this.dropEnabled?1:0);s[11]=(this.dynamic?1:0);s[12]=this.enclosingClass;s[13]=this.enclosingStyle;s[14]=this.error;s[15]=this.height;s[16]=(this.hidden?1:0);s[17]=this.hint;s[18]=this.hintClass;s[19]=this.hintStyle;s[20]=this.label;s[21]=this.labelClass;s[22]=this.labelStyle;s[23]=this.onafterdrag;s[24]=this.onbeforedrag;s[25]=this.ondrag;s[26]=this.ondrop;s[27]=this.onhide;s[28]=this.onrefresh;s[29]=this.onshow;s[30]=this.onupdate;s[31]=this.overlayMode;s[32]=this.renderFlag;s[33]=(this.showLabel?1:0);s[34]=this.slice;s[35]=this.title;s[36]=this.tuple;s[37]=this.valign;s[38]=(this.visible?1:0);s[39]=this.width;
}
function _ZEN_Component_titlePane_getSettings(s)
{
	s['name'] = 'string';
	s['title'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Component_titlePane_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_Component_titlePane__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Component_titlePane.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Component_titlePane.prototype;
	p.constructor = _ZEN_Component_titlePane;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Component.titlePane';
	p._type = 'titlePane';
	p.serialize = _ZEN_Component_titlePane_serialize;
	p.getSettings = _ZEN_Component_titlePane_getSettings;
	p.ReallyRefreshContents = _ZEN_Component_titlePane_ReallyRefreshContents;
}
/* EOF */