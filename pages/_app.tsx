// Component interface
import { IApp } from '@/interfaces/pages/global/app';
// Custom imports
import '@/styles/globals.scss';

const MyApp: React.FC<IApp> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
