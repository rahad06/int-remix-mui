import React from "react";
import JoditEditor from "jodit-react";

const editorConfiguration = {
    language: "fa",
    tabIndex: 1,
};

function GEditor(props) {
    const currentLanguageCode = 'fa';
    const editorConfig = { ...editorConfiguration, language: currentLanguageCode, placeholder:'' };

    return (
        <div className="">
            <JoditEditor
                value={props.value}
                config={editorConfig}
                onBlur={(newContent) => props.onChange(newContent)}
            />
        </div>
    );
}

export default GEditor;
