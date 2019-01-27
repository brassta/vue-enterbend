<template>
    <div class="month-inner" v-if="shownMonth" v-bind:data-index="index.index">
        <h3>{{month.monthObject.monthName}}::{{month.monthObject.year}}</h3>
        <div class="month-data"></div>
    </div>
</template>

<script>
    export default {
        name : "Month",
        props: ['month','index'],
        data(){
            return{

            }
        },
        computed:{
            shownMonth:function(){
               return true;
            }
        },
        created(){
            // console.log('check this',this.month.monthObject.monthName);
        }
    }
</script>

<style scoped>

</style>