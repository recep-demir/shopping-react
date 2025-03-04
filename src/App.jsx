import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./app/store";





function App() {
  return (
  <div>
    <Provider store ={store}>
   <Home/>
   </Provider>

  </div>
  
  
  )
}

export default App;
