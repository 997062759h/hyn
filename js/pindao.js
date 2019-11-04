var channels_block_wrapper=document.getElementsByClassName("channels_block_wrapper")[0]
ajax("json/频道广场.json",function(str){
	var arr=JSON.parse(str)
	for (let i = 0; i < arr.big.length; i++){
		channels_block_wrapper.innerHTML+=`
		<div class="channels_item">
		    <div class="lazyimg lazyimg_loaded channels_item_img">
		        <img src=${arr.big[i]}>
		    </div>
		</div>
		`
	}
	for(let i = 0; i < arr.list.length; i++){
		channels_block_wrapper.innerHTML+=`
		<div class="channels_item">
		    <div class="channels_item_title">
		        <span class="channels_item_title_main">${arr.list[i].title}</span>
		        <span class="channels_item_title_aside">${arr.list[i].txt}</span>
		    </div>
		    <div class="channels_item_imgs">
		        <div class="channels_item_link">
		            <div class="lazyimg lazyimg_loaded channels_item_img" style="margin-right: 15px;"><img
		                    src=${arr.list[i].img1}></div>
		            <div class="lazyimg lazyimg_loaded channels_item_img" style="margin-right: 15px;"><img
		                    src=${arr.list[i].img2}></div>
		        </div>
		    </div>
		</div>
		`
	}
})