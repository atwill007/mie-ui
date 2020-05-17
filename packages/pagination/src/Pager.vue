<template>
  <ul class="mie-pager">
    <li class="number"
        :class="{ active: current == 1 }"
        @click="setPage(1)">1</li>

    <!-- 更多按钮的显示逻辑：
    中间按钮一共5页（默认centerSize为5页），加上首尾按钮2页，一共7页，也就是说只有大于7页，才有可能显示更多按钮；
    左右更多按钮会随着当前页码的不同而显示或隐藏，以第4页和倒数第4页为界；
    当页码大于第4页时，应该显示左边更多按钮；
    当页码小于倒数第4页，都应该显示右边更多按钮。 -->
    <li class="more left"
        v-if="pages > centerSize + 2 && current >= centerSize"
        @click="setPage(current - jumpSize)">...</li>

    <!-- 中间页码组 -->
    <li class="number"
        :class="{ active: current === page }"
        v-for="(page, index) in centerPages"
        :key="index"
        @click="setPage(page)">{{ page }}</li>

    <li class="more right"
        v-if="pages > centerSize + 2 && current <= pages - centerSize + 1"
        @click="setPage(current + jumpSize)">...</li>

    <li class="number"
        :class="{ active: current == pages }"
        v-if="pages !== 1"
        @click="setPage(pages)">{{ pages }}</li>
  </ul>
</template>
<script>
export default {
  name: 'Pager',
  props: {
    // 总页数
    pages: {
      type: Number,
      required: true
    },
    // 当前页数
    page: {
      type: Number,
      required: true
    },
    centerSize: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      current: this.page,
      jumpSize: this.centerSize
    }
  },
  computed: {
    centerPages: function () {
      // 中间页码计算
      let centerPage = this.current
      if (this.current > this.pages - 3) {
        centerPage = this.pages - 3
      }
      if (this.current < 4) {
        centerPage = 4
      }
      if (this.pages <= this.centerSize + 2) {
        // 总页码较小时，全部显示出来
        const centerArr = []
        for (let i = 2; i < this.pages; i++) {
          centerArr.push(i)
        }
        return centerArr
      } else {
        // 总页码较大时，只显示中间centerSize个页码
        const centerArr = []
        for (let i = centerPage - 2; i <= centerPage + 2; i++) {
          centerArr.push(i)
        }
        return centerArr
      }
    }
  },
  methods: {
    setPage (page) {
      // 对页码进行限制，不能超出[1, pages]的范围
      let newPage = page
      if (page < 1) newPage = 1
      if (page > this.pages) newPage = this.pages
      this.current = newPage // 设置当前页码
      this.$emit('change', this.current) // 向外发射页码改变事件
    }
  },
  watch: {
    page: {
      handler (newVal) {
        console.log('>>>new: ', newVal)
        this.current = newVal
      },
      immediate: true
    }
  }
}
</script>
