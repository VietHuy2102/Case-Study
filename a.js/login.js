let LoginData = [{
    username: "sukibachtung",
    password: "viethuy12"
}, {
    username: "admin",
    password: "12345"
}]

function savelocalStorage() {
   localStorage.setItem('Datalogin', JSON.stringify(LoginData))
}

function loadLocalStorage() {
    return JSON.parse(localStorage.getItem('Datalogin'))
}

savelocalStorage()

function Login() {
    let userName = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    let data = loadLocalStorage();
    console.log(data)
    console.log(userName);
    console.log(pass);
    for (let i = 0; i < data.length; i++) {
        if (data[i].username === userName && data[i].password === pass) {
            alert("Dang nhap thanh cong")
            window.location.href = "index.html"
            return;
        }
    }
    alert("Nhập lại thông tin")

}