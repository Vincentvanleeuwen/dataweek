<template>
  <Header />
  <div class="home">
    <GraphBlock
      :paragraphText="netherlandsText"
      :graphImageLink="peopleImageLink2"
    />
    <GraphBlock
      :paragraphText="amsterdamText"
      :graphImageLink="peopleImageLink"
    />
    <GraphBlock :paragraphText="pieChartText" :graphImageLink="pieImageLink" />
    <h3>Young people really do love weed in Amsterdam huh?</h3>
    <p>
      But we, as avid stoners wanted to know what the best pre-rolled joint of
      central Amsterdam was. So we decided to find out what the best coffeeshops
      near Amsterdam CS are. Then we would go to those coffeeshops and buy a
      pre-rolled joint with tobacco that was around €4 to €5.
    </p>
    <p>
      We also did a quick review of the coffeeshops to find out if it is worth
      the time and money to go to one of these specific coffeeshops.
    </p>
    <p>
      In total we had 5 different pre-rolled joints. We opened the joints to
      check out how much weed was inside of them, Rolled them up again and
      started smoking them. We checked all the joints on price, effect, taste
      and did a tobacco check.
    </p>
    <JointBlock :jointInfo="jointInfo" />
    <h2>So what percentage is actually weed?</h2>
    <p>
      Of course some of these shops are a bit shady, so we wanted to know how
      much weed they actually give you in these pre-rolled joints.
    </p>
    <img src="@/assets/barchart.png" alt="barchart" class="bar-chart" />
    <p>
      It seems that the “Tweede kamer” coffeeshops joints are belony and they
      just care about making money. (Please don't kill us Tweede Kamer).
    </p>
    <h2>And the clear winner is...</h2>
    <img src="@/assets/joint-award.png" alt="barchart" class="award" />
    <p>
      We picked the Amnesia pre-rolled joint by Voyagers as the best joint of
      Central Amsterdam because price and quality wise it was by far the best.
    </p>
    <p>
      The Joint tasted very nice and there was enough weed to get you as high as
      a kite. Voyagers is also a very nice coffeeshop with a large amount
      weed/hash strains, friendly vendors and a smoke room (Sadly this was
      closed due to the Corona Virus)
    </p>
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
          openImage: "open-boerejongens.png",
          price: 4,
          effect: "Strong",
          tobacco: "Noticeable",
          name: "White Choco Pre-rolled",
          changeLayout: false
        },
        {
          coffeeshop: "Central",
          taste: "Bad",
          appearance: "sick",
          image: "Central.png",
          openImage: "open-central.png",
          price: 3.5,
          effect: "Weak",
          tobacco: "It's like smoking a cigarette",
          name: "Haze Joint",
          changeLayout: false
        },
        {
          coffeeshop: "Kadinsky",
          taste: "Sweet",
          appearance: "sick",
          image: "Kadinsky.png",
          openImage: "open-kadinsky.png",
          price: 5.5,
          effect: "Decent",
          tobacco: "Barely noticeable",
          name: "Sativa Mixed",
          changeLayout: false
        },
        {
          coffeeshop: "Tweede Kamer",
          taste: "Bad",
          appearance: "sick",
          image: "TweedeKamer.png",
          openImage: "open-tweedekamer.png",
          price: 4.5,
          effect: "None",
          tobacco: "It's like smoking a cigarette",
          name: "Mexican Haze Joint",
          changeLayout: false
        },
        {
          coffeeshop: "Voyagers",
          taste: "Bittersweet",
          appearance: "sick",
          image: "Voyagers.png",
          openImage: "open-voyagers.png",
          price: 5,
          effect: "Really strong",
          tobacco: "Barely noticeable",
          name: "Amnesia Haze",
          changeLayout: false
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
.award {
  width: 50%;
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
p {
  padding: 0 15em;
  text-align: left;
  font-size: 14px;
  font-size: 2vw;
}
span {
  margin-top: 1em;
}
.play-audio {
  position: fixed;
  right: 1em;
  bottom: 1em;
  z-index: 10;
  cursor: pointer;
}
</style>
