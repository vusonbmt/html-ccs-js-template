// var x = document.getElementById("myBtn");
// if (x.addEventListener) {
//   x.addEventListener("click", myFunction);
// } else if (x.attachEvent) {
//   x.attachEvent("onclick", myFunction);
// }

// function myFunction() {
//   alert("Hello World!");
// }

// function myFunction() {
//     var coffee = document.forms[0];
//     var txt = "";
//     var i;
//     for (i = 0; i < coffee.length; i++) {
//       if (coffee[i].checked) {
//         txt = txt + coffee[i].value + " ";
//       }
//     }
//     document.getElementById("order").value = "You ordered a coffee with: " + txt;
//   }

// $(document).ready(function(){
//     $("input[type='button']").click(function(){
//         var radioValue = $("input[name='gender']:checked").val();
//         if(radioValue){
//             alert("Your are a - " + radioValue);
//         }
//     });
// });
$(document).ready(function() {
    $("input[name$='cars']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Cars" + test).show();
    });
});