<template>
  <div
    class="el-rate"
    role="slider"
    tabindex="0">
    <span v-for="item in max"
    :key="item"
    class="el-rate__item"
    @mousemove="setCurrentValue(item, $event)"
    @mouseleave="resetCurrentValue"
    @click="selectValue(item)"
    :style="{cursor: disabled? 'auto' : 'pointer'}">
      <i
        :class="[classes[item-1], {'hover':hoverIndex === item}]"
        class="el-rate__icon"
        :style="getIconStyle(item)">
      </i>
    </span>
    <span v-if="showText || showScore" class="el-rate__text" :style="{color: textColor}">{{text}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentValue: this.value,
      classMap: {},
      hoverIndex: -1
    }
  },
  props: {
    texts: {
      type: Array,
      default() {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type:Boolean,
      default: false
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    colors: {
      type: Array,
      default() {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
      }
    },
    voidIconClass: {
      type: String,
      default: 'el-icon-star-off'
    },
    iconClasses: {
      type: Array,
      default() {
        return ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']
      }
    },
    textColor: {
      type: String,
      default: '#1f2d3d'
    }
  },
  computed: {
    text() {
      let result = ''
      if (this.showScore) {
        // result = this.
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.currentValue) - 1]
      }
      return result
    },
    activeColor() {
      return this.getValueFromMap(this.currentValue, this.colorMap);
    },
    colorMap() {
      return {
        lowColor: this.colors[0],
        mediumColor: this.colors[1],
        highColor: this.colors[2],
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      }
    },
    activeClass() {
      return this.getValueFromMap(this.currentValue, this.classMap)
    },
    voidClass() {
      return this.classMap.voidClass
    },
    classes() {
      let result = []
      let i = 0
      let threshold = this.currentValue
      for (; i < threshold; i++) {
        result.push(this.activeClass)
      }
      for (; i < this.max; i++) {
          result.push(this.voidClass)
      }
      return result
    }
  },
  methods: {
    resetCurrentValue() {
      if (this.disabled) {
        return;
      }
      this.currentValue = this.value
      this.hoverIndex = -1
    },
    setCurrentValue (value, event) {
      if (this.disabled) {
        return
      }

      this.currentValue = value
      this.hoverIndex = value
    },
    getValueFromMap(value, map) {
      let result = '';
      if (value <= this.lowThreshold) {
        result = map.lowColor || map.lowClass
      } else if (value >= this.highThreshold) {
        result = map.highColor || map.highClass;
      } else {
        result = map.mediumColor || map.mediumClass;
      }
      return result;
    },
    getIconStyle(item) {
      const voidColor = this.disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor
      return {
        color: item <= this.currentValue ? this.activeColor : voidColor
      }
    },
    selectValue(value) {
      if (this.disabled) {
        // alert('disabled')
        return
      }
      this.$emit('input', value)
      this.$emit('change', value)
    }
  },
  created() {
    if (!this.value) {
      this.$emit('input', 0)
    }
    this.classMap = {
      lowClass: this.iconClasses[0],
      mediumClass: this.iconClasses[1],
      highClass: this.iconClasses[2],
      voidClass: this.voidIconClass,
      disabledVoidClass: this.disabledVoidIconClass
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  }
}
</script>
<style>

</style>
