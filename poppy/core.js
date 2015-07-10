var poppy = poppy || {};

(function (p) {
	'use strict';

	var OP_STEP = 0.1,
		FADE_OUT_TIME = 1,
		FADE_IN_TIME = 1;

	function pop(type, title, message, callback) {

	    var popup;

	    switch (type) {
	    	case 'Success':
	    		popup = new p._data.Success(title, message);
	    	break;
	    	case 'Info':
	    		popup = new p._data.Info(title, message);
	    	break;
	    	case 'Error':
	    		popup = new p._data.Error(title, message);
	    	break;
	    	case 'Warning':
	    		popup = new p._data.Warning(title, message, callback);
	    	break;
	    }
		// generate view from view factory
	    var view = p._viewFactory.createPopupView(popup);

	    processPopup(view, popup);
	}

	function processPopup(domView, popup) {

		if(popup._popupData.autoHide) {
			setTimeout(function () {
				fadeOut(domView, FADE_OUT_TIME);
			}, popup._popupData.timeOut);
		}

		if(popup._popupData.closeButton) {
			domView.getElementsByClassName('poppy-close-button')[0]
			.addEventListener('click', function () {
				fadeOut(domView, FADE_OUT_TIME)
			});
		}

		if(popup._popupData.callback) {
			domView.addEventListener('click', function () {
				popup._popupData.callback();
			});
		}

		domView.style.opacity = 0;
		document.body.appendChild(domView);
		fadeIn(domView, FADE_IN_TIME);

		function fadeOut(elem, interval) {
			var opacity = 1;
			var disappear = setInterval(function () {
				if(opacity <= 0) {
					document.body.removeChild(elem);
					clearInterval(disappear);
				}
				elem.style.opacity = opacity;
				opacity -= OP_STEP;
			}, interval);
		}

		function fadeIn(elem, interval) {
			var opacity = 0;
			var show = setInterval(function () {
				if(opacity >= 1) {
					clearInterval(show);
				}
				elem.style.opacity = opacity;
				opacity += OP_STEP;
			}, interval);
		}

	}
	p.pop = pop;

})(poppy);
