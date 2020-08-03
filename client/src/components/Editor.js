import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useEditor } from '../context/editor';

function TextEditor() {
	const { content, setContent } = useEditor();
	function handleEditorChange(content, editor) {
		setContent(content);
	}
	function handleChange(e) {
		if (e.element.tagName === 'IMG') {
			e.element.setAttribute('loading', 'lazy');
			const width = e.element.getAttribute('width');
			if (width.indexOf('%') === -1)
				e.element.setAttribute('width', `${width / 1150}%`);
		}
	}
	return (
		<Editor
			value={content}
			onNodeChange={handleChange}
			apiKey="hcnwhdxlemckajk9mdxkg4k04eqi1vk1lmpzr6d1qjsandxi"
			init={{
				menubar: true,
				plugins: [
					'advlist autolink lists link image charmap preview anchor \n' +
						'searchreplace visualblocks code fullscreen \n' +
						'insertdatetime media table paste help wordcount autoresize',
				],
				toolbar1:
					'formatselect | bold italic underline backcolor | \n' +
					'alignleft aligncenter alignright alignjustify | \n' +
					'bullist numlist outdent indent | image media link table \n' +
					'removeformat insertdatetime | fullscreen preview code help',
				block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Code=code',
			}}
			onEditorChange={handleEditorChange}
		/>
	);
}

export default TextEditor;
