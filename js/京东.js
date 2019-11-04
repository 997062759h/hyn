var input = document.getElementsByTagName("input")[0];
var arr = ["aoc显示器", "美度手表", "opop手机", "品牌产品"];
var num = 0
timer = setInterval(function() {
	if (num == 4) {
		num = 1;
	} else {
		input.placeholder = arr[num]
		num++;
	}

}, 2000)
input.onclick = function() {
	clearInterval(timer);
}
var jd = document.getElementById("jd");
var arrs = ["京东男人节", "农牧丰收节", "每满100-10"]
var num1 = 0;
timer1 = setInterval(function() {
	if (num1 == 2) {
		num1 = 0;
	} else {
		num1++;
		jd.innerHTML = arrs[num1];
	}
}, 2000)

// 轮播图
var cate_menu = document.getElementsByClassName("cate_menu")[0];
var cate_channel = document.getElementsByClassName("cate_channel")[0];
var cate_detail = document.getElementsByClassName("cate_detail")[0];
var cate_pop = document.getElementsByClassName("cate_pop")[0];
var cate_detail_tit = document.getElementsByClassName("cate_detail_tit")[0];
var cate_detail_con = document.getElementsByClassName("cate_detail_con")[0];
ajax("./json/京东.json", function(str) {
	var arr = JSON.parse(str);
	for (let i = 0; i < arr.length; i++) {
		var lis = document.createElement("li");
		lis.innerHTML = `
   <a href="JavaScript:;">${arr[i].name}</a>
   `
		cate_menu.appendChild(lis);
	}
}, function() {})
cate_menu.onmouseover = function(ev) {
	cate_pop.style.display = "block";
	var target = ev.target || ev.srcElement;
	var tt = cate_menu.getElementsByTagName("li");
	for (let i = 0; i < tt.length; i++) {
		tt[i].index = i;
		tt[i].onmouseover = function() {
			ajax("./json/京东.json", function(str) {
				var arrs = JSON.parse(str);
				cate_channel.innerHTML = ""
				for (let j = 0; j < arrs[i].title.length; j++) {
					cate_channel.innerHTML +=
						`
                        <a href="JavaScript:;">${arrs[i].title[j]}&nbsp;&nbsp;></a> 
                    `
				}
				cate_detail.innerHTML = ""
				for (let a = 0; a < arrs[i].list.length; a++) {
					cate_detail.innerHTML +=
						`
                    <dl class="cate_detail_item">
                       <dt class="cate_detail_tit">
                          <a href="JavaScript:;">${arrs[i].list[a].title}&nbsp;></a>
                       </dt>          
                       <dd class="cate_detail_con"></dd>
                    <dl>    
                    `
					var dd = cate_detail.children[a].children[1]
					for (let k = 0; k < arrs[i].list[a].Name.length; k++) {
						dd.innerHTML +=
							`
                    <a href="JavaScript:;">${ arrs[i].list[a].Name[k]}</a>
                    `
					}
				}
			}, function() {})
		}
	}
}
cate_menu.onmouseout = function() {
	cate_pop.style.display = "none";
}
//轮播图
var oUl = document.getElementsByClassName("focus-item__core")[0];
var oLi = oUl.getElementsByTagName("li");
var left = document.getElementsByClassName("slider_control_l")[0];
var right = document.getElementsByClassName("slider_control_r")[0];
var slider = document.getElementsByClassName("slider_indicators")[0];
var spans = slider.getElementsByTagName("span");
var timer;
var num2 = 0;

function move() {
	if (num2 == 7) {
		num2 = 0;
	} else {
		num2++;
	}
	for (let i = 0; i < oLi.length; i++) {
		oLi[i].className = "";
		spans[i].className = ""
	}
	oLi[num2].className = "li1"
	spans[num2].className = "spans"
}
timer = setInterval(move, 2000)
right.onclick = function() {
	move();
}
left.onclick = function() {
	if (num2 == 0) {
		num2 = 7;
	} else {
		num2--;
	}
	for (let i = 0; i < oLi.length; i++) {
		oLi[i].className = ""
		spans[i].className = ""
	}
	oLi[num2].className = "li1"
	spans[num2].className = "spans"
}
for (let i = 0; i < spans.length; i++) {
	spans[i].index = i;
	spans[i].onclick = function() {
		for (let j = 0; j < spans.length; j++) {
			spans[j].className = ""
			oLi[j].className = ""
		}
		num2 = this.index;
		this.className = "spans"
		oLi[this.index].className = "li1"
	}
}
var focus_slider2 = document.getElementsByClassName("focus-slider2")[0];
var opul = document.getElementsByClassName("opul")[0];
var opli = opul.getElementsByTagName("li");
var slider_control_l1 = document.getElementsByClassName("slider_control_l1")[0];
var slider_control_r1 = document.getElementsByClassName("slider_control_r1")[0];
var num3 = 0;

