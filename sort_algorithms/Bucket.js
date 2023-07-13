function Bucket()
{
	
		let buckets = new Array(total_size);

		for (let i = 0; i < total_size; i++)
		{
			buckets[i] = [];
		}

		for (let i = 0; i < total_size; i++) {
			let idx = bar_len[i] * total_size;
			buckets[Math.floor(idx)].push(bar_len[i]);
		}

		// 3) Sort individual buckets
		for (let i = 0; i < total_size; i++) {
			buckets[i].sort(function(a,b){return a-b;});
		}

		// 4) Concatenate all buckets into arr[]
		let index = 0;
		for (let i = 0; i < total_size; i++) {
			for (let j = 0; j < buckets[i].length; j++) {
				bar_len[index++] = buckets[i][j];
			}
		}
}

