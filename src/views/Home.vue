<template>
    <div class="home">
        <Calendar v-if="isEventsLoaded" :events="{events}"/>
        <SingleDate></SingleDate>
        <ul v-if="isEventsLoaded">
            <li v-for="eventObject in events" v-show="events!==null"><SingleDate :date="{eventObject}"/></li>
        </ul>

    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import SingleDate from "./Calendar/SingleDate/SingleDate";
    import Calendar from "./Calendar/Calendar";

    export default {
        name      : 'home',
        data() {
            return {
                events: null
            }
        },
        components: { Calendar, SingleDate },
        mounted() {
            axios.get('static/data/events.json').then((response) => {
                // console.log(response);
                let result  = response.data.sort((a,b)=>{
                       return b.start-a.start
                });
                this.events = (result);
            })
        },
        computed:{
            isEventsLoaded:function(){
                if(this.hasOwnProperty('events') && this.events!==null){
                    return true;
                }
                return false;
            }
        }


    }
</script>
