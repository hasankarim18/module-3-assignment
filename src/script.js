// import Swal from "sweetalert2";

function button(id){
  const parent =  document.getElementById(id)
  return button = parent.querySelector('.button')
}

const getResultBox = (x, res)=> {
   return document.getElementById(`${x}`).innerHTML = res
}

const buttonSelector = (id)=> {
    return document.getElementById(id).querySelector(".button");
}
const inputSelector = (id)=> {
    return document.getElementById(id).querySelector(".input");
}



/** 
 *  1. 
 */
const getDayOfWeek = (inputDate) => {
  const date = new Date(inputDate);
  const weekList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekIndex = date.getDay();

  return weekList[dayOfWeekIndex];
};

document.querySelector("#convert_date").addEventListener('click',()=> {
    const date = document.getElementById("date_input").value 
    if(!date){
        alert("Please Select Date");
        return
    }
    const weekDay = getDayOfWeek(date);
    const r1El = document.getElementById("r1")
    r1.innerText = weekDay
    console.log("date converted", weekDay);
})

/**
 * 2. 
 */

const squareRootOfSum = (arr) => {
 
  const sum = arr.reduce((sum, curr) => sum + curr, 0);
  const sqrt = Math.sqrt(sum);
  return sqrt.toFixed(2);
};


document.getElementById('q2').querySelector('button').addEventListener('click', ()=> {
  const value = document.getElementById("arr_input").value;
  const arr = value.split(",")
 const res = squareRootOfSum(arr);
 getResultBox("r2", res)

})

/*** 3 */

function checkPride(number) {
  

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}



buttonSelector('q3').addEventListener('click', ()=> {
   const value = document.getElementById("prime_input").value
   if (value < 1) {
     alert('Value must be > 0')
     return;
   }else {

 
      if (value % 2 === 0) {       
        getResultBox('r3',"True! it's a prime number");
       // return false;
      } else {
        getResultBox('r3',"False!!! It is not prime number");
       // return "true";
      }
    }

   
})



/**
 * 
 * 4 
 */

function openNewWindow(url, width, height) {
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  window.open(url, "_blank", options);
}

buttonSelector('q4').addEventListener('click', ()=> {
   const url = "https://example.com";
   const width = 800;
   const height = 600;
   openNewWindow(url, width, height);
})

/**
 * 5 
 * 
 */


function getBrowserInfo() {
    let browser = ''
   if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
     
       return browser = 'Opera'
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 )
    {
        
       return browser = 'Edge'
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
       return browser = 'Chrome'
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        
       return browser = 'Safari'
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        return browser = 'Firefox'
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
    
     return browser = "IE"
    }  
    else 
    {
      
       return  browser = "Unknown";
    }
    }

    buttonSelector('q5').addEventListener('click', ()=> {
      const browser =  getBrowserInfo()
        getResultBox('r5', browser)
    
    })


/** 6 get geo location */

let mylocation = {
    error:{
           message: false,
    }
};
 
function getGeoLocation() { 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        mylocation.latitude = position.coords.latitude;
        mylocation.longitude = position.coords.longitude;
         mylocation.error = {
           message: false,
         };
        
      },
      function (error) {
       mylocation.error = {message:"Error getting location:", error: error}
      }
    );
  } else {
    mylocation.error = {message:"Geolocation is not supported by this browser."}
  }

  return mylocation;
}

buttonSelector('q6').addEventListener('click', ()=> {
   const location = getGeoLocation()
    getResultBox(
      "r6",
      ` 
    Latitude: ${location.latitude} <br > 
    Longitude: ${location.longitude}
    `
    );   
 
})


/*
    8
*/

buttonSelector('q8').addEventListener("click", ()=> {
   const text = document.getElementById("change-text")
   console.log(text);

   text.innerHTML = "<strong> Button Clicked </strong>"
   
} )

/**
 * 9
 */

