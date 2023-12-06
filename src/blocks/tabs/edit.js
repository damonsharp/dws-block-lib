import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from "@wordpress/components";
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
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={[ "dws-block-lib/tab"]}
				template={[
					[ "dws-block-lib/tab" ],
					[ "dws-block-lib/tab" ],
					[ "dws-block-lib/tab" ],
				]}
			/>
		</div>
	);
}
