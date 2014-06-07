/*** ZEN Client Class Definitions ***/
/*** Package:   %ZEN.Auxiliary ***/
/*** Namespace:   ^^u:\kit\little\release\mgr\ ***/
/*** Generated: 2009-05-12 12:38:28 ***/

// version number: must match %ZENVersion
js_ZEN_Auxiliary = 14;

// ================================================================================
_zenClassIdx['axis'] = '_ZEN_Auxiliary_axis';
function _ZEN_Auxiliary_axis(index,id) {
	if (index>=0) {_ZEN_Auxiliary_axis__init(this,index,id);}
}

function _ZEN_Auxiliary_axis__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.baseValue = '';
	o.labelAngle = '0';
	o.labelStyle = '';
	o.labelUnits = '';
	o.majorGridLines = true;
	o.majorGridStyle = '';
	o.majorUnits = '';
	o.maxValue = '';
	o.minValue = '';
	o.minorGridLines = false;
	o.minorGridStyle = '';
	o.minorUnits = '';
	o.title = '';
}
function _ZEN_Auxiliary_axis_serialize(set,s)
{
	s[0]='972858939';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.baseValue;s[8]=this.labelAngle;s[9]=this.labelStyle;s[10]=this.labelUnits;s[11]=(this.majorGridLines?1:0);s[12]=this.majorGridStyle;s[13]=this.majorUnits;s[14]=this.maxValue;s[15]=this.minValue;s[16]=(this.minorGridLines?1:0);s[17]=this.minorGridStyle;s[18]=this.minorUnits;s[19]=this.onupdate;s[20]=this.renderFlag;s[21]=this.title;s[22]=this.tuple;s[23]=(this.visible?1:0);
}
function _ZEN_Auxiliary_axis_getSettings(s)
{
	s['name'] = 'string';
	s['baseValue'] = 'float';
	s['labelAngle'] = 'float';
	s['labelStyle'] = 'svgStyle';
	s['labelUnits'] = 'float';
	s['majorGridLines'] = 'boolean';
	s['majorGridStyle'] = 'svgStyle';
	s['majorUnits'] = 'float';
	s['maxValue'] = 'float';
	s['minValue'] = 'float';
	s['minorGridLines'] = 'boolean';
	s['minorGridStyle'] = 'svgStyle';
	s['minorUnits'] = 'float';
	s['title'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Auxiliary_axis_setProperty(property,value,value2) {
var updateChart = false;
switch(property) {
case 'minValue':
case 'maxValue':
case 'baseValue':
case 'majorUnits':
case 'minorUnits':
case 'labelUnits':
case 'labelAngle':
this[property] = (value=='') ? '' : parseFloat(value);
updateChart = true;
break;
case 'majorGridLines':
case 'minorGridLines':
this[property] = value ? true : false;
updateChart = true;
break;
case 'labelStyle':
case 'majorGridStyle':
case 'minorGridStyle':
case 'title':
this[property] = value;
updateChart = true;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
if (updateChart && !zenIsMissing(this.parent)) {
this.parent.render();
}
return true;
}
function _ZEN_Auxiliary_axis__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_axis.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_axis.prototype;
	p.constructor = _ZEN_Auxiliary_axis;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.axis';
	p._type = 'axis';
	p.serialize = _ZEN_Auxiliary_axis_serialize;
	p.getSettings = _ZEN_Auxiliary_axis_getSettings;
	p.setProperty = _ZEN_Auxiliary_axis_setProperty;
}

// ================================================================================
_zenClassIdx['column'] = '_ZEN_Auxiliary_column';
function _ZEN_Auxiliary_column(index,id) {
	if (index>=0) {_ZEN_Auxiliary_column__init(this,index,id);}
}

function _ZEN_Auxiliary_column__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.OnDrawCell = '';
	o.OnDrawFilter = '';
	o.actualColName = '';
	o.cellTitle = '';
	o.colExpression = '';
	o.colName = '';
	o.filterEnum = '';
	o.filterEnumDisplay = '';
	o.filterLabel = '';
	o.filterOp = '';
	o.filterQuery = '';
	o.filterTitle = '';
	o.filterType = '';
	o.filterValue = '';
	o.header = '';
	o.hidden = false;
	o.link = '';
	o.linkCaption = '';
	o.linkConfirm = '';
	o.seed = '';
	o.style = '';
	o.title = '';
	o.width = '';
}
function _ZEN_Auxiliary_column_serialize(set,s)
{
	s[0]='2400264172';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.OnDrawCell;s[7]=this.OnDrawFilter;s[8]=this.actualColName;s[9]=this.aux;s[10]=this.cellTitle;s[11]=this.colExpression;s[12]=this.colName;s[13]=this.filterEnum;s[14]=this.filterEnumDisplay;s[15]=this.filterLabel;s[16]=this.filterOp;s[17]=this.filterQuery;s[18]=this.filterTitle;s[19]=this.filterType;s[20]=this.filterValue;s[21]=this.header;s[22]=(this.hidden?1:0);s[23]=this.link;s[24]=this.linkCaption;s[25]=this.linkConfirm;s[26]=this.onupdate;s[27]=this.renderFlag;s[28]=this.seed;s[29]=this.style;s[30]=this.title;s[31]=this.tuple;s[32]=(this.visible?1:0);s[33]=this.width;
}
function _ZEN_Auxiliary_column_getSettings(s)
{
	s['name'] = 'string';
	s['actualColName'] = 'string';
	s['cellTitle'] = 'caption';
	s['colExpression'] = 'string';
	s['colName'] = 'string';
	s['filterEnum'] = 'csv';
	s['filterEnumDisplay'] = 'csv';
	s['filterLabel'] = 'caption';
	s['filterOp'] = 'enum:%STARTSWITH,=,>=,<=,<>,>,<,[,IN,BETWEEN,%CONTAINS';
	s['filterQuery'] = 'csv';
	s['filterTitle'] = 'caption';
	s['filterType'] = 'enum:text,date,datetime,enum,query,custom';
	s['filterValue'] = 'value';
	s['header'] = 'caption';
	s['hidden'] = 'boolean';
	s['link'] = 'uri';
	s['linkCaption'] = 'caption';
	s['linkConfirm'] = 'caption';
	s['seed'] = 'string';
	s['style'] = 'style';
	s['title'] = 'caption';
	s['width'] = 'length';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Auxiliary_column_getColName() {
return (''==this.actualColName) ? this.colName : this.actualColName;
}
function _ZEN_Auxiliary_column__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_column.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_column.prototype;
	p.constructor = _ZEN_Auxiliary_column;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.column';
	p._type = 'column';
	p.serialize = _ZEN_Auxiliary_column_serialize;
	p.getSettings = _ZEN_Auxiliary_column_getSettings;
	p.getColName = _ZEN_Auxiliary_column_getColName;
}

// ================================================================================
_zenClassIdx['condition'] = '_ZEN_Auxiliary_condition';
function _ZEN_Auxiliary_condition(index,id) {
	if (index>=0) {_ZEN_Auxiliary_condition__init(this,index,id);}
}

function _ZEN_Auxiliary_condition__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.cellStyle = '';
	o.colName = '';
	o.predicate = 'EQ';
	o.rowStyle = '';
	o.targetCol = '';
	o.value = '';
}
function _ZEN_Auxiliary_condition_serialize(set,s)
{
	s[0]='926988228';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.cellStyle;s[8]=this.colName;s[9]=this.onupdate;s[10]=this.predicate;s[11]=this.renderFlag;s[12]=this.rowStyle;s[13]=this.targetCol;s[14]=this.tuple;s[15]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[16]=(this.visible?1:0);
}
function _ZEN_Auxiliary_condition_getSettings(s)
{
	s['name'] = 'string';
	s['cellStyle'] = 'style';
	s['colName'] = 'string';
	s['predicate'] = 'enum:GT,EQ,LT,NEQ,GTEQ,LTEQ,EXTEQ,STARTSWITH,CONTAINS';
	s['rowStyle'] = 'style';
	s['targetCol'] = 'string';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_Auxiliary_condition__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_condition.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_condition.prototype;
	p.constructor = _ZEN_Auxiliary_condition;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.condition';
	p._type = 'condition';
	p.serialize = _ZEN_Auxiliary_condition_serialize;
	p.getSettings = _ZEN_Auxiliary_condition_getSettings;
}

