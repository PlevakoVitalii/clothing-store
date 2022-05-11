import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages";
import CategoriesListPage from "../../pages/Categories/Categories-list-page/CategoriesListPage";
import { Layout } from "../Layout/Layout";
import "./App.module.css";

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="CategoriesList" element={<CategoriesListPage />} />
          <Route path="CategoriesAllWomen" element={<CategoriesAllWomen />} />
          {/* <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} /> */}
          {/* <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} /> */}
          {/* <Route
            path="posts/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
