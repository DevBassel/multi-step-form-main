import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
const plans = {
  plan: [
    {
      id: 1,
      name: "arcade",
      planMo: 9,
      planY: 90,
      img: arcade,
    },
    {
      id: 2,
      name: "advanced",
      planMo: 12,
      planY: 120,
      img: advanced,
    },
    {
      id: 3,
      name: "pro",
      planMo: 15,
      planY: 150,
      img: pro,
    },
  ],
  ons: {
    monthly: [
      {
        id: 1,
        title: "Online service",
        dis: "Access to multiplayer games",
        price: 1,
      },
      {
        id: 2,
        title: "Larger storage",
        dis: "Extra 1TB of cloud save",
        price: 1,
      },
      {
        id: 3,
        title: "Customizable Profile",
        dis: "Custom theme on your profile",
        price: 2,
      },
    ],
    yearly: [
      {
        id: 1,
        title: "Online service",
        dis: "Access to multiplayer games",
        price: 10,
      },
      {
        id: 2,
        title: "Larger storage",
        dis: "Extra 1TB of cloud save",
        price: 20,
      },
      {
        id: 3,
        title: "Customizable Profile",
        dis: "Custom theme on your profile",
        price: 20,
      },
    ],
  },
};

export default plans;
