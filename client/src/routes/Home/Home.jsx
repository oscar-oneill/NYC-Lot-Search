import { useContext } from 'react'
import Form from '../../Components/Form/Form'
import Results from '../Results/Results'
import home from './Home.module.css'
import { AppContext } from '../../Context/AppContext'

const Home = () => {
    const { loaded } = useContext(AppContext);

    return (
        <div className={home.container}>
            <div className={home['form-container']}>
                <h1 style={{ marginLeft: '30px' }}>Search For A Property</h1>
                <Form/>
            </div>

            {loaded && <Results/>}
        </div>
    )
}

export default Home