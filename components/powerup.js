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
function startInterval(context, interval = 100) {
  let divider = 1000 / interval;
  let intervalObj = setInterval(() => {
    let pointsGained = context.$store.state.pointsPerSecond / divider;
    if(Math.floor(context.$store.state.points + pointsGained) > Math.floor(context.$store.state.points)){
      context.$store.commit("toggleDab");
    }
    context.$store.dispatch('addPoints', pointsGained);
    if(context.$store.state.pointsPerSecond > 500) {
      clearInterval(intervalObj);
      startInterval(context, 200)
    }

  }, interval);
}

function tomatoHeadPowerup(context) {
  context.$store.commit('addPointsPerSecond', 0.2);
}

function peelySkinPowerup(context) {
  context.$store.commit("addPointsPerClick", 1);
}

function fishsticksSkinPowerup(context) {
  context.$store.commit('addPointsPerSecond', 1);
}

export {handlePowerup, startInterval}
