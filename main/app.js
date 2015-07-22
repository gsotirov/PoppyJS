
/*
	===> Static Tests (All notifications(Success, Error, Info, Warning, Modal))
*/

(function () {
	'use strict';
    
    poppy.pop('Warning', 'Some warning here', 'I warn you!!!', null, null, function() {
        console.log('Warning, you are on thin ice');
    });
    
    poppy.pop(
        'Confirm', 
        'Are you sure you want to delete this item?', 
        'If you click \'Yes\' the item will be delete and could not be restored!', function () {
            console.log('Success');
        }, function () {
            console.log('Error has occured! Please try again!');
        }
    );
    
    poppy.pop('Success', 
              'Login Successful',
              'You have successfully logged in to our website!'
    );
    
    poppy.pop('Info', 
              'Messages waiting for your attention!',
              'You have 25 unread messages in your inbox!'
    );
    
    poppy.pop('Error',
              'Something went wrong!',
              'The credentials you are using to log in seem to be incorrect. Please try again...'
    );
})();

