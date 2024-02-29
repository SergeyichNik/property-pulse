import '@/assets/styles/globals.css';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AuthProvider from "../components/AuthProvider/AuthProvider";

export const metadata = {
    title: 'Property Pulse | Find best rental',
    description: 'Find your dream property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
    return (
        <AuthProvider>

        <html lang={'en'}>
        <body>
        <main>
            <Navbar/>
        {children}
        </main>
        <footer>
            <Footer/>
        </footer>
        </body>
        </html>
        </AuthProvider>
    )
}

export default MainLayout;
