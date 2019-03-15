function handlePowerup(context, identifier) {
  switch (identifier) {
    case "Tomato":
      context.$store.commit('addPointsPerSecond', 1);
      break;
    case "Peely":
      context.$store.commit("addPointsPerClick", 1);
      break;
    case "Fishstick":
      context.$store.commit('addPointsPerSecond', 5);
      break;
    case "SkullTrooper":
      context.$store.commit('addPointsPerSecond', 20);
      break;
    case "Victory":
      Victory(context);
      break;
    default:
  }
  console.log(identifier);
}
function startInterval(context, interval = 10) {

  let divider = 1000 / interval;
  setInterval(() => {
    let pointsGained = context.$store.state.pointsPerSecond / divider;
    console.log(pointsGained);
    context.$store.dispatch('addPoints', pointsGained);
  }, interval);
}

function Victory(context) {
  context.$store.dispatch('toggleModal')
}

export {handlePowerup, startInterval}
