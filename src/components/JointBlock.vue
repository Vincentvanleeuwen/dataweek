<template>
  <section class="joint-block-container">
    <h2>Our Contestants</h2>
    <p>
      We thought it would be funny to compare the five highest rated shops in
      Amsterdam. We bought a pre-rolled joint from all of the five shops. The
      joints are in the same price range and we compared some of the values.
    </p>
    <section class="joint-container">
      <JointInfo
        v-for="joint in jointInfo"
        :key="joint.coffeeshop"
        v-bind:joint="joint"
        @click="true"
      />
    </section>
  </section>
</template>
<!--        data-aos="zoom-in"-->
<!--        data-aos-duration="500"-->
<!--        data-aos-offset="1800"-->
<!--        data-aos-easing="ease-in"-->
<script>
import JointInfo from "@/components/JointInfo.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "JointBlock",
  props: {
    jointInfo: {
      type: Array
    }
  },
  components: {
    JointInfo
  },
  setup() {
    AOS.init();
  }
};
</script>

<style scoped>
.joint-block-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.joint-container {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
h2 {
  font-family: FunBlob, sans-serif;
  font-size: 16px;
  font-size: 4vw;
  max-width: 50vw;
}
p {
  max-width: 50%;
  text-align: left;
  padding-left: 1em;
  font-size: 14px;
  font-size: 2vw;
}
</style>
