<template>
    <div class="app-footer">
        <div class="foot-container">
           <!-- <div class="icon_box">
               <img src="../../../img/u178.png" alt="">
           </div> -->
           <div class="link_box">
               <div class="links">
                   <div class="links_left">
                       <ul>
                           <li class="title">租赁服务咨询热线</li>
                           <li style="font-size:20px;line-height:30px;margin-top:10px;margin-bottom:25px;" class="item">400-880-4604</li>
                           <li class="item">专业租赁咨询</li>
                           <li class="item">成熟解决方案</li>
                           <li class="item">全方位产品解读</li>
                           <li class="item">成功客户案例分享</li>
                       </ul>
                   </div>
                   <div class="link_right">
                       <ul class="link_right_ul">
                           <li class="title"><a href="javascript:;">商业合作</a></li>
                           <li class="item"><a href="#/business">供应商进驻</a></li>
                           <li class="item"><a href="#/business">媒体合作</a></li>
                       </ul>
                       <ul class="link_right_ul">
                           <li class="title"><a href="javascript:;" >产品&案例</a></li>
                           <li class="item"><a href="#/service">租赁产品</a></li>
                           <li class="item"><a href="#/coorperation">客户案例</a></li>
                           <!-- <li class="item"><a href="">售后服务</a></li> -->
                       </ul>
                       <ul class="link_right_ul">
                           <li class="title"><a href="javascript:;">帮助中心</a></li>
                           <li class="item"><a href="#/about/qs">常见问题</a></li>
                           <!-- <li class="item"><a href="#/about/contact">联系我们</a></li> -->
                           <li class="item"><a href="https://www.baidu.com" target="_blank">建议&反馈</a></li>
                       </ul>
                       <ul class="link_right_ul">
                           <li class="title"><a href="javascript:;">关于租立方</a></li>
                           <li class="item"><a href="#/about/us">品牌精神</a></li>
                           <li class="item"><a href="#/about/team">团队荣誉</a></li>
                           <!-- <li class="item"><a href="#/about/contact">联系地址</a></li> -->
                           <li class="join_item">
                               <a class="item" href="#/about/join">加入我们</a>
                               <a class="join_us">
                                   <span class="text_join">我们正在招聘!</span>
                                   <span class="jangle"></span>
                                </a>
                            </li>
                       </ul>
                   </div>
               </div>
               <div class="copy_right">
                   <span class="item">Copyright © 2015~2020 租立方｜粤ICP备18037223号-1</span>
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
    mounted () {
       
    }
}
</script>
<style lang="scss" scoped>
    .app-footer{
        min-width:100%;
        height:350px;
        background-color: rgba(41, 43, 44, 1);
    }
    .foot-container{
        width:1200px;
        height:100%;
        margin:0 auto;
        padding-top: 72px;
        padding-left: 20px;
        padding-bottom: 30px;
        box-sizing: border-box;
        display: flex;
        // .icon_box{
        //     width:95px;
        //     img{
        //         width:64px;
        //         height:64px;
        //     }
        // }
        .link_box{
            flex: 1;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            color: rgba(255, 255, 255, 1);
            .links{
                flex: 1;
                display: flex;
                .title,.title a{
                    font-size: 20px;
                    color: rgba(255, 255, 255, 1);
                }
                .title{
                    margin-top:-5px;
                }
                .links_left{
                    width: 293px;
                    box-sizing: border-box;
                    border-right:1px solid rgba(255,255,255,1);
                    margin-bottom: 35px;
                }
                .link_right{
                    flex: 1;
                    display: flex;
                    .title{
                        padding-bottom: 30px;
                       a{cursor: text};
                    }
                    .link_right_ul{
                        margin-left:129px;
                        &:first-child{
                            margin-left:95px;
                        }
                    }
                    .join_us{
                        background-color: rgba(255, 161, 45, 1);
                        padding: 2px 0px 2px 0px;
                        position: relative;
                        left:18px;
                        .text_join{
                            padding-right: 5px;
                        }
                        .jangle{
                            position: absolute;
                            display: inline-block;
                            border-width: 10px 10px 10px 0;
                            border-style: solid;
                            border-color: transparent rgba(255, 161, 45, 1) transparent transparent;
                            top: 0px;
                            left: -10px;
                        }
                        &:hover{
                            color:rgba(255,255,255,0.6);
                        }
                    }
                }
                .item{
                    // line-height: 20px;
                    margin-bottom: 16px;
                    &:hover{
                        color: rgba(255, 255, 255, 0.6);
                    }
                }
            }
            .copy_right{
                .item:hover{
                    color: rgba(255, 255, 255, 0.6);
                }
            }
        }
    }
</style>
