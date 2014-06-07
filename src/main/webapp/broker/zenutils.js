/*
	zenutils.js
	ZEN JavaScript utility methods
	Copyright (c) 2005-2008 InterSystems Corp. ALL RIGHTS RESERVED.
*/

/// Version of Zen API (must match %ZEN.Component.abstractPage)
var zenUtilsVersion = 14;

/// Useful constants
var SVGNS = "http://www.w3.org/2000/svg";
var ZENNS = "http://www.intersystems.com/zen";

/// browser detection variables
var zenIsIE = navigator && navigator.userAgent && (navigator.userAgent.indexOf('MSIE')!=-1);
var zenIsGecko = navigator && navigator.userAgent && (navigator.userAgent.indexOf('Gecko')!=-1);

/// Debugging flags
var zenDEBUGSerialize = false; 		// show object serialization
var zenDEBUGTraceEvents = false;	// trace client events
var zenShowClassError = true;

/// Class indices
var _zenClassIdx = new Object();	// name to class
var _zenLoaderIdx = new Object();	// is class loaded
var _zenIndex = new Array();		// index to object
var _zenIds = new Object();			// id to object
var zenMaster = null;				// top-most zen window
var zenPage = null;

var _zenProxyIndex = new Object();	// index of in-flight proxies
var _zenProxyId = 0;				// id # (negative)

/// Time (ms) before some components display a progress bar.
var zenProgressBarTimeout = 1000;

var zenDeferredTimerId = null;
var zenDeferredAction = null;

/// If true, trap the TAB key (internal).
var zenTrapTAB = false;

/// Color used by modal background div.
var zenModalBackground = 'gray';

/// useful key codes
var zenBACKSPACE = 8;
var zenDELETE = 46;
var zenDOWN = 40;
var zenESC	= 27;
var zenEND	= 35;
var zenENTER = 13;
var zenF1 	= 112;
var zenF2 	= 113;
var zenF3 	= 114;
var zenF4 	= 115;
var zenF5 	= 116;
var zenF6 	= 117;
var zenF7 	= 118;
var zenF8 	= 119;
var zenF9 	= 120;
var zenF10 	= 121;
var zenF11 	= 122;
var zenF12 	= 123;
var zenHOME	= 36;
var zenINSERT = 45;
var zenLEFT	= 37;
var zenPAGEDN = 34;
var zenPAGEUP = 33;
var zenRIGHT = 39;
var zenSPACE = 32;
var zenTAB 	= 9;
var zenUP 	= 38;

/// Zen short-cuts

/// Find component by id.
function zen(id)
{
	return zenGetComponentById(id);
}

/// Find component by index #.
function zenIndex(idx)
{
	return zenGetComponent(idx);
}

/// Get the value of a named property within zen component.
/// id is either the component or its id.
function zenGetProp(id,prop)
{
	var obj = ('object' == typeof id) ? id : zenGetComponentById(id);
	return obj ? obj.getProperty(prop) : '';
}

/// Set the value of a named property within zen component.
/// id is either the component or its id.
function zenSetProp(id,prop,value)
{
	var obj = ('object' == typeof id) ? id : zenGetComponentById(id);
	if (obj) {
		obj.setProperty(prop,value);
	}
}

/// Find resource string with given id
function zenText(id,p1,p2,p3,p4) {
	if (_zenResource && _zenResource[id]) {
		var text = _zenResource[id].toString();
		text = text.replace(/%1/g,p1?p1:'');
		text = text.replace(/%2/g,p2?p2:'');
		text = text.replace(/%3/g,p3?p3:'');
		text = text.replace(/%4/g,p4?p4:'');
	}
	else {
		var text = '{'+id+'}';
	}
	return text;
}

/// If condition is not true, display message box and return true.
/// args should be the arguments object of the function containing the ASSERT.
function zenASSERT(condition,msg,args)
{
	if (!condition) {
		var func = '';
		if (args && args.callee) {
			func = args.callee.toString();
		}

		msg = !msg ? 'No assertion message provided.' : msg;
		zenOutputWindow('ZEN ASSERTION FAILURE:',msg,func);
		return true;
	}

	return false;
}

/// Call this from within a catch block to display a standard error message.
function zenExceptionHandler(ex,args,msg)
{
	// test for custom exception handler
	if (ex.exceptionHandler) {
		ex.exceptionHandler(ex,args,msg);
		return;
	}

	var fname = '<unknown>';
	if (args && args.callee) {
		if (args.callee.name) {
			fname = args.callee.name;
		}
		else { // ie!
			var n = args.callee.toString().split('(');
			if (n && n.length > 0) {
				fname = n[0];
			}
		}
	}

	var text = 'ZEN EXCEPTION\n';
	text += self.document.location + '\n\n';
	text += 'A JavaScript exception was caught in function ' + fname + '\n';
	text += ex.name + ': ' + ex.message + '\n';
	if (null!=msg && ''!=msg) {
		text += '--------------------------------------\n' + msg + '\n';
	}
	text += '--------------------------------------\nStack trace:\n';
	text += zenStackTrace(args);
	alert(text);
}

function zenStackTrace(args)
{
	var trace = '';
	try {
		var func  = zenStackTrace.caller;
		var depth = 0; // limit depth of trace
		while (null != func && depth < 20) {
			depth++;
			if (trace.length > 0) trace += '\n';

			var fname = '<unknown>';
			if (func.name) {
				fname = func.name;
			}
			else { // ie!
				var n = func.toString().split('(');
				if (n && n.length > 0) {
					fname = n[0];
				}
			}

			trace += 'js:' + fname + '(';
			if (null != func.arguments) {
				for (var i = 0; i < func.arguments.length; i++) {
					if ('undefined' != typeof func.arguments[i] && func.arguments[i] && func.arguments[i].toString) {
						var arg = func.arguments[i].toString();
						if (i > 0) trace += ',';
						if (arg.length > 32) {
							trace += arg.substr(0,31) + "...";
						} else {
							trace += arg;
						}
					}
					else {
						if (i > 0) trace += ',';
						trace += '?';
					}
				}
			}
			trace += ')';
			try {
				func = func.caller;
			}
			catch(ex2) {
				func = null;
			}
		}
	}
	catch(ex) {
		alert('ZEN ERROR:\nError in zenStackTrace.\n----------------\n'+ ex.type + ': ' + ex.message);
	}

	return trace;
}

/// Test if val is null or ''.
function zenIsMissing(val)
{
	return (null==val) || (''==val && 'string'==typeof val);
}

/// Client-side equivalent of %Attr method.
function zenAttr(name, value)
{
	if (''==name || ''==value || null==value) {
		return '';
	}
	return name + '="' + value + '"';
}

/// Trim the leading and trailing spaces from a string.
function zenTrim(string)
{
	// first trailing
	var out = '';
	for (var i = string.length - 1; i >= 0; i--) {
		if (string.charAt(i) != ' ') {
			out = string.substr(0, i + 1);
			break;
		}
	}

	// now leading
	for (var i = 0; i < out.length; i++) {
		if (out.charAt(i) != ' ') {
			out = out.substr(i);
			break;
		}
	}
	return out;
}

