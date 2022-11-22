function askName() {
    var name = prompt("Adınızı Giriniz");
    document.getElementById("myName").innerText = name;
}

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dayNumber = date.getDay();
    
    var arrayOfWeekDays = ["Pazartesi", "Salı", "Carsamba", "Persembe", "Cuma", "Cumartesi", "Pazar"]
    var dayNumber = arrayOfWeekDays[dayNumber]

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + "" + dayNumber;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}

askName();
showTime();