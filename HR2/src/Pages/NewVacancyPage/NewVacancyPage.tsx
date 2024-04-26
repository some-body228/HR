import {Container, Typography} from "@mui/material";
import {useState} from "react";
import {Button, Stack} from "@mui/joy";
import {WithPopOver} from "../../HOCs/WithPopOver.tsx";
import DescriptionCreate from "./DescriptionCreate.tsx";
import BriefCreate from "./BriefCreate.tsx";
import {useLocation, useNavigate} from "react-router-dom";

interface Props {
    salarySplash: string;
}

function NewVacancyPage(props: Props) {

    const navigate = useNavigate();

    const location = useLocation()

    const [currentStep, setCurrentStep] = useState("input")

    const [finalVacancy, setFinalVacancy] = useState("")

    const changeStep = () => {
        if(currentStep === "input") {
            setCurrentStep("brief" )
            return
        } else if(currentStep === "brief") {
            navigate("/")
        }
    }

    return (
        <>
            <Container maxWidth="lg" sx={{marginTop: "20px"}}>
            <Typography variant="h5">Новая вакансия</Typography>
            </Container>
            {
                currentStep === "input" &&
                <DescriptionCreate position={location.state} finalVacancy={finalVacancy} setFinalVacancy={setFinalVacancy} vacancyName={props.vacancyName} salarySplash={props.salarySplash} />

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
                    <WithPopOver text={"Куда полез? Иди по сценарию"}>
                        <Button
                            color="neutral"
                            variant="soft"
                        >...</Button>

                    </WithPopOver>

                </Stack>
            </Container>
        </>
    )
}

export default NewVacancyPage