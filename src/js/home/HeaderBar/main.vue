<template>
    <div class="header_bar">
       <div class="header_container">
           <div class="logo_container">
               <img src="../../../img/logo.png" alt="">
           </div>
           <div class="router_container">
               <router-link v-for="(item,index) in menus" :key="index" :to="{path:item.path}">
                   <span>{{item.name}}</span>
                   <div v-if="item.showChildren" class="drop_menus">
                       <div class="drop_li">
                            <router-link tag="li" v-for="(it,i) in item.children" :key="i" :to="{path:it.path}">
                                {{it.name}}
                            </router-link>
                        </div>
                   </div>
                </router-link>    
           </div>
       </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                menus:this.$router.options.routes[0].children,
            }
        },
        mounted(){
        }
    }
</script>
<style lang="scss" scoped>
    .header_bar{
        height: 51px;
        width:100%;
        background-color: rgba(13, 13, 13, 0.8);
        position: fixed;
        top:0;
        left:0;
    }
    .header_container{
        width:1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    .logo_container{
        margin-left:40px;
        img{
            width:57px;
            height:51px;
        }
    }
    .router_container{
        color:#fff;
        font-weight: 400;
        line-height: 50px;
        font-size:14px;
        a{
            margin-left:75px;
            font-size:14px;
            display: inline-block;
            height:50px;
            box-sizing: border-box;
            position: relative;
            &.router-link-active{
                border-bottom: 2px solid #fff;
                color: rgba(255, 255, 255, 0.75);
            }
            &:hover{
                border-bottom: 2px solid #fff;
                .drop_menus{
                    box-shadow: 0px 0px 15px #333;
                    transition-delay:0.4s;
                }
               .drop_menus {
                   height:140px;
                   .drop_li{ top:0px;
                        box-shadow: 0px 0px 10px #333;
                        transition:all 0.4s;
                    }
                }
            }
            .drop_menus{
                position: absolute;
                left: 50%;
                margin-left:-46px;
                width:92px;
                background:transparent;
                text-align: center;
                overflow: hidden;
                .drop_li{
                    position: absolute;
                    width:100%;
                    padding:10px 0;
                    background: #222;
                    top:-140px;
                    li{
                        line-height: 30px;
                        color:#fff;
                        &:hover{
                            color: rgba(255, 255, 255, 0.75);
                        }
                    }
                }
            }
        }
    }
</style>