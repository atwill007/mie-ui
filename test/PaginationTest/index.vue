<template>
  <div>
    <List :lists="lists" />
    <MiePagination :total="total"
                   :page="1"
                   :limit="limit"
                   @change="handleChange" />
  </div>
</template>

<script>
import { idxList, randomInt } from 'number-magic'
import MiePagination from '../../packages/pagination/src/Pagination'
import List from './List'

const total = 66

export default {
  name: 'app',
  components: {
    MiePagination,
    List
  },
  data () {
    return {
      lists: [],
      limit: 5,
      total
    }
  },
  created () {
    this.fetchData(1)
  },
  methods: {
    handleChange (currentPage) {
      console.log('>>currentPage: ', currentPage)
      this.fetchData(currentPage)
    },
    fetchData (page) {
      this.lists = idxList(total, 1).map(id => ({
        id,
        name: `${id} - test ${randomInt(0, 1000)}`
      })).slice((page - 1) * this.limit, page * this.limit)
    }
  }
}
</script>
