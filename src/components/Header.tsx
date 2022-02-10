
import { makeStyles } from '@material-ui/core';
import React from 'react';

const Header = (props : any) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.header}> babeçalho</div>
        </>
    )
  }

  const useStyles = makeStyles({
    header: {
        height: '40px',
        backgroundColor: "#fff000"
    }
  
  });


  export default Header;