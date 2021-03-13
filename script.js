//—————————————————————————————————————————
//    Example 1: Arrays + For Loops
//—————————————————————————————————————————

  let fruits = ["orange","strawberry","durian","pineapple", "guava"];

  //introduce Array + For loop
  for (let i = 0; i < fruits.length; i++){
      console.log("i is " + i);
      console.log("the " + i + " number fruit is " + fruits[i]);
  }


  let string = "Two roads diverged in a yellow wood, and sorry I could not travel both, and be one traveler, long I stood and looked down one as far as I could, to where it bent in the undergrowth"
  let stringArray = string.split(' ');
  console.log(stringArray);


  //introduce Create Element + Append
  for (let i = 0; i < stringArray.length; i++){
      console.log("i is " + i);
      console.log("the " + i + " number word is " + stringArray[i]);
    
    //creating new div
      let newdiv = document.createElement("div");
    
    //set inner HTML to the array
      newdiv.innerHTML = stringArray[i];
    
    //you need to appendChild to add it to the body of the HTML doc.
      document.getElementById('content').appendChild(newdiv);
    
    //add class "wordItem" so you can add styling
      newdiv.classList.add('wordItem'); 
      
    //this is a function to add class toggle behavior
      toggleClass(newdiv);

  }
    
  //introduce ClassList
  function toggleClass(element){    
          element.onclick = function() {
            element.classList.toggle("read");
            console.log("clicked"); //tell me that it is clicked
          } 
    }


//—————————————————————————————————————————————————
//    Example 2: Split an Array + Load a Text File
//—————————————————————————————————————————————————

  let importedTxt;
  let words;
    

//uncomment this to run it
  // setup();

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

