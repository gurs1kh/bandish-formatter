import { useState, useEffect, useRef } from 'react'

export const useResize = () => {
  const [editorWidth, setEditorWidth] = useState(35)
  const isDraggingRef = useRef(false)

  const handleMouseDown = () => {
    isDraggingRef.current = true
    document.body.style.cursor = 'col-resize'
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
    document.body.style.cursor = ''
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDraggingRef.current) {
      const container = document.querySelector('.markdown-main') as HTMLElement
      if (container) {
        const rect = container.getBoundingClientRect()
        let percent = ((e.clientX - rect.left) / rect.width) * 100
        percent = Math.max(20, Math.min(80, percent))
        setEditorWidth(percent)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return {
    editorWidth: `${editorWidth}%`,
    previewWidth: `${100 - editorWidth}%`,
    handleMouseDown,
  }
}
