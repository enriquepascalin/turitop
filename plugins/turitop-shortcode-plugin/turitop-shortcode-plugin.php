<?php
/**
 * @package TuritopShortCodePlugin
 * @author Enrique Pascalin <erparom@gmail.com>
 * @version 0.1.0
 */
 defined( 'ABSPATH' ) || exit;

/*
 * Plugin Name: TuritopShortCodePlugin
 * Version: 0.1.0
 * Plugin URI: https://turitop.com/
 * Description: Turitop Short Code plugin basics
 * Author: Enrique Pascalin
 * Author URI: https://turitop.com
 * Text Domain: turitop
 * Domain Path: /languages/
 * Requires at least: 6.5
 * Requires PHP: 7.4
 */


/**
 * Show simple shortcode
 *
 * @return string
 */
 function turitop_shortcode():string {
    return "<p style='color:red;font-size: 36px;font-weight:bold;'>This is a static shortcode message!</p>";
}
add_shortcode("message", "turitop_shortcode"); //[message]

/**
 * Show Shortcode with parameters
 *
 * @param array $attributes
 * @return string
 */
function turitop_handle_product_data(array $attributes): string {
    $attributes = shortcode_atts(
        ["name" => "Default name","tag"=> "Default tag"], 
        $attributes,
        'productx'
    );

    return "<h3 style='color:blue;'>Product Data:<br /> Name - {$attributes['name']}, Tag - {$attributes['tag']}</h3>";
}
add_shortcode("productx", "turitop_handle_product_data"); // [productx name="x" tag="y"]

/**
 * Show Shortcode from database
 *
 * @return string
 */
function turitop_show_post():string {
    
    
    return "";
}
add_shortcode("show_post", "turitop_show_post");