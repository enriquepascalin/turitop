<?php
/**
 * @package TuritopCSVUploader
 * @author Enrique Pascalin <erparom@gmail.com>
 * @version 0.1.0
 */
 defined( 'ABSPATH' ) || exit;

/*
 * Plugin Name: TuritopCSVUploader
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

define("TURITOP_PLUGIN_PATH", plugin_dir_path(__FILE__));
define("PLUGIN_PREFIX", 'tt_');

function turitop_activate_csv_plugin() {
    global $wpdb; 
    $test_db_version = '1.0.0';
    $db_table_name = $wpdb->prefix . PLUGIN_PREFIX . 'productos';
    $charset_collate = $wpdb->get_charset_collate();
  
   if( $wpdb->get_var( "show tables like '$db_table_name'" ) != $db_table_name ) {
         $sql = "CREATE TABLE `$db_table_name` (
                  `id` int(11) NOT NULL auto_increment,
                  `name` varchar(200) NOT NULL,
                  `tag` varchar(200),
                  UNIQUE KEY id (id)
          ) $charset_collate;";
  
     require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
     dbDelta( $sql );
     add_option( 'test_db_version', $test_db_version );
   }
}
register_activation_hook( __FILE__, "turitop_activate_csv_plugin" );

function deactivate_plugin() {
    global $wpdb; 
    $db_table_name = $wpdb->prefix . PLUGIN_PREFIX . 'productos';
    if( $wpdb->get_var( "show tables like '$db_table_name'" ) == $db_table_name ) {
        $sql = "DROP TABLE IF EXISTS `$db_table_name`;";
        require_once( ABSPATH . '/wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }
}
register_deactivation_hook( __FILE__, "deactivate_plugin" );

function turitop_display_uploader():string {
    ob_start();
    include_once TURITOP_PLUGIN_PATH . "/views/turitop_form.php";
    $view = ob_get_contents();
    ob_end_clean();

    return $view;
}
add_shortcode("csv-data-uploader", "turitop_display_uploader");


function turitop_add_script_file() {
    wp_enqueue_script("turitop_scripts-js", plugin_dir_url(__FILE__) . "assets/js/main_turitop.js", ["jquery"]);
    wp_localize_script( "turitop-scripts-js", "turitop-object", ["ajax_url" => admin_url("admin-ajax.php")] );
}
add_action("wp_enqueue_scripts", "turitop_add_script_file");

function turitop_ajax_handler() {
    
}
add_action("wp_ajax_turitop_form_data", "turitop_ajax_handler");