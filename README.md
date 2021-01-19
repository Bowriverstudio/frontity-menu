# frontity-menu

This package helps fetch the menu from wordpress.  It requires setup in both wordpress and frontity.

## Wordpress

### Theme

In the theme we need to define the nav menus.

```php

 register_nav_menus([
        'primary_menu' => __('Primary Menu', 'brs'),
        'footer_menu' => __('Footer Menu', 'brs'),
    ]);

```

### Plugins

Also we need to expose an endpoint via the plugin
`wp-rest-api-v2-menus`

To install the plugin use: `wp plugin install wp-rest-api-v2-menus --activate`

### Postman

To test if this works expect with a GET request.

https://example.com/wp-json/menus/v1/locations/${slug}

## Setup Frontity

`npm i frontity-menu`

In `frontity.settings.js` add:

```js

{
  name: "frontity-menu",
  state: {
    frontityMenu: {
      menuSlugs: ["primary_menu"] 
    }
  },
},

```

## Usage

```js

  import { MenuData } from "frontity-menu/types"


  const { items } = state.source.get("/menus/primary_menu/") as MenuData

  return (
    <>
      {Object.entries(items).map(([key, item]) => {
        const { url, title } = item;
        const link = libraries.source.normalize(url);
        return (
            <Link
                key={key}
                link={link}
                aria-current={ariaCurrent}
                onClick={() => closeMobileMenu()}
                >
                {title}
             </Link>
        );
      })}
    </>
  );

```


