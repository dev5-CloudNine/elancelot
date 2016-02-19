Template.listJob.events({
	'click .uploadImage': function(event, temp) {
		filepicker.setKey('AOqql1CvRF29BHvXYEaWHz');
		filepicker.pickMultiple(
		{
			mimetype: 'image/*',
			services: ['COMPUTER', 'FACEBOOK', 'WEBCAM'],
			imageDim: [400, null],
			imageQuality: 100
		}, function(blobs) {
			blobs.forEach(function(blob) {
				$('.uploadedImages')
				    .append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3><a href class="thumbnail"><img src="' + blob.url + '"></a></div>');
				});
			}	
		)
	},
	'click .uploadProfileImage': function(event, temp) {
		filepicker.setKey('AOqql1CvRF29BHvXYEaWHz');
		filepicker.pick(
		{
			mimetype: 'image/*',
			services: ['COMPUTER', 'FACEBOOK', 'WEBCAM'],
			imageDim: [400, null],
			imageQuality: 100
		}, function(image) {
			$('.profileImage')
				.replaceWith('<img class="img-circle profileImage" src="' + image.url + '" width=100px height=100px>');
		})
	},
	'submit .listJobForm': function (event, temp) {
		event.preventDefault();
		var jobTitle = event.target.jobTitle.value;
		var industryType = event.target.industryType.value;
		var jobLocation = event.target.jobLocation.value;
		var employmentType = event.target.employmentType.value;
		var jobDesc = event.target.jobDesc.value;
		var aboutCompany = event.target.aboutCompany.value;
		var compensationAmt = event.target.compensationAmt.value;
		var compensationType = event.target.compensationType.value;
		var companyName = event.target.companyName.value;		
		var empRange = event.target.empRange.value;
		var companyAddress = event.target.officeAddress.value;
		var companyCity = event.target.officeCity.value;
		var companyState = event.target.officeState.value;
		var companyZip = event.target.officeZipCode.value;
		var managerFName = event.target.managerFName.value;
		var managerLName = event.target.managerLName.value;
		var managerDesig = event.target.managerDesignation.value;
		var managerPhone = event.target.managerPhone.value;
		JobList.insert({
			title: jobTitle,
			industry: industryType,
			location: jobLocation,
			description: jobDesc,
			about: aboutCompany,
			type: employmentType,
			salary: compensationAmt,
			salaryType: compensationType,
			company: companyName,
			noOfEmployees: empRange,
			address: companyAddress,
			city: companyCity,
			state: companyState,
			zip: companyZip,
			managerName: managerFName + ' ' + managerLName,
			managerDesignation: managerDesig,
			managerPhone: managerPhone,
			createdAt: new Date()
		});
		event.target.jobTitle.value = "";
		event.target.companyName.value = "";
		event.target.jobLocation.value = "";
		event.target.aboutCompany.value="";
		event.target.jobDesc.value="";
	},
});