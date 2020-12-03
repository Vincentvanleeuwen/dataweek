<template>
  <header>
    <img
      src="../assets/logo-placeholder.png"
      alt="image of ..."
      data-aos="fade-down-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    />
    <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="700">
      <h1>Smoking weed for science</h1>
    </div>
  </header>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Header",
  setup() {
    AOS.init()
  }
};
</script>

<style scoped>
@font-face {
  font-family: FunBlob;
  src: url("../assets/fonts/FunBlob.ttf");
}
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
  font-family: FunBlob, sans-serif;
  font-size: 16px;
  font-size: 4vw;
  color: var(--normal-green);
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
