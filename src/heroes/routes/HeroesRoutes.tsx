import { Navigate, Route, Routes } from "react-router-dom"

import { DCPage, HeroPage, MarvelPage, SearchPage } from "../../heroes";
import { NavBar } from "../../ui";

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to={'/marvel'} />} />
                </Routes>
            </div>
        </>
    )
}