/// Convert value to a boolean.
function zenBool(value)
{
	switch(typeof value) {
	case 'boolean':
		return value;
	case 'string':
		return ('true' == value);
	case 'number':
		return (value ? true : false);
	}
	return false;
}

/// Converts a typed value returned from the server to an
/// appropriate JS type.
function zenConvertType(type, value)
{
	if ('' == value && 'string' == typeof value) return '';

	switch(type) {
	case 'BOOLEAN':
		value = parseInt(value,10);
		value = (isNaN(value)||0==value) ? false : true;
		break;
	case 'BIGINT':
	case 'INTEGER':
		value = parseInt(value,10);
		break;
	case 'FLOAT':
	case 'DOUBLE':
	case 'NUMERIC':
	case 'CURRENCY':
		value = parseFloat(value,10);
		break;
	case 'ARRAYDT':
		var a = value.split('\x02');
		value = new Object();
		for (n = 0; n < a.length; n++) {
			var b = a[n].split('\x03');
			value[b[0]] = b[1];
		}
		break;
	case 'LISTDT':
		value = value.split('\x02');
		break;
	case 'HANDLE':
		if ('string' == typeof value && value.substr(0,16) == '%ZEN.proxyObject') {
			var proxy = new zenProxy();
			proxy.deserialize(value);
			value = proxy;
		}
		break;
	default:
		break;
	}
	return value;
}

/// Find a zen component given its id.
function zenGetComponentById(id)
{
	return (zenPage!=null&&_zenIds!=null) ? _zenIds[id] : null;
}

