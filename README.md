# Simple-Filter

Simple element filter by category.
Check out this [Demo](https://codepen.io/OXAYAZA/pen/LaBXvq) to see it in action.


## Usage

Some HTML markup:
```html
<section>
	<button data-filter="*">All</button>
	<button data-filter="red">Red</button>
	<button data-filter="green">Green</button>
	<button data-filter="orange">Orange</button>

	<div data-category="red">Red</div>
	<div data-category="green">Green</div>
	<div data-category="orange">Orange</div>
</section>
```

Simple initialization:
```js
simpleFilter( document.querySelector( 'section' ) );
```


## License

Licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)  
[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)
