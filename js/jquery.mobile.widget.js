//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Widget factory extentions for mobile.
//>>label: Widget Factory
//>>group: Core
//>>css.theme: ../css/themes/default/jquery.mobile.theme.css

define( [ "jquery", "./jquery.mobile.ns", "jquery.ui.widget" ], function( jQuery ) {
//>>excludeEnd("jqmBuildExclude");
(function( $, undefined ) {

$.extend( $.Widget.prototype, {
	_getCreateOptions: function() {

		var elem = this.element,
			options = {};

		$.each( this.options, function( option ) {

			var value = $.mobile.getAttribute( elem[ 0 ], option.replace( /[A-Z]/g, function( c ) {
							return "-" + c.toLowerCase();
						}), true );

			if ( value != null ) {
				options[ option ] = value;
			}
		});

		return options;
	},

	// FIXME: These have to stay in place until we're running on a version of
	// the widget factory that does enable()/disable() via _setOptions, as in
	// https://github.com/jquery/jquery-ui/pull/1024
	enable: function() {
		return this._setOptions({ disabled: false });
	},

	disable: function() {
		return this._setOptions({ disabled: true });
	}
});
//TODO: Remove in 1.5 for backcompat only
$.mobile.widget = $.Widget;
})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");
