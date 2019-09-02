### 项目预览：
![img](https://github.com/VincerCC/11/blob/master/images/%E5%8A%A8%E6%BC%AB%E5%B0%8F%E7%A8%8B%E5%BA%8F.png)

## 小程序
### 什么是小程序？
1. 无需下载(压缩包体积不超过2m),用完即走
###小程序特点
1. 体积小
2. 同app进行互补，可以实现app基本功能
3. 微信扫一扫就可以使用小程序
4. 开发周期短，成本低
###适配方案
1. viewport适配,width=device-width
2. 单位：rpx
3. iphone6下边,1rpx=0.5px=1物理像素 DPR=物理像素/设备独立像素=2
###重要的文件
1. 结构：wxml
2. 样式：wxss
3. 行为:js
4. json文件：数据&&配置
###数据
1. 在data中初始化页面需要的数据，在页面可以直接{{}}使用
###事件
1. 冒泡事件bind+事件类型
2. 非冒泡事件catch+事件类型
事件类型列表：
   类型                触发条件	
touchstart	        手指触摸动作开始	
touchmove	        手指触摸后移动	
touchcancel	        手指触摸动作被打断，如来电提醒，弹窗	
touchend	        手指触摸动作结束	
tap	                手指触摸后马上离开	
longpress	        手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发	
longtap	            手指触摸后，超过350ms再离开（推荐使用longpress事件代替）	
transitionend	    会在 WXSS transition 或 wx.createAnimation 动画结束后触发	
animationstart	    会在一个 WXSS animation 动画开始时触发	
animationiteration	会在一个 WXSS animation 一次迭代结束时触发	
animationend	    会在一个 WXSS animation 动画完成时触发	
touchforcechange	在支持 3D Touch 的 iPhone 设备，重按时会触发

###template模板
1. template,属性：name（标识模板）
2. 使用：template,属性：is(模板的name)
3. 引入模板结构：<import src="路径"/>
4. 引入模板样式：@import '路径'
5. 传参，data='{{...item}}'
###列表渲染
1. wx:for,遍历的个体item,遍历的下标index
2. wx:key="index"
