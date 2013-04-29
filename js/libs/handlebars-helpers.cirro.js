// Handlebars Helpers

// Pretty Time formats seconds into 00:00 etc..
Ember.Handlebars.registerBoundHelper('prettyTime', function( seconds ) {
	if ( typeof seconds === 'undefined' ) {
		return '';
	}

	var displayHours, displayMinutes, displaySeconds;

	displayHours = Math.floor( seconds / 3600 );
	displayMinutes = Math.floor( seconds / 60 );
	displaySeconds = Math.floor( seconds % 60 );

	if ( displayMinutes < 10 && displayHours > 0 ) {
		displayMinutes = '0' + displayMinutes;
	}

	if ( displayHours === 0 ) {
		displayHours = '';
	} else {
		displayHours = displayHours + ':';
	}

	if ( displaySeconds < 10 ) {
		displaySeconds = '0' + displaySeconds;
	}

	return displayHours + displayMinutes + ':' + displaySeconds;
});

// Pretty Percent formats decimal into a two digit percent with the % symbol
Ember.Handlebars.registerBoundHelper('prettyPercent', function( decimal ) {
	if ( typeof decimal === 'undefined' ) {
		return '';
	}
	return Math.round( decimal * 100 ) + '%'
});
