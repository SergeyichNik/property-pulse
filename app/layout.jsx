import '@/assets/styles/globals.css';
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
    title: 'Property Pulse | Find best rental',
    description: 'Find your dream property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
    return (
        <html lang={'en'}>
        <body>
        <main>
            <Navbar/>
        {children}
        </main>
        </body>
        </html>
    )
}

export default MainLayout;
