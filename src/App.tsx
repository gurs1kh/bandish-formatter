import './App.scss'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export const App = () => {
  const [text, setText] = useState('')

  return (
    <div className="markdown-app-container">
      <div className="markdown-main">
        <div className="markdown-editor">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your Markdown here..."
            rows={12}
          />
        </div>
        <div className="markdown-preview">
          <div className="markdown-preview-content">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
