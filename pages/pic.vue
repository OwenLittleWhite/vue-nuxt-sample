<template>
  <section class="container">
    <img :src="picsurl" class="logo" />
    <h1 class="title">
      USERS
    </h1>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/pics')
    return { picsurl: data }
  },
  head () {
    return {
      title: 'Pics'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
