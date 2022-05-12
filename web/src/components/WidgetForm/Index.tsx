import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

import { CloseButton } from "../CloseButton";

//@ts-ignore
import bugImageUrl from "../../assets/bug.svg";
//@ts-ignore
import ideaImageUrl from "../../assets/idea.svg";
//@ts-ignore
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';


export const feedback ={
    BUG:{
        title:"Problema",
        image:{
            src:bugImageUrl,
            alt:"bug"
        }
    },
    IDEIA:{
        title:"Ideia",
        image:{
            src:ideaImageUrl,
            alt:"Ideia"
        }
    },
    OTHER:{
        title:"Outro",
        image:{
            src:thoughtImageUrl,
            alt:"Outro"
        }
    }
}

export type FeedbackType = keyof typeof feedback;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    function handleFeedbackRestart(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div 
        className="bg-surface-primary shadow-lg rounded-lg p-4 mb-3 flex flex-col justify-between items-center w-[calc(100vw-2rem)] md:w-auto relative">
            { feedbackSent ? (
                    <FeedbackSuccessStep onRestartFeedback={handleFeedbackRestart} />
                ) : (
                    <>
                        {!feedbackType ? (
                                <FeedbackTypeStep onFeedbackType={setFeedbackType}/>
                            ) : (
                                <FeedbackContentStep 
                                    feedbackType={feedbackType} 
                                    onRestartFeedback={handleRestartFeedback}
                                    onFeedbackSent={() => setFeedbackSent(true)}
                                />
                            )
                        }
                    </>
                )
            }









            <footer className="text-xs text-text-secondary font-medium">
                    Feito com ♥ pela <a className="underline underline-offset-2" href="http://">Rocketseat</a>
            </footer>

        </div>
    )
}