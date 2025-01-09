import './App.css'
import stickers from '../resources/meme.png';

function App() {

  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <p>Hello world</p>
        <img src={stickers} width={200} height={200} alt='lmao' />
      </div>
    </>
  )
}

export default App
