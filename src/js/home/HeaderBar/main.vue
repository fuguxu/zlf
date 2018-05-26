<template>
    <div class="header_bar" :class="{home:$route.path=='/home',scroll:scrollTop>=5}">
       <div class="header_container">
           <div class="logo_container">
               <img src="../../../img/logo.png" alt="">
           </div>
           <div class="router_container">
               <router-link v-for="(item,index) in menus" :key="index" :class="{hoverClass:item.hoverClass}" 
               :to="{path:item.path}">
                   <span>{{item.name}}</span>
                   <span v-if="item.showChildren" class="icon el-icon-caret-bottom"></span>
                   <div v-if="item.showChildren" class="drop_menus" :class="{'drop_menu_out':item.dropMenu}">
                       <ul class="drop_li" :class="{scroll:scrollTop<=5&&$route.path=='/home'}">
                            <router-link tag="li"  v-if="!it.hide" v-for="(it,i) in (item.children||item.dropMenu)" :key="i" :to="{path:it.path}">
                                {{it.name}}
                            </router-link>
                        </ul>
                   </div>
                   <div class="bar"></div>
                </router-link>    
           </div>
           <div class="login_sign">
               <img class="login_icon" src="../../../img/menu_herad_icon.png" alt="">
               <a class="login" href="">登陆</a>
               <div class="line"></div>
               <a class="sign" href="#/sign">注册</a>
           </div>
       </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                menus:[],
                scrollTop:0
            }
        },
        methods:{
            scroll(event){
                this.scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
            }
        },
        mounted(){
            this.menus=this.$router.options.routes[0].children.filter((item)=>{
                return !item.hidden
            })
            AppUtil.addEventListener(window,'scroll',this.scroll);
        }
    }
</script>
<style lang="scss" scoped>
    .header_bar{
        height: 53px;
        width:100%;
        background-color: rgba(41,43,44, 1);
        position: fixed;
        top:0;
        left:0;
        z-index:10000;
        &.home{
            background:transparent;
            transition: all 1s;
            &.scroll{
                background-color: rgba(41,43,44, 1);
            }
        }
    }
    .header_container{
        width:1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    .logo_container{
        // margin-left:67.5px;
        display: flex;
        align-items: center;
    }
    .login_sign{
        line-height: 53px;
        color:#fff;
        flex:1;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        .line{
            width:1px;
            height: 12px;background: #fff;
            margin:0 14px;
        }
        .login_icon{
            width:20px;
            height:20px;
            margin-right: 17px;
        }
        .sign{
            // margin-left:70px;
            // margin-right:95px;
        }
        a{
            font-size: 14px;
            &:hover{
                color: rgba(255, 255, 255, 0.75);
            }
        }
    }
    .router_container{
        color:#fff;
        font-weight: 400;
        line-height: 53px;
        font-size:14px;
        a{
            margin-left:70px;
            &:first-child{
                margin-left:220px;
            }
            font-size:14px;
            display: inline-block;
            height:52px;
            box-sizing: border-box;
            position: relative;
            .bar{
                width:100%;
                height: 5px;
                background: #fff;
                border-radius:4px;
                display: none;
                position: absolute;
                bottom: 1px;
                left:0px;
            }
            .icon{
                font-size:12px;
            }
            &.router-link-active{
                // border-bottom: 2px solid #fff;
                color: rgba(255, 255, 255, 0.75);
                .bar{
                    display: block;
                }
            }
            &:hover{
                // border-bottom: 2px solid #fff;
                .bar{
                    display: block;
                }
            }
            &:hover{
                 .drop_menus{
                    box-shadow: 0px 0px 15px #333;
                    transition-delay:0.4s;
                }
                .icon{
                    transform: rotate(180deg);
                    transition: all 0.4s;
                }
               .drop_menus {
                   height:93px;
                   &.drop_menu_out{
                       height:62px;
                   }
                   .drop_li{ 
                        top:0px;
                        transition:all 0.4s;
                    }
                }
            }
            .drop_menus{
                position: absolute;
                left: 50%;
                margin-left:-38px;
                width:76px;
                background:transparent;
                text-align: center;
                overflow: hidden;
                font-size:12px;
                .drop_li{
                    position: absolute;
                    width:100%;
                    // padding:10px 0;
                    background:rgba(41,43,44,1);
                    top:-92px;
                    &.scroll{
                        background:rgba(41,43,44,0.5);
                    }
                    li{
                        line-height: 31px;
                        color:#fff;
                        &:hover{
                            color: rgba(255, 255, 255, 0.75);
                        }
                    }
                }
            }
            .drop_menu_out .drop_li{
                top:-62px;
            }
        }
    }
</style>