'use strict';

var plugins = {
	filterGroups: document.querySelectorAll( '[data-filter-group]' )
};

document.addEventListener( 'DOMContentLoaded', function () {
	if ( plugins.filterGroups ) {
		plugins.filterGroups.forEach( function( node ) {
			simpleFilter( node );
		});
	}
});
