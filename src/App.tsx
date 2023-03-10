import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './PhotoViewer/PhotoViewer.css'
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { photoSelection } from './PhotoSelector/PhotoSelector';
import { DisplayImageList } from './PhotoSelector/PhotoSelector';


function App() {
  const [mainImage, setMainImage] = useState("https://picsum.photos/id/600/1600/900");



  return (
    <div>
      <h1>React Photo Viewer</h1>
      <div className='mainpiccontainer'>
        <PhotoViewer url={mainImage} />
      </div>

      <h1> Select Image </h1>
        <DisplayImageList setMainImage={setMainImage} mainImage={mainImage}/>
    </div>

  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

export default App 
