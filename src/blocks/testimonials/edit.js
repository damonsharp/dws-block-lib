import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	console.log(new Intl.DateTimeFormat("en-US", {timeZone: 'America/Mazatlan', }).format(new Date().getTime()));

	return (
		<p { ...useBlockProps() }>
			{ __( 'Testimonials – hello from the editor!', 'testimonials' ) }
		</p>
	);
}