/// Find a zen component given its index.
function zenGetComponent(index)
{
	if (null==zenPage||null==_zenIds) {
		return null;
	}
	// test for tuple
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

/// Set a deferred action.
/// A deferred action is fired after a specified delay. If another
/// deferred action is set in the meantime, the first is never fired.
function zenSetDeferredAction(func,delay)
{
	// clear current action
	if (self.zenDeferredTimerId) {
		self.clearTimeout(self.zenDeferredTimerId);
		self.zenDeferredTimerId = null;
	}
	self.zenDeferredAction = func;
	if (self.zenDeferredAction && delay > 0) {
		self.zenDeferredTimerId = self.setTimeout("zenDeferredActionHandler()",delay);
	}
}

/// Internal method:
/// Fire the current deferred action.
function zenDeferredActionHandler()
{
	var func = self.zenDeferredAction;
	self.zenDeferredTimerId = null;
	self.zenDeferredAction = null;
	try {
		func();
	}
	catch(ex) {
		alert('ZEN ERROR:\nError in zenDeferredAction.\n----------------\n'+ ex.type + ': ' + ex.message);
	}
}

/// Utility function
/// Given an index of a ZEN component, find the component
/// and execute the given method (if it exists).
function zenRunMethod(index, meth)
{
	var comp = zenGetComponent(index);
	if (comp && ''!=meth && comp[meth]) {
		var alist = '';
		for (var n = 2; n < arguments.length; n++) {
			alist += ((''==alist) ? '' : ',') + 'args[' + n + ']';
		}
		var f = new Function('comp','args','return comp.'+meth+'('+alist+');');
		return f(comp,arguments);
	}
	return false;
}

/// Internal method.
/// Trap for errors encountered when invoking server methods
function cspRunServerMethodError(msg)
{
	/// See if page defines onServerMethodError
	if (zenPage.onServerMethodError) {
		zenPage.onServerMethodError(msg);
	}
	else {
		alert(msg);
	}
	cspXMLHttp = null;
	return null;
}


/// Internal method.
/// Create an instance of component object.
/// Applications should not call this; instead
/// use zenPage.createComponent.
function zenCreate(cls,index,id)
{
	var component = null;

	try {
		// see if we have a creator available
		var creator = _zenLoaderIdx[cls];
		if (null == creator) {
			// invoke loader
			creator = zenLoadClass(cls);
		}

		if (null != creator) {
			component = creator(index,id);
			if (component) {
				component.window = self;
			}
		}
	}
	catch(ex) {
		zenExceptionHandler(ex,arguments,'Error in zenCreate');
	}

	return component;
}

/// Internal method.
/// Load the class definition for the specified class, if needed.
/// Applications should not call this.
function zenLoadClass(cls)
{
	var creator = null;

	try {
		creator = _zenLoaderIdx[cls];

		if (null == creator) {
			// test for existence of loader
			var tester = new Function("return (\'undefined\' != typeof " + cls + "__Loader);");
			var exists = tester();
			var loader = null;

			if (!exists) {
				if (zenMaster == self) {
					// class does not exist
					if (zenShowClassError) {
						alert('Zen class not found:\n' + cls);
						zenShowClassError = false; // one error per page
					}
					return null;
				}
				else {
					// look in master
					loader = new Function("return zenMaster." + cls + "__Loader();");
					creator = new Function("index","id","var o = zenMaster.zenCreate('" + cls + "',index,id); if (index>0) {_zenIndex[index] = o;} if ('' != id) { _zenIds[id] = o; } return o;");
				}
			}
			else {
				loader = new Function("return " + cls + "__Loader();");
				creator = new Function("index","id","var o = new " + cls + "(index,id); if (index>0) {_zenIndex[index] = o;} if ('' != id) { _zenIds[id] = o; } return o;");
			}

			// invoke loader
			loader();

			// cache creator
			_zenLoaderIdx[cls] = creator;
		}
	}
	catch(ex) {
		zenExceptionHandler(ex,arguments,'Error in zenLoadClass');
	}

	return creator;
}

/// Stash a session cookie for the given component and property name
function zenStoreCookie(comp,property,value)
{
	var page = zenPage._serverClass;
	var index = comp.index;
	self.document.cookie = page + ':' + index + ':' + property + '=' + escape(value);
}

/// Load a session cookie and retrieve a value for the given component and property name
/// (for the current page in the Zen application).
/// cookie has the form page:index:property=value;
function zenLoadCookie(comp,property)
{
	var value = '';
	var page = zenPage._serverClass;
	var index = comp.index;

	// get cookies, find appropriate value
	var cookies = self.document.cookie;
	if (cookies != '') {
		var key = page + ':' + index + ':' + property;
		var pos = cookies.indexOf(key);
		if (pos!=-1) {
			var start = pos + key.length + 1;
			var end = cookies.indexOf(';',start);
			if (end < 0) {
				value = unescape(cookies.substring(start));
			}
			else {
				value = unescape(cookies.substring(start,end));
			}
		}
	}

	return value;
}

/// Creates a popup window to display error and tracing information in.
function zenOutputWindow(title,msg,code)
{
	var debugwin = window.open("","zenASSERTWindow","scrollbars,resizable,height=400,width=700,toolbar=no,directories=no,status=no,menubar=no,modal=yes");
	if (null == debugwin.document.getElementById("msg")) {
		debugwin.document.write('<html><head></head><body style="font-family: verdana; background: #c5d6d6;">');
		debugwin.document.title='ZEN ASSERT';
		debugwin.document.write('<div id="title" style="font-weight: bold; color: darkblue; font-size: 120%;">'+title+'</div>');
		debugwin.document.write('<hr/>');
		debugwin.document.write('<pre id="msg" style="font-weight: bold; font-size:1.4em;">');
		debugwin.document.write(msg);
		debugwin.document.write('</pre>');
		debugwin.document.write('<div style="font-size:0.8em; font-variant: small-caps;">Details:</div><textarea id="code" cols="80" rows="12">');
		debugwin.document.write(code);
		debugwin.document.write('</textarea>');
		debugwin.document.write('<br><input type="button" value="Close" title="Close this window" onclick="window.close();">');
		debugwin.document.write('</body></html>');
		debugwin.document.close();
	}
	else {
		debugwin.document.getElementById("title").innerHTML = title;
		debugwin.document.getElementById("msg").innerHTML = msg;
		debugwin.document.getElementById("code").value = code;
	}

	debugwin.focus();
}

/// Utility method: display trace information in TRACE window.
function zenTRACE(msg,reason,code)
{
	var now = new Date();

	var txt = '';
	txt += zenJustify(now.getMinutes(),2,'0') + ":" + zenJustify(now.getSeconds(),2,'0') + "." + zenJustify(now.getMilliseconds(),3,'0') + " ";
	txt += msg;

	if (null != reason && '' != reason) {
		txt += ': ' + reason;
	}
	if (null != code && '' != code) {
		code= code.replace(/\x04/g,','); // could be an argument list
		txt += '(' + code + ')';
	}
	txt += '\n';

	var tracewin = window.open("","zenTRACEWindow","scrollbars,resizable,height=400,width=700,toolbar=no,directories=no,status=no,menubar=no");
	if (null == tracewin.document.getElementById("code")) {
		tracewin = window.open("","zenTRACEWindow","scrollbars,resizable,height=400,width=700,toolbar=no,directories=no,status=no,menubar=no");
		tracewin.document.write('<html><head></head><body style="font-family: verdana; background: #c5d6d6;">');
		tracewin.document.title='ZEN TRACE';
		tracewin.document.write('<div style="font-size:0.8em; font-variant: small-caps;">Event Trace:</div><textarea id="code" cols="80" rows="16">');
		tracewin.document.write(txt);
		tracewin.document.write('</textarea>');
		tracewin.document.write('<br><br><input type="button" value="Clear" title="Clear trace list" onclick="window.document.getElementById(\'code\').value=\'\';">');
		tracewin.document.write('&nbsp;<input type="button" value="Close" title="Close this window" onclick="window.close();">');
		tracewin.document.write('</body></html>');
		tracewin.document.close();
	}
	else {
		// append
		tracewin.document.getElementById("code").value = tracewin.document.getElementById("code").value + txt;
	}

	tracewin.focus();
}

// list of embedded pages that requested notification when zenPage is created
var zenNotificationList = null;

/// This function handles page events and tests
/// that the zenPage object is present.
function zenPageEventHandler(etype,evt)
{
	try {
		switch (etype) {
		case 'register':
			// this special message is called by embedded pages that need to be notified
			// when the zenPage model is constructed.
			if (zenPage != null) {
				// notify immediately
				evt.zenNotify(zenPage);
			}
			else {
				// add to list
				if (!zenNotificationList) {
					zenNotificationList = new Array();
				}
				zenNotificationList[zenNotificationList.length] = evt;
			}
			return;

		case 'onload':
			// set up zenMaster
			if (_zenEmbeddedPage && null == zenMaster) {
				zenMaster = top;
				return true;  // master will notify us
			}
			else {
				zenMaster = self;
			}
			zenInitWindow(self);
			break;
		case 'onunload':
			if (!zenPage) return;
			var ret = zenPage.fireOnUnloadEvent();
			// if we have a popup window, close it now
			if (self.zenPopupWindow) {
				self.zenPopupWindow.close();
			}
			if ('string' == typeof ret) {
				return ret;
			}
			return;
			break;
		case 'onresize':
			if (!zenPage) return;
			// if resize when modal, make sure mouseTrap gets resized
			if (zenPage.modalStack && (zenPage.modalStack.length != 0)) {
				var trap = self.document.getElementById("zenMouseTrap");
				var page = zenPage.getEnclosingDiv();
				// SAM009 Resize trap to match current screen size and home position
				trap.style.width=document.body.clientWidth;
				trap.style.height=document.body.clientHeight;
				trap.style.top="0px";
				trap.style.left="0px";
				// if any modal element care about the window size, give them a chance to react to the change
				for (var i=0;i<zenPage.modalStack.length;i++) if (zenPage.modalStack[i].onresizeHandler) {
					zenPage.modalStack[i].onresizeHandler();
				}
				// end SAM009
			}

			zenPage.fireOnResizeEvent();
			if (zenPage.onlayoutHandler) {
				zenPage.onlayoutHandler(false);
			}
			break;
		case 'onkeydown':
			if (!zenPage) return;
			evt = evt ? evt : window.event;
			switch (evt.keyCode) {
			case zenTAB:
				// if there is a modal item; capture tab
				if (zenTrapTAB) {
					if (evt.preventDefault) {
						evt.preventDefault();
					}
					return false;
				}
				break;
			case zenBACKSPACE:
			// case zenENTER:
				// trap certain keys
				var src = evt.target ? evt.target : evt.srcElement;
				if ('' == src.id && typeof src.type != 'string') {
					// assume all components have an id
					if (evt.preventDefault) {
						evt.preventDefault();
					}
					return false;
				}
			}
			// invoke page handler, if present
			if (zenPage.onkeydownHandler) {
				return zenPage.onkeydownHandler(evt);
			}
			break;
		case 'onkeyup':
			if (!zenPage) return;
			evt = evt ? evt : window.event;
			// invoke page handler, if present
			if (zenPage.onkeyupHandler) {
				return zenPage.onkeyupHandler(evt);
			}
			break;
		default:
			alert('ERROR: Unrecognized event in zenPageEventHandler: ' + etype);
			break;
		}
	}
	catch(ex) {
		zenExceptionHandler(ex,arguments,'Error in zenPageEventHandler: ' + etype + '\nevt:' + evt);
	}

	return true;
}


/// Internal function.
/// Performs setup work for a zen window.
function zenInitWindow(win)
{
	// test for presence of include files
	if (!win.zenTestIncludes()) {
		return;
	}

	// create client page model
	win.zenCreatePageModel();

	// test if zenPage object exists
	if (win.zenPage == null) {
		alert(win._zenPageError);
		return;
	}

	// notify embedded pages
	if (win.zenNotificationList) {
		// test if page has defined an alternate target page
		var page = (null != win.zenPage.getTargetPage) ? win.zenPage.getTargetPage() : win.zenPage;
		for (var n = 0; n < win.zenNotificationList.length; n++) {
			win.zenNotificationList[n].zenNotify(page);
		}
		win.zenNotificationList = null;
	}


	// if we have finish work, do it now
	if (win.zenFinalizeModel) {
		win.zenRefreshMode = 2; // turn off refresh
		win.zenFinalizeModel();
		win.zenRefreshMode = 0;
	}

	// notify any embedded frames
	for (var n = 0; n != win.frames.length; n++) {
		var frame = win.frames[n];
		if (frame.zenInitWindow && frame._zenEmbeddedPage) {
			frame.zenInitWindow(frame);
		}
	}

	// turn on trace option, if set
	if (win.zenInitTraceOptions) {
		win.zenInitTraceOptions();
	}

	// turn off links *if* we are in designMode
	if (win.zenPage.designMode) {
		var links = win.document.links;
		for (var n = 0; n < links.length; n++) {
			links[n].onclick = function() { alert('Link disabled.'); return false; }
		}
	}

	win.zenPage.fireOnLoadEvent();

	if (win.zenPage.onlayoutHandler) {
		win.zenPage.onlayoutHandler(true);
	}

	// start allowing user events on page
	var trap = win.document.getElementById("zenMouseTrap");
	if (trap) {
		trap.style.display = "none";
	}
}

/// JS equivalent of $Get: if value is null return '' (or defValue if present)
/// otherwise return value.
function zenGet(value,defValue)
{
	return (null != value) ? value : (null != defValue) ? defValue : '';
}

/// Right justify a value to length *len*;
/// *padchar* is used for padding.
function zenJustify(val,len,padchar)
{
	var ln = len - val.toString().length;
	if (ln > 0) {
		var pad = '';
		padchar = (null==padchar) ? ' ' : padchar;
		for (var n = 0; n < ln; n++) {
			pad += padchar;
		}
		val = pad + val;
	}

	return val;
}

/// Test if component is a valid ZEN component object
function zenIsComponent(component)
{
	return (component&&('object'==typeof(component))&&(null!=component.__ZENcomponent));
}

/// Get left offset of element
function zenGetLeft(el)
{
    var left = 0;
    while (el) {
    	left += el.offsetLeft;
    	el = el.offsetParent;
    }
    return left;
}

/// Get top offset of element
function zenGetTop(el)
{
    var top = 0;
    while (el) {
    	top += el.offsetTop;
    	el = el.offsetParent;
    }
    return top;
}

/// Get total scrolling of element
function zenGetTopScroll(el)
{
    var scroll = 0;
    while (el) {
    	if (el.scrollTop!=null) {
    		scroll += el.scrollTop;
    	}
    	el = el.parentNode;
    }
    return scroll;
}

/// Get total scrolling of element
function zenGetLeftScroll(el)
{
    var scroll = 0;
    while (el) {
    	if (el.scrollLeft!=null) {
    		scroll += el.scrollLeft;
    	}
    	el = el.parentNode;
    }
    return scroll;
}

/// Get inner width of the browser window.
function zenGetWindowWidth()
{
	return document.body.clientWidth;
}

/// Get inner height of the browser window.
function zenGetWindowHeight()
{
	return document.body.clientHeight;
}

/// Make the given element visible by scrolling its enclosure.
function zenScrollIntoView(enc,el,hz,vt)
{
	if (null == enc || el == null) return;

	var sbWid = vt ? 0 : 24; // est scrollbar size
	var sbHgt = hz ? 0 : 24;

	var encWid = enc.offsetWidth;
	var elWid = el.offsetWidth;
	var elLeft = zenGetLeft(el) - zenGetLeft(enc);
	if (elLeft >= enc.scrollLeft && ((elLeft + elWid) <= (enc.scrollLeft + encWid))) {
		// visible
	}
	else if ((elLeft+elWid) > encWid) {
		if (elLeft > (enc.scrollLeft+encWid/2)) {
			enc.scrollLeft = (elLeft + elWid) - encWid + sbWid;
		}
		else {
			enc.scrollLeft = elLeft;
		}
	}
	else if ((elLeft+elWid) < encWid) {
		enc.scrollLeft = elLeft;
	}

	var encHgt = enc.offsetHeight;
	var elHgt = el.offsetHeight;
	var elTop = zenGetTop(el) - zenGetTop(enc);

	if (elTop >= enc.scrollTop && ((elTop + elHgt) <= (enc.scrollTop + encHgt))) {
		// visible
	}
	else if ((elTop+elHgt) > encHgt) {
		if (elTop > (enc.scrollTop+encHgt/2)) {
			enc.scrollTop = (elTop + elHgt) - encHgt + sbHgt;
		}
		else {
			enc.scrollTop = elTop;
		}
	}
	else if ((elTop+elHgt) < encHgt) {
		enc.scrollTop = elTop;
	}

	// see if main window needs to scroll
	var ww = zenGetWindowWidth();
	var elLeft = zenGetLeft(el);

	if (elLeft >= document.body.scrollLeft && ((elLeft + elWid) <= (document.body.scrollLeft + ww))) {
		// visible
	}
	else if ((elLeft+elWid) > ww) {
		if (elLeft > (document.body.scrollLeft+ww/2)) {
			document.body.scrollLeft = (elLeft + elWid) - ww + sbWid;
		}
		else {
			document.body.scrollLeft = elLeft;
		}
	}
	else if ((elLeft+elWid) < ww) {
		document.body.scrollLeft = elLeft;
	}

	var wh = zenGetWindowHeight();
	var elTop = zenGetTop(el);

	if (elTop >= document.body.scrollTop && ((elTop + elHgt) <= (document.body.scrollTop + wh))) {
		// visible
	}
	else if ((elTop+elHgt) > wh) {
		if (elTop > (document.body.scrollTop+wh/2)) {
			document.body.scrollTop = (elTop + elHgt) - wh + sbHgt;
		}
		else {
			document.body.scrollTop = elTop;
		}
	}
	else if ((elTop+elHgt) < wh) {
		document.body.scrollTop = elTop;
	}
}

/// Utility method: takes a variable number of arguments, concatenates thems and
/// displays them within an alert box.
function zenAlert()
{
	var msg = '';
	for (var n = 0; n < arguments.length; n++) {
		msg += arguments[n];
	}

	alert(msg);
}

/// Given a spec ("L,L,O") and a list of arguments,
/// build a \x04 delimited list of argument values (including serialized objects).
/// serialState is current serial state object
function zenBuildArgumentList(serialState,spec,args)
{
	var arglist = '';

	if ('' != spec) {
		var items = new Array();

		var types = spec.split(',');
		var objcount = 0;
		for (var n = 0;n < types.length; n++) {
			var t = types[n];
			if ('O' == t) {
				if (!(('object'==typeof args[n])&&(args[n].constructor==zenProxy))) {
					objcount++;
				}
			}
		}
		if (objcount > 1) {
			// add common ancestor of all object args
			serialState.addObject(zenPage);
		}

		for (var n = 0;n < types.length; n++) {
			var t = types[n];
			switch(t) {
			case 'LI':
				zenASSERT(args[n]==null || (args[n].length != null),"JS Array value expected for server method call; Argument: " + (n+1),arguments);
				items[items.length] = ((null == args[n]) ? '' : serialState.serializeList(null,args[n],false,''));
				break;
			case 'A':
				zenASSERT(args[n]==null || (typeof args[n] == 'object'),"JS Object value expected for server method call; Argument: " + (n+1),arguments);
				items[items.length] = ((null == args[n]) ? '' : serialState.serializeArray(null,args[n],false,''));
				break;
			case 'O':
				if (('object'==typeof args[n])&&(args[n].constructor==zenProxy)) {
					items[items.length] = serialState.addZenProxy(args[n]);
				}
				else {
					zenASSERT(args[n]==null || zenIsComponent(args[n]),"Object value expected for server method call; literal found. Argument: " + (n+1),arguments);
					items[items.length] = ((null == args[n]) ? '' : serialState.addObject(args[n]));
				}
				break;
			case 'B':
				zenASSERT((typeof(args[n]) != 'object'),"Boolean value expected for server method call; object found. Argument: " + (n+1),arguments);
				items[items.length] = ((null == args[n]) ? '' : (args[n]?1:0)) ;
				break;
			default:
				zenASSERT((typeof(args[n]) != 'object'),"Literal value expected for server method call; object found. Argument: " + (n+1),arguments);
				items[items.length] = ((null == args[n]) ? '' : args[n]) ;
				break;
			}
		}
		arglist = items.join('\x04');
	}

	return arglist;
}

/// This object is used to construct a set of serialized objects
function zenSerialState()
{
	// set of object instances: objects[index] = obj
	this.objects = new Object();

	// set of serial states: states[#] = state
	this.states = new Array();

	this.aboveList = null;
}

zenSerialState.prototype.getHeader = zenSerialState_getHeader;
zenSerialState.prototype.getBody = zenSerialState_getBody;
zenSerialState.prototype.addObject = zenSerialState_addObject;
zenSerialState.prototype.addZenProxy = zenSerialState_addZenProxy;
zenSerialState.prototype.serializeArray = zenSerialState_serializeArray;
zenSerialState.prototype.serializeList = zenSerialState_serializeList;

function zenSerialState_getHeader()
{
	// number of distinct classes
	var clsCounter = 0;

	// set of referenced class names: classes[clsName] = clsCode
	var classes = new Object();

	// index of referenced class names: classes[clsCode] = clsName
	var classIdx = new Object();

	// find set of distinct classes
	for (var i in this.objects) {
		var cls = this.objects[i]._serverClass;
		if (null == classes[cls]) {
			classes[cls] = ++clsCounter;
			classIdx[clsCounter] = cls;
		}
	}

	var header = new Array();

	// set of classes
	var clsList = new Array();
	for (var i in classIdx) {
		clsList[clsList.length] = classIdx[i];
	}
	// first record: set of class names
	header[header.length] = clsList.join('\x01');

	// set of objects
	// header: clsCode:index
	for (var i in this.objects) {
		header[header.length] = classes[this.objects[i]._serverClass] + '\x01' + i + '\x01';
	}

	if (zenDEBUGSerialize) {
		// make human readable string
		var debug = header.join('\n');
		debug = debug.replace(/\x01/g,'!');
		debug = debug.replace(/\x02/g,'^');
		debug = debug.replace(/\x03/g,'~');
		var dbmsg = '';
		//var dwid = 180;
		//for (var dd = 0; dd <= debug.length / dwid; dd++) {
		//	dbmsg += debug.substr(dd*dwid,dwid) + '\n';
		//}
		dbmsg = debug;

		alert('HEADER:\n'+dbmsg);
		// zenOutputWindow('SERIAL STATE HEADER:','Contents of serialized state header.',dbmsg);
	}

	return header.join('\x04');
}

function zenSerialState_getBody()
{
	// body: serial state
	var body = new Array();
	for (var i = 0; i < this.states.length; i++) {
		if (null != this.states[i]) {
			body[body.length] = this.states[i];
		}
	}

	if (zenDEBUGSerialize) {
		// make human readable string
		var debug = body.join('\n');
		debug = debug.replace(/\x01/g,'!');
		debug = debug.replace(/\x02/g,'^');
		debug = debug.replace(/\x03/g,'~');
		var dbmsg = '';
		//var dwid = 180;
		//for (var dd = 0; dd <= debug.length / dwid; dd++) {
		//	dbmsg += debug.substr(dd*dwid,dwid) + '\n';
		//}
		dbmsg = debug;

		alert('BODY:\n'+dbmsg);
		//zenOutputWindow('SERIAL STATE BODY:','Contents of serialized state body.',dbmsg);
	}

	return body.join('\x04');
}

function zenSerialState_addObject(obj,propname)
{
	// add component to serial state
	if (null==obj || ''==obj) { return '';	}
	zenASSERT(zenIsComponent(obj),"Attempt to serialize non zen-component: " + obj,arguments);

	var index = obj.index;
	zenASSERT(index!=null && index!="","Component has no index.",arguments);

	if (null==propname) {
		// first object in graph: create list of objects above us
		this.aboveList = new Object();
		var parent = obj.parent;
		while (parent) {
			this.aboveList[parent.index] = true;
			parent = parent.parent;
		}
	}

	if (null == this.objects[index]) {
		// this object has not been serialized yet
		this.objects[index] = obj;

		// get set of serialized items (properties)
		var items = new Array();
		if (obj.onSerialize) {
			obj.onSerialize();
		}
		obj.serialize(this,items);
		this.states[this.states.length] = items.join('\x01');
		items = null;
	}

	if (null==propname) {
		this.aboveList = null;
	}

	return index;
}

function zenSerialState_addZenProxy(obj)
{
	// Add lightweight Zen object to serial state
	if (null==obj || ''==obj) { return '';	}
	zenASSERT(obj.constructor==zenProxy,"Attempt to serialize non-proxy: " + obj,arguments);

	// add object to index
	_zenProxyId--;
	_zenProxyIndex[_zenProxyId] = obj;
	obj._index = _zenProxyId;

	var items = new Array();
	this.objects[obj._index] = obj;
	obj.serialize(this,items);
	this.states[this.states.length] = items.join('\x01');
	return obj._index;
}

function zenSerialState_serializeArray(obj,array,isObj,propname)
{
	var items = new Array();
	for (var key in array) {
		if (!isObj) {
			items[items.length] = key + '\x03' + (array[key]?array[key]:'');
		}
		else {
			items[items.length] = key + '\x03' + this.addObject(array[key]);
		}
	}

	return items.join('\x02');
}

function zenSerialState_serializeList(obj,list,isObj,propname)
{
	if (list.length == 0) {
		return '';
	}

	if (!isObj) {
		// directly serialize the list
		return list.join('\x02');
	}

	// special case for children
	if (('children' == propname) && (this.aboveList[obj.index])) {
		// ignore children of objects above starting object
		return -1; // this indicates partial serialization
	}

	var items = new Array();
	for (var n = 0; n < list.length; n++) {
		items[items.length] = this.addObject(list[n]);
	}

	return items.join('\x02');
}

/// Convert a delimited string to an array.
function zenListToArray(data,delim)
{
	return data.split(delim);
}

/// Convert an array to delimited string that can be sent to the server.
function zenArrayToList(array,delim)
{
	return array.join(delim);
}

/// -------------------------------------------------------------------

/// If true, *all* calls to server are executed synchronously
var zenSynchronousMode = false;

/// When false, do not sync server changes back to the client
var zenSyncFlag = true;

/// When this is defined (per thread), it contains a list of objects
/// that need to have refreshContents called
var zenRefreshList = new Object();

/// When this is defined (per thread), it contains a list of objects
/// that need to have renderContents called
var zenRenderList = new Object();

/// this flag controls the behavior of the refreshContents method
/// 0=normal; 1=deferred; 2=off;
var zenRefreshMode = 0;

/// id (job #) of thread performing sync of client-side model
var zenThreadId = null;

var zenDeferStack = 0;

function zenBeginDeferredRefresh(jobid,trace)
{
	if (null!=zenThreadId && jobid==zenThreadId) {
		zenDeferStack++;
		return;
	}

	zenASSERT(zenThreadId==null,'thread id should be null',arguments);
	zenThreadId = jobid;
	zenDeferStack = 1;

	if (zenRefreshMode == 2) return;
	zenASSERT(zenRefreshList[zenThreadId]==null,'refresh list should be null',arguments);
	zenRefreshList[zenThreadId] = new Object(); // set of objects by index
	zenRenderList[zenThreadId] = new Object(); // set of objects by index
	zenRefreshMode = 1;
}

function zenEndDeferredRefresh(jobid,trace)
{
	var log = self.document.getElementById('log');
	if (log) {
		log.innerHTML = log.innerHTML + 'end: ' + jobid + ': ' + trace + '<br>';
	}

	zenASSERT(zenThreadId==jobid,'thread id does not match',arguments);

	if (zenRefreshMode == 2) return;

	zenDeferStack--;
	if (zenDeferStack > 0) {
		return;
	}

	zenASSERT(zenRefreshList[zenThreadId],'refresh list should not be null',arguments);

	// first: shorten list by removing any children whose parents
	// are going to be refreshed
	for (var n in zenRefreshList[zenThreadId]) {
		var parent = zenRefreshList[zenThreadId][n].parent;
		while (parent) {
			if (zenRefreshList[zenThreadId][parent.index]) {
				delete zenRefreshList[zenThreadId][n];
				break;
			}
			parent = parent.parent;
		}
	}

	// now refresh & render
	var flag = zenSyncFlag;
	// zenSyncFlag = false; // actually: we *want* more syncs here!

	zenRefreshMode = 2; // do not allow further refreshes
	for (var n in zenRefreshList[zenThreadId]) {
		// note: object *could* have been deleted
		if (_zenIndex[n]) {
			_zenIndex[n].ReallyRefreshContents();
		}
	}
	for (var n in zenRenderList[zenThreadId]) {
		// note: object *could* have been deleted
		if (_zenIndex[n]) {
			_zenIndex[n].render();
		}
	}
	zenSyncFlag = flag;
	zenRefreshMode = 0;
	zenRefreshList[zenThreadId] = null;
	zenRenderList[zenThreadId] = null;
	zenThreadId = null;
}

/// A request to call a component's renderContents method (if
/// if has one). Either call it directly, or add it the deferred list
/// (if we are processing a client/sync).
function zenRenderContents(obj)
{
	if (null == obj.renderContents) {
		return;
	}
	if (zenThreadId!=null && 1 == zenRefreshMode) {
		zenRenderList[zenThreadId][obj.index] = obj;
	}
	else {
		obj.render();
	}
}

/// -------------------------------------------------------------------
/// Open a popup window with given url and pageName.
/// features is optional list of window features.
/// If features does not include top,left,width,height, or resizable defaults will be provided.
/// parms, if provided, is a JavaScript object whose properties are used to supply URL parameters
/// for the popup window.
/// parent, if provided, is the Zen component that will be notified when the popup
/// action fires (by calling its onPopupAction method). If not supplied, then
/// the page object is notified.
/// This is called by the zenPage.launchPopupWindow method.
/// This does not call zenLink on the url, the caller is expected to do that.
function zenLaunchPopupWindow(url, pageName, features, parms, parent)
{
	var ieFeatures = '';

	if (features == null) {
		// default features
		features = "status=yes,scrollbars=yes,resizable=yes,toolbar=no,directories=no,status=no,menubar=no";
		ieFeatures = "edge: Raised; center: Yes; help: No; resizable: Yes; status: No;";
	}

	if (pageName == null) {
		// default page name
		pageName = 'zenPopupWindow';
	}

	// see if we need to provide size and position
	var wid = self.screen.width;
	var hgt = self.screen.height;
	wid = wid * 0.8;
	hgt = hgt * 0.8;
	var top = self.screen.height * 0.1;
	var left = self.screen.width * 0.1;

	var ieWid,ieHgt,ieTop,ieLeft;

	if (-1 == features.indexOf('width')) {
		features = features + (''==features?'':',') + 'width=' + wid;
	}
	else {
		var s = features.substr(features.indexOf('width=')+6);
		ieWid = parseInt(s,10);
	}

	if (-1 == features.indexOf('height')) {
		features = features + (''==features?'':',') + 'height=' + hgt;
	}
	else {
		var s = features.substr(features.indexOf('height=')+7);
		ieHgt = parseInt(s,10);
	}

	if (-1 == features.indexOf('top')) {
		features = features + (''==features?'':',') + 'top=' + top;
	}
	else {
		var s = features.substr(features.indexOf('top=')+4);
		ieTop = parseInt(s,10);
	}

	if (-1 == features.indexOf('left')) {
		features = features + (''==features?'':',') + 'left=' + left;
	}
	else {
		var s = features.substr(features.indexOf('left=')+5);
		ieLeft = parseInt(s,10);
	}

	// popups are modal unless explicitly set otherwise
	if (-1 == features.indexOf('modal')) {
		features = features + (''==features?'':',') + 'modal=yes';
	}
	var modal=(features.substr(features.indexOf('modal=')+6,3)=='yes');

	// popups are resizable unless explicitly set otherwise
	if (-1 == features.indexOf('resizable')) {
		features = features + (''==features?'':',') + 'resizable=yes';
	}
	var resizable=(features.substr(features.indexOf('resizable=')+10,2)!='no');

	// process parms
	var query = '$ZEN_POPUP=1';
	if (null != parent && parent.index) {
		query += '&$ZEN_POPUPPARENT=' + parent.index;
	}
	if (null != parms) {
		for (var p in parms) {
			query = query + '&' + p + '=' + encodeURIComponent(parms[p]);
		}
	}

  	var questionmark = url.split("?");
  	var page;
  	if (questionmark.length > 1) {
	  	page = escape(questionmark[0]) + "?" + questionmark[1];
	  	page = page + "&" + query;
  	}
  	else {
		page = escape(url) + "?" + query;
  	}

	// create popup window
	// cache pageName in current page object
	zenPage._popupName = pageName;

	// test for IE modal dialog
	if ((window.showModalDialog) && (modal)) {
		// pass zenPage along as dialogArgument
		wid = isNaN(ieWid) ? wid : ieWid;
		hgt = isNaN(ieHgt) ? hgt : ieHgt;
		top = isNaN(ieTop) ? top : ieTop;
		left = isNaN(ieLeft) ? left : ieLeft;

		ieFeatures = ieFeatures + 'dialogWidth:' + wid + 'px;';
		ieFeatures = ieFeatures + 'dialogHeight:' + hgt+ 'px;';
		ieFeatures = ieFeatures + 'dialogTop:' + top + 'px;';
		ieFeatures = ieFeatures + 'dialogLeft:' + left + 'px;';
		ieFeatures = ieFeatures + (resizable ? 'resizable: Yes;' : 'resizable: No;');
		ieFeatures = ieFeatures + 'unadorned: Yes;';
		ieFeatures = ieFeatures + 'status: No;';
		var ret = window.showModalDialog(page,zenPage,ieFeatures);
		return;
	}

	var popup = window.open(page,pageName,features);
	popup.focus();

	// remember popup window in our window
	self.zenPopupWindow = popup;
}

/// context variable used for callbacks
var zenThis = null;
var zenEvent = null;

/// Utility method used by components to invoke a callback method.
/// *method* is the value of a callback property (such as component.onchange)
/// if method is not null, then we build a function and invoke the callback.
/// if *argname* is provided, then it is the name of a formal parameter
/// passed to the callback and *argvalue* is its value.
function zenInvokeCallbackMethod(method, context, reason, argname, argvalue, arg2name, arg2value, arg3name, arg3value)
{
	var ret = null;

	try {
		if (method && '' != method) {
			if (zenDEBUGTraceEvents) {
				zenTRACE('Callback Invoked',reason,method);
			}

			if (arg3name && arg2name && argname) {
				var callback = new Function(argname,arg2name,arg3name,method);
			}
			else if (arg2name && argname) {
				var callback = new Function(argname,arg2name,method);
			}
			else if (argname) {
				var callback = new Function(argname,method);
			}
			else {
				var callback = new Function(method);
			}
			var oldThis = zenThis;
			zenThis = context;
			if (arg3name && arg2name && argname) {
				ret = callback(argvalue,arg2value,arg3value);
			}
			else if (arg2name && argname) {
				ret = callback(argvalue,arg2value);
			}
			else if (argname) {
				ret = callback(argvalue);
			}
			else {
				ret = callback();
			}
			zenThis = oldThis;
		}
	}
	catch(ex) {
		var src = '';
		if (context && (null!=context.id)) {
			src = 'Source: <' + context._type + ' id="' + context.id + '">\n';
		}
		zenExceptionHandler(ex,arguments,'Error invoking callback code.\nCode: "' + method + '"\n' + src);
	}

	return ret;
}

/// This helper is used to dispatch from HTML events to user-defined ZEN events.
function zenFireEvent(index, code, reason, evt)
{
	var ret = null;

	try {
		if (zenDEBUGTraceEvents) {
			zenTRACE('Event Fired',reason,code);
		}
		// set up call context, include evt
		var context = zenPage.getComponent(index);
		zenASSERT(context,'Unable to find component',arguments);

		// stash event, run the code
		var oldEvent = zenEvent;
		zenEvent = evt ? evt : window.event;
		ret = zenInvokeCallbackMethod(code,context,reason);
		zenEvent = oldEvent;
	}
	catch(ex) {
		zenExceptionHandler(ex,arguments,'Error in zenFireEvent');
	}

	return ret;
}

// ---------------------------------------------------
/// Convert a string to a date value.
/// Handles the following formats:
/// 'T'|'t' => today, T+n t-n
/// '' => ''
/// 2005-12-20,2005/12/20,2005 12 20
/// Various date formats supported by JS
/// Returns either '', -1 (for invalid dates)
/// or a date string in the form YYYY-MM-DD
/// (or in the format specified by format and sep)
function zenParseDate(value,hasTime,format,sep)
{
	// ''/null
	if (null == value || '' == value) return '';
	hasTime = ('undefined' == typeof hasTime) ? false : (hasTime ? true : false);
	value = value.toString();

	// T,T+n,T-n
	var f1 = value.substr(0,1);
	var f2 = value.substr(1);

	if (('T' == f1 || 't' == f1) && ('' == f2 || !isNaN(parseInt(f2,10)))) {
		var d = new Date(); // now
		if ('' != f2) {
			// adjust
			d.setDate(d.getDate()+parseInt(f2,10));
		}
		return zenDateToString(d,hasTime,format,sep);
	}

	// test for YYYY/MM/DD: normalize delimiter
	var v = value.replace(/-/g,'/');
	v = v.replace(/ /g,'/');
	v = v.replace(/\./g,'/');
	var p = v.split('/');
	if (p.length >= 2) {
		var year = parseInt(p[0],10);
		var month = parseInt(p[1],10);
		var day = 1;
		if (null != p[2]) {
			day = parseInt(p[2],10);
		}
		var hour = 1; // DST trick
		var min = 0;
		var sec = 0;
		if (hasTime && null != p[3]) {
			var t = p[3].toString().split(':');
			hour = t[0] ? parseInt(t[0],10) : '';
			min = t[1] ? parseInt(t[1],10) : '';
			sec = t[2] ? parseInt(t[2],10): '';
			hour = isNaN(hour) ? 0 : hour;
			min = isNaN(min) ? 0 : min;
			sec = isNaN(sec) ? 0 : sec;
			if ((hour<0)||(hour>23)||(min<0)||(min>59)||(sec<0)||(sec>59)) {
				return -1;
			}
		}

		if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
			// validate (as JS does not!)
			var d = new Date(NaN);
			if (year >= 1000 && year <= 9999) {
				if (month >= 1 && month <= 12) {
					// get # of days per month
					var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

					// is this a leap year?
					if (year%4 == 0) {
						if (year%100 == 0 && year%400 != 0) {
							// skip these
						}
						else {
							daysInMonth[1] = 29;
						}
					}

					if (day >= 1 && day <= daysInMonth[month-1]) {
						d = new Date(year,month-1,day,hour,min,sec);
					}
				}
			}

			return zenDateToString(d,hasTime,format,sep);
		}
	}

	// last, let JS have a shot
	var ms = Date.parse(value);
	if (isNaN(ms)) {
		// try adding this year to the end!
		var now = new Date();
		ms = Date.parse(value + ' ' + now.getFullYear());
	}

	var d = new Date(ms);
	return zenDateToString(d,hasTime,format,sep);
}

