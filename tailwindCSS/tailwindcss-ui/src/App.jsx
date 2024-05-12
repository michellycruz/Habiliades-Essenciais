import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-zinc-800 text-zinc-100">
      <h1 className='text-3xl text-center'>Ready to start with Taildwind!</h1>
      <button 
        className='
          block w-fit mx-auto my-8 px-4 py-2 rounded-lg
          border-transparent hover:border-cyan-500 border-2
          transition-colors
        '
        onClick={() => setCount(count => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
