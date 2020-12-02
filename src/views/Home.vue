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
          taste: "fris",
          appearance: "sick",
          image: "boerejongens.png"
        },
        {
          coffeeshop: "Central",
          taste: "als",
          appearance: "sick",
          image: "central.png"
        },
        {
          coffeeshop: "Kadinsky",
          taste: "het",
          appearance: "sick",
          image: "kadinsky.png"
        },
        {
          coffeeshop: "Tweede Kamer",
          taste: "schoon",
          appearance: "sick",
          image: "tweedekamer.png"
        },
        {
          coffeeshop: "Voyagers",
          taste: "is",
          appearance: "sick",
          image: "voyagers.png"
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
