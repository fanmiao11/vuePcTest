<template>
  <div class="button">
    <button
      @click="clickFn"
      :class="[{
        default: type === 'default',
        primary: type === 'primary',
        success: type === 'success',
        warning: type === 'warning',
        danger: type === 'danger', 
      },
      {
        round: round==='' ? true : round
      },
      {
        large: size === 'large',
        small: size === 'small',
        mini: size === 'mini',
      }
      ]"
      :disabled=disabled
    >
      <!-- 接收插槽title 定义按钮里的内容 如果没有传title属性和插槽就显示默认内容 -->
      <slot name="title">{{ title ? title : '按钮内容' }}</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    type: String,
    color: String,
    round: {
      type: Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    size:String,
  },
  methods: {
    clickFn() {
      this.$emit('click')
    }
  },
  created () {
    console.log(this.disabled);
  }
}
</script>
<style scoped lang="less">
.button {
  button {
    padding: 8px 24px;
  }
  button.default {
    background: #fff;
    color: #000;
    border: #ebedf0 1px solid;
  }
  button.primary {
    background: #1989fa;
    color: #fff;
    border: #1989fa 1px solid;
  }
  button.success {
    background: #07c160;
    color: #fff;
    border: #07c160 1px solid;
  }
  button.warning {
    background: #ee0a24;
    color: #fff;
    border: #ee0a24 1px solid;
  }
  button.danger {
    background: #ff976a;
    color: #fff;
    border: #ff976a 1px solid;
  }
  button.round {
    border-radius: 40px;
  }
  button.large{
    padding: 10px 28px;
  }
  button.small{
    padding: 4px 18px;
  }
  button.mini{
    padding: 2px 6px;
  }
}
</style>
