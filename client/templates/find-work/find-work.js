Meteor.subscribe('jobs');
Template.work.helpers({
	jobDetails: function() {
		var jobDetails = JobList.find({}, {sort: {createdAt: -1}});
		return jobDetails;
	}
});