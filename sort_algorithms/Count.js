function Count(){
   let arr=[],high=-1,id=0;
   for(let i=0;i<total_size;i++) {
      let x=bar_len[i];
      if(!arr[x]) arr[x]=0;
      update_bar(bar_div[i],"violet",x);
      high=Math.max(high,x);
      arr[x]++;
   }
   for(let i=0;i<=high;i++){
      while(arr[i]--) update_bar(bar_div[id++],"green",i);
   }
}