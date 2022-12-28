import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './component/latout/Main';

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
