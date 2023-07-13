function Radix()
{
        let m = bar_len[0];
        for (let i = 1; i < total_size; i++)
        {
            if (bar_len[i] > m)
                m = bar_len[i];
        }

		for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
        {
            let output = new Array(total_size);
            let i;
            let count = new Array(10);
            for(let i=0;i<10;i++)
                count[i]=0;
            for (i = 0; i < total_size; i++)
            {
                update_bar(bar_div[i],"red",bar_len[i]);
                count[Math.floor(bar_len[i] / exp) % 10]++;
            }
            for (i = 1; i < 10; i++)
                count[i] += count[i - 1];

            for (i =  total_size- 1; i >= 0; i--) {
                output[count[Math.floor(bar_len[i] / exp) % 10] - 1] = bar_len[i];
                count[Math.floor(bar_len[i] / exp) % 10]--;
            }
            for (i = 0; i < total_size; i++)
            {
                bar_len[i] = output[i];
                update_bar(bar_div[i],"skyblue",bar_len[i]);
            }
        }
        for (i = 0; i < total_size; i++)
            {
                update_bar(bar_div[i],"green",bar_len[i]);
            }        


}
