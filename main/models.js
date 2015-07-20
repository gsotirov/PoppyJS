// TODO: Implement popup function constructors

DEFAULT_SETTINGS = {
	autoHide: false,
	timeOut: 3000,
	closeButton: false,
};

var poppy = poppy || {};

(function (p) {

	'use strict';

	var Notification = (function () {
		function Notification(title, message, type, position, closeButton, hasControls, autoHide, timeOut, callback) {
			this._popupData = {
				title: title,
				message: message,
				type: type,
				position: position,
				closeButton: closeButton || DEFAULT_SETTINGS.closeButton,
                controls: hasControls,
				autoHide: autoHide || DEFAULT_SETTINGS.autoHide,
				timeOut: timeOut || DEFAULT_SETTINGS.timeOut,
				callback: callback
			};
		};
		return Notification;
	})();

	var Success = (function() {
		function Success(title, message) {
			return Notification.call(this, title, message, 'Success', 'bottomLeft', true, false, false);
		}
		return Success;
	})();

	var Info = (function() {
		function Info(title, message) {
			return Notification.call(this, title, message, 'Info', 'topLeft', true, false, false);
		}
		return Info;
	})();

	var Error = (function() {
		function Error(title, message) {
			return Notification.call(this, title, message, 'Error', 'topRight', true, false, false);
		}
		return Error;
	})();

	var Warning = (function() {
		function Warning(title, message, callback) {
			return Notification.call(this, title, message, 'Warning', 'bottomRight', false, false, false, 0, callback);
		}
		return Warning;
	})();
    
    var Modal = (function() {
        function Modal(title, message, callback) {
            return Notification.call(this, title, message, 'Modal', 'center', true, true, false, 0, callback);
        }
        return Modal;
    })();

	p._data = {
		Success: Success,
		Info: Info,
		Error: Error,
		Warning: Warning,
        Modal: Modal
	};

})(poppy);