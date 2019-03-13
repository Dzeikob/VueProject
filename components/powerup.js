
function handlePowerup(context, identifier) {
  switch(identifier) {
    case "Tomato":
      tomatoHeadPowerup(context);
    case "Peely":
      peelySkinPowerup(context);
      break;
    default:
    // code block
  }
  console.log(identifier);

}

function tomatoHeadPowerup(context) {
  setInterval(function()
    {
      context.$store.dispatch('addPoints', 1);
      context.$store.commit('toggleDab');
    }, 5000);
}
function peelySkinPowerup(context) {
  context.$store.commit("addPointsPerClick", 1);
}

export {handlePowerup}
