var recommend_title=document.getElementsByClassName("recommend-title")[0]
var recommend_content=document.getElementsByClassName("recommend-content")[0]

ajax("json/推荐.json",function(str){
	var arr=JSON.parse(str)
	function add(num){
		recommend_content.children[0].innerHTML=""
		for(let j=0;j<arr[num].list.length;j++){
			recommend_content.children[0].innerHTML+=`
			<li class=${arr[num].list[j].classname} data=${arr[num].list[j].data}>
				<div class="recommend-content-img">
					<img src=${arr[num].list[j].img} >
				</div>
				<p class="recommend-details">
					<span>
						自营
					</span>
					${arr[num].list[j].txt}
				</p>
				<div class="price-region">
					<i>¥</i>
					<span class="price">${arr[num].list[j].jiage}</span>
				</div>
				<div class="seek-resemble">
					<div class="seek-resemble-text">
						<i></i>
						<span>找相似</span>
					</div>
				</div>
			</li>
			`
		}
	}
	for(let i=0;i<arr.length;i++){
		if(i==0){
			recommend_title.children[0].innerHTML+=`
			<li class="selected">
				<span>${arr[i].tltle}</span>
				<small>${arr[i].futitle}</small>
			</li>
			`
			add(i)
		}else{
			recommend_title.children[0].innerHTML+=`
			<li>
				<span>${arr[i].tltle}</span>
				<small>${arr[i].futitle}</small>
			</li>
			`
		}
	}
	var re_title_li=recommend_title.getElementsByTagName('li')
	for(let i=0;i<re_title_li.length;i++){
		re_title_li[i].onclick=function(){
			add(i)
			for(let x=0;x<re_title_li.length;x++){
				re_title_li[x].className=''
			}
			re_title_li[i].classList.add("selected")
		}
	}
	for(let i=0;i<recommend_content.children[0].children.length;i++){
		recommend_content.children[0].children[i].onclick=function(){
			var data=this.getAttribute("data")-1
			window.open("detail.html?"+data)
		}
	}
})
