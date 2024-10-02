// const body = document.querySelector("body");
// const p = document.querySelector("p");
// const slider1 = document.querySelector("#red");
// const slider2 = document.querySelector("#green");
// const slider3 = document.querySelector("#blue");

// slider1.addEventListener("input", function () {
//   changeBackground();
// });

// slider1.addEventListener("input", changeBackground);

// slider2.addEventListener("input", function () {
//   changeBackground();
// });
// slider3.addEventListener("input", function () {
//   changeBackground();
// });

// function changeBackground() {
//   let red = slider1.value;
//   let green = slider2.value;
//   let blue = slider3.value;
//   let hexR = parseInt(red).toString(16);
//   let hexG = parseInt(green).toString(16);
//   let hexB = parseInt(blue).toString(16);
//   if (hexR.length === 1) {
//     hexR = "0" + hexR;
//   }
//   if (hexG.length === 1) {
//     hexG = "0" + hexG;
//   }
//   if (hexB.length === 1) {
//     hexB = "0" + hexB;
//   }
//   p.innerText = "#" + hexR + hexG + hexB;
//   body.style.background = "rgba(" + red + "," + green + "," + blue + ")";
// }

// changeBackground();

function getHexValue(decimalValue) {
  let hexValue = parseInt(decimalValue).toString(16);
  if (hexValue.length === 1) {
    hexValue = "0" + hexValue;
  }
  return hexValue;
}

Vue.createApp({
  data() {
    return {
      red: 20,
      green: 50,
      blue: 50,
    };
  },
  computed: {
    rgb() {
      return `rgb(${this.red},${this.green},${this.blue})`;
    },
    hexCode() {
      const hexR = getHexValue(this.red);
      const hexG = getHexValue(this.green);
      const hexB = getHexValue(this.blue);

      return "#" + hexR + hexG + hexB;
    },
  },
  methods: {
    onSliderValueChange() {
      document.body.style.background = this.rgb;
    },
  },
}).mount("#app");