/// Takes a Date object, converts it to YYYY-MM-DD.
/// If hasTime, add a time portion to the string.
function zenDateToString(d,hasTime,format,sep)
{
	format = ('undefined' == typeof format) ? 'YYYY-MM-DD' : format;
	sep = ('undefined' == typeof sep) ? '-' : sep;
	if (isNaN(d.getTime())) {
		// return error value
		return -1;
	}

	var mon = d.getMonth();
	mon = (mon<9?'0':'') + (mon+1);
	var day = d.getDate();
	day = (day<10?'0':'') + (day);
	var yr = d.getFullYear();
	var t;

	switch (format) {
	case 'MDY':
		t = mon + sep + day + sep + yr;
		break;
	case 'DMY':
		t = day + sep + mon + sep + yr;
		break;
	case 'YMD':
	default:
		t = yr + sep + mon + sep + day;
		break;
	}

	if (hasTime) {
		t += ' ' + (d.getHours()<9?'0':'') + d.getHours() + ':' + (d.getMinutes()<9?'0':'') + d.getMinutes() + ':' + (d.getSeconds()<10?'0':'') + d.getSeconds();
	}
	return t;
}

/// Takes a string of the form YYYY-MM-DD and converts it to
/// a Date object.
function zenStringToDate(dval)
{
	var str = zenParseDate(dval)
	if (('' == str)||(-1 == str)) return null;
	var d = new Date();
	d.setYear(parseInt(str.substr(0,4),10));
	d.setMonth(parseInt(str.substr(5,2),10)-1);
	d.setDate(parseInt(str.substr(8,2),10));
	return d;
}