// ================================================================================
_zenClassIdx['dataBag'] = '_ZEN_Auxiliary_dataBag';
function _ZEN_Auxiliary_dataBag(index,id) {
	if (index>=0) {_ZEN_Auxiliary_dataBag__init(this,index,id);}
}

function _ZEN_Auxiliary_dataBag__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.clientData = new Array();
	o.labelList = '';
	o.propertyList = '';
	o.propertyTypes = '';
	o.seriesCount = '1';
	o.seriesNames = '';
}
function _ZEN_Auxiliary_dataBag_serialize(set,s)
{
	s[0]='3918096302';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=zenArrayToList(this.clientData,'\x05');s[8]=this.labelList;s[9]=this.onupdate;s[10]=this.propertyList;s[11]=this.propertyTypes;s[12]=this.renderFlag;s[13]=this.seriesCount;s[14]=this.seriesNames;s[15]=this.tuple;s[16]=(this.visible?1:0);
}
function _ZEN_Auxiliary_dataBag_getSettings(s)
{
	s['name'] = 'string';
	s['labelList'] = 'csv';
	s['propertyList'] = 'csv';
	s['propertyTypes'] = 'csv';
	s['seriesNames'] = 'csv';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Auxiliary_dataBag_clear() {
for (var n = 0; n < this.clientData.length; n++) {
this.clientData[n] = '';
}
}

function _ZEN_Auxiliary_dataBag_getDimSize(dim) {
switch(dim) {
case 1:
return this.getPropertyCount();
case 2:
return this.getSeriesCount();
}
return 0;
}

function _ZEN_Auxiliary_dataBag_getPropertyCount() {
return this.clientData ? (Math.floor(this.clientData.length / this.seriesCount)) : 0;
}

function _ZEN_Auxiliary_dataBag_getPropertyIndex(property) {
if (''==this.propertyList || ''==property) { return -1; }
if (null == this._propertyIndex) {
this._propertyIndex = new Object();
var props = this.propertyList.split(',');
for (var n=0; n < props.length; n++) {
this._propertyIndex[props[n].split(':')[0]] = n;
}
}
return this._propertyIndex[property];
}

function _ZEN_Auxiliary_dataBag_getPropertyLabel(n) {
if ('' == this.labelList) { return ''; }
var labels = this.labelList.split(',');
var lbl = (null == labels[n]) ? '' : labels[n].split(':')[0];
return ('' == lbl) ? this.getPropertyName(n) : lbl;
}

function _ZEN_Auxiliary_dataBag_getPropertyName(n) {
if (''==this.propertyList) { return ''; }
var props = this.propertyList.split(',');
return (null == props[n]) ? '' : props[n].split(':')[0];
}

function _ZEN_Auxiliary_dataBag_getPropertyType(n) {
if ('' == this.propertyTypes) { return ''; }
var props = this.propertyTypes.split(',');
return (null == props[n]) ? '' : props[n].split(':')[0];
}

function _ZEN_Auxiliary_dataBag_getSeriesCount() {
return this.seriesCount;
}

function _ZEN_Auxiliary_dataBag_getSeriesLabel(n) {
if ('' == this.seriesNames) { return ('Series ' + (n+1)); }
var labels = this.seriesNames.split(',');
var lbl = (null == labels[n]) ? '' : labels[n].split(':')[0];
return ('' == lbl) ? ('Series ' + (n+1)) : lbl;
}

function _ZEN_Auxiliary_dataBag_getValue(property,series) {
series = (null == series) ? 0 : series;
var data = null;
var index = this.getPropertyIndex(property);
if (index>=0) {
var idx = index + (series * this.getPropertyCount());
data = this.clientData[idx];
}
return data;
}

function _ZEN_Auxiliary_dataBag_getValueByPosition(n,series) {
series = (null == series) ? 0 : series;
var idx = n + (series * this.getPropertyCount());
return this.clientData[idx];
}

function _ZEN_Auxiliary_dataBag_getValuesAsArrays() {
var data = new Array(this.seriesCount);
var pc = this.getPropertyCount();
var idx = 0;
for (var i = 0; i < this.seriesCount; i++) {
data[i] = new Array(pc);
for (var j = 0; j < pc; j++) {
data[i][j] = this.clientData[idx++];
}
}
return data;
}

function _ZEN_Auxiliary_dataBag_getValuesAsObject(series) {
if (''==this.propertyList) { return null; }
var obj = new zenProxy();
var props = this.propertyList.split(',');
for (var n = 0; n < props.length; n++) {
if (props[n] && props[n]!='') {
var prop = props[n].split(':')[0];
obj[prop] = this.getValue(prop, series);
}
}
return obj;
}

function _ZEN_Auxiliary_dataBag_setProperty(property,value,value2) {
switch(property) {
case 'propertyList':
if (this._propertyIndex) {
delete this._propertyIndex;
}
this.propertyList = value;
break;
case 'propertyTypes':
this.propertyTypes = value;
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Auxiliary_dataBag_setValue(property,value,series) {
var index = this.getPropertyIndex(property);
if (index>=0) {
series = (null == series) ? 0 : series;
this.clientData[index + (series * this.getPropertyCount())] = value;
}
}

function _ZEN_Auxiliary_dataBag_setValueByPosition(value,n,series) {
if (n>=0) {
series = (null == series) ? 0 : series;
var idx = n + (series * this.getPropertyCount());
this.clientData[idx] = value;
}
}
function _ZEN_Auxiliary_dataBag__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_dataBag.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_dataBag.prototype;
	p.constructor = _ZEN_Auxiliary_dataBag;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.dataBag';
	p._type = 'dataBag';
	p.serialize = _ZEN_Auxiliary_dataBag_serialize;
	p.getSettings = _ZEN_Auxiliary_dataBag_getSettings;
	p.clear = _ZEN_Auxiliary_dataBag_clear;
	p.getDimSize = _ZEN_Auxiliary_dataBag_getDimSize;
	p.getPropertyCount = _ZEN_Auxiliary_dataBag_getPropertyCount;
	p.getPropertyIndex = _ZEN_Auxiliary_dataBag_getPropertyIndex;
	p.getPropertyLabel = _ZEN_Auxiliary_dataBag_getPropertyLabel;
	p.getPropertyName = _ZEN_Auxiliary_dataBag_getPropertyName;
	p.getPropertyType = _ZEN_Auxiliary_dataBag_getPropertyType;
	p.getSeriesCount = _ZEN_Auxiliary_dataBag_getSeriesCount;
	p.getSeriesLabel = _ZEN_Auxiliary_dataBag_getSeriesLabel;
	p.getValue = _ZEN_Auxiliary_dataBag_getValue;
	p.getValueByPosition = _ZEN_Auxiliary_dataBag_getValueByPosition;
	p.getValuesAsArrays = _ZEN_Auxiliary_dataBag_getValuesAsArrays;
	p.getValuesAsObject = _ZEN_Auxiliary_dataBag_getValuesAsObject;
	p.setProperty = _ZEN_Auxiliary_dataBag_setProperty;
	p.setValue = _ZEN_Auxiliary_dataBag_setValue;
	p.setValueByPosition = _ZEN_Auxiliary_dataBag_setValueByPosition;
}

// ================================================================================
_zenClassIdx['dataSet'] = '_ZEN_Auxiliary_dataSet';
function _ZEN_Auxiliary_dataSet(index,id) {
	if (index>=0) {_ZEN_Auxiliary_dataSet__init(this,index,id);}
}

function _ZEN_Auxiliary_dataSet__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.clientData = new Array();
	o.clientLabels = new Array();
	o.clientSize = new Array();
	o.dimensions = '0';
}
function _ZEN_Auxiliary_dataSet_serialize(set,s)
{
	s[0]='3632646936';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=zenArrayToList(this.clientData,'\x05');s[8]=zenArrayToList(this.clientLabels,'\x05');s[9]=zenArrayToList(this.clientSize,'\x05');s[10]=this.dimensions;s[11]=this.onupdate;s[12]=this.renderFlag;s[13]=this.tuple;s[14]=(this.visible?1:0);
}
function _ZEN_Auxiliary_dataSet_getSettings(s)
{
	s['name'] = 'string';
	s['dimensions'] = 'integer';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Auxiliary_dataSet_clear() {
var cells;
switch (this.dimensions) {
case 0:
cells = 1;
break;
case 1:
cells = parseInt(this.clientSize[0],10);
break;
case 2:
cells = parseInt(this.clientSize[1],10) * parseInt(this.clientSize[0],10);
break;
case 3:
cells = parseInt(this.clientSize[2],10) * parseInt(this.clientSize[1],10) * parseInt(this.clientSize[0],10);
break;
}
for (var n = 0; n < this.clientData.length; n++) {
this.clientData[n] = '';
}
}

function _ZEN_Auxiliary_dataSet_getData(d1,d2,d3) {
var data = '';
switch(this.dimensions) {
case 0:
data = this.clientData[0];
break;
case 1:
var sz1 = parseInt(this.clientSize[0],10);
data = (d1<0||d1>=sz1||d2>0||d3>0)?'':this.clientData[d1];
break;
case 2:
var sz1 = parseInt(this.clientSize[0],10);
var sz2 = parseInt(this.clientSize[1],10);
data = (d1<0||d1>=sz1||d2<0||d2>=sz2||d3>0)?'':this.clientData[(d2*sz1)+d1];
break;
case 3:
var sz1 = parseInt(this.clientSize[0],10);
var sz2 = parseInt(this.clientSize[1],10);
var sz3 = parseInt(this.clientSize[2],10);
data = (d1<0||d1>=sz1||d2<0||d2>=sz2||d3<0||d3>=sz3)?'':this.clientData[(d3*sz2*sz1)+(d2*sz1)+d1];
break;
}
return (null == data) ? '' : data;
}

function _ZEN_Auxiliary_dataSet_getDimSize(dim) {
zenASSERT(dim>=1&&dim<=3,'dim must be between 1 and 3',arguments);
var sz = (null==this.clientSize[dim-1]) ? 1 : parseInt(this.clientSize[dim-1],10);
return (null == sz) ? 1 : sz;
}

function _ZEN_Auxiliary_dataSet_getDimensions() {
return this.dimensions;
}

function _ZEN_Auxiliary_dataSet_getLabel(n,dim) {
var label = '';
switch(dim) {
case 0:
label = this.clientLabels[0];
break;
case 1:
var sz1 = parseInt(this.clientSize[0],10);
label = (n<0||n>=sz1)?'':this.clientLabels[n];
break;
case 2:
var sz1 = parseInt(this.clientSize[0],10);
var sz2 = parseInt(this.clientSize[1],10);
label = (n<0||n>=sz2)?'':this.clientLabels[sz1+n];
break;
case 3:
var sz1 = parseInt(this.clientSize[0],10);
var sz2 = parseInt(this.clientSize[1],10);
var sz3 = parseInt(this.clientSize[2],10);
label = (n<0||n>=sz3)?'':this.clientLabels[sz2+sz1+n];
break;
}
return (null == label) ? '' : label;
}

function _ZEN_Auxiliary_dataSet_redim(dims,sz1,sz2,sz3) {
zenASSERT(dims>=0&&dims<=3,'dims is out of range',arguments);
sz1 = (null==sz1 || parseInt(sz1,10) < 1) ? 1 : parseInt(sz1,10);
sz2 = (null==sz2 || parseInt(sz2,10) < 1) ? 1 : parseInt(sz2,10);
sz3 = (null==sz3 || parseInt(sz3,10) < 1) ? 1 : parseInt(sz3,10);
var newData = new Array();
var newSize = new Array();
var newLabels = new Array();
switch (dims) {
case 0:
newData[0] = this.getData(1,1,1);
break;
case 1:
for (var d1=0; d1<sz1; d1++) {
newData[d1] = this.getData(d1);
}
newSize[0] = sz1;
break;
case 2:
for (var d2=0; d2<sz2; d2++) {
for (var d1=0; d1<sz1; d1++) {
newData[(d2*sz1)+d1] = this.getData(d1,d2);
}
}
newSize[0] = sz1;
newSize[1] = sz2;
break;
case 3:
for (var d3=0; d3<sz3; d3++) {
for (var d2=0; d2<sz2; d2++) {
for (var d1=0; d1<sz1; d1++) {
newData[(d3*sz2*sz1)+(d2*sz1)+d1] = this.getData(d1,d2,d3);
}
}
}
newSize[0] = sz1;
newSize[1] = sz2;
newSize[2] = sz3;
break;
}
var lbl = 0;
if (dims > 0) {
for (var n=0; n<sz1; n++) {
newLabels[lbl++] = this.getLabel(n,1);
}
}
if (dims > 1) {
for (var n=0; n<sz2; n++) {
newLabels[lbl++] = this.getLabel(n,2);
}
}
if (dims > 2) {
for (var n=0; n<sz3; n++) {
newLabels[lbl++] = this.getLabel(n,3);
}
}
this.dimensions = dims;
this.clientData = newData;
this.clientSize = newSize;
this.clientLabels = newLabels;
}

function _ZEN_Auxiliary_dataSet_setData(value,d1,d2,d3) {
var sz1 = parseInt(this.clientSize[0],10);
var sz2 = parseInt(this.clientSize[1],10);
var sz3 = parseInt(this.clientSize[2],10);
switch(this.dimensions) {
case 0:
this.clientData[0] = value;
break;
case 1:
if (d1>=0 && d1 < sz1) {
this.clientData[d1] = value;
}
break;
case 2:
if (d1>=0 && d1 < sz1 && d2>=0 && d2 < sz2) {
this.clientData[(d2*sz1)+d1] = value;
}
break;
case 3:
if (d1>=0 && d1 < sz1 && d2>=0 && d2 < sz2 && d3>=0 && d3 < sz3) {
this.clientData[(d3*sz2*sz1)+(d2*sz1)+d1] = value;
}
break;
}
}

function _ZEN_Auxiliary_dataSet_setLabel(label,n,dim) {
var sz1 = parseInt(this.clientSize[0],10);
var sz2 = parseInt(this.clientSize[1],10);
var sz3 = parseInt(this.clientSize[2],10);
switch(dim) {
case 0:
this.clientLabels[0] = label;
break;
case 1:
if (n>=0&&n<sz1) {
this.clientLabels[n] = label;
}
break;
case 2:
if (n>=0&&n<sz2) {
this.clientLabels[sz1+n] = label;
}
break;
case 3:
if (n>=0&&n<sz3) {
this.clientLabels[sz2+sz1+n] = label;
}
break;
}
return (null == label) ? '' : label;
}

function _ZEN_Auxiliary_dataSet_swap(dim,item1,item2,labels) {
zenASSERT(dim>=1&&dim<=this.dimensions,'dim must be between 1 and the current number of dimensions',arguments);
var temp;
if (item1 < 0 || item2 < 0 ||
item1 >= this.getDimSize(dim) || item2 >= this.getDimSize(dim)) {
return;
}
switch (this.dimensions) {
case 1:
temp = this.getData(item1);
this.setData(this.getData(item2),item1);
this.setData(temp,item2);
if (labels) {
temp = this.getLabel(item1,dim);
this.setLabel(this.getLabel(item2,dim),item1);
this.setLabel(temp,item2,dim);
}
break;
case 2:
switch (dim) {
case 1:
var size = this.getDimSize(2);
for (var n = 0; n < size; n++) {
temp = this.getData(item1,n);
this.setData(this.getData(item2,n),item1,n);
this.setData(temp,item2,n);
}
break;
case 2:
var size = this.getDimSize(1);
for (var n = 0; n < size; n++) {
temp = this.getData(n,item1);
this.setData(this.getData(n,item2),n,item1);
this.setData(temp,n,item2);
}
break;
}
if (labels) {
temp = this.getLabel(item1,dim);
this.setLabel(this.getLabel(item2,dim),item1,dim);
this.setLabel(temp,item2,dim);
}
break;
case 3:
switch (dim) {
case 1:
var pages = this.getDimSize(3);
var size = this.getDimSize(2);
for (var pg = 0; pg < pages; pg++) {
for (var n = 0; n < size; n++) {
temp = this.getData(item1,n,pg);
this.setData(this.getData(item2,n,pg),item1,n,pg);
this.setData(temp,item2,n,pg);
}
}
break;
case 2:
var pages = this.getDimSize(3);
var size = this.getDimSize(1);
for (var pg = 0; pg < pages; pg++) {
for (var n = 0; n < size; n++) {
temp = this.getData(n,item1,pg);
this.setData(this.getData(n,item2,pg),n,item1,pg);
this.setData(temp,n,item2,pg);
}
}
break;
case 3:
var pages = this.getDimSize(2);
var size = this.getDimSize(1);
for (var pg = 0; pg < pages; pg++) {
for (var n = 0; n < size; n++) {
temp = this.getData(n,pg,item1);
this.setData(this.getData(n,pg,item2),n,pg,item1);
this.setData(temp,n,pg,item2);
}
}
break;
}
if (labels) {
temp = this.getLabel(item1,dim);
this.setLabel(this.getLabel(item2,dim),item1,dim);
this.setLabel(temp,item2,dim);
}
break;
}
}
function _ZEN_Auxiliary_dataSet__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_dataSet.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_dataSet.prototype;
	p.constructor = _ZEN_Auxiliary_dataSet;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.dataSet';
	p._type = 'dataSet';
	p.serialize = _ZEN_Auxiliary_dataSet_serialize;
	p.getSettings = _ZEN_Auxiliary_dataSet_getSettings;
	p.clear = _ZEN_Auxiliary_dataSet_clear;
	p.getData = _ZEN_Auxiliary_dataSet_getData;
	p.getDimSize = _ZEN_Auxiliary_dataSet_getDimSize;
	p.getDimensions = _ZEN_Auxiliary_dataSet_getDimensions;
	p.getLabel = _ZEN_Auxiliary_dataSet_getLabel;
	p.redim = _ZEN_Auxiliary_dataSet_redim;
	p.setData = _ZEN_Auxiliary_dataSet_setData;
	p.setLabel = _ZEN_Auxiliary_dataSet_setLabel;
	p.swap = _ZEN_Auxiliary_dataSet_swap;
}

// ================================================================================
_zenClassIdx['gridColumn'] = '_ZEN_Auxiliary_gridColumn';
function _ZEN_Auxiliary_gridColumn(index,id) {
	if (index>=0) {_ZEN_Auxiliary_gridColumn__init(this,index,id);}
}

function _ZEN_Auxiliary_gridColumn__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.columnName = '';
	o.hidden = false;
	o.label = '';
	o.readOnly = false;
	o.style = '';
	o.title = '';
	o.width = '';
}
function _ZEN_Auxiliary_gridColumn_serialize(set,s)
{
	s[0]='32283464';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.columnName;s[8]=(this.hidden?1:0);s[9]=this.label;s[10]=this.onupdate;s[11]=(this.readOnly?1:0);s[12]=this.renderFlag;s[13]=this.style;s[14]=this.title;s[15]=this.tuple;s[16]=(this.visible?1:0);s[17]=this.width;
}
function _ZEN_Auxiliary_gridColumn_getSettings(s)
{
	s['name'] = 'string';
	s['columnName'] = 'string';
	s['hidden'] = 'boolean';
	s['label'] = 'caption';
	s['readOnly'] = 'boolean';
	s['style'] = 'style';
	s['title'] = 'caption';
	s['width'] = 'length';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_Auxiliary_gridColumn__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_gridColumn.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_gridColumn.prototype;
	p.constructor = _ZEN_Auxiliary_gridColumn;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.gridColumn';
	p._type = 'gridColumn';
	p.serialize = _ZEN_Auxiliary_gridColumn_serialize;
	p.getSettings = _ZEN_Auxiliary_gridColumn_getSettings;
}

