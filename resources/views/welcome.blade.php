<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet"  href="{{ asset('css/home.css') }}">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
</head>

<body onload="startTime()">
  <div class="container">
    <div class="topbar">
      <div class="left">
        <h1>Automatic Weather<br>Station Report</h1>
      </div>
      <div class="right">
        <h1 id="tggl" class="tggl">Kamis/20-10-2019</h1>
        <h1 id="times">15.20</h1>
      </div>
    </div>
    <div class="content">
      <div class="content-card">
        <div class="card1" id="myBtn">
          <div class="containers">
            <div class="icons">
              <img src="{{ asset('img/wind.png') }}">
            </div>
            <div class="textnya">
              <h4>Kecepatan Angin</h4>
              <p><span class="uniq">30</span>km/h</p>
            </div>
          </div>

        </div>
        <div class="card2">
          <div class="containers">
            <div class="icons">
              <img src="{{ asset('img/map.png') }}">
            </div>
            <div class="textnya">
              <h4>Arah Angin</h4>
              <p><span class="uniq">30</span>km/h</p>
            </div>
          </div>
        </div>
        <div class="card3">
          <div class="containers">
            <div class="icons">
              <img src="{{ asset('img/wind.png') }}">
            </div>
            <div class="textnya">
              <h4>Suhu</h4>
              <p><span class="uniq">30</span>km/h</p>
            </div>
          </div>
        </div>
        <div class="card4">
          <div class="containers">
            <div class="icons">
              <img src="{{ asset('img/raindrop.png') }}">
            </div>
            <div class="textnya">
              <h4>Kelembaban</h4>
              <p><span class="uniq">30</span>km/h</p>
            </div>
          </div>
        </div>
        <div class="card5">
          <div class="containers">
            <div class="icons">
              <img src="{{ asset('img/pressure.png') }}">
            </div>
            <div class="textnya">
              <h4>Tekanan Udara</h4>
              <p><span class="uniq">30</span>km/h</p>
            </div>
          </div>
        </div>
        <div class="card6">
          <div class="containers">
            <div class="icons">
              <img src="{{ asset('img/sun.png') }}">
            </div>
            <div class="textnya">
              <h4>Intensitas Cahaya</h4>
              <p><span class="uniq">30</span>km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- The Modal -->
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close">&times;</span>
        <h2>Grafik Kecepatan Angin</h2>
      </div>
      <div class="modal-body">
        <canvas id="chart" height="80px"></canvas>
      </div>
    </div>
  </div>
</body>

</html>
<script>
  const xl = [];
  const yl = [];


  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      // BEFORE labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels: xl,
      datasets: [{
        label: 'Global Average Temprature in C°',
        data: yl,
        backgroundColor: '#06789e',
        borderColor: '#06789e',
        borderWidth: 1,
        fill: false,
        options: {
          maintainAspectRatio: false,
        }
      }]
    }
  });


  const url_iss = 'http://api.open-notify.org/iss-now.json';
  async function getISS() {
    const response = await fetch(url_iss);
    const data = await response.json();
    xl.push(data.iss_position.latitude);
    yl.push(data.iss_position.longitude);
    // //
    if (xl.length > 30) {
      xl.shift();
      yl.shift();
    }
    // //
    myChart.update();
  }
  getISS();
  setInterval(getISS, 1000);
</script>

<script>
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();


  if (h < 10) {h = "0" + h};
  if (m < 10) {m = "0" + m};
  if (s < 10) {s = "0" + s};

  document.getElementById('times').textContent =
  h + ":" + m + ":" + s;

var weekday = new Array(7);
  weekday[0] = "Minggu";
  weekday[1] = "Senin";
  weekday[2] = "Selasa";
  weekday[3] = "Rabu";
  weekday[4] = "Kamis";
  weekday[5] = "Jum'at";
  weekday[6] = "Sabtu";
var date = weekday[today.getDay()]+'/'+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  document.getElementById('tggl').textContent = date;
  var t = setTimeout(startTime, 500);
}

</script>
<script>
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>