function moves() {
	if (num3 == 2) {
		num3 = 0;
	} else {
		num3++;
	}
	for (let i = 0; i < opli.length; i++) {
		opli[i].index = i;
		for (let i = 0; i < opli.length; i++) {
			opli[i].className = "";
		}
		opli[num3].className = "opc";
	}
}
timer3 = setInterval(moves, 3000)
focus_slider2.onmouseover = function() {
	clearInterval(timer3)
	slider_control_l1.style.display = "block";
	slider_control_r1.style.display = "block";
}
focus_slider2.onmouseout = function() {
	timer3 = setInterval(moves, 3000)
	slider_control_l1.style.display = "none";
	slider_control_r1.style.display = "none";
}
slider_control_r1.onclick = function() {
	moves();
}
slider_control_l1.onclick = function() {
	if (num3 == 0) {
		num3 = 2;
	} else {
		num3--;
	}
	for (let i = 0; i < opli.length; i++) {
		opli[i].index = i;
		for (let i = 0; i < opli.length; i++) {
			opli[i].className = "";
		}
		opli[num3].className = "opc";
	}
}
var J_tab_head = document.getElementsByClassName("J_tab_head")[0];
ajax("./json/机票.json", function(str) {
	var arr3 = JSON.parse(str);
	for (let i = 0; i < arr3.length; i++) {
		var J_tab_headli = document.createElement("li");
		J_tab_headli.innerHTML =
			`
            <a href="JavaScript:;">
            <i class="service_ico">
            <img src="${arr3[i].img[0]}" alt="">
            <img src="${arr3[i].img[1]}" alt="">
           </i>
           <span class="service_txt">${arr3[i].txt}</span>
        </a>
            `
		J_tab_head.appendChild(J_tab_headli)
	}
}, function() {})
// 秒杀
var timmer__unit = document.getElementsByClassName("timmer__unit");
function test(num4) {
	if (num4 < 10) {
		return "0" + num4
	} else {
		return num4;
	}
}
var timer4 = setInterval(txt, 1000);

function txt() {
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var second = date.getSeconds();
	var arr4 = [test(23 - hour), test(59 - min), test(60 - second)];
	for (let i = 0; i < arr4.length; i++) {
		timmer__unit[i].innerHTML = arr4[i];
	}
}

var slider_wrapperul = document.getElementsByClassName("slider_wrapperul")[0];
var slider_wrapper = document.getElementsByClassName("slider_wrapper")[0];
var slider_control_l2 = document.getElementsByClassName("slider_control_l2")[0];
var slider_control_r2 = document.getElementsByClassName("slider_control_r2")[0];
ajax("./json/秒杀.json", function(str) {
	var arr3 = JSON.parse(str);
	for (let i = 0; i < arr3.length; i++) {
		arr3[i].index = i;
		for (let j = 0; j < arr3[i].img.length; j++) {
			var ms = document.createElement("a");
			ms.className = "slider_item"
			ms.innerHTML =
				`
         <div class="lazyimg">
             <img src="${arr3[i].img[j]}" alt=""> 
         </div>
         <h6>${arr3[i].text[j]}</h6>
         <div class="seckill-item__price">
           <span class="price-miaosha">
           <i>￥</i>
           <span>${arr3[i].jiage[j]}</span>
           </span> 
          <span class="price-origin">
           <i>￥</i>
          <span>${arr3[i].del[j]}</span>
         </span><del>
        </div>
         `
			slider_wrapperul.appendChild(ms);
		}
	}
}, function() {})
var l2 = 0;
slider_control_r2.onclick = function() {
	if (l2 == 4) {
		slider_wrapperul.style.left = "0" + "px";
		l2 = 0;
	} else {
		l2++;
		slider_wrapperul.style.left = -slider_wrapper.offsetWidth * l2 + "px";
	}
}
slider_control_l2.onclick = function() {
	if (l2 == 0) {
		slider_wrapperul.style.left = 0 + "px"
		l2 = 4;
	} else {
		l2--
	}
	slider_wrapperul.style.left = -slider_wrapper.offsetWidth * l2 + "px";
}
//秒杀右侧
var num4 = 0;
var circle = 0;
var slider_indicators1 = document.getElementsByClassName("slider_indicators1")[0];
var slider_wrapper1 = document.getElementsByClassName("slider_wrapper1")[0];
var brand_item = document.getElementsByClassName("brand-item")[0];
var span2 = slider_indicators1.getElementsByTagName("span");

