function inputonblur(obj,def,type) {
    if (obj.value == "") {
        obj.value = def;
        obj.style.color = "rgb(196,196,196)";
        obj.type = "text";
    } else {
        obj.type = type;
    }
  }  
  
  function inputonfocus(obj,def,type) {
    if (obj.value == def) {
        obj.style.color = "#000";
        obj.value = "";
    }
    obj.type = type;
  }
  
function check() {
    var flag = true;
    var accountInput = document.getElementById("account");
    if (accountInput.value == "" || accountInput.value == "请输入已验证手机/邮箱") {
        document.getElementById("account-tip").setAttribute("style","visibility:visible;");
        flag = false;
    }else{        
        document.getElementById("account-tip").setAttribute("style","visibility:hidden;");
    }
    var passwordInput = document.getElementById("password");
    if (passwordInput.value == "" || passwordInput.value == "请输入密码") {
        document.getElementById("password-tip").setAttribute("style","visibility:visible;");
        flag = false;
    }else{        
        document.getElementById("password-tip").setAttribute("style","visibility:hidden;");
    }
    return flag;
}