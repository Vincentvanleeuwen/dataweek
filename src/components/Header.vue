<template>
  <header>
    <img src="../assets/logo-placeholder.png" alt="image of ..." />
    <div>
      <h1>The best pre-rolled joints of Amsterdam Central</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2em;
}
h1 {
  font-weight: bold;
  font-size: 16px;
  font-size: 4vw;
}
div {
  max-width: 60rem;
  min-width: 39rem;
}
@media screen and (min-width: 60em) {
  div {
    max-width: 80rem;
  }
}
</style>
