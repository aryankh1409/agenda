let login = ()=>{
    let username = $('#l_username').val();
    let password = $('#l_password').val();
    $.ajax({
        url: `http://127.0.0.1:8080/login/`,
        type: "POST",
        data: {'username': username, 'password': password},
        success: (data,status)=>{
            if(data.auth){
                window.location.href = `http://127.0.0.1:8080/${username}`
            }else alert("User not registered");
        }
    })
    return false;
}
let signup = ()=>{
    let username = $('#s_username').val();
    let password = $('#s_password').val();
    $.ajax({
        url: `http://127.0.0.1:8080/signup/`,
        type: "POST",
        data: {'username': username, 'password': password},
        success: (data,status)=>{
            if(data.save){
                window.location.href = `http://127.0.0.1:8080/${username}`
            }
        }
    })
    return false;
}