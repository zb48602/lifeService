<template>
    <div id="app">
        <mt-header fixed title="顾村生活服务">
            <mt-button icon="back" slot="left">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <router-view>
        </router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {

        }
    },
    methods: {
        handleClick: function() {
            this.$toast('Hello world!')
        }
    }
}
</script>
<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 50px;
}
</style>
