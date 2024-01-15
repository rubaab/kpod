$("#formvalidation").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
    description: {
      required: true,
      minlength: 10,
    },
    // phone : {
    //   required: true,
    //   minlength: 10,
    //   maxlength: 10,
    //   number: true,
    // },
  },
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Your name must consist of at least 2 characters",
    },
    email: {
      required: "Please enter your email",
      email: "Please enter a valid email address",
    },
    // phone: {
    //   required: "Please enter your phone number",
    //   minlength: "Your phone number must consist of at least 10 characters",
    //   maxlength: "Your phone number must consist of at least 10 characters",
    //   number: "Please enter a valid phone number",
    // }, 
  },

  submitHandler: function (form) {
    form.submit();
  },
});

// $(document).ready(function() {
//   $('#quoteForm').submit(function(e) {
//     e.preventDefault(); // prevent form submission

//     // validate form inputs
//     var name = $('#name').val();
//     var email = $('#email').val();
//     var password = $('#password').val();
//     var message = $('#message').val();
//     var phone = $('#phone').val();

//     if (name === '') {
//       alert('Please enter your name');
//       return false;
//     }

//     if (email === '') {
//       alert('Please enter your email');
//       return false;
//     }

//     if (phone === '') {
//       alert('Please enter your phone');
//       return false;
//     }

//     if (message === '') {
//       alert('Please enter your message');
//       return false;
//     }

//     // if all inputs are valid, submit the form
//     this.submit();
//   });
// });

// $("#quoteForm").validate({
//   rules: {
//     name: {
//       required: true,
//       minlength: 2,
//     },
//     email: {
//       required: true,
//       email: true,
//     },
//     description: {
//       required: true,
//       minlength: 10,
//     },
//     phone : {
//       required: true,
//       minlength: 10,
//       maxlength: 10,
//       number: true,
//     },
//   },
//   messages: {
//     name: {
//       required: "Please enter your name",
//       minlength: "Your name must consist of at least 2 characters",
//     },
//     email: {
//       required: "Please enter your email",
//       email: "Please enter a valid email address",
//     },
//     phone: {
//       required: "Please enter your phone number",
//       minlength: "Your phone number must consist of at least 10 characters",
//       number: "Please enter a valid phone number",
//     }, 
//   },

//   submitHandler: function (form) {
//     form.submit();
//   },
// });

// $('#formvalidation').submit(function(event) {
//     var inputVal = $('#name').val();
//     var lettersRegex = /^[A-Za-z]+$/;
//     if (!lettersRegex.test(inputVal)) {
//       $('#name').addClass('error'); // add a CSS class to highlight the field
//       $('#myInputError').text('Please enter only letters'); // display an error message
//       event.preventDefault();
//     }
//   });
//   $('#formvalidation').submit(function(event) {
//     var inputVal = $('#name').val(); // get the value of the input field
//     var lettersRegex = /^[A-Za-z]+$/; // regex to match only letters
//     if (!lettersRegex.test(inputVal)) {
//       alert('Please enter only letters'); // display an error message
//       event.preventDefault(); // prevent the form from submitting
//     }
//   });

function sendEmail() {
  e.preventDefault();
  // console.log("details section");
  alert("details section");
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "huzshaikh042@gmail.com",
    Password: "bmwxammyaezpbudo",
    To: "huzshaikh042@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Free trial request",
    Body: "And this is the body",

  }).then((message) => alert(message));
  
}


function formvalue() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var description = document.getElementById("description").value;
  var data = {
    name: name,
    email: email,
    description: description,
  };
  console.log(data);
  return data;
}

//    var value = $("input[type=radio][name=year]:checked").val();
//    if (value) {
//        alert(value);
//    }
//    else {
//        alert('Nothing is selected');
//    }

//    var data,
//    data = document.querySelector('input[name="year"]:checked').value;
//    console.log(data);

// const radioButtons = document.querySelectorAll('input[name="year"]');
// let selectedValue;
// radioButtons.forEach(function(radioButton) {
//     if (radioButton.checked) {
//         selectedValue = radioButton.value;
//     }
// });
// console.log(selectedValue);

// $(document).ready(function() {
//     $('button').click(function() {
//         var value = $("input[type=radio][name=year]:checked").val();
//         if (value) {
//             alert(value);
//         }
//         else {
//             alert('Nothing is selected');
//         }
//     })
// });

// $(document).ready(function(){
//     $('input[type="radio"]').change(function(){
//     var eventID = $(this).val();
//        if (eventID == 1) {
//            alert("you selected USA");
//        }else if (eventID == 2) {
//            alert("you selected India");
//        }else if (eventID == 3) {
//            alert("you selected Bangladesh");
//        }
//     });
//   });