// @aA123456

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  // Validate name field
  if (name.trim() === "" || !/^[a-zA-Z]+$/.test(name)) {
    displayError(
      "name",
      "Name should not be empty and should contain only letters."
    );
    isValid = false;
  }

  // Validate email field
  if (email.trim() === "" || !isValidEmail(email)) {
    displayError("email", "Please enter a valid email address.");
    isValid = false;
  }

  // Validate password field
  if (password.length < 8 || !isValidPassword(password)) {
    displayError(
      "password",
      "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
    );
    isValid = false;
  }

  // Validate confirm password field
  if (confirmPassword !== password) {
    displayError(
      "confirmPassword",
      "Confirm password should match the password."
    );
    isValid = false;
  }

  if (isValid) {
    // Form is valid, submit the form
    alert("Form submitted successfully!");
    form.reset(); // Reset the form
  }
});

function isValidEmail(email) {
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  // Regular expression for password validation
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordPattern.test(password);
}

function displayError(fieldId, errorMessage) {
  const errorElement = document.getElementById(fieldId + "Error");
  errorElement.textContent = errorMessage;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName("error");

  // Clear error messages
  Array.from(errorElements).forEach((element) => {
    element.textContent = "";
  });
}


/*
    10 
*/

buttonSelector('q10').addEventListener('click', ()=> {
   const text = document.getElementById("text")

   text.classList.add("highlight");

})

document.getElementById("remove_highLight").addEventListener("click", ()=> {
    document.getElementById('text').classList.remove('highlight')
})

/*
    11
*/

document.getElementById("createList").addEventListener("click", () => {
  const ul = document.getElementById("appendListContainer");

    for (let index = 1; index <= 5; index++) {
      const li = document.createElement('li')
        li.innerText = index; 
       li.classList.add("text-xl", "m-2", "text-center", "p-2", "border");      
        ul.appendChild(li) 
    }

});


/**
 * 12 
 */

document.getElementById("changeImage").addEventListener('click', ()=> {
   document.getElementById('c_image').src =
      "https://cdn.pixabay.com/photo/2023/06/14/10/02/pied-flycatcher-8062744__340.jpg";
})

document.getElementById("p_image").addEventListener("click", ()=> {
    document.getElementById("c_image").src =
      "https://cdn.pixabay.com/photo/2021/12/17/11/56/waterfall-6876350__340.jpg";
})


/*
    13 
*/

const colorChange = (color)=> {
    const p = document.querySelectorAll(".colored_text");
    for (let index = 0; index < p.length; index++) {
     const el = p[index]
     el.style.color = color
        
    }
    console.log(p);
}

document.getElementById("c_red").addEventListener('click', ()=> {
    colorChange('red')
})
document.getElementById("c_green").addEventListener('click', ()=> {
    colorChange('green')
})

document.getElementById("c_yellow").addEventListener('click', ()=> {
    colorChange('yellow')
})

document.getElementById("c_blue").addEventListener('click', ()=> {
    colorChange('blue')
})
document.getElementById("c_black").addEventListener('click', ()=> {
    colorChange('black')
})


/*
    14
*/

document.getElementById("getBlog").addEventListener('click', ()=> {
    const ul = document.getElementById("blog_container");
    ul.innerHTML = ""
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then(res => res.json())
     .then(data => {
        const posts = data 
        const postsfive = data.slice(0, 5)
       // console.log(postsfive)
     
        postsfive.map(post => {
               const li = document.createElement("li");
               li.innerText = `${post.id}. Title:  ${post.title}`;
               li.className = "box";
               ul.appendChild(li);
        })
     })

})



 * function postUser(){
const payload = {
   "name": "John Doe", "email": "johndoe@example.com" 
}
axios.post("https://api.example.com/submit",payload )
.then(res => {
  console.log(res.data)
  alert('Submit successful')
} )
.catch((error)=> {
  console.log(error)
  alert("Some thing went wrong")
})
}

document.getElementById('submit_btn').addEventListener("click", ()=> {
postUser()
})
 


