import { useBlockProps } from '@wordpress/block-editor';
import { __ } from "@wordpress/i18n";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __( 'Tab content would go here!', 'testimonials' ) }
		</p>
	);
}