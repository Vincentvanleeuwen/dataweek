<template>
  <section class="joint-block-container">
    <h2>Our Contestants</h2>
    <section class="joint-container">
      <JointInfo
        v-for="joint in jointInfo"
        :key="joint.coffeeshop"
        v-bind:joint="joint"
      />
    </section>
  </section>
</template>

<script>
import JointInfo from "@/components/JointInfo.vue";
export default {
  name: "JointBlock",
  props: {
    jointInfo: {
      type: Array
    }
  },
  components: {
    JointInfo
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
</style>
