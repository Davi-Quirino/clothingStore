
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = () => {

    const [products, setProducts] = useState()

    //change call on service
    useEffect(() => {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
        .then( (resp) => {
            setProducts(resp.data) 
            console.log('productsxxx', products)   
        })
    }, [])
    



    const classes = useStyles();

   

    return (
        <>
        {console.log('productsxxx123', products)}
            <div className={classes.header}> babeçalho</div>
        </>
    )
}

  const useStyles = makeStyles({
    header: {
        height: '40px',
        backgroundColor: "#00ffdd"
    }
  
  });


  export default ProductList;