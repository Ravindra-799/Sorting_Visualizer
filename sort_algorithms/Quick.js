
// Taking left most elemnt as a pivot.
function Quick(low = 0 , high = total_size-1){
   if(low<=high){
      let pivot=partiate(low,high);
      update_bar(bar_div[pivot],"green",bar_len[pivot]);
      Quick(low, pivot-1);
      Quick(pivot+1,high);
   }
}
function partiate(low,high){
   var pos=low+1,pval=bar_len[low];
   update_bar(bar_div[low],"yellow",bar_len[low]);
   for(let i=low+1;i<=high;i++){
      if(pval>bar_len[i]){
         swap(i,pos,"skyblue","skyblue");
         pos++;
      }
   }
   swap(low,--pos,"skyblue","skyblue"); //  fixing the pivot position.
   return pos;
}
