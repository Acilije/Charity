$(function () {
    var name = $('.name');
    var email = $('.email');
    var subject = $('.subject');
    var submit = $('#submit');
    var warning = $('.warning-note');


    submit.on('click', function () {
        var nameInput = name.val()
        var emailInput = email.val()
        var subjectInput = subject.val();

        if (nameInput == "") {
            warning.show();
            name.css('border', '2px solid #b62d32');
        }
        else {
            name.css('border', '2px solid #e4e2de');
        }

        if (emailInput == "") {
            warning.show();
            email.css('border', '2px solid #b62d32');
        }
        else {
            email.css('border', '2px solid #e4e2de');
        }

        if (subjectInput == "") {
            warning.show();
            subject.css('border', '2px solid #b62d32');
        }
        else {
            subject.css('border', '2px solid #e4e2de');
        }

        if (nameInput !== "" && emailInput !== "" && subjectInput !== "") {
            warning.hide();

            // nece input submit pa je div. ovo je post, samo ubaci adresu
           $.post("/", {
                name: nameInput,
                email: emailInput,
                subject: subjectInput,
            }, function (data) {

            })


            //  Reset value
            name.val('');
            email.val('');
            subject.val('');

        }
    })

})
