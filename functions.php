<?php
/**
 * Functions for Seele Demo Site (Seele Child Theme).
 *
 * @package    Seele Demo Site (Seele Child Theme)
 * @author     SVL Studios
 * @copyright  Copyright (c) 2021 Requite Designs
 * @link       http://www.svlstudios.com
 * @since      1.0.0
 */

/**
 * Load child theme stylesheet.
 */
function svl_childtheme_style() {
	$theme     = wp_get_theme();
	$child_ver = $theme->get( 'Version' );

	wp_enqueue_style(
		'svl-main-style-child-css',
		get_stylesheet_directory_uri() . '/style.css',
		array( 'req-main-styles-css' ),
		$child_ver,
		'all'
	);
}

add_action( 'wp_enqueue_scripts', 'svl_childtheme_style' );

/**
 * Load child theme specific functions
 */
function svl_setup() {
	require_once get_stylesheet_directory() . '/admin/class-seele-functions.php';
	require_once get_stylesheet_directory() . '/demo/class-seele-demo-toggle.php';

}

add_action( 'after_setup_theme', 'svl_setup', 9 );
