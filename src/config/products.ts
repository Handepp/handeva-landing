export type Product = {
  id: string;
  name: string;
  description: string;
  actionLabel: string;
  url: string;
  icon: "alt_route" | "verified_user" | "event_available";
};

export const products: Product[] = [
  {
    id: "01",
    name: "LifeCrossroads",
    description: "Tools for navigating life's decisions.",
    actionLabel: "Open LifeCrossroads",
    url: "https://www.lifecrossroads.my.id/",
    icon: "alt_route",
  },
  {
    id: "02",
    name: "CekKamu",
    description: "Discover yourself through interactive experiences.",
    actionLabel: "Open CekKamu",
    url: "https://cekkamu.my.id/",
    icon: "verified_user",
  },
  {
    id: "03",
    name: "RundownLive",
    description: "Plan and manage events in real time.",
    actionLabel: "Open Rundown",
    url: "https://app.rundownlive.my.id/",
    icon: "event_available",
  },
];
