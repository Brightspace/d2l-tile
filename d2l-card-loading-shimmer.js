/*
`d2l-card-loading-shimmer` is a Polymer-based web component for implementing a loading shimmer for a card.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-colors/d2l-colors.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-card-loading-shimmer">
	<template strip-whitespace="">
		<style>
			:host([hidden]) {
				display: none;
			}

			@keyframes loadingShimmer {
				0% { transform: translate3d(-100%, 0, 0); }
				100% { transform: translate3d(100%, 0, 0); }
			}

			.card-loading-shimmer {
				background-color: var(--d2l-color-regolith);
				border-radius: 7px 7px 0 0;
				box-shadow: inset 0 -1px 0 0 var(--d2l-color-gypsum);
				overflow: hidden;
				position: relative;
				height: inherit;
			}

			.card-loading-shimmer::after {
				animation: loadingShimmer 1.5s ease-in-out infinite;
				background: linear-gradient(90deg, rgba(249, 250, 251, 0.1), rgba(114, 119, 122, 0.1), rgba(249, 250, 251, 0.1));
				background-color: var(--d2l-color-regolith);
				content: '';
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}
		</style>

		<div hidden$="[[!loading]]" class="card-loading-shimmer"></div>
		<div hidden$="[[loading]]">
			<slot></slot>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-card-loading-shimmer',
	properties: {
		loading: {
			type: Boolean,
			value: false
		}
	}
});
