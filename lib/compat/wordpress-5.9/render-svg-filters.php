<?php
/**
 * Renders the SVG filters for duotone.
 *
 * @package gutenberg
 */

/*
 * If wp_global_styles_render_svg_filters is defined, it means the plugin
 * is running on WordPress 5.9.1, so don't need to render the filters which
 * are already rendered by WordPress core.
 */
if ( ! function_exists( 'wp_global_styles_render_svg_filters' ) ) {
	/**
	 * Render the SVG filters supplied by theme.json.
	 *
	 * Note that this doesn't render the per-block user-defined
	 * filters which are handled by duotone.php, but it should
	 * be rendered in the same location as those to satisfy
	 * Safari's rendering quirks.
	 */
	function gutenberg_experimental_global_styles_render_svg_filters() {
		$filters = wp_get_global_styles_svg_filters();
		if ( ! empty( $filters ) ) {
			echo $filters;
		}
	}

	add_action(
		'wp_body_open',
		'gutenberg_experimental_global_styles_render_svg_filters'
	);
}
