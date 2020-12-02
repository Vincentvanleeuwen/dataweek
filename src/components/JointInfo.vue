<template>
  <section class="joint-info-container">
    <section class="joint-coffeeshop-container">
      <img src="#" :alt="joint.coffeeshop" />
      <!--      <img :src="getImgUrl(joint.image)" :alt="joint.coffeeshop" />-->
    </section>
    <section class="joint-info-text-container">
      <img src="#" alt="joint" class="joint-image" />
      <ul>
        <li>{{ joint.taste }}</li>
        <li>{{ joint.appearance }}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import { getImgUrl } from "@/utils/getImageUrl";

export default {
  name: "JointInfo",
  props: ["joint"],
  methods: {
    getImgUrl
  }
};
</script>

<style scoped>
.joint-info-container {
  flex: 1;
  margin: 0 2em 15em 2em;
}
.joint-coffeeshop-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(55, 125, 55, 0.5);
  margin-bottom: 2em;
  height: 20em;
}
.joint-info-text-container {
  display: flex;
  flex-direction: column;
  background-color: rgba(55, 125, 55, 0.5);
  position: relative;
}
.joint-image {
  position: absolute;
  top: 0;
  left: 0;
}
li {
  text-decoration: none;
  list-style-type: none;
  text-align: left;
  font-size: 2vw;
}
</style>
