<template>
  <section class="joint-info-container">
    <section class="joint-coffeeshop-container">
      <h3>{{ joint.coffeeshop }}</h3>
      <span> {{ joint.name }}</span>
    </section>
    <section class="joint-info-text-container">
      <transition name="fade" mode="out-in">
        <div v-if="!joint.changeLayout">
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
            <button class="unwrap-button" @click="triggerChangeLayout">
              Unwrap this joint
            </button>
          </section>
        </div>
        <div v-else>
          <img
            :src="getImgUrl(joint.openImage)"
            alt="joint"
            class="joint-image-open"
          />
          <button class="unwrap-button" @click="triggerChangeLayout">
            Wrap it back into a joint!
          </button>
        </div>
      </transition>
    </section>
  </section>
</template>
<script>
import { getImgUrl } from "@/utils/getImageUrl";

export default {
  name: "JointInfo",
  props: ["joint"],
  methods: {
    getImgUrl,
    triggerChangeLayout() {
      const selected = this.joint;
      selected.changeLayout = !selected.changeLayout;
    }
  }
};
</script>

<style scoped>
.joint-info-container {
  flex: 1;
  margin: 0 1em 5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.joint-coffeeshop-container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  justify-content: center;
  align-items: center;
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
  top: -1em;
  left: -2em;
}
.joint-image-open {
  width: 90%;
}
.unwrap-button {
  border: 0;
  padding: 0.5em 2em;
  margin-bottom: 3em;
  font-weight: bold;
  color: var(--background);
  background-color: var(--dark-green);
  cursor: pointer;
  width: 15em;
}
h3 {
  font-family: Raleway, sans-serif;
  font-weight: 900;
  font-size: 3vw;
  color: var(--dark-green);
  margin: -2em 0 0 0;
}
span {
  margin-top: 1em;
  font-style: italic;
}
.pricing h4,
.rest h4 {
  font-family: Raleway, sans-serif;
  font-weight: 900;
  font-size: 2vw;
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
  font-size: 2vw;
  padding: 0 2em;
  margin-top: 0.2em;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 40em) {
  h3 {
    font-size: 5vw;
  }
  .joint-image {
    transform: scale(0.7);
    top: -7em;
    left: -2em;
  }
}
@media screen and (min-width: 60em) {
  h3 {
    font-size: 2.5vw;
  }
}
</style>
