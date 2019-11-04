function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj, null)[attr]
    }
}
// -------------------------------------------------------- 链式
// json   参数的形式  都是一个键值对  {width:300,left:200}
function startMove(obj,json,fnEnd) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var beStop=true  //默认所有的都到了
       for(var attr in json){
                   // 设置速度
        var cur = 0;
        if (attr == "opacity") {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100)
        } else {
            cur = parseInt(getStyle(obj, attr))
        }
        var speed = (json[attr] - cur) / 6
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        // 设置运动
        // 当所有的值都到的时候  清空定时器
        // 当没有不到的时候    清空定时器
           if(cur!=json[attr]){
               beStop=false
           }    

            if (attr == "opacity") {
             cur+=speed
             obj.style.opacity=cur/100;
             obj.style.filter="alpha(opacity="+cur+");"
            } else {
             obj.style[attr]=cur+speed+"px"
            }
       }
       
       if(beStop){
         clearInterval(obj.timer)
         if(fnEnd){
            fnEnd()
         }
       }
    }, 30)
}