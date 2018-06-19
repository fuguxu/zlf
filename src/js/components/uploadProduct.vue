<template>
    <div class="file-upload-container">
        <div class="label_text" v-if="isEdit">
            <span >上传图片</span>
        </div>
        <div class="file_box" v-if="isEdit">
            <div class="imgs_box">
                <div v-for="(item,index) in fileList" :key="index" class="img_item_wrap">
                    <img class="img_item" :src="item.url" alt="">
                </div>
                <div v-if="loading" class="loading"><i class="el-icon-loading"></i></div>
            </div>
            <div v-if="isEdit" class="file_container">
                <label  :for="id" class="label-file">
                    <form ref="form">
                        <input ref="fileInput" @change="changeFile" :id="id" :multiple="multiple" type="file" />
                    </form>
                </label>
                <div class="local_img">上传电脑本地图片</div>
                <div class="error_message" v-if="tipMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{tipMessage}}</span>
                </div>
            </div>
            <div v-if="isEdit"  class="tip_text">最多上传 <span class="sub">5</span>张，每张图片大小不超过{{limitSize}}M，支持jpg、bmp、png格式</div>
        </div>
        <previewPic v-if="!isEdit" :imgList="data"></previewPic>
    </div>
</template>
<script>
import {customerModule} from '../api/main';
import previewPic from '../main/components/previewPic';
export default {
    props:{
        multiple:{
            type:Boolean,
            default:true
        },
        isEdit:{
            default:true
        },
        saveType:{

        },
        id:{

        },
        data:{

        }      
    },
  data(){
      return {
        fileList:[],
        tipMessage:'',
        limitSize:2,
        loading:false,
        activeItem:{}
      }
  },
  methods:{
      //接受文件函数
      changeFile(ev){
          let postFiles = Array.prototype.slice.call(this.$refs.fileInput.files);
          this.$refs.form.reset();//form表单的置空 兼容ie10 
          if (!this.multiple) {
               postFiles = postFiles.slice(0,1);
          }else{
              postFiles = postFiles.slice(0);
          }
          if(postFiles.length==0){return};
          if(this.valiateType(postFiles)&&this.valiateSize(postFiles)&&this.valiateNumber(postFiles)){
              this.loading=true;
              this.uploadParams(postFiles);
              this.uploadFile(postFiles);
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
        //  if (this.fileList.length > 0) {
            for(var i=1;i<=file.length;i++){
                form.append("file"+i, file[i-1]);// 文件对象
            }
             
            form.append("saveType", this.saveType); // 文件对象
            this.formData=form;
        //  }
       },
       progressFile(){

       },
      uploadFile(postFiles){//调接口函数
        customerModule.mulUploadFile(this.formData).then(res=>{
           if(res.error==0){
               this.loading=false;
               let urlFiles =res.url.map((item,i)=>{
                   return {
                       url:item,
                   }
               })
               this.fileList=[...this.fileList,...urlFiles];
               this.$emit('updatePic',this.fileList,this.id);
           }
        });
      },
      emitHandleRemove(index){//删除
            this.fileList.splice(index,1);
      },
      previewImg(){//预览图片
        //   window.open(this.imgUrl);
      },
      
    }, 
  mounted(){
    if(this.data){
        this.fileList=this.data;
    }
  },
  computed:{
      hasFile(){
          return this.fileList.length!=0;
      },
    //   showFileList(){
    //      return this.fileList.map(v=>{
    //           return {
    //               ...v,
    //               url:window.URL.createObjectURL(v)
    //           }
    //       }) 
    //   }
  },
  watch:{
      data(n,o){
          console.log(n)
      }
  },
  components:{
      previewPic
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
            border:1px solid rgba(237, 237, 237, 1);
            .el-icon-loading{
                font-size:32px;
                color:rgba(153,153,153,1);
            }
        }
        .img_item_wrap{
            font-size: 0px;
            margin-bottom:10px;
            margin-right:13px;
            position: relative;
        }
        .loading{
            margin-bottom:10px;
        }
        .img_item,.loading{
            width:125px;
            height:88px;
            cursor: pointer;
        }
    }
    .big_img_wrap{
        text-align: center;
        font-size: 0px;
        .big_img{
            width:678px;
            height:372px;
            border:2px solid rgba(255, 166, 50, 1);
        }
    }
    .label_text{
        color:rgba(102, 102, 102, 1);
        padding:10px 25px 0 0;
        width:81px;
        box-sizing: border-box;
    }
    .file_container{
        width:128px;
        height: 90px;
        border: 1px solid rgba(237, 237, 237, 1);
        text-align: center;
        background: #fff;
        margin-bottom: 17px;
        position: relative;
        .local_img{
            color:rgba(153,153,153,1);
        }
        .label-file{
            width:40px;
            height:33px;
            // margin-left:43px;
            cursor: pointer;
            display: inline-block;
            position: relative;
            overflow: hidden;
            background: url('../../img/u2653.png') no-repeat center;
            background-size: cover;
            margin:26px 0px 5px 0px;
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
        color: rgba(153,153,153,1);
        line-height: 22px;
        text-align: left;
        .sub{
            color: rgba(255,166,50,1);
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
