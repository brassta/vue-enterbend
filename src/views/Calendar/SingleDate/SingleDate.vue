<template>
    <div v-if="hasProps" :class="`single-date ${date.eventObject.confirmed?'confirmed':''}`">
        <h4>{{date.eventObject.title}}</h4>
        <div class="date from">{{formatDate(date.eventObject.start)}}</div>
        <div class="date from">{{formatDate(date.eventObject.end)}}</div>
        <Explanation v-if="date.eventObject.explanation" :explanation="{date}"/>
        <font-awesome-icon v-if="isPublicEvent" icon="user"/>
    </div>
    <div v-else class="single-date">
        <div class="free-to-call">Orkestar je slobodan <a href="javascript:void(0)">Rezervisi</a></div>
    </div>
</template>

<script>
    import Explanation from "../Explanation/Explanation";

    export default {
        name      : "SingleDate",
        components: { Explanation },
        props     : ['date'],
        methods   : {
            formatDate: function(plainDate) {
                const currentDate = new Date(plainDate);
                return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
            }
        },
        computed  : {
            hasProps      : function() {
                if(this.date){
                    return true;
                }
                return false;
            },
            isPublicEvent: function() {
                if(this.date.eventObject.frontpage){
                    return true
                }
                return false
            }
        }

    }
</script>

<style scoped lang="less">

</style>