function moves1() {
	num4++;
	circle++;
	if (num4 > 2) {
		slider_wrapper1.style.left = 0;
		num4 = 1;
	}
	startMove(slider_wrapper1, {
		"left": -num4 * brand_item.offsetWidth
	})
	if (circle > 1) {
		circle = 0;
	}
	for (let i = 0; i < span2.length; i++) {
		span2[i].className = "";
	}
	span2[circle].className = "span2";
}
time4 = setInterval(moves1, 1000);
var tab_head = document.getElementsByClassName("tab_head")[0];
var tab_head_item = tab_head.getElementsByClassName("tab_head_item");
var top_tab1 = document.getElementsByClassName("tab_body")[0];
// for(let i=0;i<tab_head_item.length;i++){
//  console.log(tab_head_item[i])
// }
var tab_head = document.getElementsByClassName("tab_head")[0];
var tab_head_item = tab_head.getElementsByClassName("tab_head_item");
ajax("./json/排行榜.json", function(str) {
	var arr = JSON.parse(str);
	for (let i = 0; i < arr.length; i++) {
		var tab_body = document.createElement("div");
		tab_body.className = "top_list"
		tab_body.innerHTML =
			`
   <div class="top_item1 ">
       <a href="JavaScript:;" class="top_item_lk1">
           <img src="${arr[i].img[0]}" alt="" class="lk1">
           <div class="top_item_rank">
               <span class="top_item_rank_hot">热卖</span>
               <span class="top_item_rank_top">TOP01</span>
           </div>
           <span class="top_item_name1">${arr[i].text[0]}</span>
       </a>
   </div>
   <div class="top_item2">
       <a href="JavaScript:;">
           <div class="lazyimg4">
               <img src="${arr[i].img[1]}" alt="">
               <div class="top_item_rank_2">
                   <span class="top_item_rank_top1">TOP</span>
                   <span class="top_item_rank_top2">02</span>
               </div>
               <span class="top_item_name2">${arr[i].text[1]}</span>
           </div>
       </a>
   </div>
   <div class="top_item2">
       <a href="JavaScript:;">
           <div class="lazyimg4">
               <img src="${arr[i].img[2]}" alt="">
               <div class="top_item_rank_2" style="background: yellow;">
                   <span class="top_item_rank_top1">TOP</span>
                   <span class="top_item_rank_top2">03</span>
               </div>
               <span class="top_item_name2">${arr[i].text[2]}</span>
           </div>
       </a>
   </div>
   <div class="top_item2">
       <a href="JavaScript:;">
           <div class="lazyimg4">
               <img src="${arr[i].img[3]}" alt="">
               <div class="top_item_rank_2" style="background: grey;">
                   <span class="top_item_rank_top1">TOP</span>
                   <span class="top_item_rank_top2">04</span>
               </div>
               <span class="top_item_name2">${arr[i].text[3]}</span>
           </div>
       </a>
   </div>
   <div class="top_list_boards">
       <a href="JavaScript:;">
           <span>好物榜&nbsp;&nbsp;></span>
       </a>
       <a href="JavaScript:;">
           <span>折扣榜&nbsp;&nbsp;></span>
       </a>
       <a href="JavaScript:;">
           <span>店铺榜&nbsp;&nbsp;></span>
       </a>
       <a href="JavaScript:;">
           <span>热搜榜&nbsp;&nbsp;></span>
       </a>
   </div>
   
   `
		top_tab1.appendChild(tab_body)
	}
	var top_list = document.getElementsByClassName("top_list")
	top_list[0].style.display = "block"
	for (let j = 0; j < tab_head_item.length; j++) {
		tab_head_item[j].onmouseover = function() {
			for (let k = 0; k < tab_head_item.length; k++) {
				tab_head_item[k].className = "tab_head_item";
				top_list[k].style.display = "none"
			}
			tab_head_item[j].className = "tab_head_item active1"
			top_list[j].style.display = "block"
		}
	}
}, function() {})

