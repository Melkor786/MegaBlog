import './App.css'

function App() {
  //if CRA is used
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  // if VITE is used
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <h1>A blog App with React</h1>
    </>
  )
}

export default App
