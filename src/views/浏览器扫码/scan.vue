<template>
  <div>
    <!-- 浏览器服务使用(包括H5)需要https的方式，或者打包成安卓App就不需要https -->
    <button @click="show = true">点击扫码</button>
    <!-- 扫码 -->
    <!-- v-if="show" -->
    <StreamBarcodeReader
      @decode="(a, b, c) => onDecode(a, b, c)"
      @loaded="() => onLoaded()"
    ></StreamBarcodeReader>
    <div>{{text}}</div>
    <!-- 上传图片识别 -->
    <!-- <ImageBarcodeReader
      @decode="onDecode1"
      @error="onError1"
    ></ImageBarcodeReader> -->
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { ImageBarcodeReader } from "vue-barcode-reader";
export default {
  data() {
    return {
      show: false,
      text: '',
      id: null
    };
  },
  methods: {
    //扫码成功后
    onDecode(a, b, c) {
      console.log(a, b, c);
      this.text = a;
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(() => {
        if (this.text === a) {
          this.text = "";
        }
      }, 5000);
    },
    //加载扫码成功后
    onLoaded() {
      alert("load");
    },
    //识别图片成功后
    onDecode1(res) {
      alert(res);
      alert(1);
    },
    onError1(err) {
      alert(err);
      alert(2)
    },
  },
  components: {
    StreamBarcodeReader,
    ImageBarcodeReader,
  },
};
</script>