// ================================================================================
_zenClassIdx['gridRow'] = '_ZEN_Auxiliary_gridRow';
function _ZEN_Auxiliary_gridRow(index,id) {
	if (index>=0) {_ZEN_Auxiliary_gridRow__init(this,index,id);}
}

function _ZEN_Auxiliary_gridRow__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.height = '';
	o.hidden = false;
	o.label = '';
	o.readOnly = false;
	o.rowName = '';
	o.style = '';
	o.title = '';
}
function _ZEN_Auxiliary_gridRow_serialize(set,s)
{
	s[0]='3411284317';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.height;s[8]=(this.hidden?1:0);s[9]=this.label;s[10]=this.onupdate;s[11]=(this.readOnly?1:0);s[12]=this.renderFlag;s[13]=this.rowName;s[14]=this.style;s[15]=this.title;s[16]=this.tuple;s[17]=(this.visible?1:0);
}
function _ZEN_Auxiliary_gridRow_getSettings(s)
{
	s['name'] = 'string';
	s['height'] = 'length';
	s['hidden'] = 'boolean';
	s['label'] = 'caption';
	s['readOnly'] = 'boolean';
	s['rowName'] = 'string';
	s['style'] = 'style';
	s['title'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_Auxiliary_gridRow__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_gridRow.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_gridRow.prototype;
	p.constructor = _ZEN_Auxiliary_gridRow;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.gridRow';
	p._type = 'gridRow';
	p.serialize = _ZEN_Auxiliary_gridRow_serialize;
	p.getSettings = _ZEN_Auxiliary_gridRow_getSettings;
}

// ================================================================================
_zenClassIdx['locatorLink'] = '_ZEN_Auxiliary_locatorLink';
function _ZEN_Auxiliary_locatorLink(index,id) {
	if (index>=0) {_ZEN_Auxiliary_locatorLink__init(this,index,id);}
}

function _ZEN_Auxiliary_locatorLink__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.caption = '';
	o.href = '';
	o.title = '';
}
function _ZEN_Auxiliary_locatorLink_serialize(set,s)
{
	s[0]='677961751';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.caption;s[8]=this.href;s[9]=this.onupdate;s[10]=this.renderFlag;s[11]=this.title;s[12]=this.tuple;s[13]=(this.visible?1:0);
}
function _ZEN_Auxiliary_locatorLink_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'caption';
	s['href'] = 'uri';
	s['title'] = 'caption';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_Auxiliary_locatorLink__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_locatorLink.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_locatorLink.prototype;
	p.constructor = _ZEN_Auxiliary_locatorLink;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.locatorLink';
	p._type = 'locatorLink';
	p.serialize = _ZEN_Auxiliary_locatorLink_serialize;
	p.getSettings = _ZEN_Auxiliary_locatorLink_getSettings;
}

