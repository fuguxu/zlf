<template>
    <div class="management">
        <ul>
            <li v-for="(item,index) in data" :key="index" class="item">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:[
                {
                    name:'企业营业执照'
                },
                {
                    name:'平台入驻协议'
                },
                {
                    name:'一般纳税人认定通知书'
                },
                {
                    name:'售后回购协议'
                },
                {
                    name:'企业股东架构'
                },
                {
                    name:'企业财报'
                },
                {
                    name:'企业不良信用记录'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .management{
        padding-left: 60px;
        padding-top: 50px;
        .item{
            color: #292B2C;
            font-size:14px;
            margin-bottom: 20px;
        }
    }
</style>
