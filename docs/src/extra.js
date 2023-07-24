function setCookie20230723(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie20230723(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
    
  
  if (window.location == window.top.location) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const bypass = urlParams.get('bypass');
      if(bypass=='true'){
          setCookie20230723('bypass', 'true', 365);
      }
  }
  
  if (window.location == window.top.location) {
    //   document.getElementById("demo").innerHTML="";
    //   document.getElementById("demo").style.visibility='hidden';
      if(getCookie20230723('bypass')!='true'){
          Swal.fire({
              icon: 'info',
              title: 'Login Required.',
              iconHtml: '<img style="width: 100px;height: 100px;" src="//curriculum.idsucla.org/img/IDS-logo.png">',
              showCancelButton: true,
              cancelButtonText: 'Visitors: Request Access',
              showConfirmButton: true,
              confirmButtonText: 'Teachers: Login now (Portal)',
              reverseButtons: true,
              footer: 'Contact support@idsucla.org if any question',
              allowOutsideClick:false,
              allowEscapeKey:false,
              showLoaderOnConfirm:true,
              showLoaderOnDeny:true,

          }).then((result) => {
              if (result.isConfirmed) {
                  console.log('confirmed');
                  var url = "https://portal2023.idsucla.org/#curriculum/";
                  document.location = url;
              } else if (result.dismiss === Swal.DismissReason.cancel){
                  console.log('cancelled');
                  var url = "https://idsucla.org/ids-request";
                  document.location = url;
              }
  
          });
      }
  }else{
    //   document.getElementById("demo").innerHTML="https://curriculum.idsucla.org";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", window.location.origin+ "/app/user/whoami?client=Curri", true);
      xhr.onload = function (e) {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
          console.log(xhr.responseText);
              if(xhr.responseText.includes("success") ){
  
              }else{
                  window.location.href = window.location.origin+ "/#login";
              }
          } else {
          window.location.href = window.location.origin+ "/#login";
          }
      }
      };
      xhr.onerror = function (e) {
  
  
  
          console.error(xhr.statusText);
          window.location.href = window.location.origin+ "/#login";
      };
      xhr.send(null); 
  }