import axios from 'axios';

export const createVacancy = (skills: string, profile: string) => {
    return axios.post<any>('http://localhost:8000/vacancy/',  `Напиши вакансию на ${profile}, который будет работать с микросервисной архитектурой через Разработку-Тестированием. 
Нужны знания ${skills}.
Укажи все базовые Хард и Софт скиллы на подобную вакансию.`, {
            headers: {
                Authorization: "Bearer Y2JkYzY3ZTUtMjg2Ny00ODJkLWE1ZTYtYmE4MTliMWZkNjVhOmE5MWMxODRhLWQyNmEtNGEwNi1hYzVhLTRiYjZiODYxNDg4Zg=="}
            }
    )
}

export const clarifyVacancy = (clarification: string) => {
    return axios.post<any>('http://localhost:8000/vacancy/',  clarification, {
            headers: {
                Authorization: "Bearer Y2JkYzY3ZTUtMjg2Ny00ODJkLWE1ZTYtYmE4MTliMWZkNjVhOmE5MWMxODRhLWQyNmEtNGEwNi1hYzVhLTRiYjZiODYxNDg4Zg=="}
        }
    )
}