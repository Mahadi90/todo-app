
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      {/* todos Ui */}
      <div className="container my-5 mx-auto w-[100%] md:w-[50%] p-8 bg-slate-900 rounded-lg text-white min-h-[70vh]">
        <div className="add-todo">
          <h2 className='text-2xl font-bold mb-2'>Add todos</h2>
          <input className='border rounded w-[70%]' type="text" name="" id="" />
          <button className='mx-2 bg-violet-600 px-4 py-1 rounded cursor-pointer font-semibold hover:bg-violet-800'>Add</button>
        </div>
        <div className="todos">
          <h3 className='text-2xl font-bold my-2'>Your Todos</h3>
          <div className="todo flex items-center">
           <p className=' rounded-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, suscipit?</p>
           <button className='mx-2 h-fit bg-violet-600 px-4 py-1 rounded cursor-pointer font-semibold hover:bg-violet-800'>edit</button>
           <button className='mx-1 h-fit bg-violet-600 px-4 py-1 rounded cursor-pointer font-semibold hover:bg-violet-800'>delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
