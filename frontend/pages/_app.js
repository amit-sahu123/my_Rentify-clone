import { AuthProvider } from "../context/AuthContext";
import BaseLayout from "./layout";
import "../styles/global.css"

function Home({ Component, pageProps }) {
    return (
        <AuthProvider>
            <BaseLayout>
                <Component {...pageProps} />
            </BaseLayout>
        </AuthProvider>
    );
}

export default Home;