
function Bubble(){
   let lenth=total_size;
   for(let i=0;i<lenth-1;i++){
      for(let j=0;j<lenth-i-1;j++){
         // changing To yellow color.
         update_bar(bar_div[j],"yellow",bar_len[j]);
         if(bar_len[j]>bar_len[j+1]){ 
            // Changing to red color as they need swap.
            swap(j,j+1,"red","red");
         }
         // need to change back its color.
         update_bar(bar_div[j],"skyblue",bar_len[j]);
      }
      // changing color to Green as it is in correct position.
      update_bar(bar_div[lenth-1-i],"green",bar_len[lenth-1-i]);
   }
   update_bar(bar_div[0],"green",bar_len[0]);
}