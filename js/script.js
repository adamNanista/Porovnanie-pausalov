$( function() {
	
	$( '#data-filter' ).slider({ // Slider pre data
		range: "min", 
		min: 0,
		max: 20,
		slide: function( event, ui ) {
			var $filter = $(ui.handle).closest('.sidebar-form__filter');
			var $label = $filter.prev('.sidebar-form__label');
			var $filterValue = $label.find('.sidebar-form__filter__value');
			$filterValue.text( ui.value + ' GB' );
		}
	});
	
	$( '#cell-filter' ).slider({ // Slider pre hovory
		range: "min", 
		min: 0,
		max: 300,
		slide: function( event, ui ) {
			var $filter = $(ui.handle).closest('.sidebar-form__filter');
			var $label = $filter.prev('.sidebar-form__label');
			var $filterValue = $label.find('.sidebar-form__filter__value');
			$filterValue.text( ui.value + ' min' );
		}
	});
	
	$( '#price-filter' ).slider({ // Slider pre hovory
		range: "min", 
		min: 0,
		max: 60,
		slide: function( event, ui ) {
			var $filter = $(ui.handle).closest('.sidebar-form__filter');
			var $label = $filter.prev('.sidebar-form__label');
			var $filterValue = $label.find('.sidebar-form__filter__value');
			$filterValue.text( ui.value + ' €' );
		}
	});
	
	ToggleCalculator.init();
	TogglePackets.init();
	
} );

var ToggleCalculator = ( function () { // Nie ste si isty? - otvaranie kalkulacky
	
	var DOM = {};
	
	function cacheDom() {
		DOM.trigger = $( '.sidebar-form__calculator__trigger' );
		DOM.calculator = $( '.sidebar-form__calculator' );
	}
	
	function bindEvents() {
		if ( DOM.trigger ) {
			DOM.trigger.click( function (e) {
				e.preventDefault();
				$(this).toggleClass('sidebar-form__calculator__trigger--opened');
				if ( DOM.calculator ) {
					DOM.calculator.toggleClass('sidebar-form__calculator--opened');
				}
			} );
		}
	}
	
	function init() {
		cacheDom();
		bindEvents();
	}
	
	return {
		init: init
	};
	
}());

var TogglePackets = ( function () { // Datove baliky - otvaranie 
	
	var DOM = {};
	
	function cacheDom() {
		DOM.triggers = $( '.sidebar-result__packets__trigger' );
		DOM.packets = $( '.sidebar-result__packets' );
	}
	
	
	function bindEvents() {
		if ( DOM.packets.length ) {
			var packets = [];
			DOM.packets.each( function (index) {
				packets[index] = this;
			} );
			if ( DOM.triggers.length ) {
				DOM.triggers.each( function (index) {
					$(this).click( function (e) {
						e.preventDefault();
						$(this).toggleClass('sidebar-result__packets__trigger--opened');
						$(packets[index]).toggleClass('sidebar-result__packets--opened');
					} );
				} );
			}
		}
	}
	
	function init() {
		cacheDom();
		bindEvents();
	}
	
	return {
		init: init
	};
	
}());