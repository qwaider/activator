
require.config({
	baseUrl:	'/public',
	paths: {
		// Common paths
		vendors:	'javascripts/vendors',
		core:		'javascripts/core',
		plugins:	'plugins'
	},
	map: {
		'*': {
			'text':	'vendors/text',
			'css':	'vendors/css.min'
		}
	}
})

require.onError = function (err) {
	if (err.requireType === 'timeout') {
		console.log('modules: ' + err.requireModules);
	}
}

window.req = require

require([
	// Vendors
	'vendors/text',
	'vendors/css.min',
	'vendors/jquery-2.0.0b1',
	'vendors/knockout-2.2.0',
	'vendors/chain',
	'vendors/keymage.min'
],function(){
	require([],function() {
		// Register handlers on the UI.
		$(function() {
			// Register fancy radio button controlls.
			$('#new').on('click', 'li', function(event) {
				// ???
				$('input:radio', this).prop('checked',true);
				var name = $('h3', this).text();
				$('#newAppTemplateName').val(name);
			})
			.on('click', '#browseAppLocation, #browseCancel', function(event) {
				event.preventDefault();
				$('#newAppForm, #newAppLocationBrowser').toggle();
			});
			// TODO - Register file selection widget...
			// Register fancy click and open app buttons
			$('#open').on('click', 'li', function(event) {
				var url = $('a', this).attr('href');
				// TODO - Better way to do this?
				window.location.href = url;
			})
		});
	})
})
