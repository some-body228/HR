import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


import App from "./App.tsx";
import NewVacancyPage from "./Pages/NewVacancyPage/NewVacancyPage.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import VacancyView from "./Pages/VacancyView/VacancyView.tsx";
import {CandidateViewPage} from "./Pages/CandidateViewPage.tsx";
import TeamPage from "./Pages/TeamPage.tsx";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<TeamPage />} />
            <Route path="/vacancies" element={<App />} />
            <Route path="create" element={<NewVacancyPage 
                 salarySplash={"***** - ***** Р ( медиана: ***** )"}/>} />
            <Route path="view" element={<VacancyView/>} />
            <Route path="candidateview" element={<CandidateViewPage/>} />
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
            <RouterProvider router={router}>
            </RouterProvider>
        </LocalizationProvider>
    </React.StrictMode>,
);
