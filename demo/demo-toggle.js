/* global jQuery */

( function( $ ) {
	var adjustWrap;

	function loadDemos() {
		var div;

		$( '.svl-demo-select-wrap' ).removeClass( 'init-onload' );

		div = $( '<div>' );
		div.load(
			'http://127.0.0.1/demo-toggle/ .svl-demos',
			function() {
				var demoWrap = div.find( '.demo-wrap' );

				div.imagesLoaded(
					function() {
						var count = 0;

						div.remove();

						$( '.loading-demos' ).remove();
						$( '.svl-more-demos-text' ).text( 'Scroll For More' );

						$.each(
							demoWrap,
							function() {
								var img   = $( this ).find( 'img' ).attr( 'src' );
								var url   = $( this ).find( '.title-link' ).attr( 'href' );
								var title = $( this ).find( '.title-link h4' ).text();

								if ( '' !== title && $( '.svl-demo-window ul' ).append( '<li><a title="Qixi ' + title + ' Demo" href="' + url + '" target=_blank><img src="' + img + '" alt="Qixi ' + title + ' Demo"></a></li>' ) ) {
									count++;
								}
							}
						);

						$( '.demos-count' ).text( count + ' Demos Included!' );

						adjustWrap();
					}
				);
			}
		);
	}

	adjustWrap = function() {
		var height = $( window ).height() - $( '.svl-demos-info-box' ).height();

		$( '.svl-demo-window ul' ).css( 'height', height );

		if ( $( window ).width() < $( '.svl-demo-select-wrap' ).width() && ! $( '.svl-demo-select-wrap' ).hasClass( 'hide-small' ) ) {
			$( '.svl-demo-select-wrap' ).addClass( 'hide-small' ).hide();
		} else if ( $( window ).width() > $( '.svl-demo-select-wrap' ).width() && $( '.svl-demo-select-wrap' ).hasClass( 'hide-small' ) ) {
			$( '.svl-demo-select-wrap' ).removeClass( 'hide-small' ).show();
		}
	};

	adjustWrap();

	$( window ).on( 'load resize', adjustWrap );

	$( 'body' ).on(
		'click',
		'.svl-demo-toggle',
		function( e ) {
			e.preventDefault();

			if ( $( '.svl-demo-select-wrap' ).hasClass( 'init-onload' ) ) {
				loadDemos();
			}

			if ( $( '.svl-demo-select-wrap' ).hasClass( 'open' ) ) {
				$( '.svl-demo-select-wrap' ).stop().removeClass( 'open' ).animate( { right: '-350px' }, 'slow' );
			} else {
				$( '.svl-demo-select-wrap' ).stop().addClass( 'open' ).animate( { right: '0' }, 'slow' );
			}
		}
	);

	$( window ).on(
		'load',
		function() {
			if ( $( 'body' ).hasClass( 'page-id-2' ) ) {
				$( '.svl-demos' ).randomizeDemos( '.demo-block' );
				$( '.svl-demos' ).css( { visibility: 'visible' } );
				setInterval(
					function() {
						$( '.svl-demos' ).randomizeDemos( '.demo-block' );
					},
					40000
				);
			}
		}
	);

	$.fn.randomizeDemos = function( childElem ) {
		return this.each(
			function() {
				var $this = $( this );
				var elems = $this.children( childElem );
				var i;
				var len;

				elems.sort(
					function() {
						return ( Math.round( Math.random() ) - 0.5 );
					}
				);

				$this.remove( childElem );

				len = elems.length;
				for ( i = 0; i < len; i++ ) {
					$this.append( elems[i] );
				}
			}
		);
	};
}( jQuery ) );
