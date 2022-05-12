import { useState } from 'react';

import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from '../Loading';

interface PropsScreenshotButton {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: PropsScreenshotButton) {

    const [isLoading, setIsLoading] = useState(false);

    async function handleTakeScreenshot() {
        setIsLoading(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL("image/png");

        onScreenshotTook(base64image);

        setIsLoading(false);
    }
    
    if (screenshot){
        return (
            <button type="button"
            title='Foto Dirada da Tela'
            className="w-11 h-10 rounded flex items-end justify-end text-text-primary hover:brightness-[1] border-4 border-text-primary hover:border-brand-hover group "
            onClick={() => onScreenshotTook(null)}
            style={
                { 
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat',
                }
            }
            >
                <Trash weight='fill' className="w-4 h-4" />
                <div
                    style={{ 
                    backgroundImage: `url(${screenshot})`,
                    backgroundColor: 'white',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat',
                    }
                    }  className="absolute hidden min-w-[303px] w-full min-h-[155px] bottom-10 left-[-4px] group-hover:flex border-2 brightness-100 border-brand-hover">
                    
                </div>
            </button>

            
        )
    }

    return (
        <button type="button" title="Tirar uma print da tela" 
        onClick={handleTakeScreenshot}
        className="grow bg-surface-secondary w-11 h-10 rounded flex justify-center items-center hover:brightness-[0.90]">
            {isLoading ? <Loading/> : <Camera weight="bold" className="h-6 w-6 text-text-primary"/>}
        </button>
    )
}