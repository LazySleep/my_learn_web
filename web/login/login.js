function accountOnFocus() {
    var accountInput = document.getElementById("account");
    if (accountInput.value == "请输入已验证手机/邮箱") {
        accountInput.value = "";
        accountInput.style.color = "#000";
    }
}

function accountOnBlur() {
    var accountInput = document.getElementById("account");
    if (accountInput.value == "") {
        accountInput.value = "请输入已验证手机/邮箱";
        accountInput.style.color = "rgb(196,196,196)";
    }
}

function passwordOnFocus() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.value == "请输入密码") {
        passwordInput.style.color = "#000";
        passwordInput.value = "";
    }
    passwordInput.type = "password";
}

function passwordOnBlur() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.value == "") {
        passwordInput.value = "请输入密码";
        passwordInput.style.color = "rgb(196,196,196)";
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}