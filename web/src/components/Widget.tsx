import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import {useState} from 'react';
import { WidgetForm } from './WidgetForm/Index';

export  function Widget(){
    const [isWidgetOpen, setWidgetOpen] = useState(false);

    function toggleWidgetVisibility(){
        setWidgetOpen(!isWidgetOpen);
    }

    return (
        <Popover 
        className=" absolute bottom-4 right-4 flex flex-col-reverse md:flex-col items-end">
            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel>

            <Popover.Button type="button" 
            onClick={toggleWidgetVisibility}
            className=" bg-brand min-w-12 h-12 px-3 rounded-full flex items-center justify-center gap-2 group text-white"
            >
                <ChatTeardropDots className=" w-6 h-6"/>

                <span
                className="hidden max-w-0 group-hover:flex group-hover:max-w-xs transition-all duration-99 ease-linear"
                >Feedback</span>
            </Popover.Button>
        </Popover>
    )
}
