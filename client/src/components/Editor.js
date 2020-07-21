
import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { Editor, Transforms, createEditor } from 'slate'
import Popup from "reactjs-popup";
import { withHistory } from 'slate-history'
import bold from '../svgs/bold.svg'
import italic from '../svgs/italic.svg'
import underline from '../svgs/underline.svg'
import code from '../svgs/code.svg'
import leftAlign from '../svgs/align-left.svg'
import rightAlign from '../svgs/align-right.svg'
import centerAlign from '../svgs/align-center.svg'
import ol from '../svgs/list.svg'
import ul from '../svgs/list-2.svg'
import indent from '../svgs/right-indent.svg'

const icons = {
  bold, italic, underline, code, leftAlign, centerAlign, rightAlign, ol, ul, indent
}

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const TextEditor = () => {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <div className="editor" >
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <div className="editor-toolbar">
          <MarkButton format="bold" icon="bold" />
          <MarkButton format="underline" icon="underline" />
          <MarkButton format="italic" icon="italic" />
          <MarkButton format="code" icon="code" />
          <BlockButton format="heading-one" icon="H1" />
          <BlockButton format="heading-two" icon="H2" />
          <BlockButton format="align-left" icon="leftAlign" />
          <BlockButton format="align-center" icon="centerAlign" />
          <BlockButton format="align-right" icon="rightAlign" />
          <BlockButton format="block-quote" icon="indent" />
          {/* <BlockButton format="block-quote" icon="format_quote" /> */}
          <BlockButton format="numbered-list" icon="ol" />
          <BlockButton format="bulleted-list" icon="ul" />
          <PopUpImage format="img" icon="img" />
          {/* <PopUpButton format="link" icon="link" /> */}
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
    </div>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    case 'align-left':
      return <p className="left" {...attributes}>{children}</p>
    case 'align-center':
      return <p className="center" {...attributes}>{children}</p>
    case 'align-right':
      return <p className="right" {...attributes}>{children}</p>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <div
      className="toolbar-btn clickable-p"
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icons[icon] ?
        <img src={icons[icon]} /> :
        <p>{icon}</p>}
    </div>
  )
}

const PopUpImage = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Popup trigger={<div className="button toolbar-btn clickable-p"> Open Modal </div>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
        </a>
          <div className="header"> Modal Title </div>
          <div className="content">
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
          </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <div
      className="toolbar-btn clickable-p"
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <img src={icons[icon]} />
    </div>
  )
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

export default TextEditor