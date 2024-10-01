// const button = document.querySelector("button");
// const body = document.querySelector("body");
// const lightModeTitle = "Good Morning";
// const darkModeTitle = "Good Night";

// button.addEventListener("click", function () {
//   body.classList.toggle("darkmode");
//   button.classList.toggle("darkmode-button");
//   if (document.title === lightModeTitle) {
//     document.title = darkModeTitle;
//   } else {
//     document.title = lightModeTitle;
//   }
// });

Vue.createApp({
  data() {
    return {
      onClassName: "darkmode",
      isDarkmode: false,
      text: "",
    };
  },
  methods: {
    toggleLight() {
      this.isDarkmode = !this.isDarkmode;

      if (this.isDarkmode) {
        this.text = "Good Night";
      } else {
        this.text = "Good Morning";
      }

      document.title = this.text;
      document.body.classList.toggle(this.onClassName);
    },
  },
}).mount("#app");
