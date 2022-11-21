
<template>
    <div id="app">
       <div class="box">
        <div @click="tab('tabOne')" class="btn">切换tab1</div>
        <div @click="tab('tabTwo')" class="btn">切换tab2</div>
       </div>
        <component v-bind:is="currentTabComponent"></component>
    </div>
</template>
<script>
import tabOne from './tab1.vue'
// tab2组件一开始还未被使用，但是组件内的样式却已经被注入到head内
import tabTwo from './tab2.vue'

export default {
    components: {
        tabTwo,
        tabOne,
    },
    data() {
        return {
            currentTabComponent: 'tabOne'
        }
    },
    methods: {
        tab(val) {
            this.currentTabComponent = val
        }
    }
}
</script>
<style>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.btn{
    font-size: 20px;
    text-align: center;
    flex: 1;
    background: #ccc;
    margin: 10px;
 }
</style>
