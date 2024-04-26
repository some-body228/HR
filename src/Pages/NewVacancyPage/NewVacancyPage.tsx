import {Container, Typography} from "@mui/material";
import {useState} from "react";
import {Button, Stack} from "@mui/joy";
import {WithPopOver} from "../../HOCs/WithPopOver.tsx";
import DescriptionCreate from "./DescriptionCreate.tsx";
import BriefCreate from "./BriefCreate.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {saveVacancy} from "../../api/api.ts";
import {getRandomFIO} from "../../randomizers/rundom.ts";
import Divider from '@mui/material/Divider';


interface Props {
    salarySplash: string;
}

function NewVacancyPage(props: Props) {

    const count = localStorage.getItem("count")

    const navigate = useNavigate();

    const location = useLocation()

    const [currentStep, setCurrentStep] = useState("input")

    const [finalVacancy, setFinalVacancy] = useState("")

    const changeStep = () => {
        if(currentStep === "input") {
            setCurrentStep("brief" )
            return
        } else if(currentStep === "brief") {
            saveVacancy({
                content: finalVacancy,
                title: pos,
                recrutor: getRandomFIO(),
                manager: "Maкаров М. А.",
                positionNumber: count || "0",
                content: finalVacancy
            })
            navigate("/vacancies")
        }
    }

    const saveVacancyTEST = () => {
            saveVacancy({
                content: "finalVacancy",
                title: pos,
                recrutor: getRandomFIO(),
                manager: "Maкаров М. А.",
                positionNumber: count || "0",
            })
            navigate("/")
        }

    const [pos, setPos] = useState(location.state)

    return (
        <>
            <Container maxWidth="lg" sx={{marginTop: "20px"}}>
            <Typography sx={{fontFamily: "SB sans Text", fontSize: "18px", fontWeight: "600"}} variant="h5">Новая вакансия</Typography>
               <Divider sx={{margin: "30px 0 "}}></Divider>
            </Container>
            {
                currentStep === "input" &&
                <DescriptionCreate position={pos} setPos={setPos} finalVacancy={finalVacancy} setFinalVacancy={setFinalVacancy}  salarySplash={props.salarySplash} />

                ||
                currentStep === "brief" &&
                <BriefCreate></BriefCreate>
            }
            <Container maxWidth="lg">
                <Stack direction="row" spacing={2}>
                    <Button disabled={!finalVacancy} onClick={changeStep}>{
                        currentStep === "input" &&
                        "Далее"
                        ||
                        currentStep === "brief" &&
                        "Создать вакансию"
                    }</Button>
                    <Button  onClick={()=>{navigate("/vacancies")}}>
                        сохранить черновик
                    </Button>
                </Stack>
            </Container>
        </>
    )
}

export default NewVacancyPage