// ================================================================================
_zenClassIdx['option'] = '_ZEN_Auxiliary_option';
function _ZEN_Auxiliary_option(index,id) {
	if (index>=0) {_ZEN_Auxiliary_option__init(this,index,id);}
}

function _ZEN_Auxiliary_option__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.style = '';
	o.text = '';
	o.value = '';
}
function _ZEN_Auxiliary_option_serialize(set,s)
{
	s[0]='142189274';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.onupdate;s[8]=this.renderFlag;s[9]=this.style;s[10]=this.text;s[11]=this.tuple;s[12]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[13]=(this.visible?1:0);
}
function _ZEN_Auxiliary_option_getSettings(s)
{
	s['name'] = 'string';
	s['style'] = 'style';
	s['text'] = 'caption';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_Auxiliary_option__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_option.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_option.prototype;
	p.constructor = _ZEN_Auxiliary_option;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.option';
	p._type = 'option';
	p.serialize = _ZEN_Auxiliary_option_serialize;
	p.getSettings = _ZEN_Auxiliary_option_getSettings;
}

// ================================================================================
_zenClassIdx['parameter'] = '_ZEN_Auxiliary_parameter';
function _ZEN_Auxiliary_parameter(index,id) {
	if (index>=0) {_ZEN_Auxiliary_parameter__init(this,index,id);}
}

