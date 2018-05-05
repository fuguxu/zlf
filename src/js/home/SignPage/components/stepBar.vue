<template>
    <div class="step_bar">
        <div class="step" :class="{currentStep:step==item.step}" v-for="(item,index) in stepData" :key="index">
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
                    text:'完善联系信息'
                },
                {
                    step:3,
                    text:'开始使用'
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
        padding-top: 40px;
        .step{
            position: relative;
            text-align: center;
            display: flex;
            align-items: center;
            flex-flow: column;
            margin-right: 250px;
            width:34px;
            &:last-child{
                margin-right: 0px;
            }
            &.currentStep{
                .circle,.line{
                    background: #ff9829;
                }
                .text{
                    color: rgb(242, 159, 51);
                }
            }
            .circle{
                width:34px;
                height: 34px;
                line-height: 34px;
                border-radius: 50%;
                background: #b1ada7;
                font-size: 20px;
                color: #FFFFFF;
            }
            .text{
                font-size: 15px;
                color: rgba(0, 0, 0, 0.9);
                word-break: keep-all;
                padding-top: 10px;
            }
            .line{
                position: absolute;
                width:250px;
                height: 3px;
                background: #b1ada7;
                top:15.5px;
                left:calc(50% + 17px)
            }
        }
    }
</style>
