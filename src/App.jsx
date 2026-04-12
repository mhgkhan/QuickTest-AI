import './App.css'
import Footer from './components/Footer'
import RoutesBridge from './utils/RoutesBridge'

function App() {

  return (
    <>
      <main className='min-h-screen'>
        {/* THIS RoutesBridge file have imported all pages */}
        <RoutesBridge />
      </main>
      <Footer />
    </>
  )
}

export default App
