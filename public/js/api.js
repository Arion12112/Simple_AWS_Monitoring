
// url
const url_arahAngin = 'http://127.0.0.1:8000/api/arah_angin';
const url_intensitasCahaya = 'http://127.0.0.1:8000/api/intensitas_cahaya';
const url_kelembaban = 'http://127.0.0.1:8000/api/kelembaban';
const url_ketinggian = 'http://127.0.0.1:8000/api/ketinggian';
const url_kondisiCuaca = 'http://127.0.0.1:8000/api/kondisi_cuaca';
const url_kualitasUdara = 'http://127.0.0.1:8000/api/kualitas_udara';
const url_tekananUdara = 'http://127.0.0.1:8000/api/tekanan_udara';
const url_suhu = 'http://127.0.0.1:8000/api/suhu';

// async function getKecepatanAngin() {}
let firstTime1 = true;
async function getArahAngin() {
    // const response1 = await fetch(url_arahAngin);
    // const data1 = await response1.json();

    // document.getElementById('uniq1').textContent = data1.latest;
    //
    // if(firstTime1){
    //   for (var i = 0; i < 5; i++) {
    //       x1.push(data1.array[i].tanggal);
    //       y1.push(data1.array[i].nilai);
    //   }
    //   firstTime1 = false;
    // } else{
    //   x1.push(data1.array[0].tanggal);
    //   y1.push(data1.array[0].nilai);
    //   if (x1.length > 5) {
    //         x1.shift();
    //         y1.shift();
    //   }
    // }
    //
    // myChart1.update();
}
let firstTime2 = true;
async function getSuhu() {
    const response2 = await fetch(url_suhu);
    const data2 = await response2.json();

    document.getElementById('uniq2').textContent = parseInt(data2.latest);

    // histori
    // var xhis2 = document.getElementById("myTable2").rows.length;
    var table2 = document.getElementById("myTable2");
    var leg5 = data2.array.length;
    var bal5 = data2.rata_hari.length;
    if(firstTime2){
      if(bal5 > 0){
        for (var j = bal5-1; j >= 0; j--) {
          var row2 = table2.insertRow(1);
          var cell12 = row2.insertCell(0);
          var cell22 = row2.insertCell(1);
          cell12.innerHTML = parseInt(data2.rata_hari[j].rata_rata) + " °C";
          cell22.innerHTML = data2.rata_hari[j].tanggal;
        }
        var row2 = table2.insertRow(1);
        var cell12 = row2.insertCell(0);
        var cell22 = row2.insertCell(1);
        cell12.innerHTML = parseInt(data2.rata_rata) + " °C";
        cell22.innerHTML = "Hari ini";

      }

      for (var i = leg5-1; i >= 0; i--) {
          x2.push(data2.array[i].tanggal);
          y2.push(parseInt(data2.array[i].nilai));
      }
      firstTime2 = false;
    } else{
      x2.push(data2.array[0].tanggal);
      y2.push(parseInt(data2.array[0].nilai));
      if (x2.length > 60) {
            x2.shift();
            y2.shift();
      }
    }
    myChart2.update();
}
let firstTime3 = true;
async function getKelembaban() {
    const response3 = await fetch(url_kelembaban);
    const data3 = await response3.json();

    document.getElementById('uniq3').textContent = parseFloat(data3.latest).toFixed(2);

    //histori
    // var xhis3 = document.getElementById("myTable3").rows.length;
    var table3 = document.getElementById("myTable3");
    var leg4 = data3.array.length;
    var bal4 = data3.rata_hari.length;
    if(firstTime2){
      if(bal4 > 0){
        for (var j = bal4-1; j >= 0; j--) {
          var row3 = table3.insertRow(1);
          var cell13 = row3.insertCell(0);
          var cell23 = row3.insertCell(1);
          cell13.innerHTML = parseFloat(data3.rata_hari[j].rata_rata).toFixed(2) + " RH";
          cell23.innerHTML = data3.rata_hari[j].tanggal;
        }
        var row3 = table3.insertRow(1);
        var cell13 = row3.insertCell(0);
        var cell23 = row3.insertCell(1);
        cell13.innerHTML = parseFloat(data3.rata_rata).toFixed(2) + " RH";
        cell23.innerHTML = "Hari ini";
      }
      for (var i = leg4-1; i >= 0; i--) {
          x3.push(data3.array[i].tanggal);
          y3.push(parseFloat(data3.array[i].nilai).toFixed(2));
      }
      firstTime3 = false;
    } else{
      x3.push(data3.array[0].tanggal);
      y3.push(parseFloat(data3.array[0].nilai).toFixed(2));
      if (x3.length > 60) {
            x3.shift();
            y3.shift();
      }
    }

    myChart3.update();
}
let firstTime4 = true;
async function getTekananUdara() {
    const response4 = await fetch(url_tekananUdara);
    const data4 = await response4.json();

    document.getElementById('uniq4').textContent = parseFloat(data4.latest).toFixed(2);

    //histori
    // var xhis4 = document.getElementById("myTable4").rows.length;
    var table4 = document.getElementById("myTable4");
    var leg3 = data4.array.length;
    var bal3 = data4.rata_hari.length;
    if(firstTime4){
      //histori
      if(bal3 > 0){
        for (var j = bal3-1; j >= 0; j--) {
          var row4 = table4.insertRow(1);
          var cell14 = row4.insertCell(0);
          var cell24 = row4.insertCell(1);
          cell14.innerHTML = parseFloat(data4.rata_hari[j].rata_rata).toFixed(2) + " mmHg";
          cell24.innerHTML = data4.rata_hari[j].tanggal;
        }
        var row4 = table4.insertRow(1);
        var cell14 = row4.insertCell(0);
        var cell24 = row4.insertCell(1);
        cell14.innerHTML = parseFloat(data4.rata_rata).toFixed(2) + " mmHg";
        cell24.innerHTML = "Hari ini";
      }

      for (var i = leg3-1; i >= 0; i--) {
          x4.push(data4.array[i].tanggal);
          y4.push(parseFloat(data4.array[i].nilai).toFixed(2));
      }
      firstTime4 = false;
    } else{
      x4.push(data4.array[0].tanggal);
      y4.push(parseFloat(data4.array[0].nilai).toFixed(2));
      if (x4.length > 60) {
            x4.shift();
            y4.shift();
      }
    }

    myChart4.update();
}
let firstTime5 = true;
async function getIntensitasCahaya() {
    const response5 = await fetch(url_intensitasCahaya);
    const data5 = await response5.json();

    document.getElementById('uniq5').textContent = data5.latest.toFixed(2);

    //histori
    // var xhis5 = document.getElementById("myTable5").rows.length;
    var table5 = document.getElementById("myTable5");
    var leg6 = data5.array.length;
    var bal6 = data5.rata_hari.length;
    if(firstTime4){
      //histori
      if(bal6 > 0){
        for (var j = bal6-1; j >= 0; j--) {
          var row5 = table5.insertRow(1);
          var cell15 = row5.insertCell(0);
          var cell25 = row5.insertCell(1);
          cell15.innerHTML = data5.rata_hari[j].rata_rata + " Cd";
          cell25.innerHTML = data5.rata_hari[j].tanggal;
        }

        var row5 = table5.insertRow(1);
        var cell15 = row5.insertCell(0);
        var cell25 = row5.insertCell(1);
        cell15.innerHTML = data5.rata_rata + " Cd";
        cell25.innerHTML = "Hari ini";
      }

      for (var i = leg6-1; i >= 0; i--) {
          x5.push(data5.array[i].tanggal);
          y5.push(data5.array[i].nilai);
      }
      firstTime5 = false;
    } else{
      x5.push(data5.array[0].tanggal);
      y5.push(data5.array[0].nilai);
      if (x5.length > 60) {
            x5.shift();
            y5.shift();
      }
    }

    myChart5.update();
}
let firstTime6 = true;
var inc = 0;
async function getKualitasUdara() {
    const response6 = await fetch(url_kualitasUdara);
    const data6 = await response6.json();

    document.getElementById('uniq6').textContent = data6.latest;
    const card6 = document.getElementsByClassName("card7")[0];
    if (data6.latest == 'Sehat') {
        card6.style.background = "#5ae657";
    }
    if (data6.latest == 'Normal') {
        card6.style.background = "#d5e354";
    }
    if (data6.latest == 'Tidak Sehat') {
        card6.style.background = "#e39e54";
    }
    if (data6.latest == 'Bahaya') {
        card6.style.background = "#e35459";
    }

    // var x = document.getElementById("myTable").rows.length;
    var leg = data6.array.length;
    var table = document.getElementById("myTable");
    // var xx = document.getElementById("myTable").rows.length;

    if(firstTime6){
      for (var i = 0; i <= leg-1; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = data6.array[i].nilai;
        cell2.innerHTML = data6.array[i].tanggal;
        if (data6.array[i].nilai == 'Sehat') {
            cell3.style.backgroundColor = "#5ae657";
        }
        if (data6.array[i].nilai == 'Normal') {
            cell3.style.backgroundColor = "#d5e354";
        }
        if (data6.array[i].nilai == 'Tidak Sehat') {
            cell3.style.backgroundColor = "#e39e54";
        }
        if (data6.array[i].nilai == 'Bahaya') {
            cell3.style.backgroundColor = "#e35459";
        }
      }
      firstTime6 = false;
    }else if(inc > 119 ){
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = data6.array[0].nilai;
      cell2.innerHTML = data6.array[0].tanggal;
      if (data6.array[0].nilai == 'sehat') {
          cell3.style.backgroundColor = "#5ae657";
      }
      if (data6.array[0].nilai == 'normal') {
          cell3.style.backgroundColor = "#d5e354";
      }
      if (data6.array[0].nilai == 'tidak sehat') {
          cell3.style.backgroundColor = "#e39e54";
      }
      if (data6.array[0].nilai == 'bahaya') {
          cell3.style.backgroundColor = "#e35459";
      }
      if (xx > 24) {
        document.getElementById("myTable").deleteRow(1);
      }

      inc = 0;
    }

    inc = inc + 1;

}
let firstTime7 = true;
var inc1 = 0;
async function getKondisi() {
    const response7 = await fetch(url_kondisiCuaca);
    const data7 = await response7.json();

    document.getElementById('uniq7').textContent = data7.latest;
    const card7 = document.getElementsByClassName("card8")[0];
    if (data7.latest == 'Basah') {
        card7.style.background = "#0374ff";
    } else {
        card7.style.background = "#ffcd03";
    }

    // var x1 = document.getElementById("myTable1").rows.length;
    var leg1 = data7.array.length;
    var table1 = document.getElementById("myTable1");
    // var xx1 = document.getElementById("myTable1").rows.length;

    if(firstTime7){
      for (var i = 0; i <= leg1-1; i++) {
        var row1 = table1.insertRow(1);
        var cell11 = row1.insertCell(0);
        var cell21 = row1.insertCell(1);
        var cell31 = row1.insertCell(2);
        cell11.innerHTML = data7.array[i].nilai;
        cell21.innerHTML = data7.array[i].tanggal;
        if (data7.array[i].nilai == 'Basah') {
            cell31.style.backgroundColor = "#0374ff";
        } else {
            cell31.style.backgroundColor = "#ffcd03";
        }
      }
      firstTime7 = false;
    }else if(inc1 > 119 ){
      var row1 = table1.insertRow(1);
      var cell11 = row1.insertCell(0);
      var cell21 = row1.insertCell(1);
      var cell31 = row1.insertCell(2);
      cell11.innerHTML = data7.array[0].nilai;
      cell21.innerHTML = data7.array[0].tanggal;
      if (xx1 > 24) {
        document.getElementById("myTable1").deleteRow(1);
      }
      if (data7.array[0].nilai == 'basah') {
          cell31.style.backgroundColor = "#0374ff";
      } else {
          cell31.style.backgroundColor = "#ffcd03";
      }


      inc1 = 0;
    }
    inc1 = inc1 + 1;
}
let firstTime8 = true;
var incc = 0;
async function getKetinggianAlat() {
    const response10 = await fetch(url_ketinggian);
    const data10 = await response10.json();
    //
    document.getElementById('uniq8').textContent = data10.latest;

    // var x1 = document.getElementById("myTable1").rows.length;
    var legA = data10.array.length;
    var tableA = document.getElementById("myTableA");
    var xxf = document.getElementById("myTableA").rows.length;

    if(firstTime8){
      for (var i = 0; i <= legA-1; i++) {
        var rowA = tableA.insertRow(1);
        var cell1A = rowA.insertCell(0);
        var cell2A = rowA.insertCell(1);
        cell1A.innerHTML = data10.array[i].nilai;
        cell2A.innerHTML = data10.array[i].tanggal;
      }
      firstTime8 = false;
    }else if(incc > 119 ){
      var rowA = tableA.insertRow(1);
      var cell1A = rowA.insertCell(0);
      var cell2A = rowA.insertCell(1);
      cell1A.innerHTML = data10.array[0].nilai;
      cell2A.innerHTML = data10.array[0].tanggal;
      if (xxf > 24) {
        document.getElementById("myTableA").deleteRow(1);
      }
      incc = 0;
    }
    incc = incc + 1;
}

function getAll() {
    getArahAngin();
    getSuhu();
    getKelembaban();
    getTekananUdara();
    getIntensitasCahaya();
    getKondisi();
    getKualitasUdara();
    getKetinggianAlat();
}

getAll();
setInterval(getAll, 30000);
