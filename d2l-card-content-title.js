/**
`d2l-card-content-title`
Polymer-based web component for card title

@demo demo/d2l-card.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-card-content-title">

	<template strip-whitespace="">
		<style>
			:host {
				box-sizing: border-box;
				font-size: 0.95rem;
				font-weight: 400;
				display: block;
				line-height: 1.4rem;
			}
		</style>
		<slot></slot>
	</template>

	

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-card-content-title'
});
