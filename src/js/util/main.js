let s=module.exports=global.AppUtil={};

// 绑定事件
s.addEventListener=function(el,ev,fn){
    el.addEventListener(ev,fn);
}
//将时间转为字符串
s.transferTimeToString=function(time,format='-',hAndM=false){
    if(!time)return '';
    let dateTime=new Date(time);
    let y=dateTime.getFullYear();
    let m=dateTime.getMonth()+1;m=m>=10?m:'0'+m;
    let d=dateTime.getDate();d=d>=10?d:'0'+d;
    let hourAndMinute=hAndM?' '+dateTime.toTimeString().slice(0,5):'';
    return y+format+m+format+d+hourAndMinute;
}