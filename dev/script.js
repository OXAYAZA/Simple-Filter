'use strict';

var plugins = {
	filterGroups: document.querySelectorAll( '[data-filter-group]' )
};

document.addEventListener( 'DOMContentLoaded', function () {
	if ( plugins.filterGroups ) {
		for ( let i = 0; i < plugins.filterGroups.length; i++ ) {
			simpleFilter( plugins.filterGroups[ i ] );
		}
	}
});
