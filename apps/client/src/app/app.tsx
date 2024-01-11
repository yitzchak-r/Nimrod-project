import Navbar from "./componetes/Layout/Navbar 01/Navbar";
import RouterDom from "./componetes/router/routerDOM/RouterDOM";


export function App() {
  return (
    <div>
      <Navbar isLoggedIn={false}/>
      <Navbar isLoggedIn={true}/>
      <RouterDom/>
    </div>
  );
}

export default App;
