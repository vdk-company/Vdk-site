const products = [
  // Азот
  {
    id: "azot1",
    category: "Азот",
    name: "Азот",
    volumeOptions: [
      { volume: "10 л", price: 10000 },
      { volume: "40 л", price: 22000 },
    ],
    image: "images/azot.png",
  },
  {
    id: "azotOch",
    category: "Азот",
    name: "Азот ОЧ",
    volumeOptions: [{ volume: "40 л", price: 22000 }],
    image: "images/azot_och.png",
  },

  // Аргон
  {
    id: "argon1",
    category: "Аргон",
    name: "Аргон (40л/6.3 м3)",
    volumeOptions: [{ volume: "40 л", price: 15000 }],
    image: "images/argon_40l.png",
  },
  {
    id: "argonSpecial",
    category: "Аргон",
    name: "Аргон Особ. Чистоты",
    volumeOptions: [{ volume: "40 л", price: 22000 }],
    image: "images/argon_special.png",
  },
  {
    id: "argon10",
    category: "Аргон",
    name: "Аргон 10л (газ)",
    volumeOptions: [{ volume: "10 л", price: 6000 }],
    image: "images/argon_10l.png",
  },

  // Ацетилен
  {
    id: "acetylene",
    category: "Ацетилен",
    name: "Ацетилен",
    volumeOptions: [{ volume: "40 л", price: 47900 }],
    image: "images/acetylene.png",
  },

  // Кислород
  {
    id: "oxygen",
    category: "Кислород",
    name: "Кислород",
    volumeOptions: [
      { volume: "10 л", price: 3000 },
      { volume: "40 л", price: 3500 },
    ],
    image: "images/oxygen.png",
  },

  // Пропан
  {
    id: "propaneSmall",
    category: "Пропан",
    name: "Пропан мал.",
    volumeOptions: [{ volume: "10 кг", price: 2500 }],
    extraPrices: { tara: 9000, ventil: 4000 },
    image: "images/propane_small.png",
  },
  {
    id: "propaneLarge",
    category: "Пропан",
    name: "Пропан бол. (20кг)",
    volumeOptions: [{ volume: "20 кг", price: 5000 }],
    extraPrices: { tara: 26000 },
    image: "images/propane_large.png",
  },

  // Углекислота
  {
    id: "co2_40",
    category: "Углекислота",
    name: "Углекислота (40 л)",
    volumeOptions: [{ volume: "40 л", price: 25000 }],
    image: "images/co2_40l.png",
  },
  {
    id: "co2_20",
    category: "Углекислота",
    name: "Углекислота (20 л)",
    volumeOptions: [{ volume: "20 л", price: 23000 }],
    image: "images/co2_20l.png",
  },
  {
    id: "co2_10",
    category: "Углекислота",
    name: "Углекислота (10 л)",
    volumeOptions: [{ volume: "10 л", price: 11000 }],
    image: "images/co2_10l.png",
  },
  {
    id: "co2_5",
    category: "Углекислота",
    name: "Углекислота (5 л)",
    volumeOptions: [{ volume: "5 л", price: 6000 }],
    image: "images/co2_5l.png",
  },

  // Тара
  {
    id: "tara_10l",
    category: "Тара",
    name: "Тара (любой газ, кроме ацетилена) 10 л",
    volumeOptions: [{ volume: "10 л", price: 57700 }],
    image: "images/tara_10l.png",
  },
  {
    id: "tara_40l_pereatt",
    category: "Тара",
    name: "Тара (40 л) переаттестованный",
    volumeOptions: [{ volume: "40 л", price: 62000 }],
    image: "images/tara_40l_pereatt.png",
  },
  {
    id: "tara_40l_new",
    category: "Тара",
    name: "Тара (40 л) новый",
    volumeOptions: [{ volume: "40 л", price: 107900 }],
    image: "images/tara_40l_new.png",
  },

  // Пропан дополнительные
  {
    id: "propane_small_10kg",
    category: "Пропан",
    name: "Пропан мал. (10 кг)",
    volumeOptions: [{ volume: "10 кг", price: 9000 }],
    image: "images/propane_small_10kg.png",
  },
  {
    id: "ventil",
    category: "Пропан",
    name: "Вентиль",
    volumeOptions: [{ volume: "шт", price: 4000 }],
    image: "images/ventil.png",
  },
  {
    id: "propane_big_20kg",
    category: "Пропан",
    name: "Пропан бол. (20 кг)",
    volumeOptions: [{ volume: "20 кг", price: 26000 }],
    image: "images/propane_big_20kg.png",
  }
  // Добавь остальные товары из ссылок по такому же шаблону
];
