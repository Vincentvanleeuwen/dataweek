<template>
  <Header />
  <div class="home">
    <GraphBlock :paragraphText="netherlandsText" :graphImageLink="peopleImageLink2" />
    <GraphBlock :paragraphText="amsterdamText" :graphImageLink="peopleImageLink" />
    <GraphBlock
      :paragraphText="pieChartText"
      :graphImageLink="pieImageLink"

    />
    <h3>Young people really do love weed in Amsterdam huh?</h3>
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
      peopleImageLink: "peopleChart.png",
      peopleImageLink2: "peopleChart2.png",
      pieImageLink: "piechart.png",
      netherlandsText:
        "Weed is a commonly used product which a lot of people around the world enjoy (including us), but since we live in the Netherlands we were wondering how many of those people have actually smoked cannabis this year.",
      amsterdamText:
        "Most coffee shops are based in Amsterdam so we compared if the weed consumption over there is higher than the national average. ",
      pieChartText:
        "But most of the weed consumers are of course, you guessed it right, young people! We took an average age which correlates with other ages so if you go one year down or one year of age up it would not make much of a difference. The average age is 25 years old."
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
  color: var(--normal-green);
}
h3 {
  margin-bottom: 5em;
  font-weight: 900;
}
</style>