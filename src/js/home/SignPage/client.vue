<template>
    <div>
        <components @updateStep="updateStep" :is="step"></components>
    </div>
</template>
<script>
import company from './components/company';
import signForm from './components/signForm';
export default {
    data(){
        return {
            step:''
        }
    },
    methods:{
        updateStep(step){
            if(step=='signForm'){
                this.step=signForm;
            }
        }
    },
    mounted(){
        this.step=company;
    },
    components:{
        company,
        signForm
    }
}
</script>

