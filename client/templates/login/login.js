Template.login.events({
	'submit #login-form': function(evt, tmp) {
		evt.preventDefault();
		var email = tmp.find('#login-email').value;
		var password = tmp.find('#login-password').value;
		Meteor.loginWithPassword(email, password, function(err) {
			if(err) {
				bootbox.alert(err.reason);
			}
			else {
				bootbox.alert('Login Successful');
				Router.go('home');
			}
		});
		return false;
	}
})