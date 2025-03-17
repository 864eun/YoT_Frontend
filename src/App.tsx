import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './layout/Layout';
import MyCourse from './pages/my-course/MyCourse';
import TodayCourse from './pages/today-course/TodayCourse';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <Layout hideServiceHeader={true}>
              <Home />
            </Layout>
          }
        />
          <Route
          path="/my-course"
          element={
            <Layout serviceTitle="나만의 코스" serviceDescription="나만을 위한 코스를 만들어보세요.">
              <Routes>
                <Route index element={<MyCourse />} />
              </Routes>
            </Layout>
          }
        />
        <Route
          path="/today-course"
          element={
            <Layout serviceTitle="오늘의 코스" serviceDescription="오늘의 코스를 추천해드립니다.">
              <Routes>
                <Route index element={<TodayCourse />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
