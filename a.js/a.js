class Timetable {
    constructor(activate, time, location) {
        this._activate = activate;
        this._time = time;
        this._location = location;
    }
}

let n = -1;

function save() { //tao ra 1 nut bam onclick vao day voi id: save

// Lấy dữ liệu từ ô input
    let activate = document.getElementById('activate').value;
    let time = document.getElementById('time').value;
    let location = document.getElementById('location').value;
//Sau đó khởi tạo thành 1 đối tượng
    let timetable = new Timetable(activate, time, location);

    let currentData = loadLocalStorage();
    // !currentData sẽ ra kết quả null
    if (!currentData) {//Nếu mảng curr không có dữ liệu ( Th thêm dữ liệu lần đầu tiên)
        let arr = [];
        arr.push(timetable);  // push lần đầu tiên timetable vào mảng
        saveLocalStorage(arr); // ;lưu mảng arr vào Storage
    } else {
        if (n === -1) { // TH thêm lần thứ 2, gán n = -1 ở trên(n là vị trí index ở trong mảng)
            currentData.push(timetable); // push timetable vào vị trí cuối mảng currentData
            saveLocalStorage(currentData);// ;lưu mảng arr vào Storage
        } else {
            currentData[n] = timetable;// đây là TH edit, n = index vị trí của OBJ cần chỉnh sửa thông tin=> n#-1, sửa lại thông tin thành timetable mới tại vị trí n
            saveLocalStorage(currentData);// ;lưu mảng arr vào Storage
            n = -1;// gàn lại n=-1 để lập lại vòng lặp mới, nếu không thì những TH sau sẽ tự động nhẩy về TH edit
        }
    }
    showTimetable();// in ra màn hình
}

function showTimetable() { // hành động in ra màn hình
    let data = loadLocalStorage();
    let a = ''
    if (data) {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            a += '<tr>'
            a += `<td>${i + 1}</td>`
            a += `<td>${data[i]._activate}</td>`
            a += `<td>${data[i]._time}</td>`
            a += `<td>${data[i]._location}</td>`
            a += `<td><button onclick="editTimetable(${i})">Edit</button></td>`
            a += `<td><button onclick="deleteTimetable(${i})">Delete</button></td>`
            a += '</tr>'
        }
    }
    document.getElementById('list-content').innerHTML = a;
}

function saveLocalStorage(data) { // hành động lưu vào bộ nhớ
    localStorage.setItem('Menu', JSON.stringify(data));
}

function loadLocalStorage() { // hành động lấy từ bộ nhớ ra
    return JSON.parse(localStorage.getItem('Menu'));
}

showTimetable();

function editTimetable(x) {// hành động sửa
    let data = loadLocalStorage(); // đặt data bằng mảng Obj đã lấy ra ở trên
    n = x;
    document.getElementById('activate').value = data[n]._activate;//lấy thuộc tính activate của Obj ở vị trí thứ n của mảng data
    document.getElementById('time').value = data[n]._time;
    document.getElementById('location').value = data[n]._location;
}

function deleteTimetable(timetable) {
    let data = loadLocalStorage();
    data.splice(timetable, 1);
    saveLocalStorage(data);
    showTimetable();
}