/// Takes a string containing the time portion of a time stamp
/// and returns a normalized (24hour) version.
function zenNormalizeTime(str)
{
	var out = '';
	try {
		var t = str.split(":");

		var hour = parseInt(t[0],10);
		var min = parseInt(t[1],10);
		var sec = parseInt(t[2],10);
		// am/pm
		var mod1 = str.substr(str.length-1,1);
		var mod2 = str.substr(str.length-2,2);

		if (!isNaN(hour)) {
			if ((mod1=='a'||mod1=='A'||mod2=='am'||mod2=='AM')&&(hour==12)) {
				hour = 0;
			}
			else if ((mod1=='p'||mod1=='P'||mod2=='pm'||mod2=='PM')&&(hour<12)) {
				hour += 12;
			}
			hour = hour < 0 ? 0 : hour;
			hour = hour > 23 ? 0 : hour;
			out = ((hour < 10) ? '0' : '') + hour;

			if (!isNaN(min)) {
				min = min < 0 ? 0 : min;
				min = min > 59 ? 0 : min;
				out += ((min < 10) ? ':0' : ':') + min;
				if (!isNaN(sec)) {
					sec = sec < 0 ? 0 : sec;
					sec = sec > 59 ? 0 : sec;
					out += ((sec < 10) ? ':0' : ':') + sec;
				}
			}
			else {
				out += ":00";
			}
		}
	}
	catch(ex) {
	}

	return out;
}

