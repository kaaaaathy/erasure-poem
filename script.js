//—————————————————————————————————————————
//    Example 1: Arrays + For Loops
//—————————————————————————————————————————

  let fruits = ["orange","strawberry","durian","pineapple", "guava"];
  
  //introduce Array + For loop
  for (let i = 0; i < fruits.length; i++){
      console.log("i is " + i);
      console.log("the " + i + " number fruit is " + fruits[i]);
  }
    
    
  //introduce
  for (let i = 0; i < fruits.length; i++){
      console.log("i is " + i);
      console.log("the " + i + " number fruit is " + fruits[i]);
    
    //creating new div
      let newdiv = document.createElement("div");
    
    //set inner HTML to the array
      newdiv.innerHTML = fruits[i];
    
    //you need to appendChild to add it to the body of the HTML doc.
      document.body.appendChild(newdiv);
    
    //this is a function to add a new class
      toggleClass(newdiv);

    
  }
    
    
  function toggleClass(element){
          element.classList.add('wordItem');
          element.onclick = function(){
          element.classList.toggle("read");
          console.log("clicked");
          }
    }


//—————————————————————————————————————————
//    Example 1: Arrays + For Loops
//—————————————————————————————————————————

  let importedTxt;
  let words;
    
  let string = "Two roads diverged in a yellow wood, and sorry I could not travel both, and be one traveler, long I stood and looked down one as far as I could, to where it bent in the undergrowth"


    
  //USE THIS CODE IF YOU WANT TO LOAD A TEXT FILE
//   function setup(){
//     fetch('lumber.txt')
//       .then(response => response.text())
//       .then(data => {
//           importedTxt = data;
//           splitTxt(importedTxt);
//           build();
//       });
    
//   }

    
  // LOAD DATA + BREAK INTO WORDS
  // function splitTxt(text){
  //     // words = importedTxt.split(/\W+/); Use this regular expression instead of white space if you want to split on every non-A-Z character
  //     words = text.split(' ');
  //     console.log(words);
  // }

 // MAKE IT APPEAR IN DOM
//   function build(){
//     for (i=0; i<words.length;i++){
//         console.log(words[i]);
//         let newdiv = document.createElement("div");
//         newdiv.innerHTML = words[i];  
//         document.getElementById("content").appendChild(newdiv);
//         toggleClass(newdiv);
//     }

//     console.log("BUILD COMPLETE");

//   }

  setup();

