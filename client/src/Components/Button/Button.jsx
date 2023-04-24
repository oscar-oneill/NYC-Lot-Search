import { Link } from 'react-router-dom'
import button from './Button.module.css'

const Button = (props) => {
    
    const setTextColor = () => {
        if (props.number > 0) {
            return 'crimson'
        } else if (props.number === 0) {
            return 'palegreen'
        } else {
            return 'white'
        }
    }

    return (
        <Link to={`/${props.path}`}>
            <div className={button.container}>
                <div className={button.title} style={{ color: setTextColor() }}>
                    <h4 >{props.number >= 0 ? props.title : 'Loading data...'}</h4>
                </div>
                <div className={button.number} style={{ color: setTextColor() }}>
                    {props.number}
                </div>
            </div>
        </Link>
    )
}

export default Button