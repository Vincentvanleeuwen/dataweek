export const getImgUrl = (pic) => {
  console.log(pic)
  return require("@/assets/" + pic);
};
//https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working
