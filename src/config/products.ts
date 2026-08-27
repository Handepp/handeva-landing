export type Product = {
  id: string;
  name: string;
  description: string;
  actionLabel: string;
  url: string;
  icon: "crossroads" | "cek" | "rundown";
};

export const products: Product[] = [
  {
    id: "01",
    name: "LifeCrossroads",
    description: "A tool for navigating life's decisions.",
    actionLabel: "Open LifeCrossroads",
    url: "https://www.lifecrossroads.my.id/",
    icon: "crossroads",
  },
  {
    id: "02",
    name: "CekKamu",
    description: "Interactive experiences to discover yourself.",
    actionLabel: "Open CekKamu",
    url: "https://cekkamu.my.id/",
    icon: "cek",
  },
  {
    id: "03",
    name: "Rundown.live",
    description: "Plan and manage events in real time.",
    actionLabel: "Open Rundown",
    url: "https://app.rundownlive.my.id/",
    icon: "rundown",
  },
];
