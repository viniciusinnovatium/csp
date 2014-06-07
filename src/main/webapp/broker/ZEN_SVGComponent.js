/*** ZEN Client Class Definitions ***/
/*** Package:   %ZEN.SVGComponent ***/
/*** Namespace:   ^^u:\kit\little\release\mgr\ ***/
/*** Generated: 2009-05-12 12:38:31 ***/

// version number: must match %ZENVersion
js_ZEN_SVGComponent = 14;

// ================================================================================
_zenClassIdx['svgFrame'] = '_ZEN_SVGComponent_svgFrame';
function _ZEN_SVGComponent_svgFrame(index,id) {
	if (index>=0) {_ZEN_SVGComponent_svgFrame__init(this,index,id);}
}

function _ZEN_SVGComponent_svgFrame__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.autoHeight = '';
	o.autoWidth = '';
	o.backgroundStyle = 'fill: white;';
	o.children = new Array();
	o.disabled = false;
	o.document = null;
	o.dragCanvas = false;
	o.editMode = 'none';
	o.frameStyle = '';
	o.gridX = '25';
	o.gridY = '25';
	o.height = '100';
	o.layout = '';
	o.offsetX = '0';
	o.offsetY = '0';
	o.ondragCanvas = '';
	o.onmouseWheel = '';
	o.onmoveItem = '';
	o.onresizeItem = '';
	o.onselectItem = '';
	o.onzoom = '';
	o.parameters = new Object();
	o.selectedItem = null;
	o.selectedItems = new Array();
	o.snapToGrid = false;
	o.svgAutoSize = true;
	o.svgGroup = null;
	o.svgHeight = '';
	o.svgPage = '';
	o.svgRoot = null;
	o.svgWidth = '';
	o.svgWindow = null;
	o.width = '300';
	o.zoom = '100';
	o.zoomLevels = '10,25,50,75,100,125,150,175,200,300,400,500';
	o.zoomWithWheel = false;
}
function _ZEN_SVGComponent_svgFrame_serialize(set,s)
{
	s[0]='2661673195';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.autoHeight;s[8]=this.autoWidth;s[9]=this.aux;s[10]=this.backgroundStyle;s[11]=set.serializeList(this,this.children,true,'children');s[12]=this.containerStyle;s[13]=(this.disabled?1:0);s[14]=(this.dragCanvas?1:0);s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.editMode;s[19]=this.enclosingClass;s[20]=this.enclosingStyle;s[21]=this.error;s[22]=this.frameStyle;s[23]=this.gridX;s[24]=this.gridY;s[25]=this.height;s[26]=(this.hidden?1:0);s[27]=this.hint;s[28]=this.hintClass;s[29]=this.hintStyle;s[30]=this.label;s[31]=this.labelClass;s[32]=this.labelStyle;s[33]=this.layout;s[34]=this.offsetX;s[35]=this.offsetY;s[36]=this.onafterdrag;s[37]=this.onbeforedrag;s[38]=this.ondrag;s[39]=this.ondragCanvas;s[40]=this.ondrop;s[41]=this.onhide;s[42]=this.onmouseWheel;s[43]=this.onmoveItem;s[44]=this.onrefresh;s[45]=this.onresizeItem;s[46]=this.onselectItem;s[47]=this.onshow;s[48]=this.onupdate;s[49]=this.onzoom;s[50]=this.overlayMode;s[51]=set.serializeArray(this,this.parameters,true,'parameters');s[52]=this.renderFlag;s[53]=set.addObject(this.selectedItem,'selectedItem');s[54]=set.serializeList(this,this.selectedItems,true,'selectedItems');s[55]=(this.showLabel?1:0);s[56]=this.slice;s[57]=(this.snapToGrid?1:0);s[58]=(this.svgAutoSize?1:0);s[59]=this.svgHeight;s[60]=this.svgPage;s[61]=this.svgWidth;s[62]=this.title;s[63]=this.tuple;s[64]=this.valign;s[65]=(this.visible?1:0);s[66]=this.width;s[67]=this.zoom;s[68]=this.zoomLevels;s[69]=(this.zoomWithWheel?1:0);
}
function _ZEN_SVGComponent_svgFrame_getSettings(s)
{
	s['name'] = 'string';
	s['backgroundStyle'] = 'svgStyle';
	s['disabled'] = 'boolean';
	s['dragCanvas'] = 'boolean';
	s['editMode'] = 'enum:none,select,drag';
	s['frameStyle'] = 'style';
	s['gridX'] = 'integer';
	s['gridY'] = 'integer';
	s['layout'] = 'enum:vertical,horizontal,none';
	s['offsetX'] = 'integer';
	s['offsetY'] = 'integer';
	s['ondragCanvas'] = 'eventHandler';
	s['onmouseWheel'] = 'eventHandler';
	s['onmoveItem'] = 'eventHandler';
	s['onresizeItem'] = 'eventHandler';
	s['onselectItem'] = 'eventHandler';
	s['onzoom'] = 'eventHandler';
	s['parameters'] = 'string';
	s['snapToGrid'] = 'boolean';
	s['svgAutoSize'] = 'boolean';
	s['svgHeight'] = 'integer';
	s['svgWidth'] = 'integer';
	s['zoom'] = 'float';
	s['zoomLevels'] = 'csv';
	s['zoomWithWheel'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_svgFrame_addChild(component) {
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

function _ZEN_SVGComponent_svgFrame_canDragShapes() {
return ('drag' == this._runtimeEditMode);
}

function _ZEN_SVGComponent_svgFrame_getSVGDocument() {
var embed = this.findElement("frame");
if (embed) {
return embed.getSVGDocument();
}
return null;
}

function _ZEN_SVGComponent_svgFrame_getSelectedItem() {
return ('' == this.selectedItem) ? null : this.selectedItem;
}

function _ZEN_SVGComponent_svgFrame_getSelectedItems() {
return this.selectedItems;
}

function _ZEN_SVGComponent_svgFrame_getZoomIndex(x) {
if (null == this._zoomIndex) {
var currZoom = parseFloat(this.zoom);
var zooms = this.zoomLevels.split(',');
this._zoomIndex = zooms.length-1;
for (var z = 0; z < zooms.length; z++) {
if (parseFloat(zooms[z]) > currZoom) {
this._zoomIndex = z;
break;
}
}
}
return this._zoomIndex;
}

function _ZEN_SVGComponent_svgFrame_isSelected(item) {
if (null == item) {
return false;
}
for (var i = 0; i < this.selectedItems.length; i++) {
if (this.selectedItems[i] == item) {
return true;
}
}
return false;
}

function _ZEN_SVGComponent_svgFrame_layoutChildren() {
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

function _ZEN_SVGComponent_svgFrame_mousedownHandler(evt) {
if (evt.target == this.svgBackground) {
this.selectItem(null);
if (this.dragCanvas) {
this.startDragCanvas(evt);
}
}
}

function _ZEN_SVGComponent_svgFrame_mousemoveHandler(evt) {
var currZoom = this.zoom;
var oldEvent = zenEvent;
zenEvent = evt ? evt : window.event;
switch (this._currOperation) {
case 'move':
if (this._mouseTarget) {
var size = this._mouseTarget.getSizeAbsolute();
var dx = ((evt.clientX * (100/currZoom)) + this._deltaX) - size.x;
var dy = ((evt.clientY * (100/currZoom)) + this._deltaY) - size.y;
if (dx*dx > 4 || dy*dy > 4) {
if (this.snapToGrid && this.gridX > 0 && this.gridY > 0) {
dx = Math.floor(dx / this.gridX) * this.gridX;
dy = Math.floor(dy / this.gridY) * this.gridY;
}
this._isMoved = true;
for (var i = 0; i < this.selectedItems.length; i++) {
var item = this.selectedItems[i];
var size = item.getSizeAbsolute();
item.updateOverlay(size.x + dx,size.y + dy,size.width,size.height);
}
zenInvokeCallbackMethod(this.onmoveItem,this,'onmoveItem','done',false);
}
}
break;
case 'dragCanvas':
var dx = ((evt.clientX * (100/currZoom)) + this._deltaX) - this.offsetX;
var dy = ((evt.clientY * (100/currZoom)) + this._deltaY) - this.offsetY;
if (dx*dx > 4 || dy*dy > 4) {
this._isMoved = true;
this.setOffsets(this.offsetX + dx,this.offsetY + dy);
zenInvokeCallbackMethod(this.ondragCanvas,this,'ondragCanvas','done',false);
}
break;
case 'resize':
if (this._mouseTarget) {
var size = this._mouseTarget.getSizeAbsolute();
var dx = ((evt.clientX * (100/currZoom)) + this._deltaX) - size.x;
var dy = ((evt.clientY * (100/currZoom)) + this._deltaY) - size.y;
var x,y,w,h;
if (dx*dx > 4 || dy*dy > 4) {
this._isMoved = true;
if (this.snapToGrid && this.gridX > 0 && this.gridY > 0) {
dx = Math.floor(dx / this.gridX) * this.gridX;
dy = Math.floor(dy / this.gridY) * this.gridY;
}
for (var i = 0; i < this.selectedItems.length; i++) {
var item = this.selectedItems[i];
var size = item.getSizeAbsolute();
switch(this._sizingHandle) {
case 'ne':
w = size.width + dx;
h = size.height - dy;
x = size.x;
y = (h > 0) ? size.y + dy : size.y + size.height;
break;
case 'nw':
w = size.width - dx;
h = size.height - dy;
x = (w > 0) ? size.x + dx : size.x + size.width;
y = (h > 0) ? size.y + dy : size.y + size.height;
break;
case 'se':
w = size.width + dx;
h = size.height + dy;
x = size.x;
y = size.y;
break;
case 'sw':
w = size.width - dx;
h = size.height + dy;
x = (w > 0) ? size.x + dx : size.x + size.width;
y = size.y;
break;
}
w = (w < 0) ? 0 : w;
h = (h < 0) ? 0 : h;
item.updateOverlay(x,y,w,h);
}
zenInvokeCallbackMethod(this.onresizeItem,this,'onresizeItem','done',false);
}
}
break;
default:
break;
}
zenEvent = oldEvent;
}

function _ZEN_SVGComponent_svgFrame_mouseupHandler(evt) {
var currZoom = this.zoom;
var oldEvent = zenEvent;
zenEvent = evt ? evt : window.event;
switch (this._currOperation) {
case 'move':
if (this._isMoved && this._mouseTarget) {
var size = this._mouseTarget.getSizeAbsolute();
var dx = ((evt.clientX * (100/currZoom)) + this._deltaX) - size.x;
var dy = ((evt.clientY * (100/currZoom)) + this._deltaY) - size.y;
if (this.snapToGrid && this.gridX > 0 && this.gridY > 0) {
dx = Math.floor(dx / this.gridX) * this.gridX;
dy = Math.floor(dy / this.gridY) * this.gridY;
}
for (var i = 0; i < this.selectedItems.length; i++) {
var item = this.selectedItems[i];
this.moveItem(item,dx,dy);
}
zenInvokeCallbackMethod(this.onmoveItem,this,'onmoveItem','done',true);
}
break;
case 'dragCanvas':
if (this._isMoved) {
var dx = ((evt.clientX * (100/currZoom)) + this._deltaX) - this.offsetX;
var dy = ((evt.clientY * (100/currZoom)) + this._deltaY) - this.offsetY;
this.setOffsets(this.offsetX + dx,this.offsetY + dy);
zenInvokeCallbackMethod(this.ondragCanvas,this,'ondragCanvas','done',true);
}
break;
case 'resize':
if (this._isMoved && this._mouseTarget) {
var size = this._mouseTarget.getSizeAbsolute();
var dx = ((evt.clientX * (100/currZoom)) + this._deltaX) - size.x;
var dy = ((evt.clientY * (100/currZoom)) + this._deltaY) - size.y;
if (this.snapToGrid && this.gridX > 0 && this.gridY > 0) {
dx = Math.floor(dx / this.gridX) * this.gridX;
dy = Math.floor(dy / this.gridY) * this.gridY;
}
var x,y,w,h;
for (var i = 0; i < this.selectedItems.length; i++) {
var item = this.selectedItems[i];
var size = item.getSizeAbsolute();
switch(this._sizingHandle) {
case 'ne':
w = size.width + dx;
h = size.height - dy;
x = 0;
y = (h > 0) ? dy : size.height;
break;
case 'nw':
w = size.width - dx;
h = size.height - dy;
x = (w > 0) ? dx : size.width;
y = (h > 0) ? dy : size.height;
break;
case 'se':
w = size.width + dx;
h = size.height + dy;
x = 0;
y = 0;
break;
case 'sw':
w = size.width - dx;
h = size.height + dy;
x = (w > 0) ? dx : size.width;
y = 0;
break;
}
w = (w < 0) ? 0 : w;
h = (h < 0) ? 0 : h;
item.setProperty('width',w);
item.setProperty('height',h);
this.moveItem(item,x,y);
}
zenInvokeCallbackMethod(this.onresizeItem,this,'onresizeItem','done',true);
}
break;
}
zenEvent = oldEvent;
this._isMoved = false;
this._mouseTarget = null;
this._currOperation = null;
this._sizingHandle = null;
this.svgRoot.removeEventListener('mousemove',this._mmHandler,false);
this.svgRoot.removeEventListener('mouseup',this._muHandler,false);
}

function _ZEN_SVGComponent_svgFrame_mousewheelHandler(evt) {
evt.stopPropagation();
evt.preventDefault()
var delta = 0;
var cx = evt.clientX;
var cy = evt.clientY;
if (!evt) {
evt = window.event;
}
if (evt.wheelDelta) {
delta = evt.wheelDelta/120;
if (window.opera) {	delta = -delta; }
}
else if (evt.detail) {
delta = -evt.detail/3;
cx = evt.clientX /15;
cy = evt.clientY /15;
}
if (this.zoomWithWheel) {
if (delta < 0) { this.zoomIn(cx,cy); }
else if (delta > 0) { this.zoomOut(cx,cy); }
}
zenInvokeCallbackMethod(this.onmouseWheel,this,'onmouseWheel','delta',delta);
}

function _ZEN_SVGComponent_svgFrame_moveItem(item,dx,dy) {
if (!item) return;
item.setPosition(parseFloat(item.x) + parseFloat(dx), parseFloat(item.y) + parseFloat(dy));
var group = item.parent;
if (group) {
switch(group.layout) {
case 'vertical':
if (group.children.length > 1) {
group.children.sort(function(a,b) { return a.y - b.y; });
group.layoutChildren();
}
break;
case 'horizontal':
if (group.children.length > 1) {
group.children.sort(function(a,b) { return a.x - b.x; });
group.layoutChildren();
}
break;
default:
group.layoutChildren();
break;
}
}
var size = item.getSizeAbsolute();
item.updateOverlay(size.x,size.y,size.width,size.height);
}

function _ZEN_SVGComponent_svgFrame_removeChild(component) {
zenPage.deleteComponent(component);
}

function _ZEN_SVGComponent_svgFrame_renderSVG(document,parent) {
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

function _ZEN_SVGComponent_svgFrame_selectItem(item,add) {
var itemreq = item;
if (add) {
for (var i = 0; i < this.selectedItems.length; i++) {
if (this.selectedItems[i] == item) {
this.selectedItems.splice(i,1);
item.setOverlayMode(this._runtimeEditMode=='none' ? 0 : 1);
item = null;
break;
}
}
}
else {
if (item && this.isSelected(item)) {
return;
}
}
if (!add) {
for (var i = 0; i < this.selectedItems.length; i++) {
var old = this.selectedItems[i];
this.selectedItems[i] = null;
if (old) {
old.setOverlayMode(this._runtimeEditMode=='none' ? 0 : 1);
}
}
this.selectedItems.length = 0;
}
this.selectedItem = '';
if (item) {
this.selectedItem = item;
this.selectedItems[this.selectedItems.length] = item;
item.setOverlayMode(this._runtimeEditMode=='drag' ? 3 : 2);
}
if (zenPage.designMode) {
alert('selectItem: ' + top.zenPage.selectComponent);
}
var notify = true;
if (this.selectItemHandler) {
notify = this.selectItemHandler(itemreq,add);
}
if (notify) {
zenInvokeCallbackMethod(this.onselectItem,this,'onselectItem','item',itemreq);
}
}

function _ZEN_SVGComponent_svgFrame_setBoundingBox(width,height) {
if (this.svgAutoSize) {
width = parseInt(width,10);
height = parseInt(height,10);
var minw = (this.svgWidth == '') ? 0 : this.svgWidth;
var minh = (this.svgHeight == '') ? 0 : this.svgHeight;
this.autoWidth = (width > minw) ? width : minw;
this.autoHeight = (height > minh) ? height : minh;
this.setFrameSize(this.width,this.height);
}
}

function _ZEN_SVGComponent_svgFrame_setEditMode(mode) {
if (zenPage.designMode) {
this._runtimeEditMode = 'drag';
}
else {
this._runtimeEditMode = mode;
if (mode == this.editMode) {
return;
}
}
this.editMode = mode;
switch (this._runtimeEditMode) {
case 'none':
this.setOverlayMode(0);
break;
case 'select':
this.setOverlayMode(1);
this.selectItem(null);
break;
case 'drag':
this.setOverlayMode(1);
this.selectItem(null);
break;
default:
alert('setEditMode: unknown edit mode:\n' + this._runtimeEditMode);
break;
}
}

function _ZEN_SVGComponent_svgFrame_setFrameSize(w,h) {
try {
var div = this.findElement('svgdiv');
var embed = this.findElement('frame');
this.width = parseInt(w,10);
this.height = parseInt(h,10);
var cwid, chgt, cwidScaled, chgtScaled;
if (this.svgAutoSize) {
cwid = this.autoWidth;
chgt = this.autoHeight;
if ('' != this.svgWidth) {
cwid = (this.autoWidth < parseInt(this.svgWidth,10)) ? parseInt(this.svgWidth,10) : this.autoWidth;
}
if ('' != this.svgHeight) {
chgt = (this.autoHeight < parseInt(this.svgHeight,10)) ? parseInt(this.svgHeight,10) : this.autoHeight;
}
}
else {
cwid = (''==this.svgWidth) ? this.width : parseInt(this.svgWidth,10);
chgt = (''==this.svgHeight) ? this.height : parseInt(this.svgHeight,10);
}
var cwidScaled = cwid * (this.zoom / 100);
var chgtScaled = chgt * (this.zoom / 100);
var ovx = 'auto';
var ovy = 'auto';
var rwid = cwid;
var rhgt = chgt;
if (this.width >= cwidScaled) {
ovx = 'hidden';
cwidScaled = this.width;
rwid = this.width * (100 / this.zoom);
}
if (this.height >= chgtScaled) {
ovy = 'hidden';
chgtScaled = this.height;
rhgt = this.height * (100 / this.zoom);
}
div.style.width = this.width;
div.style.overflowX = ovx;
embed.width = cwidScaled;
div.style.height = this.height;
div.style.overflowY = ovy;
embed.height = chgtScaled;
if (this.svgRoot) {
this.svgRoot.setAttribute('width',cwidScaled);
this.svgRoot.setAttribute('height',chgtScaled);
}
if (this.svgBackground) {
var rect = this.svgBackground;
rect.setAttribute('width',rwid);
rect.setAttribute('height',rhgt);
}
}
catch(ex) {
zenExceptionHandler(ex,arguments);
}
}

function _ZEN_SVGComponent_svgFrame_setOffsets(x,y) {
this.offsetX = parseFloat(x);
this.offsetY = parseFloat(y);
this.updateScalingGroup();
}

function _ZEN_SVGComponent_svgFrame_setOverlayMode(mode) {
this.overlayMode = mode;
for (var n = 0; n < this.children.length; n++) {
this.children[n].setOverlayMode(mode);
}
}

function _ZEN_SVGComponent_svgFrame_setProperty(property,value,value2) {
switch(property) {
case 'width':
this.setFrameSize(value,this.height);
break;
case 'height':
this.setFrameSize(this.width,value);
break;
case 'svgHeight':
case 'svgWidth':
value = (''==value) ? '' : parseFloat(value,10);
this[property] = value;
this.setFrameSize(this.width,this.height);
break;
case 'layout':
if (this.layout != value) {
this.layout = value;
this.layoutChildren();
}
break;
case 'backgroundStyle':
this.backgroundStyle = value;
if (this.svgBackground) {
this.svgBackground.setAttribute('style',this.backgroundStyle);
}
break;
case 'editMode':
this.setEditMode(value);
break;
case 'zoomLevels':
this.zoomLevels = value;
break;
case 'snapToGrid':
value = value ? true : false;
this[property] = value;
break;
case 'gridX':
case 'gridY':
value = parseInt(value,10);
this[property] = value;
break;
case 'offsetX':
value = parseFloat(value,10);
this.setOffsets(value,this.offsetY);
break;
case 'offsetY':
value = parseFloat(value,10);
this.setOffsets(this.offsetX,value);
break;
case 'svgAutoSize':
value = value ? true : false;
this.svgAutoSize = value;
this.setFrameSize(this.width,this.height);
break;
case 'zoomWithWheel':
case 'dragCanvas':
value = value ? true : false;
this[property] = value;
break;
case 'zoom':
this.setZoom(value);
break;
default:
this.invokeSuper('setProperty',arguments);
return true;
}
return true;
}

function _ZEN_SVGComponent_svgFrame_setPropertyAll(property,value,value2) {
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

function _ZEN_SVGComponent_svgFrame_setZoom(value) {
value = parseFloat(value);
value = (value < 1) ? 1 : value;
this.zoom = value;
zenInvokeCallbackMethod(this.onzoom,this,'onzoom','zoom',this.zoom);
this.updateScalingGroup();
this.layoutChildren();
this.setFrameSize(this.width,this.height);
}

function _ZEN_SVGComponent_svgFrame_setZoomIndex(idx,x,y) {
x = (null == x) ? this.width / 2 : x;
y = (null == y) ? this.height / 2 : y;
var zooms = this.zoomLevels.split(',');
idx = parseInt(idx,10);
idx = (idx < 0) ? 0 : idx;
idx = (idx >= zooms.length) ? zooms.length - 1: idx;
this._zoomIndex = idx;
newZoom = parseFloat(zooms[idx]);
if (this.dragCanvas) {
var deltaX = (x * (100/this.zoom)) - (x * (100/newZoom));
var deltaY = (y * (100/this.zoom)) - (y * (100/newZoom));
this.offsetX = parseFloat(this.offsetX) - parseFloat(deltaX);
this.offsetY = parseFloat(this.offsetY) - parseFloat(deltaY);
}
this.setZoom(newZoom);
}

function _ZEN_SVGComponent_svgFrame_startDragCanvas(evt) {
this._currOperation = 'dragCanvas';
this._isMoved = false;
var currZoom = this.zoom;
this._deltaX = this.offsetX - (evt.clientX * (100/currZoom));
this._deltaY = this.offsetY - (evt.clientY * (100/currZoom));
this._startX = this.offsetX;
this._startY = this.offsetY;
this.svgRoot.addEventListener('mousemove',this._mmHandler,false);
this.svgRoot.addEventListener('mouseup',this._muHandler,false);
}

function _ZEN_SVGComponent_svgFrame_startMove(evt,shape) {
this._mouseTarget = shape;
this._currOperation = 'move';
this._isMoved = false;
var currZoom = this.zoom;
var size = shape.getSizeAbsolute();
this._deltaX = size.x - (evt.clientX * (100/currZoom));
this._deltaY = size.y - (evt.clientY * (100/currZoom));
this._startX = size.x;
this._startY = size.y;
this.svgRoot.addEventListener('mousemove',this._mmHandler,false);
this.svgRoot.addEventListener('mouseup',this._muHandler,false);
}

function _ZEN_SVGComponent_svgFrame_startResize(evt,shape,which) {
this._mouseTarget = shape;
this._currOperation = 'resize';
this._sizingHandle = which;
this._isMoved = false;
var currZoom = this.zoom;
var size = shape.getSizeAbsolute();
this._deltaX = size.x - (evt.clientX * (100/currZoom));
this._deltaY = size.y - (evt.clientY * (100/currZoom));
this._startX = size.x;
this._startY = size.y;
this.svgRoot.addEventListener('mousemove',this._mmHandler,false);
this.svgRoot.addEventListener('mouseup',this._muHandler,false);
}

function _ZEN_SVGComponent_svgFrame_svgLoadHandler(win) {
this.document = this.getSVGDocument();
this.svgWindow = win;
this.renderSVG(this.document,null);
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

function _ZEN_SVGComponent_svgFrame_updateScalingGroup() {
if (this.svgBackground) {
var rect = this.svgBackground;
rect.setAttribute('x',-this.offsetX);
rect.setAttribute('y',-this.offsetY);
}
var scale = this.document.getElementById('zenScalingGroup');
if (scale) {
var xform = '';
if (this.zoom != 100) {
xform = xform + ' scale(' + parseFloat(this.zoom)/100 + ')';
}
if (this.offsetX != 0 || this.offsetY != 0) {
xform = xform + ' translate(' + parseFloat(this.offsetX) + ', ' + parseFloat(this.offsetY) + ')';
}
scale.setAttribute('transform',xform);
}
}

function _ZEN_SVGComponent_svgFrame_zoomIn(x,y) {
x = (null == x) ? this.width / 2 : x;
y = (null == y) ? this.height / 2 : y;
var newZoom = -1;
var currZoom = parseFloat(this.zoom);
var zooms = this.zoomLevels.split(',');
for (var z = 0; z < zooms.length; z++) {
if (parseFloat(zooms[z]) > currZoom) {
newZoom = parseFloat(zooms[z]);
this._zoomIndex = z;
break;
}
}
if (newZoom == -1) {
newZoom = parseFloat(zooms[zooms.length-1]);
this._zoomIndex = zooms.length-1;
}
if (this.dragCanvas) {
var deltaX = (x * (100/this.zoom)) - (x * (100/newZoom));
var deltaY = (y * (100/this.zoom)) - (y * (100/newZoom));
this.offsetX = parseFloat(this.offsetX) - parseFloat(deltaX);
this.offsetY = parseFloat(this.offsetY) - parseFloat(deltaY);
}
this.setZoom(newZoom);
}

function _ZEN_SVGComponent_svgFrame_zoomOut(x,y) {
x = (null == x) ? this.width / 2 : x;
y = (null == y) ? this.height / 2 : y;
var newZoom = -1;
var currZoom = parseFloat(this.zoom);
var zooms = this.zoomLevels.split(',');
for (var z = zooms.length - 1; z >= 0; z--) {
if (parseFloat(zooms[z]) < currZoom) {
newZoom = parseFloat(zooms[z]);
this._zoomIndex = z;
break;
}
}
if (newZoom == -1) {
newZoom = parseFloat(zooms[0]);
this._zoomIndex = 0;
}
if (this.dragCanvas) {
var deltaX = (x * (100/this.zoom)) - (x * (100/newZoom));
var deltaY = (y * (100/this.zoom)) - (y * (100/newZoom));
this.offsetX = parseFloat(this.offsetX) - parseFloat(deltaX);
this.offsetY = parseFloat(this.offsetY) - parseFloat(deltaY);
}
this.setZoom(newZoom);
}

function _ZEN_SVGComponent_svgFrame_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_SVGComponent_svgFrame__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_SVGComponent_svgFrame.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_SVGComponent_svgFrame.prototype;
	p.constructor = _ZEN_SVGComponent_svgFrame;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.svgFrame';
	p._type = 'svgFrame';
	p.serialize = _ZEN_SVGComponent_svgFrame_serialize;
	p.getSettings = _ZEN_SVGComponent_svgFrame_getSettings;
	p.ReallyRefreshContents = _ZEN_SVGComponent_svgFrame_ReallyRefreshContents;
	p.addChild = _ZEN_SVGComponent_svgFrame_addChild;
	p.canDragShapes = _ZEN_SVGComponent_svgFrame_canDragShapes;
	p.getSVGDocument = _ZEN_SVGComponent_svgFrame_getSVGDocument;
	p.getSelectedItem = _ZEN_SVGComponent_svgFrame_getSelectedItem;
	p.getSelectedItems = _ZEN_SVGComponent_svgFrame_getSelectedItems;
	p.getZoomIndex = _ZEN_SVGComponent_svgFrame_getZoomIndex;
	p.isSelected = _ZEN_SVGComponent_svgFrame_isSelected;
	p.layoutChildren = _ZEN_SVGComponent_svgFrame_layoutChildren;
	p.mousedownHandler = _ZEN_SVGComponent_svgFrame_mousedownHandler;
	p.mousemoveHandler = _ZEN_SVGComponent_svgFrame_mousemoveHandler;
	p.mouseupHandler = _ZEN_SVGComponent_svgFrame_mouseupHandler;
	p.mousewheelHandler = _ZEN_SVGComponent_svgFrame_mousewheelHandler;
	p.moveItem = _ZEN_SVGComponent_svgFrame_moveItem;
	p.removeChild = _ZEN_SVGComponent_svgFrame_removeChild;
	p.renderSVG = _ZEN_SVGComponent_svgFrame_renderSVG;
	p.selectItem = _ZEN_SVGComponent_svgFrame_selectItem;
	p.setBoundingBox = _ZEN_SVGComponent_svgFrame_setBoundingBox;
	p.setEditMode = _ZEN_SVGComponent_svgFrame_setEditMode;
	p.setFrameSize = _ZEN_SVGComponent_svgFrame_setFrameSize;
	p.setOffsets = _ZEN_SVGComponent_svgFrame_setOffsets;
	p.setOverlayMode = _ZEN_SVGComponent_svgFrame_setOverlayMode;
	p.setProperty = _ZEN_SVGComponent_svgFrame_setProperty;
	p.setPropertyAll = _ZEN_SVGComponent_svgFrame_setPropertyAll;
	p.setZoom = _ZEN_SVGComponent_svgFrame_setZoom;
	p.setZoomIndex = _ZEN_SVGComponent_svgFrame_setZoomIndex;
	p.startDragCanvas = _ZEN_SVGComponent_svgFrame_startDragCanvas;
	p.startMove = _ZEN_SVGComponent_svgFrame_startMove;
	p.startResize = _ZEN_SVGComponent_svgFrame_startResize;
	p.svgLoadHandler = _ZEN_SVGComponent_svgFrame_svgLoadHandler;
	p.updateScalingGroup = _ZEN_SVGComponent_svgFrame_updateScalingGroup;
	p.zoomIn = _ZEN_SVGComponent_svgFrame_zoomIn;
	p.zoomOut = _ZEN_SVGComponent_svgFrame_zoomOut;
}

// ================================================================================
_zenClassIdx['svgCanvas'] = '_ZEN_SVGComponent_svgCanvas';
function _ZEN_SVGComponent_svgCanvas(index,id) {
	if (index>=0) {_ZEN_SVGComponent_svgCanvas__init(this,index,id);}
}

function _ZEN_SVGComponent_svgCanvas__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgFrame__init) ?zenMaster._ZEN_SVGComponent_svgFrame__init(o,index,id):_ZEN_SVGComponent_svgFrame__init(o,index,id);
	o.children = new Array();
	o.connectors = new Array();
	o.disabled = false;
	o.layout = '';
	o.rulerHeight = '11';
	o.rulerMajor = '100';
	o.rulerMinor = '25';
	o.rulerStyle = 'stroke:gray;';
	o.rulerWidth = '8.5';
	o.showRulers = false;
}
function _ZEN_SVGComponent_svgCanvas_serialize(set,s)
{
	s[0]='3631347211';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.align;s[7]=this.autoHeight;s[8]=this.autoWidth;s[9]=this.aux;s[10]=this.backgroundStyle;s[11]=set.serializeList(this,this.children,true,'children');s[12]=set.serializeList(this,this.connectors,true,'connectors');s[13]=this.containerStyle;s[14]=(this.disabled?1:0);s[15]=(this.dragCanvas?1:0);s[16]=(this.dragEnabled?1:0);s[17]=(this.dropEnabled?1:0);s[18]=(this.dynamic?1:0);s[19]=this.editMode;s[20]=this.enclosingClass;s[21]=this.enclosingStyle;s[22]=this.error;s[23]=this.frameStyle;s[24]=this.gridX;s[25]=this.gridY;s[26]=this.height;s[27]=(this.hidden?1:0);s[28]=this.hint;s[29]=this.hintClass;s[30]=this.hintStyle;s[31]=this.label;s[32]=this.labelClass;s[33]=this.labelStyle;s[34]=this.layout;s[35]=this.offsetX;s[36]=this.offsetY;s[37]=this.onafterdrag;s[38]=this.onbeforedrag;s[39]=this.ondrag;s[40]=this.ondragCanvas;s[41]=this.ondrop;s[42]=this.onhide;s[43]=this.onmouseWheel;s[44]=this.onmoveItem;s[45]=this.onrefresh;s[46]=this.onresizeItem;s[47]=this.onselectItem;s[48]=this.onshow;s[49]=this.onupdate;s[50]=this.onzoom;s[51]=this.overlayMode;s[52]=set.serializeArray(this,this.parameters,true,'parameters');s[53]=this.renderFlag;s[54]=this.rulerHeight;s[55]=this.rulerMajor;s[56]=this.rulerMinor;s[57]=this.rulerStyle;s[58]=this.rulerWidth;s[59]=set.addObject(this.selectedItem,'selectedItem');s[60]=set.serializeList(this,this.selectedItems,true,'selectedItems');s[61]=(this.showLabel?1:0);s[62]=(this.showRulers?1:0);s[63]=this.slice;s[64]=(this.snapToGrid?1:0);s[65]=(this.svgAutoSize?1:0);s[66]=this.svgHeight;s[67]=this.svgPage;s[68]=this.svgWidth;s[69]=this.title;s[70]=this.tuple;s[71]=this.valign;s[72]=(this.visible?1:0);s[73]=this.width;s[74]=this.zoom;s[75]=this.zoomLevels;s[76]=(this.zoomWithWheel?1:0);
}
function _ZEN_SVGComponent_svgCanvas_getSettings(s)
{
	s['name'] = 'string';
	s['connectors'] = 'string';
	s['disabled'] = 'boolean';
	s['layout'] = 'enum:vertical,horizontal,none';
	s['rulerHeight'] = 'float';
	s['rulerMajor'] = 'integer';
	s['rulerMinor'] = 'integer';
	s['rulerStyle'] = 'style';
	s['rulerWidth'] = 'float';
	s['showRulers'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_svgCanvas_addChild(component) {
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

function _ZEN_SVGComponent_svgCanvas_canDragShapes() {
return true;
}

function _ZEN_SVGComponent_svgCanvas_createConnector(type) {
var connector = zenPage.createComponent(type);
if (connector) {
this.connectors[this.connectors.length] = connector;
connector.renderConnector(this);
}
return connector;
}

function _ZEN_SVGComponent_svgCanvas_createSprite(type,x,y) {
var sprite = zenPage.createComponent(type);
if (null != sprite) {
sprite.setProperty('x',x);
sprite.setProperty('y',y);
this.addChild(sprite);
}
return sprite;
}

function _ZEN_SVGComponent_svgCanvas_drawRulers() {
var group = this.rulerGroup;
if (!group) return;
while(null != group.firstChild) {
group.removeChild(group.firstChild);
}
if (!this.showRulers) return;
var gridWidth = parseFloat(this.rulerWidth);
var gridHeight = parseFloat(this.rulerHeight);
var gridMajor = parseInt(this.rulerMajor);
var gridMinor = parseInt(this.rulerMinor);
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('x',0);
rect.setAttribute('y',0);
rect.setAttribute('width',gridWidth*gridMajor);
rect.setAttribute('height',gridHeight*gridMajor);
rect.setAttribute('style','fill: none; stroke:black; stroke-width:0.5; stroke-dasharray:2,2;');
group.appendChild(rect);
for (var x = 0; x < gridWidth*gridMajor; x += gridMinor) {
var isMajor = (x%gridMajor == 0);
var line = this.document.createElementNS(SVGNS,'line');
line.setAttribute('x1',x);
line.setAttribute('x2',x);
line.setAttribute('y1',0);
line.setAttribute('y2',isMajor ? 20 :10);
line.setAttribute('style',this.rulerStyle);
group.appendChild(line);
}
for (var y = 0; y < gridHeight*gridMajor; y += gridMinor) {
var isMajor = (y%gridMajor == 0);
var line = this.document.createElementNS(SVGNS,'line');
line.setAttribute('x1',0);
line.setAttribute('x2',isMajor ? 20 :10);
line.setAttribute('y1',y);
line.setAttribute('y2',y);
line.setAttribute('style',this.rulerStyle);
group.appendChild(line);
}
}

function _ZEN_SVGComponent_svgCanvas_layoutChildren() {
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

function _ZEN_SVGComponent_svgCanvas_removeChild(component) {
zenPage.deleteComponent(component);
}

function _ZEN_SVGComponent_svgCanvas_renderSVG(document,parent) {
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

function _ZEN_SVGComponent_svgCanvas_setOverlayMode(mode) {
this.overlayMode = mode;
for (var n = 0; n < this.children.length; n++) {
this.children[n].setOverlayMode(mode);
}
}

function _ZEN_SVGComponent_svgCanvas_setProperty(property,value,value2) {
switch(property) {
case 'showRulers':
case 'rulerWidth':
case 'rulerHeight':
case 'rulerMinor':
case 'rulerMajor':
case 'rulerStyle':
this[property] = value;
this.drawRulers();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_svgCanvas_setPropertyAll(property,value,value2) {
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

function _ZEN_SVGComponent_svgCanvas_svgLoadHandler(win) {
this.invokeSuper('svgLoadHandler',arguments);
var group = this.document.createElementNS(SVGNS,'g');
this.svgGroup.insertBefore(group, this.svgBackground.nextSibling);
this.rulerGroup = group;
this.drawRulers(group);
}

function _ZEN_SVGComponent_svgCanvas_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}
function _ZEN_SVGComponent_svgCanvas__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgFrame');
	_ZEN_SVGComponent_svgCanvas.prototype = zenCreate('_ZEN_SVGComponent_svgFrame',-1);
	var p = _ZEN_SVGComponent_svgCanvas.prototype;
	p.constructor = _ZEN_SVGComponent_svgCanvas;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgFrame) ? zenMaster._ZEN_SVGComponent_svgFrame.prototype:_ZEN_SVGComponent_svgFrame.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.svgCanvas';
	p._type = 'svgCanvas';
	p.serialize = _ZEN_SVGComponent_svgCanvas_serialize;
	p.getSettings = _ZEN_SVGComponent_svgCanvas_getSettings;
	p.ReallyRefreshContents = _ZEN_SVGComponent_svgCanvas_ReallyRefreshContents;
	p.addChild = _ZEN_SVGComponent_svgCanvas_addChild;
	p.canDragShapes = _ZEN_SVGComponent_svgCanvas_canDragShapes;
	p.createConnector = _ZEN_SVGComponent_svgCanvas_createConnector;
	p.createSprite = _ZEN_SVGComponent_svgCanvas_createSprite;
	p.drawRulers = _ZEN_SVGComponent_svgCanvas_drawRulers;
	p.layoutChildren = _ZEN_SVGComponent_svgCanvas_layoutChildren;
	p.removeChild = _ZEN_SVGComponent_svgCanvas_removeChild;
	p.renderSVG = _ZEN_SVGComponent_svgCanvas_renderSVG;
	p.setOverlayMode = _ZEN_SVGComponent_svgCanvas_setOverlayMode;
	p.setProperty = _ZEN_SVGComponent_svgCanvas_setProperty;
	p.setPropertyAll = _ZEN_SVGComponent_svgCanvas_setPropertyAll;
	p.svgLoadHandler = _ZEN_SVGComponent_svgCanvas_svgLoadHandler;
}

// ================================================================================
_zenClassIdx['svgComponent'] = '_ZEN_SVGComponent_svgComponent';
function _ZEN_SVGComponent_svgComponent(index,id) {
	if (index>=0) {_ZEN_SVGComponent_svgComponent__init(this,index,id);}
}

function _ZEN_SVGComponent_svgComponent__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.boundless = false;
	o.document = null;
	o.height = '100';
	o.hidden = false;
	o.onclick = '';
	o.position = 'relative';
	o.preserveAspectRatio = '';
	o.svgComponent = null;
	o.svgGroup = null;
	o.viewBoxHeight = '';
	o.viewBoxWidth = '';
	o.visible = true;
	o.width = '100';
	o.x = '0';
	o.y = '0';
}
function _ZEN_SVGComponent_svgComponent_serialize(set,s)
{
	s[0]='1175723986';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=(this.boundless?1:0);s[8]=this.height;s[9]=(this.hidden?1:0);s[10]=this.onclick;s[11]=this.onupdate;s[12]=this.position;s[13]=this.preserveAspectRatio;s[14]=this.renderFlag;s[15]=this.tuple;s[16]=this.viewBoxHeight;s[17]=this.viewBoxWidth;s[18]=(this.visible?1:0);s[19]=this.width;s[20]=this.x;s[21]=this.y;
}
function _ZEN_SVGComponent_svgComponent_getSettings(s)
{
	s['name'] = 'string';
	s['height'] = 'length';
	s['hidden'] = 'boolean';
	s['onclick'] = 'eventHandler';
	s['preserveAspectRatio'] = 'string';
	s['viewBoxHeight'] = 'integer';
	s['viewBoxWidth'] = 'integer';
	s['width'] = 'length';
	s['x'] = 'length';
	s['y'] = 'length';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_svgComponent_calculateViewBox() {
var vw = ('' == this.viewBoxWidth) ? this.width : this.viewBoxWidth;
var vh = ('' == this.viewBoxHeight) ? this.height : this.viewBoxHeight;
return '0 0 ' + vw + ' ' + vh;
}

function _ZEN_SVGComponent_svgComponent_clickHandler(evt) {
evt.stopPropagation();
return zenInvokeCallbackMethod(this.onclick,this,'onclick');
}

function _ZEN_SVGComponent_svgComponent_createEnclosingGroup(parent) {
if (this.boundless) {
this.svgGroup = this.document.createElementNS(SVGNS,'g');
this.svgGroup.setAttribute('transform','translate('+this.x+','+this.y+')');
}
else {
this.svgGroup = this.document.createElementNS(SVGNS,'svg');
this.svgGroup.setAttribute('viewBox',this.calculateViewBox());
this.svgGroup.setAttribute('preserveAspectRatio',this.preserveAspectRatio);
this.svgGroup.setAttribute('width',this.width);
this.svgGroup.setAttribute('height',this.height);
this.svgGroup.setAttribute('x',this.x);
this.svgGroup.setAttribute('y',this.y);
}
this.svgGroup.setAttribute('id',(''==this.id) ? 'zen_'+this.index : this.id);
this.svgGroup.addEventListener('click',this.wrapMethod('clickHandler'),false);
if (this.hidden) {
this.svgGroup.setAttribute('style','display: none;');
}
if ('fixed' == this.position) {
var fg = this.document.getElementById('zenFixedOverlay');
fg.appendChild(this.svgGroup);
}
else {
parent.appendChild(this.svgGroup);
}
}

function _ZEN_SVGComponent_svgComponent_createOverlay() {
var overGroup = this.document.getElementById('zenOverlay');
zenASSERT(overGroup,'Unable to find svg overlay group for the page.',arguments);
this._overlayGroup = this.document.createElementNS(SVGNS,'g');
this._overlayGroup.setAttribute("id",'overlay_'+ this.index);
this._overlayGroup.setAttribute('style',this.hidden ? 'display: none;' : '');
overGroup.appendChild(this._overlayGroup);
var size = this.getSizeAbsolute();
var cls = 'zenSvgOverlay';
switch (this.overlayMode) {
case 1:
cls = 'zenSvgOverlay';
break;
case 2:
cls = 'zenSvgOverlaySelected';
break;
case 3:
cls = 'zenSvgOverlayDrag';
break;
}
var rect = this.document.createElementNS(SVGNS,"rect");
rect.setAttribute("x",size.x);
rect.setAttribute("y",size.y);
rect.setAttribute("width",size.width);
rect.setAttribute("height",size.height);
rect.setAttribute("class",cls);
rect.setAttribute("id","overlayRect_" + this.index);
this._overlayRect = rect;
this._overlayGroup.appendChild(rect);
rect.addEventListener('mousedown',new Function('evt','return zenPage.getComponent('+this.index+').overlayMouseDownHandler(evt);'),false);
if (this.overlayMode == 3) {
/* sizing handles */
this._handleNW = this.createSizingHandle('nw',size.x,size.y);
this._handleNE = this.createSizingHandle('ne',size.x+size.width,size.y);
this._handleSW = this.createSizingHandle('sw',size.x,size.y+size.height);
this._handleSE = this.createSizingHandle('se',size.x+size.width,size.y+size.height);
this._overlayGroup.appendChild(this._handleNE);
this._overlayGroup.appendChild(this._handleNW);
this._overlayGroup.appendChild(this._handleSW);
this._overlayGroup.appendChild(this._handleSE);
}
}

function _ZEN_SVGComponent_svgComponent_createSizingHandle(which,x,y) {
var sz = 8;
var rect = this.document.createElementNS(SVGNS,"rect");
rect.setAttribute("transform","translate(" + x + "," + y + ")");
rect.setAttribute("rx",1);
rect.setAttribute("x",-sz/2);
rect.setAttribute("y",-sz/2);
rect.setAttribute("width",sz);
rect.setAttribute("height",sz);
rect.setAttribute("class","zenSizingHandle");
rect.setAttribute("style","cursor: " + which + "-resize");
rect.addEventListener('mousedown',new Function('evt','which','return zenPage.getComponent('+this.index+').sizingMouseDownHandler(evt,"'+which+'");'),false);
return rect;
}

function _ZEN_SVGComponent_svgComponent_findSVGElement(subid) {
if (null == this.document || '' == this.document) {
return null
}
return this.document.getElementById(subid + '_' + this.index);
}

function _ZEN_SVGComponent_svgComponent_getFrame() {
if (null == this.parent) {
return null;
}
else if (this.parent.isOfType('svgFrame')) {
return this.parent;
}
else {
return this.parent.getFrame();
}
}

function _ZEN_SVGComponent_svgComponent_getSizeAbsolute() {
var size = null;
if (this.parent && this.parent.getSizeAbsolute) {
var size = this.parent.getSizeAbsolute();
size.x += parseFloat(this.x);
size.y += parseFloat(this.y);
}
else {
var size = new Object();
size.x = parseFloat(this.x);
size.y = parseFloat(this.y);
}
size.width = parseFloat(this.width);
size.height = parseFloat(this.height);
return size;
}

function _ZEN_SVGComponent_svgComponent_overlayMouseDownHandler(evt) {
var frame = this.getFrame();
if (frame) {
frame.selectItem(this, evt.ctrlKey);
if (frame.canDragShapes()) {
frame.startMove(evt,this);
}
}
}

function _ZEN_SVGComponent_svgComponent_refreshContents() {
return;
}

function _ZEN_SVGComponent_svgComponent_renderContents() {
}

function _ZEN_SVGComponent_svgComponent_renderSVG(document,parent) {
zenASSERT(document,"SVG Document is null",arguments);
this.document = document;
this.createEnclosingGroup(parent);
this.render();
}

function _ZEN_SVGComponent_svgComponent_setOverlayMode(mode) {
if (!this.svgGroup) return;
var overGroup = this.document.getElementById('zenOverlay');
zenASSERT(overGroup,'Unable to find svg overlay group for the page.',arguments);
var overlay = this.document.getElementById('overlay_'+this.index);
if (overlay) {
overGroup.removeChild(overlay);
delete this._overlayGroup;
delete this._overlayRect;
delete overlay;
}
this.overlayMode = mode;
if (mode > 0 && this.position != 'fixed') {
this.createOverlay();
}
}

function _ZEN_SVGComponent_svgComponent_setPosition(x,y) {
x = parseFloat(x);
y = parseFloat(y);
if (this.x != x || this.y != y) {
this.x = x;
this.y = y;
if (this.svgGroup) {
this.svgGroup.setAttribute('x',this.x);
this.svgGroup.setAttribute('y',this.y);
}
}
if (this._overlayRect) {
var size = this.getSizeAbsolute();
this.updateOverlay(size.x,size.y,size.width,size.height);
}
if (this.setPositionHandler) {
this.setPositionHandler();
}
}

function _ZEN_SVGComponent_svgComponent_setProperty(property,value,value2) {
switch(property) {
case 'x':
this.setPosition(value,this.y);
break;
case 'y':
this.setPosition(this.x,value);
break;
case 'width':
case 'height':
if (property == 'width') {
this.setSize(value,this.height);
}
else {
this.setSize(this.width,value);
}
this.parent.layoutChildren();
break;
case 'preserveAspectRatio':
this[property] = value;
if (this.svgGroup) {
this.svgGroup.setAttribute('preserveAspectRatio',this.preserveAspectRatio);
}
break;
case 'viewBoxWidth':
case 'viewBoxHeight':
this[property] = (''==value) ? '' : parseInt(value,10);
if (this.svgGroup) {
this.svgGroup.setAttribute('viewBox',this.calculateViewBox());
}
break;
case 'hidden':
value = value ? true : false;
if (this.hidden != value) {
this.hidden = value;
if (this.svgGroup) {
this.svgGroup.setAttribute('style',this.hidden ? 'display: none;' : '');
}
if (this._overlayGroup) {
this._overlayGroup.setAttribute('style',this.hidden ? 'display: none;' : '');
}
this.parent.layoutChildren();
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_svgComponent_setSize(w,h) {
w = parseInt(w,10);
h = parseInt(h,10);
if (this.width != w || this.height != h) {
this.width = w;
this.height = h;
if (this.svgGroup) {
this.svgGroup.setAttribute('width',this.width);
this.svgGroup.setAttribute('height',this.height);
this.svgGroup.setAttribute('viewBox',this.calculateViewBox());
}
}
if (this._overlayRect) {
var size = this.getSizeAbsolute();
this.updateOverlay(size.x,size.y,size.width,size.height);
}
if (this.setSizeHandler) {
this.setSizeHandler();
}
}

function _ZEN_SVGComponent_svgComponent_setTextNode(id,str) {
if (!this.document) return;
var text = this.findSVGElement(id);
if (!text) return;
var oldNode = text.firstChild;
text.removeChild(oldNode);
var textNode;
textNode = this.document.createTextNode(str);
text.appendChild(textNode);
}

function _ZEN_SVGComponent_svgComponent_sizingMouseDownHandler(evt,which) {
var frame = this.getFrame();
if (frame) {
frame.selectItem(this, evt.ctrlKey);
if (frame.canDragShapes()) {
frame.startResize(evt,this,which);
}
}
}

function _ZEN_SVGComponent_svgComponent_unrender() {
if (null == this.svgGroup) {
return;
}
if (null == this.svgGroup.childNodes || 0 == this.svgGroup.childNodes.length) {
return;
}
while(null != this.svgGroup.firstChild) {
this.svgGroup.removeChild(this.svgGroup.firstChild);
}
}

function _ZEN_SVGComponent_svgComponent_updateOverlay(x,y,width,height) {
if (this._overlayRect) {
var rect = this._overlayRect;
rect.setAttribute("x",x);
rect.setAttribute("y",y);
rect.setAttribute("width",width);
rect.setAttribute("height",height);
}
if (this._handleNW) {
this._handleNW.setAttribute("transform","translate(" + (x) + "," + (y) + ")");
}
if (this._handleNE) {
this._handleNE.setAttribute("transform","translate(" + (x+width) + "," + (y) + ")");
}
if (this._handleSW) {
this._handleSW.setAttribute("transform","translate(" + (x) + "," + (y+height) + ")");
}
if (this._handleSE) {
this._handleSE.setAttribute("transform","translate(" + (x+width) + "," + (y+height) + ")");
}
}

function _ZEN_SVGComponent_svgComponent_wrapMethod(methodName) {
return new Function('evt','return zenPage.getComponent('+this.index+').'+methodName+'(evt);');
}
function _ZEN_SVGComponent_svgComponent__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_SVGComponent_svgComponent.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_SVGComponent_svgComponent.prototype;
	p.constructor = _ZEN_SVGComponent_svgComponent;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.svgComponent';
	p._type = 'svgComponent';
	p.serialize = _ZEN_SVGComponent_svgComponent_serialize;
	p.getSettings = _ZEN_SVGComponent_svgComponent_getSettings;
	p.calculateViewBox = _ZEN_SVGComponent_svgComponent_calculateViewBox;
	p.clickHandler = _ZEN_SVGComponent_svgComponent_clickHandler;
	p.createEnclosingGroup = _ZEN_SVGComponent_svgComponent_createEnclosingGroup;
	p.createOverlay = _ZEN_SVGComponent_svgComponent_createOverlay;
	p.createSizingHandle = _ZEN_SVGComponent_svgComponent_createSizingHandle;
	p.findSVGElement = _ZEN_SVGComponent_svgComponent_findSVGElement;
	p.getFrame = _ZEN_SVGComponent_svgComponent_getFrame;
	p.getSizeAbsolute = _ZEN_SVGComponent_svgComponent_getSizeAbsolute;
	p.overlayMouseDownHandler = _ZEN_SVGComponent_svgComponent_overlayMouseDownHandler;
	p.refreshContents = _ZEN_SVGComponent_svgComponent_refreshContents;
	p.renderContents = _ZEN_SVGComponent_svgComponent_renderContents;
	p.renderSVG = _ZEN_SVGComponent_svgComponent_renderSVG;
	p.setOverlayMode = _ZEN_SVGComponent_svgComponent_setOverlayMode;
	p.setPosition = _ZEN_SVGComponent_svgComponent_setPosition;
	p.setProperty = _ZEN_SVGComponent_svgComponent_setProperty;
	p.setSize = _ZEN_SVGComponent_svgComponent_setSize;
	p.setTextNode = _ZEN_SVGComponent_svgComponent_setTextNode;
	p.sizingMouseDownHandler = _ZEN_SVGComponent_svgComponent_sizingMouseDownHandler;
	p.unrender = _ZEN_SVGComponent_svgComponent_unrender;
	p.updateOverlay = _ZEN_SVGComponent_svgComponent_updateOverlay;
	p.wrapMethod = _ZEN_SVGComponent_svgComponent_wrapMethod;
}

// ================================================================================
_zenClassIdx['chart'] = '_ZEN_SVGComponent_chart';
function _ZEN_SVGComponent_chart(index,id) {
	if (index>=0) {_ZEN_SVGComponent_chart__init(this,index,id);}
}

function _ZEN_SVGComponent_chart__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.backgroundStyle = '';
	o.bandLower = '';
	o.bandLowerStyle = '';
	o.bandUpper = '';
	o.bandUpperStyle = '';
	o.controller = '';
	o.controllerId = '';
	o.gridStyle = '';
	o.labelStyle = '';
	o.labelsVisible = true;
	o.legendHeight = '';
	o.legendLabelStyle = '';
	o.legendStyle = '';
	o.legendVisible = false;
	o.legendWidth = '';
	o.legendX = '0';
	o.legendY = '0';
	o.marginBottom = '10';
	o.marginLeft = '10';
	o.marginRight = '2';
	o.marginTop = '6';
	o.markerScale = '1';
	o.markerShapes = 'circle,up,down,square';
	o.markerStyle = '';
	o.markersVisible = false;
	o.onelementClick = '';
	o.ongetData = '';
	o.ongetLabelX = '';
	o.ongetLabelY = '';
	o.onnotifyView = '';
	o.onrenderPlotArea = '';
	o.plotAreaStyle = '';
	o.plotStyle = '';
	o.plotToEdge = true;
	o.preserveAspectRatio = 'none';
	o.selectedItem = '-1';
	o.selectedItemStyle = '';
	o.selectedSeries = '-1';
	o.seriesColors = 'blue,red,green,yellow,orange,plum,purple';
	o.seriesCount = '';
	o.seriesNames = '';
	o.seriesSize = '';
	o.title = '';
	o.titleStyle = '';
	o.titleX = '50';
	o.titleY = '5';
	o.viewBoxHeight = '100';
	o.viewBoxWidth = '100';
	o.xAxis = null;
	o.yAxis = null;
}
function _ZEN_SVGComponent_chart_serialize(set,s)
{
	s[0]='1461431517';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=this.bandLower;s[9]=this.bandLowerStyle;s[10]=this.bandUpper;s[11]=this.bandUpperStyle;s[12]=(this.boundless?1:0);s[13]=this.controller;s[14]=this.controllerId;s[15]=this.gridStyle;s[16]=this.height;s[17]=(this.hidden?1:0);s[18]=this.labelStyle;s[19]=(this.labelsVisible?1:0);s[20]=this.legendHeight;s[21]=this.legendLabelStyle;s[22]=this.legendStyle;s[23]=(this.legendVisible?1:0);s[24]=this.legendWidth;s[25]=this.legendX;s[26]=this.legendY;s[27]=this.marginBottom;s[28]=this.marginLeft;s[29]=this.marginRight;s[30]=this.marginTop;s[31]=this.markerScale;s[32]=this.markerShapes;s[33]=this.markerStyle;s[34]=(this.markersVisible?1:0);s[35]=this.onclick;s[36]=this.onelementClick;s[37]=this.ongetData;s[38]=this.ongetLabelX;s[39]=this.ongetLabelY;s[40]=this.onnotifyView;s[41]=this.onrenderPlotArea;s[42]=this.onupdate;s[43]=this.plotAreaStyle;s[44]=this.plotStyle;s[45]=(this.plotToEdge?1:0);s[46]=this.position;s[47]=this.preserveAspectRatio;s[48]=this.renderFlag;s[49]=this.selectedItem;s[50]=this.selectedItemStyle;s[51]=this.selectedSeries;s[52]=this.seriesColors;s[53]=this.seriesCount;s[54]=this.seriesNames;s[55]=this.seriesSize;s[56]=this.title;s[57]=this.titleStyle;s[58]=this.titleX;s[59]=this.titleY;s[60]=this.tuple;s[61]=this.viewBoxHeight;s[62]=this.viewBoxWidth;s[63]=(this.visible?1:0);s[64]=this.width;s[65]=this.x;s[66]=set.addObject(this.xAxis,'xAxis');s[67]=this.y;s[68]=set.addObject(this.yAxis,'yAxis');
}
function _ZEN_SVGComponent_chart_getSettings(s)
{
	s['name'] = 'string';
	s['backgroundStyle'] = 'svgStyle';
	s['bandLower'] = 'float';
	s['bandLowerStyle'] = 'svgStyle';
	s['bandUpper'] = 'float';
	s['bandUpperStyle'] = 'svgStyle';
	s['controllerId'] = 'id';
	s['gridStyle'] = 'svgStyle';
	s['labelStyle'] = 'svgStyle';
	s['labelsVisible'] = 'boolean';
	s['legendHeight'] = 'length';
	s['legendLabelStyle'] = 'svgStyle';
	s['legendStyle'] = 'svgStyle';
	s['legendVisible'] = 'boolean';
	s['legendWidth'] = 'length';
	s['legendX'] = 'length';
	s['legendY'] = 'length';
	s['marginBottom'] = 'length';
	s['marginLeft'] = 'length';
	s['marginRight'] = 'length';
	s['marginTop'] = 'length';
	s['markerScale'] = 'float';
	s['markerShapes'] = 'csv';
	s['markerStyle'] = 'svgStyle';
	s['markersVisible'] = 'boolean';
	s['onelementClick'] = 'eventHandler';
	s['ongetData'] = 'eventHandler';
	s['ongetLabelX'] = 'eventHandler';
	s['ongetLabelY'] = 'eventHandler';
	s['onnotifyView'] = 'eventHandler';
	s['onrenderPlotArea'] = 'eventHandler';
	s['plotAreaStyle'] = 'svgStyle';
	s['plotStyle'] = 'svgStyle';
	s['plotToEdge'] = 'boolean';
	s['selectedItem'] = 'integer';
	s['selectedItemStyle'] = 'svgStyle';
	s['selectedSeries'] = 'integer';
	s['seriesColors'] = 'csv';
	s['seriesCount'] = 'integer';
	s['seriesNames'] = 'csv';
	s['seriesSize'] = 'integer';
	s['title'] = 'caption';
	s['titleStyle'] = 'svgStyle';
	s['titleX'] = 'length';
	s['titleY'] = 'length';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_chart_acquireData() {
var controller = this.getController();
if (null == controller) {
this.connectToController();
controller = this.getController();
}
if (controller) {
var dims = controller.getDimensions();
this.seriesSize = controller.getDimSize(1);
this.seriesCount = controller.getDimSize(2);
this._dataSeries = controller.getDataAsArrays();
if (null == this._dataSeries) {
this._dataSeries = new Array();
}
if (!this.hasAxes()) {
var size = this.getSeriesSize();
var snames = new Array();
for (var n = 0; n < size; n++) {
snames[n] = controller.getLabel(n,1);
}
this.seriesNames = snames.join(',');
}
}
else {
var scount = this.getSeriesCount();
this._dataSeries = new Array(scount);
for (var s = 0; s < scount; s++) {
this._dataSeries[s] = this.acquireSeriesData(s);
}
}
}

function _ZEN_SVGComponent_chart_acquireSeriesData(series) {
var data = null;
if (''!=this.ongetData) {
data = zenInvokeCallbackMethod(this.ongetData,this,'ongetData','series',series);
if (null != data) {
return data;
}
}
var data = new Array(this.seriesSize);
for (var i = 0; i < this.seriesSize; i++) {
data[i] = 0;
}
return data;
}

function _ZEN_SVGComponent_chart_calculateRangeValues() {
this._plotLeft = parseInt(this.marginLeft,10);
this._plotRight = 100 - parseInt(this.marginRight,10);
this._plotTop = parseInt(this.marginTop,10);
this._plotBottom = 100 - parseInt(this.marginBottom,10);
this._plotWidth = (100 - (parseInt(this.marginLeft,10) + parseInt(this.marginRight,10)));
this._plotHeight = (100 - (parseInt(this.marginTop,10) + parseInt(this.marginBottom,10)));
if (!this.hasAxes()) {
return;
}
this._yGridType = this.getYAxisType();
this._xGridType = this.getXAxisType();
delete this._xMinValue;
delete this._xMaxValue;
delete this._yMinValue;
delete this._yMaxValue;
this._yMajorUnits = this.yAxis ? this.yAxis.majorUnits : 0;
this._yMajorUnits = ('' == this._yMajorUnits) ? (('category'==this._yGridType) ? 1 : '') : this._yMajorUnits;
this._yMinorUnits = this.yAxis ? this.yAxis.minorUnits : '';
this._yMinorUnits = ('' == this._yMinorUnits) ? '' : this._yMinorUnits;
this._yLabelUnits = this.yAxis ? this.yAxis.labelUnits : '';
this._yLabelUnits = ('' == this._yLabelUnits) ? this._yMajorUnits : this._yLabelUnits;
this._yLabelAngle = this.yAxis ? this.yAxis.labelAngle : 0;
this._yLabelStyle = this.yAxis ? this.yAxis.labelStyle : '';
this._yAxisTitle = this.yAxis ? this.yAxis.title : '';
this._yMajorGrid = this.yAxis ? this.yAxis.majorGridLines : true;
this._yMinorGrid = this.yAxis ? this.yAxis.minorGridLines : false;
this._yMajorGridStyle = this.yAxis ? this.yAxis.majorGridStyle : '';
this._yMinorGridStyle = this.yAxis ? this.yAxis.minorGridStyle : '';
this._xMajorUnits = this.xAxis ? this.xAxis.majorUnits : '';
this._xMajorUnits = ('' == this._xMajorUnits) ? '' : this._xMajorUnits;
this._xMinorUnits = this.xAxis ? this.xAxis.minorUnits : '';
this._xMinorUnits = ('' == this._xMinorUnits) ? '' : this._xMinorUnits;
this._xLabelUnits = this.xAxis ? this.xAxis.labelUnits : '';
this._xLabelUnits = ('' == this._xLabelUnits) ? this._xMajorUnits : this._xLabelUnits;
this._xLabelAngle = this.xAxis ? this.xAxis.labelAngle : 0;
this._xLabelStyle = this.xAxis ? this.xAxis.labelStyle : '';
this._xAxisTitle = this.xAxis ? this.xAxis.title : '';
this._xMajorGrid = this.xAxis ? this.xAxis.majorGridLines : false;
this._xMinorGrid = this.xAxis ? this.xAxis.minorGridLines : false;
this._xMajorGridStyle = this.xAxis ? this.xAxis.majorGridStyle : '';
this._xMinorGridStyle = this.xAxis ? this.xAxis.minorGridStyle : '';
var range = this.findDataRange();
if ('value'==this._yGridType && isNaN(parseFloat(this._yMajorUnits))) {
var max = isNaN(parseFloat(this._yMaxValue)) ? range.maxValue : this._yMaxValue;
var min = isNaN(parseFloat(this._yMinValue)) ? range.minValue : this._yMinValue;
var scale = this.findScaleUnits(max - min);
this._yMajorUnits = scale;
if (isNaN(parseFloat(this._yLabelUnits))) {
this._yLabelUnits = this._yMajorUnits;
}
if (isNaN(parseFloat(this._yMinorUnits))) {
this._yMinorUnits = this._yMajorUnits / 5;
}
}
if ('value'==this._xGridType && isNaN(parseFloat(this._xMajorUnits))) {
if ('value'==this._yGridType) {
var max = isNaN(parseFloat(this._xMaxValue)) ? range.maxValue2 : this._xMaxValue;
var min = isNaN(parseFloat(this._xMinValue)) ? range.minValue2 : this._xMinValue;
}
else {
var max = isNaN(parseFloat(this._xMaxValue)) ? range.maxValue : this._xMaxValue;
var min = isNaN(parseFloat(this._xMinValue)) ? range.minValue : this._xMinValue;
}
var scale = this.findScaleUnits(max - min);
this._xMajorUnits = scale;
if (isNaN(parseFloat(this._xLabelUnits))) {
this._xLabelUnits = this._xMajorUnits;
}
if (isNaN(parseFloat(this._xMinorUnits))) {
this._xMinorUnits = this._xMajorUnits / 5;
}
}
else if ('category'==this._xGridType && isNaN(parseFloat(this._xMajorUnits))) {
var scale = 1;
var size = this.getSeriesSize();
var f = (size%5==0) ? 5 : 2;
while (size/scale > 20) {
scale *= f;
}
this._xMajorUnits = scale;
if (isNaN(parseFloat(this._xLabelUnits))) {
this._xLabelUnits = this._xMajorUnits;
}
}
this._yBaseValue = this.yAxis ? this.yAxis.baseValue : '';
this._yMinValue = this.yAxis ? this.yAxis.minValue : '';
this._yMaxValue = this.yAxis ? this.yAxis.maxValue : '';
if (isNaN(parseFloat(this._yMinValue))) {
var val = this.useSumForRange() ? (isNaN(parseFloat(this._yBaseValue)) ? range.minValue : this._yBaseValue) : range.minValue;
if (0!=this._yMajorUnits) {
val = Math.floor(val / this._yMajorUnits) * this._yMajorUnits
}
this._yMinValue = val;
}
if (isNaN(parseFloat(this._yMaxValue))) {
var val = range.maxValue;
if (0!=this._yMajorUnits) {
val = Math.ceil((val*1.01) / this._yMajorUnits) * this._yMajorUnits
}
this._yMaxValue = val;
}
this._yRange = (this._yMaxValue - this._yMinValue);
this._xBaseValue = this.xAxis ? this.xAxis.baseValue : '';
this._xMinValue = this.xAxis ? this.xAxis.minValue : '';
this._xMaxValue = this.xAxis ? this.xAxis.maxValue : '';
if (isNaN(parseFloat(this._xMinValue))) {
if ('value'==this._yGridType) {
var val = range.minValue2;
}
else {
var val = this.useSumForRange() ? (isNaN(parseFloat(this._xBaseValue)) ? range.minValue : this._xBaseValue) : range.minValue;
}
if (0!=this._xMajorUnits) {
val = Math.floor(val / this._xMajorUnits) * this._xMajorUnits
}
this._xMinValue = val;
}
if (isNaN(parseFloat(this._xMaxValue))) {
var val = ('value'==this._yGridType) ? range.maxValue2 : range.maxValue;
if (0!=this._xMajorUnits) {
val = Math.ceil(val / this._xMajorUnits) * this._xMajorUnits
}
this._xMaxValue = val;
}
this._xRange = (this._xMaxValue - this._xMinValue);
}

function _ZEN_SVGComponent_chart_chartElementClickHandler(evt,series,item) {
evt.stopPropagation();
this.selectElement(series,item);
zenInvokeCallbackMethod(this.onelementClick,this,'onelementClick','chart',this);
}

function _ZEN_SVGComponent_chart_connectToController() {
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

function _ZEN_SVGComponent_chart_createMarker(series,item,x,y,color,type,noevents) {
var marker;
switch (type) {
case 'square':
marker = this.document.createElementNS(SVGNS,"rect");
marker.setAttribute("x",-0.75);
marker.setAttribute("y",-0.75);
marker.setAttribute("width",1.5);
marker.setAttribute("height",1.5);
break;
case 'circle':
marker = this.document.createElementNS(SVGNS,"circle");
marker.setAttribute("cx",0);
marker.setAttribute("cy",0);
marker.setAttribute("r",0.75);
break;
case 'down':
marker = this.document.createElementNS(SVGNS,"polyline");
var points = '-1,-1 1,-1 0,1 -1,-1';
marker.setAttribute("points",points);
break;
case 'up':
default:
marker = this.document.createElementNS(SVGNS,"polyline");
var points = '-1,1 1,1 0,-1 -1,1';
marker.setAttribute("points",points);
break;
}
var scale = '';
if ('' != this.markerScale) {
scale = "scale("+this.markerScale+","+this.markerScale+")";
}
marker.setAttribute("class","chart-seriesLine");
marker.setAttribute("transform","translate("+x+","+y+")" + scale);
marker.setAttribute("stroke",color);
marker.setAttribute("fill",'white');
marker.setAttribute("fill-opacity",1.0);
if (this.selectedSeries!='' && this.selectedItem!='' &&
series == this.selectedSeries && item == this.selectedItem) {
marker.setAttribute("style",this.selectedItemStyle);
}
else {
marker.setAttribute("style",this.markerStyle);
}
if (!noevents) {
marker.setAttribute('id',this.makeId('el_' + series + '_' + item));
var f = new Function('evt','series','item','return zenPage.getComponent('+this.index+').chartElementClickHandler(evt,'+series+','+item+');');
marker.addEventListener('click',f,false);
}
return marker;
}

function _ZEN_SVGComponent_chart_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_chart_findDataRange() {
var range = new Object();
range.minValue = null;
range.maxValue = null;
range.minValue2 = null; // used by x/y type charts
range.maxValue2 = null;
var scount = this.getSeriesCount();
var items = this.getSeriesSize();
if (this.useSumForRange()) {
range.minValue = 0;
for (var n = 0; n < items; n++) {
var total = null;
for (var s = 0; s < scount; s++) {
var data = this._dataSeries[s];
var val = data[n];
if (!isNaN(val)) {
total += parseFloat(val);
}
}
if (!isNaN(total)) {
range.minValue = (isNaN(range.minValue)) ? total : (total < range.minValue) ? total : range.minValue;
range.maxValue = (isNaN(range.maxValue)) ? total : (total > range.maxValue) ? total : range.maxValue;
}
}
}
else {
for (var s = 0; s < scount; s++) {
var data = this._dataSeries[s];
for (var n = 0; n < items; n++) {
var val = data[n];
if (!isNaN(val)) {
val = parseFloat(val);
range.minValue = (isNaN(range.minValue)) ? val : (val < range.minValue) ? val : range.minValue;
range.maxValue = (isNaN(range.maxValue)) ? val : (val > range.maxValue) ? val : range.maxValue;
}
}
}
}
return range;
}

function _ZEN_SVGComponent_chart_findScaleUnits(val) {
var scale = 1;
if (val > 0) {
var log = Math.LOG10E * Math.log(val);
var f = Math.floor(log);
if ((log - f) > .65) {
scale = Math.pow(10,f+1) / 5;
}
else if ((log - f) > .3) {
scale = (Math.pow(10,f) * 5) / 10;
}
else {
scale = (Math.pow(10,f) * 2) / 4;
}
}
return scale;
}

function _ZEN_SVGComponent_chart_getChartElement(series,item) {
return this.findSVGElement('el_' + series + '_' + item);
}

function _ZEN_SVGComponent_chart_getChartElementStyle(series,item) {
return this.markerStyle;
}

function _ZEN_SVGComponent_chart_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_chart_getLegendLabels() {
return this.getSeriesNames();
}

function _ZEN_SVGComponent_chart_getMarkerShape(series) {
var mk = this.markerShapes.split(',');
if (mk.length == 0) {
return 'circle';
}
return (''==mk[series%mk.length] ? 'circle' : mk[series%mk.length]);
}

function _ZEN_SVGComponent_chart_getNumericAbbreviation(val,min,max) {
var factor = 1;
var maxVal = factor * max;
var minVal = factor * min;
var absmax = Math.abs(factor * max);
var absmin = Math.abs(factor * min);
var test = (absmax > absmin) ? absmax : absmin;
if (test >= 600000000) {
val = Math.round(val / 10000000)/100 + 'G';
}
else if (test >= 600000) {
val = Math.round(val / 10000)/100 + 'M';
}
else if (test >= 60000) {
val = Math.round(val / 10)/100 + 'K';
}
else if (test >= 100) {
val = Math.round(val);
}
else {
val = Math.round(val*1000)/1000;
}
return val;
}

function _ZEN_SVGComponent_chart_getPlotX(val) {
var pct = 0;
if (this._xRange != 0) {
pct = (val - this._xMinValue) / this._xRange;
}
return this._plotLeft + (pct * this._plotWidth);
}

function _ZEN_SVGComponent_chart_getPlotY(val) {
var pct = 0;
if (this._yRange != 0) {
pct = (val - this._yMinValue) / this._yRange;
}
return this._plotBottom - (pct * this._plotHeight);
}

function _ZEN_SVGComponent_chart_getSelectedItem() {
return this.selectedItem;
}

function _ZEN_SVGComponent_chart_getSelectedSeries() {
return this.selectedSeries;
}

function _ZEN_SVGComponent_chart_getSeriesColor(series) {
var clr = this.seriesColors.split(',');
if (clr.length == 0) {
return 'black';
}
return (''==clr[series%clr.length] ? 'black' : clr[series%clr.length]);
}

function _ZEN_SVGComponent_chart_getSeriesCount() {
return this.seriesCount;
}

function _ZEN_SVGComponent_chart_getSeriesData(series) {
zenASSERT(this._dataSeries,'Chart data cache is missing',arguments);
zenASSERT(this._dataSeries[series],'Chart data series is missing: '+series,arguments);
return this._dataSeries[series];
}

function _ZEN_SVGComponent_chart_getSeriesNames() {
var names = new Array(this.seriesCount);
var controller = this.getController();
if (controller) {
for (i = 0; i < this.seriesCount; i++) {
names[i] = controller.getLabel(i,2);
}
}
else {
var sn = this.seriesNames.split(',');
for (i = 0; i < this.seriesCount; i++) {
names[i] = (null == sn[i] || '' == sn[i]) ? (parseInt(i,10)+1) : sn[i];
}
}
return names;
}

function _ZEN_SVGComponent_chart_getSeriesSVGGroup() {
return this.findSVGElement('seriesGroup');
}

function _ZEN_SVGComponent_chart_getSeriesSize() {
return this.seriesSize;
}

function _ZEN_SVGComponent_chart_getXAxis() {
return this.xAxis;
}

function _ZEN_SVGComponent_chart_getXAxisType() {
return 'category';
}

function _ZEN_SVGComponent_chart_getXLabelText(val) {
if ('category'==this._xGridType) {
var controller = this.getController();
if (controller) {
val = controller.getLabel(val,1);
}
}
if (''!=this.ongetLabelX) {
data = zenInvokeCallbackMethod(this.ongetLabelX,this,'ongetLabelX','value',val);
if (null != data) {
return data;
}
}
return ('value'!=this._xGridType) ? val : this.getNumericAbbreviation(val,this._xMinValue,this._xMaxValue);
}

function _ZEN_SVGComponent_chart_getYAxis() {
return this.yAxis;
}

function _ZEN_SVGComponent_chart_getYAxisType() {
return 'value';
}

function _ZEN_SVGComponent_chart_getYLabelText(val) {
if ('category'==this._yGridType || !this.hasAxes()) {
var controller = this.getController();
if (controller) {
val = controller.getLabel(val,1);
}
}
if (''!=this.ongetLabelY) {
data = zenInvokeCallbackMethod(this.ongetLabelY,this,'ongetLabelY','value',val);
if (null != data) {
return data;
}
}
return ('value'!=this._yGridType) ? val : this.getNumericAbbreviation(val,this._yMinValue,this._yMaxValue);
}

function _ZEN_SVGComponent_chart_hasAxes() {
return true;
}

function _ZEN_SVGComponent_chart_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_chart_notifyViewHandler(reason,data1,data2,data3) {
switch(reason) {
case 'dataChange':
case 'modelChange':
this.updateChart();
break;
case 'seriesChange':
break;
}
}

function _ZEN_SVGComponent_chart_renderAxes() {
if (zenIsMissing(this.document)) return;
var plotAreaGroup = this.findSVGElement('plotAreaGroup');
zenASSERT(plotAreaGroup,'Unable to find plotAreaGroup',arguments);
var ygrid = this.findSVGElement('yGridLine');
if (null == ygrid) {
ygrid = this.document.createElementNS(SVGNS,"path");
ygrid.setAttribute("class","chart-majorGridLine");
ygrid.setAttribute("id",this.makeId('yGridLine'));
plotAreaGroup.appendChild(ygrid);
}
ygrid.setAttribute("style",this.gridStyle + this._yMajorGridStyle);
var ygridMinor = this.findSVGElement('yGridLineMinor');
if (null == ygridMinor) {
ygridMinor = this.document.createElementNS(SVGNS,"path");
ygridMinor.setAttribute("class","chart-minorGridLine");
ygridMinor.setAttribute("id",this.makeId('yGridLineMinor'));
plotAreaGroup.appendChild(ygridMinor);
}
ygridMinor.setAttribute("style",this.gridStyle + this._yMinorGridStyle);
var xgrid = this.findSVGElement('xGridLine');
if (null == xgrid) {
xgrid = this.document.createElementNS(SVGNS,"path");
xgrid.setAttribute("class","chart-majorGridLine");
xgrid.setAttribute("id",this.makeId('xGridLine'));
plotAreaGroup.appendChild(xgrid);
}
xgrid.setAttribute("style",this.gridStyle + this._xMajorGridStyle);
var xgridMinor = this.findSVGElement('xGridLineMinor');
if (null == xgridMinor) {
xgridMinor = this.document.createElementNS(SVGNS,"path");
xgridMinor.setAttribute("class","chart-minorGridLine");
xgridMinor.setAttribute("id",this.makeId('xGridLineMinor'));
plotAreaGroup.appendChild(xgridMinor);
}
xgridMinor.setAttribute("style",this.gridStyle + this._xMinorGridStyle);
if (this._yGridType == 'value') {
var start, end;
var d = '';
if (this._yMajorGrid && this._yMajorUnits > 0) {
var start = Math.floor(Math.abs(this._yMinValue/this._yMajorUnits))*this._yMajorUnits*(this._yMinValue>=0 ? 1 : -1);
var end = Math.floor(Math.abs(this._yMaxValue/this._yMajorUnits))*this._yMajorUnits*(this._yMaxValue>=0 ? 1 : -1);
var limit = 0;
for (var v = start; v <= end && limit < 200; v += this._yMajorUnits, limit++) {
var y = this.getPlotY(v);
d += ' M ' + this._plotLeft + ' ' + y + ' L ' + this._plotRight + ' ' + y;
}
}
ygrid.setAttribute("d",d);
var start, end;
var d = '';
if (this._yMinorGrid && this._yMinorUnits > 0) {
var start = Math.floor(Math.abs(this._yMinValue/this._yMinorUnits))*this._yMinorUnits*(this._yMinValue>=0 ? 1 : -1);
var end = Math.floor(Math.abs(this._yMaxValue/this._yMinorUnits))*this._yMinorUnits*(this._yMaxValue>=0 ? 1 : -1);
var limit = 0;
for (var v = start; v <= end && limit < 200; v += this._yMinorUnits, limit++) {
var y = this.getPlotY(v);
d += ' M ' + this._plotLeft + ' ' + y + ' L ' + this._plotRight + ' ' + y;
}
}
ygridMinor.setAttribute("d",d);
}
else {
var d = '';
var dmin = '';
var items = this.getSeriesSize();
items = this.plotToEdge ? items-1 : items;
if (items > 0) {
var y = this._plotTop;
var dy = this._plotHeight / items;
for (var n = 1; n < items; n++) {
y += dy;
if (this._yMajorGrid && (this._yMajorUnits>0) && (n%this._yMajorUnits ==0)) {
d += ' M ' + this._plotLeft + ' ' + y + ' L ' + this._plotRight + ' ' + y;
}
if (this._yMinorGrid && (this._yMinorUnits>0) && (n%this._yMinorUnits ==0)) {
dmin += ' M ' + this._plotLeft + ' ' + y + ' L ' + this._plotRight + ' ' + y;
}
}
}
ygrid.setAttribute("d",d);
ygridMinor.setAttribute("d",dmin);
}
if (this._xGridType == 'value') {
var start, end;
var d = '';
if (this._xMajorGrid && this._xMajorUnits > 0) {
var start = Math.floor(Math.abs(this._xMinValue/this._xMajorUnits))*this._xMajorUnits*(this._xMinValue>=0 ? 1 : -1);
var end = Math.floor(Math.abs(this._xMaxValue/this._xMajorUnits))*this._xMajorUnits*(this._xMaxValue>=0 ? 1 : -1);
var limit = 0;
for (var v = start; v <= end && limit < 200; v += this._xMajorUnits, limit++) {
var x = this.getPlotX(v);
d += ' M ' + x + ' ' + this._plotTop + ' L ' + x + ' ' + this._plotBottom;
}
}
xgrid.setAttribute("d",d);
var start, end;
var d = '';
if (this._xMinorGrid && this._xMinorUnits > 0) {
var start = Math.floor(Math.abs(this._xMinValue/this._xMinorUnits))*this._xMinorUnits*(this._xMinValue>=0 ? 1 : -1);
var end = Math.floor(Math.abs(this._xMaxValue/this._xMinorUnits))*this._xMinorUnits*(this._xMaxValue>=0 ? 1 : -1);
var limit = 0;
for (var v = start; v <= end && limit < 200; v += this._xMinorUnits, limit++) {
var x = this.getPlotX(v);
d += ' M ' + x + ' ' + this._plotTop + ' L ' + x + ' ' + this._plotBottom;
}
}
xgridMinor.setAttribute("d",d);
}
else {
var d = '';
var dmin = '';
var items = this.getSeriesSize();
items = this.plotToEdge ? items-1 : items;
if (items > 0) {
var x = this._plotLeft;
var dx = this._plotWidth / items;
for (var n = 1; n < items; n++) {
x += dx;
if (this._xMajorGrid && (this._xMajorUnits>0) && (n%this._xMajorUnits ==0)) {
d += ' M ' + x + ' ' + this._plotTop + ' L ' + x + ' ' + this._plotBottom;
}
if (this._xMinorGrid && (this._xMinorUnits>0) && (n%this._xMinorUnits ==0)) {
dmin += ' M ' + x + ' ' + this._plotTop + ' L ' + x + ' ' + this._plotBottom;
}
}
}
xgrid.setAttribute("d",d);
xgridMinor.setAttribute("d",dmin);
}
}

function _ZEN_SVGComponent_chart_renderBands() {
if (zenIsMissing(this.document)) return;
var text;
var plotAreaGroup = this.findSVGElement('plotAreaGroup');
zenASSERT(plotAreaGroup,'Unable to find plotAreaGroup',arguments);
var bandUpper = this.findSVGElement('bandUpper');
var bandLower = this.findSVGElement('bandLower');
if (null == bandUpper) {
bandUpper = this.document.createElementNS(SVGNS,"rect");
bandUpper.setAttribute('id',this.makeId('bandUpper'));
plotAreaGroup.appendChild(bandUpper);
}
if (null == bandLower) {
bandLower = this.document.createElementNS(SVGNS,"rect");
bandLower.setAttribute('id',this.makeId('bandLower'));
plotAreaGroup.appendChild(bandLower);
}
var hide = false;
if (isNaN(parseFloat(this.bandUpper))) {
hide = true;
}
else {
var h = this.getPlotY(this.bandUpper) - this._plotTop;
if (h <= 0) {
hide = true;
}
else {
h = (h > this._plotHeight) ? this._plotHeight : h;
bandUpper.setAttribute("class","chart-band");
bandUpper.setAttribute("x",this._plotLeft);
bandUpper.setAttribute("y",this._plotTop);
bandUpper.setAttribute("width",this._plotWidth);
bandUpper.setAttribute("height",h);
bandUpper.setAttribute("style",this.bandUpperStyle);
}
}
if (hide) {
bandUpper.setAttribute("display","none");
}
else {
bandUpper.setAttribute("display","inherit");
}
var hide = false;
if (isNaN(parseFloat(this.bandLower))) {
hide = true;
}
else {
var h = this.getPlotY(this.bandLower);
if (h >= (this._plotTop+this._plotHeight)) {
hide = true;
}
else {
h = (h < this._plotTop) ? this._plotTop : h;
bandLower.setAttribute("class","chart-band");
bandLower.setAttribute("x",this._plotLeft);
bandLower.setAttribute("y",h);
bandLower.setAttribute("width",this._plotWidth);
bandLower.setAttribute("height",this._plotHeight - h + this._plotTop);
bandLower.setAttribute("style",this.bandLowerStyle);
}
}
if (hide) {
bandLower.setAttribute("display","none");
}
else {
bandLower.setAttribute("display","inherit");
}
}

function _ZEN_SVGComponent_chart_renderContents() {
if (zenIsMissing(this.document)) return;
if (null == this.findSVGElement('background')) {
var pane = this.document.createElementNS(SVGNS,"rect");
pane.setAttribute("id",this.makeId('background'));
pane.setAttribute("class","chart-background");
pane.setAttribute("style",this.backgroundStyle);
pane.setAttribute("x",0);
pane.setAttribute("y",0);
pane.setAttribute("width",100);
pane.setAttribute("height",100);
this.svgGroup.appendChild(pane);
}
this.acquireData();
this.calculateRangeValues();
this.renderLegend();
this.renderTitle();
this.renderPlotArea();
this.renderSeriesGroup();
}

function _ZEN_SVGComponent_chart_renderLegend() {
if (zenIsMissing(this.document)) return;
if (!this.legendVisible) return;
var svgLegendGroup = this.findSVGElement('legendGroup');
if (null == svgLegendGroup) {
svgLegendGroup = this.document.createElementNS(SVGNS,"svg");
svgLegendGroup.setAttribute("id",this.makeId('legendGroup'));
this.svgGroup.appendChild(svgLegendGroup);
}
while(null != svgLegendGroup.firstChild) {
svgLegendGroup.removeChild(svgLegendGroup.firstChild);
}
var rect = this.document.createElementNS(SVGNS,"rect");
rect.setAttribute("id",this.makeId('legendRect'));
rect.setAttribute("style",'fill: none;');
svgLegendGroup.appendChild(rect);
var legends = this.getLegendLabels();
var scount = legends.length;
var x = parseInt(this.legendX,10);
var y = parseInt(this.legendY,10);
var wid = (''==this.legendWidth) ? 15 : parseInt(this.legendWidth,10);
var hgt = (''==this.legendHeight) ? ((scount*3)+2) : parseInt(this.legendHeight,10);
svgLegendGroup.setAttribute('x',x);
svgLegendGroup.setAttribute('y',y);
svgLegendGroup.setAttribute('width',wid);
svgLegendGroup.setAttribute('height',hgt);
rect.setAttribute("class","chart-legend");
rect.setAttribute("x",0.5);
rect.setAttribute("y",0.5);
rect.setAttribute("width",wid-1);
rect.setAttribute("height",hgt-1);
rect.setAttribute("style",this.legendStyle);
for (var s = 0; s < scount; s++) {
var color = this.getSeriesColor(s);
var shape = this.getMarkerShape(s);
if (this.markersVisible) {
var leg = this.createMarker(s, 0, 2, (s*3)+2, color, shape, true);
svgLegendGroup.appendChild(leg);
}
else {
var leg = this.document.createElementNS(SVGNS,"rect");
leg.setAttribute("x",1);
leg.setAttribute("y",(s * 3) + 1);
leg.setAttribute("width",2);
leg.setAttribute("height",2);
leg.setAttribute("fill",color);
leg.setAttribute("stroke",'black');
leg.setAttribute("stroke-width",'0.1px');
svgLegendGroup.appendChild(leg);
}
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-legendLabel");
text.setAttribute("style",this.legendLabelStyle);
text.setAttribute("x", 3.5);
text.setAttribute("y", ((s+1) * 3));
var textNode = this.document.createTextNode(legends[s]);
text.appendChild(textNode);
svgLegendGroup.appendChild(text);
}
}

function _ZEN_SVGComponent_chart_renderPlotArea() {
if (zenIsMissing(this.document)) return;
var rect;
var plotAreaGroup = this.findSVGElement('plotAreaGroup');
if (null == plotAreaGroup) {
plotAreaGroup = this.document.createElementNS(SVGNS,"g");
plotAreaGroup.setAttribute("id",this.makeId('plotAreaGroup'));
this.svgGroup.appendChild(plotAreaGroup);
rect = this.document.createElementNS(SVGNS,"rect");
rect.setAttribute("id",this.makeId('plotArea'));
plotAreaGroup.appendChild(rect);
var f = new Function('evt','series','item','return zenPage.getComponent('+this.index+').chartElementClickHandler(evt,null,null);');
rect.addEventListener('click',f,false);
}
else {
rect = this.findSVGElement('plotArea');
}
zenASSERT(rect,'rect is not defined',arguments);
rect.setAttribute("class","chart-plotArea");
rect.setAttribute("style",this.plotAreaStyle);
rect.setAttribute("x",parseInt(this.marginLeft,10));
rect.setAttribute("y",parseInt(this.marginTop,10));
rect.setAttribute("width",this._plotWidth);
rect.setAttribute("height",this._plotHeight);
if (this.hasAxes()) {
this.renderBands();
if ('' != this.onrenderPlotArea) {
zenInvokeCallbackMethod(this.onrenderPlotArea,this,'onrenderPlotArea','chart',this);
}
this.renderAxes();
this.renderYLabels();
this.renderXLabels();
}
}

function _ZEN_SVGComponent_chart_renderSeries(group) {
alert('Chart: renderSeries method is unimplemented.');
}

function _ZEN_SVGComponent_chart_renderSeriesGroup() {
if (zenIsMissing(this.document)) return;
var seriesGroup = this.findSVGElement('seriesGroup');
if (null == seriesGroup) {
seriesGroup = this.document.createElementNS(SVGNS,"svg");
seriesGroup.setAttribute("id",this.makeId('seriesGroup'));
this.svgGroup.appendChild(seriesGroup);
}
while(null != seriesGroup.firstChild) {
seriesGroup.removeChild(seriesGroup.firstChild);
}
seriesGroup.setAttribute("x",this._plotLeft);
seriesGroup.setAttribute("y",this._plotTop);
seriesGroup.setAttribute("width",this._plotWidth);
seriesGroup.setAttribute("height",this._plotHeight);
this.renderSeries(seriesGroup);
}

function _ZEN_SVGComponent_chart_renderTitle() {
if (zenIsMissing(this.document)) return;
var text;
var chartTitle = this.findSVGElement('chartTitle');
if (null != chartTitle) {
this.svgGroup.removeChild(chartTitle);
chartTitle = null;
}
if ('' != this.title) {
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-title");
text.setAttribute("id",this.makeId('chartTitle'));
text.setAttribute("style",this.titleStyle);
text.setAttribute("text-anchor","middle");
text.setAttribute("x", this.titleX);
text.setAttribute("y", this.titleY);
var textNode = this.document.createTextNode(this.title);
text.appendChild(textNode);
this.svgGroup.appendChild(text);
}
}

function _ZEN_SVGComponent_chart_renderXLabels() {
if (zenIsMissing(this.document)) return;
var xLabelGroup = this.findSVGElement('xLabelGroup');
if (null == xLabelGroup) {
xLabelGroup = this.document.createElementNS(SVGNS,"g");
xLabelGroup.setAttribute("id",this.makeId('xLabelGroup'));
this.svgGroup.appendChild(xLabelGroup);
}
while(null != xLabelGroup.firstChild) {
xLabelGroup.removeChild(xLabelGroup.firstChild);
}
if ('' != this._xAxisTitle) {
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-xLabel");
text.setAttribute("style",this.labelStyle + this._xLabelStyle);
text.setAttribute("text-anchor","middle");
text.setAttribute("x", this._plotLeft + this._plotWidth/2);
text.setAttribute("y", 99);
var textNode = this.document.createTextNode(this._xAxisTitle);
text.appendChild(textNode);
xLabelGroup.appendChild(text);
}
if (this.labelsVisible && this._xLabelUnits > 0) {
if (this._xGridType == 'value') {
var start = Math.floor(Math.abs(this._xMinValue/this._xLabelUnits))*this._xLabelUnits*(this._xMinValue>=0 ? 1 : -1);
var end = Math.floor(Math.abs(this._xMaxValue/this._xLabelUnits))*this._xLabelUnits*(this._xMaxValue>=0 ? 1 : -1);
var limit = 0;
for (var v = start; v <= end && limit < 100; v += this._xLabelUnits, limit++) {
var x = this.getPlotX(v);
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-xLabel");
text.setAttribute("style",this.labelStyle + this._xLabelStyle);
text.setAttribute("text-anchor","middle");
text.setAttribute("x", x);
text.setAttribute("y", this._plotBottom + 4);
if (this._xLabelAngle != '' && this._xLabelAngle != 0) {
text.setAttribute("transform","rotate("+this._xLabelAngle+","+x+","+(this._plotBottom + 4)+")");
}
var lbl = this.getXLabelText(v);
var textNode = this.document.createTextNode((null==lbl)?'':lbl);
text.appendChild(textNode);
xLabelGroup.appendChild(text);
}
}
else {
var items = this.getSeriesSize();
if (items > 0) {
var dx,adj;
if (this.plotToEdge) {
dx = (items<=1) ? this._plotWidth : (this._plotWidth / (items-1));
adj = dx;
}
else {
dx = this._plotWidth / items;
adj = (dx/2);
}
var x = this._plotLeft;
var adj = this.plotToEdge ? dx : (dx/2);
for (var n = 0; n < items; n++) {
x += dx;
if (n%this._xLabelUnits ==0) {
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-xLabel");
text.setAttribute("style",this.labelStyle + this._xLabelStyle);
text.setAttribute("text-anchor","middle");
text.setAttribute("x", x - adj);
text.setAttribute("y", this._plotBottom + 4);
if (this._xLabelAngle != '' && this._xLabelAngle != 0) {
text.setAttribute("transform","rotate("+this._xLabelAngle+","+(x - (dx/2))+","+(this._plotBottom + 4)+")");
}
var lbl = this.getXLabelText(n);
var textNode = this.document.createTextNode((null==lbl)?'':lbl);
text.appendChild(textNode);
xLabelGroup.appendChild(text);
}
}
}
}
}
}

function _ZEN_SVGComponent_chart_renderYLabels() {
if (zenIsMissing(this.document)) return;
var yLabelGroup = this.findSVGElement('yLabelGroup');
if (null == yLabelGroup) {
yLabelGroup = this.document.createElementNS(SVGNS,"g");
yLabelGroup.setAttribute("id",this.makeId('yLabelGroup'));
this.svgGroup.appendChild(yLabelGroup);
}
while(null != yLabelGroup.firstChild) {
yLabelGroup.removeChild(yLabelGroup.firstChild);
}
if ('' != this._yAxisTitle) {
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-yLabel");
text.setAttribute("style",this.labelStyle + this._yLabelStyle);
text.setAttribute("text-anchor","middle");
text.setAttribute("x", 3);
text.setAttribute("y", this._plotTop + this._plotHeight/2);
text.setAttribute("transform","rotate(-90,"+(3)+","+(this._plotTop + this._plotHeight/2)+")");
var textNode = this.document.createTextNode(this._yAxisTitle);
text.appendChild(textNode);
yLabelGroup.appendChild(text);
}
if (this.labelsVisible && this._yLabelUnits > 0) {
if (this._yGridType == 'value') {
var start = Math.floor(Math.abs(this._yMinValue/this._yLabelUnits))*this._yLabelUnits*(this._yMinValue>=0 ? 1 : -1);
var end = Math.floor(Math.abs(this._yMaxValue/this._yLabelUnits))*this._yLabelUnits*(this._yMaxValue>=0 ? 1 : -1);
var limit = 0;
for (var v = start; v <= end && limit < 100; v += this._yLabelUnits, limit++) {
var y = this.getPlotY(v);
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-yLabel");
text.setAttribute("style",this.labelStyle + this._yLabelStyle);
text.setAttribute("text-anchor","end");
text.setAttribute("x", this._plotLeft);
text.setAttribute("y", y + 1);
if (this._yLabelAngle != '' && this._yLabelAngle != 0) {
text.setAttribute("transform","rotate("+this._yLabelAngle+","+(this._plotLeft)+","+(y+1)+")");
}
var lbl = this.getYLabelText(v);
var textNode = this.document.createTextNode((null==lbl)?'':lbl);
text.appendChild(textNode);
yLabelGroup.appendChild(text);
}
}
else {
var items = this.getSeriesSize();
if (items > 0) {
var dy,adj;
if (this.plotToEdge) {
dy = (items<=1) ? this._plotHeight : (this._plotHeight / (items-1));
adj = dy;
}
else {
dy = this._plotHeight / items;
adj = (dy/4);
}
var y = this._plotTop;
for (var n = 0; n < items; n++) {
y += dy;
if (n%this._yLabelUnits ==0) {
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("class","chart-yLabel");
text.setAttribute("style",this.labelStyle + this._yLabelStyle);
text.setAttribute("text-anchor","end");
text.setAttribute("x", this._plotLeft);
text.setAttribute("y", y - adj);
if (this._yLabelAngle != '' && this._yLabelAngle != 0) {
text.setAttribute("transform","rotate("+this._yLabelAngle+","+(this._plotLeft)+","+(y-(dy/4))+")");
}
var lbl = this.getYLabelText(n);
var textNode = this.document.createTextNode((null==lbl)?'':lbl);
text.appendChild(textNode);
yLabelGroup.appendChild(text);
}
}
}
}
}
}

function _ZEN_SVGComponent_chart_selectElement(series,item) {
if (parseInt(this.selectedSeries,10) >= 0 && parseInt(this.selectedItem,10) >= 0) {
var el = this.getChartElement(this.selectedSeries, this.selectedItem);
if (el) {
el.setAttribute('style',this.getChartElementStyle(this.selectedSeries, this.selectedItem));
}
}
series = parseInt(series,10);
item = parseInt(item,10);
if (series >= 0 && item >= 0
&& series < this.getSeriesCount()
&& item < this.getSeriesSize()) {
this.selectedSeries = series;
this.selectedItem = item;
var el = this.getChartElement(this.selectedSeries, this.selectedItem);
if (el) {
el.setAttribute('style',this.getChartElementStyle(this.selectedSeries, this.selectedItem) + this.selectedItemStyle);
}
}
else {
this.selectedSeries = -1;
this.selectedItem = -1;
}
}

function _ZEN_SVGComponent_chart_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_chart_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_chart_setProperty(property,value,value2) {
switch(property) {
case 'backgroundStyle':
this.backgroundStyle = value;
var rect = this.findSVGElement('background');
if (rect) {
rect.setAttribute("style",this.backgroundStyle);
}
break;
case 'plotAreaStyle':
this.plotAreaStyle = value;
var rect = this.findSVGElement('plotArea');
if (rect) {
rect.setAttribute("style",this.plotAreaStyle);
}
break;
case 'bandUpperStyle':
this.bandUpperStyle = value;
var rect = this.findSVGElement('bandUpper');
if (rect) {
rect.setAttribute("style",this.bandUpperStyle);
}
break;
case 'bandLowerStyle':
this.bandLowerStyle = value;
var rect = this.findSVGElement('bandLower');
if (rect) {
rect.setAttribute("style",this.bandLowerStyle);
}
break;
case 'marginTop':
case 'marginLeft':
case 'marginBottom':
case 'marginRight':
this[property] = parseInt(value,10);
this.render();
break;
case 'bandUpper':
case 'bandLower':
case 'markerScale':
this[property] = (value=='') ? '' : parseFloat(value);
this.render();
break;
case 'plotStyle':
case 'markerStyle':
case 'markerShapes':
case 'seriesColors':
case 'seriesNames':
this[property] = value;
this.render();
break;
case 'seriesCount':
case 'seriesSize':
this[property] = (value=='') ? '' : parseInt(value,10);
this.render();
break;
case 'title':
case 'titleStyle':
this[property] = value;
this.renderTitle();
break;
case 'gridStyle':
case 'labelStyle':
case 'legendStyle':
case 'legendLabelStyle':
case 'selectedItemStyle':
case 'ongetData':
case 'ongetLabelX':
case 'ongetLabelY':
case 'onrenderPlotArea':
this[property] = value;
this.render();
break;
case 'titleX':
case 'titleY':
this[property] = parseInt(value,10);
this.renderTitle();
break;
case 'legendX':
case 'legendY':
this[property] = parseInt(value,10);
this.renderLegend();
break;
case 'legendWidth':
case 'legendHeight':
this[property] = (value=='') ? value : parseInt(value,10);
this.renderLegend();
break;
case 'legendVisible':
this[property] = value ? true : false;
this.renderLegend();
break;
case 'labelsVisible':
case 'markersVisible':
case 'plotToEdge':
this[property] = value ? true : false;
this.render();
break;
case 'controllerId':
this.setControllerId(value);
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_chart_setXAxis(axis) {
var old = this.xAxis;
this.xAxis = axis;
if (null!=axis) {
axis.parent = this;
}
if (null!=old) {
old.parent = null;
}
return old;
}

function _ZEN_SVGComponent_chart_setYAxis(axis) {
var old = this.yAxis;
this.yAxis = axis;
if (null!=axis) {
axis.parent = this;
}
if (null!=old) {
old.parent = null;
}
return old;
}

function _ZEN_SVGComponent_chart_updateChart() {
this.render();
}

function _ZEN_SVGComponent_chart_useSumForRange() {
return false;
}
function _ZEN_SVGComponent_chart__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_chart.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_chart.prototype;
	p.constructor = _ZEN_SVGComponent_chart;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.chart';
	p._type = 'chart';
	p.serialize = _ZEN_SVGComponent_chart_serialize;
	p.getSettings = _ZEN_SVGComponent_chart_getSettings;
	p.acquireData = _ZEN_SVGComponent_chart_acquireData;
	p.acquireSeriesData = _ZEN_SVGComponent_chart_acquireSeriesData;
	p.calculateRangeValues = _ZEN_SVGComponent_chart_calculateRangeValues;
	p.chartElementClickHandler = _ZEN_SVGComponent_chart_chartElementClickHandler;
	p.connectToController = _ZEN_SVGComponent_chart_connectToController;
	p.createMarker = _ZEN_SVGComponent_chart_createMarker;
	p.disconnectFromController = _ZEN_SVGComponent_chart_disconnectFromController;
	p.findDataRange = _ZEN_SVGComponent_chart_findDataRange;
	p.findScaleUnits = _ZEN_SVGComponent_chart_findScaleUnits;
	p.getChartElement = _ZEN_SVGComponent_chart_getChartElement;
	p.getChartElementStyle = _ZEN_SVGComponent_chart_getChartElementStyle;
	p.getController = _ZEN_SVGComponent_chart_getController;
	p.getLegendLabels = _ZEN_SVGComponent_chart_getLegendLabels;
	p.getMarkerShape = _ZEN_SVGComponent_chart_getMarkerShape;
	p.getNumericAbbreviation = _ZEN_SVGComponent_chart_getNumericAbbreviation;
	p.getPlotX = _ZEN_SVGComponent_chart_getPlotX;
	p.getPlotY = _ZEN_SVGComponent_chart_getPlotY;
	p.getSelectedItem = _ZEN_SVGComponent_chart_getSelectedItem;
	p.getSelectedSeries = _ZEN_SVGComponent_chart_getSelectedSeries;
	p.getSeriesColor = _ZEN_SVGComponent_chart_getSeriesColor;
	p.getSeriesCount = _ZEN_SVGComponent_chart_getSeriesCount;
	p.getSeriesData = _ZEN_SVGComponent_chart_getSeriesData;
	p.getSeriesNames = _ZEN_SVGComponent_chart_getSeriesNames;
	p.getSeriesSVGGroup = _ZEN_SVGComponent_chart_getSeriesSVGGroup;
	p.getSeriesSize = _ZEN_SVGComponent_chart_getSeriesSize;
	p.getXAxis = _ZEN_SVGComponent_chart_getXAxis;
	p.getXAxisType = _ZEN_SVGComponent_chart_getXAxisType;
	p.getXLabelText = _ZEN_SVGComponent_chart_getXLabelText;
	p.getYAxis = _ZEN_SVGComponent_chart_getYAxis;
	p.getYAxisType = _ZEN_SVGComponent_chart_getYAxisType;
	p.getYLabelText = _ZEN_SVGComponent_chart_getYLabelText;
	p.hasAxes = _ZEN_SVGComponent_chart_hasAxes;
	p.notifyView = _ZEN_SVGComponent_chart_notifyView;
	p.notifyViewHandler = _ZEN_SVGComponent_chart_notifyViewHandler;
	p.renderAxes = _ZEN_SVGComponent_chart_renderAxes;
	p.renderBands = _ZEN_SVGComponent_chart_renderBands;
	p.renderContents = _ZEN_SVGComponent_chart_renderContents;
	p.renderLegend = _ZEN_SVGComponent_chart_renderLegend;
	p.renderPlotArea = _ZEN_SVGComponent_chart_renderPlotArea;
	p.renderSeries = _ZEN_SVGComponent_chart_renderSeries;
	p.renderSeriesGroup = _ZEN_SVGComponent_chart_renderSeriesGroup;
	p.renderTitle = _ZEN_SVGComponent_chart_renderTitle;
	p.renderXLabels = _ZEN_SVGComponent_chart_renderXLabels;
	p.renderYLabels = _ZEN_SVGComponent_chart_renderYLabels;
	p.selectElement = _ZEN_SVGComponent_chart_selectElement;
	p.sendEventToController = _ZEN_SVGComponent_chart_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_chart_setControllerId;
	p.setProperty = _ZEN_SVGComponent_chart_setProperty;
	p.setXAxis = _ZEN_SVGComponent_chart_setXAxis;
	p.setYAxis = _ZEN_SVGComponent_chart_setYAxis;
	p.updateChart = _ZEN_SVGComponent_chart_updateChart;
	p.useSumForRange = _ZEN_SVGComponent_chart_useSumForRange;
}

// ================================================================================
_zenClassIdx['barChart'] = '_ZEN_SVGComponent_barChart';
function _ZEN_SVGComponent_barChart(index,id) {
	if (index>=0) {_ZEN_SVGComponent_barChart__init(this,index,id);}
}

function _ZEN_SVGComponent_barChart__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_chart__init) ?zenMaster._ZEN_SVGComponent_chart__init(o,index,id):_ZEN_SVGComponent_chart__init(o,index,id);
	o.chartPivot = false;
	o.chartStacked = false;
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
	o.plotToEdge = false;
}
function _ZEN_SVGComponent_barChart_serialize(set,s)
{
	s[0]='350773169';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=this.bandLower;s[9]=this.bandLowerStyle;s[10]=this.bandUpper;s[11]=this.bandUpperStyle;s[12]=(this.boundless?1:0);s[13]=(this.chartPivot?1:0);s[14]=(this.chartStacked?1:0);s[15]=this.controller;s[16]=this.controllerId;s[17]=this.gridStyle;s[18]=this.height;s[19]=(this.hidden?1:0);s[20]=this.labelStyle;s[21]=(this.labelsVisible?1:0);s[22]=this.legendHeight;s[23]=this.legendLabelStyle;s[24]=this.legendStyle;s[25]=(this.legendVisible?1:0);s[26]=this.legendWidth;s[27]=this.legendX;s[28]=this.legendY;s[29]=this.marginBottom;s[30]=this.marginLeft;s[31]=this.marginRight;s[32]=this.marginTop;s[33]=this.markerScale;s[34]=this.markerShapes;s[35]=this.markerStyle;s[36]=(this.markersVisible?1:0);s[37]=this.onclick;s[38]=this.onelementClick;s[39]=this.ongetData;s[40]=this.ongetLabelX;s[41]=this.ongetLabelY;s[42]=this.onnotifyView;s[43]=this.onrenderPlotArea;s[44]=this.onupdate;s[45]=this.plotAreaStyle;s[46]=this.plotStyle;s[47]=(this.plotToEdge?1:0);s[48]=this.position;s[49]=this.preserveAspectRatio;s[50]=this.renderFlag;s[51]=this.selectedItem;s[52]=this.selectedItemStyle;s[53]=this.selectedSeries;s[54]=this.seriesColors;s[55]=this.seriesCount;s[56]=this.seriesNames;s[57]=this.seriesSize;s[58]=this.title;s[59]=this.titleStyle;s[60]=this.titleX;s[61]=this.titleY;s[62]=this.tuple;s[63]=this.viewBoxHeight;s[64]=this.viewBoxWidth;s[65]=(this.visible?1:0);s[66]=this.width;s[67]=this.x;s[68]=set.addObject(this.xAxis,'xAxis');s[69]=this.y;s[70]=set.addObject(this.yAxis,'yAxis');
}
function _ZEN_SVGComponent_barChart_getSettings(s)
{
	s['name'] = 'string';
	s['chartPivot'] = 'boolean';
	s['chartStacked'] = 'boolean';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_barChart_connectToController() {
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

function _ZEN_SVGComponent_barChart_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_barChart_getChartElementStyle(series,item) {
return this.plotStyle;
}

function _ZEN_SVGComponent_barChart_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_barChart_getXAxisType() {
return this.chartPivot ? 'value' : 'category';
}

function _ZEN_SVGComponent_barChart_getYAxisType() {
return this.chartPivot ? 'category' : 'value';
}

function _ZEN_SVGComponent_barChart_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_barChart_renderSeries(group) {
var x,y,val;
var scount = this.getSeriesCount();
var items = this.getSeriesSize();
var hasSelect = !zenIsMissing(this.selectedSeries) && !zenIsMissing(this.selectedItem) && (this.selectedSeries >= 0) && (this.selectedItem >= 0);
if (items > 0) {
var barwid = 1;
if (scount > 0) {
if (!this.chartPivot) {
if (this.chartStacked) {
barwid = 0.8 * (this._plotWidth / items);
}
else {
barwid = (0.8/scount) * (this._plotWidth / items);
}
}
else {
if (this.chartStacked) {
barhgt = 0.8 * (this._plotHeight / items);
}
else {
barhgt = (0.8/scount) * (this._plotHeight / items);
}
}
}
var data = new Array(scount);
for (var s = 0; s < scount; s++) {
data[s] = this.getSeriesData(s);
}
for (var s = 0; s < scount; s++) {
var color = this.getSeriesColor(s);
if (!this.chartPivot) {
var dx = this._plotWidth / items;
var adj = (dx/2);
var x = 0;
var base = 0;
var shift = this.chartStacked ? -barwid/2 : ((s * barwid) - (scount*barwid)/2);
if (isNaN(parseFloat(this._yBaseValue))) {
base = this._plotHeight;
}
else {
base = this.getPlotY(this._yBaseValue) - this._plotTop;
}
}
else {
var dy = this._plotHeight / items;
var adj = (dy/2);
var y = 0;
var base = 0;
var shift = this.chartStacked ? -barhgt/2 : ((s * barhgt) - (scount*barhgt)/2);
if (isNaN(parseFloat(this._xBaseValue))) {
base = 0;
}
else {
base = this.getPlotX(this._xBaseValue) - this._plotLeft;
}
}
for (var n = 0; n < items; n++) {
val = (null == data[s]) ? 0 : ((null == data[s][n]) ? 0 : parseFloat(data[s][n],10));
if (this.chartStacked && val < 0) {
val = 0;
}
if (this.chartStacked && s > 0) {
var dval = 0;
for (q = 0; q < s; q++) {
var v = (null == data[q]) ? 0 : ((null == data[q][n]) ? 0 : parseFloat(data[q][n],10));
dval += ((v > 0) ? v : 0);
}
if (!this.chartPivot) {
base = this.getPlotY(dval) - this._plotTop;
}
else {
base = this.getPlotX(dval) - this._plotLeft;
}
val += dval;
}
var bar = this.document.createElementNS(SVGNS,"rect");
bar.setAttribute("class","chart-seriesBar");
if (!this.chartPivot) {
x += dx;
y = this.getPlotY(val) - this._plotTop;
var top,hgt;
if (y <= base) {
top = y;
hgt = base-y;
}
else {
top = base;
hgt = y-base;
}
bar.setAttribute("x",x-adj+shift);
bar.setAttribute("y",top);
bar.setAttribute("width",barwid);
bar.setAttribute("height",hgt);
}
else {
y += dy;
x = this.getPlotX(val) - this._plotLeft;
var left,wid;
if (x <= base) {
left = x;
wid = base-x;
}
else {
left = base;
wid = x-base;
}
bar.setAttribute("x",left);
bar.setAttribute("y",y-adj+shift);
bar.setAttribute("width",wid);
bar.setAttribute("height",barhgt);
}
bar.setAttribute("fill",color);
group.appendChild(bar);
if (hasSelect && s == this.selectedSeries && n == this.selectedItem) {
bar.setAttribute("style",this.plotStyle + this.selectedItemStyle);
}
else {
bar.setAttribute("style",this.plotStyle);
}
var f = new Function('evt','series','item','return zenPage.getComponent('+this.index+').chartElementClickHandler(evt,'+s+','+n+');');
bar.addEventListener('click',f,false);
bar.setAttribute('id',this.makeId('el_' + s + '_' + n));
}
}
}
}

function _ZEN_SVGComponent_barChart_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_barChart_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_barChart_setProperty(property,value,value2) {
switch(property) {
case 'chartPivot':
case 'chartStacked':
this[property] = value ? true : false;
this.render();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_barChart_useSumForRange() {
return this.chartStacked;
}
function _ZEN_SVGComponent_barChart__Loader() {
	zenLoadClass('_ZEN_SVGComponent_chart');
	_ZEN_SVGComponent_barChart.prototype = zenCreate('_ZEN_SVGComponent_chart',-1);
	var p = _ZEN_SVGComponent_barChart.prototype;
	p.constructor = _ZEN_SVGComponent_barChart;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_chart) ? zenMaster._ZEN_SVGComponent_chart.prototype:_ZEN_SVGComponent_chart.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.barChart';
	p._type = 'barChart';
	p.serialize = _ZEN_SVGComponent_barChart_serialize;
	p.getSettings = _ZEN_SVGComponent_barChart_getSettings;
	p.connectToController = _ZEN_SVGComponent_barChart_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_barChart_disconnectFromController;
	p.getChartElementStyle = _ZEN_SVGComponent_barChart_getChartElementStyle;
	p.getController = _ZEN_SVGComponent_barChart_getController;
	p.getXAxisType = _ZEN_SVGComponent_barChart_getXAxisType;
	p.getYAxisType = _ZEN_SVGComponent_barChart_getYAxisType;
	p.notifyView = _ZEN_SVGComponent_barChart_notifyView;
	p.renderSeries = _ZEN_SVGComponent_barChart_renderSeries;
	p.sendEventToController = _ZEN_SVGComponent_barChart_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_barChart_setControllerId;
	p.setProperty = _ZEN_SVGComponent_barChart_setProperty;
	p.useSumForRange = _ZEN_SVGComponent_barChart_useSumForRange;
}

// ================================================================================
_zenClassIdx['diffChart'] = '_ZEN_SVGComponent_diffChart';
function _ZEN_SVGComponent_diffChart(index,id) {
	if (index>=0) {_ZEN_SVGComponent_diffChart__init(this,index,id);}
}

function _ZEN_SVGComponent_diffChart__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_chart__init) ?zenMaster._ZEN_SVGComponent_chart__init(o,index,id):_ZEN_SVGComponent_chart__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
	o.refLineStyle = 'stroke-dasharray: 1,1;';
}
function _ZEN_SVGComponent_diffChart_serialize(set,s)
{
	s[0]='2929534283';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=this.bandLower;s[9]=this.bandLowerStyle;s[10]=this.bandUpper;s[11]=this.bandUpperStyle;s[12]=(this.boundless?1:0);s[13]=this.controller;s[14]=this.controllerId;s[15]=this.gridStyle;s[16]=this.height;s[17]=(this.hidden?1:0);s[18]=this.labelStyle;s[19]=(this.labelsVisible?1:0);s[20]=this.legendHeight;s[21]=this.legendLabelStyle;s[22]=this.legendStyle;s[23]=(this.legendVisible?1:0);s[24]=this.legendWidth;s[25]=this.legendX;s[26]=this.legendY;s[27]=this.marginBottom;s[28]=this.marginLeft;s[29]=this.marginRight;s[30]=this.marginTop;s[31]=this.markerScale;s[32]=this.markerShapes;s[33]=this.markerStyle;s[34]=(this.markersVisible?1:0);s[35]=this.onclick;s[36]=this.onelementClick;s[37]=this.ongetData;s[38]=this.ongetLabelX;s[39]=this.ongetLabelY;s[40]=this.onnotifyView;s[41]=this.onrenderPlotArea;s[42]=this.onupdate;s[43]=this.plotAreaStyle;s[44]=this.plotStyle;s[45]=(this.plotToEdge?1:0);s[46]=this.position;s[47]=this.preserveAspectRatio;s[48]=this.refLineStyle;s[49]=this.renderFlag;s[50]=this.selectedItem;s[51]=this.selectedItemStyle;s[52]=this.selectedSeries;s[53]=this.seriesColors;s[54]=this.seriesCount;s[55]=this.seriesNames;s[56]=this.seriesSize;s[57]=this.title;s[58]=this.titleStyle;s[59]=this.titleX;s[60]=this.titleY;s[61]=this.tuple;s[62]=this.viewBoxHeight;s[63]=this.viewBoxWidth;s[64]=(this.visible?1:0);s[65]=this.width;s[66]=this.x;s[67]=set.addObject(this.xAxis,'xAxis');s[68]=this.y;s[69]=set.addObject(this.yAxis,'yAxis');
}
function _ZEN_SVGComponent_diffChart_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	s['refLineStyle'] = 'svgStyle';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_diffChart_connectToController() {
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

function _ZEN_SVGComponent_diffChart_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_diffChart_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_diffChart_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_diffChart_renderSeries(group) {
var x,y,val;
var scount = this.getSeriesCount();
var items = this.getSeriesSize();
if (items > 0) {
var data = new Array(scount);
for (var s = 0; s < scount; s++) {
data[s] = this.getSeriesData(s);
}
for (var s = scount-1; s >=0; s--) {
var color = this.getSeriesColor(s);
if (this.markersVisible) {
var marker = this.getMarkerShape(s);
}
var poly = this.document.createElementNS(SVGNS,"polyline");
poly.setAttribute("class","chart-seriesLine");
group.appendChild(poly);
var points = ''; // set of points for this line
var dx, adj;
if (this.plotToEdge) {
dx = (items<=1) ? this._plotWidth : (this._plotWidth / (items-1));
adj = dx;
}
else {
dx = this._plotWidth / items;
adj = (dx/2);
}
var x = 0;
for (var n = 0; n < items; n++) {
val = (null == data[s]) ? 0 : ((null == data[s][n]) ? 0 : parseFloat(data[s][n],10));
x += dx;
y = this.getPlotY(val) - this._plotTop;
points += (x-(adj)) + ' ' + y + ' ';
if (this.markersVisible) {
group.appendChild(this.createMarker(s,n,(x-adj),y,color,marker));
}
}
if (s > 0) {
for (var n = items-1; n >= 0; n--) {
val = (null == data[0]) ? 0 : ((null == data[0][n]) ? 0 : parseFloat(data[0][n],10));
y = this.getPlotY(val) - this._plotTop;
points += (x-(adj)) + ' ' + y + ' ';
x -= dx;
}
}
poly.setAttribute("points",points);
poly.setAttribute("stroke",color);
poly.setAttribute("style",(s==0) ? this.refLineStyle : this.plotStyle);
poly.setAttribute("fill",(s > 0) ? color : 'none');
}
}
}

function _ZEN_SVGComponent_diffChart_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_diffChart_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_diffChart_setProperty(property,value,value2) {
switch(property) {
case 'refLineStyle':
this[property] = value;
this.render();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_diffChart_useSumForRange() {
return false;
}
function _ZEN_SVGComponent_diffChart__Loader() {
	zenLoadClass('_ZEN_SVGComponent_chart');
	_ZEN_SVGComponent_diffChart.prototype = zenCreate('_ZEN_SVGComponent_chart',-1);
	var p = _ZEN_SVGComponent_diffChart.prototype;
	p.constructor = _ZEN_SVGComponent_diffChart;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_chart) ? zenMaster._ZEN_SVGComponent_chart.prototype:_ZEN_SVGComponent_chart.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.diffChart';
	p._type = 'diffChart';
	p.serialize = _ZEN_SVGComponent_diffChart_serialize;
	p.getSettings = _ZEN_SVGComponent_diffChart_getSettings;
	p.connectToController = _ZEN_SVGComponent_diffChart_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_diffChart_disconnectFromController;
	p.getController = _ZEN_SVGComponent_diffChart_getController;
	p.notifyView = _ZEN_SVGComponent_diffChart_notifyView;
	p.renderSeries = _ZEN_SVGComponent_diffChart_renderSeries;
	p.sendEventToController = _ZEN_SVGComponent_diffChart_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_diffChart_setControllerId;
	p.setProperty = _ZEN_SVGComponent_diffChart_setProperty;
	p.useSumForRange = _ZEN_SVGComponent_diffChart_useSumForRange;
}

// ================================================================================
_zenClassIdx['hilowChart'] = '_ZEN_SVGComponent_hilowChart';
function _ZEN_SVGComponent_hilowChart(index,id) {
	if (index>=0) {_ZEN_SVGComponent_hilowChart__init(this,index,id);}
}

function _ZEN_SVGComponent_hilowChart__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_chart__init) ?zenMaster._ZEN_SVGComponent_chart__init(o,index,id):_ZEN_SVGComponent_chart__init(o,index,id);
	o.chartPivot = false;
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
	o.plotToEdge = false;
}
function _ZEN_SVGComponent_hilowChart_serialize(set,s)
{
	s[0]='3361833975';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=this.bandLower;s[9]=this.bandLowerStyle;s[10]=this.bandUpper;s[11]=this.bandUpperStyle;s[12]=(this.boundless?1:0);s[13]=(this.chartPivot?1:0);s[14]=this.controller;s[15]=this.controllerId;s[16]=this.gridStyle;s[17]=this.height;s[18]=(this.hidden?1:0);s[19]=this.labelStyle;s[20]=(this.labelsVisible?1:0);s[21]=this.legendHeight;s[22]=this.legendLabelStyle;s[23]=this.legendStyle;s[24]=(this.legendVisible?1:0);s[25]=this.legendWidth;s[26]=this.legendX;s[27]=this.legendY;s[28]=this.marginBottom;s[29]=this.marginLeft;s[30]=this.marginRight;s[31]=this.marginTop;s[32]=this.markerScale;s[33]=this.markerShapes;s[34]=this.markerStyle;s[35]=(this.markersVisible?1:0);s[36]=this.onclick;s[37]=this.onelementClick;s[38]=this.ongetData;s[39]=this.ongetLabelX;s[40]=this.ongetLabelY;s[41]=this.onnotifyView;s[42]=this.onrenderPlotArea;s[43]=this.onupdate;s[44]=this.plotAreaStyle;s[45]=this.plotStyle;s[46]=(this.plotToEdge?1:0);s[47]=this.position;s[48]=this.preserveAspectRatio;s[49]=this.renderFlag;s[50]=this.selectedItem;s[51]=this.selectedItemStyle;s[52]=this.selectedSeries;s[53]=this.seriesColors;s[54]=this.seriesCount;s[55]=this.seriesNames;s[56]=this.seriesSize;s[57]=this.title;s[58]=this.titleStyle;s[59]=this.titleX;s[60]=this.titleY;s[61]=this.tuple;s[62]=this.viewBoxHeight;s[63]=this.viewBoxWidth;s[64]=(this.visible?1:0);s[65]=this.width;s[66]=this.x;s[67]=set.addObject(this.xAxis,'xAxis');s[68]=this.y;s[69]=set.addObject(this.yAxis,'yAxis');
}
function _ZEN_SVGComponent_hilowChart_getSettings(s)
{
	s['name'] = 'string';
	s['chartPivot'] = 'boolean';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_hilowChart_connectToController() {
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

function _ZEN_SVGComponent_hilowChart_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_hilowChart_getChartElementStyle(series,item) {
return this.plotStyle;
}

function _ZEN_SVGComponent_hilowChart_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_hilowChart_getLegendLabels() {
var legends = new Array(1);
var names = this.getSeriesNames();
legends[0] = names[0];
return legends;
}

function _ZEN_SVGComponent_hilowChart_getXAxisType() {
return this.chartPivot ? 'value' : 'category';
}

function _ZEN_SVGComponent_hilowChart_getYAxisType() {
return this.chartPivot ? 'category' : 'value';
}

function _ZEN_SVGComponent_hilowChart_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_hilowChart_renderSeries(group) {
var x,y,val;
var scount = this.getSeriesCount();
var items = this.getSeriesSize();
scount = (scount > 3) ? 3 : scount;
var hasSelect = !zenIsMissing(this.selectedSeries) && !zenIsMissing(this.selectedItem) && (this.selectedSeries >= 0) && (this.selectedItem >= 0);
if (items > 0) {
var data = new Array(scount);
for (var s = 0; s < scount; s++) {
data[s] = this.getSeriesData(s);
}
var delta,barsize,adj;
var color = this.getSeriesColor(0);
var x = 0;
var y = 0;
if (!this.chartPivot) {
if (this.plotToEdge) {
delta = (items<=1) ? this._plotWidth : (this._plotWidth / (items-1));
adj = delta;
}
else {
delta = this._plotWidth / items;
adj = (delta/2);
}
barsize = (0.4/scount) * (this._plotWidth / items);
}
else {
if (this.plotToEdge) {
delta = (items<=1) ? this._plotHeight : (this._plotHeight / (items-1));
adj = delta;
}
else {
delta = this._plotHeight / items;
adj = (delta/2);
}
barsize = (0.4/scount) * (this._plotHeight / items);
}
var shift = -barsize/2;
for (var n = 0; n < items; n++) {
var hi = (null == data[0]) ? 0 : ((null == data[0][n]) ? 0 : parseFloat(data[0][n],10));
var low = (null == data[1]) ? 0 : ((null == data[1][n]) ? 0 : parseFloat(data[1][n],10));
var close = (null == data[2]) ? 0 : ((null == data[2][n]) ? 0 : parseFloat(data[2][n],10));
var bar = this.document.createElementNS(SVGNS,"rect");
bar.setAttribute("class","chart-seriesBar");
bar.setAttribute("fill",color);
group.appendChild(bar);
var marker = null;
if (scount > 2) {
marker = this.document.createElementNS(SVGNS,"polyline");
marker.setAttribute("class","chart-seriesBar");
marker.setAttribute("style",this.plotStyle);
marker.setAttribute("fill",color);
group.appendChild(marker);
}
if (!this.chartPivot) {
x += delta;
var top = this.getPlotY(hi) - this._plotTop;
var bottom = this.getPlotY(low) - this._plotTop;
var mid = this.getPlotY(close) - this._plotTop;
if (marker) {
var points = '0,1 0,-1 1,0 0,1';
marker.setAttribute("points",points);
marker.setAttribute("transform",'translate('+(x-adj-shift)+','+(mid)+')');
}
var hgt = bottom-top;
if (hgt < 0) {
var a = top;
top = bottom;
bottom = a;
hgt = -hgt;
bar.setAttribute("fill","white");
bar.setAttribute("stroke","black");
bar.setAttribute("stroke-width","0.25");
bar.setAttribute("stroke-dasharray","0.5,0.5");
}
bar.setAttribute("x",x-adj+shift);
bar.setAttribute("y",top);
bar.setAttribute("width",barsize);
bar.setAttribute("height",hgt);
}
else {
y += delta;
var right = this.getPlotX(hi) - this._plotLeft;
var left = this.getPlotX(low) - this._plotLeft;
var mid = this.getPlotX(close) - this._plotLeft;
if (marker) {
var points = '-1,0 1,0 0,1 -1,0';
marker.setAttribute("points",points);
marker.setAttribute("transform",'translate('+(mid)+','+(y-adj-shift)+')');
}
var wid = right-left;
if (wid < 0) {
var a = right;
right = left;
left = a;
wid = -wid;
bar.setAttribute("fill","white");
bar.setAttribute("stroke","black");
bar.setAttribute("stroke-width","0.25");
bar.setAttribute("stroke-dasharray","0.5,0.5");
}
bar.setAttribute("x",left);
bar.setAttribute("y",y-adj+shift);
bar.setAttribute("width",wid);
bar.setAttribute("height",barsize);
}
if (hasSelect && 0 == this.selectedSeries && n == this.selectedItem) {
bar.setAttribute("style",this.plotStyle + this.selectedItemStyle);
}
else {
bar.setAttribute("style",this.plotStyle);
}
var f = new Function('evt','series','item','return zenPage.getComponent('+this.index+').chartElementClickHandler(evt,0,'+n+');');
bar.addEventListener('click',f,false);
bar.setAttribute('id',this.makeId('el_0_' + n));
}
}
}

function _ZEN_SVGComponent_hilowChart_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_hilowChart_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_hilowChart_setProperty(property,value,value2) {
switch(property) {
case 'chartPivot':
this[property] = value ? true : false;
this.render();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_hilowChart_useSumForRange() {
return this.chartStacked;
}
function _ZEN_SVGComponent_hilowChart__Loader() {
	zenLoadClass('_ZEN_SVGComponent_chart');
	_ZEN_SVGComponent_hilowChart.prototype = zenCreate('_ZEN_SVGComponent_chart',-1);
	var p = _ZEN_SVGComponent_hilowChart.prototype;
	p.constructor = _ZEN_SVGComponent_hilowChart;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_chart) ? zenMaster._ZEN_SVGComponent_chart.prototype:_ZEN_SVGComponent_chart.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.hilowChart';
	p._type = 'hilowChart';
	p.serialize = _ZEN_SVGComponent_hilowChart_serialize;
	p.getSettings = _ZEN_SVGComponent_hilowChart_getSettings;
	p.connectToController = _ZEN_SVGComponent_hilowChart_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_hilowChart_disconnectFromController;
	p.getChartElementStyle = _ZEN_SVGComponent_hilowChart_getChartElementStyle;
	p.getController = _ZEN_SVGComponent_hilowChart_getController;
	p.getLegendLabels = _ZEN_SVGComponent_hilowChart_getLegendLabels;
	p.getXAxisType = _ZEN_SVGComponent_hilowChart_getXAxisType;
	p.getYAxisType = _ZEN_SVGComponent_hilowChart_getYAxisType;
	p.notifyView = _ZEN_SVGComponent_hilowChart_notifyView;
	p.renderSeries = _ZEN_SVGComponent_hilowChart_renderSeries;
	p.sendEventToController = _ZEN_SVGComponent_hilowChart_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_hilowChart_setControllerId;
	p.setProperty = _ZEN_SVGComponent_hilowChart_setProperty;
	p.useSumForRange = _ZEN_SVGComponent_hilowChart_useSumForRange;
}

// ================================================================================
_zenClassIdx['lineChart'] = '_ZEN_SVGComponent_lineChart';
function _ZEN_SVGComponent_lineChart(index,id) {
	if (index>=0) {_ZEN_SVGComponent_lineChart__init(this,index,id);}
}

function _ZEN_SVGComponent_lineChart__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_chart__init) ?zenMaster._ZEN_SVGComponent_chart__init(o,index,id):_ZEN_SVGComponent_chart__init(o,index,id);
	o.chartFilled = false;
	o.chartPivot = false;
	o.chartStacked = false;
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
}
function _ZEN_SVGComponent_lineChart_serialize(set,s)
{
	s[0]='1190330876';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=this.bandLower;s[9]=this.bandLowerStyle;s[10]=this.bandUpper;s[11]=this.bandUpperStyle;s[12]=(this.boundless?1:0);s[13]=(this.chartFilled?1:0);s[14]=(this.chartPivot?1:0);s[15]=(this.chartStacked?1:0);s[16]=this.controller;s[17]=this.controllerId;s[18]=this.gridStyle;s[19]=this.height;s[20]=(this.hidden?1:0);s[21]=this.labelStyle;s[22]=(this.labelsVisible?1:0);s[23]=this.legendHeight;s[24]=this.legendLabelStyle;s[25]=this.legendStyle;s[26]=(this.legendVisible?1:0);s[27]=this.legendWidth;s[28]=this.legendX;s[29]=this.legendY;s[30]=this.marginBottom;s[31]=this.marginLeft;s[32]=this.marginRight;s[33]=this.marginTop;s[34]=this.markerScale;s[35]=this.markerShapes;s[36]=this.markerStyle;s[37]=(this.markersVisible?1:0);s[38]=this.onclick;s[39]=this.onelementClick;s[40]=this.ongetData;s[41]=this.ongetLabelX;s[42]=this.ongetLabelY;s[43]=this.onnotifyView;s[44]=this.onrenderPlotArea;s[45]=this.onupdate;s[46]=this.plotAreaStyle;s[47]=this.plotStyle;s[48]=(this.plotToEdge?1:0);s[49]=this.position;s[50]=this.preserveAspectRatio;s[51]=this.renderFlag;s[52]=this.selectedItem;s[53]=this.selectedItemStyle;s[54]=this.selectedSeries;s[55]=this.seriesColors;s[56]=this.seriesCount;s[57]=this.seriesNames;s[58]=this.seriesSize;s[59]=this.title;s[60]=this.titleStyle;s[61]=this.titleX;s[62]=this.titleY;s[63]=this.tuple;s[64]=this.viewBoxHeight;s[65]=this.viewBoxWidth;s[66]=(this.visible?1:0);s[67]=this.width;s[68]=this.x;s[69]=set.addObject(this.xAxis,'xAxis');s[70]=this.y;s[71]=set.addObject(this.yAxis,'yAxis');
}
function _ZEN_SVGComponent_lineChart_getSettings(s)
{
	s['name'] = 'string';
	s['chartFilled'] = 'boolean';
	s['chartPivot'] = 'boolean';
	s['chartStacked'] = 'boolean';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_lineChart_connectToController() {
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

function _ZEN_SVGComponent_lineChart_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_lineChart_getChartElementStyle(series,item) {
return this.plotStyle;
}

function _ZEN_SVGComponent_lineChart_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_lineChart_getXAxisType() {
return this.chartPivot ? 'value' : 'category';
}

function _ZEN_SVGComponent_lineChart_getYAxisType() {
return this.chartPivot ? 'category' : 'value';
}

function _ZEN_SVGComponent_lineChart_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_lineChart_renderSeries(group) {
var x,y,val,missing,nextMissing,prevMissing;
var scount = this.getSeriesCount();
var items = this.getSeriesSize();
var firstPoint = false;
var hasSelect = !zenIsMissing(this.selectedSeries) && !zenIsMissing(this.selectedItem) && (this.selectedSeries >= 0) && (this.selectedItem >= 0);
if (items > 0) {
var data = new Array(scount);
for (var s = 0; s < scount; s++) {
data[s] = this.getSeriesData(s);
}
for (var s = scount-1; s >=0; s--) {
var color = this.getSeriesColor(s);
var marker = 'circle';
if (this.markersVisible) {
marker = this.getMarkerShape(s);
}
var poly = this.document.createElementNS(SVGNS,"path");
poly.setAttribute("class","chart-seriesLine");
var path = ''; // path for this line
poly.setAttribute("fill",'none');
group.appendChild(poly);
if (!this.chartPivot) {
var dx, adj;
if (this.plotToEdge) {
dx = (items<=1) ? this._plotWidth : (this._plotWidth / (items-1));
adj = dx;
}
else {
dx = this._plotWidth / items;
adj = (dx/2);
}
var x = 0;
var base = 0;
if (this.chartFilled) {
if (isNaN(parseFloat(this._yBaseValue))) {
base = this._plotHeight;
}
else {
base = this.getPlotY(this._yBaseValue) - this._plotTop;
}
}
if (this.chartFilled) {
path = 'M ' + (x+dx-adj) + ' ' + base + ' ';
firstPoint = false;
}
else {
firstPoint = true;
}
for (var n = 0; n < items; n++) {
nextMissing = (null == data[s] || (n == items-1)) ? false : ((null == data[s][n+1]) || ('number' != typeof data[s][n+1] && '' == data[s][n+1]) || (isNaN(data[s][n+1])));
prevMissing = (null == data[s] || (n == 0)) ? false : ((null == data[s][n-1]) || ('number' != typeof data[s][n-1] && '' == data[s][n-1]) || (isNaN(data[s][n-1])));
missing = (null == data[s]) ? false : ((null == data[s][n]) || ('number' != typeof data[s][n] && '' == data[s][n]) || (isNaN(data[s][n])));
val = (null == data[s]) ? 0 : ((null == data[s][n]) ? 0 : parseFloat(data[s][n],10));
val = isNaN(val) ? 0 : parseFloat(val);
if (this.chartStacked && val < 0) {
val = 0;
}
if (this.chartStacked && s > 0) {
var dval = 0;
for (q = 0; q < s; q++) {
var v = (null == data[q]) ? 0 : ((null == data[q][n]) ? 0 : parseFloat(data[q][n],10));
dval += ((v > 0) ? v : 0);
}
val += dval;
}
x += dx;
y = this.getPlotY(val) - this._plotTop;
if (missing) {
firstPoint = true;
}
else {
if (firstPoint && this.chartFilled) {
path += 'M ' + (x-adj) + ' ' + base + ' ';
firstPoint = false;
}
path += (firstPoint ? 'M ' : 'L ') + (x-adj) + ' ' + y + ' ';
firstPoint = false;
if (this.markersVisible || nextMissing || prevMissing) {
var mk = this.createMarker(s,n,(x-adj),y,color,marker);
group.appendChild(mk);
if (!this.markersVisible) {
mk.setAttribute('fill',color);
}
}
if (this.chartFilled && (nextMissing || n == items-1)) {
path += (x-adj) + " " + base + " z";
}
}
}
}
else {
var dy, adj;
if (this.plotToEdge) {
dy = (items<=1) ? this._plotHeight : (this._plotHeight / (items-1));
adj = dy;
}
else {
dy = this._plotHeight / items;
adj = (dy/2);
}
var y = 0;
var base = 0;
if (this.chartFilled) {
if (isNaN(parseFloat(this._xBaseValue))) {
base = 0;
}
else {
base = this.getPlotX(this._xBaseValue) - this._plotLeft;
}
}
if (this.chartFilled) {
path = 'M ' + base + ' ' + (y+dy-adj) + ' ';
firstPoint = false;
}
else {
firstPoint = true;
}
for (var n = 0; n < items; n++) {
nextMissing = (null == data[s] || (n == items-1)) ? false : ((null == data[s][n+1]) || ('' == data[s][n+1]) || (isNaN(data[s][n+1])));
prevMissing = (null == data[s] || (n == 0)) ? false : ((null == data[s][n-1]) || ('' == data[s][n-1]) || (isNaN(data[s][n-1])));
missing = (null == data[s]) ? false : ((null == data[s][n]) || ('' == data[s][n]) || (isNaN(data[s][n])));
val = (null == data[s]) ? 0 : ((null == data[s][n]) ? 0 : parseFloat(data[s][n],10));
val = isNaN(val) ? 0 : parseFloat(val);
if (this.chartStacked && val < 0) {
val = 0;
}
if (this.chartStacked && s > 0) {
var dval = 0;
for (q = 0; q < s; q++) {
var v = (null == data[q]) ? 0 : ((null == data[q][n]) ? 0 : parseFloat(data[q][n],10));
dval += ((v > 0) ? v : 0);
}
val += dval;
}
y += dy;
x = this.getPlotX(val) - this._plotLeft;
if (missing) {
firstPoint = true;
}
else {
if (firstPoint && this.chartFilled) {
path += 'M ' + base + ' ' + (y - adj) + ' ';
firstPoint = false;
}
path += (firstPoint ? 'M ' : 'L ') + x + ' ' + (y - adj) + ' ';
firstPoint = false;
if (this.markersVisible || nextMissing || prevMissing) {
var mk = this.createMarker(s,n,x,y-adj,color,marker);
group.appendChild(mk);
if (!this.markersVisible) {
mk.setAttribute('fill',color);
}
}
if (this.chartFilled && (nextMissing || n == items-1)) {
path += base + " " + (y-adj) + " z";
}
}
}
}
poly.setAttribute("d",path);
poly.setAttribute("stroke",color);
poly.setAttribute("fill",this.chartFilled ? color : 'none');
if (hasSelect && s == this.selectedSeries) {
poly.setAttribute("style",this.plotStyle + this.selectedItemStyle);
}
else {
poly.setAttribute("style",this.plotStyle);
}
var f = new Function('evt','series','item','return zenPage.getComponent('+this.index+').chartElementClickHandler(evt,'+s+',0);');
poly.addEventListener('click',f,false);
poly.setAttribute('id',this.makeId('el_' + s + '_' + 0));
}
}
}

function _ZEN_SVGComponent_lineChart_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_lineChart_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_lineChart_setProperty(property,value,value2) {
switch(property) {
case 'chartPivot':
case 'chartFilled':
case 'chartStacked':
this[property] = value ? true : false;
this.render();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_lineChart_useSumForRange() {
return this.chartStacked;
}
function _ZEN_SVGComponent_lineChart__Loader() {
	zenLoadClass('_ZEN_SVGComponent_chart');
	_ZEN_SVGComponent_lineChart.prototype = zenCreate('_ZEN_SVGComponent_chart',-1);
	var p = _ZEN_SVGComponent_lineChart.prototype;
	p.constructor = _ZEN_SVGComponent_lineChart;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_chart) ? zenMaster._ZEN_SVGComponent_chart.prototype:_ZEN_SVGComponent_chart.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.lineChart';
	p._type = 'lineChart';
	p.serialize = _ZEN_SVGComponent_lineChart_serialize;
	p.getSettings = _ZEN_SVGComponent_lineChart_getSettings;
	p.connectToController = _ZEN_SVGComponent_lineChart_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_lineChart_disconnectFromController;
	p.getChartElementStyle = _ZEN_SVGComponent_lineChart_getChartElementStyle;
	p.getController = _ZEN_SVGComponent_lineChart_getController;
	p.getXAxisType = _ZEN_SVGComponent_lineChart_getXAxisType;
	p.getYAxisType = _ZEN_SVGComponent_lineChart_getYAxisType;
	p.notifyView = _ZEN_SVGComponent_lineChart_notifyView;
	p.renderSeries = _ZEN_SVGComponent_lineChart_renderSeries;
	p.sendEventToController = _ZEN_SVGComponent_lineChart_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_lineChart_setControllerId;
	p.setProperty = _ZEN_SVGComponent_lineChart_setProperty;
	p.useSumForRange = _ZEN_SVGComponent_lineChart_useSumForRange;
}

// ================================================================================
_zenClassIdx['pieChart'] = '_ZEN_SVGComponent_pieChart';
function _ZEN_SVGComponent_pieChart(index,id) {
	if (index>=0) {_ZEN_SVGComponent_pieChart__init(this,index,id);}
}

function _ZEN_SVGComponent_pieChart__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_chart__init) ?zenMaster._ZEN_SVGComponent_chart__init(o,index,id):_ZEN_SVGComponent_chart__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
	o.pieScale = '1';
	o.plotBy = 'items';
	o.showPercentage = false;
}
function _ZEN_SVGComponent_pieChart_serialize(set,s)
{
	s[0]='2884812538';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=this.bandLower;s[9]=this.bandLowerStyle;s[10]=this.bandUpper;s[11]=this.bandUpperStyle;s[12]=(this.boundless?1:0);s[13]=this.controller;s[14]=this.controllerId;s[15]=this.gridStyle;s[16]=this.height;s[17]=(this.hidden?1:0);s[18]=this.labelStyle;s[19]=(this.labelsVisible?1:0);s[20]=this.legendHeight;s[21]=this.legendLabelStyle;s[22]=this.legendStyle;s[23]=(this.legendVisible?1:0);s[24]=this.legendWidth;s[25]=this.legendX;s[26]=this.legendY;s[27]=this.marginBottom;s[28]=this.marginLeft;s[29]=this.marginRight;s[30]=this.marginTop;s[31]=this.markerScale;s[32]=this.markerShapes;s[33]=this.markerStyle;s[34]=(this.markersVisible?1:0);s[35]=this.onclick;s[36]=this.onelementClick;s[37]=this.ongetData;s[38]=this.ongetLabelX;s[39]=this.ongetLabelY;s[40]=this.onnotifyView;s[41]=this.onrenderPlotArea;s[42]=this.onupdate;s[43]=this.pieScale;s[44]=this.plotAreaStyle;s[45]=this.plotBy;s[46]=this.plotStyle;s[47]=(this.plotToEdge?1:0);s[48]=this.position;s[49]=this.preserveAspectRatio;s[50]=this.renderFlag;s[51]=this.selectedItem;s[52]=this.selectedItemStyle;s[53]=this.selectedSeries;s[54]=this.seriesColors;s[55]=this.seriesCount;s[56]=this.seriesNames;s[57]=this.seriesSize;s[58]=(this.showPercentage?1:0);s[59]=this.title;s[60]=this.titleStyle;s[61]=this.titleX;s[62]=this.titleY;s[63]=this.tuple;s[64]=this.viewBoxHeight;s[65]=this.viewBoxWidth;s[66]=(this.visible?1:0);s[67]=this.width;s[68]=this.x;s[69]=set.addObject(this.xAxis,'xAxis');s[70]=this.y;s[71]=set.addObject(this.yAxis,'yAxis');
}
function _ZEN_SVGComponent_pieChart_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	s['pieScale'] = 'float';
	s['plotBy'] = 'enum:items,series,both';
	s['showPercentage'] = 'boolean';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_pieChart_connectToController() {
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

function _ZEN_SVGComponent_pieChart_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_pieChart_getChartElementStyle(series,item) {
var clr;
var op = '1.0';
switch (this.plotBy) {
case 'both':
clr = this.getSeriesColor(series);
op = (item%2) ? '1.0' : '0.85';
break;
case 'series':
clr = this.getSeriesColor(series);
break;
case 'items':
default:
clr = this.getSeriesColor(item);
break;
}
return "stroke-width: 0.1; fill-opacity: "+op+"; stroke: " + 'gray' + "; fill: " + clr + ";" + this.plotStyle;
}

function _ZEN_SVGComponent_pieChart_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_pieChart_getLegendLabels() {
var legends = new Array();
switch (this.plotBy) {
case 'series':
case 'both':
var names = this.getSeriesNames();
for (i = 0; i < this.seriesCount; i++) {
legends[i] = (null == names[i] || '' == names[i]) ? (parseInt(i,10)+1) : names[i];
}
break;
case 'items':
default:
var ic = this.getSeriesSize();
for (var i = 0; i < ic; i++) {
var	lbl = this.getYLabelText(i);
legends[i] = ('' == lbl) ? (parseInt(i,10)+1) : lbl;
}
break;
}
return legends;
}

function _ZEN_SVGComponent_pieChart_hasAxes() {
return false;
}

function _ZEN_SVGComponent_pieChart_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_pieChart_renderSeries(group) {
try {
var sc = this.getSeriesCount();
var ic = this.getSeriesSize();
var items = 0;
var values = new Array();
var total = 0;
var snames = null;
switch (this.plotBy) {
case 'series':
items = sc;
snames = this.getSeriesNames();
for (var s = 0; s < sc; s++) {
var data = this._dataSeries[s];
var value = 0;
for (var i = 0; i < ic; i++) {
value += (data[i] == null || data[i] < 0 || isNaN(parseFloat(data[i]))) ? 0 : (parseFloat(data[i],10));
}
values[s] = value;
total += value;
}
break;
case 'items':
default:
items = ic;
for (var i = 0; i < ic; i++) {
var value = 0;
for (var s = 0; s < sc; s++) {
var data = this._dataSeries[s];
value += (data[i] == null || data[i] < 0 || isNaN(parseFloat(data[i]))) ? 0 : (parseFloat(data[i],10));
}
values[i] = value;
total += value;
}
break;
case 'both':
items = sc*ic;
snames = this.getSeriesNames();
for (var s = 0; s < sc; s++) {
var data = this._dataSeries[s];
for (var i = 0; i < ic; i++) {
var value = (data[i] == null || data[i] < 0 || isNaN(parseFloat(data[i]))) ? 0 : (parseFloat(data[i],10));
values[values.length] = value;
total += value;
}
}
break;
}
var gw = (this._plotWidth * 0.60);
var gh = (this._plotHeight * 0.75);
var sz = (gw > gh) ? gh/2 : gw/2;
var cx = this._plotWidth / 2;
var cy = this._plotHeight / 2;
sz = sz * parseFloat(this.pieScale,10);
var seriesGroup = this.getSeriesSVGGroup();
if ((null == seriesGroup) || (null == seriesGroup.firstChild) || (items == 0) || (this._slices && (items != this._slices.length))) {
while(null != group.firstChild) {
group.removeChild(group.firstChild);
}
delete this._circle;
delete this._slices;
delete this._lines;
delete this._labels;
}
if ((null == seriesGroup) ||
(null == seriesGroup.firstChild) ||
((null == this._slices) && items > 0)) {
if (null==this._slices) { this._slices = new Array(items); }
if (null==this._lines) { this._lines = new Array(items); }
if (null==this._labels) { this._labels = new Array(items); }
if (this.labelsVisible) {
for (var i = 0; i < items; i++) {
var line = this.document.createElementNS(SVGNS,"polyline");
line.setAttribute("style","stroke-width: 0; fill: none;");
group.appendChild(line);
this._lines[i] = line;
}
}
var circ = this._circle;
if (null == circ) {
circ = this.document.createElementNS(SVGNS,"circle");
this._circle = circ;
group.appendChild(circ);
}
circ.setAttribute("cx",cx);
circ.setAttribute("cy",cy);
circ.setAttribute("r",sz);
circ.setAttribute("style","display: none;");
circ.setAttribute("style","stroke: none; fill: darkblue; opacity: 1.0;");
for (var i = 0; i < items; i++) {
if (null == this._slices[i]) {
this._slices[i] = this.document.createElementNS(SVGNS,"path");
group.appendChild(this._slices[i]);
}
}
if (this.labelsVisible) {
var labelText = new Array();
for (var i = 0; i < items; i++) {
var text = this.document.createElementNS(SVGNS,"text");
text.setAttribute("style","display: none;");
this._labels[i] = text;
var lbl = null;
switch (this.plotBy) {
case 'series':
lbl = snames[i];
lbl = (null == lbl) ? (parseInt(i,10)+1) : lbl;
break;
case 'items':
default:
lbl = this.getYLabelText(i);
lbl = ('' == lbl) ? (parseInt(i,10)+1) : lbl;
break;
case 'both':
var idx = Math.floor(i/ic);
lbl = this.getYLabelText(i % ic);
lbl = ('' == lbl) ? (parseInt(i%ic,10)+1) : lbl;
break;
}
labelText[i] = lbl;
group.appendChild(text);
}
}
}
var value, curr;
var last = 0;
var lastcurr = 0;
var pct = new Array();
for (var i = 0; i < items; i++) {
var clr = this.getSeriesColor(('both' != this.plotBy) ? i : Math.floor(i/ic));
value = values[i];
curr = (total == 0) ? 0 : (value / total);
pct[i] = Math.round(curr * 100);
var slice = this._slices[i];
if (curr >=1) {
curr=0.99999;
pct[i] = 100;
}
var sno,ino;
switch (this.plotBy) {
case 'series':
sno = i;
ino = 0;
break;
case 'items':
default:
sno = 0;
ino = i;
break;
case 'both':
sno = Math.floor(i/ic);
ino = i % ic;
break;
}
var path = "M 0 0 L "
path += (sz * Math.sin(last * Math.PI * 2)) + " " + (sz * Math.cos(last * Math.PI * 2));
if (curr >= 0.5) {
path += " A" + sz + " " + sz + " 1 1 0 " + (sz * Math.sin((last + curr) * Math.PI * 2)) + " " + (sz * Math.cos((last + curr) * Math.PI * 2));
}
else {
path += " A" + sz + " " + sz + " 0 0 0 " + (sz * Math.sin((last + curr) * Math.PI * 2)) + " " + (sz * Math.cos((last + curr) * Math.PI * 2));
}
path += " z";
var style = this.getChartElementStyle(sno,ino);
slice.setAttribute("d",path);
slice.setAttribute("transform","translate(" + cx + "," + cy + ")");
if (sno == this.selectedSeries && ino == this.selectedItem) {
slice.setAttribute("style",style + this.selectedItemStyle);
}
else {
slice.setAttribute("style",style);
}
var f = new Function('evt','series','item','return zenPage.getComponent('+this.index+').chartElementClickHandler(evt,'+sno+','+ino+');');
slice.addEventListener('click',f,false);
slice.setAttribute('id',this.makeId('el_' + sno + '_' + ino));
if (this.labelsVisible) {
var line = this._lines[i];
var sin = Math.sin((last + curr/2) * Math.PI * 2);
var cos = Math.cos((last + curr/2) * Math.PI * 2);
var f1 = (sin*sin < 0.1) && (cos > 0) ? (1.3 - (sin*sin)) : 1.1;
var x1 = sz * f1 * sin;
var y1 = (sz*1.2) * f1 * cos;
var f2 = ((lastcurr+curr) > 0.1) ? 0.95 : 0.95 - (i%3 * 0);  // stagger
var x2 = (x1 < 0) ? -(f2*this._plotWidth/2) : (f2*this._plotWidth/2);
var points = cx + " " + cy + " " + (cx+x1) + " " + (cy+y1) + " " + (cx+x2) + " " + (cy+y1);
line.setAttribute("points",points);
var text = this._labels[i];
text.setAttribute("text-anchor",(x1 < 0) ? "start" : "end");
text.setAttribute("x", cx + parseFloat(x2));
text.setAttribute("y", cy + y1-0.5);
text.setAttribute("class","chart-sliceLabel");
var t = labelText[i] + (this.showPercentage ? ' (' + pct[i] + '%)' : '');
var textNode = this.document.createTextNode(t);
text.appendChild(textNode);
if (i > 0 && items > 5 && (lastcurr+curr) < 0.01) {
text.setAttribute("style","display: none;");
line.setAttribute("style","display: none;");
}
else {
text.setAttribute("style",this.labelStyle + (null==this._yLabelStyle?'':this._yLabelStyle));
line.setAttribute("style","stroke-width: 0.25px; opacity: 0.7; stroke: " + clr + "; fill: none;");
}
}
last += curr;
lastcurr = curr;
}
}
catch(ex) {
zenExceptionHandler(ex,arguments,'Error in pieChart.renderSeries');
}
}

function _ZEN_SVGComponent_pieChart_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_pieChart_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_pieChart_setProperty(property,value,value2) {
switch(property) {
case 'showPercentage':
this[property] = value ? true : false;
this.render();
break;
case 'plotBy':
this.selectedItem = -1;
this.selectedSeries = -1;
this[property] = value;
this.render();
break;
case 'pieScale':
this[property] = parseFloat(value,10);
this.render();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}
function _ZEN_SVGComponent_pieChart__Loader() {
	zenLoadClass('_ZEN_SVGComponent_chart');
	_ZEN_SVGComponent_pieChart.prototype = zenCreate('_ZEN_SVGComponent_chart',-1);
	var p = _ZEN_SVGComponent_pieChart.prototype;
	p.constructor = _ZEN_SVGComponent_pieChart;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_chart) ? zenMaster._ZEN_SVGComponent_chart.prototype:_ZEN_SVGComponent_chart.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.pieChart';
	p._type = 'pieChart';
	p.serialize = _ZEN_SVGComponent_pieChart_serialize;
	p.getSettings = _ZEN_SVGComponent_pieChart_getSettings;
	p.connectToController = _ZEN_SVGComponent_pieChart_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_pieChart_disconnectFromController;
	p.getChartElementStyle = _ZEN_SVGComponent_pieChart_getChartElementStyle;
	p.getController = _ZEN_SVGComponent_pieChart_getController;
	p.getLegendLabels = _ZEN_SVGComponent_pieChart_getLegendLabels;
	p.hasAxes = _ZEN_SVGComponent_pieChart_hasAxes;
	p.notifyView = _ZEN_SVGComponent_pieChart_notifyView;
	p.renderSeries = _ZEN_SVGComponent_pieChart_renderSeries;
	p.sendEventToController = _ZEN_SVGComponent_pieChart_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_pieChart_setControllerId;
	p.setProperty = _ZEN_SVGComponent_pieChart_setProperty;
}

// ================================================================================
_zenClassIdx['xyChart'] = '_ZEN_SVGComponent_xyChart';
function _ZEN_SVGComponent_xyChart(index,id) {
	if (index>=0) {_ZEN_SVGComponent_xyChart__init(this,index,id);}
}

function _ZEN_SVGComponent_xyChart__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_chart__init) ?zenMaster._ZEN_SVGComponent_chart__init(o,index,id):_ZEN_SVGComponent_chart__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.markersVisible = true;
	o.onnotifyView = '';
}
function _ZEN_SVGComponent_xyChart_serialize(set,s)
{
	s[0]='1461431517';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=this.bandLower;s[9]=this.bandLowerStyle;s[10]=this.bandUpper;s[11]=this.bandUpperStyle;s[12]=(this.boundless?1:0);s[13]=this.controller;s[14]=this.controllerId;s[15]=this.gridStyle;s[16]=this.height;s[17]=(this.hidden?1:0);s[18]=this.labelStyle;s[19]=(this.labelsVisible?1:0);s[20]=this.legendHeight;s[21]=this.legendLabelStyle;s[22]=this.legendStyle;s[23]=(this.legendVisible?1:0);s[24]=this.legendWidth;s[25]=this.legendX;s[26]=this.legendY;s[27]=this.marginBottom;s[28]=this.marginLeft;s[29]=this.marginRight;s[30]=this.marginTop;s[31]=this.markerScale;s[32]=this.markerShapes;s[33]=this.markerStyle;s[34]=(this.markersVisible?1:0);s[35]=this.onclick;s[36]=this.onelementClick;s[37]=this.ongetData;s[38]=this.ongetLabelX;s[39]=this.ongetLabelY;s[40]=this.onnotifyView;s[41]=this.onrenderPlotArea;s[42]=this.onupdate;s[43]=this.plotAreaStyle;s[44]=this.plotStyle;s[45]=(this.plotToEdge?1:0);s[46]=this.position;s[47]=this.preserveAspectRatio;s[48]=this.renderFlag;s[49]=this.selectedItem;s[50]=this.selectedItemStyle;s[51]=this.selectedSeries;s[52]=this.seriesColors;s[53]=this.seriesCount;s[54]=this.seriesNames;s[55]=this.seriesSize;s[56]=this.title;s[57]=this.titleStyle;s[58]=this.titleX;s[59]=this.titleY;s[60]=this.tuple;s[61]=this.viewBoxHeight;s[62]=this.viewBoxWidth;s[63]=(this.visible?1:0);s[64]=this.width;s[65]=this.x;s[66]=set.addObject(this.xAxis,'xAxis');s[67]=this.y;s[68]=set.addObject(this.yAxis,'yAxis');
}
function _ZEN_SVGComponent_xyChart_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_xyChart_connectToController() {
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

function _ZEN_SVGComponent_xyChart_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_xyChart_findDataRange() {
var range = new Object();
range.minValue = null;
range.maxValue = null;
range.minValue2 = null; // used by x/y type charts
range.maxValue2 = null;
var scount = this.getSeriesCount();
var items = this.getSeriesSize();
if (scount <= 1) {
range.minValue2 = 0;
range.maxValue2 = items;
if (scount == 1) {
var data = this._dataSeries[0];
for (var n = 0; n < items; n++) {
var val = data[n];
if (!isNaN(val)) {
range.minValue = (null==range.minValue) ? val : (val < range.minValue) ? val : range.minValue;
range.maxValue = (null==range.maxValue) ? val : (val > range.maxValue) ? val : range.maxValue;
}
}
}
}
else {
var data = this._dataSeries[0];
for (var n = 0; n < items; n++) {
var val = data[n];
if (!isNaN(val)) {
range.minValue2 = (null==range.minValue2) ? val : (val < range.minValue2) ? val : range.minValue2;
range.maxValue2 = (null==range.maxValue2) ? val : (val > range.maxValue2) ? val : range.maxValue2;
}
}
for (var s = 1; s < scount; s++) {
var data = this._dataSeries[s];
for (var n = 0; n < items; n++) {
var val = data[n];
if (!isNaN(val)) {
range.minValue = (null==range.minValue) ? val : (val < range.minValue) ? val : range.minValue;
range.maxValue = (null==range.maxValue) ? val : (val > range.maxValue) ? val : range.maxValue;
}
}
}
}
return range;
}

function _ZEN_SVGComponent_xyChart_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_xyChart_getLegendLabels() {
var legends = new Array(this.seriesCount - 1);
var names = this.getSeriesNames();
for (i = 0; i < this.seriesCount - 1; i++) {
legends[i] = (null == names[i] || '' == names[i]) ? (parseInt(i,10)+1) : names[i];
}
return legends;
}

function _ZEN_SVGComponent_xyChart_getXAxisType() {
return 'value';
}

function _ZEN_SVGComponent_xyChart_getYAxisType() {
return 'value';
}

function _ZEN_SVGComponent_xyChart_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_xyChart_renderSeries(group) {
var x,y,val;
var scount = this.getSeriesCount();
var items = this.getSeriesSize();
if (items > 0) {
var xData;
var yData = new Array();
if (scount <= 1) {
xData = new Array(items);
for (var n = 0; n < items; n++) {
xData[n] = this.getPlotX(n);
}
yData[1] = this.getSeriesData(0);
scount = 2;
}
else {
xData = this.getSeriesData(0);
for (var n = 0; n < items; n++) {
xData[n] = this.getPlotX(xData[n]);
}
for (var s = 1; s < scount; s++) {
yData[s] = this.getSeriesData(s);
}
}
for (var s = 1; s < scount; s++) {
var color = this.getSeriesColor(s-1);
if (this.markersVisible) {
var marker = this.getMarkerShape(s-1);
}
var poly = this.document.createElementNS(SVGNS,"polyline");
poly.setAttribute("class","chart-seriesLine");
group.appendChild(poly);
var points = ''; // set of points for this line
for (var n = 0; n < items; n++) {
val = (null == yData[s]) ? 0 : ((null == yData[s][n]) ? 0 : yData[s][n]);
x = xData[n] - this._plotLeft;
y = this.getPlotY(val) - this._plotTop;
points += x + ' ' + y + ' ';
if (this.markersVisible) {
group.appendChild(this.createMarker(s,n,x,y,color,marker));
}
}
poly.setAttribute("points",points);
poly.setAttribute("stroke",color);
poly.setAttribute("fill",'none');
poly.setAttribute("style",this.plotStyle);
}
}
}

function _ZEN_SVGComponent_xyChart_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_xyChart_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_xyChart_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}
function _ZEN_SVGComponent_xyChart__Loader() {
	zenLoadClass('_ZEN_SVGComponent_chart');
	_ZEN_SVGComponent_xyChart.prototype = zenCreate('_ZEN_SVGComponent_chart',-1);
	var p = _ZEN_SVGComponent_xyChart.prototype;
	p.constructor = _ZEN_SVGComponent_xyChart;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_chart) ? zenMaster._ZEN_SVGComponent_chart.prototype:_ZEN_SVGComponent_chart.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.xyChart';
	p._type = 'xyChart';
	p.serialize = _ZEN_SVGComponent_xyChart_serialize;
	p.getSettings = _ZEN_SVGComponent_xyChart_getSettings;
	p.connectToController = _ZEN_SVGComponent_xyChart_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_xyChart_disconnectFromController;
	p.findDataRange = _ZEN_SVGComponent_xyChart_findDataRange;
	p.getController = _ZEN_SVGComponent_xyChart_getController;
	p.getLegendLabels = _ZEN_SVGComponent_xyChart_getLegendLabels;
	p.getXAxisType = _ZEN_SVGComponent_xyChart_getXAxisType;
	p.getYAxisType = _ZEN_SVGComponent_xyChart_getYAxisType;
	p.notifyView = _ZEN_SVGComponent_xyChart_notifyView;
	p.renderSeries = _ZEN_SVGComponent_xyChart_renderSeries;
	p.sendEventToController = _ZEN_SVGComponent_xyChart_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_xyChart_setControllerId;
	p.setProperty = _ZEN_SVGComponent_xyChart_setProperty;
}

// ================================================================================
_zenClassIdx['compassButtons'] = '_ZEN_SVGComponent_compassButtons';
function _ZEN_SVGComponent_compassButtons(index,id) {
	if (index>=0) {_ZEN_SVGComponent_compassButtons__init(this,index,id);}
}

function _ZEN_SVGComponent_compassButtons__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.boundless = true;
	o.onbuttonClick = '';
}
function _ZEN_SVGComponent_compassButtons_serialize(set,s)
{
	s[0]='3426383122';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=(this.boundless?1:0);s[8]=this.height;s[9]=(this.hidden?1:0);s[10]=this.onbuttonClick;s[11]=this.onclick;s[12]=this.onupdate;s[13]=this.position;s[14]=this.preserveAspectRatio;s[15]=this.renderFlag;s[16]=this.tuple;s[17]=this.viewBoxHeight;s[18]=this.viewBoxWidth;s[19]=(this.visible?1:0);s[20]=this.width;s[21]=this.x;s[22]=this.y;
}
function _ZEN_SVGComponent_compassButtons_getSettings(s)
{
	s['name'] = 'string';
	s['onbuttonClick'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_compassButtons_clickHandler(evt,direction) {
evt.stopPropagation();
return zenInvokeCallbackMethod(this.onbuttonClick,this,'onbuttonClick','direction',direction);
}

function _ZEN_SVGComponent_compassButtons_mouseoutHandler(evt,direction) {
evt.stopPropagation();
evt.target.setAttribute('class','compassButton');
}

function _ZEN_SVGComponent_compassButtons_mouseoverHandler(evt,direction) {
evt.stopPropagation();
evt.target.setAttribute('class','compassButtonHover');
}

function _ZEN_SVGComponent_compassButtons_renderButton(direction,x,y) {
var wid = 16;
var hgt = 16;
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('id',this.makeId(direction));
rect.setAttribute('class','compassButton');
rect.setAttribute('x',x - wid/2);
rect.setAttribute('y',y - hgt/2);
rect.setAttribute('width',wid);
rect.setAttribute('height',hgt);
rect.setAttribute('rx',1);
this.svgGroup.appendChild(rect);
var icon = null;
switch(direction) {
case 'left':
icon = this.document.createElementNS(SVGNS,'path');
icon.setAttribute('d','M '+(x+4)+' '+y+' L '+(x-4)+' '+y+'M '+x+' '+(y-4)+' L '+(x-4)+' '+y+' '+x+' '+(y+4));
break;
case 'right':
icon = this.document.createElementNS(SVGNS,'path');
icon.setAttribute('d','M '+(x-4)+' '+y+' L '+(x+4)+' '+y+'M '+x+' '+(y-4)+' L '+(x+4)+' '+y+' '+x+' '+(y+4));
break;
case 'up':
icon = this.document.createElementNS(SVGNS,'path');
icon.setAttribute('d','M '+(x)+' '+(y+4)+' L '+(x)+' '+(y-4)+'M '+(x-4)+' '+(y)+' L '+(x)+' '+(y-4)+' '+(x+4)+' '+(y));
break;
case 'down':
icon = this.document.createElementNS(SVGNS,'path');
icon.setAttribute('d','M '+(x)+' '+(y-4)+' L '+(x)+' '+(y+4)+'M '+(x-4)+' '+(y)+' L '+(x)+' '+(y+4)+' '+(x+4)+' '+(y));
break;
case 'home':
icon = this.document.createElementNS(SVGNS,'circle');
icon.setAttribute('cx',x);
icon.setAttribute('cy',y);
icon.setAttribute('r',wid/4);
break;
}
if (icon) {
icon.setAttribute('class','compassIcon');
this.svgGroup.appendChild(icon);
icon.addEventListener('click',new Function('evt','direction','return zenPage.getComponent('+this.index+').clickHandler(evt,"'+direction+'");'),false);
}
rect.addEventListener('click',new Function('evt','direction','return zenPage.getComponent('+this.index+').clickHandler(evt,"'+direction+'");'),false);
rect.addEventListener('mouseover',new Function('evt','direction','return zenPage.getComponent('+this.index+').mouseoverHandler(evt,"'+direction+'");'),false);
rect.addEventListener('mouseout',new Function('evt','direction','return zenPage.getComponent('+this.index+').mouseoutHandler(evt,"'+direction+'");'),false);
return rect;
}

function _ZEN_SVGComponent_compassButtons_renderContents() {
this.renderButton('home',0,0);
this.renderButton('up',0,-20);
this.renderButton('down',0,20);
this.renderButton('left',-20,0);
this.renderButton('right',20,0);
}

function _ZEN_SVGComponent_compassButtons_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}
function _ZEN_SVGComponent_compassButtons__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_compassButtons.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_compassButtons.prototype;
	p.constructor = _ZEN_SVGComponent_compassButtons;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.compassButtons';
	p._type = 'compassButtons';
	p.serialize = _ZEN_SVGComponent_compassButtons_serialize;
	p.getSettings = _ZEN_SVGComponent_compassButtons_getSettings;
	p.clickHandler = _ZEN_SVGComponent_compassButtons_clickHandler;
	p.mouseoutHandler = _ZEN_SVGComponent_compassButtons_mouseoutHandler;
	p.mouseoverHandler = _ZEN_SVGComponent_compassButtons_mouseoverHandler;
	p.renderButton = _ZEN_SVGComponent_compassButtons_renderButton;
	p.renderContents = _ZEN_SVGComponent_compassButtons_renderContents;
	p.setProperty = _ZEN_SVGComponent_compassButtons_setProperty;
}

// ================================================================================
_zenClassIdx['meter'] = '_ZEN_SVGComponent_meter';
function _ZEN_SVGComponent_meter(index,id) {
	if (index>=0) {_ZEN_SVGComponent_meter__init(this,index,id);}
}

function _ZEN_SVGComponent_meter__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.animate = true;
	o.controller = '';
	o.controllerId = '';
	o.dataBinding = '';
	o.disabled = false;
	o.label = '';
	o.labelStyle = '';
	o.onchange = '';
	o.onnotifyView = '';
	o.rangeLower = '0';
	o.rangeUpper = '100';
	o.scaleFactor = '1';
	o.thresholdLower = '0';
	o.thresholdUpper = '90';
	o.value = '0';
	o.viewBoxHeight = '100';
	o.viewBoxWidth = '100';
}
function _ZEN_SVGComponent_meter_serialize(set,s)
{
	s[0]='79131682';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=this.controller;s[10]=this.controllerId;s[11]=this.dataBinding;s[12]=(this.disabled?1:0);s[13]=this.height;s[14]=(this.hidden?1:0);s[15]=this.label;s[16]=this.labelStyle;s[17]=this.onchange;s[18]=this.onclick;s[19]=this.onnotifyView;s[20]=this.onupdate;s[21]=this.position;s[22]=this.preserveAspectRatio;s[23]=this.rangeLower;s[24]=this.rangeUpper;s[25]=this.renderFlag;s[26]=this.scaleFactor;s[27]=this.thresholdLower;s[28]=this.thresholdUpper;s[29]=this.tuple;s[30]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[31]=this.viewBoxHeight;s[32]=this.viewBoxWidth;s[33]=(this.visible?1:0);s[34]=this.width;s[35]=this.x;s[36]=this.y;
}
function _ZEN_SVGComponent_meter_getSettings(s)
{
	s['name'] = 'string';
	s['animate'] = 'boolean';
	s['controllerId'] = 'id';
	s['dataBinding'] = 'string';
	s['disabled'] = 'boolean';
	s['label'] = 'caption';
	s['labelStyle'] = 'svgStyle';
	s['onchange'] = 'eventHandler';
	s['onnotifyView'] = 'eventHandler';
	s['rangeLower'] = 'float';
	s['rangeUpper'] = 'float';
	s['scaleFactor'] = 'float';
	s['thresholdLower'] = 'float';
	s['thresholdUpper'] = 'float';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_meter_acquireData() {
var controller = this.getController();
if (null == controller) {
this.connectToController();
controller = this.getController();
}
if (controller) {
var data = controller.getDataByName(this.dataBinding);
if (null==data) {
if (!this.disabled) {
this.setProperty('disabled',true);
}
this.value = '';
}
else {
if (this.disabled) {
this.setProperty('disabled',false);
}
this.value = data;
}
}
return this.value;
}

function _ZEN_SVGComponent_meter_connectToController() {
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

function _ZEN_SVGComponent_meter_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_meter_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_meter_getValue() {
return this.getProperty('value');
}

function _ZEN_SVGComponent_meter_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_meter_notifyViewHandler(reason,data1,data2,data3) {
switch(reason) {
case 'dataChange':
var controller = this.getController();
var ds = controller.getProperty('defaultSeries');
if (null == data3 || ds == data3) {
this.setValue(this.acquireData());
}
break;
case 'seriesChange':
case 'modelChange':
this.setValue(this.acquireData());
break;
}
}

function _ZEN_SVGComponent_meter_onchangeHandler() {
var controller = this.getController();
if (controller && '' != this.dataBinding) {
this.sendEventToController('propertyChange',this.dataBinding,this.value);
}
zenInvokeCallbackMethod(this.onchange,this,'onchange');
}

function _ZEN_SVGComponent_meter_renderContents() {
this.acquireData();
this.renderMeter();
}

function _ZEN_SVGComponent_meter_renderLabel(x,y) {
var lblText = this.document.createElementNS(SVGNS,'text');
lblText.setAttribute('id',this.makeId('label'));
lblText.setAttribute('class','meter-label');
lblText.setAttribute('style',this.labelStyle);
lblText.setAttribute('x',x);
lblText.setAttribute('y',y);
lblText.setAttribute('text-anchor','middle');
var textNode = this.document.createTextNode(this.label);
lblText.appendChild(textNode);
this.svgGroup.appendChild(lblText);
}

function _ZEN_SVGComponent_meter_renderMeter() {
}

function _ZEN_SVGComponent_meter_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_meter_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_meter_setProperty(property,value,value2) {
switch(property) {
case 'scaleFactor':
case 'rangeUpper':
case 'rangeLower':
case 'thresholdUpper':
case 'thresholdLower':
this[property] = value;
this.setProperty('value',this.value);
break;
case 'label':
this.label = value;
this.setTextNode('label',this.label);
break;
case 'labelStyle':
this.labelStyle = value;
var label = this.findSVGElement('label');
if (label) {
label.setAttribute('style',this.labelStyle);
}
break;
case 'animate':
this.animate = value ? true : false;
break
case 'disabled':
this.disabled = value ? true : false;
break
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_meter_setValue(value) {
return this.setProperty('value',value);
}
function _ZEN_SVGComponent_meter__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_meter.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_meter.prototype;
	p.constructor = _ZEN_SVGComponent_meter;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.meter';
	p._type = 'meter';
	p.serialize = _ZEN_SVGComponent_meter_serialize;
	p.getSettings = _ZEN_SVGComponent_meter_getSettings;
	p.acquireData = _ZEN_SVGComponent_meter_acquireData;
	p.connectToController = _ZEN_SVGComponent_meter_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_meter_disconnectFromController;
	p.getController = _ZEN_SVGComponent_meter_getController;
	p.getValue = _ZEN_SVGComponent_meter_getValue;
	p.notifyView = _ZEN_SVGComponent_meter_notifyView;
	p.notifyViewHandler = _ZEN_SVGComponent_meter_notifyViewHandler;
	p.onchangeHandler = _ZEN_SVGComponent_meter_onchangeHandler;
	p.renderContents = _ZEN_SVGComponent_meter_renderContents;
	p.renderLabel = _ZEN_SVGComponent_meter_renderLabel;
	p.renderMeter = _ZEN_SVGComponent_meter_renderMeter;
	p.sendEventToController = _ZEN_SVGComponent_meter_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_meter_setControllerId;
	p.setProperty = _ZEN_SVGComponent_meter_setProperty;
	p.setValue = _ZEN_SVGComponent_meter_setValue;
}

// ================================================================================
_zenClassIdx['fuelGauge'] = '_ZEN_SVGComponent_fuelGauge';
function _ZEN_SVGComponent_fuelGauge(index,id) {
	if (index>=0) {_ZEN_SVGComponent_fuelGauge__init(this,index,id);}
}

function _ZEN_SVGComponent_fuelGauge__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_meter__init) ?zenMaster._ZEN_SVGComponent_meter__init(o,index,id):_ZEN_SVGComponent_meter__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.highLampColor = 'url(#glow-red)';
	o.logo = 'Zen';
	o.lowLampColor = 'url(#glow-red)';
	o.onnotifyView = '';
}
function _ZEN_SVGComponent_fuelGauge_serialize(set,s)
{
	s[0]='3131838600';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=this.controller;s[10]=this.controllerId;s[11]=this.dataBinding;s[12]=(this.disabled?1:0);s[13]=this.height;s[14]=(this.hidden?1:0);s[15]=this.highLampColor;s[16]=this.label;s[17]=this.labelStyle;s[18]=this.logo;s[19]=this.lowLampColor;s[20]=this.onchange;s[21]=this.onclick;s[22]=this.onnotifyView;s[23]=this.onupdate;s[24]=this.position;s[25]=this.preserveAspectRatio;s[26]=this.rangeLower;s[27]=this.rangeUpper;s[28]=this.renderFlag;s[29]=this.scaleFactor;s[30]=this.thresholdLower;s[31]=this.thresholdUpper;s[32]=this.tuple;s[33]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[34]=this.viewBoxHeight;s[35]=this.viewBoxWidth;s[36]=(this.visible?1:0);s[37]=this.width;s[38]=this.x;s[39]=this.y;
}
function _ZEN_SVGComponent_fuelGauge_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['highLampColor'] = 'color';
	s['logo'] = 'caption';
	s['lowLampColor'] = 'color';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_fuelGauge_connectToController() {
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

function _ZEN_SVGComponent_fuelGauge_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_fuelGauge_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_fuelGauge_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_fuelGauge_renderMeter() {
var body = this.document.createElementNS(SVGNS,'path');
body.setAttribute('class','fuelGauge-body');
body.setAttribute('fill','url(#fuelGauge-bodyGrad)');
body.setAttribute('d','M 20 20 A 50 25 0 0 1 80 20 L 70 80 L 30 80 z');
this.svgGroup.appendChild(body);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('lowLamp'));
lamp.setAttribute('class','fuelGauge-lamp');
lamp.setAttribute('fill','none');
lamp.setAttribute('cx',24.5);
lamp.setAttribute('cy',22);
lamp.setAttribute('r',1.8);
this.svgGroup.appendChild(lamp);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('highLamp'));
lamp.setAttribute('class','fuelGauge-lamp');
lamp.setAttribute('fill','none');
lamp.setAttribute('cx',75.5);
lamp.setAttribute('cy',22);
lamp.setAttribute('r',1.8);
this.svgGroup.appendChild(lamp);
var tick = this.document.createElementNS(SVGNS,'line');
tick.setAttribute('class','fuelGauge-tick');
tick.setAttribute('x1',25);
tick.setAttribute('y1',25);
tick.setAttribute('x2',26);
tick.setAttribute('y2',30);
this.svgGroup.appendChild(tick);
var tick = this.document.createElementNS(SVGNS,'line');
tick.setAttribute('class','fuelGauge-tick');
tick.setAttribute('x1',37);
tick.setAttribute('y1',23);
tick.setAttribute('x2',37.4);
tick.setAttribute('y2',26);
this.svgGroup.appendChild(tick);
var tick = this.document.createElementNS(SVGNS,'line');
tick.setAttribute('class','fuelGauge-tick');
tick.setAttribute('x1',50);
tick.setAttribute('y1',22);
tick.setAttribute('x2',50);
tick.setAttribute('y2',27);
this.svgGroup.appendChild(tick);
var tick = this.document.createElementNS(SVGNS,'line');
tick.setAttribute('class','fuelGauge-tick');
tick.setAttribute('x1',63);
tick.setAttribute('y1',23);
tick.setAttribute('x2',62.6);
tick.setAttribute('y2',26);
this.svgGroup.appendChild(tick);
var tick = this.document.createElementNS(SVGNS,'line');
tick.setAttribute('class','fuelGauge-tick');
tick.setAttribute('x1',75);
tick.setAttribute('y1',25);
tick.setAttribute('x2',74);
tick.setAttribute('y2',30);
this.svgGroup.appendChild(tick);
var logo = this.document.createElementNS(SVGNS,'text');
logo.setAttribute('id',this.makeId('logo'));
logo.setAttribute('class','fuelGauge-logoText');
logo.setAttribute('x',50);
logo.setAttribute('y',43);
logo.setAttribute('text-anchor','middle');
var textNode = this.document.createTextNode(this.logo);
logo.appendChild(textNode);
this.svgGroup.appendChild(logo);
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('class','fuelGauge-levelTextBox');
rect.setAttribute('fill','url(#speedometer-bodyGrad2)');
rect.setAttribute('x',33);
rect.setAttribute('y',49);
rect.setAttribute('width',34);
rect.setAttribute('height',8);
rect.setAttribute('rx',1);
this.svgGroup.appendChild(rect);
var lvlText = this.document.createElementNS(SVGNS,'text');
lvlText.setAttribute('id',this.makeId('levelText'));
lvlText.setAttribute('class','fuelGauge-levelText');
lvlText.setAttribute('x',65);
lvlText.setAttribute('y',56);
lvlText.setAttribute('text-anchor','end');
var textNode = this.document.createTextNode(this.value);
lvlText.appendChild(textNode);
this.svgGroup.appendChild(lvlText);
var shadow = this.document.createElementNS(SVGNS,'line');
shadow.setAttribute('id',this.makeId('shadow'));
shadow.setAttribute('class','fuelGauge-shadow');
shadow.setAttribute('x1',50);
shadow.setAttribute('y1',28);
shadow.setAttribute('x2',50);
shadow.setAttribute('y2',60);
shadow.setAttribute('transform','rotate(1,50,166)');
this.svgGroup.appendChild(shadow);
var needle = this.document.createElementNS(SVGNS,'line');
needle.setAttribute('id',this.makeId('needle'));
needle.setAttribute('class','fuelGauge-needle');
needle.setAttribute('x1',50);
needle.setAttribute('y1',25);
needle.setAttribute('x2',50);
needle.setAttribute('y2',60);
needle.setAttribute('transform','rotate(0,50,166)');
this.svgGroup.appendChild(needle);
var nub = this.document.createElementNS(SVGNS,'path');
nub.setAttribute('class','fuelGauge-body2');
nub.setAttribute('fill','url(#fuelGauge-bodyGrad)');
nub.setAttribute('d','M 27 62 A 50 25 0 0 1 73 62 L 70 80 L 30 80 z');
this.svgGroup.appendChild(nub);
this.renderLabel('50%',95);
this.updateNeedle(false);
}

function _ZEN_SVGComponent_fuelGauge_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_fuelGauge_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_fuelGauge_setProperty(property,value,value2) {
switch(property) {
case 'value':
if (this._timerId) {
window.clearTimeout(this._timerId);
delete this._timerId;
}
this.value = value;
if (null == this.currValue) {
this.currValue = 0;
}
var lvl = 0;
var lvl = this.value * this.scaleFactor;
var text = this.findSVGElement('levelText');
text.setAttribute("class",(lvl>=0) ? "fuelGauge-levelText" : "fuelGauge-levelTextNeg");
if ((lvl>=10000000) || (lvl<=-1000000)) {
lvl = "\043\043\043\043\043\043";
}
else {
lvl = Math.round(lvl);
}
this.setTextNode("levelText",lvl);
var speed = (this.value*1 - this.currValue*1) / 4;
this.currValue = this.currValue*1 + speed;
this.updateNeedle(this.animate);
break;
case 'logo':
this.logo = value;
this.setTextNode('logo',this.logo);
break;
case 'lowLampColor':
case 'highLampColor':
this[property] = value;
this.updateNeedle(false);
break;
case 'width':
case 'height':
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_fuelGauge_updateNeedle(animate) {
delete this._timerId;
var range = this.rangeUpper - this.rangeLower;
if (animate) {
if ((Math.abs(this.value*1 - this.currValue*1)<=(range/280))) {
this.currValue = this.value*1;
}
}
else {
this.currValue = this.value*1;
}
var angle = 0;
if (range != 0) {
angle = (((this.currValue - this.rangeLower) / range) * 20) - 10;
}
if (angle <= -10) {
angle = -10;
}
if (angle >= 10) {
angle = 10;
}
var needle = this.findSVGElement('needle');
if (needle) {
needle.setAttribute("transform", "rotate(" + angle + ",50,166)");
}
var shadow = this.findSVGElement('shadow');
if (shadow) {
shadow.setAttribute("transform", "rotate(" + (angle+1) + ",50,166)");
}
var lowLamp = false;
var highLamp = false;
if (this.currValue <= this.thresholdLower) {
lowLamp = true;
}
if (this.currValue >= this.thresholdUpper) {
highLamp = true;
}
var lamp = this.findSVGElement('lowLamp');
if (lamp) {
lamp.setAttribute("fill",lowLamp ? this.lowLampColor : 'none');
}
var lamp = this.findSVGElement('highLamp');
if (lamp) {
lamp.setAttribute("fill",highLamp ? this.highLampColor : 'none');
}
if (animate && (this.value*1 != this.currValue*1)) {
var speed = (this.value*1 - this.currValue*1) / 4;
this.currValue = this.currValue*1 + speed;
this._timerId = window.setTimeout("zenPage.getComponent(" + this.index + ").updateNeedle(true)",50);
}
}
function _ZEN_SVGComponent_fuelGauge__Loader() {
	zenLoadClass('_ZEN_SVGComponent_meter');
	_ZEN_SVGComponent_fuelGauge.prototype = zenCreate('_ZEN_SVGComponent_meter',-1);
	var p = _ZEN_SVGComponent_fuelGauge.prototype;
	p.constructor = _ZEN_SVGComponent_fuelGauge;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_meter) ? zenMaster._ZEN_SVGComponent_meter.prototype:_ZEN_SVGComponent_meter.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.fuelGauge';
	p._type = 'fuelGauge';
	p.serialize = _ZEN_SVGComponent_fuelGauge_serialize;
	p.getSettings = _ZEN_SVGComponent_fuelGauge_getSettings;
	p.connectToController = _ZEN_SVGComponent_fuelGauge_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_fuelGauge_disconnectFromController;
	p.getController = _ZEN_SVGComponent_fuelGauge_getController;
	p.notifyView = _ZEN_SVGComponent_fuelGauge_notifyView;
	p.renderMeter = _ZEN_SVGComponent_fuelGauge_renderMeter;
	p.sendEventToController = _ZEN_SVGComponent_fuelGauge_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_fuelGauge_setControllerId;
	p.setProperty = _ZEN_SVGComponent_fuelGauge_setProperty;
	p.updateNeedle = _ZEN_SVGComponent_fuelGauge_updateNeedle;
}

// ================================================================================
_zenClassIdx['indicatorLamp'] = '_ZEN_SVGComponent_indicatorLamp';
function _ZEN_SVGComponent_indicatorLamp(index,id) {
	if (index>=0) {_ZEN_SVGComponent_indicatorLamp__init(this,index,id);}
}

function _ZEN_SVGComponent_indicatorLamp__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_meter__init) ?zenMaster._ZEN_SVGComponent_meter__init(o,index,id):_ZEN_SVGComponent_meter__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.highStyle = 'fill: url(#glow-green);';
	o.lowStyle = 'fill: url(#glow-red);';
	o.normalStyle = 'fill: url(#glow-blue);';
	o.onnotifyView = '';
	o.viewBoxHeight = '25';
}
function _ZEN_SVGComponent_indicatorLamp_serialize(set,s)
{
	s[0]='2633088871';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=this.controller;s[10]=this.controllerId;s[11]=this.dataBinding;s[12]=(this.disabled?1:0);s[13]=this.height;s[14]=(this.hidden?1:0);s[15]=this.highStyle;s[16]=this.label;s[17]=this.labelStyle;s[18]=this.lowStyle;s[19]=this.normalStyle;s[20]=this.onchange;s[21]=this.onclick;s[22]=this.onnotifyView;s[23]=this.onupdate;s[24]=this.position;s[25]=this.preserveAspectRatio;s[26]=this.rangeLower;s[27]=this.rangeUpper;s[28]=this.renderFlag;s[29]=this.scaleFactor;s[30]=this.thresholdLower;s[31]=this.thresholdUpper;s[32]=this.tuple;s[33]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[34]=this.viewBoxHeight;s[35]=this.viewBoxWidth;s[36]=(this.visible?1:0);s[37]=this.width;s[38]=this.x;s[39]=this.y;
}
function _ZEN_SVGComponent_indicatorLamp_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['highStyle'] = 'svgStyle';
	s['lowStyle'] = 'svgStyle';
	s['normalStyle'] = 'svgStyle';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_indicatorLamp_connectToController() {
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

function _ZEN_SVGComponent_indicatorLamp_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_indicatorLamp_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_indicatorLamp_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_indicatorLamp_renderMeter() {
var body = this.document.createElementNS(SVGNS,'rect');
body.setAttribute('class','indicatorLamp-body');
body.setAttribute('fill','black');
body.setAttribute('x',5);
body.setAttribute('y',2.5);
body.setAttribute('width',90);
body.setAttribute('height',20);
body.setAttribute('rx',2);
this.svgGroup.appendChild(body);
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('id',this.makeId('lamp'));
rect.setAttribute('class','indicatorLamp-body');
rect.setAttribute('x',5);
rect.setAttribute('y',2.5);
rect.setAttribute('width',90);
rect.setAttribute('height',20);
rect.setAttribute('rx',5);
this.svgGroup.appendChild(rect);
var label = this.document.createElementNS(SVGNS,'text');
label.setAttribute('id',this.makeId('label'));
label.setAttribute('class','indicatorLamp-text');
label.setAttribute('style',this.labelStyle);
label.setAttribute('x',50);
label.setAttribute('y',18);
label.setAttribute('text-anchor','middle');
var textNode = this.document.createTextNode(this.label);
label.appendChild(textNode);
this.svgGroup.appendChild(label);
this.updateLamp();
}

function _ZEN_SVGComponent_indicatorLamp_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_indicatorLamp_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_indicatorLamp_setProperty(property,value,value2) {
switch(property) {
case 'value':
this.value = value;
this.updateLamp();
break;
case 'labelStyle':
case 'lowStyle':
case 'highStyle':
case 'normalStyle':
this[property] = value;
this.updateLamp();
break;
case 'width':
case 'height':
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_indicatorLamp_updateLamp() {
var tlower = parseFloat(this.thresholdLower);
var tupper = parseFloat(this.thresholdUpper);
var style = this.normalStyle;
var value = parseFloat(this.value);
if (parseFloat(this.rangeUpper) >= parseFloat(this.rangeLower)) {
if (value <= tlower) {
style = this.lowStyle;
}
else if (value >= tupper) {
style = this.highStyle;
}
}
else {
if (value <= tupper) {
style = this.lowStyle;
}
else if (value >= tlower) {
style = this.highStyle;
}
}
var lamp = this.findSVGElement("lamp");
lamp.setAttribute("style", style);
}
function _ZEN_SVGComponent_indicatorLamp__Loader() {
	zenLoadClass('_ZEN_SVGComponent_meter');
	_ZEN_SVGComponent_indicatorLamp.prototype = zenCreate('_ZEN_SVGComponent_meter',-1);
	var p = _ZEN_SVGComponent_indicatorLamp.prototype;
	p.constructor = _ZEN_SVGComponent_indicatorLamp;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_meter) ? zenMaster._ZEN_SVGComponent_meter.prototype:_ZEN_SVGComponent_meter.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.indicatorLamp';
	p._type = 'indicatorLamp';
	p.serialize = _ZEN_SVGComponent_indicatorLamp_serialize;
	p.getSettings = _ZEN_SVGComponent_indicatorLamp_getSettings;
	p.connectToController = _ZEN_SVGComponent_indicatorLamp_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_indicatorLamp_disconnectFromController;
	p.getController = _ZEN_SVGComponent_indicatorLamp_getController;
	p.notifyView = _ZEN_SVGComponent_indicatorLamp_notifyView;
	p.renderMeter = _ZEN_SVGComponent_indicatorLamp_renderMeter;
	p.sendEventToController = _ZEN_SVGComponent_indicatorLamp_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_indicatorLamp_setControllerId;
	p.setProperty = _ZEN_SVGComponent_indicatorLamp_setProperty;
	p.updateLamp = _ZEN_SVGComponent_indicatorLamp_updateLamp;
}

// ================================================================================
_zenClassIdx['lightBar'] = '_ZEN_SVGComponent_lightBar';
function _ZEN_SVGComponent_lightBar(index,id) {
	if (index>=0) {_ZEN_SVGComponent_lightBar__init(this,index,id);}
}

function _ZEN_SVGComponent_lightBar__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_meter__init) ?zenMaster._ZEN_SVGComponent_meter__init(o,index,id):_ZEN_SVGComponent_meter__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.highLampColor = 'url(#glow-red)';
	o.lowLampColor = 'url(#glow-red)';
	o.onnotifyView = '';
	o.viewBoxWidth = '50';
}
function _ZEN_SVGComponent_lightBar_serialize(set,s)
{
	s[0]='4110670282';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=this.controller;s[10]=this.controllerId;s[11]=this.dataBinding;s[12]=(this.disabled?1:0);s[13]=this.height;s[14]=(this.hidden?1:0);s[15]=this.highLampColor;s[16]=this.label;s[17]=this.labelStyle;s[18]=this.lowLampColor;s[19]=this.onchange;s[20]=this.onclick;s[21]=this.onnotifyView;s[22]=this.onupdate;s[23]=this.position;s[24]=this.preserveAspectRatio;s[25]=this.rangeLower;s[26]=this.rangeUpper;s[27]=this.renderFlag;s[28]=this.scaleFactor;s[29]=this.thresholdLower;s[30]=this.thresholdUpper;s[31]=this.tuple;s[32]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[33]=this.viewBoxHeight;s[34]=this.viewBoxWidth;s[35]=(this.visible?1:0);s[36]=this.width;s[37]=this.x;s[38]=this.y;
}
function _ZEN_SVGComponent_lightBar_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['highLampColor'] = 'color';
	s['lowLampColor'] = 'color';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_lightBar_connectToController() {
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

function _ZEN_SVGComponent_lightBar_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_lightBar_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_lightBar_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_lightBar_renderMeter() {
var body = this.document.createElementNS(SVGNS,'rect');
body.setAttribute('class','lightBar-body');
body.setAttribute('fill','url(#lightBar-bodyGrad)');
body.setAttribute('x',10);
body.setAttribute('y',8);
body.setAttribute('width',30);
body.setAttribute('height',74);
body.setAttribute('rx',5);
this.svgGroup.appendChild(body);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('lowLamp'));
lamp.setAttribute('class','lightBar-lamp');
lamp.setAttribute('fill','none');
lamp.setAttribute('cx',14);
lamp.setAttribute('cy',76.5);
lamp.setAttribute('r',2);
this.svgGroup.appendChild(lamp);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('highLamp'));
lamp.setAttribute('class','lightBar-lamp');
lamp.setAttribute('fill','none');
lamp.setAttribute('cx',14);
lamp.setAttribute('cy',13);
lamp.setAttribute('r',2);
this.svgGroup.appendChild(lamp);
var y = 11;
for (var n = 9; n >= 0; n--) {
var color = (n>=8 ? '#200000;' : (n>=7 ? '#202000;' : '#002000;'));
var bar = this.document.createElementNS(SVGNS,'rect');
bar.setAttribute('class','lightBar-lampOFF');
bar.setAttribute('fill',color);
bar.setAttribute('x',18);
bar.setAttribute('y',y);
bar.setAttribute('width',14);
bar.setAttribute('height',5);
bar.setAttribute('rx',2);
this.svgGroup.appendChild(bar);
var bar = this.document.createElementNS(SVGNS,'rect');
bar.setAttribute('id',this.makeId('lamp_'+n));
bar.setAttribute('class','lightBar-lampON');
bar.setAttribute('fill','none');
bar.setAttribute('x',18);
bar.setAttribute('y',y);
bar.setAttribute('width',14);
bar.setAttribute('height',5);
bar.setAttribute('rx',2);
this.svgGroup.appendChild(bar);
y += 7;
}
this.renderLabel('50%',95);
this.updateLamps(false);
}

function _ZEN_SVGComponent_lightBar_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_lightBar_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_lightBar_setProperty(property,value,value2) {
switch(property) {
case 'value':
if (this._timerId) {
window.clearTimeout(this._timerId);
delete this._timerId;
}
this.value = value;
if (null == this.currValue) {
this.currValue = 0;
}
var speed = (this.value*1 - this.currValue*1) / 4;
this.currValue = this.currValue*1 + speed;
this.updateLamps(this.animate);
break;
case 'lowLampColor':
case 'highLampColor':
this[property] = value;
this.updateLamps(false);
break;
case 'width':
case 'height':
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_lightBar_updateLamps(animate) {
delete this._timerId;
var range = this.rangeUpper - this.rangeLower;
if (null == this.currValue) {
this.currValue = 0;
}
if (animate) {
if ((Math.abs(this.value*1 - this.currValue*1)<=(range/50))) {
this.currValue = this.value*1;
}
}
else {
this.currValue = this.value*1;
}
var bars = 0;
var fraction = 0;
if (range != 0) {
bars = (((this.currValue - this.rangeLower) / range) * 10);
fraction = bars - Math.floor(bars);
}
if (bars <= 0) {
bars = 0;
}
if (bars >= 10) {
bars = 10;
}
for (var n = 0; n != 10; n++) {
var off = (n >= bars);
var lamp = this.findSVGElement('lamp_' + n);
if (n <=6 ) {
lamp.setAttribute("fill",(off) ? "none" : "url(#glow-green)");
}
else if (n == 7) {
lamp.setAttribute("fill",(off) ? "none" : "url(#glow-yellow)");
}
else {
lamp.setAttribute("fill",(off) ? "none" : "url(#glow-red)");
}
if ((n == Math.floor(bars)) && (fraction != 0)) {
lamp.setAttribute("fill-opacity", (0.0 + (fraction / 1)));
}
else {
lamp.setAttribute("fill-opacity", 1.0);
}
}
var lowLamp = false;
var highLamp = false;
if (this.currValue <= this.thresholdLower) {
lowLamp = true;
}
if (this.currValue >= this.thresholdUpper) {
highLamp = true;
}
var lamp = this.findSVGElement('lowLamp');
if (lamp) {
lamp.setAttribute("fill",lowLamp ? this.lowLampColor : 'none');
}
var lamp = this.findSVGElement('highLamp');
if (lamp) {
lamp.setAttribute("fill",highLamp ? this.highLampColor : 'none');
}
if (animate && (this.value*1 != this.currValue*1)) {
var speed = (this.value*1 - this.currValue*1) / 2;
this.currValue = this.currValue*1 + speed;
this._timerId = window.setTimeout("zenPage.getComponent(" + this.index + ").updateLamps(true)",50);
}
}
function _ZEN_SVGComponent_lightBar__Loader() {
	zenLoadClass('_ZEN_SVGComponent_meter');
	_ZEN_SVGComponent_lightBar.prototype = zenCreate('_ZEN_SVGComponent_meter',-1);
	var p = _ZEN_SVGComponent_lightBar.prototype;
	p.constructor = _ZEN_SVGComponent_lightBar;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_meter) ? zenMaster._ZEN_SVGComponent_meter.prototype:_ZEN_SVGComponent_meter.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.lightBar';
	p._type = 'lightBar';
	p.serialize = _ZEN_SVGComponent_lightBar_serialize;
	p.getSettings = _ZEN_SVGComponent_lightBar_getSettings;
	p.connectToController = _ZEN_SVGComponent_lightBar_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_lightBar_disconnectFromController;
	p.getController = _ZEN_SVGComponent_lightBar_getController;
	p.notifyView = _ZEN_SVGComponent_lightBar_notifyView;
	p.renderMeter = _ZEN_SVGComponent_lightBar_renderMeter;
	p.sendEventToController = _ZEN_SVGComponent_lightBar_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_lightBar_setControllerId;
	p.setProperty = _ZEN_SVGComponent_lightBar_setProperty;
	p.updateLamps = _ZEN_SVGComponent_lightBar_updateLamps;
}

// ================================================================================
_zenClassIdx['slider'] = '_ZEN_SVGComponent_slider';
function _ZEN_SVGComponent_slider(index,id) {
	if (index>=0) {_ZEN_SVGComponent_slider__init(this,index,id);}
}

function _ZEN_SVGComponent_slider__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_meter__init) ?zenMaster._ZEN_SVGComponent_meter__init(o,index,id):_ZEN_SVGComponent_meter__init(o,index,id);
	o.constrained = true;
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
	o.tickMarks = '10';
	o.viewBoxWidth = '10';
}
function _ZEN_SVGComponent_slider_serialize(set,s)
{
	s[0]='4121409479';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=(this.constrained?1:0);s[10]=this.controller;s[11]=this.controllerId;s[12]=this.dataBinding;s[13]=(this.disabled?1:0);s[14]=this.height;s[15]=(this.hidden?1:0);s[16]=this.label;s[17]=this.labelStyle;s[18]=this.onchange;s[19]=this.onclick;s[20]=this.onnotifyView;s[21]=this.onupdate;s[22]=this.position;s[23]=this.preserveAspectRatio;s[24]=this.rangeLower;s[25]=this.rangeUpper;s[26]=this.renderFlag;s[27]=this.scaleFactor;s[28]=this.thresholdLower;s[29]=this.thresholdUpper;s[30]=this.tickMarks;s[31]=this.tuple;s[32]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[33]=this.viewBoxHeight;s[34]=this.viewBoxWidth;s[35]=(this.visible?1:0);s[36]=this.width;s[37]=this.x;s[38]=this.y;
}
function _ZEN_SVGComponent_slider_getSettings(s)
{
	s['name'] = 'string';
	s['constrained'] = 'boolean';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	s['tickMarks'] = 'integer';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_slider_btnTimerHandler(which) {
delete this._timerId;
var newvalue = this.findNextTickValue(which);
if (newvalue != this.value) {
this._movedByTimer = true;
this._animate = this.animate
this.animate = false;
this.setProperty('value',newvalue);
this.animate = this._animate;
this.onchangeHandler();
this._timerId = window.setTimeout("zenPage.getComponent(" + this.index + ").btnTimerHandler('"+which+"')",175);
}
}

function _ZEN_SVGComponent_slider_connectToController() {
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

function _ZEN_SVGComponent_slider_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_slider_dragThumb(evt) {
evt.stopPropagation();
if (this.disabled) return;
switch (evt.type) {
case 'mousedown':
this.document.documentElement.addEventListener('mousemove',this._dragFunc,false);
this.document.documentElement.addEventListener('mouseup',this._dragFunc,false);
this._animate = this.animate
this.animate = false;
var size = this.getSizeAbsolute();
var currZoom = (size.height / 100) * 100;
var ty = size.y + this._thumbPos;
this._deltaY = ty - (evt.clientY * (100/currZoom));
this._startY = ty;
break;
case 'mousemove':
case 'mouseup':
var size = this.getSizeAbsolute();
var currZoom = size.height / 100;
var ty = size.y + this._thumbPos;
var currZoom = (size.height / 100) * 100;
var dy = ((evt.clientY * (100/currZoom)) + this._deltaY) - ty;
if (Math.abs(dy) >= 1) {
var newvalue = this.getValueForPos(this._thumbPos + dy);
if (newvalue != this.value) {
this.setProperty('value',newvalue);
}
}
if ('mouseup' == evt.type) {
this.onchangeHandler();
this.document.documentElement.removeEventListener('mousemove',this._dragFunc,false);
this.document.documentElement.removeEventListener('mouseup',this._dragFunc,false);
this.animate = this._animate;
}
break;
}
}

function _ZEN_SVGComponent_slider_findNextTickValue(which) {
var newvalue = this.value;
var delta = 0;
var tcount = parseInt(this.tickMarks);
tcount = (tcount > 0) ? tcount : 10;
delta = (this.rangeUpper - this.rangeLower) / tcount;
if (delta != 0) {
switch(which) {
case 'up':
newvalue = parseFloat(this.value,10)+delta;
newvalue = (newvalue > this.rangeUpper) ? this.rangeUpper : newvalue;
break;
case 'down':
newvalue = parseFloat(this.value,10)-delta;
newvalue = (newvalue < this.rangeLower) ? this.rangeLower : newvalue;
break;
}
}
return newvalue;
}

function _ZEN_SVGComponent_slider_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_slider_getValueForPos(p) {
p -= 18;
if (p>=54) {
p = 54;
}
if (p<=0) {
p = 0;
}
return parseFloat(this.rangeLower,10) + ((parseFloat(this.rangeUpper,10) - parseFloat(this.rangeLower,10)) * ((54-p)/54));
}

function _ZEN_SVGComponent_slider_mouseDownHandler(evt,which) {
evt.stopPropagation();
if (this.disabled) return;
if (this._timerId) {
window.clearTimeout(this._timerId);
delete this._timerId;
}
this._timerId = window.setTimeout("zenPage.getComponent(" + this.index + ").btnTimerHandler('"+which+"')",250);
if (this._upFunc) {
this.document.documentElement.removeEventListener('mouseup',this._upFunc,false);
}
this._upFunc = new Function('evt','return zenPage.getComponent('+this.index+').mouseUpHandler(evt,"'+which+'");');
this.document.documentElement.addEventListener('mouseup',this._upFunc,false);
}

function _ZEN_SVGComponent_slider_mouseUpHandler(evt,which) {
evt.stopPropagation();
if (this.disabled) return;
if (this._timerId) {
window.clearTimeout(this._timerId);
delete this._timerId;
}
this.document.documentElement.removeEventListener('mouseup',this._upFunc,false);
delete this._upFunc;
if (!this._movedByTimer) {
var newvalue = this.findNextTickValue(which);
if (newvalue != this.value) {
this._animate = this.animate
this.animate = false;
this.setProperty('value',newvalue);
this.animate = this._animate;
this.onchangeHandler();
}
}
delete this._movedByTimer;
}

function _ZEN_SVGComponent_slider_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_slider_renderMeter() {
this._dragFunc = new Function('evt','return zenPage.getComponent('+this.index+').dragThumb(evt);');
this._thumbPos = 18;
var body = this.document.createElementNS(SVGNS,'rect');
body.setAttribute('id',this.makeId('body'));
body.setAttribute('class','slider-body');
body.setAttribute('x',0);
body.setAttribute('y',8);
body.setAttribute('width',10);
body.setAttribute('height',74);
body.setAttribute('rx',2);
this.svgGroup.appendChild(body);
var tcount = parseInt(this.tickMarks,10);
if (tcount > 0) {
for (var n = 0; n < (tcount + 1); n++) {
var yt = 18 + ((54/tcount) * n);
var tick = this.document.createElementNS(SVGNS,'line');
tick.setAttribute('class','slider-tick');
tick.setAttribute('x1', 2);
tick.setAttribute('x2', 8);
tick.setAttribute('y1', yt);
tick.setAttribute('y2', yt);
this.svgGroup.appendChild(tick);
}
}
var groove = this.document.createElementNS(SVGNS,'rect');
groove.setAttribute('class','slider-groove');
groove.setAttribute('x',4.5);
groove.setAttribute('y',18);
groove.setAttribute('width',1);
groove.setAttribute('height',54);
groove.setAttribute('rx',5);
this.svgGroup.appendChild(groove);
var g = this.document.createElementNS(SVGNS,'g');
g.setAttribute('id',this.makeId('thumb'));
this.svgGroup.appendChild(g);
var thumb = this.document.createElementNS(SVGNS,'polyline');
thumb.setAttribute('class','slider-thumb');
thumb.setAttribute('id',this.makeId('thumbShape'));
thumb.setAttribute('points', '-3,-2.5 3,0 -3,2.5 -3,-2.5');
g.appendChild(thumb);
thumb.addEventListener('mouseover',new Function('evt','evt.target.setAttribute("class","slider-thumbHover");'),false);
thumb.addEventListener('mouseout',new Function('evt','evt.target.setAttribute("class","slider-thumb");'),false);
thumb.addEventListener('mousedown',this._dragFunc,false);
var btn = this.document.createElementNS(SVGNS,'polyline');
btn.setAttribute('transform', 'translate(5,10)');
btn.setAttribute('class','slider-button');
btn.setAttribute('points', '0,0 2.5,5 -2.5,5 0,0');
this.svgGroup.appendChild(btn);
btn.addEventListener('mousedown',new Function('evt','which','return zenPage.getComponent('+this.index+').mouseDownHandler(evt,"up");'),false);
btn.addEventListener('mouseover',new Function('evt','evt.target.setAttribute("class","slider-buttonHover");'),false);
btn.addEventListener('mouseout',new Function('evt','evt.target.setAttribute("class","slider-button");'),false);
var btn = this.document.createElementNS(SVGNS,'polyline');
btn.setAttribute('transform', 'translate(5,80)');
btn.setAttribute('class','slider-button');
btn.setAttribute('points', '0,0 2.5,-5 -2.5,-5 0,0');
this.svgGroup.appendChild(btn);
btn.addEventListener('mousedown',new Function('evt','which','return zenPage.getComponent('+this.index+').mouseDownHandler(evt,"down");'),false);
btn.addEventListener('mouseover',new Function('evt','evt.target.setAttribute("class","slider-buttonHover");'),false);
btn.addEventListener('mouseout',new Function('evt','evt.target.setAttribute("class","slider-button");'),false);
this.renderLabel('50%',95);
this.updateThumb(false);
}

function _ZEN_SVGComponent_slider_roundValue(value) {
value = parseFloat(value,10);
value = isNaN(value) ? 0 : value;
var tcount = parseInt(this.tickMarks,10);
var range = (this.rangeUpper - this.rangeLower);
if (this.constrained && tcount > 0 && range != 0) {
value -= parseFloat(this.rangeLower,10);
value = (range/tcount) * Math.round((value / range) * tcount);
value += parseFloat(this.rangeLower,10);
}
return value;
}

function _ZEN_SVGComponent_slider_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_slider_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_slider_setProperty(property,value,value2) {
switch(property) {
case 'value':
value = parseFloat(value,10);
value = isNaN(value) ? 0 : value;
if (this._timerId) {
window.clearTimeout(this._timerId);
delete this._timerId;
}
this.value = this.roundValue(value);
if (null == this.currValue) {
this.currValue = 0;
}
var speed = (parseFloat(this.value,10) - parseFloat(this.currValue,10)) / 4;
this.currValue = parseFloat(this.currValue,10) + speed;
this.updateThumb(this.animate);
break;
case 'constrained':
value = value ? true : false;
this[property] = value;
break;
case 'tickMarks':
value = parseInt(value,10);
value = isNaN(value) ? 0 : value;
this[property] = value;
this.unrender();
this.render();
break;
case 'width':
case 'height':
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_slider_updateThumb(animate) {
delete this._timerId;
var range = this.rangeUpper - this.rangeLower;
if (null == this.currValue) {
this.currValue = 0;
}
if (animate) {
if ((Math.abs(parseFloat(this.value,10) - parseFloat(this.currValue,10))<=(range/50))) {
this.currValue = parseFloat(this.value,10);
}
}
else {
this.currValue = parseFloat(this.value,10);
}
var ypos = 0;
if (range != 0) {
ypos = 54-(((this.currValue - this.rangeLower) / range) * 54);
}
if (ypos>=54) {
ypos = 54;
}
if (ypos<=0) {
ypos = 0;
}
this._thumbPos = 18+ypos;
var thumb = this.findSVGElement('thumb');
if (thumb) {
thumb.setAttribute("transform", "translate(5," + (this._thumbPos) + ")");
}
if (animate && (parseFloat(this.value,10) != parseFloat(this.currValue,10))) {
var speed = (parseFloat(this.value,10) - parseFloat(this.currValue,10)) / 2;
this.currValue = parseFloat(this.currValue,10) + speed;
this._timerId = window.setTimeout("zenPage.getComponent(" + this.index + ").updateThumb(true)",50);
}
}
function _ZEN_SVGComponent_slider__Loader() {
	zenLoadClass('_ZEN_SVGComponent_meter');
	_ZEN_SVGComponent_slider.prototype = zenCreate('_ZEN_SVGComponent_meter',-1);
	var p = _ZEN_SVGComponent_slider.prototype;
	p.constructor = _ZEN_SVGComponent_slider;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_meter) ? zenMaster._ZEN_SVGComponent_meter.prototype:_ZEN_SVGComponent_meter.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.slider';
	p._type = 'slider';
	p.serialize = _ZEN_SVGComponent_slider_serialize;
	p.getSettings = _ZEN_SVGComponent_slider_getSettings;
	p.btnTimerHandler = _ZEN_SVGComponent_slider_btnTimerHandler;
	p.connectToController = _ZEN_SVGComponent_slider_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_slider_disconnectFromController;
	p.dragThumb = _ZEN_SVGComponent_slider_dragThumb;
	p.findNextTickValue = _ZEN_SVGComponent_slider_findNextTickValue;
	p.getController = _ZEN_SVGComponent_slider_getController;
	p.getValueForPos = _ZEN_SVGComponent_slider_getValueForPos;
	p.mouseDownHandler = _ZEN_SVGComponent_slider_mouseDownHandler;
	p.mouseUpHandler = _ZEN_SVGComponent_slider_mouseUpHandler;
	p.notifyView = _ZEN_SVGComponent_slider_notifyView;
	p.renderMeter = _ZEN_SVGComponent_slider_renderMeter;
	p.roundValue = _ZEN_SVGComponent_slider_roundValue;
	p.sendEventToController = _ZEN_SVGComponent_slider_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_slider_setControllerId;
	p.setProperty = _ZEN_SVGComponent_slider_setProperty;
	p.updateThumb = _ZEN_SVGComponent_slider_updateThumb;
}

// ================================================================================
_zenClassIdx['smiley'] = '_ZEN_SVGComponent_smiley';
function _ZEN_SVGComponent_smiley(index,id) {
	if (index>=0) {_ZEN_SVGComponent_smiley__init(this,index,id);}
}

function _ZEN_SVGComponent_smiley__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_meter__init) ?zenMaster._ZEN_SVGComponent_meter__init(o,index,id):_ZEN_SVGComponent_meter__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
}
function _ZEN_SVGComponent_smiley_serialize(set,s)
{
	s[0]='79131682';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=this.controller;s[10]=this.controllerId;s[11]=this.dataBinding;s[12]=(this.disabled?1:0);s[13]=this.height;s[14]=(this.hidden?1:0);s[15]=this.label;s[16]=this.labelStyle;s[17]=this.onchange;s[18]=this.onclick;s[19]=this.onnotifyView;s[20]=this.onupdate;s[21]=this.position;s[22]=this.preserveAspectRatio;s[23]=this.rangeLower;s[24]=this.rangeUpper;s[25]=this.renderFlag;s[26]=this.scaleFactor;s[27]=this.thresholdLower;s[28]=this.thresholdUpper;s[29]=this.tuple;s[30]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[31]=this.viewBoxHeight;s[32]=this.viewBoxWidth;s[33]=(this.visible?1:0);s[34]=this.width;s[35]=this.x;s[36]=this.y;
}
function _ZEN_SVGComponent_smiley_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_smiley_connectToController() {
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

function _ZEN_SVGComponent_smiley_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_smiley_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_smiley_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_smiley_renderMeter() {
var face = this.document.createElementNS(SVGNS,'circle');
face.setAttribute('id',this.makeId('face'));
face.setAttribute('class','smiley-face');
face.setAttribute('style','fill: url(#smiley-faceGrad);');
face.setAttribute('cx',50);
face.setAttribute('cy',45);
face.setAttribute('r',35);
this.svgGroup.appendChild(face);
var eye = this.document.createElementNS(SVGNS,'circle');
eye.setAttribute('id',this.makeId('reye'));
eye.setAttribute('class','smiley-eye');
eye.setAttribute('cx',33);
eye.setAttribute('cy',35);
eye.setAttribute('r',3);
this.svgGroup.appendChild(eye);
var eye = this.document.createElementNS(SVGNS,'circle');
eye.setAttribute('id',this.makeId('leye'));
eye.setAttribute('class','smiley-eye');
eye.setAttribute('cx',67);
eye.setAttribute('cy',35);
eye.setAttribute('r',3);
this.svgGroup.appendChild(eye);
var brow = this.document.createElementNS(SVGNS,'path');
brow.setAttribute('id',this.makeId('rx'));
brow.setAttribute('class','smiley-eye');
brow.setAttribute('style','display: none;');
brow.setAttribute('d','M 31 33 L 35 37 M 31 37 L 35 33');
this.svgGroup.appendChild(brow);
var brow = this.document.createElementNS(SVGNS,'path');
brow.setAttribute('id',this.makeId('lx'));
brow.setAttribute('class','smiley-eye');
brow.setAttribute('style','display: none;');
brow.setAttribute('d','M 65 33 L 69 37 M 65 37 L 69 33');
this.svgGroup.appendChild(brow);
var brow = this.document.createElementNS(SVGNS,'path');
brow.setAttribute('id',this.makeId('rbrow'));
brow.setAttribute('class','smiley-eye');
brow.setAttribute('style','');
brow.setAttribute('d','M 28 30 a 1 1.6 -45 1 1 10 3');
this.svgGroup.appendChild(brow);
var brow = this.document.createElementNS(SVGNS,'path');
brow.setAttribute('id',this.makeId('lbrow'));
brow.setAttribute('class','smiley-eye');
brow.setAttribute('style','');
brow.setAttribute('d','M 72 30 a 1 1.6 45 1 0 -10 3');
this.svgGroup.appendChild(brow);
var mouth = this.document.createElementNS(SVGNS,'path');
mouth.setAttribute('id',this.makeId('mouth'));
mouth.setAttribute('class','smiley-mouth');
mouth.setAttribute('d','M 28 55 a 10 5 0 1 0 44 0');
this.svgGroup.appendChild(mouth);
this.renderLabel('50%',95);
this.updateMouth();
}

function _ZEN_SVGComponent_smiley_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_smiley_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_smiley_setProperty(property,value,value2) {
switch(property) {
case 'value':
this.value = value;
this.updateMouth();
break;
case 'width':
case 'height':
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_smiley_updateMouth() {
var smile = 0;
var sweep = 1;
var xeyes = false;
var brows = false;
var range = parseFloat(this.rangeUpper,10) - parseFloat(this.rangeLower,10);
if (range != 0) {
smile = -((((parseFloat(this.value,10) - parseFloat(this.rangeLower,10)) / range) * 10) - 5);
}
if (smile >= 5) {
smile = 5;
xeyes = true;
}
if (smile <=-5) {
smile = -5;
brows = true;
}
if (smile <= 0) {
sweep = 0;
smile = -smile;
}
if (smile == 0) {
smile = 0.001;
}
var mouth = this.findSVGElement("mouth");
var path = "M 28 55 a 10 " + smile + " 0 1 " + sweep + " 44 0";
mouth.setAttribute("d", path);
if (xeyes) {
this.findSVGElement("reye").setAttribute("style","display:none;");
this.findSVGElement("leye").setAttribute("style","display:none;");
this.findSVGElement("rx").setAttribute("style","");
this.findSVGElement("lx").setAttribute("style","");
}
else {
this.findSVGElement("reye").setAttribute("style","");
this.findSVGElement("leye").setAttribute("style","");
this.findSVGElement("rx").setAttribute("style","display:none;");
this.findSVGElement("lx").setAttribute("style","display:none;");
}
if (brows) {
this.findSVGElement("rbrow").setAttribute("style","");
this.findSVGElement("lbrow").setAttribute("style","");
}
else {
this.findSVGElement("rbrow").setAttribute("style","display:none;");
this.findSVGElement("lbrow").setAttribute("style","display:none;");
}
}
function _ZEN_SVGComponent_smiley__Loader() {
	zenLoadClass('_ZEN_SVGComponent_meter');
	_ZEN_SVGComponent_smiley.prototype = zenCreate('_ZEN_SVGComponent_meter',-1);
	var p = _ZEN_SVGComponent_smiley.prototype;
	p.constructor = _ZEN_SVGComponent_smiley;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_meter) ? zenMaster._ZEN_SVGComponent_meter.prototype:_ZEN_SVGComponent_meter.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.smiley';
	p._type = 'smiley';
	p.serialize = _ZEN_SVGComponent_smiley_serialize;
	p.getSettings = _ZEN_SVGComponent_smiley_getSettings;
	p.connectToController = _ZEN_SVGComponent_smiley_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_smiley_disconnectFromController;
	p.getController = _ZEN_SVGComponent_smiley_getController;
	p.notifyView = _ZEN_SVGComponent_smiley_notifyView;
	p.renderMeter = _ZEN_SVGComponent_smiley_renderMeter;
	p.sendEventToController = _ZEN_SVGComponent_smiley_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_smiley_setControllerId;
	p.setProperty = _ZEN_SVGComponent_smiley_setProperty;
	p.updateMouth = _ZEN_SVGComponent_smiley_updateMouth;
}

// ================================================================================
_zenClassIdx['speedometer'] = '_ZEN_SVGComponent_speedometer';
function _ZEN_SVGComponent_speedometer(index,id) {
	if (index>=0) {_ZEN_SVGComponent_speedometer__init(this,index,id);}
}

function _ZEN_SVGComponent_speedometer__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_meter__init) ?zenMaster._ZEN_SVGComponent_meter__init(o,index,id):_ZEN_SVGComponent_meter__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.highLampColor = 'url(#glow-red)';
	o.independentOdometer = false;
	o.logo = 'Zen';
	o.lowLampColor = 'url(#glow-red)';
	o.odometerValue = '';
	o.onnotifyView = '';
}
function _ZEN_SVGComponent_speedometer_serialize(set,s)
{
	s[0]='982678025';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=this.controller;s[10]=this.controllerId;s[11]=this.dataBinding;s[12]=(this.disabled?1:0);s[13]=this.height;s[14]=(this.hidden?1:0);s[15]=this.highLampColor;s[16]=(this.independentOdometer?1:0);s[17]=this.label;s[18]=this.labelStyle;s[19]=this.logo;s[20]=this.lowLampColor;s[21]=this.odometerValue;s[22]=this.onchange;s[23]=this.onclick;s[24]=this.onnotifyView;s[25]=this.onupdate;s[26]=this.position;s[27]=this.preserveAspectRatio;s[28]=this.rangeLower;s[29]=this.rangeUpper;s[30]=this.renderFlag;s[31]=this.scaleFactor;s[32]=this.thresholdLower;s[33]=this.thresholdUpper;s[34]=this.tuple;s[35]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[36]=this.viewBoxHeight;s[37]=this.viewBoxWidth;s[38]=(this.visible?1:0);s[39]=this.width;s[40]=this.x;s[41]=this.y;
}
function _ZEN_SVGComponent_speedometer_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['highLampColor'] = 'color';
	s['independentOdometer'] = 'boolean';
	s['logo'] = 'caption';
	s['lowLampColor'] = 'color';
	s['odometerValue'] = 'string';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_speedometer_connectToController() {
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

function _ZEN_SVGComponent_speedometer_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_speedometer_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_speedometer_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_speedometer_renderMeter() {
var body = this.document.createElementNS(SVGNS,'path');
body.setAttribute('class','speedometer-body');
body.setAttribute('fill','url(#speedometer-bodyGrad)');
body.setAttribute('d','M 40 80 A 38 38 0 1 1 60 80 z');
this.svgGroup.appendChild(body);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('lowLamp'));
lamp.setAttribute('class','speedometer-lamp');
lamp.setAttribute('fill','none');
lamp.setAttribute('cx',34.5);
lamp.setAttribute('cy',72);
lamp.setAttribute('r',1.8);
this.svgGroup.appendChild(lamp);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('highLamp'));
lamp.setAttribute('class','speedometer-lamp');
lamp.setAttribute('fill','none');
lamp.setAttribute('cx',65.5);
lamp.setAttribute('cy',72);
lamp.setAttribute('r',1.8);
this.svgGroup.appendChild(lamp);
var style = "Thin";
for (var a = -140; a<= 140; a += 14) {
style = ('Thick' == style) ? 'Thin' : 'Thick';
var tick = this.document.createElementNS(SVGNS,'line');
tick.setAttribute('class','speedometer-tick' + style);
tick.setAttribute('x1',50);
tick.setAttribute('y1',12);
tick.setAttribute('x2',50);
tick.setAttribute('y2',9);
tick.setAttribute('transform','rotate('+a+',50,43)');
this.svgGroup.appendChild(tick);
}
var logo = this.document.createElementNS(SVGNS,'text');
logo.setAttribute('id',this.makeId('logo'));
logo.setAttribute('class','speedometer-logoText');
logo.setAttribute('x',50);
logo.setAttribute('y',33);
logo.setAttribute('text-anchor','middle');
var textNode = this.document.createTextNode(this.logo);
logo.appendChild(textNode);
this.svgGroup.appendChild(logo);
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('class','speedometer-levelTextBox');
rect.setAttribute('fill','url(#speedometer-bodyGrad2)');
rect.setAttribute('x',32);
rect.setAttribute('y',55);
rect.setAttribute('width',35);
rect.setAttribute('height',8);
rect.setAttribute('rx',1);
this.svgGroup.appendChild(rect);
var lvlText = this.document.createElementNS(SVGNS,'text');
lvlText.setAttribute('id',this.makeId('levelText'));
lvlText.setAttribute('class','speedometer-logoText');
lvlText.setAttribute('x',65);
lvlText.setAttribute('y',62);
lvlText.setAttribute('text-anchor','end');
var ovalue = this.independentOdometer ? this.odometerValue : this.value;
var textNode = this.document.createTextNode(ovalue);
lvlText.appendChild(textNode);
this.svgGroup.appendChild(lvlText);
var shadow = this.document.createElementNS(SVGNS,'path');
shadow.setAttribute('id',this.makeId('shadow'));
shadow.setAttribute('class','speedometer-shadow');
shadow.setAttribute('d','M 50 12 L 53 55 50 53 47 55 z');
shadow.setAttribute('transform','rotate(1,50,43)');
this.svgGroup.appendChild(shadow);
var needle = this.document.createElementNS(SVGNS,'path');
needle.setAttribute('id',this.makeId('needle'));
needle.setAttribute('class','speedometer-needle');
needle.setAttribute('d','M 50 12 L 53 55 50 53 47 55 z');
needle.setAttribute('transform','rotate(0,50,43)');
this.svgGroup.appendChild(needle);
var nub = this.document.createElementNS(SVGNS,'path');
nub.setAttribute('class','speedometer-body2');
nub.setAttribute('fill','url(#speedometer-bodyGrad)');
nub.setAttribute('d','M 47 51 A 8 8 0 1 1 53 51 z');
this.svgGroup.appendChild(nub);
this.renderLabel('50%',95);
this.updateNeedle(false);
}

function _ZEN_SVGComponent_speedometer_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_speedometer_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_speedometer_setProperty(property,value,value2) {
switch(property) {
case 'odometerValue':
var lvl = 0;
if (this.independentOdometer) {
this.odometerValue = value;
var lvl = value * this.scaleFactor;
}
else {
var lvl = this.value * this.scaleFactor;
}
var text = this.findSVGElement('levelText');
text.setAttribute("class",(lvl>=0) ? "speedometer-levelText" : "speedometer-levelTextNeg");
if ((lvl>=10000000) || (lvl<=-1000000)) {
lvl = "\043\043\043\043\043\043";
}
else {
lvl = Math.round(lvl);
}
this.setTextNode("levelText",lvl);
break;
case 'independentOdometer':
value = value ? true : false;
this.independentOdometer = value;
this.setProperty('odometerValue',this.independentOdometer ? this.odometerValue : this.value);
break;
case 'value':
if (this._timerId) {
window.clearTimeout(this._timerId);
delete this._timerId;
}
this.value = value;
if (null == this.currValue) {
this.currValue = 0;
}
var speed = (this.value*1 - this.currValue*1) / 4;
this.currValue = this.currValue*1 + speed;
this.updateNeedle(this.animate);
if (!this.independentOdometer) {
this.setProperty('odometerValue',value);
}
break;
case 'logo':
this.logo = value;
this.setTextNode('logo',this.logo);
break;
case 'lowLampColor':
case 'highLampColor':
this[property] = value;
this.updateNeedle(false);
break;
case 'width':
case 'height':
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_speedometer_updateNeedle(animate) {
delete this._timerId;
var range = this.rangeUpper - this.rangeLower;
if (null == this.currValue) {
this.currValue = 0;
}
if (animate) {
if ((Math.abs(this.value*1 - this.currValue*1)<=(range/280))) {
this.currValue = this.value*1;
}
}
else {
this.currValue = this.value*1;
}
var angle = 0;
if (range != 0) {
angle = (((this.currValue - this.rangeLower) / range) * 280) - 140;
}
if (angle>=140) {
angle = 140;
}
if (angle<=-140) {
angle = -140;
}
var needle = this.findSVGElement('needle');
if (needle) {
needle.setAttribute("transform", "rotate(" + angle + ",50,43)");
}
var shadow = this.findSVGElement('shadow');
if (shadow) {
shadow.setAttribute("transform", "translate(3,2) rotate(" + angle + ",50,43)");
}
var lowLamp = false;
var highLamp = false;
if (this.currValue <= this.thresholdLower) {
lowLamp = true;
}
if (this.currValue >= this.thresholdUpper) {
highLamp = true;
}
var lamp = this.findSVGElement('lowLamp');
if (lamp) {
lamp.setAttribute("fill",lowLamp ? this.lowLampColor : 'none');
}
var lamp = this.findSVGElement('highLamp');
if (lamp) {
lamp.setAttribute("fill",highLamp ? this.highLampColor : 'none');
}
if (animate && (this.value*1 != this.currValue*1)) {
var speed = (this.value*1 - this.currValue*1) / 4;
this.currValue = this.currValue*1 + speed;
this._timerId = window.setTimeout("zenPage.getComponent(" + this.index + ").updateNeedle(true)",50);
}
}
function _ZEN_SVGComponent_speedometer__Loader() {
	zenLoadClass('_ZEN_SVGComponent_meter');
	_ZEN_SVGComponent_speedometer.prototype = zenCreate('_ZEN_SVGComponent_meter',-1);
	var p = _ZEN_SVGComponent_speedometer.prototype;
	p.constructor = _ZEN_SVGComponent_speedometer;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_meter) ? zenMaster._ZEN_SVGComponent_meter.prototype:_ZEN_SVGComponent_meter.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.speedometer';
	p._type = 'speedometer';
	p.serialize = _ZEN_SVGComponent_speedometer_serialize;
	p.getSettings = _ZEN_SVGComponent_speedometer_getSettings;
	p.connectToController = _ZEN_SVGComponent_speedometer_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_speedometer_disconnectFromController;
	p.getController = _ZEN_SVGComponent_speedometer_getController;
	p.notifyView = _ZEN_SVGComponent_speedometer_notifyView;
	p.renderMeter = _ZEN_SVGComponent_speedometer_renderMeter;
	p.sendEventToController = _ZEN_SVGComponent_speedometer_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_speedometer_setControllerId;
	p.setProperty = _ZEN_SVGComponent_speedometer_setProperty;
	p.updateNeedle = _ZEN_SVGComponent_speedometer_updateNeedle;
}

// ================================================================================
_zenClassIdx['trafficLight'] = '_ZEN_SVGComponent_trafficLight';
function _ZEN_SVGComponent_trafficLight(index,id) {
	if (index>=0) {_ZEN_SVGComponent_trafficLight__init(this,index,id);}
}

function _ZEN_SVGComponent_trafficLight__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_meter__init) ?zenMaster._ZEN_SVGComponent_meter__init(o,index,id):_ZEN_SVGComponent_meter__init(o,index,id);
	o.controller = '';
	o.controllerId = '';
	o.onnotifyView = '';
	o.viewBoxWidth = '50';
}
function _ZEN_SVGComponent_trafficLight_serialize(set,s)
{
	s[0]='79131682';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.animate?1:0);s[7]=this.aux;s[8]=(this.boundless?1:0);s[9]=this.controller;s[10]=this.controllerId;s[11]=this.dataBinding;s[12]=(this.disabled?1:0);s[13]=this.height;s[14]=(this.hidden?1:0);s[15]=this.label;s[16]=this.labelStyle;s[17]=this.onchange;s[18]=this.onclick;s[19]=this.onnotifyView;s[20]=this.onupdate;s[21]=this.position;s[22]=this.preserveAspectRatio;s[23]=this.rangeLower;s[24]=this.rangeUpper;s[25]=this.renderFlag;s[26]=this.scaleFactor;s[27]=this.thresholdLower;s[28]=this.thresholdUpper;s[29]=this.tuple;s[30]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[31]=this.viewBoxHeight;s[32]=this.viewBoxWidth;s[33]=(this.visible?1:0);s[34]=this.width;s[35]=this.x;s[36]=this.y;
}
function _ZEN_SVGComponent_trafficLight_getSettings(s)
{
	s['name'] = 'string';
	s['controllerId'] = 'id';
	s['onnotifyView'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_trafficLight_connectToController() {
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

function _ZEN_SVGComponent_trafficLight_disconnectFromController() {
if (this.controller && this.controller.unregister) {
this.controller.unregister(this);
}
this.controller = '';
}

function _ZEN_SVGComponent_trafficLight_getController() {
return (null == this.controller || '' == this.controller) ? null : this.controller;
}

function _ZEN_SVGComponent_trafficLight_notifyView(reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyView) {
ret = zenInvokeCallbackMethod(this.onnotifyView,this,'onnotifyEvent','reason',reason,'data1',data1,'data2',data2,'data3',data3);
}
if (ret && this.notifyViewHandler) {
this.notifyViewHandler(reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_trafficLight_renderMeter() {
var body = this.document.createElementNS(SVGNS,'rect');
body.setAttribute('class','trafficLight-body');
body.setAttribute('fill','url(#trafficLight-bodyGrad)');
body.setAttribute('x',10);
body.setAttribute('y',8);
body.setAttribute('width',30);
body.setAttribute('height',74);
body.setAttribute('rx',5);
this.svgGroup.appendChild(body);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('redLamp'));
lamp.setAttribute('class','trafficLight-lamp');
lamp.setAttribute('fill','#200000');
lamp.setAttribute('cx',25);
lamp.setAttribute('cy',22);
lamp.setAttribute('r',10);
this.svgGroup.appendChild(lamp);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('yellowLamp'));
lamp.setAttribute('class','trafficLight-lamp');
lamp.setAttribute('fill','#202000');
lamp.setAttribute('cx',25);
lamp.setAttribute('cy',45);
lamp.setAttribute('r',10);
this.svgGroup.appendChild(lamp);
var lamp = this.document.createElementNS(SVGNS,'circle');
lamp.setAttribute('id',this.makeId('greenLamp'));
lamp.setAttribute('class','trafficLight-lamp');
lamp.setAttribute('fill','#002000');
lamp.setAttribute('cx',25);
lamp.setAttribute('cy',68);
lamp.setAttribute('r',10);
this.svgGroup.appendChild(lamp);
this.renderLabel(25,95);
this.updateLamps();
}

function _ZEN_SVGComponent_trafficLight_sendEventToController(reason,data1,data2,data3) {
var controller = this.getController();
if (controller) {
controller.notifyController(this,reason,data1,data2,data3);
}
}

function _ZEN_SVGComponent_trafficLight_setControllerId(id) {
this.disconnectFromController();
this.controllerId = id;
this.connectToController();
}

function _ZEN_SVGComponent_trafficLight_setProperty(property,value,value2) {
switch(property) {
case 'value':
this.value = value;
this.updateLamps();
break;
case 'width':
case 'height':
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_trafficLight_updateLamps() {
var redState = false;
var greenState = false;
var yellowState = false;
if (parseFloat(this.rangeUpper) >=parseFloat( this.rangeLower)) {
if (parseFloat(this.value) <= parseFloat(this.thresholdLower)) {
greenState = true;
}
else if (parseFloat(this.value) >= parseFloat(this.thresholdUpper)) {
redState = true;
}
else {
yellowState = true;
}
}
else {
if (parseFloat(this.value) <= parseFloat(this.thresholdLower)) {
redState = true;
}
else if (parseFloat(this.value) >= (this.thresholdUpper)) {
greenState = true;
}
else {
yellowState = true;
}
}
var redLamp = this.findSVGElement("redLamp");
var greenLamp = this.findSVGElement("greenLamp");
var yellowLamp = this.findSVGElement("yellowLamp");
redLamp.setAttribute("fill",redState ? "url(#glow-red)" : "#200000");
greenLamp.setAttribute("fill",greenState ? "url(#glow-green)" : "#002000");
yellowLamp.setAttribute("fill",yellowState ? "url(#glow-yellow)" : "#202000");
}
function _ZEN_SVGComponent_trafficLight__Loader() {
	zenLoadClass('_ZEN_SVGComponent_meter');
	_ZEN_SVGComponent_trafficLight.prototype = zenCreate('_ZEN_SVGComponent_meter',-1);
	var p = _ZEN_SVGComponent_trafficLight.prototype;
	p.constructor = _ZEN_SVGComponent_trafficLight;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_meter) ? zenMaster._ZEN_SVGComponent_meter.prototype:_ZEN_SVGComponent_meter.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.trafficLight';
	p._type = 'trafficLight';
	p.serialize = _ZEN_SVGComponent_trafficLight_serialize;
	p.getSettings = _ZEN_SVGComponent_trafficLight_getSettings;
	p.connectToController = _ZEN_SVGComponent_trafficLight_connectToController;
	p.disconnectFromController = _ZEN_SVGComponent_trafficLight_disconnectFromController;
	p.getController = _ZEN_SVGComponent_trafficLight_getController;
	p.notifyView = _ZEN_SVGComponent_trafficLight_notifyView;
	p.renderMeter = _ZEN_SVGComponent_trafficLight_renderMeter;
	p.sendEventToController = _ZEN_SVGComponent_trafficLight_sendEventToController;
	p.setControllerId = _ZEN_SVGComponent_trafficLight_setControllerId;
	p.setProperty = _ZEN_SVGComponent_trafficLight_setProperty;
	p.updateLamps = _ZEN_SVGComponent_trafficLight_updateLamps;
}

// ================================================================================
_zenClassIdx['ownerDraw'] = '_ZEN_SVGComponent_ownerDraw';
function _ZEN_SVGComponent_ownerDraw(index,id) {
	if (index>=0) {_ZEN_SVGComponent_ownerDraw__init(this,index,id);}
}

function _ZEN_SVGComponent_ownerDraw__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.onrender = '';
}
function _ZEN_SVGComponent_ownerDraw_serialize(set,s)
{
	s[0]='3105724018';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=(this.boundless?1:0);s[8]=this.height;s[9]=(this.hidden?1:0);s[10]=this.onclick;s[11]=this.onrender;s[12]=this.onupdate;s[13]=this.position;s[14]=this.preserveAspectRatio;s[15]=this.renderFlag;s[16]=this.tuple;s[17]=this.viewBoxHeight;s[18]=this.viewBoxWidth;s[19]=(this.visible?1:0);s[20]=this.width;s[21]=this.x;s[22]=this.y;
}
function _ZEN_SVGComponent_ownerDraw_getSettings(s)
{
	s['name'] = 'string';
	s['onrender'] = 'eventHandler';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_ownerDraw_renderContents() {
if (this.svgGroup) {
zenInvokeCallbackMethod(this.onrender,this,'onrender');
}
}

function _ZEN_SVGComponent_ownerDraw_setProperty(property,value,value2) {
switch(property) {
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}
function _ZEN_SVGComponent_ownerDraw__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_ownerDraw.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_ownerDraw.prototype;
	p.constructor = _ZEN_SVGComponent_ownerDraw;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.ownerDraw';
	p._type = 'ownerDraw';
	p.serialize = _ZEN_SVGComponent_ownerDraw_serialize;
	p.getSettings = _ZEN_SVGComponent_ownerDraw_getSettings;
	p.renderContents = _ZEN_SVGComponent_ownerDraw_renderContents;
	p.setProperty = _ZEN_SVGComponent_ownerDraw_setProperty;
}

// ================================================================================
_zenClassIdx['radialNavigator'] = '_ZEN_SVGComponent_radialNavigator';
function _ZEN_SVGComponent_radialNavigator(index,id) {
	if (index>=0) {_ZEN_SVGComponent_radialNavigator__init(this,index,id);}
}

function _ZEN_SVGComponent_radialNavigator__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.backgroundStyle = '';
	o.hubStyle = '';
	o.mainLabel = '';
	o.mainLabelStyle = '';
	o.nodeStyle = '';
	o.nodes = new Array();
	o.onselectNode = '';
	o.selectedIndex = '-2';
	o.title = '';
	o.titleStyle = '';
	o.viewBoxHeight = '100';
	o.viewBoxWidth = '100';
}
function _ZEN_SVGComponent_radialNavigator_serialize(set,s)
{
	s[0]='1463016085';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.backgroundStyle;s[8]=(this.boundless?1:0);s[9]=this.height;s[10]=(this.hidden?1:0);s[11]=this.hubStyle;s[12]=this.mainLabel;s[13]=this.mainLabelStyle;s[14]=this.nodeStyle;s[15]=set.serializeList(this,this.nodes,true,'nodes');s[16]=this.onclick;s[17]=this.onselectNode;s[18]=this.onupdate;s[19]=this.position;s[20]=this.preserveAspectRatio;s[21]=this.renderFlag;s[22]=this.selectedIndex;s[23]=this.title;s[24]=this.titleStyle;s[25]=this.tuple;s[26]=this.viewBoxHeight;s[27]=this.viewBoxWidth;s[28]=(this.visible?1:0);s[29]=this.width;s[30]=this.x;s[31]=this.y;
}
function _ZEN_SVGComponent_radialNavigator_getSettings(s)
{
	s['name'] = 'string';
	s['backgroundStyle'] = 'svgStyle';
	s['hubStyle'] = 'svgStyle';
	s['mainLabel'] = 'caption';
	s['mainLabelStyle'] = 'svgStyle';
	s['nodeStyle'] = 'svgStyle';
	s['nodes'] = 'string';
	s['onselectNode'] = 'eventHandler';
	s['selectedIndex'] = 'integer';
	s['title'] = 'caption';
	s['titleStyle'] = 'svgStyle';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_radialNavigator_appendNode(node) {
this.nodes[this.nodes.length] = node;
this.render();
}

function _ZEN_SVGComponent_radialNavigator_clearNodes() {
this.selectedIndex = -2;
this.nodes.length = 0;
this.render();
}

function _ZEN_SVGComponent_radialNavigator_drawConnector(group,angle) {
if (this.svgGroup) {
var radius = 25;
var x = Math.cos(angle) * radius;
var y = Math.sin(angle) * radius;
var line = this.document.createElementNS(SVGNS,'line');
line.setAttribute('class','rnavConnector');
line.setAttribute('x1',0);
line.setAttribute('y1',0);
line.setAttribute('x2',x);
line.setAttribute('y2',y);
group.appendChild(line);
}
}

function _ZEN_SVGComponent_radialNavigator_drawNode(group,type,angle,node,num) {
if (this.svgGroup) {
var x,y,size;
var radius = 25;
var cls,id,style;
switch (type) {
case 'main':
x = 0;
y = 0;
size = 5;
cls = (-1 == this.selectedIndex) ? 'rnavHubSelected' : 'rnavHub';
style = this.hubStyle;
id = this.makeId("main");
num = -1;
break;
default:
x = Math.cos(angle) * radius;
y = Math.sin(angle) * radius;
size = 2.5;
cls = (num == this.selectedIndex) ? 'rnavNodeSelected' : 'rnavNode';
style = this.nodeStyle;
id = this.makeId("node_"+num);
lblid = this.makeId("label_"+num);
break;
}
var item = this.document.createElementNS(SVGNS,'circle');
item.setAttribute('class',cls);
item.setAttribute('id',id);
item.setAttribute('r',size);
item.setAttribute('cx',x);
item.setAttribute('cy',y);
if (node) {
item.setAttribute('style',style + node.style);
}
else {
item.setAttribute('style',style);
}
item.addEventListener('click',new Function('evt','return zenPage.getComponent('+this.index+').nodeClickHandler(evt,"'+type+'",'+num+');'),false);
item.addEventListener('mouseover',new Function('evt','return zenPage.getComponent('+this.index+').nodeMouseHandler(evt,"over",'+num+');'),false);
item.addEventListener('mouseout',new Function('evt','return zenPage.getComponent('+this.index+').nodeMouseHandler(evt,"out",'+num+');'),false);
group.appendChild(item);
if ((type != "main") && (node.label != "")) {
var tx = Math.cos(angle) * (radius+5);
var ty = Math.sin(angle) * (radius+5);
var anchor = ((tx<2)&&(tx>-2)) ? "middle" : ((tx>0) ? "start" :"end");
var yadj = (ty>=0) ? 2 : -1;
var text = this.document.createElementNS(SVGNS,'text');
text.setAttribute('class','rnavLabel');
text.setAttribute('id',lblid);
text.setAttribute('x',tx);
text.setAttribute('y',ty + yadj);
text.setAttribute('text-anchor',anchor);
var textNode = this.document.createTextNode(node.caption);
text.appendChild(textNode);
group.appendChild(text);
}
}
}

function _ZEN_SVGComponent_radialNavigator_getCurrNode() {
return this.getNode(this.selectedIndex);
}

function _ZEN_SVGComponent_radialNavigator_getNode(index) {
if (index >= 0 && index < this.nodes.length) {
return this.nodes[index];
}
return null;
}

function _ZEN_SVGComponent_radialNavigator_nodeClickHandler(evt,type,nodeIndex) {
evt.stopPropagation();
if (type == 'main') { nodeIndex = -1 }
this.selectNode(nodeIndex);
zenInvokeCallbackMethod(this.onselectNode,this,'onselectNode');
}

function _ZEN_SVGComponent_radialNavigator_nodeMouseHandler(evt,flag,nodeIndex) {
var node = this.getNode(nodeIndex);
if (null == node) {
evt.target.setAttribute("class",flag=="over" ? 'rnavHubHilight' : (this.selectedIndex==-1 ? 'rnavHubSelected' : 'rnavHub'));
}
else {
var el = this.findSVGElement('node_' + nodeIndex);
var label = this.findSVGElement('label_' + nodeIndex);
if (el) {
el.setAttribute("class",flag=="over" ? 'rnavNodeHilight' : (this.selectedIndex==nodeIndex) ? 'rnavNodeSelected' : 'rnavNode');
}
if (label) {
label.setAttribute("class",flag=="over" ? 'rnavLabelHilight' : 'rnavLabel');
}
}
}

function _ZEN_SVGComponent_radialNavigator_removeNode(index) {
this.nodes.splice(index,1);
this.render();
}

function _ZEN_SVGComponent_radialNavigator_renderContents() {
if (this.svgGroup) {
this.unrender();
var nodeCount = this.nodes.length;
var wid = 100;
var hgt = 100;
var adj = (nodeCount!=0 && nodeCount <20 && nodeCount%4==0) ? 15 : 0;
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('class','rnavBackground');
rect.setAttribute('x',0);
rect.setAttribute('y',0);
rect.setAttribute('width',wid);
rect.setAttribute('height',hgt);
rect.setAttribute('style',this.backgroundStyle);
this.svgGroup.appendChild(rect);
if ('' != this.mainLabel) {
var line = this.document.createElementNS(SVGNS,'line');
line.setAttribute('class','rnavTitleConnector');
line.setAttribute('x1',wid/2);
line.setAttribute('y1',hgt/2);
line.setAttribute('x2',wid/2-adj);
line.setAttribute('y2',9);
this.svgGroup.appendChild(line);
var text = this.document.createElementNS(SVGNS,'text');
text.setAttribute('class','rnavTitle');
text.setAttribute('x',wid/2-adj);
text.setAttribute('y',7);
text.setAttribute('style',this.mainLabelStyle);
text.setAttribute('text-anchor','middle');
var textNode = this.document.createTextNode(this.mainLabel);
text.appendChild(textNode);
this.svgGroup.appendChild(text);
}
var group = this.document.createElementNS(SVGNS,'g');
group.setAttribute('transform','translate('+(wid/2)+','+(hgt/2)+')');
this.svgGroup.appendChild(group);
if (nodeCount > 0) {
for (var n = 0; n < nodeCount; n++) {
var angle = (n-1) * ((Math.PI*2)/nodeCount);
this.drawConnector(group, angle);
}
}
if ('' != this.title || nodeCount > 0) {
this.drawNode(group,"main");
}
if (nodeCount > 0) {
for (var n = 0; n < nodeCount; n++) {
var node = this.nodes[n];
var angle = (n-1) * ((Math.PI*2)/nodeCount);
this.drawNode(group, "node", angle, node, n);
}
}
}
}

function _ZEN_SVGComponent_radialNavigator_selectNode(index) {
var el = null;
switch (this.selectedIndex) {
case -2:
break;
case -1:
var el = this.findSVGElement('main');
break;
default:
var el = this.findSVGElement('node_' + this.selectedIndex);
break;
}
if (el) {
el.setAttribute('class','rnavNode');
}
var el = null;
this.selectedIndex = index;
switch (this.selectedIndex) {
case -2:
break;
case -1:
var el = this.findSVGElement('main');
if (el) {
el.setAttribute('class','rnavHubSelected');
}
break;
default:
var el = this.findSVGElement('node_' + this.selectedIndex);
if (el) {
el.setAttribute('class','rnavNodeSelected');
}
break;
}
}

function _ZEN_SVGComponent_radialNavigator_setProperty(property,value,value2) {
switch(property) {
case 'backgroundStyle':
case 'titleStyle':
case 'title':
case 'mainLabelStyle':
case 'mainLabel':
case 'hubStyle':
case 'nodeStyle':
this[property] = value;
this.render();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}
function _ZEN_SVGComponent_radialNavigator__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_radialNavigator.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_radialNavigator.prototype;
	p.constructor = _ZEN_SVGComponent_radialNavigator;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.radialNavigator';
	p._type = 'radialNavigator';
	p.serialize = _ZEN_SVGComponent_radialNavigator_serialize;
	p.getSettings = _ZEN_SVGComponent_radialNavigator_getSettings;
	p.appendNode = _ZEN_SVGComponent_radialNavigator_appendNode;
	p.clearNodes = _ZEN_SVGComponent_radialNavigator_clearNodes;
	p.drawConnector = _ZEN_SVGComponent_radialNavigator_drawConnector;
	p.drawNode = _ZEN_SVGComponent_radialNavigator_drawNode;
	p.getCurrNode = _ZEN_SVGComponent_radialNavigator_getCurrNode;
	p.getNode = _ZEN_SVGComponent_radialNavigator_getNode;
	p.nodeClickHandler = _ZEN_SVGComponent_radialNavigator_nodeClickHandler;
	p.nodeMouseHandler = _ZEN_SVGComponent_radialNavigator_nodeMouseHandler;
	p.removeNode = _ZEN_SVGComponent_radialNavigator_removeNode;
	p.renderContents = _ZEN_SVGComponent_radialNavigator_renderContents;
	p.selectNode = _ZEN_SVGComponent_radialNavigator_selectNode;
	p.setProperty = _ZEN_SVGComponent_radialNavigator_setProperty;
}

// ================================================================================
_zenClassIdx['rect'] = '_ZEN_SVGComponent_rect';
function _ZEN_SVGComponent_rect(index,id) {
	if (index>=0) {_ZEN_SVGComponent_rect__init(this,index,id);}
}

function _ZEN_SVGComponent_rect__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.rx = '0';
	o.style = '';
}
function _ZEN_SVGComponent_rect_serialize(set,s)
{
	s[0]='2025506602';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=(this.boundless?1:0);s[8]=this.height;s[9]=(this.hidden?1:0);s[10]=this.onclick;s[11]=this.onupdate;s[12]=this.position;s[13]=this.preserveAspectRatio;s[14]=this.renderFlag;s[15]=this.rx;s[16]=this.style;s[17]=this.tuple;s[18]=this.viewBoxHeight;s[19]=this.viewBoxWidth;s[20]=(this.visible?1:0);s[21]=this.width;s[22]=this.x;s[23]=this.y;
}
function _ZEN_SVGComponent_rect_getSettings(s)
{
	s['name'] = 'string';
	s['rx'] = 'length';
	s['style'] = 'svgStyle';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_rect_renderContents() {
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('id',this.makeId('rect'));
rect.setAttribute('class','rect');
rect.setAttribute('x',0);
rect.setAttribute('y',0);
rect.setAttribute('width',this.width);
rect.setAttribute('height',this.height);
rect.setAttribute('rx',this.rx);
rect.setAttribute('style',this.style);
this.svgGroup.appendChild(rect);
}

function _ZEN_SVGComponent_rect_setProperty(property,value,value2) {
switch(property) {
case 'rx':
case 'style':
this[property] = value;
var el = this.findSVGElement('rect');
if (el) {
el.setAttribute(property,value);
}
break;
case 'width':
case 'height':
var el = this.findSVGElement('rect');
if (el) {
el.setAttribute(property,value);
}
return this.invokeSuper('setProperty',arguments);
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}
function _ZEN_SVGComponent_rect__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_rect.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_rect.prototype;
	p.constructor = _ZEN_SVGComponent_rect;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.rect';
	p._type = 'rect';
	p.serialize = _ZEN_SVGComponent_rect_serialize;
	p.getSettings = _ZEN_SVGComponent_rect_getSettings;
	p.renderContents = _ZEN_SVGComponent_rect_renderContents;
	p.setProperty = _ZEN_SVGComponent_rect_setProperty;
}

// ================================================================================
_zenClassIdx['sprite'] = '_ZEN_SVGComponent_sprite';
function _ZEN_SVGComponent_sprite(index,id) {
	if (index>=0) {_ZEN_SVGComponent_sprite__init(this,index,id);}
}

function _ZEN_SVGComponent_sprite__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.caption = '';
	o.ports = new Array();
	o.rx = '0';
	o.style = '';
}
function _ZEN_SVGComponent_sprite_serialize(set,s)
{
	s[0]='2135105105';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=(this.boundless?1:0);s[8]=this.caption;s[9]=this.height;s[10]=(this.hidden?1:0);s[11]=this.onclick;s[12]=this.onupdate;s[13]=set.serializeList(this,this.ports,true,'ports');s[14]=this.position;s[15]=this.preserveAspectRatio;s[16]=this.renderFlag;s[17]=this.rx;s[18]=this.style;s[19]=this.tuple;s[20]=this.viewBoxHeight;s[21]=this.viewBoxWidth;s[22]=(this.visible?1:0);s[23]=this.width;s[24]=this.x;s[25]=this.y;
}
function _ZEN_SVGComponent_sprite_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['ports'] = 'string';
	s['rx'] = 'integer';
	s['style'] = 'svgStyle';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_sprite_createPort(type,x,y) {
var port = zenPage.createComponent('port');
if (port) {
port.type = type;
port.x = x;
port.y = y;
port._sprite = this;
this.ports[this.ports.length] = port;
port.renderPort(this.svgGroup);
}
}

function _ZEN_SVGComponent_sprite_createPorts() {
this.createPort('input',this.width/2,5);
this.createPort('output',this.width/2,this.height-5);
this.createPort('input2',5,this.height/2);
this.createPort('output2',this.width-5,this.height/2);
}

function _ZEN_SVGComponent_sprite_getPort(portno) {
return this.ports[portno];
}

function _ZEN_SVGComponent_sprite_renderContents() {
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('class','spriteShadow');
rect.setAttribute('rx',this.rx);
rect.setAttribute('x',12);
rect.setAttribute('y',12);
rect.setAttribute('width',this.width-20);
rect.setAttribute('height',this.height-20);
this._svgShadowRect = rect;
this.svgGroup.appendChild(rect);
var rect = this.document.createElementNS(SVGNS,'rect');
rect.setAttribute('class','sprite');
rect.setAttribute('style',this.style);
rect.setAttribute('rx',this.rx);
rect.setAttribute('x',10);
rect.setAttribute('y',10);
rect.setAttribute('width',this.width-20);
rect.setAttribute('height',this.height-20);
this._svgShape = rect;
this.svgGroup.appendChild(rect);
var caption = this.document.createElementNS(SVGNS,'text');
caption.setAttribute('id',this.makeId('caption'));
caption.setAttribute('class','sprite-caption');
caption.setAttribute('x',this.width / 2);
caption.setAttribute('y',this.height / 2);
caption.setAttribute('text-anchor','middle');
var textNode = this.document.createTextNode(this.caption);
caption.appendChild(textNode);
this.svgGroup.appendChild(caption);
this._caption = caption;
this.createPorts();
}

function _ZEN_SVGComponent_sprite_setPositionHandler() {
this.updateConnectors();
}

function _ZEN_SVGComponent_sprite_setProperty(property,value,value2) {
switch(property) {
case 'style':
this.style = value;
if (this._svgShape) {
this._svgShape.setAttribute('style',this.style);
}
break;
case 'caption':
this.caption = value;
this.setTextNode('caption',this.caption);
break;
case 'rx':
this.rx = parseInt(value,10);
if (this._svgShape) {
this._svgShape.setAttribute('rx',this.rx);
}
if (this._svgShadowRect) {
this._svgShadowRect.setAttribute('rx',this.rx);
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_sprite_setSizeHandler() {
if (this._svgShape) {
this._svgShape.setAttribute('x',10);
this._svgShape.setAttribute('y',10);
this._svgShape.setAttribute('width',this.width-20);
this._svgShape.setAttribute('height',this.height-20);
if (this._svgShadowRect) {
this._svgShadowRect.setAttribute('x',12);
this._svgShadowRect.setAttribute('y',12);
this._svgShadowRect.setAttribute('width',this.width-20);
this._svgShadowRect.setAttribute('height',this.height-20);
}
if (this._caption) {
this._caption.setAttribute('x',this.width / 2);
this._caption.setAttribute('y',this.height / 2);
}
var port;
port = this.getPort(0);
if (port) {
port.setProperty('x',this.width/2);
}
port = this.getPort(1);
if (port) {
port.setProperty('x',this.width/2);
port.setProperty('y',this.height - 5);
}
port = this.getPort(2);
if (port) {
port.setProperty('x',5);
port.setProperty('y',this.height/2);
}
port = this.getPort(3);
if (port) {
port.setProperty('x',this.width-5);
port.setProperty('y',this.height/2);
}
}
this.updateConnectors();
}

function _ZEN_SVGComponent_sprite_updateConnectors() {
for (var n = 0; n < this.ports.length; n++) {
var port = this.ports[n];
port.updateConnectors();
}
}
function _ZEN_SVGComponent_sprite__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_sprite.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_sprite.prototype;
	p.constructor = _ZEN_SVGComponent_sprite;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.sprite';
	p._type = 'sprite';
	p.serialize = _ZEN_SVGComponent_sprite_serialize;
	p.getSettings = _ZEN_SVGComponent_sprite_getSettings;
	p.createPort = _ZEN_SVGComponent_sprite_createPort;
	p.createPorts = _ZEN_SVGComponent_sprite_createPorts;
	p.getPort = _ZEN_SVGComponent_sprite_getPort;
	p.renderContents = _ZEN_SVGComponent_sprite_renderContents;
	p.setPositionHandler = _ZEN_SVGComponent_sprite_setPositionHandler;
	p.setProperty = _ZEN_SVGComponent_sprite_setProperty;
	p.setSizeHandler = _ZEN_SVGComponent_sprite_setSizeHandler;
	p.updateConnectors = _ZEN_SVGComponent_sprite_updateConnectors;
}

// ================================================================================
_zenClassIdx['svgGroup'] = '_ZEN_SVGComponent_svgGroup';
function _ZEN_SVGComponent_svgGroup(index,id) {
	if (index>=0) {_ZEN_SVGComponent_svgGroup__init(this,index,id);}
}

function _ZEN_SVGComponent_svgGroup__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
	o.children = new Array();
	o.disabled = false;
	o.layout = '';
}
function _ZEN_SVGComponent_svgGroup_serialize(set,s)
{
	s[0]='431160643';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=(this.boundless?1:0);s[8]=set.serializeList(this,this.children,true,'children');s[9]=(this.disabled?1:0);s[10]=this.height;s[11]=(this.hidden?1:0);s[12]=this.layout;s[13]=this.onclick;s[14]=this.onupdate;s[15]=this.position;s[16]=this.preserveAspectRatio;s[17]=this.renderFlag;s[18]=this.tuple;s[19]=this.viewBoxHeight;s[20]=this.viewBoxWidth;s[21]=(this.visible?1:0);s[22]=this.width;s[23]=this.x;s[24]=this.y;
}
function _ZEN_SVGComponent_svgGroup_getSettings(s)
{
	s['name'] = 'string';
	s['disabled'] = 'boolean';
	s['layout'] = 'enum:vertical,horizontal,none';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_svgGroup_addChild(component) {
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

function _ZEN_SVGComponent_svgGroup_layoutChildren() {
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

function _ZEN_SVGComponent_svgGroup_removeChild(component) {
zenPage.deleteComponent(component);
}

function _ZEN_SVGComponent_svgGroup_renderSVG(document,parent) {
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

function _ZEN_SVGComponent_svgGroup_setBoundingBox(width,height) {
width = parseInt(width,10);
height = parseInt(height,10);
if (width != this.width || height != this.height) {
this.setSize(width,height);
this.parent.layoutChildren();
}
}

function _ZEN_SVGComponent_svgGroup_setOverlayMode(mode) {
this.overlayMode = mode;
for (var n = 0; n < this.children.length; n++) {
this.children[n].setOverlayMode(mode);
}
}

function _ZEN_SVGComponent_svgGroup_setProperty(property,value,value2) {
switch(property) {
case 'layout':
if (this.layout != value) {
this.layout = value;
this.layoutChildren();
}
break;
case 'width':
case 'height':
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_svgGroup_setPropertyAll(property,value,value2) {
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
function _ZEN_SVGComponent_svgGroup__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_svgGroup.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_svgGroup.prototype;
	p.constructor = _ZEN_SVGComponent_svgGroup;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.svgGroup';
	p._type = 'svgGroup';
	p.serialize = _ZEN_SVGComponent_svgGroup_serialize;
	p.getSettings = _ZEN_SVGComponent_svgGroup_getSettings;
	p.addChild = _ZEN_SVGComponent_svgGroup_addChild;
	p.layoutChildren = _ZEN_SVGComponent_svgGroup_layoutChildren;
	p.removeChild = _ZEN_SVGComponent_svgGroup_removeChild;
	p.renderSVG = _ZEN_SVGComponent_svgGroup_renderSVG;
	p.setBoundingBox = _ZEN_SVGComponent_svgGroup_setBoundingBox;
	p.setOverlayMode = _ZEN_SVGComponent_svgGroup_setOverlayMode;
	p.setProperty = _ZEN_SVGComponent_svgGroup_setProperty;
	p.setPropertyAll = _ZEN_SVGComponent_svgGroup_setPropertyAll;
}

// ================================================================================
_zenClassIdx['svgSpacer'] = '_ZEN_SVGComponent_svgSpacer';
function _ZEN_SVGComponent_svgSpacer(index,id) {
	if (index>=0) {_ZEN_SVGComponent_svgSpacer__init(this,index,id);}
}

function _ZEN_SVGComponent_svgSpacer__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgComponent__init) ?zenMaster._ZEN_SVGComponent_svgComponent__init(o,index,id):_ZEN_SVGComponent_svgComponent__init(o,index,id);
}
function _ZEN_SVGComponent_svgSpacer_serialize(set,s)
{
	s[0]='1175723986';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=(this.boundless?1:0);s[8]=this.height;s[9]=(this.hidden?1:0);s[10]=this.onclick;s[11]=this.onupdate;s[12]=this.position;s[13]=this.preserveAspectRatio;s[14]=this.renderFlag;s[15]=this.tuple;s[16]=this.viewBoxHeight;s[17]=this.viewBoxWidth;s[18]=(this.visible?1:0);s[19]=this.width;s[20]=this.x;s[21]=this.y;
}
function _ZEN_SVGComponent_svgSpacer_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_SVGComponent_svgSpacer__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgComponent');
	_ZEN_SVGComponent_svgSpacer.prototype = zenCreate('_ZEN_SVGComponent_svgComponent',-1);
	var p = _ZEN_SVGComponent_svgSpacer.prototype;
	p.constructor = _ZEN_SVGComponent_svgSpacer;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgComponent) ? zenMaster._ZEN_SVGComponent_svgComponent.prototype:_ZEN_SVGComponent_svgComponent.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.svgSpacer';
	p._type = 'svgSpacer';
	p.serialize = _ZEN_SVGComponent_svgSpacer_serialize;
	p.getSettings = _ZEN_SVGComponent_svgSpacer_getSettings;
}

// ================================================================================
_zenClassIdx['svgObject'] = '_ZEN_SVGComponent_svgObject';
function _ZEN_SVGComponent_svgObject(index,id) {
	if (index>=0) {_ZEN_SVGComponent_svgObject__init(this,index,id);}
}

function _ZEN_SVGComponent_svgObject__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
}
function _ZEN_SVGComponent_svgObject_serialize(set,s)
{
	s[0]='3874650476';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.onupdate;s[8]=this.renderFlag;s[9]=this.tuple;s[10]=(this.visible?1:0);
}
function _ZEN_SVGComponent_svgObject_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_SVGComponent_svgObject__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_SVGComponent_svgObject.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_SVGComponent_svgObject.prototype;
	p.constructor = _ZEN_SVGComponent_svgObject;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.svgObject';
	p._type = 'svgObject';
	p.serialize = _ZEN_SVGComponent_svgObject_serialize;
	p.getSettings = _ZEN_SVGComponent_svgObject_getSettings;
}

// ================================================================================
_zenClassIdx['connector'] = '_ZEN_SVGComponent_connector';
function _ZEN_SVGComponent_connector(index,id) {
	if (index>=0) {_ZEN_SVGComponent_connector__init(this,index,id);}
}

function _ZEN_SVGComponent_connector__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgObject__init) ?zenMaster._ZEN_SVGComponent_svgObject__init(o,index,id):_ZEN_SVGComponent_svgObject__init(o,index,id);
	o.inputs = new Array();
	o.outputs = new Array();
	o.style = '';
}
function _ZEN_SVGComponent_connector_serialize(set,s)
{
	s[0]='934959352';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=set.serializeList(this,this.inputs,true,'inputs');s[8]=this.onupdate;s[9]=set.serializeList(this,this.outputs,true,'outputs');s[10]=this.renderFlag;s[11]=this.style;s[12]=this.tuple;s[13]=(this.visible?1:0);
}
function _ZEN_SVGComponent_connector_getSettings(s)
{
	s['name'] = 'string';
	s['inputs'] = 'string';
	s['outputs'] = 'string';
	s['style'] = 'style';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_connector_addInput(sprite,portno) {
if (this.inputs.length < this.getMaxInputs()) {
var port = sprite.getPort(portno);
if (port) {
if (port.addConnector(this)) {
this.inputs[this.inputs.length] = port;
this.updateConnector();
}
}
}
}

function _ZEN_SVGComponent_connector_addOutput(sprite,portno) {
if (this.outputs.length < this.getMaxOutputs()) {
var port = sprite.getPort(portno);
if (port) {
if (port.addConnector(this)) {
this.outputs[this.outputs.length] = port;
this.updateConnector();
}
}
}
}

function _ZEN_SVGComponent_connector_getMaxInputs() {
return 5;
}

function _ZEN_SVGComponent_connector_getMaxOutputs() {
return 5;
}

function _ZEN_SVGComponent_connector_renderConnector(canvas) {
if (null == this._svgPath) {
this._svgPath = canvas.document.createElementNS(SVGNS,'path');
this._svgPath.setAttribute('class','connector');
this._svgPath.setAttribute('style',this.style);
this._svgPath.setAttribute('d','');
var underGroup = canvas.document.getElementById('zenUnderlay');
zenASSERT(underGroup,'Unable to find svg underlay group for the page.',arguments);
underGroup.appendChild(this._svgPath);
}
this.updateConnector();
}

function _ZEN_SVGComponent_connector_setProperty(property,value,value2) {
switch(property) {
case 'style':
this.style = value;
if (this._svgPath) {
this._svgPath.setAttribute('style',this.style);
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_SVGComponent_connector_updateConnector() {
if (null != this._svgPath) {
var d = '';
if (this.outputs.length > 0 && this.inputs.length > 0) {
var tsx = 0,tsy = 0;
var sx = new Array(this.outputs.length);
var sy = new Array(this.outputs.length);
for (var n = 0; n < this.outputs.length; n++) {
var port = this.outputs[n];
var sprite = port._sprite;
var size = sprite.getSizeAbsolute();
sx[n] = parseFloat(size.x + port.x);
sy[n] = parseFloat(size.y + port.y);
tsx += sx[n];
tsy += sy[n];
}
tsx = tsx / this.outputs.length;
tsy = tsy / this.outputs.length;
var tex = 0,tey = 0;
var ex = new Array(this.inputs.length);
var ey = new Array(this.inputs.length);
for (var n = 0; n < this.inputs.length; n++) {
var port = this.inputs[n];
var sprite = port._sprite;
var size = sprite.getSizeAbsolute();
ex[n] = parseFloat(size.x + port.x);
ey[n] = parseFloat(size.y + port.y);
tex += ex[n];
tey += ey[n];
}
tex = tex / this.inputs.length;
tey = tey / this.inputs.length;
var m1x = tsx;
var m1y = (tey>tsy) ? tsy + (tey-tsy)/2 : tey + (tsy-tey)/2;
var m2x = tex;
var m2y = m1y;
for (var n = 0; n < this.outputs.length; n++) {
d += 'M ' + sx[n] + ' ' + sy[n] + ' L ' + m1x + ' ' + m1y + ' ';
}
for (var n = 0; n < this.inputs.length; n++) {
d += 'M ' + ex[n] + ' ' + ey[n] + ' L ' + m2x + ' ' + m2y + ' ';
}
d += 'M ' + m1x + ' ' + m1y + ' L ' + m2x + ' ' + m2y + ' ';
}
this._svgPath.setAttribute('d',d);
}
}
function _ZEN_SVGComponent_connector__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgObject');
	_ZEN_SVGComponent_connector.prototype = zenCreate('_ZEN_SVGComponent_svgObject',-1);
	var p = _ZEN_SVGComponent_connector.prototype;
	p.constructor = _ZEN_SVGComponent_connector;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgObject) ? zenMaster._ZEN_SVGComponent_svgObject.prototype:_ZEN_SVGComponent_svgObject.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.connector';
	p._type = 'connector';
	p.serialize = _ZEN_SVGComponent_connector_serialize;
	p.getSettings = _ZEN_SVGComponent_connector_getSettings;
	p.addInput = _ZEN_SVGComponent_connector_addInput;
	p.addOutput = _ZEN_SVGComponent_connector_addOutput;
	p.getMaxInputs = _ZEN_SVGComponent_connector_getMaxInputs;
	p.getMaxOutputs = _ZEN_SVGComponent_connector_getMaxOutputs;
	p.renderConnector = _ZEN_SVGComponent_connector_renderConnector;
	p.setProperty = _ZEN_SVGComponent_connector_setProperty;
	p.updateConnector = _ZEN_SVGComponent_connector_updateConnector;
}

// ================================================================================
_zenClassIdx['port'] = '_ZEN_SVGComponent_port';
function _ZEN_SVGComponent_port(index,id) {
	if (index>=0) {_ZEN_SVGComponent_port__init(this,index,id);}
}

function _ZEN_SVGComponent_port__init(o,index,id) {
	('undefined' == typeof _ZEN_SVGComponent_svgObject__init) ?zenMaster._ZEN_SVGComponent_svgObject__init(o,index,id):_ZEN_SVGComponent_svgObject__init(o,index,id);
	o.connectors = new Array();
	o.type = '';
	o.x = '0';
	o.y = '0';
}
function _ZEN_SVGComponent_port_serialize(set,s)
{
	s[0]='2166266508';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=set.serializeList(this,this.connectors,true,'connectors');s[8]=this.onupdate;s[9]=this.renderFlag;s[10]=this.tuple;s[11]=this.type;s[12]=(this.visible?1:0);s[13]=this.x;s[14]=this.y;
}
function _ZEN_SVGComponent_port_getSettings(s)
{
	s['name'] = 'string';
	s['connectors'] = 'string';
	s['type'] = 'enum:input,output';
	s['x'] = 'float';
	s['y'] = 'float';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_SVGComponent_port_addConnector(connector) {
this.connectors[this.connectors.length] = connector;
return true;
}

function _ZEN_SVGComponent_port_renderPort() {
if (this._sprite) {
var circle = this._sprite.document.createElementNS(SVGNS,'circle');
circle.setAttribute('class','input'==this.type?'inputPort':'outputPort');
circle.setAttribute('cx',this.x);
circle.setAttribute('cy',this.y);
circle.setAttribute('r',3);
this._svgShape = circle;
this._sprite.svgGroup.appendChild(this._svgShape);
}
}

function _ZEN_SVGComponent_port_setProperty(property,value,value2) {
var updateSprite = false;
switch(property) {
case 'type':
this.type = value;
break;
case 'x':
this.x = (value=='') ? '' : parseFloat(value);
if (this._svgShape) {
this._svgShape.setAttribute('cx',this.x);
this.updateConnectors();
}
break;
case 'y':
this.y = (value=='') ? '' : parseFloat(value);
if (this._svgShape) {
this._svgShape.setAttribute('cy',this.y);
this._sprite.updateConnectors();
}
break;
default:
return this.invokeSuper('setProperty',arguments);
}
if (updateSprite && this._sprite) {
this._sprite.render();
}
return true;
}

function _ZEN_SVGComponent_port_updateConnectors() {
for (var n = 0; n < this.connectors.length; n++) {
var connector = this.connectors[n];
connector.updateConnector();
}
}
function _ZEN_SVGComponent_port__Loader() {
	zenLoadClass('_ZEN_SVGComponent_svgObject');
	_ZEN_SVGComponent_port.prototype = zenCreate('_ZEN_SVGComponent_svgObject',-1);
	var p = _ZEN_SVGComponent_port.prototype;
	p.constructor = _ZEN_SVGComponent_port;
	p.superClass = ('undefined' == typeof _ZEN_SVGComponent_svgObject) ? zenMaster._ZEN_SVGComponent_svgObject.prototype:_ZEN_SVGComponent_svgObject.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.SVGComponent.port';
	p._type = 'port';
	p.serialize = _ZEN_SVGComponent_port_serialize;
	p.getSettings = _ZEN_SVGComponent_port_getSettings;
	p.addConnector = _ZEN_SVGComponent_port_addConnector;
	p.renderPort = _ZEN_SVGComponent_port_renderPort;
	p.setProperty = _ZEN_SVGComponent_port_setProperty;
	p.updateConnectors = _ZEN_SVGComponent_port_updateConnectors;
}
/* EOF */