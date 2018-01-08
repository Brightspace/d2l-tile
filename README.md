# d2l-tile
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/tile)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org/1.0/)-based web components for D2L tiles.

![screenshot of text input component](/tile.gif?raw=true)

## Installation

`d2l-tile` can be installed from [Bower][bower-url]:

```shell
bower install d2l-tile
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import either `d2l-tile.html` or `d2l-image-tile.html` as needed:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
	<!-- imports here -->
</head>
```

### d2l-tile

`<d2l-tile>` is a barebones bordered container for arbitrary content.

```html
<link rel="import" href="bower_components/d2l-tile/d2l-tile.html">
<d2l-tile>
	<p>Anything can go in here!</p>
</d2l-tile>
```

### d2l-image-tile

An extension of `<d2l-tile>`, `<d2l-image-tile>` adds an image at the top, content at the bottom, and an optional `...` "more" menu which can launch a [d2l-dropdown-menu](https://github.com/BrightspaceUI/dropdown#menu-content).

Basic example using a URL-based image:

```html
<link rel="import" href="bower_components/d2l-tile/d2l-image-tile.html">
<d2l-image-tile img-url="path-to-image.png">
	Content below image.
</d2l-image-tile>
```

Alternatively, you can provide custom image content in the `d2l-image-tile-image` slot instead of the `image-url` attribute:

```html
<d2l-image-tile>
	<div slot="d2l-image-tile-image">
		<p>Custom image content</p>
	</div>
</d2l-image-tile>
```

#### "More" menu

To display a `...` "more" dropdown, provide content inside the `d2l-image-tile-dropdown` slot.

**Note:** always provide an accessible label for the menu using the `dropdown-label` attribute.

```html
<link rel="import" href="bower_components/d2l-menu/d2l-menu.html">
<link rel="import" href="bower_components/d2l-menu/d2l-menu-item.html">
<d2l-image-tile dropdown-label="Tile Options">
	<d2l-dropdown-menu slot="d2l-image-tile-dropdown">
		<d2l-menu>
			<d2l-menu-item text="Menu item one"></d2l-menu-item>
			<d2l-menu-item text="Menu item two"></d2l-menu-item>
			<d2l-menu-item text="Menu item three"></d2l-menu-item>
		</d2l-menu>
	</d2l-dropdown-menu>
</d2l-image-tile>
```

The `...` menu will always show on mobile, unless you set the `no-mobile-more-button` attribute to true.

#### Menu-adjacent content

If you need to add an element to the right of the "more" menu, you can use the `d2l-image-tile-menu-adjacent` slot.

#### Loading State

The image tile can be placed in an initial "loading" state:

```html
<d2l-image-tile loading>
	...
</d2l-image-tile>
```

#### Specifying the image height

You can set the height of the image in the tile using the `--d2l-image-tile-image-height` CSS property:

```html
<style>
	d2l-image-tile {
		--d2l-image-tile-image-height: 100px;
	}
</style>
```

#### Custom image background

A custom background can also be supplied for where the image is placed using the `--d2l-image-tile-image-background` CSS property:

```html
<style>
	d2l-image-tile {
		--d2l-image-tile-image-background: #0000ff;
	}
</style>
```

### Hover Effects

Both `<d2l-tile>` and `<d2l-image-tile>` support setting an effect for when the user hovers over the tile. It's a space separated list of hover effects, which can currently include:
- low-lift: tile lifts slightly off the page

`d2l-image-tile` specific hover effects:
- emphasize-image: The image zooms in and it's colors saturate
- lower-menu: the menu lowers slightly when the tile is hovered

```html
<d2l-tile hover-effect="low-lift">
...
</d2l-tile>
```

## Advanced Usage

### What if I want something partially overlapping the image???

Stick it at the top of the content area and give it a negative top margin.

### What if I want to make the tile clickable, but have another clickable element within

Add a click event handler onto the tile, and on the inner clickable element add an event handler with: `e.stopPropagation();`

### React doesn't like the named slot parameters

You can get around this by wrapping the d2l-tile element in something other than react (like polymer!)

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

Install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-tile
[bower-image]: https://badge.fury.io/bo/d2l-tile.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/tile
[ci-image]: https://travis-ci.org/BrightspaceUI/tile.svg?branch=master
