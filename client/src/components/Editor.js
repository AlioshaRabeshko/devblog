import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useEditor } from '../context/editor';

function TextEditor() {
	const { setContent } = useEditor();
	function handleEditorChange(content, editor) {
		setContent(content);
	}
	return (
		<Editor
			apiKey="hcnwhdxlemckajk9mdxkg4k04eqi1vk1lmpzr6d1qjsandxi"
			initialValue="<p>Type your text here</p>"
			init={{
				menubar: true,
				plugins: [
					'advlist autolink lists link image charmap preview anchor',
					'searchreplace visualblocks code fullscreen',
					'insertdatetime media table paste help wordcount autoresize',
				],
				toolbar1:
					'formatselect | bold italic underline backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | image media link table \
             removeformat insertdatetime | fullscreen preview code help',
				block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Code=code',
			}}
			onEditorChange={handleEditorChange}
		/>
	);
}

export default TextEditor;
