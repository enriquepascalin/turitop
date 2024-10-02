<?php
/**
 * @package Turitop
 * @author Enrique Pascalin <erparom@gmail.com>
 * @version 0.1.0
 */
 defined( 'ABSPATH' ) || exit;

class Turitop {

    /**
     * Class constructor
     */
    public function __construct() {
        $this->includes();
        $this->init();
    }

    /**
     * Initializes hooks and includeds
     *
     * @return void
     */
    protected function includes() {
        $loader = include_once dirname( __FILE__ ) . '/vendor/autoload.php';
        if ( ! $loader ) {
            throw new Exception( 'vendor/autoload.php missing please run `composer install`' );
        }
        require_once dirname(__FILE__) . 'admin/turitop-admin.php';
    }

    /**
     * Initializes Turitop class
     *
     * @return void
     */
    private function init() {
        $admin = new Turitop_Admin();
        add_action( 'turitop_admin_init', array( 'Turitop_Admin', 'render_admin' ) );
    }
    
    /**
     * Plugin deactivate
     *
     * @return void
     */
    public static function plugin_deactivation() {

    }

    /**
     * Plugin activation
     *
     * @return void
     */
    public static function plugin_activation() {

    }

    /**
     * Singleton to get Instance
     *
     * @return Turitop
     */
    public static function turitop_get_instance(): Turitop {
        static $instance = null;
        if (null === $instance) {
            $instance = new Turitop();
        }

        return $instance;
    }
}