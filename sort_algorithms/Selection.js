
function SelecTion(){
   for(let i=0;i<total_size;i++){
      let min_index=i;
      update_bar(bar_div[min_index],"yellow",bar_len[min_index]);
      for(let j=i+1;j<total_size;j++){
         if(bar_len[min_index]>bar_len[j]){
            update_bar(bar_div[j],"yellow",bar_len[j]);
            update_bar(bar_div[min_index],"skyblue",bar_len[min_index]);
            min_index=j;
         }
      }
      swap(i,min_index,"green","skyblue");
   }
}