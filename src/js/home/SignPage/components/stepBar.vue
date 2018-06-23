<template>
    <div class="step_bar">
        <div class="step" :class="{currentStep:step>=item.step}" v-for="(item,index) in stepData" :key="index">
            <div class="circle">{{item.step}}</div>
            <div class="text">{{item.text}}</div>
            <div class="line" v-if="index!=stepData.length-1"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        step:{
            default:1
        },
        role:{

        }
    },
    data(){
        return {
            stepData:[
                {
                    step:1,
                    text:'注册'
                },
                {
                    step:2,
                    text:'完善联系人信息'
                },
                {
                    step:3,
                    text:this.role=='client'?'开始使用':'上传营业执照'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .step_bar{
        display: flex;
        justify-content: center;
        padding-top: 60px;
        .step{
            position: relative;
            text-align: center;
            display: flex;
            align-items: center;
            flex-flow: column;
            margin-right: 250px;
            width:40px;
            &:last-child{
                margin-right: 0px;
            }
            &.currentStep{
                .circle,.line{
                    background: rgba(255,166,50,1);
                    color: #FFFFFF;
                }
                .text{
                    color: rgba(255,166,50,1);
                }
            }
            .circle{
                width:40px;
                height: 40px;
                line-height: 40px;
                border-radius: 50%;
                background: rgba(240,240,240,1);
                font-size: 16px;
                color:rgba(153,153,153,1);
            }
            .text{
                word-break: keep-all;
                color:rgba(153,153,153,1);
                padding-top: 10px;
            }
            .line{
                position: absolute;
                width:250px;
                height: 8px;
                background:rgba(240,240,240,1);
                top: 17px;
                left: calc(50% + 20px);
            }
        }
    }
</style>
