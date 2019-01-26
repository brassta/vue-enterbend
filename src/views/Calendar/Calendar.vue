<template>
    <div class="calendar">

    </div>
</template>

<script>
    export default {
        name : "Calendar",
        props: ['events'],
        data() {
            return {
                months: []
            }
        },
        created() {
            let topDate = Number.MIN_SAFE_INTEGER;
            let lastDate = Number.MAX_SAFE_INTEGER;
            for(let date of this.events.events) {
                if(date.start > topDate){
                    topDate = date.start
                }
                if(date.start < lastDate){
                    lastDate = date.start;
                }
            }
            const startYear = new Date(lastDate).getFullYear()
            const endYear = new Date(topDate).getFullYear()
            for(let i = startYear; i <= endYear; i++) {
                for(let j = 0; j < 12; j++) {
                    const date = new Date(startYear + i - startYear, j, 1);
                    const month = {
                        monthName: date.toLocaleDateString('en-us', { month: 'long' }),
                        year: startYear + i - startYear
                    }
                    console.log(month);
                    this.months.push(month);

                }
            }
            console.log(this.months);

        }
    }
</script>

<style scoped>

</style>