
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { GrMail } from 'react-icons/gr';
import { MdHeadsetMic } from 'react-icons/md';

const Foot = (props : any) => {

    const classes = useStyles();

    return (
        <>
            <span className={classes.container}> 
                <span className={classes.contact_info}>
                    <span className={classes.location}>Localização</span>
                    <span className={classes.risk}/>
                    <span>Avenida Andrômeda, 2000. Bloco 6 e 8</span>
                    <span>Alphavile SP</span>
                    <span>brasil@corebiz.ag</span>
                    <span>+55 1130901039</span>
                </span>
                <span className={classes.contact_buttons}>
                    <button className={classes.contact_buttons_send}>
                        <GrMail/>
                        <span>ENTRE EM CONTATO</span>
                    </button>
                    <button className={classes.contact_buttons_send}>
                        <MdHeadsetMic/>
                        <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                    </button>
                </span>
                <span>c</span>            
            </span>
        </>
    )
  }

  const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        height: '150px',
        backgroundColor: "#000000",
        color: '#ffffff',
        fontSize: '10px',
        fontFamily: 'sans-serif',
        
    },
    contact_info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    location: {
        fontSize: '15px',
        fontWeight: 'bold'
    },
    risk: {
        backgroundColor: '#ffffff',
        width: '30px',
        height: '5px',
    },
    contact_buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    contact_buttons_send: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '10px',
        width: '170px',
        height: '30px',
        fontSize: '10px',
        backgroundColor: '#ffffff',
    }
  
  });


  export default Foot;