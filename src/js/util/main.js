let s=module.exports=global.AppUtil={};

// 绑定事件
s.addEventListener=function(el,ev,fn){
    el.addEventListener(ev,fn);
}