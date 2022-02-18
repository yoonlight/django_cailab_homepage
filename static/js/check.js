function checkfield(){
    let firName = document.getElementById("first-name");
    let laName = document.getElementById('last-name');
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let conPassword = document.getElementById("con-password");
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    let checkboxChk = document.getElementById("terms").checked;

    if (firName.value == ""){
        alert("please insert first name");
        firName.focus();
        return false;
    }else if (laName.value == ""){
        alert("please insert last name");
        laName.focus();
        return false;
    }else if (email.value == ""){
        alert("please insert email");
        email.focus();
        return false;
    }else if (password.value == ""){
        alert("please insert password");
        password.focus();
        return false;
    }else if (conPassword.value == ""){
        alert("please insert conPassword");
        conPassword.focus();
        return false;
    }

    if (exptext.test(email.value)==false){
        alert("이 메일형식이 올바르지 않습니다.");
        email.focus();
        return false;
    }

    if(password.length < 8){
        alert("password가 8자보다 짧습니다.");
        password.focus();
        return false;
    }

    if (!checkboxChk){
        alert("checkbox를 체크해주시길 바랍니다.");
        checkboxChk.focus();
        return false;
    }
    
    document.join_form.submit();
}
