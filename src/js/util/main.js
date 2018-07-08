import {customerModule} from '../api/main';
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
    let hourAndMinute=hAndM?' '+dateTime.toTimeString().slice(0,8):'';
    return y+format+m+format+d+hourAndMinute;
}

s.message=function(target,message,type){
    target.$message({
        showClose: true,
        message: message,
        type: type
      });
}



s.findWhere=function(list,key,value){
    for(var v of list){
        if(v[key]==value){
            return v
        }
    }
    return false
}

s.getCurrentUserInfo=function(cb){
   if(!localStorage.getItem('zlfuserInfo')){
       if(localStorage.getItem('role')=='client'){
           customerModule.getCurrentUser().then(res=>{
                if(res.statusCode=='1'){
                    s.setCurrentUserInfo(res.data);
                    cb(res.data);
                }
            })
       }else{
            customerModule.getSupplierUser().then(res=>{
                if(res.statusCode=='1'){
                    s.setCurrentUserInfo(res.data);
                    cb(res.data);
                }
            })
       }
   }else{
       cb(JSON.parse(localStorage.getItem('zlfuserInfo')))
   }
}
s.setCurrentUserInfo=function(data){
    localStorage.setItem('zlfuserInfo',JSON.stringify(data))
 }

 s.getLicenseStatus=function(cb){//获取营业执照审核状态 0：待审核; 1：审核通过; 2: 审核不通过; 3：未提交
    customerModule.getLicenseStatus().then(res=>{
        if(res.statusCode=='1'){
            cb(res.data)
        }
    })
 }
s.getFactoryInspection=function(cb){//获取供应商验厂状态 0：待审核 1：审核通过 2: 审核不通过
    customerModule.factoryInspection().then(res=>{
        if(res.statusCode=='1'){
            cb(res.data)
        }
    })
}
 s.checkUserLoginName=function(loginName,cb){
    customerModule.checkInfo({loginName:loginName}).then(res=>{
        if(res.statusCode=='1'){
            cb(res.data)
        }
    })
 }
 s.checkVerificationCode=function(phone,code,type,cb){
    customerModule.checkVerificationCode({phone:phone,code:code,type:type}).then(res=>{
        cb(res)
    })
 }