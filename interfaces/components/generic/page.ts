// Out of the box imports
import { ReactNode } from 'react';

// Interface for the generic page component
export interface IPage {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}
