

  function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        //   openDropdown.classList.remove('show');
        }
      }
    }
  };
  
  document.getElementById("urlForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var url = document.getElementById("urlInput").value;
    console.log(url);
    var combinedUrl = "https://kpodportal.kaispe.com/" + url;
    window.location.href = combinedUrl;
  });
  

  const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});


// const playButton = document.getElementById("play-button");
// const videoThumbnail = document.getElementById("video-thumbnail");
// const videoIframe = document.getElementById("video-iframe");

// playButton.addEventListener("click", () => {
//     videoThumbnail.style.display = "none";
//     playButton.style.display = "none";

//     const iframe = document.createElement("iframe");
//     iframe.src = "https://www.youtube.com/embed/VIDEO_ID?autoplay=1";
//     iframe.width = "560";
//     iframe.height = "315";
//     iframe.allowFullscreen = true;

//     videoIframe.appendChild(iframe);
//     videoIframe.style.display = "block";
// });