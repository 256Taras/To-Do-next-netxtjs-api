import "reflect-metadata"
import type {AppProps} from 'next/app'

import '../../styles/globals.css'
import {MainLayout} from "../../components/main-layout";
import {MainContext} from "../../lib/context/main-context";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <MainContext>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </MainContext>
    )
}

export default MyApp
