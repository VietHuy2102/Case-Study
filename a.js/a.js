class Index {
    constructor(activate,time,location) {
        this._activate = activate;
        this._time = time;
        this._location = location;
    }
    getActivate() {
        return this._activate;
    }
    getTime() {
        return this._time;
    }
    getLocation() {
        return this._location;
    }

}

function save() { //tao ra 1 nut bam onclick vao day voi id: save
    }
    let activate = document.getElementById('activate').value;
    let time = document.getElementById('time').value;
    let location = document.getElementById('location').value;
    let index = new Index(activate,time,location);
    let currentData = loadLocalStorage();
    if (!currentData) {
        let arr = [];
        arr.push(index);
        saveLocalStorage(arr)
    } else  {
        currentData.push(index);
        saveLocalStorage(currentData)
    }
    showIndex()

function showIndex() {
    let data = loadLocalStorage();
    let a = ''
    if (data) {
        let arr = []
        for (let i=0; i< data.length;i++) {
            let item = data[i]
            let index = new Index(item._activate, item._time, item._location);
            arr.push(index)
        }
        for (let i=0; i<arr.length;i++) {
            a +='<tr>'
            a +=`<td>${i+1}</td>`
            a +=`<td>${arr[i].getActivate()}</td>`
            a +=`<td>${arr[i].getTime()}</td>`
            a +=`<td>${arr[i].getLocation()}</td>`
            a +='</tr>'
        }
    }

    document.getElementById('list-content').innerHTML = html;
}
function saveLocalStorage (data) {
    localStorage.setItem('Menu',JSON.stringify(data));
}

function loadLocalStorage () {
    return JSON.parse(localStorage.getItem('Menu'))
}
showIndex()