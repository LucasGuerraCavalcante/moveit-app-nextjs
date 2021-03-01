import { createContext, ReactNode } from 'react';

interface BasicProviderProps {
    children: ReactNode;
}

interface BasicContextData {

}

const BasicContext = createContext({} as BasicContextData)

export function BasicProvider({ children }: BasicProviderProps) {
    
    
    return (
        <BasicContext.Provider value={{}}>
            {children}
        </BasicContext.Provider>
    )
}
