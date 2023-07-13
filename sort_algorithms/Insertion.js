function Insertion(){
   for(let i=1;i<total_size;i++){
      let j=i-1,key=i;
      update_bar(bar_div[i],"yellow",bar_len[key]);
      while(j>=0 && bar_len[j]>bar_len[key]){
         swap(j,key,"yellow","green");
         key=j--;
      }
      update_bar(bar_div[key],"green",bar_len[key]);
   }
}