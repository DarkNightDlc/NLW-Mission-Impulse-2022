import { CloseButton } from "../../CloseButton";
import { feedback, FeedbackType } from "../Index";

interface Props {
    onFeedbackType: (p:FeedbackType | null ) => void;
}

export function FeedbackTypeStep({onFeedbackType }:Props) {


    return (
        <>
            <header className="flex justify-center">
                <span className="text-xl leading-6 text-text-primary font-medium">Deixe seu feedback</span>
                <CloseButton/>
            </header> 
            <div className="flex justify-center gap-2 items-center w-full">
            {
                Object.entries(feedback).map(([key,value])=>{
                    return (
                        <button type="button" key={key} 
                        onClick={()=> onFeedbackType(key as FeedbackType)}
                        className="w-24 max-h-28 flex flex-col items-center py-5 px-2 gap-2 bg-surface-secondary border-brand hover:border-2 focus:border-brand-hover focus:border-2 focus:outline-none rounded-lg mt-8 mb-12">
                            <img src={value.image.src} alt={value.image.alt} className="w-12 h-12"/>
                            <span className="text-sm text-text-primary">{value.title}</span>
                        </button>
                    );
                })
            }
            </div>
        </>
    );
}