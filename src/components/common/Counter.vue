<template>
    <div>
        <div>{{ count }}</div>
        <div @click="increment">클릭수 올리기</div>
        <div @click="reset">초기화</div>
    </div>


</template>

<script>
    export default {
        data () {
            return {
                count: '0'
            }
        },
        methods: {
            increment () {
                this.count++
            },
             reset(){
                this.count='0'
             }

        }
    }
</script>

<style scoped>

</style>