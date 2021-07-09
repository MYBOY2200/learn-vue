<template>
  <section class="p-10">
    <h1>{{ ip }}</h1>
  </section>
</template>
<script>
export default {
  data() {
    return {
      ip: "",
    };
  },
  methods: {
    getUserIP() {
      var RTCPeerConnection =
        window.RTCPeerConnection ||
        window.webkitRTCPeerConnection ||
        window.mozRTCPeerConnection;
      if (RTCPeerConnection)
        (() => {
          var rtc = new RTCPeerConnection();
          rtc.createDataChannel(""); //创建一个可以发送任意数据的数据通道
          rtc.createOffer(
            (offerDesc) => {
              //创建并存储一个sdp数据
              rtc.setLocalDescription(offerDesc);
            },
            (e) => {
              console.log(e);
            }
          );
          rtc.onicecandidate = (evt) => {
            //监听candidate事件
            if (evt.candidate) {
              var ip_addr = evt.candidate.address;
              alert(ip_addr)
              localStorage.setItem("ip_addr", ip_addr);
            }
          };
        })();
      else {
        console.log("目前仅测试了chrome浏览器OK");
      }
    }, 
  },
  created() {
    //created下也有window和document,但无法使用querySelector
    // console.log(window)
    // this.getUserIP();
    // console.log(document.querySelector('.p-10'))
  },
  mounted() {
    // console.log(window)
    //在谷歌浏览器能获取，在360不行
    this.getUserIP();
    // console.log(document.querySelector('.p-10'))
    
  },
};
</script>

<style lang="scss">
</style>