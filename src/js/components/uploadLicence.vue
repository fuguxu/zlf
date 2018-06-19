<template>
    <div class="file-upload-container">
        <div v-if="showMore" class="text">上传营业执照</div>
        <div class="file_box">
            <div class="file_container" :class="{hsaFile:hasFile}">
                <label v-if="!hasFile" for="fileId" class="label-file">
                    <form ref="form">
                        <input ref="fileInput" @change="changeFile" id="fileId" :multiple="multiple" type="file" />
                    </form>
                </label>
                <img @click="previewImg"  v-else class="preview" :src="imgUrl" alt="">
                <div class="tip_text">{{tipText}}</div>
                <div @click="emitHandleRemove" class="close_icon" v-if="hasFile">×</div>
                <div class="error_message" v-if="tipMessage">
                    <i class="icon el-icon-remove"></i>
                    <span>{{tipMessage}}</span>
                </div>
            </div>
            <div v-if="showMore">
                <p class="tip">1.营业执照名称与公司名称保持一致</p>
                <p class="tip tip2">2.营业执照需要加盖公司红章</p>
                <p class="tip">3.营业执照要清晰可见</p>
            </div>
            <div>
                <span @click="uploadFile" class="button" :class="{hsaFile:hasFile}">{{!isSubmited?'提交':'提交成功'}}</span>
                <i v-if="loading" class="icon-loading color8 font18 el-icon-loading"></i>
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../api/main';
export default {
    props:{
        multiple:{
            type:Boolean,
            default:false
        },
        showMore:{
            default:true
        },
        saveType:{
            default:'customerLicense'//默认为市场客户的类型
        },
        orderNo:{
            default:''
        }      
    },
  data(){
      return {
        fileList:[],
        tipMessage:'',
        formData:'',
        // imgUrl:'',
        loading:false,
        isSubmited:false
      }
  },
  methods:{
      //接受文件函数
      changeFile(ev){
          let postFiles = Array.prototype.slice.call(this.$refs.fileInput.files);
          this.$refs.form.reset();//form表单的置空 兼容ie10 
          if (!this.multiple) { postFiles = postFiles.slice(0, 1); }
          if(postFiles.length==0){return}
          if(this.valiateType(postFiles[0])&&this.valiateSize(postFiles[0])){
              this.fileList.push(postFiles[0]);
              this.uploadParams(postFiles[0]);
          }
          
      },
      valiateSize(file){
          let size=file.size;
          if(size>5*1024*1024){
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
      //生成上传附件参数的函数
      uploadParams(file){
         let form = new FormData(); // FormData 对象
         if (this.fileList.length > 0) {
            form.append("file", file); // 文件对象
            form.append("saveType", this.saveType); // 保存类型
            if(this.orderNo){
                form.append("orderNo", this.orderNo);//订单号 在租赁服务处有用到
            }
            this.formData=form;
         }
       },
       progressFile(){

       },
      uploadFile(){//调接口函数
        if(!this.hasFile||this.isSubmited) return;
        this.loading=true;
        customerModule.upload(this.formData).then(res=>{
           if(res.error==0){
               this.isSubmited=true;
               this.loading=false;
               if(!this.orderNo){
                   this.$router.push('/submited')
               }else{

               }
           }
        });
      },
      emitHandleRemove(){//删除
            this.fileList=[];
            this.isSubmited=false;
      },
      previewImg(){//预览图片
          window.open(this.imgUrl);
      }
    }, 
  mounted(){
    
  },
  computed:{
      hasFile(){
          return this.fileList.length!=0;
      },
      tipText(){
          return this.fileList.length==0?'选择文件，支持jpg、bmp、png格式，不超过5M':'点击左侧，预览图片'
      },
      imgUrl(){
          return window.URL.createObjectURL(this.fileList[0]);
      }
  }
}
</script>
<style lang="scss" scoped>
    .file-upload-container{
        width:100%;
        display: flex;
        justify-content: center;
    }
    .text{
        font-size: 15px;
        color: rgba(41, 43, 44, 0.90);
        line-height: 55px;
        margin-right:20px;
    }
    .file_container{
        width:396px;
        height: 40px;
        border: 1px dashed rgba(224, 224, 224, 1);
        border-radius: 2px;
        background: #fff;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        margin-bottom: 20px;
        position: relative;
        &.hsaFile{
            // border: 1px solid #cfd0d0;
            // box-shadow: 0 0 5px #d7d7d7;
            .tip_text{
                // color: #868686;
            }
        }
    }
    .tip{
        margin-bottom: 5px;
        font-size: 14px;
        color: #797979;
        line-height: 22px;
        text-align: left;
        &.tip2{
            color: #F29F33;
        }
    }
    .label-file{
        width:16px;
        height:14px;
        cursor: pointer;
        display: inline-block;
        position: relative;
        overflow: hidden;
        background: url('../../img/u1483.png') no-repeat center;
        background-size: cover;
        margin-left:10px;
    }
    .preview{
        width:34px;
        height:34px;
        margin-left:2px;
        cursor: pointer;
    }
    .tip_text{
        margin-left:10px;
        // font-size: 16px;
        color:rgba(153,153,153,1);
        // font-family: 'SimHei';
        flex: 1;
        text-align: left;
    }
    .close_icon{
        // font-family: 'SimHei';
        font-size: 24px;
        color: rgba(153,153,153,1);
        width: 40px;
        height: 100%;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        &:hover{
            // background: rgb(229,229,229);
        }
    }
    .error_message{
        position: absolute;
        left: 100%;
        font-size: 13px;
        color: #FF6C72;
        height:100%;
        width:210px;
        display: flex;
        align-items: center;
        margin-left: 15px;
        .icon{
            margin-right: 5px;
        }
    }
    .button{
        margin-top:50px;
        // display: inline-block;
        // cursor: pointer;
        background: #aeaeae;
        // border-radius: 5px;
        width:100px;
        line-height: 40px;
        font-size: 18px;
        color: rgba(255, 255, 255, 1);
        // text-align: center;
        &.hsaFile{
            background: rgba(255,166,50,1);
            &:hover{
                background: rgba(255,166,50,0.8);
            }
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
