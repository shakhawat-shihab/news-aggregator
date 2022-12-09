import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    // <div>
    //   <h2 class="bg-sky-500 text-myColor-500" >Hello</h2>
    //   <h2 class="bg-sky-500 text-red-300" >Hello</h2>
    //   <h2 class="text-stone-700 text-8xl" >Hello</h2>
    // </div>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
