function handlePowerup(context, identifier) {
  switch (identifier) {
    case "Tomato":
      tomatoHeadPowerup(context);
      break;
    case "Peely":
      peelySkinPowerup(context);
      break;
    case "Fishstick":
      fishsticksSkinPowerup(context)
      break;
    default:
  }
  console.log(identifier);

}
function startInterval(context, interval = 10) {
  let divider = 1000 / interval;
  setInterval(() => {
    let pointsGained = context.$store.state.pointsPerSecond / divider;
    context.$store.dispatch('addPoints', pointsGained);
  }, interval);
}

function tomatoHeadPowerup(context) {
  context.$store.commit('addPointsPerSecond', 1);
}

function peelySkinPowerup(context) {
  context.$store.commit("addPointsPerClick", 1);
}

function fishsticksSkinPowerup(context) {
  context.$store.commit('addPointsPerSecond', 5);
}

export {handlePowerup, startInterval}
