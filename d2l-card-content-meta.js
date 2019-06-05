/**
`d2l-card-content-meta`
Polymer-based web component for card meta-data

@demo demo/d2l-card.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-card-content-meta">

	<template strip-whitespace="">
		<style>
			:host {
				box-sizing: border-box;
				color: var(--d2l-color-tungsten);
				font-size: 0.7rem;
				font-weight: 400;
				display: inline-block;
				line-height: 1rem;
			}
			:host span {
				display: inline-block;
			}
		</style>
		<span><slot></slot></span>
	</template>



</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-card-content-meta'
});