// 发现好货
var good_ul = document.getElementsByClassName("good-ul")[0]
ajax("./json/发现好货.json", function(str) {
	var arr = JSON.parse(str)
	for (let i = 0; i < arr.img.length; i++) {
		good_ul.innerHTML +=
			`
		<li>
		    <div class="goods__image">
		        <div class="lazyimg lazyimg_loaded">
		            <img src=${arr.img[i]}
		                class="lazyimg_img" style="width: 150px;height:150px">
		        </div>
		    </div>
		    <div class="goods__name">${arr.txt[i]}</div>
		</li>
		`
	}

})
//无缝轮播
var nice_good_right = document.getElementsByClassName("nice-good-right")[0]
var scroll_bar = document.getElementsByClassName("scroll-bar")[0]
var scroll_points = document.getElementsByClassName("scroll-points")[0]
Seamless(nice_good_right, good_ul, scroll_points)





// 底部调用json
var oF_center = document.getElementsByClassName("footer-center-box")[0]
var oF_bottom = document.getElementsByClassName("f-b-top")[0]
ajax("json/底部.json", function(str) {
	var arr = JSON.parse(str)
	for (let i = 0; i < arr.length; i++) {
		if (i < (arr.length - 2)) {
			oF_center.innerHTML += `
					<dl>
						<dt>${arr[i].dt}</dt>
					</dl>
					`
			for (let j = 0; j < arr[i].dd.length; j++) {
				oF_center.children[i].innerHTML += `
						<dd><a href="">${arr[i].dd[j]}</a></dd>
						`
			}
		} else if (i == (arr.length - 1)) {
			for (let j = 0; j < arr[i].list.length; j++) {
				oF_bottom.children[0].innerHTML +=
					`
						<a href="">${arr[i].list[j]}</a>
						<span class="fengexian">|</span>
						`
			}
		} else if (i == (arr.length - 2)) {
			oF_center.innerHTML +=
				`
					<dl class="help-cover">
						<dt>${arr[i].title}</dt>
						<dd>${arr[i].txt}</dd>
						<a href="" class="chakan">查看详情&nbsp&#5171</a>
					</dl>
					`
		}
	}
})

// 侧边框
var oAside = document.getElementsByTagName('aside')[0]
var oLink = document.querySelectorAll('.link')
var oTop = document.querySelector('.Totop')
var scrollTop
var timerTo
window.onscroll = function() {
	scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	if (scrollTop >= 760 && scrollTop < 3000) {
		oAside.style.position = 'fixed'
		oAside.style.top = '80px'
	} else if (scrollTop >= 3000) {
		oAside.style.position = 'fixed'
		oAside.style.top = '120px'
	} else {
		oAside.style.position = 'absolute'
		oAside.style.top = '760px'
	}
}
var arr = [800, 1040, 2040, 2890, 20000]

function aLink(obj, num) {
	obj.onclick = function() {
		clearInterval(timerTo)
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		timerTo = setInterval(function() {
			var speed = (num - scrollTop) / 10
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
			if (Math.abs(num - scrollTop) <= Math.abs(speed)) {

				scrollTop = num;
				clearInterval(timerTo)
			}
			scrollTop += speed
			document.documentElement.scrollTop = document.body.scrollTop = scrollTop

		}, 30)
	}
}
aLink(oTop, '0')
// aLink(oLink[1],'0')
for (let i = 0; i < oLink.length; i++) {
	xarr = arr[i]
	aLink(oLink[i], xarr)
}

//登录判断
var link_login=document.getElementsByClassName("link_login")[0]
var link_regist=document.getElementsByClassName("link_regist")[0]
link_login.onclick=function(){
	window.open("登录界面.html")
}
link_regist.onclick=function(){
	window.open("注册页面.html")
}
if(window.location.search.indexOf("?")==0){
	var username =window.location.search.substring(1)
			link_login.innerHTML=username+"&nbsp,";
			link_login.style.color="red"
		}
