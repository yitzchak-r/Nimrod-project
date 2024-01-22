import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MatchingClothes from '../../pages/MatchingClothes/MatchingClothes';
import ClothesThatFit from '../../pages/ClothesThatFit/ClothesThatFit';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import MainComponent from '../../pages/MainComponent/MainComponent';

const RouterDom = () => {

  return (
    <Routes>
            <Route path="/" element={<MainComponent/>} />

      <Route path="/registeredUser" element={<><HomePage /></>} />

      <Route path="/Login" element={<Login/> } />

      <Route path="/resetPassword" element={<ResetPassword/> } />
      <Route path="/SignIn" element={<SignUp />} />

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




























