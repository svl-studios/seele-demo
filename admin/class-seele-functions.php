<?php

if ( ! class_exists( 'Seele_Functions' ) ) {
	class Seele_Functions {
		public function __construct() {
			add_action( 'wp_ajax_seele_get_download', array( $this, 'download_plugin' ) );
			add_action( 'wp_ajax_nopriv_seele_get_download', array( $this, 'download_plugin' ) );
		}

		public function download_plugin(){
			$token    = sanitize_text_field( wp_unslash( $_GET['token'] ?? '' ) );
			$package  = sanitize_text_field( wp_unslash( $_GET['package'] ?? '' ) );
			$site_url = sanitize_text_field( wp_unslash( $_GET['site_url'] ?? '' ) );

			if ( 'revslider' === $package ) {
				$url = 'https://www.svlstudios.com/extras/plugins/revslider.zip';
			} elseif ( 'js_composer' === $package ) {
				$url = 'https://www.svlstudios.com/extras/plugins/visual-composer.zip';
			}

			echo esc_url( $url );
			die();
		}
	}

	new Seele_Functions();
}
