<template>
    <div>
        <components :companyInfo="companyInfo" role="client" @updateStep="updateStep" :is="step" stepComponent="contactInfo"></components>
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
            step:'',
            companyInfo:''
        }
    },
    methods:{
        updateStep(step,companyInfo){
            if(step=='signForm'){
                this.step=signForm;
            }else if(step=='contactInfo'){
                this.step=contactInfo;
            }
            if(companyInfo){
                this.companyInfo=companyInfo;
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

