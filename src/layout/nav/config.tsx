import { paths } from "../../routes";

export type NavConfig = {
  path: string;
  label: string;
  icon: string;
  children?: { path: string; label: string; icon: string }[];
};
export const navConfig = [
  {
    path: paths.dashboard.root,
    label: "الرئيسية",
    icon: "eva:home-outline",
  },
  {
    path: paths.dashboard.store,
    label: "المتجر الالكتروني",
    icon: "ic:baseline-store",
    children: [
      {
        path: paths.dashboard.storeBuy,
        label: "وجبات الشراء",
        icon: "eva:shopping-bag-outline",
      },
      {
        path: paths.dashboard.storeProducts,
        label: "قوالب المنتجات",
        icon: "eva:pricetags-outline",
      },
      {
        path: paths.dashboard.storeProductMoves,
        label: "حركة المنتجات",
        icon: "eva:file-remove-outline",
      },
    ],
  },
  {
    path: paths.dashboard.storage,
    label: "المستودعات",
    icon: "eva:shopping-bag-outline",
  },
  {
    path: paths.dashboard.warehouse,
    label: "المخازن",
    icon: "eva:pricetags-outline",
  },
];
