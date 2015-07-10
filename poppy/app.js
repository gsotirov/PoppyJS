poppy.pop('Success', 'Success!', 'You have successfully logged in!');
poppy.pop('Info', 'Check this out', 'You have 3 unread messages in your inbox');
poppy.pop('Error', 'Something went really wrong', 'Your credentials seem to be incorrect');
poppy.pop('Warning', 'Some errors have occured during installation', 'Click to check out our installation guide.', function () {
	window.location = 'http://google.com';
});