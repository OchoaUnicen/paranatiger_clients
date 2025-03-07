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
  
  const cls_ = [
        {
            key_code: "\x53\x6b\x34\x38\x37\x39\x36\x32\x31\x51\x66\x40\x65\x6c\x52\x36\x76\x4e",
            cl_name: "Emtch",
            deliver_date: "06/03/2025",
            img_url: "paranatiger_aerospace_solutions_logo.png"
        }
    ]


  function key (){
    let pass = document.getElementById("pass").value;


    console.log(cls_);

    let cl_found = false;

    for(let i = 0; i < cls_.length; i++){
        if (pass === "\x53\x6b\x34\x38\x37\x39\x36\x32\x31\x51\x66\x40\x65\x6c\x52\x36\x76\x4e"){
            let info_ = document.getElementById("info_"); 
            info_.style.display = "";
    
            let container_ = document.getElementById("container_"); 
            container_.style.display = "";
            container_.style.maxWidth = "";



            let download_button = document.getElementById("download_button");
            download_button.addEventListener("click", function (event) {
                // Evita que el enlace siga su comportamiento por defecto
                event.preventDefault();
            
                // Suponiendo que cls_[i] ya tiene valores definidos
                let i = 0; // Asegúrate de que 'i' tiene el índice correcto
                let fileName = cls_[i].img_url;
                let filePath = "imgs/" + fileName;
            
                // Crear un enlace temporal para la descarga
                let tempLink = document.createElement("a");
                tempLink.href = filePath;
                tempLink.setAttribute("download", fileName);
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
            });
            
    
    
            let deliver_date = document.getElementById("deliver_date");
    
            let client_name_span = document.getElementById("client_name_span");
            let deliver_date_span = document.getElementById("deliver_date_span");
            let card = document.getElementsByClassName("card")[0];
    
    
            deliver_date.innerText = cls_[i].deliver_date;
            client_name_span.innerText = cls_[i].cl_name;
            deliver_date_span.innerText = cls_[i].deliver_date;
            card.style.backgroundImage = "url('imgs/"+ cls_[i].img_url+"')";







    
            wrong_pass.innerText = "Joining";
      
            $('.login-modal, .overlay').fadeOut();
            document.body.style.background = "none";
            // onContentLoad();
            cl_found = true;
            return;
        }
    }

    
    if (!cl_found){        
        wrong_pass.innerText = "Wrong Key";
    }
  }