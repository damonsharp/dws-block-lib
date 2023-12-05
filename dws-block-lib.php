<?php
/**
 * Plugin Name:     DWS Block Lib
 * Description:     Block Library for Site Building
 * Author:          Damon Sharp
 * Author URI:      https://damonsharp.me
 * Text Domain:     dws-block-lib
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Dws_Block_Lib
 */

define( 'DWS_BLOCK_LIB_SLUG', 'dws-block-lib' );
define( 'DWS_BLOCK_LIB_TITLE', 'DWS Block Library' );
define( 'DWS_BLOCK_LIB_ROOT_DIR', trailingslashit( dirname( __FILE__ ) ) );
define( 'DWS_BLOCK_LIB_BlOCKS_DIR', DWS_BLOCK_LIB_ROOT_DIR . 'blocks' );


/**
 * Manipulate block categories.
 *
 * @param $categories
 *
 * @return array
 */
function dws_block_lib_block_categories( $categories ) : array {

	// Adding a new category.
	$categories[] = [
		'slug'  => DWS_BLOCK_LIB_SLUG,
		'title' => DWS_BLOCK_LIB_TITLE,
	];

	return $categories;
}

add_filter( 'block_categories_all', 'dws_block_lib_block_categories' );


function dws_block_lib_editor_supports() {
	add_theme_support( 'align-wide' );
	add_theme_support( 'align-full' );
}

add_action( 'after_setup_theme', 'dws_block_lib_editor_supports' );

/**
 * Load individual blocks.
 *
 * @return void
 */
function register_dws_blocks() : void {
	foreach ( new DirectoryIterator( DWS_BLOCK_LIB_BlOCKS_DIR ) as $file_info ) {
		if ( $file_info->isDot() ) {
			continue;
		}

		$file_name = $file_info->getFilename();
		$file      = DWS_BLOCK_LIB_BlOCKS_DIR . "/{$file_name}/{$file_name}.php";

		if ( file_exists( $file ) ) {
			require_once $file;
		}
	}
}

register_dws_blocks();
