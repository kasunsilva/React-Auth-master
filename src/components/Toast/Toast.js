import React, { useEffect, useRef } from 'react'
import './Toast.scss'

function Toast({ children, remove }) {
  const removeRef = useRef()
  removeRef.current = remove

  useEffect(() => {
    const duration = 5000;
    const id = setTimeout(() => removeRef.current(), duration);
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="toast">
      <div className="toast-text">
        { children }
        {/* <button onClick={remove} className="toast-close-btn">x</button> */}
      </div>
    </div>
  );
}

export default Toast;