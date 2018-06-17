<template>
    <div v-if="visible" class="dialog">
        <div class="city_container">
            <div class="border"></div>
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
                    <li class="pinyinItem" @click="changePinYin(item,index)" :class="{active:activeItem==index}" v-for="(item,index) in cityData" :key="index">{{item.name}}</li>
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
    .city_container{
        width:800px;
        background: #fff;
        position: absolute;
        left: 50%;
        margin-left:-400px;
        top:100px;
        box-sizing: border-box;
        .border{
            border-bottom: 4px solid #ff9829;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        .head,.choiceCity{
            border-bottom: 1px solid #dddbd7;
            padding-left:20px;
            color: #292B2C;
            font-size:14px;
        }
        .head{
            line-height: 40px;
            .sub{
                font-size: 12px;
            }
            .close{
                margin-right: 10px;
                float: right;
                font-family: 'SimSun';
                font-size: 22px;
                cursor: pointer;
                color: rgba(107, 107, 107, 0.6);
            }
        }
        .choiceCity{
            line-height: 44px;
            .cityName{
                display: inline-block;
                line-height: 26px;
                background: #f9a533;
                font-family: 'SimHei';
                font-size: 15px;
                color: #ffffff;
                margin-left: 15px;
                padding:0 5px;
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
                padding-bottom: 54px;
                background: #e7e6e3;
                box-sizing: border-box;
                .pinyinItem{
                    line-height: 35px;
                    padding-left:20px;
                    font-size: 13px;
                    color: rgba(41, 43, 44, 0.8);
                    cursor: pointer;
                    &.active{
                        color: rgb(249, 165, 51);
                        background: #fff;
                        border-left:2px solid #ff9829;
                    }
                }
            }
            .cityNameBox{
                flex: 1;
                padding-left:60px;
                padding-top:15px;
                .name{
                     font-family: 'SimHei';
                     cursor: pointer;
                    font-size: 15px;
                    color: rgba(41, 43, 44, 0.8);
                    display: inline-block;
                    min-width: 103px;
                    line-height: 36px;
                    &.longClass{
                        min-width: 206px;
                    }
                    &:hover{
                        color: rgb(249, 165, 51);
                    }
                }
            }
        }
        .footer{
            height:56px;
            background: #f7f7f6;
            font-size:14px;
            display: flex;
            justify-content: center;
            align-items: center;
            .button{
                line-height: 26px;
                width:60px;
                // text-align: center;
                // cursor: pointer;
                &.sure{
                   color: rgba(255, 255, 255, 0.90);
                   background: #feb152;
                   &:hover{
                     background:#ff9f29;
                   }
                }
                &.cancel{
                    background: #fff;
                    color: rgba(174, 174, 174, 0.90);
                    border: 1px solid rgba(228, 226, 223, 1);
                    margin-left:50px;
                    &:hover{
                        background:rgba(228, 226, 223, 1);
                    }
                }
            }
        }
    }
</style>
