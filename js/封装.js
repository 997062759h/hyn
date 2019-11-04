
//运动框架
function startMove(iTarget,attr,obj){
    clearInterval(obj.timer)
    obj.timer=setInterval(function(){
     var cur=0
     if(attr=="opacity"){
         cur=Math.round(parseFloat(getStyle(obj,attr))*100)
     }else{
         cur=parseInt(getStyle(obj,attr))
     }

     var speed=(iTarget-cur)/6
     speed=speed>0?Math.ceil(speed):Math.floor(speed)

     if(iTarget==getStyle(obj,attr)){
         clearInterval(obj.timer)
     }else{
        if(attr=="opacity"){
          cur+=speed
          obj.style.opacity=cur/100;
          obj.style.filter="alpha(opacity="+cur+");"
        }else{
         obj.style[attr]=cur+speed+"px"
        }
     }
    },30)
}


//点击轮播
function oncLun(oLeft,oRight,oUl){
  var liLen=oUl.getElementsByTagName("li").length
  var cWidth=oUl.offsetWidth/liLen;
  var Cnum=0;
  oRight.onclick=function(){
    Cnum++;
    if(Cnum==liLen){
        oUl.style.left=0;
        Cnum=1;
    } 
      startMove(-cWidth*Cnum,"left",oUl);
  }
  oLeft.onclick=function(){
    Cnum--;
    if(Cnum==-1){
        Cnum=liLen-2
        oUl.style.left=-cWidth*(liLen-1)+"px";
    }
        startMove(-cWidth*Cnum,"left",oUl)

  }
}


//兼容IE
function getStyle(obj,name){
    if(obj.currentStyle){
       return obj.currentStyle[name]
    }else{
        return getComputedStyle(obj,null)[name]
    }
}

// 轮播图
function banner(win,ul,list,right,left) {
    var width = win.offsetWidth,
        index = 0,
        time,
        num;
        if(arguments.length==3){
            wrap()
            
        }else{
            wrap()
            right.onclick = function () {
                test()
            }
            left.onclick = function () {
                if (index == 0) {
                    index = list.length - 1;
                    ul.style.left = -(width * list.length) + "px";
                } else {
                    index--
                }
                anim()
            }
        }
        function wrap(){
            function test(){
                if (index == list.length) {
                    index = 1;
                    ul.style.left = "0px";
                } else {
                    index++
                }
                anim()
            }
            function anim() {
                var speed;
                clearInterval(time);
                time = setInterval(function () {
                    //运动一个图的距离
                    speed = (-index * width - ul.offsetLeft) / 10;
                    if (speed > 0) {
                        speed = Math.ceil(speed);
                    } else {
                        speed = Math.floor(speed);
                    }
                    ul.style.left = ul.offsetLeft + speed + "px";
                }, 30);
                num = index;
                if (num == list.length) {
                    num = 0
                }
                for (var x = 0; x < list.length; x++) {
                    list[x].className = "";
                }
                list[num].className = "active";
            }
            // 点
            for (var x = 0; x < list.length; x++) {
                (function (x) {
                    list[x].onmouseover = function () {
                        for (var y = 0; y < list.length; y++) {
                            list[y].className = "";
                        }
                        this.className = "active";
                        index = x;
                        anim()
                    }
                })(x)
            }
        
            // 自动播放
            var t;
            function zidong() {
                t = setInterval(function () {
                    test()
                   
                }, 2000);
            }
            zidong()
            // 划入
            win.onmouseover = function () {
                clearInterval(t);
            }
            // 滑出
            win.onmouseout = function () {
                zidong()
            }
        }
}
//无缝滚动
function Seamless(win,ul,scroll_points) {
   ul.innerHTML=2*ul.innerHTML
    var  timer=setInterval(function () {
        var left=0;
        var speed = -2;
         if (ul.offsetLeft < -ul.offsetWidth / 2) {
             ul.style.left = 0 + "px";
         }
         if (ul.offsetLeft > 0) {
             ul.style.left = -ul.offsetWidth / 2 + "px";
         }
         ul.style.left = ul.offsetLeft + speed + "px"
          left=  parseInt(ul.style.left)/(ul.offsetWidth/2) *(win.offsetWidth-scroll_points.offsetWidth)
        scroll_points.style.left=-left+"px";
     }, 30);
   
   
     win.onmouseover=function(){
        clearInterval(timer)
     }
     win.onmouseout=function(){
         clearInterval(timer)
         timer=setInterval(function () {
             var speed = -2;
             if (ul.offsetLeft < -ul.offsetWidth / 2) {
                 ul.style.left = 0 + "px";
             }
             if (ul.offsetLeft > 0) {
                 ul.style.left = -ul.offsetWidth / 2 + "px";
             }
             ul.style.left = ul.offsetLeft + speed + "px"
             left=  parseInt(ul.style.left)/(ul.offsetWidth/2) *(win.offsetWidth-scroll_points.offsetWidth)
             scroll_points.style.left=-left+"px";
         }, 30);
     }
   
 }