function _ZEN_Auxiliary_parameter__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.value = '';
}
function _ZEN_Auxiliary_parameter_serialize(set,s)
{
	s[0]='1426937607';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.onupdate;s[8]=this.renderFlag;s[9]=this.tuple;s[10]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[11]=(this.visible?1:0);
}
function _ZEN_Auxiliary_parameter_getSettings(s)
{
	s['name'] = 'string';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_Auxiliary_parameter__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_parameter.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_parameter.prototype;
	p.constructor = _ZEN_Auxiliary_parameter;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.parameter';
	p._type = 'parameter';
	p.serialize = _ZEN_Auxiliary_parameter_serialize;
	p.getSettings = _ZEN_Auxiliary_parameter_getSettings;
}

// ================================================================================
_zenClassIdx['radialNode'] = '_ZEN_Auxiliary_radialNode';
function _ZEN_Auxiliary_radialNode(index,id) {
	if (index>=0) {_ZEN_Auxiliary_radialNode__init(this,index,id);}
}

function _ZEN_Auxiliary_radialNode__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_object__init) ?zenMaster._ZEN_Component_object__init(o,index,id):_ZEN_Component_object__init(o,index,id);
	o.caption = '';
	o.onclick = '';
	o.style = '';
	o.value = '';
}
function _ZEN_Auxiliary_radialNode_serialize(set,s)
{
	s[0]='3102894841';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=this.aux;s[7]=this.caption;s[8]=this.onclick;s[9]=this.onupdate;s[10]=this.renderFlag;s[11]=this.style;s[12]=this.tuple;s[13]=('boolean'==typeof this.value?(this.value?1:0):this.value);s[14]=(this.visible?1:0);
}
function _ZEN_Auxiliary_radialNode_getSettings(s)
{
	s['name'] = 'string';
	s['caption'] = 'string';
	s['onclick'] = 'eventHandler';
	s['style'] = 'svgStyle';
	s['value'] = 'string';
	this.invokeSuper('getSettings',arguments);
}
function _ZEN_Auxiliary_radialNode__Loader() {
	zenLoadClass('_ZEN_Component_object');
	_ZEN_Auxiliary_radialNode.prototype = zenCreate('_ZEN_Component_object',-1);
	var p = _ZEN_Auxiliary_radialNode.prototype;
	p.constructor = _ZEN_Auxiliary_radialNode;
	p.superClass = ('undefined' == typeof _ZEN_Component_object) ? zenMaster._ZEN_Component_object.prototype:_ZEN_Component_object.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.radialNode';
	p._type = 'radialNode';
	p.serialize = _ZEN_Auxiliary_radialNode_serialize;
	p.getSettings = _ZEN_Auxiliary_radialNode_getSettings;
}

