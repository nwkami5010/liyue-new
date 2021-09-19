<template>

	<view class="tab-container">
		<view class="tab-box">
			<scroll-view 
			id="_scroll"
			scroll-x class="scroll-view" 
			:scroll-left="scrollLeft"
			scroll-with-animation>
				<view class="scroll-content">
					<view class="tab-item-box">
						<block v-for="(item,index) in tabData" :key="index" >
							<view class="tab-item"
							 :class="{'tab-item-active':activeIndex === index}"
							 @click="onTabClick(index)"
							>{{item.label || item}}
							</view>
						</block>
					</view>
				</view>
			</scroll-view>
			
		</view> 
		
	</view>
</template>

<script>
	export default {
		name:"my-tabs",
		props: {
		    // 父组件传入的 tabs 数据
		    tabData: {
		      type: Array,
		      default: () => []
		    },
		    // 默认激活项
		    defaultIndex: {
		      type: Number,
		      default: 0
		    },
		    // 配置对象
		    config: {
		      type: Object,
		      default: () => {
		        return {};
		      }
		    }
		  },
		data() {
			return {
				tabList: [],
				
				//当前激活项的index
				activeIndex: -1,
			};
		},
		methods:{
			onTabClick(index){
				this.activeIndex = index;
				this.$emit('tabClick',index)
			}
		},
		watch: {
			//监听激活项目的变化
			defaultIndex:{
				//当defaultIndex发生变化时候，回调的方法
				handler(val){
					this.activeIndex = val;
				},
				//当前handler回调将会在侦听开始猴立即被调用
				immediate:true
			}
		}
	}
</script>

<style lang="scss">
.tab-container {
  font-size: $uni-font-size-base;
  height: 45px;
  line-height: 45px;
  background-color: $uni-bg-color;
  .tab-box {
    width: 100%;
    height: 45px;
    display: flex;
    position: relative;
    .scroll-view {
      white-space: nowrap;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      .scroll-content {
        width: 100%;
        height: 100%;
        position: relative;

        .tab-item-box {
          height: 100%;
          .tab-item {
            height: 100%;
            display: inline-block;
            text-align: center;
            padding: 0 15px;
            position: relative;
            text-align: center;
            color: $uni-text-color;

            &-active {
              color: $uni-text-color-hot;
            }
          }
        }
        .underLine {
          height: 2px;
          width: 25px;
          background-color: #f01414;
          border-radius: 3px;
          transition: 0.5s;
          position: absolute;
          bottom: 0;
        }
      }
    }
  }

  /* #ifdef H5 */
  /deep/.uni-scroll-view::-webkit-scrollbar {
    display: none;
  }

  /deep/.uni-scroll-view {
    scrollbar-width: none;
  }
  /* #endif */
}
</style>
