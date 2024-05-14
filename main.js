const letter = document.getElementById("letter");

function takevalue() {
    const btn1 = document.getElementById("btn1");
    main(letter.value);
    console.log(letter.value);
    return letter.value;

}
function displayOutput() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = main(takevalue());
}
// displayOutput();
// console.log(main());
// takevalue();
// let c=parseInt(takevalue());
function main(c) {
    let h = parseInt(c);
    let string = "Despite the fact that piranhas are relatively harmless, many people continue to believe the pervasive myth that piranhas are dangerous to humans. This impression of piranhas is exacerbated by their mischaracterization in popular media. For example, the promotional poster for the 1978 horror film Piranha features an oversized piranha poised to bite the leg of an unsuspecting woman. Such a terrifying representation easily captures the imagination and promotes unnecessary fear. While the trope of the man-eating piranhas lends excitement to the adventure stories, it bears little resemblance to the real-life piranha. By paying more attention to fact than fiction, humans may finally be able to let go of this inaccurate belief. ";
    // console.log(input);
    let a = Math.floor(Math.random() * 100);
    let ascii = string.charCodeAt(a);
    let d = a + h;
    // console.log(d);

    let l = string.length;
    for (let i = 33; i <= 90; i++) {
        if (i == ascii) {
            var b = i;
        }
    }

    if (ascii == 32 || ascii == b) {

        var p = string.slice(a, d);
    }
    else {
        for (let j = a; j <= l; j++) {
            var asc = string.charCodeAt(j);


            if (asc == 32) { break; }
            let e = j + h;
            var p = string.slice(j + 1, e);

            // break;
        }

    }
    return p;
}
const letter1 = document.getElementById("letter1");
function takevalue1(){
    const btn1=document.getElementById("btn2");
    give(letter1.value);
    console.log(letter1.value);
    return letter1.value;
    
}
function displayOutput1(){
    var outputDiv=document.getElementById("output2");
    outputDiv.innerHTML=give(takevalue1());
}





function give(h){   
let string='A paragraph is defined as “a group of sentences or  single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long .';
var a=parseInt(string.length);
let count=0;
let j=0;
var c;


for( let i=0;i<=a;i++){
    let ascii=string.charCodeAt(i);
    if(ascii!=32){
        for(let j=i;j<=a;j++){
            
            let asciii=string.charCodeAt(j);
            if(asciii==32){
                i=j;
                count=count+1;
              if(count==h){
               
             
              
                 c=string.slice(0,i);
                
              
                }
              }
                
             }
                
            }
             
        }
        return c;
}        

           
               
