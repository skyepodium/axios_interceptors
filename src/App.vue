<template>
  <div id="app">
    main
  </div>
</template>

<script>
import News from '../src/api/News'

export default {
  name: 'App',
  created() {
    News.getNews()
      .then((res) => {
        console.log('res', res)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
}
</script>