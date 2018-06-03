<template>
    <div class="avatar_container">
        <span class="avatar_text">头像</span>
        <img class="icon" :src="user.userHeadimg" alt="">
        <div>
            <label for="fileId" class="label-file">
                <span>修改头像</span>
                <form ref="form">
                    <input ref="fileInput" @change="changeFile" id="fileId"  type="file" />
                </form>
            </label>
            <div class="tips">支持jpg、bmp、png格式，不超过5M</div>
        </div>  
    </div>
</template>
<script>
import {customerModule} from '../../../api/main';
export default {
    data(){
        return {
            user:{},
            formData:{},
            saveType:'headerimg',
            tipMessage:''
        }
    },
    methods:{
        //接受文件函数
      changeFile(ev){
          let postFiles = Array.prototype.slice.call(this.$refs.fileInput.files);
          this.$refs.form.reset();//form表单的置空 兼容ie10 
          if (!this.multiple) { postFiles = postFiles.slice(0, 1); }
          if(postFiles.length==0){return}
          if(this.valiateSize(postFiles[0])&&this.valiateType(postFiles[0])){
              this.uploadParams(postFiles[0]);
            this.upload();
          }
      },
       //生成上传附件参数的函数
      uploadParams(file){
         let form = new FormData(); // FormData 对象
            form.append("file", file); // 文件对象
            form.append("saveType", this.saveType); // 保存类型
            this.formData=form;
       },
      upload(){
          customerModule.upload(this.formData).then(res=>{
              if(res.error==0){
                  this.perfectUser(res.url);
              }
          })
      },
      perfectUser(headerImgUrl){//修改用户头像接口
            customerModule.saveOrderCustomerInfo({
                userHeadimg:headerImgUrl
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.user.userHeadimg=headerImgUrl;
                    AppUtil.setCurrentUserInfo(this.user);
                    Bus.$emit('updateHeaderImg',headerImgUrl);
                }
            })
      },
      valiateSize(file){
          let size=file.size;
          if(size>10*1024*1024){
              this.tipMessage='文件超过限制大小！';
              return false
          }else{
              this.tipMessage='';
              return true;
          }
      },
      valiateType(file){
          let typeList=['jpg','bmp','png'];
          let type=file.name.substr(file.name.lastIndexOf('.')+1);
          if(typeList.indexOf(type)!=-1){
              this.tipMessage='';
              return true
          }else{
              this.tipMessage='上传格式为jpg/bmp/png';
              return false
          }
      },
    },
    created(){
        AppUtil.getCurrentUserInfo(user=>{
            this.user=user;
        });
    }
}
</script>
<style lang="scss" scoped>
    .avatar_container{
        display: flex;
        align-items: center;
        padding:15px 0 25px;
    }
    .avatar_text{
        color: #292B2C;
        font-size:14px;
    }
    .icon{
        width:150px;
        height:150px;
        border-radius: 50%;
        margin:0px 10px 0px 40px;
    }
    .label-file{
        width:126px;
        height:40px;
        cursor: pointer;
        display: inline-block;
        position: relative;
        overflow: hidden;
        background: #ed9f34;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        font-size:14px;
        color:#fff;
        &:hover{
            background: #f1b255;
        }
    }
    .label-file input[type="file"]{
        position: absolute;
        right: 10000px;
        top:0px;
        opacity: 0;
        height:100%;
    }
    .tips{
        font-family: 'SimHei';
        font-size: 16px;
        color: #868686;
        margin-top:18px;
    }
</style>

