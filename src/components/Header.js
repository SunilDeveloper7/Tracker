import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title}) => {
    const onClick=()=> {
        console.log('Click')
    }
    return (
        <header className='header'>
        <h1>{title}</h1>
        < Button color='coral' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps ={
    title: 'Task tracker',
}

Header.prototype ={
    title:PropTypes.string.isRequired,
}
const headingstyle = {
    color:'blue',
    backgroundColor:'yellow'
}


export default Header
