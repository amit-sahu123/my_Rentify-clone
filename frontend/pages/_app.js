import { AuthProvider } from "../context/AuthContext";
import BaseLayout from "./layout";
// import "../styles/global.css"
// import '../components/styles/Button.scss';

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