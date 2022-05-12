import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";

import { feedback, FeedbackType } from "../Index";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onRestartFeedback: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, onRestartFeedback, onFeedbackSent }: FeedbackContentStepProps) {

    const feedbackTypeInfo = feedback[feedbackType]; 
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string>('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        setIsSendingFeedback(true);


        await api.post('feedbacks', {
            type: feedbackType,
            comment,
            screenshot,
            });

        setIsSendingFeedback(false);
        onFeedbackSent();
    }

    return(
        <>
        <header className="flex justify-center gap-2">
            <button
                type="button" 
                onClick={onRestartFeedback} 
                className="p-1 absolute top-4 left-4"
                title="Voltar para o início do formulário de feedback" 
            >
                <ArrowLeft weight="bold" className="h-4 w-4 text-text-secondary hover:brightness-50"/>
            </button>
            <img 
                src={feedbackTypeInfo.image.src} 
                alt={feedbackTypeInfo.image.alt} 
                className="w-6 h-6"
            />
            <span className="text-xl leading-6 text-text-primary font-medium">{feedbackTypeInfo.title}</span>
            <CloseButton/>
        </header>
        <form className="my-4" onSubmit={handleSubmitFeedback}>
            <textarea name=""
            className="min-w-[304px] w-full min-h-[112px] text-sm text-text-secondary py-2 px-3 border-2 border-text-primary rounded resize-none scrollbar focus:border-brand-hover focus:outline-none scrollbar-thumb-surface-quaternary scrollbar-track-transparent scrollbar-thin "
            placeholder="Conte com detalhes sobre o problema ou sugestões para melhorias"
            onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex gap-2 justify-between ">
                <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={ setScreenshot}
                />
                <button type="submit" title="Enviar Feedback" disabled={comment.length === 0 || isSendingFeedback}
                className="bg-brand min-w-[206] w-full h-10 rounded flex justify-center items-center text-text-on-brand-color hover:brightness-110 scroll-smooth disabled:opacity-50  disabled:hover:brightness-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-brand transition-colors"
                >
                    {isSendingFeedback ?  <Loading/>: 'Enviar feedback' }
                </button>
            </div>
        </form>
    </>
    )
}