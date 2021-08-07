import Button from "./Button"

// Title prop ~ 1:16:00
const Header = ({ onAdd, showAdd }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header