// ---------------------------------------------------
// unquote any special xml entities within text
function zenUnescapeXML(text)
{
	if (text) {
		text = text.replace(/&gt;/g,'>');
		text = text.replace(/&lt;/g,'<');
		text = text.replace(/&quot;/g,'"');
		text = text.replace(/&amp;/g,'&');
	}
	return text
}

// quote any special xml characters within text
function zenEscapeXML(text,skipQuote)
{
	if (text && ('' != text) && (text != text*1)) {
		text = text.replace(/&/g,'&amp;');
		text = text.replace(/>/g,'&gt;');
		text = text.replace(/</g,'&lt;');
		text = text.replace(/\'/g,'&apos;');
		if (!skipQuote) {
			text = text.replace(/\"/g,'&quot;');
		}
	}
	return text;
}

// ---------------------------------------------------
/// light-weight xml processor:
/// this uses the built-in DOM functions of the browser
/// to provide a JS SAX interface
/// hander is an instance of zenXMLContentHandler
/// Note: we convert all element and attr names to lower case
/// for portability
function zenXMLParser(handler)
{
	this.handler = handler;
	this.parse = zenXMLParser_parse;
	this.parseString = zenXMLParser_parseString;
	this.parseNode = zenXMLParser_parseNode;
}

/// Process the contents of the given string
/// as XML and invoke the content handler methods along the way.
function zenXMLParser_parseString(xml)
{
	// copy xml into workspace
	var ws = self.document.getElementById('zenWorkspace');
	if (ws) {
		ws.innerHTML = xml
		this.parse(ws);
	}
}

/// Process the contents of the DOM element el
/// as XML and invoke the content handler methods along the way.
function zenXMLParser_parse(el)
{
	if (!el) return;

	// loop over nodes until we find an element
	for (var n = 0; n < el.childNodes.length; n++) {
		var node = el.childNodes[n];
		if (1 == node.nodeType) {
			this.handler.startDocument();
			this.parseNode(node);
			this.handler.endDocument();
			break;
		}
	}
}

function zenXMLParser_parseNode(node)
{
	// get attributes for this node
	var attrs = node.attributes;
	var attrObj = new Object();  // holder for attrs
	for (var a = 0; a < attrs.length; a++) {
		var anode = attrs.item(a);
		if ('_moz' != anode.nodeName.substr(0,4)) {
			var aval = anode ? anode.nodeValue : '';
			attrObj[anode.nodeName.toLowerCase()] = aval;
		}
	}

	this.handler.startElement(node.nodeName.toLowerCase(), attrObj);

	// walk over children of this node
	for (var n = 0; n < node.childNodes.length; n++) {
		var child = node.childNodes[n];
		switch (child.nodeType) {
		case 1:	// element
			this.parseNode(child);
			break;
		case 3:	// text
			this.handler.characters(child.data);
			break;
		}
	}

	this.handler.endElement(node.nodeName.toLowerCase());
}

/// Prototype of content handler for zenXMLParser.
/// User should create an instance of this and then
/// point the various functions to their own implementations.
function zenXMLContentHandler()
{
	this.startDocument = zenXMLContentHandler_startDocument;
	this.endDocument = zenXMLContentHandler_endDocument;
	this.startElement = zenXMLContentHandler_startElement;
	this.endElement = zenXMLContentHandler_endElement;
	this.characters = zenXMLContentHandler_characters;
}

/// Notification on start of document
function zenXMLContentHandler_startDocument()
{
}

/// Notification on end of document
function zenXMLContentHandler_endDocument()
{
}

/// Notification on start of element.
/// attrs is object containing attributes as associated array.
function zenXMLContentHandler_startElement(name,attrs)
{
	alert('startElement: ' + name);
	for (var n in attrs) {
		alert(n + "=" + attrs[n]);
	}
}

/// Notification on end of element
function zenXMLContentHandler_endElement(name)
{
}

/// Notification of character data inside an element.
function zenXMLContentHandler_characters(chars)
{
}

/// Data object used by drag and drop
/// value is logical value of drag data
/// text is display value of drag data
function zenDragData()
{
	this.toString = zenDragData_toString;

	this.value = null;
	this.text = '';
	this.sourceMeta = '';
	this.targetMeta = '';
	this.sourceComponent = null;
	this.targetComponent = null;
	this.sourceItem = -1;
	this.targetItem = -1;
}

function zenDragData_toString()
{
	return this.text ? this.text : this.value;
}

/// Generic light-weight object for passing data between
/// client and server.
/// This class should be considered final.
function zenProxy()
{
	this._index = '';
}

zenProxy.prototype._serverClass = '%ZEN.proxyObject';
zenProxy.prototype.clear = zenProxy_clear;
zenProxy.prototype.serialize = zenProxy_serialize;
zenProxy.prototype.deserialize = zenProxy_deserialize;
zenProxy.prototype.toString = zenProxy_toString;

/// Clear contents of this object
function zenProxy_clear()
{
	for (var prop in this) {
		if ('_' != prop.charAt(0)) {
			delete this[prop];
		}
	}
}

/// Serialize object as a string.
function zenProxy_serialize(set,s)
{
	s[0] = '%ZEN.proxyObject';
	s[1] = zenGet(this._index);

	var d = new Array();
	for (var prop in this) {
		if ('_' != prop.charAt(0)) {
			switch (typeof this[prop]) {
			case 'string':
			case 'number':
				s[s.length] = prop + '\x05' + this[prop];
				break;
			case 'object':
				break;
			}
		}
	}
}

/// Deserialize string into object.
function zenProxy_deserialize(state)
{
	this.clear();
	var p = state.split('\x01');
	for (var n = 2; n < p.length; n++) {
		var t = p[n].split('\x05');
		var prop = t[0];
		var val = t[1];
		if (prop!='') {
			this[prop] = val;
		}
	}
}

function zenProxy_toString()
{
	// if proxy is used as a string, send the packed state
	var s = new Array();
	this.serialize(null,s);
	return s.join('\x06');
}

// ---------------------------------------------------