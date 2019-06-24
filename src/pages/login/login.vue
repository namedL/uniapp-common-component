<template >
 <view  class="content">
    <form @submit="formSubmit" @reset="formReset">
      <view class="uni-form-item row">
        <view class="title">用户名</view>
        <input class="uni-input" name="username" placeholder="请输入用户名">
      </view>
      <view class="uni-form-item row">
        <view class="title">密码</view>
        <input class="uni-input" name="passward" passward placeholder="请输入密码">
      </view>
      <view class="uni-btn-v btg">
        <button type="primary" formType="submit">确认</button>
      </view>
      <view class="uni-btn-v btg">
        <button type="default" formType="reset">重置</button>
      </view>
    </form>
  </view> 
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  onLoad() {
      uni.al_commom.ajax({
          url:"http://47.94.240.212:8066/webapi/api/v1/basic/data?key=s_tb_sys_amap_byuserid_backstage&userid=1",
          success:function(res){
              uni.al_commom.console.log(res);
          }
      })
  },
  methods: {
    formSubmit: function(e) {
        if (e.detail.value.username.length <= 0) {
        uni.al_commom.toast({
          icon: "none",
          title: "请输入用户名"
        });
        return;
      }
      if (e.detail.value.passward.length <= 0) {
        uni.al_commom.toast({
          icon: "none",
          title: "请输入密码"
        });
        return;
      }
      uni.al_commom.alert({content:"恭喜验证成功"})
    },
    formReset: function(e) {
        console.log('清空数据')
        this.chosen = ''
    }
  }
};
</script>
<style>
.content {
		min-height: 100%;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 20px;
	}

	.btg {
		margin-top: 10px;
	}

	.row {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		position: relative;
		background-color: #ffffff;
	}

	.group {
		background-color: #ffffff;
		position: relative;
	}

	.row input {
		width: 80%;
		height: 25px;
		min-height: 25px;
		padding: 15px 0;
		padding-right: 30px;
		line-height: 25px;
	}

	.row .title {
		width: 30%;
		height: 25px;
		min-height: 25px;
		padding: 15px 0;
		padding-left: 30px;
		line-height: 25px;
	}

	.group {
		background-color: #ffffff;
		margin-top: 40px;
		position: relative;
	}
</style>


