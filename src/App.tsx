import {Link, useNavigate} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import {Button, Option, Select, Stack, Table} from "@mui/joy";
import * as React from "react";
import {SelectValue} from "@mui/base/useSelect";
import {useEffect, useState} from "react";
import {getVacancies} from "./api/api.ts";

function App() {
  const navigate = useNavigate()
    const [vacancies, setVacancies] = useState([])
  let count = Number(localStorage.getItem("count"));
  if (isNaN(count)) {
    count = 1;
  }
  const onSelectPosition = (e: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, value: SelectValue<string, false>)=>{
    localStorage.setItem("count", String(++count))
      navigate("/create", { state: value });

  }
    const onSelectVacancy = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>)=>{
        navigate("/view", { state: e.currentTarget.id });
    }

  useEffect(()=> {
      getVacancies()
          .then(res=>setVacancies(res.data))
  }, [])
  return (
    <Container maxWidth="lg" sx={{marginTop: "20px"}}>
      <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
      >
        <Typography sx={{fontFamily: "SB sans Text", fontSize: "18px", fontWeight: "600"}} variant="h5">Вакансии</Typography>
      </Stack>

        <Table sx={{marginTop: "30px"}} hoverRow>
            <thead style={{ fontFamily: "SB sans Text"}}>
            <tr>
                <th style={{width: '20%', fontFamily: "SB sans Text"}}>Вакансия</th>
                <th style={{ fontFamily: "SB sans Text"}}>Нанимающий руководитель</th>
                <th>Рекрутер</th>
                <th>Кандидаты</th>
            </tr>
            </thead>
            <tbody style={{ fontFamily: "SB sans Text"}}>
            {vacancies.map((vacancy)=> {
                return (
                    <tr onClick={onSelectVacancy} id={vacancy.id}>
                        <td style={{width: '20%'}}>{vacancy.title} <p
                            style={{margin: "3px 0", color: "#AFAFAF"}}>{vacancy.positionNumber}</p></td>
                        <td>{vacancy.manager}</td>
                        <td>{vacancy.recrutor}</td>
                        <td>{vacancy.candidates}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>

    </Container>
  )
}

export default App
