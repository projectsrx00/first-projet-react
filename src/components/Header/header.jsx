import logo from '../../images/ofrench.png';

function Header() {
    let color = { color: 'orange' };
    let style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    };

    return (
        <div style={style}>
            <img src={logo} alt="ofrench" height='100px'/>
            <h2 style={color}>Ofrench Tacos</h2>
        </div>
    );
}

export default Header;