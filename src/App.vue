<template>
  <div class="page page-current">
      <nav class="bar bar-tab">
        <a v-link="{ name: 'counter'}" class="tab-item external" href="#">
          <span class="icon icon-code"></span>
          <span class="tab-label">计算器</span>
        </a>
        <a v-link="{ name: 'store'}" class="tab-item external" href="#">
          <span class="icon icon-cart"></span>
          <span class="tab-label">在线库存</span>
        </a>
        <a v-link="{ name: 'gia'}" class="tab-item external" href="#">
          <span class="icon icon-search"></span>
          <span class="tab-label">证书查询</span>
        </a>
      </nav>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
//import $ from 'zepto'

export default {
  components: {
    Hello
  }
}
</script>

<style>
@import '//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css';

</style>
