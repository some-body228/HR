import {Link, useNavigate} from "react-router-dom";
import {Container, Typography, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Button, Option, Stack, Table} from "@mui/joy";
import * as React from "react";
import {SelectValue} from "@mui/base/useSelect";
import {ReactNode, useEffect, useState} from "react";
import {getVacancies} from "./api/api.ts";
import Avatar from "@mui/joy/Avatar";
import {getPhotoUrl, getRandomFIO, grades, team} from "../randomizers/rundom.ts";

function TeamPage() {
    let count = Number(localStorage.getItem("count"));
    const navigate = useNavigate()
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);
    const [selectedPos, setSelectedPos] = useState()
    const [selectedGradeName, setSelectedGradeName] = useState()
    const [selectedFIO, setSelectedFIO] = useState()

    const handleChange = (event: SelectChangeEvent<string | number>, child: ReactNode) => {
        localStorage.setItem("count", String(++count))
        navigate("/create", { state: {grade: grades[selectedGradeName], fio:selectedFIO} });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const select = (e) => {
        setSelectedGradeName(e.currentTarget.id.split("_")[1])
        setSelectedPos(e.currentTarget.id.split("_")[0]);
        setSelectedPos(e.currentTarget.id.split("_")[0]);
        setSelectedFIO(e.currentTarget.id.split("_")[2]);
        console.log(e.currentTarget)
    };
    return (
        <Container maxWidth="lg" sx={{marginTop: "20px"}} >
            <Typography sx={{fontFamily: "SB sans Text", fontSize: "18px", fontWeight: "600"}} variant="h5" gutterBottom >
                Моя команда
            </Typography>
            <Table hoverRow  sx={{marginTop: "30px"}}>
                <thead>
                <tr>
                    <th style={{width: '20%'}}>Сотрудники и позиции</th>
                    <th>Грейд</th>
                    <th>ID должности</th>
                    <th>Оклад</th>
                    <th>CR</th>
                    <th>Занятость</th>
                    <th>Оценка 2024</th>
                </tr>
                </thead>
                <tbody>
                {team.map((teammember)=> {
                    return (
                        <tr onClick={select} id={teammember.posID + "_" + teammember.grade + "_" + teammember.name} key={teammember.grade} style={{backgroundColor: teammember.posID == selectedPos? "#F0F0F0": "" }}>
                            <td style={{width: '20%'}}>
                                <Avatar src={teammember.url}></Avatar>
                                <Typography sx={{fontFamily: "SB sans Text"}}>{teammember.name}</Typography>
                            </td>
                            <td>{teammember.grade}</td>
                            <td>{teammember.posID}</td>
                            <td>*****</td>
                            <td>*****</td>
                            <td>100%</td>
                            <td>****</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <Stack sx={{marginTop: "30px"}} direction="row" alignItems="center" justifyContent="end" spacing={2}>
                <Button disabled={!selectedPos}>Перевести</Button>
                <Button variant="soft" disabled={!selectedPos}>Изменить оклад</Button>
                <Button variant="soft" disabled={!selectedPos} onClick={handleOpen}>...
                </Button>
                <Select sx={{width: "0px", height: "0px", border: "none", visibility:"hidden"} }
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        label="Age"
                        onChange={handleChange}
                >
                    <MenuItem value={"Главный инженер по разработке"}>Открыть позицию</MenuItem>
                </Select>
            </Stack>
        </Container>
    )
}

export default TeamPage