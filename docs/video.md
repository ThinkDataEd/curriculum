# Instructional Videos On Using The Tools

<div class="cards">
  <div class="card">
    <img src = ../img/manager.png></img>
    <div>
    <details>
    <summary>Campaign Manager</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/ZTGPbhgqIc0')">Managing Campaign Settings</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/RLIOoLhakg8')">Managing Campaign Responses</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/4mChtv5qy1g')">Export, Upload, Import</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/PzwMCHOghnI')">Creating a Campaign</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/survey.png></img>
    <div>
    <details>
    <summary>Survey Taking</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/hksbF5QWY2E')">Survey Taking via Browser</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/tGK3Am6-BQo?si=Vkekp_p21MoeJZRX')">Survey Taking via App</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/dashboard.png></img>
    <div>
    <details>
    <summary>Dashboard</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/d0BDaHKOqOg')">Navigating the Dashboard</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/plotapp.png></img>
    <div>
    <details>
    <summary>PlotApp</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/Jks39Gxi6dA')">PlotApp</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/monitoring.png></img>
    <div>
    <details>
    <summary>Campaign Monitoring</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/EV-uEh_0ogM')">Teacher Campaign Monitoring Tool</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/Xg9Fl9arETw')">Student Campaign Monitoring Tool</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/document.png></img>
    <div>
    <details>
    <summary>Documents</summary>
      No video
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/MobileApps.png></img>
    <div>
    <details>
    <summary>IDS MobileApps Instructions</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/tGK3Am6-BQo?si=Vkekp_p21MoeJZRX')">How to Download & Use App</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/classsetup.png></img>
    <div>
    <details>
    <summary>Class Management</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/M7u0yNRsAtg?si=wS1DH_avjwnezWdG')">Create and Manage a Class</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/dtWF291XwzE')">Splitting Columns in Excel</a><br>
    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/rstudio.png></img>
    <div>
    <details>
    <summary>RStudio</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/DSf2viLkSCc?si=U5Zt0_PM4c7DatY7')">Accessing RStudio through Posit Cloud</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/KwXW4Dfjn50?si=byPGn8KrgM_T5Tic')">Posit Cloud Admin View</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/WkxCfaol3pE')">Rstudio Basics (Unit 1 Lesson 13)</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/v3qPfE4ruQA')">Lab 1A</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/4mChtv5qy1g')">Export, Upload, Import</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/N5KpS0MFk7Y')">Decluttering Environment</a><br>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/vZpwB6KM0Pg')">Moving Files Between Projects</a><br>

    </details>
    </div>
  </div>
  <div class="card">
    <img src = ../img/dropdown.png></img>
    <div>
    <details>
    <summary>Dropdown Menu</summary>
      <a href="javascript:openVideoModal('https://www.youtube.com/embed/NxQaRIovY3s')">Navigating the Dropdown Menu</a><br>
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