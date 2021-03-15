$( function() {
	
	
	$( '#data-filter' ).slider({ // Slider pre data
		range: true,
		min: 0,
		max: 20,
		values: [0, 20],
		slide: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip-input').val( ui.value );
		},
		create: function( event, ui ) {
			var tooltipMin = $('<div class="ui-slider-tooltip"><input type="text" class="ui-slider-tooltip-input" id="data-min" /><span class="ui-slider-tooltip-unit">GB</span></div>');
			var tooltipMax = $('<div class="ui-slider-tooltip"><input type="text" class="ui-slider-tooltip-input" id="data-max" /><span class="ui-slider-tooltip-unit">GB</span></div>');
			
			$(event.target).find('.ui-slider-handle:nth-of-type(1)').append(tooltipMin);
			$(event.target).find('.ui-slider-handle:nth-of-type(2)').append(tooltipMax);
		}
	});
	
	$("#data-min").val($("#data-filter").slider("values", 0));
	$("#data-max").val($("#data-filter").slider("values", 1));
	
	$("#data-min").on('input', function () {		
		var thisVal = parseInt($(this).val());
		var maxVal = parseInt($("#data-max").val());
		if (thisVal <= maxVal) {
			$("#data-filter").slider('values', 0, $(this).val());
		} else if (thisVal = 'NaN') {
			$("#data-filter").slider('values', 0, 0);
		} else {
			$("#data-filter").slider('values', 0, maxVal);
		}
	});
	
	$("#data-max").on('input', function () {
		var thisVal = parseInt($(this).val());
		var minVal = parseInt($("#data-min").val());
		var sliderLimit = parseInt($("#data-filter").slider('option', 'max'));
		if (thisVal >= minVal) {
			$("#data-filter").slider('values', 1, $(this).val());
		} else if (thisVal = 'NaN') {
			$("#data-filter").slider('values', 1, sliderLimit);
		} else {
			$("#data-filter").slider('values', 1, minVal);
		}
	});
	
	
	
	$( '#cell-filter' ).slider({ // Slider pre hovory
		range: true,
		min: 0,
		max: 300,
		values: [0, 300],
		slide: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip-input').val( ui.value );
		},
		create: function( event, ui ) {
			var tooltipMin = $('<div class="ui-slider-tooltip"><input type="text" class="ui-slider-tooltip-input" id="cell-min" /><span class="ui-slider-tooltip-unit">min</span></div>');
			var tooltipMax = $('<div class="ui-slider-tooltip"><input type="text" class="ui-slider-tooltip-input" id="cell-max" /><span class="ui-slider-tooltip-unit">min</span></div>');
			
			$(event.target).find('.ui-slider-handle:nth-of-type(1)').append(tooltipMin);
			$(event.target).find('.ui-slider-handle:nth-of-type(2)').append(tooltipMax);
		}
	});
	
	$("#cell-min").val($("#cell-filter").slider("values", 0));
	$("#cell-max").val($("#cell-filter").slider("values", 1));
	
	$("#cell-min").on('input', function () {		
		var thisVal = parseInt($(this).val());
		var maxVal = parseInt($("#cell-max").val());
		if (thisVal <= maxVal) {
			$("#cell-filter").slider('values', 0, $(this).val());
		} else if (thisVal = 'NaN') {
			$("#cell-filter").slider('values', 0, 0);
		} else {
			$("#cell-filter").slider('values', 0, maxVal);
		}
	});
	
	$("#cell-max").on('input', function () {
		var thisVal = parseInt($(this).val());
		var minVal = parseInt($("#cell-min").val());
		var sliderLimit = parseInt($("#cell-filter").slider('option', 'max'));
		if (thisVal >= minVal) {
			$("#cell-filter").slider('values', 1, $(this).val());
		} else if (thisVal = 'NaN') {
			$("#cell-filter").slider('values', 1, sliderLimit);
		} else {
			$("#cell-filter").slider('values', 1, minVal);
		}
	});
	
	
	
	$( '#sms-filter' ).slider({ // Slider pre SMS
		range: true,
		min: 0,
		max: 200,
		values: [0, 200],
		slide: function( event, ui ) {
			$(ui.handle).find('.ui-slider-tooltip-input').val( ui.value );
		},
		create: function( event, ui ) {
			var tooltipMin = $('<div class="ui-slider-tooltip"><input type="text" class="ui-slider-tooltip-input" id="sms-min" /><span class="ui-slider-tooltip-unit">SMS</span></div>');
			var tooltipMax = $('<div class="ui-slider-tooltip"><input type="text" class="ui-slider-tooltip-input" id="sms-max" /><span class="ui-slider-tooltip-unit">SMS</span></div>');
			
			$(event.target).find('.ui-slider-handle:nth-of-type(1)').append(tooltipMin);
			$(event.target).find('.ui-slider-handle:nth-of-type(2)').append(tooltipMax);
		}
	});
	
	$("#sms-min").val($("#sms-filter").slider("values", 0));
	$("#sms-max").val($("#sms-filter").slider("values", 1));
	
	$("#sms-min").on('input', function () {		
		var thisVal = parseInt($(this).val());
		var maxVal = parseInt($("#sms-max").val());
		if (thisVal <= maxVal) {
			$("#sms-filter").slider('values', 0, $(this).val());
		} else if (thisVal = 'NaN') {
			$("#sms-filter").slider('values', 0, 0);
		} else {
			$("#sms-filter").slider('values', 0, maxVal);
		}
	});
	
	$("#sms-max").on('input', function () {
		var thisVal = parseInt($(this).val());
		var minVal = parseInt($("#sms-min").val());
		var sliderLimit = parseInt($("#sms-filter").slider('option', 'max'));
		if (thisVal >= minVal) {
			$("#sms-filter").slider('values', 1, $(this).val());
		} else if (thisVal = 'NaN') {
			$("#sms-filter").slider('values', 1, sliderLimit);
		} else {
			$("#sms-filter").slider('values', 1, minVal);
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
