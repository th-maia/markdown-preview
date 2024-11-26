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
    constructor(props) {
        super(props);
        this.markdownCreator= this.markdownCreator.bind(this);
    }

    //create the markdown
    markdownCreator(text) {
        const result = marked.parse(text);
        return result
    };
  
    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={{__html: this.markdownCreator(this.props.text)}}>
            </div>
        )
    }
}

export default Preview;