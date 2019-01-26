<template>
    <div class="explanation-wrapper" style="background-color: red">
        <p>{{explanation.date.eventObject.explanation}}</p>
    </div>
</template>

<script>
    export default {
        name: "Explanation",
        props:['explanation']
    }
</script>

<style scoped>

</style>