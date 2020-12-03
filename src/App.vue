<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap");
:root {
  --dark-green: #28463c;
  --normal-green: #688f4e;
  --light-green: #b1d182;
  --background: #f4f1e9;
  --call-to-action: #6cc6c7;
}
body {
  background-image: url("assets/weedleaf.png");
  background-repeat: space;
  background-position: center center;
  background-color: var(--background);
  font-family: Raleway, sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
