import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  AddHotel,
  EditHotel,
  FavoritesList,
  HotelDetails,
  HotelList,
  LoginForm,
  NotFound,
  ReservationForm,
  SignUpForm,
} from '../components';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HotelList />} />
        <Route exact path='/hotels/:id' element={<HotelDetails />} />
        <Route exact path='/hotels/add' element={<AddHotel />} />
        <Route exact path='/hotels/edit/:id' element={<EditHotel />} />
        <Route exact path='/favorites' element={<FavoritesList />} />
        <Route exact path='/reservations/:id' element={<ReservationForm />} />
        <Route exact path='/login' element={<LoginForm />} />
        <Route exact path='/signup' element={<SignUpForm />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
