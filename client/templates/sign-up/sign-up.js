Template.signup.events({
        'submit form': function(evt, tmpl) {
                event.preventDefault();
                var emailVar = tmpl.find('#signup-email').value;
                var passwordVar = tmpl.find('#signup-password').value;
                Accounts.createUser({
                        email: emailVar,
                        password: passwordVar,
                        sendVerificationEmail: true,
                        }, function(err) {
                                if(err) {
                                bootbox.alert(err.reason + 'Please try again!');
                        }
                        else {
                                bootbox.alert('Created user!');
                                Router.go('home');
                        }
                });
        },
})