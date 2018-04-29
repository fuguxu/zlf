<template>
    <div class="app-footer">
        <div class="foot-container">
           <div class="icon_box">
               <img src="../../../img/u178.png" alt="">
           </div>
           <div class="link_box">
               <div class="links">
                   <div class="links_left">
                       <ul>
                           <li class="title">租赁服务咨询热线</li>
                           <li style="font-size:14px;line-height:30px;margin-top:6px;margin-bottom:10px;" class="item">440-880-4604</li>
                           <li class="item">专业租赁咨询</li>
                           <li class="item">成熟解决方案</li>
                           <li class="item">全方位产品解读</li>
                           <li class="item">成功客户案例分享</li>
                       </ul>
                   </div>
                   <div class="link_right">
                       <ul class="link_right_ul">
                           <li class="title"><a href="">商业合作</a></li>
                           <li class="item"><a href="">供应链进驻</a></li>
                           <li class="item"><a href="">媒体合作</a></li>
                       </ul>
                       <ul class="link_right_ul">
                           <li class="title"><a href="">服务支持</a></li>
                           <li class="item"><a href="">支付把控</a></li>
                           <li class="item"><a href="">运输安装</a></li>
                           <li class="item"><a href="">售后服务</a></li>
                       </ul>
                       <ul class="link_right_ul">
                           <li class="title"><a href="">帮助中心</a></li>
                           <li class="item"><a href="">常见问题</a></li>
                           <li class="item"><a href="">联系我们</a></li>
                           <li class="item"><a href="">建议&反馈</a></li>
                       </ul>
                       <ul class="link_right_ul">
                           <li class="title"><a href="">关于租立方</a></li>
                           <li class="item"><a href="">品牌精神</a></li>
                           <li class="item"><a href="">团队荣耀</a></li>
                           <li class="item"><a href="">联系地址</a></li>
                           <li class="join_item">
                               <a class="item" href="">加入我们</a>
                               <a class="join_us">我们正在招聘!</a>
                            </li>
                       </ul>
                   </div>
               </div>
               <div class="copy_right">
                   <span class="item">Copyright © 2015~2017 租立方｜粤ICP备15052623号-1</span>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            footHide: true,
            
        }
    },
    computed:{
       
    },
    methods: {
        
    },
    created () {
       
    }
}
</script>
<style lang="scss" scoped>
    .app-footer{
        width:100%;
        height:252px;
        background-color: rgba(55, 61, 65, 1);
    }
    .foot-container{
        width:1200px;
        height:100%;
        margin:0 auto;
        padding-top: 25px;
        padding-left: 50px;
        padding-bottom: 15px;
        box-sizing: border-box;
        display: flex;
        .icon_box{
            width:95px;
            img{
                width:64px;
                height:64px;
            }
        }
        .link_box{
            flex: 1;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            color: rgba(255, 255, 255, 0.65);
            .links{
                flex: 1;
                display: flex;
                .title,.title a{
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.9);
                }
                .links_left{
                    width: 210px;
                    box-sizing: border-box;
                    border-right:1px solid rgba(255,255,255,0.2);
                    margin-bottom: 20px;
                }
                .link_right{
                    flex: 1;
                    display: flex;
                    .title{
                        padding-bottom: 10px;
                       a{cursor: text};
                    }
                    .link_right_ul{
                        margin-left:129px;
                        &:first-child{
                            margin-left:95px;
                        }
                    }
                    .join_us{
                        background-color: rgb(0, 198, 194);
                        border-radius: 4px;
                        padding: 0 5px;
                        &:hover{
                            color:rgba(255,255,255,0.88);
                        }
                    }
                }
                .item{
                    line-height: 20px;
                    margin-bottom: 6px;
                    &:hover{
                        color: rgba(255, 255, 255, 0.88);
                    }
                }
            }
            .copy_right{
                .item:hover{
                    color: rgba(255, 255, 255, 0.88);
                }
            }
        }
    }
</style>
