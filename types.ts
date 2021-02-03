import Data from "@frontity/source/types";
import WpSource from "@frontity/wp-source/types";
import { MergePackages, Package, ServerAction } from "frontity/types";

/**
 * Helper package to assist fetching the menu from the WP API.
 */
export interface FrontityMenu extends Package {
  /**
   *  Name of the package.
   */
  name: "frontity-menu";
  /**
   * The actions exposed by this package.
   */
  actions: {
    /**
     * Frontitymenu namespace.
     */
    frontitymenu: {
      /**
       * Before SSR action, to fetch the menu content from the REST API.
       */
      beforeSSR: ServerAction<Packages>;
    };
  };
}

/**
 * Data for a Menu.
 */
export interface MenuData extends Data {
  /**
   * Menu Items.
   */
  items: [NavigationMenuItem];
}

/**
 * TODO a subset of the data returned from the API.
 */
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
