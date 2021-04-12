//在多个组件之间有相似的代码逻辑可以使用mixin
export const testMixin = {
    computed: {
        myTest() {
            return '测试mixin'
        }
    }
}

// 混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑。
// 为自定义的选项 'myOption' 注入一个处理器。
// Vue.mixin({
//     created: function () {
//         var myOption = this.$options.myOption
//         if (myOption) {
//             console.log(myOption)
//         }
//     }
// })
// 请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。
// 大多数情况下，只应当应用于自定义选项，就像上面示例一样。推荐将其作为插件发布，以避免重复应用混入。