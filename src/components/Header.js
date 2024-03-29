import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className='header'>
        <h1>{title}</h1>
        < Button color={showAdd ? 'red': 'maroon'} 
        text={showAdd ? 'close': 'Add'} 
        onClick={onAdd} />
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
