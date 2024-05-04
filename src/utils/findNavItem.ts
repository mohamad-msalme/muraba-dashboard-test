import { NavConfig } from "../layout/nav/config";

export const findNavItem = (
  config: NavConfig[],
  path: string
): NavConfig | undefined => {
  for (const item of config) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      const found = findNavItem(item.children, path);
      if (found) {
        return found;
      }
    }
  }
};
