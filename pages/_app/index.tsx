import "reflect-metadata"
import type {AppProps} from 'next/app'
import NextNprogress from 'nextjs-progressbar';


import '../../styles/globals.css'
import {MainLayout} from "../../components/main-layout";
import {MainContext} from "../../lib/context/main-context";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <MainContext>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </MainContext>
    )
}


export default MyApp
