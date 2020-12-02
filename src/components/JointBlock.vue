<template>
  <section class="joint-block-container">
    <JointInfo
      v-for="joint in jointInfo"
      :key="joint.coffeeshop"
      v-bind:joint="joint"
    />
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
