<template>
  <div class="container">
      <Header title="Factbook" />
      <Landing />
  </div>
</template>

<script>
import Header from './components/Header';
import Landing from './components/Landing';

export default {
  name: 'App',
  components: {
    Header,
    Landing
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

.container {
  margin-left: 120px;
  margin-right: 120px;
  width: auto;
}

body {
  font-family: 'Cabin', sans-serif;
}

</style>
