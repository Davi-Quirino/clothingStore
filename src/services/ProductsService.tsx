
import axios from 'axios';


export const GetProducts = (): any => {

    axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
        .then( (resp) => {
            return resp.data    
        }).catch((err) => {
            console.error('Something wrong', err)
        })
  }



