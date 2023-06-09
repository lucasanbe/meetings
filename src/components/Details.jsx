import { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Styles.css";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false });

export default function Details() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorFocused, setEditorFocused] = useState(false);

  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  const getContentText = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);
    const parsedContent = parse(htmlContent);
    return parsedContent;
  };

    const toolbarOptions = {
        options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "colorPicker"],
        inline: {
            inDropdown: false,
            options: ["bold", "italic", "underline", "strikethrough", "monospace", "superscript", "subscript"],
        },
        blockType: {
            inDropdown: true,
            options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6", "Blockquote", "Code"],
        },
        fontSize: {
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
        },
        fontFamily: {
            options: ["Arial", "Georgia", "Impact", "Tahoma", "Times New Roman", "Verdana"],
        },
        list: {
            inDropdown: false,
            options: ["unordered", "ordered", "indent", "outdent"],
        },
        textAlign: {
            inDropdown: false,
            options: ["left", "center", "right", "justify"],
        },
        colorPicker: {
            colors: [
                "rgb(97,189,109)",
                "rgb(26,188,156)",
                "rgb(84,172,210)",
                "rgb(44,130,201)",
                "rgb(147,101,184)",
                "rgb(71,85,119)",
                "rgb(204,204,204)",
                "rgb(65,168,95)",
                "rgb(0,168,133)",
                "rgb(61,142,185)",
                "rgb(41,105,176)",
                "rgb(85,57,130)",
                "rgb(40,50,78)",
                "rgb(0,0,0)",
                "rgb(247,218,100)",
                "rgb(251,160,38)",
                "rgb(235,107,86)",
                "rgb(226,80,65)",
                "rgb(163,143,132)",
                "rgb(239,239,239)",
                "rgb(255,255,255)",
                "rgb(250,197,28)",
                "rgb(243,121,52)",
                "rgb(209,72,65)",
                "rgb(184,49,47)",
                "rgb(124,112,107)",
                "rgb(209,213,216)",
            ],
        },
    };

    return (
        <Editor
            editorStyle={{
                padding: "10px",
                color: "black",
                paddingBottom: "150px",
                border: "1px solid #d9d9d9",
            }}
            toolbarStyle={{
                border: "1px solid #d9d9d9",
                padding: 0,
            }}
            placeholder={editorFocused ? "" : "Digite aqui..."}
            onEditorStateChange={onEditorStateChange}
            editorState={editorState}
            toolbar={toolbarOptions}
            onFocus={() => setEditorFocused(true)}
            onBlur={() => setEditorFocused(false)}
            locale="pt"
            wrapperClassName="my-custom-class"
            toolbarClassName="my-custom-class-toolbar"
        />
    );
}
