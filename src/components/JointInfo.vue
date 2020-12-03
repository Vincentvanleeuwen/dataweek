<template>
  <section class="joint-info-container">
    <section class="joint-coffeeshop-container">
      <h3>{{ joint.coffeeshop }}</h3>
      <!--      <img :src="getImgUrl(joint.image)" :alt="joint.coffeeshop" />-->
    </section>
    <section class="joint-info-text-container">
      <img :src="getImgUrl(joint.image)" alt="joint" class="joint-image" />
      <section class="description-container">
        <section class="pricing">
          <h4>Pricing</h4>
          <p>€{{ joint.price }}</p>
        </section>
        <section class="rest">
          <h4>Effect</h4>
          <p>{{ joint.effect }}</p>
        </section>
        <section class="rest">
          <h4>Taste</h4>
          <p>{{ joint.taste }}</p>
        </section>
        <section class="rest">
          <h4>Tobacco check</h4>
          <p>{{ joint.tobacco }}</p>
        </section>
      </section>
    </section>
  </section>
</template>
<!--coffeeshop: "Boerejongens",
          taste: "Fresh",
          appearance: "sick",
          image: "Boerejongens.png",
          price: 4,
          effect: "Strong",
          tobacco: "Noticeable"-->
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
  margin: 0 1em 15em 1em;
}
.joint-coffeeshop-container {
  position: relative;
  display: flex;
  justify-content: center;

  align-items: center;
  background-color: var(--call-to-action);
  height: 14em;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  min-width: 20em;
  max-width: 20em;
  min-height: 14em;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0 30px 60px -30px;
}
.joint-info-text-container {
  display: flex;
  flex-direction: column;
  background-color: var(--light-green);
  position: relative;

  margin-top: -4em;
  min-width: 20em;
  max-width: 20em;
  min-height: 18em;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0 30px 60px -30px;
}
.joint-image {
  position: absolute;
  top: 1em;
  left: -2em;
}
h3 {

  font-family: Raleway, sans-serif;
  font-weight: 900;
  font-size: 1.5vw;
  color: var(--background);
}
.pricing h4,
.rest h4 {
  font-family: Raleway, sans-serif;
  font-weight: 900;
  font-size: 1vw;
  color: var(--dark-green);
  margin-bottom: 0.5em;
}
.pricing p {
  font-family: Raleway, sans-serif;
  font-weight: 900;
  color: var(--normal-green);
  font-size: 2vw;
  padding: 0;
  margin: 0;
}
.element {
  font-weight: bold;
}
.rest {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.rest p {
  font-family: Raleway, sans-serif;
  font-weight: 900;
  color: var(--normal-green);
  font-size: 1vw;
  padding: 0 1em;
  text-align: center;
}
</style>
