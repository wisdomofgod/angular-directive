angular1.x部分指令
===

所有指令只需要在index.html文件中引入即可使用（注：需在app.module之后引入)
---
文件说明：directives文件夹下是所有指令代码  styles文件夹下是部分样式代码

#autoComplete
##输入框匹配内容下拉框指令 (不含输入框）
	 用法： 在template页面中 <auto-complete complete-data="" complete-query="" success-function=""></auto-complete>
	 
		其中complete-data 对应搜索后的 下拉列表源数据
			complete-query 对应展示字段（如 mobile ， name)等
			success 对应下拉列表选择后的回调函数,即通知控制器选择结果

#passwordInput
##密码输入框指令 仿支付宝支付密码输入框 方格个数可配置 
	用法： 在template页面中 <password-input password-data="" password-len="6"></password-input>
	
		其中password-data 用来存储用户输入的密码
			password-len 表示密码长度（如支付密码6位)

#cardInput
##分隔输入框指令 输入指定位数后自动换到下一个输入框 作用于输入卡号等场景
	用法： 在template页面中 <cardinput ng-model="" len="4" size="4"></cardinput>
	
		其中ng-model 对应用户输入的卡号
			len 对应卡号按多少位分割(如4位)
			size 对应输入框个数（ 卡号长度 = len * size)

#pagination
##分页(使用了部分bootstrap样式,这里不再另外引入)
	用法： 在template页面中 <pagination total-items="" total-pages=""  ng-page="1" ng-rows="10" first-text="首页" last-text="尾页" next-text="&rsaquo;" previous-text="&lsaquo;"></pagination>
	
		其中totalItems 对应总条数
			totalPages 对应总页数
			firstText 对应第一页的文字（如：首页)
			lastText 对应最后一页的文字
			nextText 对应下一页的文字 (如：>)
			previousText 对应上一页的文字
			ngRows 每页显示条数
			ngPage 当前页数
			ngChange 当发生页面跳转时，控制器接受的函数
			
		ngChange 接受一个参数 表示要跳转到的页数


