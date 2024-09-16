import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: '2flqhnlp',
    dataset: 'production',
    useCdn: true,
    token: 'skbTVb9TX7peBOYgPo2GdHi4fis9XOjKuI1LedluOXv6o3p9BebbYZ74Shoke9SRefAhoJrohwt3bxWpAYBA4xMX50FHdgyv3ViDdRy4uxLoU4MgouerJFGs1Hp0jfP2tICnMOOTeWdG3cxj25M29KOttsQsBR5QdeEnso9yEfxCEmpaOXi4'
});

export default function AddBlog() {
    const editorRef = useRef(null);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [desc, setDesc] = useState('');
    const [content, setContent] = useState('<p>Welcome To WellText</p>');
    const [createdAt] = useState(new Date().toISOString()); // Automatically set current date
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Prepare the document based on the schema
        const newPost = {
            _type: 'update',  // The Sanity schema's document type
            name,
            slug: {
                _type: 'slug',
                current: slug.toLowerCase().replace(/\s+/g, '-')
            },
            desc,
            content: editorRef.current.getContent(),  // Fetch the TinyMCE content
            createdAt
        };

        try {
            const res = await client.create(newPost);  // Create the document in Sanity
            console.log('Post created:', res);
            setIsLoading(false);
            // Clear form fields after submission
            setName('');
            setSlug('');
            setDesc('');
            setContent('');
        } catch (error) {
            console.error('Error creating post:', error);
            setError(error.message);
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1 className="text-center">Add A Blog</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Add a Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="slug" className="form-label">Slug</label>
                    <input
                        type="text"
                        className="form-control"
                        id="slug"
                        placeholder="Slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="desc"
                        rows="3"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                   <textarea value={content}>
<legend>Content</legend>
                   </textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
                    {isLoading ? 'Creating...' : 'Add Blog'}
                </button>
            </form>
        </>
    );
}
