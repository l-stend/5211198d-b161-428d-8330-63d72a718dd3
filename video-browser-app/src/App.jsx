import './App.css';
import { firebaseConfig } from './firebase-config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Browse, SingleVideo } from './pages';
import { ProtectedRoute, SharedLayout } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path='/browse' element={<Browse />} />
          <Route path='/video' element={<SingleVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
