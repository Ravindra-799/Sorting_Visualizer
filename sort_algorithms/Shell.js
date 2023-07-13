function Shell()
{

		for (let gap = Math.floor(total_size/2); gap > 0; gap = Math.floor(gap/2))
		{
		
			
			for (let i = gap; i < total_size; i += 1)
			{
			
				
				let temp = bar_len[i];
				update_bar(bar_div[i],"yellow",bar_len[i]);
				
				let j;
				for (j = i; j >= gap && bar_len[j - gap] > temp; j -= gap)
				{
                    update_bar(bar_div[j],"red",bar_len[j]);
                    update_bar(bar_div[j-gap],"red",bar_len[j-gap]);
					bar_len[j] = bar_len[j - gap];
					//swap(j,j-gap,"red","red");
					update_bar(bar_div[j],"pink",bar_len[j]);
                    update_bar(bar_div[j-gap],"skyblue",bar_len[j-gap]);

				}
				bar_len[j] = temp;
				update_bar(bar_div[j],"skyblue",bar_len[j]);
			}
		}
		for(let i = 0;i<total_size;i++)
		{
			update_bar(bar_div[i],"green",bar_len[i]);
		}
}
