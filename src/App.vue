<template>
  <div>
    <nav class="w-full flex flex-row justify-center items-center bg-primary-dark h-20">
      <router-link to="/">Home</router-link> 
      <router-link to="/about" class="pl-2">About</router-link>
    </nav>
    <div class="w-full p-3">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav a {
  font-weight: bold;
  color: #c0b5b5;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
