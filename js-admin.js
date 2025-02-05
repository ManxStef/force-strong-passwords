/**
 * Admin JavaScript
 */

/* Trigger when DOM has loaded */
jQuery( document ).ready( function( $ ) {
	var pw = $( 'tr#password' );

	if ( pw.length ) {

		// Change password hint
		pw.next( 'tr' ).find( '.indicator-hint' ).html( 'To make a strong password, it\'s usually best to use a passphrase. Here\'s <a href="http://xkcd.com/936/" target="_blank">how and why</a>. You can also use <a href="https://lowe.github.io/tryzxcvbn/" target="_blank" rel="noopener noreferrer">this strength tester</a> for more details on your password choice.' );

	}

});
