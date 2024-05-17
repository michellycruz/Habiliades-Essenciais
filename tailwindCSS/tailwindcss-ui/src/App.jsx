import { useState } from 'react'
import Header from './components/Header'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import Bottombar from './components/Bottombar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Container>
        <div className='flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative'> 
          <Sidebar />
          <div>
            <h1 className='text-3xl text-center'>Ready to start with Tailwind!</h1>
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
          <Bottombar />
        </div>
      </Container>
    </>
  )
}

export default App
