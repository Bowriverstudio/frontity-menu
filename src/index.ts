import { FrontityMenu } from "../types";
import menuHandler from "./handlers/menuHandler";

const myFrontityMenu: FrontityMenu = {
  name: "frontity-menu",
  actions: {
    frontitymenu: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all(
          state.frontityMenu.menuSlugs.map((slug) =>
            actions.source.fetch(`/menus/${slug}`)
          )
        );
      },
    },
  },
  libraries: {
    source: {
      handlers: [menuHandler],
    },
  },
};

export default myFrontityMenu;
