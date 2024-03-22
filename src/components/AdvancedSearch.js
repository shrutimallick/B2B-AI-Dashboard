import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
    root:{
        "& .MuiDialog-paper":{
          color: 'white',
          backgroundColor:'rgba(45, 66,80,255)',
        },
        "& .MuiFilledInput-root":{
            backgroundColor:"white",
            width:'27ch',
        },
        "& .MuiFilledInput-input ":{
            backgroundColor:"white",
        }
    }
  });

  const BootstrapButton1 = styled(Button)(({ theme })=>({
    padding: theme.spacing(1.3,6),
    position:'relative',
    width:'100%',
    fontSize: 16,
    fontStyle:'bold',
    color:'white',
    lineHeight: 1,
    whiteSpace:'noWrap',
    border: '1px solid rgb(224 224 224)',
  }));

export const AdvancedSearch=({searchOpen,handleClose,doc_id,cust_number,invoice_id,buisness_year,search,changeHandler})=>{

    const classes=useStyles();

    return (
        <Dialog open={searchOpen} onClose={handleClose}  className={classes.root} maxWidth='sm'>
          <DialogTitle>Advance Search</DialogTitle>
          <DialogContent
              sx={{
                  '& > :not(style)': { m: 2},
                }}>
              <TextField
                autoFocus
                margin="dense"
                id="doc_id"
                name="doc_id"
                label="Document Id"
                value={doc_id}
                onChange={changeHandler}
                type='number'
                variant="filled"
                size="small"
              />   
              <TextField
               autoFocus
               margin="dense"
               id="cust_number"
               name="cust_number"
               label="Customer Number"
               value={cust_number}
               onChange={changeHandler}
               type="number"
               variant="filled"
               size="small"
              />
              <TextField
               autoFocus
               margin="dense"
               id="invoice_id"
               name="invoice_id"
               label="Invoice Id"
               value={invoice_id}
               onChange={changeHandler}
               type="number"
               variant="filled"
               size="small"
              /> 
              <TextField
               autoFocus
               margin="dense"
               id="buisness_year"
               name="buisness_year"
               label="Business Year"
               value={buisness_year}
               onChange={changeHandler}
               type="number"
               variant="filled"
               size="small"
              />                  
          </DialogContent>
          <DialogActions>
            <BootstrapButton1 variant="outlined" onClick={search}>SEARCH</BootstrapButton1>
            <BootstrapButton1 variant="outlined" onClick={handleClose}>CANCEL</BootstrapButton1>
          </DialogActions>
        </Dialog>
    );
}