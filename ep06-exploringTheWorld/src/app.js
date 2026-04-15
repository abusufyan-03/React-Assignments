import ReactDOM from 'react-dom/client';
import Header from './components/Header.js'


const AppLayout = () => {
    return (
        <>
        <Header />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);