import React from 'react'

export default function Tools(props) {
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }

    return (
        <>
            <h1 className={` container text-${props.mode === 'light' ? 'black' : 'white'}`}>Our Tools</h1>
            <p className={` container text-${props.mode === 'light' ? 'black' : 'white'}`}>Our Site Provide Various Tools For Analyze Your Text. Here Is The Full Detail Of The All Tools. </p>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Demo Text</h5>
                            <p className="card-text">Generates Random Text To Explore The Tools Quickly.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Write With AI</h5>
                            <p className="card-text">Generate Text By AI Based On Prompt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Improve With AI</h5>
                            <p className="card-text">Improve Text Based On User Prompt With AI.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Translate Text</h5>
                            <p className="card-text">Translate Text To Hindi.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Load Text</h5>
                            <p className="card-text">Load The Saved Text From The Beowser.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Rich Text Editor</h5>
                            <p className="card-text">The Rich Text Editor Provides The Word Proccessing Like MS Word.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Whiteboard</h5>
                            <p className="card-text">The Whiteboard Allows Users To Draw Anything</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 "  >
                    <div className="card" style={myStyle} >
                        <div className="card-body">
                            <h5 className="card-title">Summarize Text</h5>
                            <p className="card-text">Summarize The Text In Few Lines.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 ">
                    <div className="card " style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Convert To Uppercase</h5>
                            <p className="card-text">Convertes The Input Text To Uppercase</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2 ">
                    <div className="card " style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Formate Numbers</h5>
                            <p className="card-text">Formates The Numbers From The Text With Commas</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Convert To Lowercase</h5>
                            <p className="card-text">Convertes The Input Text To Lowercase</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Convert To Sentence Case</h5>
                            <p className="card-text">Convertes The Input Text To Sentence Case</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Sort Text</h5>
                            <p className="card-text">Sort The Input Text In Alphbetically</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Undo</h5>
                            <p className="card-text">Undo Previous Action</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Redo</h5>
                            <p className="card-text">Redo Previous Action</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Emoji</h5>
                            <p className="card-text">Remove All Emoji From The Given Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Numbers</h5>
                            <p className="card-text">Remove All Numbers From The Given Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Find And Replace</h5>
                            <p className="card-text">Replace The Matched Text With Prompt</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-smdf-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Capitalize</h5>
                            <p className="card-text">Removes Extra Spaces And Capitalize The Given Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Extract Number</h5>
                            <p className="card-text">Extract Numbers From The Given Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Html</h5>
                            <p className="card-text">Removes Html Tags From The Given Text And Give Only Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Find Index</h5>
                            <p className="card-text">Find The Index Of Given Word From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Find Word Frequency</h5>
                            <p className="card-text">Find The Frequency Of Given Word From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Extract Links</h5>
                            <p className="card-text">Extract All Links  From The Given Text And Sepreate Them In New Line</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Reverse Text</h5>
                            <p className="card-text">Reverse The Given Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Extra Spaces</h5>
                            <p className="card-text">Removes Extra Spaces From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove All Spaces</h5>
                            <p className="card-text">This Tool Removes All Spaces From The Text.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Speak</h5>
                            <p className="card-text">This Tool Speaks The Given Text </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Encode To Base64</h5>
                            <p className="card-text">This Tool Encodes Given Text  To Base64 </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Decode To Base64</h5>
                            <p className="card-text">This Tool Decode Given Text  To Base64 </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Empty Lines</h5>
                            <p className="card-text">This Tool Remove Extra Lines From Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Duplicate Words</h5>
                            <p className="card-text">This Tool Is Helpfull To Remove Duplicate Words From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove All Lines</h5>
                            <p className="card-text">This Tool Convert Multipal Lines Into Single Line</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Punctuation</h5>
                            <p className="card-text">This Tool is Helpfull To Remove Punctuation From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Accents</h5>
                            <p className="card-text">This Tool is Helpfull To Remove Accents From The Text</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Copy Text</h5>
                            <p className="card-text">This Tool Copies Analyzed Text To Clipboard</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Save Text</h5>
                            <p className="card-text">This Tool Save The Text In The Browser</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Download Text</h5>
                            <p className="card-text">This Tool Download The Analyzed Text Tn .txt File</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0 mt-xl-2">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Clear Text</h5>
                            <p className="card-text">Clear The Input Field</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
