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

export const EditInvoice = ({editOpen,handleClose,invoice_currency,cust_payment_terms,changeHandler,submitHandler1})=> {

    //const setDeleteOpen=React.useState(false);

    const classes=useStyles();

  return (
      <Dialog open={editOpen} onClose={handleClose}  className={classes.root}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent
            sx={{
                '& > :not(style)': { m: 2 },
              }}>
            <TextField
              autoFocus
              margin="dense"
              id="invoice_currency"
              name="invoice_currency"
              label="Invoice Currency"
              value={invoice_currency}
              onChange={changeHandler}
              type='text'
              variant="filled"
              size="small"
            />   
            <TextField
             autoFocus
             margin="dense"
             id="cust_payment_terms"
             name="cust_payment_terms"
             label="Customer Payment Terms"
             value={cust_payment_terms}
             onChange={changeHandler}
             type="text"
             variant="filled"
             size="small"
          />                 
        </DialogContent>
        <DialogActions>
          <BootstrapButton1 variant="outlined" onClick={submitHandler1}>EDIT</BootstrapButton1>
          <BootstrapButton1 variant="outlined" onClick={handleClose}>CANCEL</BootstrapButton1>
        </DialogActions>
      </Dialog>
  );
}
//export default EditInvoice;