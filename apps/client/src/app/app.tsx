import Navbar from "./componetes/Layout/Navbar/Navbar";
import RouterDom from "./componetes/router/routerDOM/RouterDOM";
import { useAtom } from 'jotai';
import { loginStatusAtom } from './componetes/pages/Login/Login' ;
import Footer from './componetes/Layout/footer/Footer';

export function App() {
  const [loginStatus] = useAtom(loginStatusAtom);

  return (
    <div>
      {loginStatus === 'success' ? (
        <Navbar isLoggedIn={true} />
      ) : (
        <Navbar isLoggedIn={false} />
      )}

      <RouterDom />
      <Footer/>
    </div>
  );
}

export default App;
