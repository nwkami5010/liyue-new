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
							<view 
							 class="tab-item"
							 :id="'_tab_' + index"
							 :class="{'tab-item-active' :activeIndex === index}"
							 @click="onTabClick(index)"
							 :style="{
							           color:
							           activeIndex === index ? defaultConfig.activeTextColor : defaultConfig.textColor
							                 }"
							>{{item.label || item}}
							</view>
						</block>
					</view>
					 <!-- 滑块 -->
					<view class="underLine" 
					:style="{transform: 'translateX('+ slider.left + 'px)',
							width: defaultConfig.underLineWidth +'px',
							height: defaultConfig.underLineHeight+'px',
							backgroundColor: defaultConfig.underLineColor
					}"></view>
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
				//内部维护的数据对象，每个item单独维护一个slider滑块对象
				tabList: [],
				
				//当前激活项的index
				activeIndex: -1,
				//滑块
				//实现滑块滚动
				//1确定滚动的时机：点击tab
				//2.计算滑块滚动的距离
				slider:{
					//滑块离左侧的具力
					left:0
				},
				//默认配置
				defaultConfig: {
					//下划线的宽度,高度
					underLineWidth: 24,
					underLineHeight: 2,
					//下划线颜色
					underLineColor:'#f94d2a'
					
				}
			};
		},
		methods:{
			//更新tab item宽度
			updateTabWidth(){
				     /**
				       * 为 tabList 的每个 item 单独额外维护一个 slider 的滑块对象
				       */
				let data = this.tabList;
				if(data.length === 0) return;
				//uniapp中拿到渲染之后的dom
				//获取dom的固定写法
				const query = uni.createSelectorQuery().in(this)
				//循环数据源
				data.forEach((item,index) => {
					 // 获取 dom 的固定写法
					query
					    .select('#_tab_'+ index)
						.boundingClientRect((res) => {
							//res是拿到的dom
							 // 为数据对象中每一个 item 都维护一个 _slider（滑动条） 对象
							item._slider = {
								  // 当前的 tab 距离左侧的距离
								left: res.left +(res.width - this.defaultConfig.underLineWidth) / 2
							};
							  // 运算完成之后，执行一次 【滑块】位置运算
							if (data.length - 1 === index) {
								this.tabToIndex()
							}
						})
						.exec();
				});
			},
			  /**
			     * tab 的点击事件处理
			     */
			onTabClick(index){
				this.activeIndex = index;
				this.tabToIndex();
				 // 定义滑块的位置
				this.$emit('tabClick');
				 // 发送通知
			},
			// 根据当前的activeIndex,计算滑块滚动位置
			tabToIndex(){
				//获取当前的activeIndex
				const index = this.activeIndex;
				//滑块的滚动 === this.slider.left
				this.slider = {
					//left = tabItem.left + (tabItem.width-slider.width) /2
					left:this.tabList[index]._slider.left
				}
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
			},
			//监听tabData的变化
			tabData: {
				//当tabData发生变化时候，回调的方法
				handler(val) {
					//tabList数据和tabData同步
					this.tabList = val;
					//维护tabList中的每个item，为Dom渲染完成之后
					//this.$nextTick() uniapp虽然支持，到那时$nextick存在兼容性问题
					setTimeout(()=> {
						//计算item的slider
						this.updateTabWidth();
					},0)
				},
				immediate: true
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
