<!--
 * @Author: etwl etwl@didiglobal.com
 * @Date: 2022-11-13 22:00:53
 * @LastEditors: etwl etwl@didiglobal.com
 * @LastEditTime: 2022-11-21 20:50:08
 * @FilePath: /test7/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <div @click="tab('tabOne')">切换tab1</div>
    <div @click="tab('tabTwo')">切换tab2</div>
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>
<script>
import tabOne from './tab1.vue'
import tabTwo from './tab2.vue'

export default {
    components:{
        tabTwo,
        tabOne,
    },
    data() {
        return  {
            currentTabComponent:'tabOne'
        }
    },
    methods:{
        tab(val) {
            this.currentTabComponent = val
        }
    }
}
</script>
