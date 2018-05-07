<template>
    <div class="kind_supplier">
        <stepBar :step="2" :role="role"></stepBar>
        <div class="kind_content">
            <div class="footer">
                <span class="button" @click="nextStep">下一步</span>
            </div>
        </div>
    </div>
</template>
<script>
import stepBar from './stepBar';
export default {
    props:{
        stepComponent:{

        },
        role:{

        }
    },
    data(){
        return {

        }
    },
    methods:{
        nextStep(){
            this.$emit('updateStep',this.stepComponent);
        }
    },
    components:{
        stepBar
    }
    
}
</script>
<style lang="scss" scoped>
    .button{
        cursor: pointer;
        display: inline-block;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.9);
        width:110px;
        line-height: 36px;
        background: #ff9829;
        border-radius: 5px;
        &:hover{
            background:  #ffa64c;
        }
    }
</style>
