/**
 * 弹出框
 * @param {*} param 参数对象 
 * @param {*} successcallback 点击确认回调函数
 * @param {*} cancelcallback 点击取消回调函数
 */
var alert = function({title:title, content:content},successcallback,cancelcallback){
    uni.showModal({
        title: title,
        content: content,
        success: function (res) {
            if (res.confirm) {
                successcallback?successcallback:"";
            } else if (res.cancel) {
                cancelcallback?cancelcallback:"";
            }
        }
    });

}

var console2table = function(){
    console.table(msg);
}

var console2log = function(){
    console.log(msg);
}

var console2info = function(){
    console.info(msg);
}

var console2error = function(){
    console.error(msg);
}

/**
 * 消息提示
 * @param {*} 参数对象
 */
var toast = function({icon:icon,title:title}){
    uni.showToast({
        icon: icon,//'none',
        title:title
    });

}

/**
 * ajax数据请求
 * @param {*} param0 
 */
var ajax = function({url:url, data:data,success:success,error:error}){
    uni.request({
        url:url,
        data:data,
        success:(res)=>{
            success?success(res):"";
        },
        fail:(res)=>{
            error?error(res):"";
        }

    });
}

/**
 * 路由跳转
 * @param {*} param0 
 */
var navigateTo = function({url:url}){
    uni.navigateTo({url:url});
}

/**
 * 获取当前运行的平台
 */
var curPlatform = function(){
    switch(uni.getSystemInfoSync().platform){
        case 'android':
           console.log('运行Android上')
           break;
        case 'ios':
           console.log('运行iOS上')
           break;
        default:
           console.log('运行在开发者工具上')
           break;
    }
    return uni.getSystemInfoSync().platform;
}

module.exports  = {
    alert :alert,
    toast :toast,
    ajax :ajax,
    navigateTo :navigateTo,
    curPlatform :curPlatform,
    console2table :console2table,
    console2log : console2log,
    console2info : console2info,
    console2error : console2error
}