import { __ } from '@wordpress/i18n';
import { useBlockProps, PlainText } from '@wordpress/block-editor';
import './editor.scss';
import tabPanel from "@wordpress/components/src/tab-panel";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( attributes, setAttributes ) {
	return (
		<div {...useBlockProps( {
			role: "tablist",
			"aria-labelledby": ""
		} ) } >
			<button id="" aria-selected={true} aria-controls={tabpanel}>
				<PlainText placeholder="Button Text" resize="none" />
			</button>
		</div>
	);
}
