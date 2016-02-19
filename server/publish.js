Meteor.publish('jobs', function() {
	return JobList.find({}, {sort: {createdAt: -1}});
})