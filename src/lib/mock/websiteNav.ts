export enum WEBSITE_NAV {
  ABOUT = "About",
  CONTACTS = "Contacts",
}

export const websiteNavObj: {
  [key in `${WEBSITE_NAV}`]: { title: string; href: string };
} = {
  [WEBSITE_NAV.ABOUT]: { title: "Обо мне", href: "#about" },
  [WEBSITE_NAV.CONTACTS]: { title: "Обратная связь", href: "#contacts" },
};

export const websiteNavArr = [
  websiteNavObj.About,
  websiteNavObj.Contacts,
];
