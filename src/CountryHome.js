import * as React from 'react';
import {useState} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Countries from "./Countries"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); 

export default function CountryHome() {
    
const [counteries,setCountries]=useState([])
const  [name,setName] =useState('')
const [loading,setLoading] =useState(false)
const  [state,setState] =useState(false)

  const getCounteries=()=>{
      console.log("asdkkfajsdflk")
      setLoading(true)
      setState(true)
      var axios = require('axios');

      var config = {
        method: 'get',
        url: `http://api.countrylayer.com/v2/name/${name}?access_key=82a0ab9aa10c2be296bf3ed1a3681f3c&FullText=true`,
      
      };
      
      axios(config)
      .then(function (response) {
          setLoading(false)
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }


  return (
      <> 
       <div style={{textAlign:"center"}}><h1>Tatva Soft Test</h1></div>
        <div style={{display:"flex", marginTop:"30px"}}>
         <div style={{marginLeft:"30px"}}>
                <button style={{background:"blue",border:"1px solid blue"}} onClick={()=>getCounteries()}>
              <SearchIcon />
              </button>
              </div>
        <div>
      <Search>
            
            <StyledInputBase
              
              placeholder="Search…"
              value={name}
              onChange={(e)=>{
                  console.log(e.target.value)
                  setName(e.target.value)
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
          </div>
      <div className= "container">
      {name=='' || state ==false ? <h3>please search the country by name</h3> : loading?<h3>loading</h3>:
      
      counteries.map(country=>{
       return    <Countries country={country}/>
      })
    
      
      } 
      </div>
    </>
  );
}
