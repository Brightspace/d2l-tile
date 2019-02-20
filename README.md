# d2l-card
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/card)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/)-based web component for cards.

<img src="/screenshots/d2l-card.gif?raw=true">

## Installation

`d2l-card` can be installed from [Bower][bower-url]:
```shell
bower install d2l-card
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) polyfill loader (for browsers who don't natively support web components), then import `d2l-card.html`:

```html
<head>
  <script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
  <link rel="import" href="bower_components/d2l-card/d2l-card.html">
</head>
```

Then add the `d2l-card`, provide an `href` if relevant, and provide elements for the slots as needed.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-loader.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-card.html">
    <link rel="import" href="../d2l-dropdown/d2l-dropdown-more.html">
    <link rel="import" href="../d2l-dropdown/d2l-dropdown-content.html">
    <link rel="import" href="../d2l-button/d2l-button-icon.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      }
      d2l-card {
        height: 300px;
        width: 240px;
      }
      .course-image {
        display: block;
        width: 100%;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-card text="Hydrogeology" href="https://en.wikipedia.org/wiki/Hydrogeology">
	<img slot="header" alt="" class="course-image" src="https://s.brightspace.com/course-images/images/38e839b1-37fa-470c-8830-b189ce4ae134/tile-high-density-max-size.jpg" />
	<d2l-dropdown-more slot="actions" translucent visible-on-ancestor text="Open!">
		<d2l-dropdown-content><div>This is where you could put the super cool features for your card!</div><br><div>As with all d2l-dropdowns, you can choose between a generic dropdown container, or a menu specific one.</div></d2l-dropdown-content>
	</d2l-dropdown-more>
	<d2l-button-icon slot="actions" translucent text="unpin" icon="d2l-tier1:pin-filled"></d2l-button-icon>
	<div slot="content">Hydrogeology</div>
	<div slot="footer">Secondary Actions</div>
</d2l-card>
```

***Slots:***

* `content` (required): The primary content such as title and supplementary info (no actionable elements)
* `header` (optional): Header content, such as course image (no actionable elements)
* `footer` (optional): Footer content, such secondary actions
* `badge` (optional): Badge content, such as a profile image or status indicator
* `actions` (optional): Buttons and dropdown openers to be placed in top right corner of header

***Properties:***

* `text` (required): accessible text for the card (will be announced when AT user focused on card)
* `href` (optional): the location for the primary action/navigation
* `subtle` (optional): used for a subtle aesthetic on non-white backgrounds
* other link properties as defined by [D2L.PolymerBehaviors.Link.Behavior](https://github.com/BrightspaceUI/link/blob/master/d2l-link-behavior.html)

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-card
[bower-image]: https://badge.fury.io/bo/d2l-card.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/card
[ci-image]: https://travis-ci.org/BrightspaceUI/card.svg?branch=master
