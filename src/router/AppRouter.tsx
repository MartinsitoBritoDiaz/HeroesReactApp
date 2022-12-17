import { Navigate, Route, Routes } from "react-router-dom";

import { DCPage, HeroesRoutes, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";
import { NavBar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Routes>
          
          <Route path="login" element={<LoginPage />} />

          <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
