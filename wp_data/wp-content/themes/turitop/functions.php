<?php
/**
 * Turitop functions and definitions
 *
 * @link https://turitop.com
 *
 * @package Turitop
 * @since Turitop 1.0
 */

 if ( !function_exists('turitop_block_styles') ) :
    /**
     * Custom blockstyles
     *
     * @return void
     */
    function turitop_block_styles() {
        
    }
 endif;
 add_action( 'init', 'turitop_block_styles' );