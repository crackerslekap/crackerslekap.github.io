<template>
  <div class="container">
      <Header title="Factbook" />
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  margin-left: 120px;
  margin-right: 120px;
  width: auto;
}

body {
  font-family: 'Cabin', sans-serif;
}

</style>
