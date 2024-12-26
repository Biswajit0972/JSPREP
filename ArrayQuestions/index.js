const europeanCities = ["paris", "rome"]
const asianCities = ["tokyo", "bangkok"]
const worldCities = europeanCities.concat(asianCities)
const res = worldCities.filter((item) => {
  if (item === "paris") {
      return "paris found"
  }

})

console.log(res)
