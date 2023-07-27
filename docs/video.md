# Instructional Videos On Using The Tools

<div class="cards">
  <div class="card">
    <img src = ../img/manager.png></img>
    <div>
    <details>
    <summary>Campaign Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/RLIOoLhakg8')">Managing Campaign Responses</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/4mChtv5qy1g')">Export, Upload, Import</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/ZTGPbhgqIc0')">Managing Campaign Settings</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/survey.png></img>
    <div>
    <details>
    <summary>Survey Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/98MQnD05aDM')">Survey Taking</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/dashboard.png></img>
    <div>
    <details>
    <summary>Dashboard Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/d0BDaHKOqOg')">Navigating the Dashboard</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/plotapp.png></img>
    <div>
    <details>
    <summary>PlotApp Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/Jks39Gxi6dA')">PlotApp</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/monitoring.png></img>
    <div>
    <details>
    <summary>Monitoring Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/EV-uEh_0ogM')">Teacher Campaign Monitoring Tool</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/Xg9Fl9arETw')">Student Campaign Monitoring Tool</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/document.png></img>
    <div>
    <details>
    <summary>Documents Instructions</summary>
      No video
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/MobileApps.png></img>
    <div>
    <details>
    <summary>IDS MobileApps Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/GbR22R32mhU')">How to Download & Use App</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/classsetup.png></img>
    <div>
    <details>
    <summary>Class Setup Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/0M2vG7NYHkQ')">Create and Manage a Class</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/dtWF291XwzE')">Splitting Columns in Excel</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/rstudio.png></img>
    <div>
    <details>
    <summary>RStudio Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/vgh7C8U8Ekk')">Accessing RStudio</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/WkxCfaol3pE')">Navigating Rstudio</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/4mChtv5qy1g')">Export, Upload, Import</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/v3qPfE4ruQA')">Lab 1A</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/N5KpS0MFk7Y')">Decluttering Environment</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/dropdown.png></img>
    <div>
    <details>
    <summary>Dropdown Menu Items</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/rKZa4MW1dHU')">Accessing Curriculum</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/ZzXL3MXRSdY')">Screenshot and History Tools</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/collection.png></img>
    <div>
    <details>
    <summary>Real-time Data Collection App</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/N-CkhD33IxE')">Real-time Data Collection App</a><br>
    </details>
    </div>
  </div>

</div>

<style>
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  width: 320px;
  padding: 16px;
  border: 1px solid lightgrey;
}
</style>



<style>
.md-nav--primary .md-nav__link[for=__toc] ~ .md-nav {
    display: none !important;
  }
.md-sidebar {
    display: none !important;
}
.md-header{
    pointer-events: none;
}
</style>




<div id="videoModal">
  <div id="videoContainer">
    <span id="closeVideo">&times;</span>
    <iframe id="videoFrame" src="" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

<style>
#videoModal {
  display: none;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

#videoContainer {
  position: relative;
  margin: 10% auto;
  padding: 20px;
  width: 80%;
  max-width: 800px;
}

#closeVideo {
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
</style>

<script>
function openVideoModal(src){
  document.getElementById("videoModal").style.display = "block";
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var iframeWidth = Math.min(0.8 * screenWidth, 800);
  document.getElementById("videoFrame").style.width = iframeWidth + "px";
  document.getElementById("videoFrame").style.height = iframeWidth*0.75 + "px";
  document.getElementById("videoFrame").src = src;
}
document.getElementById("closeVideo").addEventListener("click", function() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("videoFrame").src = "";
});
</script>