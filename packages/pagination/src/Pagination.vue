<template>
  <div class="mie-pagination"
       :class="`mie-pagination--${align}`">
    <Button class="mie-btn btn-prev"
            @click="setPage(currentPage - 1)">&lt;</Button>
    <Pager :page="currentPage"
           :pages="pages"
           @change="onChange" />
    <Button class="mie-btn btn-next"
            @click="setPage(currentPage + 1)">&gt;</Button>
  </div>
</template>
<script>
import Button from './Button.vue'
import Pager from './Pager'

export default {
  name: 'MiePagination',
  components: {
    Button,
    Pager
  },
  props: {
    // 指定的默认页数
    page: {
      type: Number,
      default: 1
    },
    // 每个页面展示的条数
    limit: {
      type: Number,
      default: 10
    },
    // 总条数
    total: {
      type: Number,
      default: 0,
      required: true
    },
    align: {
      tyep: String,
      default: 'center',
      validator (val) {
        return ['left', 'right'].includes(val)
      }
    }
  },
  data () {
    return {
      // currentPage只有在初始化时候去拿page的值，后面page变化currentPage不会变化
      currentPage: this.page
    }
  },
  computed: {
    // 分页数目
    pages () {
      return Math.ceil(this.total / this.limit)
    }
  },
  methods: {
    setPage (page) {
      if (page < 1) return
      if (page > this.pages) return
      this.currentPage = page
      this.$emit('change', this.currentPage)
    },
    onChange (current) {
      this.currentPage = current
      this.$emit('change', this.currentPage)
    }
  }
}
</script>
<style lang="scss">
@import './pagination.scss';
</style>
