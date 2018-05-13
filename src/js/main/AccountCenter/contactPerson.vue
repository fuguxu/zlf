<template>
    <div class="contact_container">
        <contactInfo></contactInfo>
    </div>
</template>
<script>
import contactInfo from './components/contactInfo';
export default {
    data(){
        return {
            
        }
    },
    components:{
        contactInfo
    }
}
</script>
<style lang="scss" scoped>
    .contact_container{
        padding-left:60px;
    }
</style>

