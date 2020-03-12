$(function() {
    $("#button_register").click(function() {
        if ($("#input_password").val() != "" && $("#input_r_password").val() != "" && $("#input_email").val() != "" && $("input_first_name").val() != "" && $("input_phone").val() != "") {
            if ($("input_password").val() == $("input_r_password").val()){
                alert(
                    "name = " + $("#input_first_name").val() + "\n" +
                    "email = " + $("#input_email").val() + "\n" +
                    "password = " + $("#input_password").val() + "\n" +
                    "repeat password = " + $("#input_r_password").val() + "\n" +
                    "phone = " + $("#input_phone").val() + "\n"
                )
            }
            else {
                alert("As senhas não são compativeis")
            }
        }
        else {
            alert("falta campos para prencher")
        }
    })


    $(document).ready(function() {
        $("#input_phone").mask("(00) 0 0000-0000");
    })
})

