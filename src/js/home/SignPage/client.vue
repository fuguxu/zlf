<template>
    <div>
        <components role="client" @updateStep="updateStep" :is="step" stepComponent="contactInfo"></components>
    </div>
</template>
<script>
import company from './components/company';
import signForm from './components/signForm';
import contactInfo from './components/contactInfo';
import startUse from './components/startUse';
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
            }else if(step=='contactInfo'){
                this.step=contactInfo;
            }
        }
    },
    mounted(){
        if(this.$route.query.cp=='startUse'){
            this.step=startUse;
        }else{
            this.step=company;
        }
        
    },
    components:{
        company,
        signForm,
        contactInfo,
        startUse
    }
}
</script>

