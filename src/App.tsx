import './App.scss'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const App = () => {
  // Get initial text from URL if present
  const getInitialText = () => {
    const params = new URLSearchParams(window.location.search)
    return params.get('text') ? decodeURIComponent(params.get('text') || '') : ''
  }

  const [text, setText] = useState(getInitialText())
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(
      `${window.location.origin}${window.location.pathname}?text=${encodeURIComponent(text)}`
    )
  }, [text])

  return (
    <div className="markdown-app-container">
      <header className="markdown-header">
        <h1>Markdown Playground</h1>
        <p>Write, preview, and share Markdown!</p>
      </header>
      <div className="markdown-main">
        <section className="markdown-editor">
          <h2>Editor</h2>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your Markdown here..."
            rows={12}
          />
        </section>
        <section className="markdown-preview">
          <h2>Preview</h2>
          <div className="markdown-preview-content">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </section>
      </div>
      <footer className="markdown-footer">
        <h2>Share</h2>
        <input
          type="text"
          value={shareUrl}
          readOnly
          style={{ width: '100%' }}
          onFocus={(e) => e.target.select()}
        />
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(shareUrl)
          }}
        >
          Copy Link
        </button>
      </footer>
    </div>
  )
}
