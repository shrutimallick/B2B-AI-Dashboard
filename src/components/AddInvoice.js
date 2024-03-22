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
            width:'28.5ch',
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

export const AddInvoice = 
    ({
        addOpen,handleClose,business_code,cust_number,
        clear_date,buisness_year,doc_id,posting_date,
        document_create_date,due_in_date,invoice_currency,
        document_type,posting_id,baseline_create_date,
        cust_payment_terms,total_open_amount,invoice_id,changeHandler,
        submitHandler
    })=> 
    {

    //const setDeleteOpen=React.useState(false);

  const classes=useStyles();

  return (
      <Dialog open={addOpen} onClose={handleClose}  className={classes.root} fullWidth maxWidth='lg'>
        <DialogTitle>Add</DialogTitle>
        <DialogContent
            sx={{
                '& > :not(style)': { m: 2 },
              }}>
            <TextField
              autoFocus
              margin="dense"
              id="business_code"
              name="business_code"
              label="Business Code"
              value={business_code}
              onChange={changeHandler}
              type='text'
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
              type='number'
              variant="filled"
              size="small"
            /> 
            <TextField
              autoFocus
              margin="dense"
              id="clear_date"
              name="clear_date"
              label="Clear Date"
              value={clear_date}
              onChange={changeHandler}
              type='date'
              variant="filled"
              InputLabelProps={{shrink:true}}
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
              type='number'
              variant="filled"
              //InputLabelProps={{shrink:true}}
              size="small"
            /> 
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
              //InputLabelProps={{shrink:true}}
              size="small"
            /> 
            <TextField
              autoFocus
              margin="dense"
              id="posting_date"
              name="posting_date"
              label="Posting Date"
              value={posting_date}
              onChange={changeHandler}
              type='date'
              variant="filled"
              InputLabelProps={{shrink:true}}
              size="small"
            /> 
            <TextField
              autoFocus
              margin="dense"
              id="document_create_date"
              name="document_create_date"
              label="Document Create Date"
              value={document_create_date}
              onChange={changeHandler}
              type='date'
              variant="filled"
              InputLabelProps={{shrink:true}}
              size="small"
            /> 
            <TextField
              autoFocus
              margin="dense"
              id="due_in_date"
              name="due_in_date"
              label="Due Date"
              value={due_in_date}
              onChange={changeHandler}
              type='date'
              variant="filled"
              InputLabelProps={{shrink:true}}
              size="small"
            />         
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
              id="document_type"
              name="document_type"
              label="Document Type"
              value={document_type}
              onChange={changeHandler}
              type='text'
              variant="filled"
              //InputLabelProps={{shrink:true}}
              size="small"
            /> 
            <TextField
              autoFocus
              margin="dense"
              id="posting_id"
              name="posting_id"
              label="Posting Id"
              value={posting_id}
              onChange={changeHandler}
              type='text'
              variant="filled"
              //InputLabelProps={{shrink:true}}
              size="small"
            /> 
            <TextField
              autoFocus
              margin="dense"
              id="total_open_amount"
              name="total_open_amount"
              label="Total Open Amount"
              value={total_open_amount}
              onChange={changeHandler}
              type='text'
              variant="filled"
              //InputLabelProps={{shrink:true}}
              size="small"
            />
            <TextField
              autoFocus
              margin="dense"
              id="baseline_create_date"
              name="baseline_create_date"
              label="Baseline Create Date"
              value={baseline_create_date}
              onChange={changeHandler}
              type='date'
              variant="filled"
              InputLabelProps={{shrink:true}}
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
            <TextField
             autoFocus
             margin="dense"
             id="invoice_id"
             name="invoice_id"
             label="Invoice Id"
             value={invoice_id}
             onChange={changeHandler}
             type="text"
             variant="filled"
             size="small"
            />                 
        </DialogContent>
        <DialogActions>
          <BootstrapButton1 variant="outlined" onClick={submitHandler}>ADD</BootstrapButton1>
          <BootstrapButton1 variant="outlined" onClick={handleClose} >CANCEL</BootstrapButton1>
        </DialogActions>
      </Dialog>
  );
}
//export default EditInvoice;