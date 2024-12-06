// Function to open the popupContainer
function openPopup(d) {
  if(d==1){
    document.getElementById('paras').innerHTML='ye larka simple h <br> so CEO se follow kro';
  }else{
    document.getElementById('paras').innerHTML='<b>Jaha kuddi dekhi waha line mari</b><br> sudhar jao and ye media lo';
  }
    document.getElementById('popupContainer').style.display = 'block';
  }
  
  // Function to close the popupContainer
  function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
  }
  
  // Adding event listeners to the icons

  
  // Adding event listener to close button inside the popupContainer
  document.getElementById('closePopup').addEventListener('click', function() {
    closePopup(); // Close the popup when close button is clicked
  });
  
  // Adding event listener to Instagram button inside the popupContainer
  document.getElementById('instagram').addEventListener('click', function() {
    // Replace 'https://www.instagram.com/' with your Instagram URL
    window.open('https://www.instagram.com/hey.mohanty/profilecard/?igsh=NDFuNnJjdHlvdzcy', '_blank');
  });
  
  // Adding event listener to close button inside the popupContainer
  document.querySelector('.close').addEventListener('click', function() {
    closePopup(); // Close the popup when close button (X) is clicked
  });
  var link = document.getElementById("myLink");
  var link1 = document.getElementById("myLink1");
  var link2 = document.getElementById("myLink2");

  // Set the href attribute value
 
       var menuIcon = document.querySelector('.menu-icon');
       function fun(d){
        if(d==1){
          link.setAttribute("href", "#banner");
        }
        if(d==2){
          link1.setAttribute("href", "#servicesp");
        }
        if(d==3){
          link2.setAttribute("href", "#contact-section");
        }
        overlay.style.display = 'none';
                menuIcon.classList.remove('close-icon');
                document.body.style.overflow = 'auto'; 
       }
        function toggleMenu() {
            var overlay = document.getElementById('overlay');
            var menuIcon = document.querySelector('.menu-icon');
    
            if (overlay.style.display === 'block') {
                overlay.style.display = 'none';
                menuIcon.classList.remove('close-icon');
                document.body.style.overflow = 'auto'; 
            } else {
                overlay.style.display = 'block';
                menuIcon.classList.add('close-icon');
                document.body.style.overflow = 'hidden'; 
            }
        }
        window.onclick = function(event) {
      var overlay = document.getElementById('overlay');
      var menuIcon = document.querySelector('.menu-icon');
      if (event.target == overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        menuIcon.classList.remove('close-icon'); // Enable scroll
      }
    }
    
   
      
     
        window.addEventListener("scroll",function(){
          var header= document.querySelector("header");
          header.classList.toggle("sticky",window.scrollY >0);
        
        })
      
         var img = document.querySelector('.img-2');
          var img1 = document.querySelector('.img-3');
          var img2 = document.querySelector('.img-4');
        
         
          window.addEventListener('scroll', function() {
            var value = window.scrollY;
           
            img.style.marginTop = value*-1.5  + 'px';
            img2.style.right = value*1.5  + 'px';
            img2.style.marginTop = value*-1.5  + 'px';
            img1.style.left =   value*-1.5 + 'px';
           
           
          });
       
    
        function displayImage() {
    gsap.fromTo(".img-3", { opacity: 0 }, { opacity: 1,x:150, duration: 1, delay: 0.5 }); // Fading in the preloaded image after a delay
    gsap.fromTo(".img-2", { opacity: 0 }, { opacity: 1,y:-150, duration: 1, delay: 0.9 }); // Fading in the preloaded image after a delay
    gsap.fromTo(".img-4", { opacity: 0 }, { opacity: 1,y:-140, duration: 1, delay: 1.3 }); // Fading in the preloaded image after a delay
  }

  // Call the function to display the image after a delay
  displayImage();
      
