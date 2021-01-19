import { Handler, Pattern } from "@frontity/wp-source/types";

export const menuHandler: Pattern<Handler> = {
  name: "frontity-menus",
  priority: 10,
  pattern: "/menus/:slug",
  func: async ({ link, params, state, libraries }) => {
    const { api } = libraries.source;
    const { slug } = params;

    // 1. fetch   the data you want from the endpoint page
    const response = await api.get({
      endpoint: `/menus/v1/locations/${slug}`, // Instead of using params, this plugin requires a slug be part of the link. We are also using "locations" to get menu locations instead of a specific menu
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[link];
    Object.assign(currentPageData, {
      slug,
      items: items.items,
      isMenu: true,
    });
  },
};

export default menuHandler;
