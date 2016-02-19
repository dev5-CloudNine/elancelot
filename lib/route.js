Router.configure({
	layoutTemplate: 'layout'
});
Router.map(function() {
	this.route('home', {
		path: '/',
		onBeforeAction: function() {
			Session.set('documentTitle', 'Lancelot - Home');
			this.next();
		}
	});
	this.route('login', {
		path: '/login',
		onBeforeAction: function() {
			Session.set('documentTitle', 'Lancelot - Login');
			this.next();
		}
	});
	this.route('signup', {
		path: '/signup',
		onBeforeAction: function() {
			Session.set('documentTitle', 'Lancelot - Sign Up');
			this.next();
		}
	});
	this.route('work', {
		path: '/work',
		onBeforeAction: function() {
			Session.set('documentTitle', 'Lancelot - Find Work');
			this.next();
		}
	});
	this.route('listJob', {
		path: '/listJob',
		onBeforeAction: function() {
			Session.set('documentTitle', 'Lancelot - List a Job');
			this.next();
		}
	});
	this.route('jobDescription', {
		path: '/work/:_id',
		obBforeAction: function() {
			Session.set('documentTitle', 'Lancelot - Job Description');
			this.next();
		},
		data: function() {
			var currentJob = this.params._id;
			var jobDesc = JobList.findOne({_id: currentJob});
			console.log(jobDesc);
			return JobList.findOne({_id: currentJob});
		}
	});
})