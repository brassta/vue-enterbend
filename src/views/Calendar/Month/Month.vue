<template>
    <div class="month-inner" v-bind:data-index="index.index">
        <h3>{{month.monthObject.monthName}}::{{month.monthObject.year}}</h3>
        <div class="month-data">
            <SingleDate v-for="index in 35" :key="index" :event="eventDays[index]"/>
        </div>
    </div>
</template>

<script>
    import SingleDate from "../SingleDate/SingleDate";

    export default {
        name      : "Month",
        components: { SingleDate },
        props     : ['month', 'index', 'blankDay'],
        data() {
            return {
                blankDays: [],
                eventDays: [],
            }
        },
        computed  : {},
        created() {
            const firstDay = new Date(this.month.monthObject.year, this.month.monthObject.monthIndex, 1).getDay();
            const lastDate = new Date(this.month.monthObject.year, this.month.monthObject.monthIndex + 1, 0).getDate();
            let initialBlankDays = 0;
            let initialRealDateDays = 0;
            for(let i = 0; i <= 34; i++) {
                if(i + 1 < firstDay){
                    this.blankDays.push(i);
                    this.eventDays.push({});
                    initialBlankDays++;
                }
                else if(i > initialBlankDays + lastDate){
                    this.blankDays.push(i)
                    this.eventDays.push({});
                }
                else {
                    const currentDay = new Date(this.month.monthObject.year, this.month.monthObject.monthIndex, initialRealDateDays + 1);
                    const currentDayTimestamp = currentDay.getTime();
                    const eventForThisDay = this.month.monthObject.monthEvents.find((event) =>
                        new Date(event.start).toDateString() === new Date(currentDayTimestamp).toDateString()
                    );
                    if(eventForThisDay){
                        this.eventDays.push(eventForThisDay)
                    }
                    else{
                        this.eventDays.push({});
                    }
                    initialRealDateDays++;
                }

            }
        }
    }
</script>

<style scoped>

</style>