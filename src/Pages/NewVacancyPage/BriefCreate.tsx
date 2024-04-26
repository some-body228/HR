import {Select, Stack, Option, Input, Checkbox, Textarea, RadioGroup, Radio} from "@mui/joy";
import {Container, FormControlLabel, Typography} from "@mui/material";

function BriefCreate() {



    return (
        <Container maxWidth="lg" sx={{paddingBottom: '40px'}}>
            <Stack spacing={2}>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">На какой проект/продукт рассматривается кандидат</Typography>
                <Select placeholder="Выберите профиль должности">
                    <Option value="1 project">Проект</Option>
                    <Option value="2 project">Продукт</Option>
                </Select>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">Какие цели стоят перед командой в ближайшие 6-12 месяцев</Typography>
                <Textarea minRows={5} placeholder="Введите описание"></Textarea>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">Каких кандидатов не предлагать</Typography>
                <Input placeholder="Введите описание"></Input>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">Минимальный уровень образования кандидата</Typography>
                <Select placeholder="Введите уровень образования">
                    <Option value={"1"}>Общее образование</Option>
                    <Option value={"2"}>Среднее специальное</Option>
                    <Option value={"3"}>Высшее образование</Option>
                </Select>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">Ключевые требования к опыту кандидата, на которые хотели бы обратить внимание</Typography>
                <Textarea placeholder="Введите описание"></Textarea>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">Есть ли возможность удаленной работы/смешанного графика</Typography>
                <RadioGroup
                    sx={{position: "relative", left:" 6px"}}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"

                >

                    <FormControlLabel value="yes" control={<Radio />} label="Да" />
                    <FormControlLabel value="no" control={<Radio />} label="Нет" />
                </RadioGroup>
                <Select multiple placeholder="В каком офисе планируется рабочее место">
                    <Option value={"1"}>Москва</Option>
                    <Option value={"2"}>Санкт-Питербург</Option>
                    <Option value={"3"}>Самара</Option>
                </Select>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">Кто будет проводить интервью</Typography>
                <Select  placeholder="Кто будет проводить интервью">
                    <Option value={"1"}>Егоров В. А.</Option>
                    <Option value={"2"}>Петров А. Ф</Option>
                    <Option value={"3"}>Афанасьев Д. Р.</Option>
                </Select>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h6">Что еще важно для нанимающего руководителя</Typography>
                <Textarea placeholder="Введите описание"></Textarea>
                <Typography sx={{fontFamily: "SB sans Text", fontSize: "16px", fontWeight: "600"}} variant="h5">Каналы публикации</Typography>
                <Checkbox label="внутреняя публикация" />
                <Checkbox label="rabota.sber.ru"/>
                <Checkbox label="HH.ru"/>
            </Stack>
        </Container>
    )
}

export default BriefCreate