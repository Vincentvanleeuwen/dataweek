<template>
  <p>{{ paragraphText }}</p>
</template>

<script>
export default {
  name: "ParagraphBlock",
  props: {
    paragraphText: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 14px;
  font-size: 2vw;
}
</style>
