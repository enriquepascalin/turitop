<?php
/**
 * @package Turitop
 * @author Enrique Pascalin <erparom@gmail.com>
 * @version 0.1.0
 */
 defined( 'ABSPATH' ) || exit;

/*
 * Plugin Name: Turitop
 * Version: 0.1.0
 * Plugin URI: https://turitop.com/
 * Description: Turitop plugin
 * Author: Enrique Pascalin
 * Author URI: https://turitop.com
 * Text Domain: turitop
 * Domain Path: /languages/
 * Requires at least: 6.5
 * Requires PHP: 7.4
 * WC requires at least: 8.8.3
 * WC tested up to: 8.9.1
 */
define( 'TURITOP_VERSION', '5.3.3' );
define( 'TURITOP_MINIMUM_WP_VERSION', '5.8' );
define( 'TURITOP_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

require_once TURITOP_PLUGIN_DIR . 'class.turitop.php';

$woo = trailingslashit( WP_PLUGIN_DIR ) . 'woocommerce/woocommerce.php';
if (in_array( $woo, wp_get_active_and_valid_plugins() ) || in_array( $woo, wp_get_active_network_plugins() )
) {
    register_activation_hook( __FILE__, array( 'Turitop', 'plugin_activation' ) );
    register_deactivation_hook( __FILE__, array( 'Turitop', 'plugin_deactivation' ) );
    
    Turitop::turitop_get_instance();
}