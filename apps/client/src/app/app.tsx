import NavbarNotLogin from "./componetes/Layout/NavbarNotLogin/NavbarNotLogin";
import Footer from "./componetes/Layout/footer/Footer";
import RouterDom from "./componetes/router/RouterDOM";


export function App() {
  return (
    <div>
      <NavbarNotLogin/>
      <RouterDom/>
      <Footer/>

    </div>
  );
}

export default App;
