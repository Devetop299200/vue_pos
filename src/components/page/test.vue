<template>
    <div>
            <!-- vue 1.0 -->
            <div>{{overServer[0]}}</div>
            <div class='container'>
                <div v-for='server in overServer'>
                    <input :value='server.name' type="checkbox">
                    <label v-text='server.name'>{{server.name}}</label>
                </div>
                <div class='margin-top-10'><button @click='save()'>Save</button></div>
            </div>

          <label for="formGroupExampleInput">上传logo*</label>
          <input type="text" v-model="test.name">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts"
            :headers="{APPTOKEN:666}"
            :before-upload="beforUpload"
            :on-success="handleUploadLogo"
            :on-error="handleUploadError">
            <el-button size="small" type="primary">点击长传</el-button>
            <div slot="tip" class="el-upload__tip">Upload jpg/png , no more than 500kb</div>
          </el-upload>

          <!-- <div>
            <video id="wistia_simple_video_261" crossorigin="anonymous" poster="https://fast.wistia.com/assets/images/blank.gif" src="https://www.ansible.com/398aafc6-56e2-4ae1-a01a-1fd83c51fe6c" controlslist="nodownload" playsinline="" preload="metadata" type="video/m3u8" x-webkit-airplay="allow" style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video>
          </div> -->

          <!-- <div>
            <iframe src="https://v.yongjiujiexi.com/20180707/vXTX6aGD/index.m3u8" marginwidth="0" marginheight="0" border="0" scrolling="no" frameborder="0" topmargin="0" width="100%" height="500">
            </iframe>
          </div> -->
        </div>

        
    </div>
    
</template>

<script>
// var testOptions = [ '1','2','3','4','5' ],    // 测试数据-所有选项
// testOptionsRender = '3,4';
export default {
  name: "EditHostModal",
  data() {
    return {
      // options:[ '1','2','3','4','5' ],           // 初渲染所有选项
      // postOptions:['3','4','1']        // 提交选项也是已选中选项
      overServer: [
        //其他服务
        { name: "免费毛巾", check: "false" },
        { name: "免费拖鞋", check: "false" },
        { name: "免费淋浴用品", check: "false" },
        { name: "免费单次储物柜", check: "false" },
        { name: "收费租赁柜", check: "false" },
        { name: "私人教练", check: "false" },
        { name: "小团体课", check: "false" },
        { name: "免费课操", check: "false" },
        { name: "收费课操", check: "false" },
        { name: "其他服务", check: "false" }
      ],

      check1: ["免费拖鞋"], //拿到所有其他服务的check值

      test: {
        name: "",
        logo: ""
      }
    };
  },
  created () {
    console.log('created ----------------->')
    this.goDownload()
  },
  methods: {
    // getOptions: function(){

    // /* --- axios skip over --- */
    //     // this.options = testOptions;
    //     // this.postOptions = testOptionsRender.split(',');
    //     },
    save: function() {
      // alert('选中' + this.postOptions.join(','));
      alert("选中" + this.check1);
    },

    beforUpload(file) {
      console.log("befor file", file);
      this.test.name = file.name
      // let filenameArr = file.name.split(".");
      // console.log("filenameArr", filenameArr[1], this.test.name);
      // Object.defineProperties(file, {
      //   name: {
      //     value: this.test.name + "." + filenameArr[1],
      //     writable: true
      //   }
      // });
      console.log("--------file", file);
    },
    handleUploadLogo(response, file, fileList) {
      console.log("test----------->", response, file, fileList);
      this.test.logo = response.fileUrl;
    },
    handleUploadError(err, file, fileList) {
      console.log("handleUploadError", err);
      Notification.error("图片上传失败，请重新尝试");
    },
    goDownload () {
      var u = navigator.userAgent, app = navigator.appVersion;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
            var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            // 这里是安卓浏览器
            if (isAndroid) {
                window.location.href = 'https://www.baidu.com/'; // 跳安卓端下载地址,此处用百度地址作为测试地址
            }
            // 这里是iOS浏览器
            if (isIOS) {
                window.location.href = 'http://www.sohu.com/'; // 跳AppStore下载地址，此处用搜狐地址作为测试地址
            }


            // 是微信内部webView
            if (this.is_weixn()) {
                alert("请点击右上角按钮, 点击使用浏览器打开");
            }
    },
    is_weixn() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        }
  }
};
</script>

<style>
</style>