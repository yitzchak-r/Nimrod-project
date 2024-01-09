import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MatchingClothes from '../../pages/MatchingClothes/MatchingClothes';
import ClothesThatFit from '../../pages/ClothesThatFit/ClothesThatFit';
import Login from '../../pages/Login/Login';
import SignIn from '../../pages/SignIn/SignIn';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import NavbarNotLogin from '../../Layout/NavbarNotLogin/NavbarNotLogin';
import Footer from '../../Layout/footer/Footer';
import Navbar from '../../Layout/Navbar/Navbar';

const RouterDom = () => {
  // const NotFoundPage = () => <div>404 Not Found</div>;

  return (
    <Routes>
      <Route path="/" element={<><NavbarNotLogin /><HomePage /><Footer/></>} />
      <Route path="/registeredUser" element={<><Navbar/><HomePage /><Footer/></>} />

      <Route path="/Login" element={<Login/> } />
      <Route path="/SignIn" element={<SignIn />} />

      <Route path="/matchingClothes" element={<MatchingClothes />} />
      <Route
        path="/ClothesThatFit"
        element={
          <ClothesThatFit
            gender={''}
            clothingType={''}
            color={''}
            clothingOption={''}
          />
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterDom;