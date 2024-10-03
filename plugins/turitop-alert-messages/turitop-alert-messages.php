<?php
/**
 * @package TuritopAlertMessages
 * @author Enrique Pascalin <erparom@gmail.com>
 * @version 0.1.0
 */
 defined( 'ABSPATH' ) || exit;

/*
 * Plugin Name: TuritopAlertMessages
 * Version: 0.1.0
 * Plugin URI: https://turitop.com/
 * Description: Turitop AlertMessages plugin
 * Author: Enrique Pascalin
 * Author URI: https://turitop.com
 * Text Domain: turitop
 * Domain Path: /languages/
 * Requires at least: 6.5
 * Requires PHP: 7.4
 */

add_action("admin_notices", "turitop_show_warning_message");

function turitop_show_succcess_message() {
    echo '<div class="notice notice-success is-dismissible"><p>Hello, Im a success message</p></div';
}

function turitop_show_error_message() {
    echo '<div class="notice notice-error is-dismissible"><p>Hello, Im an error message</p></div';
}

function turitop_show_info_message() {
    echo '<div class="notice notice-info is-dismissible"><p>Hello, Im an info message</p></div';
}

function turitop_show_warning_message() {
    echo '<div class="notice notice-warning is-dismissible"><p>Hello, Im a warning message</p></div';
}

add_action("wp_dashboard_setup", "turitop_dashboard_widget");

function turitop_dashboard_widget() {
    wp_add_dashboard_widget(
        //Id
        "turitop_dashboard_widget",
        //Name
        "Turitop Dashboard Widget", 
        //Callback,
        "custom_admin_widget"
        //Controls Callback,
        //Callback Args Array
        //Context ('normal', 'side', 'column3', or 'column4'. Default 'normal')
        //Priority ('high', 'core', 'default', or 'low'. Default 'core')
    );
}

function custom_admin_widget() {
    echo "This is Custom Admin Widget";
}