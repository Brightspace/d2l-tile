import '../@polymer/polymer/polymer-legacy.js';
import '../d2l-colors/d2l-colors.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-image-tile-base">
	<template strip-whitespace="">
		<style>
			:host {
				border-color: inherit;
			}

			.d2l-image-tile-base-link {
				color: var(--d2l-color-ferrite);
				text-decoration: none;
				border-color: inherit;
			}

			.d2l-image-tile-base-div {
				border-color: inherit;
			}
		</style>
		<template is="dom-if" if="[[_hasHref(href)]]" restamp="true">
			<a class="d2l-image-tile-base-link" href$="[[href]]" tabindex$="[[specifiedTabIndex]]">
				<slot name="d2l-image-tile-base-content"></slot>
			</a>
		</template>
		<template is="dom-if" if="[[!_hasHref(href)]]" restamp="true">
			<div class="d2l-image-tile-base-div" tabindex$="[[specifiedTabIndex]]">
				<slot name="d2l-image-tile-base-content"></slot>
			</div>
		</template>
		<slot name="d2l-image-tile-base-menu-area"></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-image-tile-base',
	properties: {
		href: {
			type: String,
			value: null
		},
		specifiedTabIndex: {
			type: String,
			value: '0'
		}
	},
	_hasHref: function(href) {
		return href !== undefined && href !== null;
	}
});
