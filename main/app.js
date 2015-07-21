
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
    poppy.pop('Warning', 'Some warning here', 'I warn you!!!', function() {
        console.log('Warning');
    });
    poppy.pop(
        'Modal', 
        'Would you like to go on a date with me?', 
        'Click to confirm if you are willing to have the best time of your life...', 
        function () {
            console.log('Success');
        },
        function () {
            console.log('Error has occured! Please try again!');
        }
    );
})();

