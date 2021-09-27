import * as React from 'react';
import {useState} from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, formLabelClasses } from '@mui/material';
import Dialogue from './dialogue';

function Countries(props) {
      

    const [state,setState]=useState(null)
    const [loading,setLoading]=useState(false)
    const [open, setOpen] = React.useState(false);
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
const seaWheather=()=>{
    setLoading(true)
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `http://api.weatherstack.com/current?access_key=ea45eb4a29d5d8bcfb4067d39dc62c4e&query=${props.country.name}`,
     
    };
    
    axios(config)
    .then(function (response) {
        console.log(response.data)
        setLoading(false)
      setState(response.data)
      handleClickOpen();
    })
    .catch(function (error) {
      console.log(error);
    });
    
}

    return (

         <>
        <Card sx={{ maxWidth: 600}} style={{border:"1px solid black",marginTop:"20px"}}>
      <CardActionArea>
        
        <CardContent>
         
           <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div><h3>Country Name</h3></div>
              <div>{props.country.name}</div>
           </div>
           <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div> <h3>Capital</h3></div>
              <div>{props.country.capital}</div>
           </div>
           <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div> <h3>Region</h3></div>
              <div>{props.country.region}</div>
           </div>
        </CardContent>
        <button style={{margin:"20px"}}onClick={()=>seaWheather()}>{loading?'loading':'seaWheather'} </button>
      </CardActionArea>
    </Card>

    <div>
    {open==false?"": <Dialogue 
      open = {open}
      close={handleClose}
      country={state} />}
    
    </div>


 </>

    )
}

export default Countries
