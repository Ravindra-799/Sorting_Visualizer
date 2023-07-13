
const generate_new=document.getElementById("new-array"); // generate button.
const array_size=document.getElementById("size-array"); // desired array size.
const space=document.getElementById("array-space"); // space for the bars.
const run_algo=document.getElementById("run-button"); // run algorithm button.
const skip=document.getElementById("skip-button"); // Abort algorithm button.
const selected_algo=document.getElementById("algo"); // selected option.
const req_speed=document.getElementById("speed"); // speed required for every swap.



const Asize=document.getElementById("Asize");
const Aspeed=document.getElementById("Aspeed");

// DOM things for Bootsrap modal (To displaying Pop-up for custom array in a UI).
const modal_save = document.getElementById("modal-save");
const modal_text = document.getElementById("modal-text");
const modal_size = document.getElementById("modal-size");
const text_error_text = document.getElementById("text-error");
const size_error_text = document.getElementById("size-error");
const custom_array_btn = document.getElementById("custom-array");

modal_save.addEventListener("click",validate);
modal_text.addEventListener('input',reset_error);
modal_size.addEventListener('input',reset_error);

var custom_size,custom_array,is_valid=0;
function validate(){
   if(size_error() && text_error()){
      $('#exampleModalCenter').modal('hide');
      custom_array_btn.innerHTML="<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> SAVED";
      custom_array_btn.className="btn btn-success my-2 my-sm-1"
      array_size.value -= custom_size;
      is_valid=1;
      generate_new_array();
      is_valid=0;
   }
}  
function text_error(){
   let str=modal_text.value,err="";
   if(!str) err=" Please fill this field.";
   else{
      let temp = str.split(' ');
      let array = [];
      for(let i=0;i<temp.length;i++) if(temp[i] && temp[i]!="\n") array.push(temp[i]);
      // console.log(array);
      if(array.length != custom_size) err=" Mismatch of Size. Filled Input size is " + array.length;
      else {
         for(let i=0;i<array.length && !err;i++){
            if(isNaN(array[i])) err=" Array element at Index " + i + " is NaN";
            array[i]=parseInt(array[i]); if(err) break;
            if(array[i]<1 || array[i]>500) err = " Array element at Index " + i + " Violates the Range.";
         }
      }
      if(!err) custom_array=array;
   }
   if(err){
      text_error_text.innerHTML="<i class=\"fa fa-exclamation-triangle\"> </i> "+err;
      modal_text.style.borderColor="red";
      return false;
   }
   return true;
}

function size_error(){
   let str=modal_size.value,err="";
   if(!str) err=" Please fill this field.";
   else if(isNaN(str)) err=" This is not a Number.";
   else{
      let value=parseInt(str);
      if(value<2 || value>300) err=" Size should be in given Range.";
      else{
         custom_size = value;
         return true;
      }
   }
   if(err){
      size_error_text.innerHTML="<i class=\"fa fa-exclamation-triangle\"> </i> "+err;
      modal_size.style.borderColor="red";
      return false;
   }
}
function reset_error(){
   size_error_text.innerHTML='';
   text_error_text.innerHTML='';
   modal_size.style.borderColor="lightgray";
   modal_text.style.borderColor="lightgray";
}

const bar_len=[]; 
const bar_div=[]; 
const setting=[generate_new, array_size, run_algo, selected_algo, req_speed, custom_array_btn];
if (array_size.value > modal_size.value)
{
   var total_size=array_size.value;
}
else{
   var total_size = modal_size.value;
}
var delay=10; // required speed .
var totdelay=0; //total current delay 
var cleartimeout; //to giving the functionality to skip button 




// event Listener.
generate_new.addEventListener("click",generate_new_array);
array_size.addEventListener("input",generate_new_array);
req_speed.addEventListener("input",change_speed);
run_algo.addEventListener("click",runalgo);
window.onload=generate_new_array;

$(document).ready(function() {
   
   if(window.innerWidth<992) $('.navbar-collapse').collapse('show'); 
   if(window.innerWidth<400) $('#logo').hide();
});
function generate_new_array(){
   space.innerHTML="";
   if (array_size.value > modal_size.value)
{
   total_size=array_size.value;
}
else{
   total_size = modal_size.value;
}
   Asize.innerHTML="Size ("+total_size+")";
   if(!is_valid) custom_array_btn.innerHTML="<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Custom";
   if(!is_valid) custom_array_btn.className="btn btn-outline-primary my-2 my-sm-1"
   
   change_speed();
   for(let i=0;i<total_size;i++){
      if(is_valid) bar_len[i]=custom_array[i];
      else bar_len[i] = Math.floor(Math.random()*560+20);
      bar_div[i] = document.createElement("div");
      space.appendChild(bar_div[i]);
      apply_style(bar_div[i],"skyblue",bar_len[i]);
   }
}

function change_speed(){
   Aspeed.innerHTML="Animation (" + Math.pow(2,parseInt(req_speed.value)) + "X)";
   delay=20000/(total_size*Math.pow(2,parseInt(req_speed.value)));
}

function update_bar (element,color,height) {
   cleartimeout=setTimeout(()=>{
      if(total_size<=500)element.innerHTML= "<small >"+ height + "</small>";
   element.style=" margin : 0.8px; " + "background-color:" + color + ";"+ "width: 100%;" + "height: " + height + "px; text-align: center;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;";
   },totdelay+=delay);
}


function apply_style(element,color,height) {
   if(total_size<=500)element.innerHTML= "<small >"+ height + "</small>";
   element.style=" margin : 0.8px; " + "background-color:" + color + ";"+ "width: 100%;" + "height: " + height + "px; text-align: center;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;";
}

skip.addEventListener("click",()=>{
   
   location.reload();
});


function disable(){
   
   setting[2].innerHTML="<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span> Running...";
   for(let i=0;i<6;i++){
      setting[i].setAttribute('disabled', true);
      setting[i].style="cursor: not-allowed;";
   }   
   $('.navbar-collapse').collapse('hide'); 
}

function enable(){
   window.setTimeout(function(){
   setting[2].innerHTML="<i class=\"fa fa-play\" aria-hidden=\"true\"> </i>  RUN ALGO!";
      for(let i=0;i<6;i++){
         setting[i].removeAttribute('disabled');
         setting[i].style="cursor: pointer;";
      }  
  
      if(window.innerWidth<992) $('.navbar-collapse').collapse('show'); 
   },totdelay+=delay);  
}

// swap utility function . makes red before swap .
function swap(id1, id2, col1, col2){
   update_bar(bar_div[id1],"Red",bar_len[id1]);
   update_bar(bar_div[id2],"Red",bar_len[id2]);
   [bar_len[id1], bar_len[id2]] = [bar_len[id2], bar_len[id1]];
   update_bar(bar_div[id1],col1,bar_len[id1]);
   if(id1!=id2) update_bar(bar_div[id2],col2,bar_len[id2]);
}

function runalgo(){
   totdelay=0;
   disable();
   
   switch (selected_algo.value) {
      case "bubble" : 
         Bubble();
         break;
      case "merge" :
         Merge();
         break;
      case "quick" :
         Quick();
         break;
      case "selection" :
         SelecTion();
         break;
      case "heap" :
         Heap();
         break;
      case "insertion" :
         Insertion();
         break;
      case "count" :
         Count();
         break;
      case "radix" :
         Radix();
         break;
         case "shell" :
            Shell();
            break;
      
   }
   enable();
}

