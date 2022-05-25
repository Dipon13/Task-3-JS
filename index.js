let data1 = [];
obj = {};
let operation = function (data) {
    var statesAR = [];
    var districtsAR = [];
    for (i = 0; i < data.length; i++) {
        statesAR.push(data[i]["state"]);
    }
    var max = statesAR.length;
    var s = document.getElementById("stateid");
    stateid.innerHTML = "<option value=\"\">--Select--</option>";  // To reset the second list repeatedly.
    for (var i = 0; i < max; i++) {
        var txt = document.createTextNode(statesAR[i]);
        var opt = document.createElement("option");
        opt.appendChild(txt);
        s.insertBefore(opt, s.lastChild);
    }
    var t = stateid.value; 
    check(t);
    var x = document.getElementById("stateid").onchange = function () {
        var t = stateid.value;
        check(t);
    };
    function check(t) {

        districtid.innerHTML = "<option value=\"\">--Select--</option>";  // To reset the second list repeatedly.
        for (i = 0; i < data.length; i++) {
            if (t == data[i]["state"]) {
                districtsAR = data[i]["districts"];
                break;
            }
        }
        var max4 = districtsAR.length;
        var s1 = document.getElementById("districtid");
        for (var i = 0; i < max4; i++) {
            var txt = document.createTextNode(districtsAR[i]);
            var opt = document.createElement("option");
            opt.appendChild(txt);
            s1.insertBefore(opt, s1.lastChild);
        }
    }
}


//**************** ACCESSING JSON  ********** */


// fetch("index.json")
fetch("https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json")
    .then(
        function (resp) {
            return resp.json();
        }
    )
    .then(
        function (datas) {
            obj = datas;
            for (let prop in obj) {
                data1 = obj[prop];
                operation(data1);
            }
        }
    )
