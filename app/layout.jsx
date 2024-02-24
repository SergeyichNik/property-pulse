import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Pulse | Find best rental',
    description: 'Find your dream property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
    return (
        <html lang={'en'}>
        <body>
        {children}
        </body>
        </html>
    )
}

export default MainLayout;
