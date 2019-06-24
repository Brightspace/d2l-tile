/**
`d2l-card`
Polymer-based web components for card

@demo demo/d2l-card.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import 'fastdom/fastdom.js';
import 'd2l-link/d2l-link-behavior.js';
import 'd2l-offscreen/d2l-offscreen-shared-styles.js';
import 'd2l-polymer-behaviors/d2l-dom.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import ResizeObserver from 'resize-observer-polyfill/dist/ResizeObserver.es.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-card">

	<template strip-whitespace="">
		<style include="d2l-offscreen-shared-styles">
			:host {
				background-color: #ffffff;
				border: 1px solid var(--d2l-color-gypsum);
				border-radius: 6px;
				box-sizing: border-box;
				display: inline-block;
				position: relative;
				transition: transform 300ms ease-out 50ms, box-shadow 0.2s;
				z-index: 0;
			}
			.d2l-card-container {
				align-items: flex-start; /* required so that footer will not stretch to 100% width */
				display: flex;
				flex-direction: column;
				position: relative;
				height: 100%;
			}
			.d2l-card-link-container {
				border-radius: 6px;
				overflow: hidden;
				flex-grow: 1;
				flex-shrink: 1;
				flex-basis: auto;
				width: 100%; /* required for Edge and FF when align-items: flex-start is specified */
			}
			.d2l-card-link-text {
				display: inline-block;
				@apply --d2l-offscreen;
			}

			:host(:dir(rtl)) .d2l-card-link-text {
				@apply --d2l-offscreen-rtl
			}

			a.d2l-focusable {
				display: block;
				position: absolute;
				height: 100%;
				outline: none;
				width: 100%;
				z-index: 1;
			}
			.d2l-card-content {
				padding: 1.2rem 0.8rem 0 0.8rem;
			}
			.d2l-card-footer-hidden .d2l-card-content {
				padding-bottom: 1.2rem;
			}
			.d2l-card-actions {
				position: absolute;
				right: 0.6rem;
				top: 0.6rem;
				/* this must be higher than footer z-index so dropdowns will be on top */
				z-index: 3;
			}
			:host(:dir(rtl)) .d2l-card-actions {
				left: 0.6rem;
				right: auto;
			}
			.d2l-card-actions ::slotted(*) {
				margin-left: 0.3rem;
			}
			:host(:dir(rtl)) .d2l-card-actions ::slotted(*) {
				margin-left: 0;
				margin-right: 0.3rem;
			}
			.d2l-card-badge {
				line-height: 0;
				padding: 0 0.8rem;
			}
			.d2l-card-footer {
				flex: none;
				padding: 1.2rem 0.8rem 0.6rem 0.8rem;
				z-index: 2;
				width: 100%;
				box-sizing: border-box;
				pointer-events: none;
			}

			.d2l-card-footer ::slotted([slot="footer"]) {
				pointer-events: all;
			}

			.d2l-card-footer-hidden .d2l-card-footer {
				@apply --d2l-offscreen;
				box-sizing: content-box;
				height: auto;
			}
			:host(:dir(rtl)) .d2l-card-footer-hidden .d2l-card-footer {
				@apply --d2l-offscreen-rtl
			}
			:host([subtle]) {
				border: none;
				box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);
			}
			:host(:hover),
			:host([subtle]:hover) {
				transform: translateY(-4px);
			}
			:host(:hover) {
				box-shadow: 0 2px 14px 1px rgba(0,0,0,0.06);
			}
			:host([subtle]:hover) {
				box-shadow: 0 4px 18px 2px rgba(0,0,0,0.06);
			}
			:host([active]) {
				border-color: transparent;
				box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px var(--d2l-color-celestine);
			}
			:host([active]:hover),
			:host([subtle][active]:hover) {
				border-color: transparent;
				box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px var(--d2l-color-celestine);
				transform: translateY(-4px);
			}
			/* The .d2l-card-link-container-hover is used to only color/underline when
			hovering the anchor. These styles are not applied when hovering actions. */
			:host([href]) .d2l-card-link-container-hover,
			:host([href][active]) .d2l-card-content {
				color: var(--d2l-color-celestine);
				text-decoration: underline;
			}
			/* this is needed to ensure tooltip is not be clipped by adjacent cards */
			:host([tooltip-showing]) {
				z-index: 1;
			}
			/* this is needed to ensure open menu will be ontop of adjacent cards */
			:host([dropdown-action-open]) {
				z-index: 2;
			}
			:host(:not([href])),
			:host([subtle]:not([href])) {
				box-shadow: none;
				transform: none;
			}
			@media (prefers-color-scheme: dark) {
				:host,
				:host([subtle]) {
					background-color: var(--d2l-color-dark-mode-2);
					border: 1px solid transparent;
				}
				:host([active]) {
					box-shadow: 0 0 0 2px var(--d2l-color-dark-mode-2), 0 0 0 4px var(--d2l-color-celestine-plus-1);
				}
				:host([active]:hover),
				:host([subtle][active]:hover) {
					box-shadow: 0 0 0 2px var(--d2l-color-dark-mode-2), 0 0 0 4px var(--d2l-color-celestine-plus-1);
				}
				:host([href]) .d2l-card-link-container-hover,
				:host([href][active]) .d2l-card-content {
					color: var(--d2l-color-celestine-plus-1);
				}
			}
		</style>
		<div class="d2l-card-container d2l-visible-on-ancestor-target d2l-card-footer-hidden">
			<a class="d2l-focusable" download$="[[download]]" href$="[[href]]" hreflang="[[hreflang]]" rel="[[rel]]" target="[[target]]" type="[[type]]">
				<span class="d2l-card-link-text">[[text]]</span>
			</a>
			<div class="d2l-card-link-container">
				<div class="d2l-card-header"><slot name="header"></slot></div>
				<div class="d2l-card-badge"><slot name="badge"></slot></div>
				<div class="d2l-card-content"><slot name="content"></slot></div>
			</div>
			<div class="d2l-card-actions"><slot name="actions"></slot></div>
			<div class="d2l-card-footer"><slot name="footer"></slot></div>
		</div>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-card',

	behaviors: [
		D2L.PolymerBehaviors.Link.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior
	],

	properties: {

		/**
		 * Indicates whether subtle container style should be applied (for non-white backgrounds).
		 */
		subtle: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Accessible text for the link (not visible, gets announced when user focuses on card).
		 */
		text: {
			type: String,
			reflectToAttribute: true
		}

	},

	ready: function() {
		this._onBadgeResize = this._onBadgeResize.bind(this);
		this._onFooterResize = this._onFooterResize.bind(this);
		this._onLinkBlur = this._onLinkBlur.bind(this);
		this._onLinkFocus = this._onLinkFocus.bind(this);
		this._onLinkMouseEnter = this._onLinkMouseEnter.bind(this);
		this._onLinkMouseLeave = this._onLinkMouseLeave.bind(this);
		this._onDropdownOpen = this._onDropdownOpen.bind(this);
		this._onDropdownClose = this._onDropdownClose.bind(this);
		this._onTooltipShow = this._onTooltipShow.bind(this);
		this._onTooltipHide = this._onTooltipHide.bind(this);
	},

	attached: function() {
		var badge = dom(this.root).querySelector('.d2l-card-badge');
		var footer = dom(this.root).querySelector('.d2l-card-footer');
		this._badgeObserver = new ResizeObserver(this._onBadgeResize);
		this._badgeObserver.observe(badge);
		this._footerObserver = new ResizeObserver(this._onFooterResize);
		this._footerObserver.observe(footer);
		afterNextRender(this, function() {
			var link = dom(this.root).querySelector('a');
			link.addEventListener('blur', this._onLinkBlur);
			link.addEventListener('focus', this._onLinkFocus);
			link.addEventListener('mouseenter', this._onLinkMouseEnter);
			link.addEventListener('mouseleave', this._onLinkMouseLeave);
			this.addEventListener('d2l-dropdown-open', this._onDropdownOpen);
			this.addEventListener('d2l-dropdown-close', this._onDropdownClose);
			this.addEventListener('d2l-tooltip-show', this._onTooltipShow);
			this.addEventListener('d2l-tooltip-hide', this._onTooltipHide);
		}.bind(this));
	},

	detached: function() {
		var badge = dom(this.root).querySelector('.d2l-card-badge');
		var footer = dom(this.root).querySelector('.d2l-card-footer');
		if (this._badgeObserver) this._badgeObserver.unobserve(badge);
		if (this._footerObserver) this._footerObserver.unobserve(footer);
		var link = dom(this.root).querySelector('a');
		link.removeEventListener('blur', this._onLinkBlur);
		link.removeEventListener('focus', this._onLinkFocus);
		link.removeEventListener('mouseenter', this._onLinkMouseEnter);
		link.removeEventListener('mouseleave', this._onLinkMouseLeave);
		this.removeEventListener('d2l-dropdown-open', this._onDropdownOpen);
		this.removeEventListener('d2l-dropdown-close', this._onDropdownClose);
		this.removeEventListener('d2l-tooltip-show', this._onTooltipShow);
		this.removeEventListener('d2l-tooltip-hide', this._onTooltipHide);
	},

	_getContainer: function() {
		return dom(this.root).querySelector('.d2l-card-container');
	},

	_onBadgeResize: function(entries) {
		if (!entries || entries.length === 0) {
			return;
		}
		var entry = entries[0];
		fastdom.mutate(function() {
			entry.target.style.marginTop = (-0.5 * entry.contentRect.height) + 'px';
		});
	},

	_onDropdownOpen: function() {
		this.setAttribute('dropdown-action-open', 'dropdown-action-open');
	},

	_onDropdownClose: function() {
		this.removeAttribute('dropdown-action-open');
	},

	_onTooltipShow: function() {
		this.setAttribute('tooltip-showing', 'tooltip-showing');
	},

	_onTooltipHide: function() {
		this.removeAttribute('tooltip-showing');
	},

	_onFooterResize: function(entries) {
		if (!entries || entries.length === 0) {
			return;
		}
		var container = dom(this.root).querySelector('.d2l-card-container');
		var entry = entries[0];
		// firefox has a rounding error when calculating the height of the contentRect with `box-sizing: border-box;`
		// so check for numbers which are close to 0 as well
		if (entry.contentRect.height < 1 && !container.classList.contains('d2l-card-footer-hidden')) {
			fastdom.mutate(function() {
				container.classList.add('d2l-card-footer-hidden');
			});
		} else if (entry.contentRect.height > 0 && container.classList.contains('d2l-card-footer-hidden')) {
			fastdom.mutate(function() {
				container.classList.remove('d2l-card-footer-hidden');
			});
		}
	},

	_onLinkBlur: function() {
		fastdom.mutate(function() {
			this.removeAttribute('active', 'active');
		}.bind(this));
	},

	_onLinkFocus: function() {
		fastdom.mutate(function() {
			this.setAttribute('active', 'active');
		}.bind(this));
	},

	_onLinkMouseEnter: function() {
		var linkContainer = dom(this.root).querySelector('.d2l-card-link-container');
		linkContainer.classList.add('d2l-card-link-container-hover');
	},

	_onLinkMouseLeave: function() {
		var linkContainer = dom(this.root).querySelector('.d2l-card-link-container');
		linkContainer.classList.remove('d2l-card-link-container-hover');
	}

});
