Meteor.startup(function() {
	Deps.autorun(function() {
		document.title = Session.get('documentTitle');
	});
})