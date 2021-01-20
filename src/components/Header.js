import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {
    const onClick = ()=>{
        console.log('click')
    }
    return <header className='header'>
        <h2 >{title}</h2>
        <Button color='green' text='Add' onClick={onClick} />
    </header>;
};

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//CSS in Js
// const headingStyle = {
//     color: 'red', backgroundColor: 'lightpink'
// }
export default Header;
