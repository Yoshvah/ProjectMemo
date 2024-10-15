import React, { useState } from 'react';
 import imagehome from '../assets/Images/home.png';
import imagesetting from '../assets/Images/setting.png';
import imagelogout from '../assets/Images/logout.png';
import imageuser from '../assets/Images/user.png';
import mylogo from '../assets/Images/ logo.png';

function Sidebar({ onSelectMenu }) { // Passer le prop onSelectMenu
    const [hovered, setHovered] = useState('');

    const handleMouseEnter = (menu) => {
        setHovered(menu);
    };

    const handleMouseLeave = () => {
        setHovered('');
    };

    return (
        <div style={styles.sidebar}>
            <img src={mylogo} alt="logo" style={styles.logo} />
            {[
                { name: 'message', image: imagehome },
                { name: 'Ai', image: imageuser },
                { name: 'settings', image: imagesetting },
                { name: 'logout', image: imagelogout }
            ].map((item) => (
                <div
                    key={item.name}
                    style={styles.menuItem}
                    onClick={() => onSelectMenu(item.name)} // Mettre à jour l'état dans App.js
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{
                            ...styles.icon,
                            width: hovered === item.name ? '30px' : '20px',
                            height: hovered === item.name ? '30px' : '20px'
                        }}
                    />
                    {hovered === item.name && <div style={styles.label}>{item.name}</div>}
                </div>
            ))}
        </div>
    );
}

const styles = {
    sidebar: {
        width: '90px',
        backgroundColor: '#1b6fdd',
        height: '97vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        borderRadius: '20px',
        margin: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
    },
    logo: {
        width: '70px',
        marginBottom: '30px',
        transition: 'width 0.3s ease, margin-bottom 0.3s ease'
    },
    menuItem: {
        width: '120px',
        height: '200px',
        marginBottom: '20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        transition: 'background-color 0.3s ease, transform 0.3s ease'
    },
    icon: {
        width: '40px',
        height: '40px'
    },
    label: {
        marginTop: '5px',
        fontSize: '12px',
        color: 'white',
        textTransform: 'capitalize',
        transition: 'font-size 0.3s ease'
    }
};

export default Sidebar;
