'use strict';

/**
 * @module   SimpleFilter
 * @version  0.1.0
 * @author   OXAYAZA {@link https://github.com/OXAYAZA}
 * @license  CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @see      {@link https://oxayaza.page.link/gitHub_simpleFilter}
 * @see      {@link https://oxayaza.page.link/linkedin}
 */
function simpleFilter ( node ) {
	function Filter ( node ) {
		node.filterGroup = this;
		this.node = node;
		this.filters = node.querySelectorAll( '[data-filter]' );
		this.items = node.querySelectorAll( '[data-category]' );
		this.current = '*';

		this.init();
	}

	Filter.prototype.init = function () {
		for ( var i = 0; i < this.filters.length; i++ ) {
			var filter = this.filters[i];
			filter.filterGroup = this;
			filter.addEventListener( 'click', this.clickHandler );
		}

		for ( var i = 0; i < this.items.length; i++ ) {
			this.items[i].filterGroup = this;
		}

		this.node.addEventListener( 'filter', this.filterHandler.bind( this ) );
	};

	Filter.prototype.clickHandler = function () {
		for ( let i = 0; i < this.filterGroup.filters.length; i++ ) {
			this.filterGroup.filters[ i ].classList.remove( 'active' );
		}

		this.filterGroup.filter( this.getAttribute( 'data-filter' ) );
		this.classList.add( 'active' );
	};

	Filter.prototype.filter = function ( filterName ) {
		var event = new CustomEvent( 'filter' );
		event.filterName = filterName;
		this.current = filterName;
		this.node.dispatchEvent( event );
	};

	Filter.prototype.filterHandler = function () {
		for ( var i = 0; i < this.items.length; i++ ) {
			var item = this.items[i];

			if ( this.current === item.getAttribute( 'data-category' ) || this.current === '*' ) {
				item.classList.remove( 'hidden' );
			} else {
				item.classList.add( 'hidden' );
			}
		}
	};

	return new Filter( node );
}
