
/*
===> Login form test (Success/Error)
*/

/*(function () {
	'use strict';

	var form = document.getElementById('login-form');

	form.addEventListener('submit', function (event) {

		event.preventDefault();

		var correctUserName = 'Cortez',
			correctPassword = '1234';

		var username = document.getElementById('tb-username').value,
			password = document.getElementById('tb-password').value;

		if(username === correctUserName && password === correctPassword) {
			poppy.pop('Success', 'Success!', 'You have successfully logged in!');
		}
		else {
			poppy.pop('Error', 'Something went wrong!', 'Your credentials seem to be incorrect. Please double-check and try again.');
		}
	});

})();*/


/*
	===> Static Tests (All notifications(Success, Error, Info, Warning))
*/

(function () {
	'use strict';

	poppy.pop('Success', 'Success!', 'You have successfully logged in!');
	poppy.pop('Info', 'Check this out', 'You have 3 unread messages in your inbox');
	poppy.pop('Error', 'Something went really wrong', 'Your credentials seem to be incorrect');
	poppy.pop('Warning', 'Some errors have occured during installation', 'Click to check out our installation guide.', function () {
		window.location = 'http://google.com';
	});

})();

