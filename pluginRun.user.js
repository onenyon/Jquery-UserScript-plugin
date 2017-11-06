// ==UserScript==
// @name          Boilerplate.js
// @version       0.1
// @description   None
// @include       https://*
// @include       http://*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @grant         unsafeWindow
// @run-at        document-start
// @downloadURL   None
// ==/UserScript==

// Tested on Chrome only

function run($) {
    $({}).pluginName('call');
}

(function(plugin) {
    function GM_wait() {
        if (typeof unsafeWindow.jQuery == 'undefined')
            window.setTimeout(GM_wait, 100);
        else {
            if (typeof plugin == 'function')
                unsafeWindow.jQuery.fn[plugin.name] = plugin;
            run(unsafeWindow.jQuery);
        }
    }
    GM_wait();
})(function pluginName(call) {
    alert('Hello you called?');
    alert(call)
});