import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    // <div>
    //   <h2 class="bg-sky-500 text-myColor-500" >Hello</h2>
    //   <h2 class="bg-sky-500 text-red-300" >Hello</h2>
    //   <h2 class="text-stone-700 text-8xl" >Hello</h2>
    // </div>
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
