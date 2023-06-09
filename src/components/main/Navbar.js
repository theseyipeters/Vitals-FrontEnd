import React from 'react'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Dashboard</h1>
      <h3 style={styles.adminName}>Admin</h3>
    </nav>
  );
};

const styles ={
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        padding: '5px 30px',
        backgroundColor: 'yellow',
        color: 'black',
        zIndex: 999,
    },
    title: {
        fontSize: '24px',
    },
    adminName: {
        fontSize: '18px',
    },
};

export default Navbar;
