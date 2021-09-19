const BASE_URL = 'https://api.imooc-blog.lgdsunday.club/api';
function request({url,data,methods}) {
	return new Promise((resolve,reject) => {
		
		//uni.request发起网络请求
		uni.request({
			url:BASE_URL + url,
			data,
			method,
			success: ({ data }) => {
				if(data.success) {
					resolve(data);
				}else {
					uni.showToast({
						title: data.message,
						icon: 'none',
						mask: true,
						duration: 3000
					});
					reject(data.message);
				}
			},
			fail: (error) => {
				reject(error);
			},
			complete:()=> {
				//关闭加载
				uni.hideLoading()
			}
		})
	})
}