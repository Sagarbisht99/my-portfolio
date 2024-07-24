let element = document.querySelectorAll(".heading");
let image = document.querySelectorAll("img");

element.forEach((elem) => {
    elem.addEventListener("mousemove" , (dets) => {

        if(image){
            elem.childNodes[3].style.opacity = "1"
            elem.childNodes[3].style.left =  dets.clientX + "px";
        }
    })

    elem.addEventListener("mouseleave" , () => {
          elem.childNodes[3].style.opacity = "0"
  })

})

//------------------------------------------------------------------------------------------------
const textContainer = document.querySelector(".designation");

  // Define the text to animate
  const text = "Hello, World! This is an example.";

  // GSAP timeline for text animation
  const tl = gsap.timeline({ repeat: -1 });

  // Function to animate text
  function animateText() {
    // Add text to timeline in reverse alphabetical order
    tl.to(textContainer, {
      duration: text.length * 0.1, // Adjust duration based on text length
      text: {
        value: 'Frontend Developer', // Start with empty text
        scrambleText: {
          text: text.split('').reverse().join(''), // Reverse the text alphabetically
          chars: "visible", // Only reveal characters that are already displayed
          speed: 0.3, // Typing speed (characters per second)
        },
      },
      ease: "ease", // Linear ease
    })
    .to(textContainer, {
      duration: text.length * 0.1, // Adjust duration based on text length
      text: {
        value: '', // Start with empty text
        scrambleText: {
          text: text,
          chars: "visible", // Only reveal characters that are already displayed
          speed: 0.1, // Typing speed (characters per second)
        },
      },
      ease: "none", // Linear ease
    });
  }

  // Initial call to start animation
  animateText();

  // Uncomment this line if you want to start the animation immediately
  // tl.play();

  //--------------------------------------------------------------------------------------------//

 

  function copyEmailToClipboard() {
    var emailToCopy = "sagarbisht409@gmail.com";
    

    var textarea = document.createElement("textarea");
    textarea.value = emailToCopy;
    document.body.appendChild(textarea);
    
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length); 
    
    document.execCommand("copy");
    
    document.body.removeChild(textarea);
    
    alert("Email copied to clipboard: " + emailToCopy);
  }

  function copyphonenumberToClipboard() {
    var emailToCopy = "8287325773"; 
    
    var textarea = document.createElement("textarea");
    textarea.value = emailToCopy;
    document.body.appendChild(textarea);
    
  
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    
    document.execCommand("copy");
    
    
   document.body.removeChild(textarea);
    
    alert(`mobile number is ${emailToCopy}`);
  }

// -------scroll bar and circular-fixed scroll bar--------------------------------------------------------- 

const circle = document.querySelector('.circular');
let totalScroll = 0;
function handleScroll() {
  
    const currentScroll = window.scrollY;

    const scrollDifference = currentScroll - totalScroll;

    totalScroll += scrollDifference;

    const rotationAngle = totalScroll;

    gsap.to(circle, {
        rotation: rotationAngle,
        duration: 0,
        ease: "none"
    });
}


window.addEventListener('scroll', handleScroll);


//--------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded" , () => {
  gsap.fromTo(".left", {
    opacity: 0,
    y: 100, 
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.2, 
    duration: 0.5,
   
  });

  gsap.fromTo(".circular", {
    opacity: 0,
    x: -100, 
  }, {
    delay : 1.2,
    opacity: 1,
    x: 0,
    stagger: 0.2, 
    duration: 0.5,
   
  });

  


    const cards = document.querySelectorAll('.card');

    // Initialize Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Trigger GSAP animation for each card with a staggered delay
                gsap.from(entry.target, {
                    y: 100,
                    opacity: 0,
                    duration: 2,
                    ease: "power2.out",
                    delay: index * 0.2 // Stagger delay based on index
                });
                // Unobserve the card after animating to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the card is visible
    });

    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });

})


  gsap.fromTo(".my-image", {
      opacity: 0,
      y: 100, 
    }, {
      delay : 0.7,
      opacity: 1,
      y: 0,
      duration: 0.5,
     
    });

//mouse ---------------------------------------------------------------------------







