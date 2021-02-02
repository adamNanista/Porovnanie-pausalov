$( function() {
	
	$( '#data-filter' ).slider({ // Slider pre data
		range: true,
		min: 0,
		max: 500,
		values: [0, 500],
		start: function( event, ui ) {
			console.log(ui);
			$(ui.handle).find('.ui-slider-tooltip').show();
		},
		stop: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip').hide();
		},
		slide: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip').text( '\xA0' + ui.value + '\xA0' );
		},
		create: function( event, ui ) {
			var tooltip = $('<div class="ui-slider-tooltip" />');

			$(event.target).find('.ui-slider-handle').append(tooltip);
		},
		change: function(event, ui) {}
	});
	
	$( '#cell-filter' ).slider({ // Slider pre hovory
		range: true,
		min: 0,
		max: 500,
		values: [0, 500],
		start: function( event, ui ) {
			console.log(ui);
			$(ui.handle).find('.ui-slider-tooltip').show();
		},
		stop: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip').hide();
		},
		slide: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip').text( '\xA0' + ui.value + '\xA0' );
		},
		create: function( event, ui ) {
			var tooltip = $('<div class="ui-slider-tooltip" />');

			$(event.target).find('.ui-slider-handle').append(tooltip);
		},
		change: function(event, ui) {}
	});
	
	$( '#sms-filter' ).slider({ // Slider pre SMS
		range: true,
		min: 0,
		max: 500,
		values: [0, 500],
		start: function( event, ui ) {
			console.log(ui);
			$(ui.handle).find('.ui-slider-tooltip').show();
		},
		stop: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip').hide();
		},
		slide: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip').text( '\xA0' + ui.value + '\xA0' );
		},
		create: function( event, ui ) {
			var tooltip = $('<div class="ui-slider-tooltip" />');

			$(event.target).find('.ui-slider-handle').append(tooltip);
		},
		change: function(event, ui) {}
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