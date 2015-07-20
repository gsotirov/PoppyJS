
var poppy = poppy || {};

(function (p) {
    'use strict';

    var CLOSE_BUTTON_TEXT = '×',
        POSITIONS = {
            'topLeft': 'poppy-top-left',
            'topRight': 'poppy-top-right',
            'bottomLeft': 'poppy-bottom-left',
            'bottomRight': 'poppy-bottom-right',
            'center': 'poppy-center'
        },
        POPUP_TYPES = {
            'Error': 'poppy-error',
            'Info': 'poppy-info',
            'Success': 'poppy-success',
            'Warning': 'poppy-warning',
            'Modal': 'poppy-modal'
        };

    var createPopupView = function(popup) {
        var popupData = popup._popupData,
            positionClass = POSITIONS[popupData.position],
            typeClass = POPUP_TYPES[popupData.type],
            autoHide = popupData.autoHide || false,
            timeout = popupData.timeout,
            close = popupData.closeButton || false,
            controls = popupData.controls || false,
            title = popupData.title,
            message = popupData.message,
            callback = popupData.callback;

        var containerNode = document.createElement('div'),
            popupNode = document.createElement('div'),
            button = document.createElement('button'),
            okButton = document.createElement('button'),
            cancelButton = document.createElement('button'),
            titleNode = document.createElement('div'),
            messageNode = document.createElement('div');

        attachClasses();

        if (close === true) {
            button.innerText = CLOSE_BUTTON_TEXT;
            button.setAttribute('type', 'button');
            button.className += "poppy-close-button";
            popupNode.appendChild(button);
        }
        
        if (controls === true) {
            okButton.innerText = 'Ok';
            cancelButton.innerText = 'Cancel';
            okButton.setAttribute('type', 'button');
            okButton.setAttribute('class', 'btn btn-success');
            cancelButton.setAttribute('type', 'button');
            cancelButton.setAttribute('class', 'btn btn-error');
            popupNode.appendChild(okButton);
            popupNode.appendChild(cancelButton);
        }

        containerNode.appendChild(popupNode);
        popupNode.appendChild(titleNode);
        popupNode.appendChild(messageNode);

        return containerNode;

        function attachClasses() {
            containerNode.className += positionClass + ' poppy-container';
            popupNode.className += typeClass;
            titleNode.className += "poppy-title";
            titleNode.innerText = title;
            messageNode.className += "poppy-message";
            messageNode.innerText = message;
        }
    }

    p._viewFactory = {
        createPopupView: createPopupView
    };

})(poppy);

