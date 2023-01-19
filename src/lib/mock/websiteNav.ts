export enum WEBSITE_NAV {
  ABOUT = "About",
  CONTACTS = "Contacts",
  LOCATION = "Location",
}

export const websiteNavObj: {
  [key in `${WEBSITE_NAV}`]: { title: string; href: string };
} = {
  [WEBSITE_NAV.ABOUT]: { title: "Обо мне", href: "#about" },
  [WEBSITE_NAV.CONTACTS]: { title: "Обратаня связь", href: "#contacts" },
  [WEBSITE_NAV.LOCATION]: { title: "Адрес", href: "#address" },
};

export const websiteNavArr = [
  websiteNavObj.About,
  websiteNavObj.Contacts,
  websiteNavObj.Location,
];
