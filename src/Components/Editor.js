import React from 'react'

import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/chrome';

const Editor = (props) => {
    return (
        <AceEditor
            style={{
                height: '100%',
                width: '100%'
            }}
            mode="markdown"
            theme="chrome"
            fontSize={18}
            highlightActiveLine={true}
            value={props.source}
            setOptions={{
                showLineNumbers: true,
                tabSize: 2,
            }}
            onChange={props.handleInput}
            onLoad={(editor) => {
                let codeEditor = editor;
                codeEditor.focus();
            }}
            editorProps={{ $blockScrolling: Infinity }} />
    )
}

export default Editor;