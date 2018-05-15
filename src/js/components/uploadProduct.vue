<template>
    <div class="file-upload-container">
        <div class="label_text">上传图片</div>
        <div class="file_box">
            <div class="imgs_box">
                <img v-for="(item,index) in showFileList" :key="index" class="img_item" :src="item.url" alt="">
                <div v-if="loading" class="loading"><i class="el-icon-loading"></i></div>
            </div>
            <div class="file_container">
                <div class="local_img">上传电脑本地图片</div>
                <label v-if="isEdit" for="fileId" class="label-file">
                    <form ref="form">
                        <input ref="fileInput" @change="changeFile" id="fileId" :multiple="multiple" type="file" />
                    </form>
                </label>
                <div class="error_message" v-if="tipMessage">
                    <i class="icon el-icon-remove"></i>
                    <span>{{tipMessage}}</span>
                </div>
            </div>
            <div class="tip_text">最多上传 <span class="sub">5</span>张，每张图片大小不超过{{limitSize}}M，支持jpg、bmp、png格式</div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        multiple:{
            type:Boolean,
            default:true
        },
        isEdit:{
            default:true
        }      
    },
  data(){
      return {
        fileList:[],
        tipMessage:'',
        limitSize:2,
        loading:false
      }
  },
  methods:{
      //接受文件函数
      changeFile(ev){
          let postFiles = Array.prototype.slice.call(this.$refs.fileInput.files);
          this.$refs.form.reset();//form表单的置空 兼容ie10 
          if (!this.multiple) {
               postFiles = postFiles.slice(0, 1);
          }else{
              postFiles = postFiles.slice(0);
          }
          if(postFiles.length==0){return};
          if(this.valiateType(postFiles)&&this.valiateSize(postFiles)&&this.valiateNumber(postFiles)){
              this.loading=true;
              setTimeout(()=>{
                  this.loading=false;
                  this.fileList=[...this.fileList,...postFiles];
              },1000)
          } 
      },
      valiateNumber(files){//验证数量
          if(this.fileList.length+files.length>5){
              this.tipMessage='最多上传5张！';
              return false
          }else{
              this.tipMessage='';
              return true
          }
      },
      valiateSize(files){//验证大小
          for(var val of files){
              if(val.size>this.limitSize*1024*1024){
                    this.tipMessage='文件超过限制大小！';
                    return false
              }
          }
            this.tipMessage='';
            return true;
      },
      valiateType(files){//验证类型
          let typeList=['jpg','bmp','png'];
          for(var val of files){
              let type=val.name.substr(val.name.lastIndexOf('.')+1);
              if(typeList.indexOf(type)==-1){
                  this.tipMessage='上传格式为jpg/bmp/png';
                  return false
              } 
          }
            this.tipMessage='';
            return true
      },
      //生成上传附件参数的函数
      uploadParams(file){
         let form = new FormData(); // FormData 对象
         if (this.fileList.length > 0) {
            form.append("file", file); // 文件对象
            this.formData=form;
         }
       },
       progressFile(){

       },
      uploadFile(file){//调接口函数
        uploadFileModuleAPI.upload(this.formData,this.progressFile).then(res=>{
           
        });
      },
      emitHandleRemove(){//删除
            this.fileList=[];
      },
      previewImg(){//预览图片
        //   window.open(this.imgUrl);
      }
    }, 
  mounted(){
    
  },
  computed:{
      hasFile(){
          return this.fileList.length!=0;
      },
      showFileList(){
         return this.fileList.map(v=>{
              return {
                  ...v,
                  url:window.URL.createObjectURL(v)
              }
          }) 
      }
  }
}
</script>
<style lang="scss" scoped>
    .file-upload-container{
        width:100%;
        display: flex;
        font-size: 14px;
    }
    .file_box{
        flex: 1;
    }
    .imgs_box{
        display: flex;
        .loading{
            text-align: center;
            line-height: 100px;
            background: rgb(250,250,250);
            .el-icon-loading{
                font-size:32px;
            }
        }
        .img_item,.loading{
            width:130px;
            height: 100px;
            margin-bottom:10px;
            margin-right:10px;
        }
    }
    .label_text{
        color: rgba(41, 43, 44, 0.8);
        padding:22px 25px 0 0;
    }
    .file_container{
        width:164px;
        height: 134px;
        border: 1px solid #EEEDEB;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background: #fff;
        margin-bottom: 10px;
        position: relative;
        .local_img{
            color: rgba(41, 43, 44, 0.6);
            line-height: 40px;
            background: #f6f5f5;
            padding-left:5px;
        }
        .label-file{
            width:80px;
            height:80px;
            margin-left:43px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            overflow: hidden;
            background: url('../../img/u2653.png') no-repeat center;
            background-size: cover;
        }
        .error_message{
            position: absolute;
            left: 100%;
            font-size: 13px;
            color: #FF6C72;
            bottom: 40px;
            width:210px;
            display: flex;
            align-items: center;
            margin-left: 15px;
            .icon{
                margin-right: 5px;
            }
        }
    }
    .tip_text{
        margin-bottom: 5px;
        font-size: 13px;
        color: rgba(41, 43, 44, 0.70);
        line-height: 22px;
        text-align: left;
        .sub{
            color: #F29F33;
        }
    }   
    .label-file input[type="file"]{
        position: absolute;
        right: 10000px;
        top:0px;
        opacity: 0;
        height:100%;
    }
</style>
