function addData(){
    var name = document.getElementById(fullname).value;
    var mail = document.getElementById(email).value;
    var pass = document.getElementById(password).value;

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', mail);
    localStorage.setItem('userPassword', pass);

}