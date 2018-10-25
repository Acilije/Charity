$(function () {
    var name = $('.name');
    var email = $('.email');
    var subject = $('.subject');
    var nameInput = $('.name').val();
    var emailInput = $('.email').val();
    var subjectInput = $('.subject').val();
    var submit = $('#submit');
    var warning = $('.warning-note');
    

    // submit.on('click', function () {
    //     if (nameInput == "" || emailInput == "" || subjectInput == "") {
    //         warning.show()
    //         // warning.css('display','block');            
    //     };
    // })

    
    // submit.on('click', function () {
    //     if (nameInput == "") {
    //         name.css('border' , '2px solid red');          
    //     };
    // })

    // submit.on('click', function () {
    //     if (emailInput == "") {
    //         email.css('border' , '2px solid red');          
    //     };
    // })

    // submit.on('click', function () {
    //     if (subjectInput == "") {
    //         subject.css('border' , '2px solid red');          
    //     };
    // })    

    submit.on('click', function () {
        if (nameInput === "") {
            warning.show()
            name.css('border' , '2px solid red');          
        }
    })

    submit.on('click', function () {
        if (emailInput === "") {
            warning.show()
            email.css('border' , '2px solid red');          
        }
    })

    submit.on('click', function () {
        if (subjectInput === "") {
            warning.show()
            subject.css('border' , '2px solid red');          
        }
    })


})