const axios = require("axios");
async function get() {
  try {
    let response = await axios.get("https://httpstat.us/500");
    console.log("response");
  } catch (error) {
    console.log("error");
  }
}

get();
console.log("Hello");
