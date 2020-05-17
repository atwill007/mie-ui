<template>
  <ul>
    <li v-for="list in lists"
        :key="list.id">
      {{ list.name }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'List',
  props: {
    lists: Array
  }
}
</script>
