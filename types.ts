import Data from "@frontity/source/types";
import WpSource from "@frontity/wp-source/types";
import { MergePackages, Package, ServerAction } from "frontity/types";

export interface FrontityMenu extends Package {
  name: "frontity-menu";
  actions: {
    frontitymenu: {
      /**
       * Before SSR action, to fetch the menu content from the REST API.
       */
      beforeSSR: ServerAction<Packages>;
    };
  };
}

/**
 * Data for a Menu
 */
export interface MenuData extends Data {
  /**
   * Menu Items
   */
  items: [NavigationMenuItem];
}

type NavigationMenuItem = {
  /**
   * Title of the menu item.
   */
  title: string;
  /**
   * URL of the menu item.
   */
  url: string;
};

/**
 * Packages used internally.
 */
export type Packages = MergePackages<FrontityMenu, WpSource>;
