import {Container} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './styles.css'

interface IVacancy {
    title: string
    positionNumber: string
    manager?: string
    recrutor?: string
    brief: any

}


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function VacancyView() {

    const navigate = useNavigate();

    const location = useLocation()

    const [vacancy, setVacancy] = useState()


    useEffect(() => {

    }, [location.state]);


    return (

        <>
            <Container className={'container'} maxWidth="lg" sx={{marginTop: "20px"}}>
                <Box className={'firstBox'} maxWidth={'1000px'} height={'620px'}>
                    <Box className={'secondBox'}>
                        <h1>{vacancy?.developer}</h1>
                        <p className={'description'} style={{fontWeight: 600}}>{vacancy?.positionNumber}</p>
                    </Box>
                    <Stack className={'stack'} spacing={2} maxWidth={'1000px'} height={'40px'}>
                        <Item className={'item'}>{vacancy?.FIO}</Item>
                        <Item className={'item'}>{vacancy?.number}</Item>
                        <Item className={'item'}>{vacancy?.login}</Item>
                        <Item className={'item'}>{vacancy?.developer}</Item>
                        <Item className={'item'}>{vacancy?.skills}</Item>

                        <div className={'checkbox'} style={{display: 'flex'}}>
                            <p>Опыт соответствует желаемой должности</p>
                            <Checkbox {...label} />
                        </div>

                        <Button
                            style={{width: '210px', height: '40px'}}
                            variant="contained">Откликнуться</Button>
                    </Stack>
                </Box>
            </Container>

        </>
    )
}

export default VacancyView