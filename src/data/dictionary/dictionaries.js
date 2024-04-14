const dictionaries = {
  en: () => import("./languages/en.json").then((module) => module.default),
  bn: () => import("./languages/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
