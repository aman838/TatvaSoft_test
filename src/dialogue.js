import * as React from 'react';
import {useEffect} from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Dialogue(props) {
    useEffect(()=>{
        console.log(props ,"dsfgldlfgsdlfmglks")
    },[])
    

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{maxWidth:"400px"}}>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"See wheather"}
        </DialogTitle>
        <DialogContent>
            
          <DialogContentText id="alert-dialog-description">
              <img src={props.country.current.weather_icons[1]} height={100} width={100} />
           <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div><>Temprature</></div>
              <div>{props.country.current.temperature}</div>
           </div>
           <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div> <>Wind Speed</></div>
              <div>{props.country.current.wind_speed}</div>
           </div>
           <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-around"}}>
              <div> <>precip</></div>
              <div>{props.country.current.precip}</div>
           </div>
          </DialogContentText   >
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>close</Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}