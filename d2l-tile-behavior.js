import '../@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};

/* @polymerBehavior */
D2L.PolymerBehaviors.TileBehavior = {

	properties: {
		/**
		* Indicates whether the menu is open.
		*/
		menuOpened: {
			type: Boolean,
			value: false,
			notify: true,
			reflectToAttribute: true
		}
	},

	listeners: {
		'd2l-dropdown-open': '_onMenuOpen',
		'd2l-dropdown-close': '_onMenuClose'
	},

	_onMenuOpen: function() {
		this.menuOpened = true;
	},

	_onMenuClose: function() {
		this.menuOpened = false;
	}

};
