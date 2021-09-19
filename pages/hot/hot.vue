<template>
	<view class="hot-container">
		<!-- 小程序的image组件  -->
		<image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
		<!-- 可直接使用组件，无需注册 -->
		<my-search></my-search>
	</view>
</template>

<script>
	import { getHotTabs } from 'api/hot';
	export default {
		name:'my-search',
		data() {
			return {

			};
		},
		// created，组件实现配置完成，但是dom没完成，进行网络请求，配置响应式数据
		created (){
			this.loadHotTabs();
		},
		methods:{
		async loadHotTabs(){
				 // uniapp 支持 async await
		     const { data: res } = await getHotTabs();
			 console.log(res)
				      this.tabData = res.list;
				      // // 获取列表数据
				      // this.getHotListFromTab();
			}
		}
	}
</script>

<style lang="scss" scoped>
.hot-container {
  background-color: $uni-bg-color;
  .logo {
    width: 100%;
    height: 40px;
  }
  .search-box {
    padding: 0 16px;
    margin-bottom: $uni-spacing-col-base;
  }
  .tab-sticky {
    position: -webkit-sticky;
    position: sticky;
    z-index: 99;
    /* #ifndef H5 */
    top: 0;
    /* #endif */
    /* #ifdef H5 */
    top: 44px;
    /* #endif */
  }
}
</style>
