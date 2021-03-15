//—————————————————————————————————————————
//    Example 1: Arrays + For Loops
//—————————————————————————————————————————

  let fruits = ["orange","strawberry","durian","pineapple", "guava"];

  //introduce Array + For loop
  for (let i = 0; i < fruits.length; i++){
      console.log("i is " + i);
      console.log("the " + i + " number fruit is " + fruits[i]);
  }


  let string = "everything tethers back to our planet, did you forget? the soft bodies, the ferns, the copper ores that lay sleeping it was only our data structures, our taxonomies and our desire for entrapment of abundance, which gave them names as things to be atomized into boxes"
  // let stringArray = string.split(/[.,!?]/); //split on punctation only — you can Google "regular expressions" to add more logic
  let stringArray = string.split(" ");

  console.log(stringArray);


  //introduce Create Element + Append
  for (let i = 0; i < stringArray.length; i++){
      console.log("i is " + i);
      console.log("the " + i + " number word is " + stringArray[i]);
    
    //creating new div
      let newdiv = document.createElement("div");
    
    //set inner HTML to the array
      newdiv.innerHTML = stringArray[i] + "&nbsp";
    
    //you need to appendChild to add it to the body of the HTML doc.
      document.getElementById('content').appendChild(newdiv);
    
    //add class "wordItem" so you can add styling
      newdiv.classList.add('wordItem'); 
      
    //this is a function to add a class
      addClass(newdiv);
      
    //this is a function to add class toggle behavior
      // toggleClass(newdiv);

}

function addClass(element){
  element.onclick = function(){
    element.classList.add('read');
  }
  
}

    
//   //introduce ClassList
  function toggleClass(element){    
          element.onclick = function() {
            element.classList.toggle("read");
            console.log("clicked"); //tell me that it is clicked
          } 
    }



//—————————————————————————————————————————————————
//    Example 2: Load a Text File, use functions to tie everything together
//—————————————————————————————————————————————————

  let importedTxt;
  let words;
    

//uncomment this to run it
  // createPoem();

//LOAD A TEXT FILE
//   function createPoem(){
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

