import {Container, Button as MaterialButton, Typography, Grid, Backdrop, Alert} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useState} from "react";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Input, Option, Select, Textarea, Button, Stack, CircularProgress} from "@mui/joy";
import {stringCallback, stringSelectCallback} from "../../utils/utils.ts";
import {WithPopOver} from "../../HOCs/WithPopOver.tsx";
import {clarifyVacancy, createVacancy} from "../../api/api.ts";


interface Props {
    position: string
    salarySplash: string;
    finalVacancy: string;
    setFinalVacancy: (vacancy: string) => void;
}

function DescriptionCreate(props: Props) {

    const count = Number(localStorage.getItem("count"))
    const [isLoading, setIsLoading] = useState(false)

    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState("")
    const [profile, setProfile] = useState("")
    const [clarification, setClarification] = useState("")
    const [feedback, setFeedback] = useState(false)


    const onVacancyCreate = () => {
        setIsLoading(true)
        createVacancy(skills, profile)
            .then((res) => props.setFinalVacancy(res.data[2].content))
            .finally(() => {
                setIsLoading(false)
                setFeedback(true)
            })
    }
    const onClarification = () => {
        setIsLoading(true)
        clarifyVacancy(props.finalVacancy + " \n " + clarification )
            .then((res) => props.setFinalVacancy(res.data[2].content))
            .finally(() => setIsLoading(false))

    }
    const onCloseAlert = () => {
        setFeedback(false)
    }


    return (
        <>
            <Container maxWidth="lg">
                {feedback && <Alert icon={false} sx={{position: "fixed", top:"20px", right: "20px", zIndex:10}} severity="info">Оцените работу модели
                    <MaterialButton onClick={onCloseAlert} >
                        <ThumbDownIcon fontSize={"small"} color="info"></ThumbDownIcon>
                    </MaterialButton>
                    <MaterialButton sx={{paddingLeft: "0"}} onClick={onCloseAlert}>
                        <ThumbUpIcon fontSize={"small"} color="info"></ThumbUpIcon>
                    </MaterialButton>
                </Alert>}
                <Typography variant="h5" gutterBottom >
                    {props.position}
                </Typography>
                <Typography variant="caption" gutterBottom>
                    Номер позиции: {count}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {props.salarySplash}
                </Typography>
                <WithPopOver text={"А что еще тебе добавить?"}>
                    <MaterialButton sx={{paddingLeft: "0"}}>
                        <AddCircleOutlineIcon color="info"></AddCircleOutlineIcon>
                        <Typography variant="caption" color="info" gutterBottom sx={{margin: "0 0 0 5px"}}>
                            добавить делегата
                        </Typography>
                    </MaterialButton>
                </WithPopOver>
            </Container>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Stack width={'1000px'} spacing={5}>
                            <Textarea minRows={5} onChange={stringCallback(setDescription)} value={description} placeholder="Введите описание продукта" >
                                <Backdrop  open={true} >
                                    <CircularProgress />
                                </Backdrop>
                            </Textarea>
                            <Select placeholder="Выберите профиль должности" value={profile} onChange={stringSelectCallback(setProfile)}>
                                <Option value={"junior java developer"}>Джун-дурак тыловик</Option>
                                <Option value={"middle java developer"}>Милд-простак тыловик</Option>
                                <Option value={"junior javaScript developer"}>Джун-дурак передовик</Option>
                                <Option value={"middle javaScript developer"}>Милд-простак передовик</Option>
                            </Select>
                            <Input
                                value={skills}
                                onChange={stringCallback(setSkills)}
                                placeholder="Введите необходимые навыки"
                            />
                            <Stack direction="row" spacing={2}>
                                <WithPopOver text={"Пускай роботы работают"}>
                                    <Button>Заполнить вручную</Button>
                                </WithPopOver>
                                <Button loading={isLoading} onClick={onVacancyCreate}>Сгенерировать {props.finalVacancy && "заново"}</Button>
                            </Stack>
                        <WithPopOver text={"Доверяй, но проверяй"}>
                            <MaterialButton sx={{paddingLeft: "0"}}>
                                <Typography variant="caption" gutterBottom sx={{margin: "0 0 0 5px"}}>
                                    Тесты <Typography variant="caption" color="info"> 0 </Typography>
                                </Typography>
                                <AddCircleOutlineIcon color="info"></AddCircleOutlineIcon>
                            </MaterialButton>
                        </WithPopOver>
                        </Stack>

                    </Grid>
                    {props.finalVacancy &&
                        <Grid item xs={9}>
                            <Stack spacing={2}>
                                <Textarea minRows={20} maxRows={20} value={props.finalVacancy} onChange={stringCallback(props.setFinalVacancy)}></Textarea>
                                <Input onChange={stringCallback(setClarification)} placeholder={"Напишите, что GigoChat должен исправить"}></Input>
                                <Button loading={isLoading} onClick={onClarification} fullWidth>Отправить</Button>

                            </Stack>
                        </Grid>

                    }
                </Grid>
            </Container>
        </>
    )
}

export default DescriptionCreate