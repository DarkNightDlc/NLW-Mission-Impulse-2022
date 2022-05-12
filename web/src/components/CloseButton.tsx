import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {

    return (
        <Popover.Button type="button" className="h-6 w-6 p-1 absolute top-4 right-4 text-text-secondary hover:brightness-50">
            <X weight='bold' className="w-4 h-4" />
        </Popover.Button>
    )
}