// ================================================================================
_zenClassIdx['dataController'] = '_ZEN_Auxiliary_dataController';
function _ZEN_Auxiliary_dataController(index,id) {
	if (index>=0) {_ZEN_Auxiliary_dataController__init(this,index,id);}
}

function _ZEN_Auxiliary_dataController__init(o,index,id) {
	('undefined' == typeof _ZEN_Component_component__init) ?zenMaster._ZEN_Component_component__init(o,index,id):_ZEN_Component_component__init(o,index,id);
	o.alertOnError = true;
	o.autoRefresh = '';
	o.dataBag = null;
	o.dataLoaded = false;
	o.dataReadOnly = false;
	o.defaultSeries = '1';
	o.modelChanged = true;
	o.modelClass = '';
	o.modelError = '';
	o.modelId = '';
	o.oncreate = '';
	o.ondelete = '';
	o.onerror = '';
	o.onnotifyController = '';
	o.onsave = '';
	o.readOnly = false;
	o.timerid = '';
	o.validationCode = '';
	o.visible = false;
}
function _ZEN_Auxiliary_dataController_serialize(set,s)
{
	s[0]='3339638501';s[1]=this.index;s[2]=this.id;s[3]=this.name;s[4]=set.addObject(this.parent,'parent');s[5]=set.addObject(this.composite,'composite');s[6]=(this.alertOnError?1:0);s[7]=this.align;s[8]=this.autoRefresh;s[9]=this.aux;s[10]=this.containerStyle;s[11]=set.addObject(this.dataBag,'dataBag');s[12]=(this.dataLoaded?1:0);s[13]=(this.dataReadOnly?1:0);s[14]=this.defaultSeries;s[15]=(this.dragEnabled?1:0);s[16]=(this.dropEnabled?1:0);s[17]=(this.dynamic?1:0);s[18]=this.enclosingClass;s[19]=this.enclosingStyle;s[20]=this.error;s[21]=this.height;s[22]=(this.hidden?1:0);s[23]=this.hint;s[24]=this.hintClass;s[25]=this.hintStyle;s[26]=this.label;s[27]=this.labelClass;s[28]=this.labelStyle;s[29]=(this.modelChanged?1:0);s[30]=this.modelClass;s[31]=this.modelError;s[32]=this.modelId;s[33]=this.onafterdrag;s[34]=this.onbeforedrag;s[35]=this.oncreate;s[36]=this.ondelete;s[37]=this.ondrag;s[38]=this.ondrop;s[39]=this.onerror;s[40]=this.onhide;s[41]=this.onnotifyController;s[42]=this.onrefresh;s[43]=this.onsave;s[44]=this.onshow;s[45]=this.onupdate;s[46]=this.overlayMode;s[47]=(this.readOnly?1:0);s[48]=this.renderFlag;s[49]=(this.showLabel?1:0);s[50]=this.slice;s[51]=this.timerid;s[52]=this.title;s[53]=this.tuple;s[54]=this.validationCode;s[55]=this.valign;s[56]=(this.visible?1:0);s[57]=this.width;
}
function _ZEN_Auxiliary_dataController_getSettings(s)
{
	s['name'] = 'string';
	s['alertOnError'] = 'boolean';
	s['autoRefresh'] = 'integer';
	s['defaultSeries'] = 'integer';
	s['modelClass'] = 'className';
	s['modelId'] = 'string';
	s['oncreate'] = 'eventHandler';
	s['ondelete'] = 'eventHandler';
	s['onerror'] = 'eventHandler';
	s['onnotifyController'] = 'eventHandler';
	s['onsave'] = 'eventHandler';
	s['readOnly'] = 'boolean';
	s['timerid'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

function _ZEN_Auxiliary_dataController_autoRefreshHandler() {
this.update();
this.startAutoRefresh();
}

function _ZEN_Auxiliary_dataController_clearAutoRefresh() {
if (this.timerid) {
window.clearTimeout(this.timerid);
this.timerid = null;
}
}

function _ZEN_Auxiliary_dataController_createNewObject() {
this.modelError = '';
this.dataLoaded = false;
if ('' == this.modelClass) {
return;
}
this.modelId = '';
var id = this.LoadFromServer();
this.dataLoaded = true;
zenInvokeCallbackMethod(this.oncreate,this,'oncreate');
this.sendEventToViews('dataChange');
}

function _ZEN_Auxiliary_dataController_deleteId(id) {
this.modelError = '';
if (this.isModelReadOnly() || '' == id) return false;
var ok = this.DeleteFromServer(id);
zenInvokeCallbackMethod(this.ondelete,this,'ondelete','id',id,'deleted',ok);
if (ok) {
if (this.modelId == id) {
this.modelId = '';
this.sendEventToViews('dataChange');
}
}
return ok;
}

function _ZEN_Auxiliary_dataController_execValidationCode(property,value) {
try {
if (this.dataLoaded && '' != this.validationCode) {
var code = this.validationCode + '\nreturn \'\'';
var func = new Function('property','value',code);
return func(property,value);
}
}
catch(ex) {
zenExceptionHandler(ex,arguments,'Error in dataModel validation code.\nProperty: ' + property);
}
return '';
}

function _ZEN_Auxiliary_dataController_getData(d1,d2,d3) {
if (!this.dataLoaded) {
return null;
}
return this.dataBag.getValueByPosition(parseInt(d1,10),(null==d2) ? 1 : parseInt(d2,10));
}

function _ZEN_Auxiliary_dataController_getDataAsArrays() {
if (!this.dataLoaded) {
return null;
}
return this.dataBag.getValuesAsArrays();
}

function _ZEN_Auxiliary_dataController_getDataAsObject(series) {
if (!this.dataLoaded) {
return null;
}
series = (null==series) ? 0 : series;
return this.dataBag.getValuesAsObject(series);
}

function _ZEN_Auxiliary_dataController_getDataByName(property) {
if (this.dataLoaded) {
switch(property) {
case '%id':
return this.modelId;
case '%series':
return this.defaultSeries;
default:
return this.dataBag.getValue(property,(this.defaultSeries-1));
}
}
return null;
}

function _ZEN_Auxiliary_dataController_getDimSize(dim) {
return this.dataBag.getDimSize(dim);
}

function _ZEN_Auxiliary_dataController_getDimensions() {
return 2;
}

function _ZEN_Auxiliary_dataController_getError() {
return this.modelError;
}

function _ZEN_Auxiliary_dataController_getLabel(n,dim) {
switch (dim) {
case 1:
return this.dataBag.getPropertyLabel(n);
case 2:
return this.dataBag.getSeriesLabel(n);
}
return '';
}

function _ZEN_Auxiliary_dataController_getModelClass() {
return this.modelClass;
}

function _ZEN_Auxiliary_dataController_getModelId() {
return this.modelId;
}

function _ZEN_Auxiliary_dataController_getPropertyName(n) {
return this.dataBag.getPropertyName(n);
}

function _ZEN_Auxiliary_dataController_getTypeByName(property) {
var type = '';
if (this.dataLoaded) {
var n = this.dataBag.getPropertyIndex(property);
if (n >= 0) {
type = this.dataBag.getPropertyType(n);
}
}
return type;
}

function _ZEN_Auxiliary_dataController_hasData() {
return this.dataLoaded;
}

function _ZEN_Auxiliary_dataController_invokeAction(action,data) {
this.modelError = '';
var ok = this.ExecuteAction(action,data);
}

function _ZEN_Auxiliary_dataController_isModelReadOnly() {
return this.dataReadOnly || this.readOnly;
}

function _ZEN_Auxiliary_dataController_isPropertyValid(property,value) {
var msg = '';
msg = this.execValidationCode(property, value);
return msg;
}

function _ZEN_Auxiliary_dataController_loadModel(force) {
this.modelError = '';
if ('' == this.modelClass) {
this.dataLoaded = false;
return;
}
if (force || !this.dataLoaded) {
var id = this.LoadFromServer();
this.modelId = id;
if ('' != this.modelError) {
zenInvokeCallbackMethod(this.onerror,this,'onerror');
}
}
}

function _ZEN_Auxiliary_dataController_notifyController(source,reason,data1,data2,data3) {
var ret = true;
if ('' != this.onnotifyController) {
ret = zenInvokeCallbackMethod(this.onnotifyController,this,'onnotifyController','reason',reason,'data1',data1,'data2',data2);
}
if (ret) {
switch (reason) {
case 'propertyChange':
this.setDataByName(data1,data2,data3);
this.sendEventToViews('dataChange',source,data1,data2,data3);
break;
}
}
}

function _ZEN_Auxiliary_dataController_onDelete() {
this.clearAutoRefresh();
}

function _ZEN_Auxiliary_dataController_onloadHandler() {
if ('' != this.modelError) {
zenInvokeCallbackMethod(this.onerror,this,'onerror');
}
this.startAutoRefresh();
}

function _ZEN_Auxiliary_dataController_raiseDataChange() {
if (this._listeners) {
for (var n = 0; n < this._listeners.length; n++) {
if (this._listeners[n]) {
this._listeners[n].notifyView('dataChange',null);
}
}
}
}

function _ZEN_Auxiliary_dataController_register(component) {
if (null == this._listeners) {
this._listeners = new Array();
}
this._listeners[this._listeners.length] = component;
}

function _ZEN_Auxiliary_dataController_save() {
var id = '';
this.modelError = '';
if (this.dataLoaded && !this.isModelReadOnly()) {
this.modelId = this.SaveToServer();
id = this.modelId;
zenInvokeCallbackMethod(this.onsave,this,'onsave','id',this.modelId);
this.sendEventToViews('dataChange');
}
return (''==this.modelError) ? id : '';
}

function _ZEN_Auxiliary_dataController_sendEventToViews(reason,source,data1,data2,data3) {
if (this._listeners) {
for (var n = 0; n < this._listeners.length; n++) {
if (this._listeners[n] && (this._listeners[n]!=source)) {
this._listeners[n].notifyView(reason,data1,data2,data3);
}
}
}
}

function _ZEN_Auxiliary_dataController_setData(value,d1,d2,d3) {
if (this.dataLoaded) {
this.dataBag.setValueByPosition(value,parseInt(d1,10),(null==d2) ? 1 : parseInt(d2,10));
}
}

function _ZEN_Auxiliary_dataController_setDataByName(property,value,series) {
switch(property) {
case '%id':
this.setModelId(value);
break;
case '%series':
this.setProperty('defaultSeries',value);
break;
default:
this.dataBag.setValue(property,value,(null==series) ? (this.defaultSeries-1) : (series-1));
break;
}
}

function _ZEN_Auxiliary_dataController_setModelClass(cls,id) {
if (null!=id) {
this.modelId = id;
}
this.setProperty('modelClass',cls);
}

function _ZEN_Auxiliary_dataController_setModelId(id) {
this.setProperty('modelId',id);
}

function _ZEN_Auxiliary_dataController_setProperty(property,value,value2) {
switch(property) {
case 'modelClass':
this.modelClass = value;
this.modelChanged = true;
this.loadModel(true);
this.sendEventToViews('modelChange');
break;
case 'modelId':
this.modelId = value;
this.loadModel(true);
this.sendEventToViews('dataChange');
break;
case 'alertOnError':
this.alertOnError = value ? true : false;
break;
case 'readOnly':
this.readOnly = value ? true : false;
this.sendEventToViews('dataChange');
break;
case 'defaultSeries':
this.defaultSeries = parseInt(value,10);
this.sendEventToViews('seriesChange');
break;
case 'autoRefresh':
this.autoRefresh = parseInt(value,10);
this.startAutoRefresh();
break;
default:
return this.invokeSuper('setProperty',arguments);
}
return true;
}

function _ZEN_Auxiliary_dataController_startAutoRefresh() {
this.clearAutoRefresh();
if (0 != this.autoRefresh) {
this.timerid = window.setTimeout('zenPage.getComponent('+this.index+').autoRefreshHandler();',this.autoRefresh);
}
}

function _ZEN_Auxiliary_dataController_unregister(component) {
if (this._listeners) {
for (var n = 0; n < this._listeners.length; n++) {
if (this._listeners[this._listeners.length] == component) {
this._listeners.splice(n,1);
break;
}
}
}
}

function _ZEN_Auxiliary_dataController_update() {
this.loadModel(true);
this.sendEventToViews('dataChange');
}

function _ZEN_Auxiliary_dataController_DeleteFromServer(pID) {
	return zenInstanceMethod(this,'DeleteFromServer','L','BOOLEAN',arguments);
}

function _ZEN_Auxiliary_dataController_ExecuteAction(pAction,pData) {
	return zenInstanceMethod(this,'ExecuteAction','L,L','BOOLEAN',arguments);
}

function _ZEN_Auxiliary_dataController_LoadFromServer() {
	return zenInstanceMethod(this,'LoadFromServer','','VARCHAR',arguments);
}

function _ZEN_Auxiliary_dataController_ReallyRefreshContents() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}

function _ZEN_Auxiliary_dataController_SaveToServer() {
	return zenInstanceMethod(this,'SaveToServer','','VARCHAR',arguments);
}
function _ZEN_Auxiliary_dataController__Loader() {
	zenLoadClass('_ZEN_Component_component');
	_ZEN_Auxiliary_dataController.prototype = zenCreate('_ZEN_Component_component',-1);
	var p = _ZEN_Auxiliary_dataController.prototype;
	p.constructor = _ZEN_Auxiliary_dataController;
	p.superClass = ('undefined' == typeof _ZEN_Component_component) ? zenMaster._ZEN_Component_component.prototype:_ZEN_Component_component.prototype;
	p.__ZENcomponent = true;
	p._serverClass = '%ZEN.Auxiliary.dataController';
	p._type = 'dataController';
	p.serialize = _ZEN_Auxiliary_dataController_serialize;
	p.getSettings = _ZEN_Auxiliary_dataController_getSettings;
	p.DeleteFromServer = _ZEN_Auxiliary_dataController_DeleteFromServer;
	p.ExecuteAction = _ZEN_Auxiliary_dataController_ExecuteAction;
	p.LoadFromServer = _ZEN_Auxiliary_dataController_LoadFromServer;
	p.ReallyRefreshContents = _ZEN_Auxiliary_dataController_ReallyRefreshContents;
	p.SaveToServer = _ZEN_Auxiliary_dataController_SaveToServer;
	p.autoRefreshHandler = _ZEN_Auxiliary_dataController_autoRefreshHandler;
	p.clearAutoRefresh = _ZEN_Auxiliary_dataController_clearAutoRefresh;
	p.createNewObject = _ZEN_Auxiliary_dataController_createNewObject;
	p.deleteId = _ZEN_Auxiliary_dataController_deleteId;
	p.execValidationCode = _ZEN_Auxiliary_dataController_execValidationCode;
	p.getData = _ZEN_Auxiliary_dataController_getData;
	p.getDataAsArrays = _ZEN_Auxiliary_dataController_getDataAsArrays;
	p.getDataAsObject = _ZEN_Auxiliary_dataController_getDataAsObject;
	p.getDataByName = _ZEN_Auxiliary_dataController_getDataByName;
	p.getDimSize = _ZEN_Auxiliary_dataController_getDimSize;
	p.getDimensions = _ZEN_Auxiliary_dataController_getDimensions;
	p.getError = _ZEN_Auxiliary_dataController_getError;
	p.getLabel = _ZEN_Auxiliary_dataController_getLabel;
	p.getModelClass = _ZEN_Auxiliary_dataController_getModelClass;
	p.getModelId = _ZEN_Auxiliary_dataController_getModelId;
	p.getPropertyName = _ZEN_Auxiliary_dataController_getPropertyName;
	p.getTypeByName = _ZEN_Auxiliary_dataController_getTypeByName;
	p.hasData = _ZEN_Auxiliary_dataController_hasData;
	p.invokeAction = _ZEN_Auxiliary_dataController_invokeAction;
	p.isModelReadOnly = _ZEN_Auxiliary_dataController_isModelReadOnly;
	p.isPropertyValid = _ZEN_Auxiliary_dataController_isPropertyValid;
	p.loadModel = _ZEN_Auxiliary_dataController_loadModel;
	p.notifyController = _ZEN_Auxiliary_dataController_notifyController;
	p.onDelete = _ZEN_Auxiliary_dataController_onDelete;
	p.onloadHandler = _ZEN_Auxiliary_dataController_onloadHandler;
	p.raiseDataChange = _ZEN_Auxiliary_dataController_raiseDataChange;
	p.register = _ZEN_Auxiliary_dataController_register;
	p.save = _ZEN_Auxiliary_dataController_save;
	p.sendEventToViews = _ZEN_Auxiliary_dataController_sendEventToViews;
	p.setData = _ZEN_Auxiliary_dataController_setData;
	p.setDataByName = _ZEN_Auxiliary_dataController_setDataByName;
	p.setModelClass = _ZEN_Auxiliary_dataController_setModelClass;
	p.setModelId = _ZEN_Auxiliary_dataController_setModelId;
	p.setProperty = _ZEN_Auxiliary_dataController_setProperty;
	p.startAutoRefresh = _ZEN_Auxiliary_dataController_startAutoRefresh;
	p.unregister = _ZEN_Auxiliary_dataController_unregister;
	p.update = _ZEN_Auxiliary_dataController_update;
}
/* EOF */