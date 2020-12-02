<template>
  <section
    class="graph-block"
    v-bind:class="{ 'graph-block-reversed': reversed }"
  >
    <section class="graph-container">
      <img :src="getImgUrl(graphImageLink)" alt="graph" class="graph" />
    </section>
    <section class="paragraph-container">
      <ParagraphBlock :paragraphText="paragraphText" />
    </section>
  </section>
</template>

<script>
import ParagraphBlock from "@/components/ParagraphBlock";
import { getImgUrl } from '@/utils/getImageUrl';
export default {
  name: "GraphBlock",
  components: {
    ParagraphBlock
  },
  props: {
    paragraphText: String,
    graphImageLink: String,
    reversed: Boolean
  },
  methods: {
    getImgUrl
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.graph-block {
  margin: 15em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.graph-container {
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 0 5em;
}
img {
  /*object-fit: cover;*/
  min-width: 40em;
  width: 50vw;
  min-height: 20vw;
}
.paragraph-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;
  padding-right: 5em;
  text-align: left;
  max-width: 30em;
  min-width: 15em;
}
/*Reversed styling */
.graph-block-reversed {
  flex-direction: row-reverse;
}
.graph-block-reversed .graph-container {
  flex: 4;
}
.graph-block-reversed .paragraph-container {
  flex: 5;
  padding-right: 0;
  padding-left: 5em;
}
</style>
