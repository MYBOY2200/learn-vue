//在多个组件之间有相似的代码逻辑可以使用mixin
export const testMixin = {
    computed: {
        myTest() {
            return '测试mixin'
        }
    }
}