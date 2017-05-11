<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::get_context();
$context['posts'] = Timber::get_posts('category_name=Home&&orderby=modified&&posts_per_page=10');
$context['sps'] = Timber::get_posts('category_name=static-post');
$context['categories'] = Timber::get_terms("taxonomy=category");

$jfile = file_get_contents("http://eoanalytics.site/wp-content/themes/geohub-timber/static/od.json");
//$jfile = utf8_encode($jfile);
$json =  json_decode($jfile, false);

$context['odjson']=$json;


$templates = array( 'index.twig' );
if ( is_home() ) {
	array_unshift( $templates, 'home.twig' );
}
Timber::render( $templates, $context );
