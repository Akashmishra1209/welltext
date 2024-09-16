import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function RichEditor() {
    const editorRef = useRef(null);

    return (
        <>
            <div className="container m-4">
                <h1 className="container">Explore Our Rich Text Editor</h1>
            </div>
            <Editor
                apiKey="cyamfx5u42wgqop0qpytq20dkluwcnngeefqe36iimrq76xj"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>Welcome To WellText</p>"
                init={{
                    height: 500,
                    menubar: true, // Enable the menu bar
                    plugins: [
                        // Essential plugins
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                        'textcolor', // Text color picker
                        'textpattern', // Text patterns
                        'emoticons', // Emoticons
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body {font - family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    );
}
