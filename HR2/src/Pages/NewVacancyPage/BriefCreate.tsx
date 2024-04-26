import {Select, Stack, Option, Input, Checkbox} from "@mui/joy";
import {Container, Typography} from "@mui/material";

function BriefCreate() {



    return (
        <Container maxWidth="lg">
            <Stack spacing={2}>
                <Typography variant="h6">На какой проект/продукт рассматривается кандидат</Typography>
                <Select placeholder="Выберите профиль должности">
                    <Option value="1 project">Проект</Option>
                    <Option value="2 project">Продукт</Option>
                </Select>
                <Typography variant="h6">Какие цели стоят перед командой в ближайшие 6-12 месяцев</Typography>
                <Input placeholder="Введите описание"></Input>
                <Typography variant="h6">Каких кандидатов не предлогать</Typography>
                <Input placeholder="Введите описание"></Input>
                <Typography variant="h6">Минимальный уровень образования кандидата</Typography>
                <Input placeholder="Введите уровень образования"></Input>
                <Typography variant="h6">Что является главным</Typography>
                <Input placeholder="Введите описание"></Input>
                <Typography variant="h5">Каналы публикации</Typography>
                <Checkbox label="внутреняя публикация" />
                <Checkbox label="rabota.sber.ru"/>
                <Checkbox label="HH.ru"/>
            </Stack>
        </Container>
    )
}

export default BriefCreate