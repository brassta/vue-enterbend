<template>
    <div class="calendar">
        <div class="months-nav">
            <div class="months-toolbar">
                <button class="prevMonth" v-on:click="prevMonth">Prev</button>
                <div class="current">{{months[activeIndex].monthName}} : {{months[activeIndex].year}}</div>
                <button class="nextMonth" v-on:click="nextMonth">Next</button>
            </div>
        </div>
        <div class="months-container" v-for="(monthObject,index) of months">

            <Month v-show="index === activeIndex" :month="{monthObject}" :index="{index}"/>
        </div>
    </div>
</template>

<script>
    import Month from "./Month/Month";

    export default {
        name      : "Calendar",
        components: { Month },
        props     : ['eventsData'],
        data() {
            return {
                months     : [],
                activeIndex: Number.MIN_SAFE_INTEGER
            }
        },
        methods   : {
            nextMonth: function(event) {
                if(this.activeIndex !== this.months.length-2){
                    this.activeIndex++
                }
            },
            prevMonth: function(event) {
                if(this.activeIndex!==0){
                    this.activeIndex--;
                }

            },
            getMonthEvents(firstDayOfMonth){
                const firstDayOfMonthTime = new Date(firstDayOfMonth.getTime());
                const lastDayOfMonthTime = new Date(firstDayOfMonthTime.getFullYear(), firstDayOfMonthTime.getMonth()+1,0);
                // console.log(firstDayOfMonthTime.getTime(), lastDayOfMonthTime.getTime());
                // console.log(this.eventsData.events);
                const monthlyEvents = [];
                for (event of this.eventsData.events){
                    if(event.start>firstDayOfMonthTime.getTime() && event.start<lastDayOfMonthTime.getTime()){
                        monthlyEvents.push(event);
                    }
                }
                return monthlyEvents;
            }
        },
        created() {
            let topDate = Number.MIN_SAFE_INTEGER;
            let lastDate = Number.MAX_SAFE_INTEGER;
            let monthCounter = 0;
            for(let date of this.eventsData.events) {
                if(date.start > topDate){
                    topDate = date.start
                }
                if(date.end < lastDate){
                    lastDate = date.end;
                }
            }
            const startYear = new Date(lastDate).getFullYear();
            const endYear = new Date(topDate).getFullYear();
            for(let i = startYear; i <= endYear; i++) {
                for(let j = 0; j < 12; j++) {
                    const date = new Date(startYear + i - startYear, j, 1);
                    const month = {
                        monthName : date.toLocaleDateString('en-us', { month: 'long' }),
                        monthIndex: date.getMonth(),
                        year      : startYear + i - startYear,
                        monthEvents:this.getMonthEvents(date)
                    }
                    this.months.push(month);
                    //## is currentMonth and set currentMonth index
                    const now = new Date().getTime();
                    const monthBeginAt = new Date(date.getFullYear(), j, 1).getTime();
                    const monthEndsAt = new Date(date.getFullYear(), j + 1, 0).getTime();
                    if(now > monthBeginAt && now < monthEndsAt){
                        this.activeIndex = monthCounter;
                    }
                    monthCounter++;
                }
            }
        },
        computed  : {
            isActiveMonth() {
                return true;
            }
        }

    }
</script>

