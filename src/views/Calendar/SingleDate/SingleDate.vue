<template>
    <div v-if="hasProps" :class="`single-date ${event.confirmed?'confirmed':''}`">
        <h4>{{event.title}}</h4>
        <div class="date from">{{formatDate(event.start)}}</div>
        <div class="date from">{{formatDate(event.end)}}</div>
        <Explanation v-if="event.explanation" :explanation="{event}"/>
        <font-awesome-icon v-if="isPublicEvent" icon="user"/>
    </div>
    <div v-else-if="isBlankDay" class="single-date blank"></div>
    <div v-else class="single-date">
        <div class="free-to-call">Orkestar je slobodan <a href="javascript:void(0)">Rezervisi</a></div>
    </div>
    
</template>

<script>
    import Explanation from "../Explanation/Explanation";

    export default {
        name      : "SingleDate",
        components: { Explanation },
        props     : ['date','blankDay','event'],
        methods   : {
            formatDate: function(plainDate) {
                const currentDate = new Date(plainDate);
                return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
            }
        },
        computed  : {
            hasProps() {
                if(this.event.start){
                    return true;
                }
                return false;
            },
            isPublicEvent() {
                if(this.event.frontpage){
                    return true
                }
                return false
            },
            isBlankDay(){
                if(this.blankDay){
                    return true;
                }
                return false;
            }
        },
        created:function(){
            console.log('vidimo li se', this.event);
        }

    }
</script>

<style scoped lang="less">

</style>