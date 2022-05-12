import { CloseButton } from "../../CloseButton";
import  successIncon  from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
    onRestartFeedback: () => void;
}

export function FeedbackSuccessStep({onRestartFeedback}: FeedbackSuccessStepProps){


    return(
        <>
            <div className="flex justify-center gap-2 flex-col items-center mx-10 mt mt-11 mb-10">
                <CloseButton/>
                <img src={successIncon} alt="" className="w-9 h-9" />
                <span className="text-xl leading-6 text-text-primary font-medium">Agradecemos o feedback!</span>
                <button 
                    type="button"
                    className="bg-surface-secondary text-sm leading-6 text-text-primary font-medium rounded py-2 px-6 mt-8 hover:bg-surface-tertiary" onClick={onRestartFeedback}
                    >
                        Quero enviar outro
                </button>
            </div>
        </>
    )
}