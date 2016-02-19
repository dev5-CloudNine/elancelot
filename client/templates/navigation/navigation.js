Template.navigationBar.events({
	'click .logout': function(evt, tmp) {
		evt.preventDefault();
		Meteor.logout();
		bootbox.alert('Hope to see you some time quickly!');
		Router.go('login');
	}
})
Template.navigationBar.helpers({
	userEmail: function () {
		var user = Meteor.user();
		var email = user && user.emails && user.emails[0].address;
		return email;
	}
});