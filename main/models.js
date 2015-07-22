// TODO: Implement popup function constructors

DEFAULT_SETTINGS = {
	autoHide: false,
	timeOut: 3000,
	closeButton: false,
    controls: false
};

var poppy = poppy || {};

(function (p) {

	'use strict';

	var Notification = (function () {
		function Notification(title, content, type, position, closeButton, autoHide, timeOut) {
			this._popupData = {
				title: title,
				content: content,
				type: type,
				position: position,
				closeButton: closeButton || DEFAULT_SETTINGS.closeButton,
				autoHide: autoHide || DEFAULT_SETTINGS.autoHide,
				timeOut: timeOut || DEFAULT_SETTINGS.timeOut
			};
		};
		return Notification;
	})();

	var Success = (function() {
		function Success(title, content) {
			return Notification.call(this, title, content, 'Success', 'bottomLeft', true, false);
		}
		return Success;
	})();

	var Info = (function() {
		function Info(title, content) {
			return Notification.call(this, title, content, 'Info', 'topLeft', true, false);
		}
		return Info;
	})();

	var Error = (function() {
		function Error(title, content) {
			return Notification.call(this, title, content, 'Error', 'topRight', true, false);
		}
		return Error;
	})();

	var Warning = (function() {
		function Warning(title, content, callback) {
			return Notification.call(this, title, content, 'Warning', 'bottomRight', true, false);
		}
		return Warning;
	})();

	p._data = {
		Success: Success,
		Info: Info,
		Error: Error,
		Warning: Warning
	};

})(poppy);

(function (p) {
    'use strict';
    
    var PopUp = (function () {
        function PopUp(title, content, type, position, closeButton, controls, autoHide, timeOut, successCallback, dismissCallback) {
            this._popupData = {
                title: title,
                type: type,
                content: content,
                position: position,
                controls: controls || DEFAULT_SETTINGS.controls,
                autoHide: autoHide || DEFAULT_SETTINGS.autoHide,
                closeButton: closeButton || DEFAULT_SETTINGS.closeButton,
                timeOut: timeOut || DEFAULT_SETTINGS.timeOut,
                success: successCallback,
                dismiss: dismissCallback
            };
        }
        return PopUp;
    })();
    
    var Confirm = (function() {
        function Confirm(title, content, successCallback, dismissCallback) {
            return PopUp.call(this, title, content, 'Confirm', 'center', true, true, false, 0, successCallback, dismissCallback);
        }
        return Confirm;
    })();
    
    poppy._data.Confirm = Confirm;
    
})(poppy);