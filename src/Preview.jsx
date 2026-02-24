// https://www.markdownguide.org/cheat-sheet/
// https://www.markdownguide.org/basic-syntax/
// previwes
//https://jbt.github.io/markdown-editor/
//https://www.digitalocean.com/community/markdown
//https://markdownlivepreview.com/
// test regex
// 


import React from 'react';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

class Preview extends React.Component {
    //super props receive the "text" that was passed in props from App.js
    constructor(props) {
        super(props);
        this.markdownCreator= this.markdownCreator.bind(this);
    }

    //create the markdown
    markdownCreator(text) {
        const result = marked.parse(text);
        return result
    };

    //when App.js change the textArea Preview.jsx receveive "text" props from from App.js and use the function markdownCreator
    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={{__html: this.markdownCreator(this.props.text)}}>
            </div>
        )
    }
}

export default Preview;
