<template>
    <div>
        <div>语法v-model:<input type="text" v-model="data1"> data值：{{data1}}</div>

        <!-- v-model原理：v-model会默认做:value="data2" @input="data2 = $event.target.value"处理 -->
        <div>v-model原理:<input type="text" :value="data2" @input="data2 = $event.target.value">  data值：{{data2}}</div>
        <button @click="data2 = 666">双向绑定</button>

        <!-- 组件中使用v-model,以及基础input组件的封装 -->
        <!-- v-model=data3相当于vue中默认处理 :value="data3" @input="data3 = $event" -->
        <!-- 当data3变化时，通过prop改变组件里的值改变输入框的值value，当子组件输入框的值value改变时，派发input方法和改变的参数，父组件通过$event取到值，然后改变data3，达到双向数据绑定的效果 -->
        <div><BaseInput v-model="data3" label="用户名" placeholder="请输入您的用户名" required></BaseInput>  data值：{{data3}}</div>

        <!-- 组件model改变默认行为 -->
        <!-- v-model=data4相当于vue中默认处理 :checked="data4" @change="data4 = $event" -->
        <div><BaseCheckbox v-model="data4"></BaseCheckbox>  data值：{{data4}}</div>

        <!-- 让组件可以监听所有input原生的事件 -->
        <!-- 用v-on的.native如<base-input v-on:focus.native="onFocus"></base-input>，这样可以在组件的根元素上直接监听一个原生事件
        但上述 <base-input> 组件可能做了如下重构，所以根元素实际上是一个 <label> 元素，这时，父级的 .native 监听器将静默失败。
        它不会产生任何报错，但是 onFocus 处理函数不会如你预期地被调用。
        为了解决这个问题，Vue 提供了一个 $listeners property，它是一个对象，里面包含了作用在这个组件上的所有监听器。例如： -->
        <div><ListenerInput v-model="data5" @focus="listen"></ListenerInput> data值：{{data5}}</div>
        <!-- 现在 <ListenerInput> 组件是一个完全透明的包裹器了，也就是说它可以完全像一个普通的 <input> 元素一样使用了：所有跟它相同的 attribute 和监听器都可以工作，不必再使用 .native 监听器。 -->

        <!-- prop的.sync修饰符，可以更新子组件的prop(复杂的情况下还是用watch子组件的prop维护子组件的data实现) -->
        <PropSync :title.sync="data6"></PropSync>
        <!-- 相当于下面，也就是说子组件需要派发一个名为update:title的方法 -->
        <!-- <PropSync :title="data6" @update:title="data6 = $event"></PropSync> -->
        
    </div>
</template>

<script>
import BaseInput from './BaseInput.vue'
import BaseCheckbox from './BaseCheckbox.vue'
import ListenerInput from './ListenerInput.vue'
import PropSync from './PropSync.vue'
export default {
    data() {
        return {
            data1: '',
            data2: '',
            data3: '',
            data4: false,
            data5: '',
            data6: '666'
        }
    },
    components: {
        BaseInput,
        BaseCheckbox,
        ListenerInput,
        PropSync
    },
    methods: {
        listen() {
            console.log(1)
        }
    }
}
</script>