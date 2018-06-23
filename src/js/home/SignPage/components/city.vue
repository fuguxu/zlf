<template>
    <div v-if="visible" class="dialog city_dialog">
        <div class="city_container">
            <div class="head">
                选择城市<span class="sub">（最多只能选1项）</span>
                <span @click="close" class="close">×</span>
            </div>
            <div class="choiceCity">
                已选城市
                <span v-if="cityName" class="cityName">{{cityName}}<span @click="clearCity" class="close">×</span></span>
            </div>
            <div class="citylistContainer">
                <ul class="pinyin">
                    <li class="pinyinItem" @click="changePinYin(item,index)" :class="{active:activeItem==index}" v-for="(item,index) in cityData" :key="index">
                        <span class="line"></span>
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <div class="cityNameBox">
                    <span class="name" @click="choiceCity(item)" :class="{longClass:item.longClass}" v-for="(item,index) in itemCity" :key="index">{{item.name}}</span>
                </div>
            </div>
            <div class="footer">
                <div class="button sure" @click="sure">确定</div>
                <div class="button cancel" @click="close">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
import {city} from '../../../../../static/city';
export default {
    props:{
        visible:{
            default:false,
        }
    },
    data(){
        return {
            cityData:[],
            activeItem:0,
            itemCity:[],
            cityName:''
        }
    },
    methods:{
        changePinYin(item,index){
            this.activeItem=index;
            this.itemCity=item.city;
        },
        choiceCity(item){
            this.cityName=item.name;
        },
        clearCity(){
            this.cityName='';
        },
        close(){
            this.$emit('update:visible',false);
        },
        sure(){
            this.$emit('updateCity',this.cityName);
            this.close();
        }
    },
    mounted(){
        this.cityData=city;
        this.itemCity=this.cityData[0].city;
    }
}
</script>
<style lang="scss" scoped>
    .city_dialog{
        z-index: 10000;
        min-height: 100%;
    }
    .city_container{
        width:800px;
        background: #fff;
        border-radius:4px;
        position: absolute;
        left: 50%;
        margin-left:-400px;
        top:50px;
        box-sizing: border-box;
        .head,.choiceCity{
            border-bottom: 1px solid rgba(238,238,238,1);
        }
        .head{
            line-height: 60px;
            text-align: center;
            font-size:16px;
            .close{
                margin-right: 16px;
                float: right;
                font-size: 12px;
                cursor: pointer;
                color: rgba(102,102,102,1);
            }
        }
        .choiceCity{
            line-height: 44px;
            padding-left:15px;
            .cityName{
                display: inline-block;
                line-height: 38px;
                background:rgba(255,166,50,1);
                font-size: 16px;
                color: #ffffff;
                margin-left: 15px;
                border-radius:2px;
                padding:0 10px;
                .close{
                    font-size: 12px;
                    margin-left:5px;
                    cursor: pointer;
                }
            }
        }
        .citylistContainer{
            display: flex;
            .pinyin{
                width:120px;
                // padding-bottom: 54px;
                background: rgba(240,240,240,1);
                box-sizing: border-box;
                .pinyinItem{
                    line-height: 44px;
                    // padding-left:20px;
                    text-indent: 15px;
                    display: flex;
                    cursor: pointer;
                    .line{
                        background:transparent;
                        border-radius:0px 2px 2px 0px;
                        width:4px;
                    }
                    &.active{
                        color: rgba(255,166,50,1);
                        background: #fff;
                        .line{
                            background:rgba(255,166,50,1);
                        }
                    }
                }
            }
            .cityNameBox{
                flex: 1;
                padding-left:60px;
                padding-top:15px;
                .name{
                     cursor: pointer;
                    display: inline-block;
                    min-width: 103px;
                    line-height: 36px;
                    &.longClass{
                        min-width: 206px;
                    }
                    &:hover{
                        color: rgba(255, 166, 50, 1);
                    }
                }
            }
        }
        .footer{
            height:56px;
            // background: #f7f7f6;
            font-size:16px;
            display: flex;
            justify-content: center;
            align-items: center;
            .button{
                line-height: 40px;
                width:140px;

                &.sure{

                   &:hover{
 
                   }
                }
                &.cancel{
                    margin-left:50px;
                    &:hover{

                    }
                }
            }
        }
    }
</style>
