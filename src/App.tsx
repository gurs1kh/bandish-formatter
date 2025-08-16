import './App.scss'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useResize } from './hooks/useResize'

export const App = () => {
  const [text, setText] = useState('')
  const { editorWidth, previewWidth, handleMouseDown } = useResize()

  return (
    <div className="markdown-app-container">
      <div className="markdown-main">
        <div className="markdown-editor" style={{ width: editorWidth }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your Markdown here..."
          />
        </div>
        <div className="markdown-resizer" onMouseDown={handleMouseDown} />
        <div className="markdown-preview" style={{ width: previewWidth }}>
          <div className="markdown-preview-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
