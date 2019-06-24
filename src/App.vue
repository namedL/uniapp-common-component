<script>
 var _common = require('common/common.js')
uni.al_commom = _common;
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(process.env.NODE_ENV )
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
