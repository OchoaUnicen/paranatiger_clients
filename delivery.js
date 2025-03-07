$(() => {
  
    $('#guest, .close-modal').on('click', () => {
      $('.login-modal, .overlay').fadeOut();
    });
    
    
    $('#login').on('click', () => {
      $('.modal-content').slideToggle();
      $('.username').focus();
    });
    
    $('.register-link').on('click', () => {
      $('.register-slide').addClass('active-register');
      $('.login-form').addClass('move-form');
    });
    
    $('.close-register').on('click', () => {
      $('.register-slide').removeClass('active-register');
      $('.login-form').removeClass('move-form');
      $('.username').focus();
    });
    
  });
  
  
  
  let ab = document.getElementById("access");
  let wrong_pass = document.getElementById("wrong_pass");
  ab.addEventListener("click", function(e) {
    e.preventDefault();
    key();
  });
  
  function key (){
    let pass = document.getElementById("pass").value;
    if (pass === "\x53\x6b\x34\x38\x37\x39\x36\x32\x31\x51\x66\x40\x65\x6c\x52\x36\x76\x4e"){
        let info_ = document.getElementById("info_"); 
        info_.style.display = "";

        let container_ = document.getElementById("container_"); 
        container_.style.display = "";
        container_.style.maxWidth = "";


        wrong_pass.innerText = "Joining";
  
        $('.login-modal, .overlay').fadeOut();
        document.body.style.background = "none";
        // onContentLoad();
    }
    else{        
        wrong_pass.innerText = "Wrong Key";
    }
  }