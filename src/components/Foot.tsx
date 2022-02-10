
import { makeStyles } from '@material-ui/core';
import React from 'react';

const Foot = (props : any) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.foot}> Foot</div>
        </>
    )
  }

  const useStyles = makeStyles({
    foot: {
        height: '100px',
        backgroundColor: "#000000"
    }
  
  });


  export default Foot;