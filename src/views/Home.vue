<template>
  <Header />
  <div class="home">
    <GraphBlock :paragraphText="graphText" :graphImageLink="peopleImageLink" />
    <GraphBlock
      :paragraphText="graphText"
      :graphImageLink="pieImageLink"
      :reversed="true"
    />
    <JointBlock :jointInfo="jointInfo" />
    <h2>So what percentage is actually weed?</h2>
    <img src="@/assets/barchart.png" alt="barchart" class="bar-chart" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import GraphBlock from "@/components/GraphBlock";
import JointBlock from "@/components/JointBlock";

export default {
  name: "Home",
  components: {
    JointBlock,
    GraphBlock,
    Header
  },
  data() {
    return {
      jointInfo: [
        {
          coffeeshop: "Boerejongens",
          taste: "Fresh",
          appearance: "sick",
          image: "Boerejongens.png",
          price: 4,
          effect: "Strong",
          tobacco: "Noticeable"
        },
        {
          coffeeshop: "Central",
          taste: "Bad",
          appearance: "sick",
          image: "Central.png",
          price: 3.5,
          effect: "Weak",
          tobacco: "It's like smoking a cigarette"
        },
        {
          coffeeshop: "Kadinsky",
          taste: "Sweet",
          appearance: "sick",
          image: "Kadinsky.png",
          price: 5.5,
          effect: "Decent",
          tobacco: "Barely noticeable"
        },
        {
          coffeeshop: "Tweede Kamer",
          taste: "Bad",
          appearance: "sick",
          image: "TweedeKamer.png",
          price: 4.5,
          effect: "None",
          tobacco: "It's like smoking a cigarette"
        },
        {
          coffeeshop: "Voyagers",
          taste: "Bittersweet",
          appearance: "sick",
          image: "Voyagers.png",
          price: 5,
          effect: "Really strong",
          tobacco: "Barely noticeable"
        }
      ],
      peopleImageLink: "people-placeholder.png",
      pieImageLink: "pie-placeholder.png",
      graphText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lorem ac ex scelerisque posuere. Sed scelerisque consequat sodales. Vestibulum vitae varius mauris. Vestibulum mattis finibus justo quis aliquam. Duis porttitor bibendum arcu, ut laoreet libero convallis sed. Quisque ut lobortis nibh. Cras sit amet nunc consectetur, dignissim libero ac, hendrerit enim.\n"
    };
  }
};
</script>
<style scoped>
.bar-chart {
  width: 100%;
}
h2 {
  font-size: 4vw;
  font-family: FunBlob, sans-serif;
  padding: 0 5em;
  color: var(--normal-green)
}
</style>