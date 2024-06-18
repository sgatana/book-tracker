import { useState } from 'react';

export const useToggleNotification = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleToggleNotification = () => {
        setIsOpen((prevState) => !prevState);
      };
    return [isOpen, handleToggleNotification] as const
}