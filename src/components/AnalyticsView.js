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
        },
        "& .MuiInputLabel-root" :{
            position:"relative",
            color:'white',
            fontSize:"1.3rem",
            fontWeight:"500"            
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

export const AnalyticsView=({viewOpen,handleClose,due_date1,due_date2,clear_date1,clear_date2,
                            baseline_create_date1,baseline_create_date2,invoice_currency1,submitHandler3,changeHandler,chartData})=>{

    const classes=useStyles();

    return (
        <Dialog open={viewOpen} onClose={handleClose}  className={classes.root} maxWidth='sm'>
          <DialogTitle>Analytics View</DialogTitle>
          <DialogContent
              sx={{
                  '& > :not(style)': { m: 2},
                }}>
              <TextField
                autoFocus
                margin="dense"
                id="clear_date1"
                name="clear_date1"
                label="Clear Date"
                value={clear_date1}
                onChange={changeHandler}
                type='date'
                variant="filled"
                size="medium"
                InputLabelProps={{shrink:true}}
              />   
              <TextField
                autoFocus
                margin="dense"
                id="due_date1"
                name="due_date1"
                label="Due Date"
                value={due_date1}
                onChange={changeHandler}
                type='date'
                variant="filled"
                size="medium"
                InputLabelProps={{shrink:true}}
              /> 
              <TextField
                autoFocus
                margin="dense"
                id="clear_date2"
                name="clear_date2"
                value={clear_date2}
                onChange={changeHandler}
                type='date'
                variant="filled"
                size="medium"
                //InputLabelProps={{shrink:true}}
             />  
             <TextField
                autoFocus
                margin="dense"
                id="due_date2"
                name="due_date2"
                value={due_date2}
                onChange={changeHandler}
                type='date'
                variant="filled"
                size="medium"
                //InputLabelProps={{shrink:true}}
              />  
              <TextField
                autoFocus
                margin="dense"
                id="baseline_create_date1"
                name="baseline_create_date1"
                label="Baseline Create Date"
                value={baseline_create_date1}
                onChange={changeHandler}
                type='date'
                variant="filled"
                size="medium"
                InputLabelProps={{shrink:true}}
              /> 
              <TextField
                autoFocus
                margin="dense"
                id="invoice_currency1"
                name="invoice_currency1"
                label="Invoice Currency"
                value={invoice_currency1}
                onChange={changeHandler}
                type='text'
                variant="filled"
                size="medium"
                InputLabelProps={{shrink:true}}
              /> 
              <TextField
                autoFocus
                margin="dense"
                id="baseline_create_date2"
                name="baseline_create_date2"
                value={baseline_create_date2}
                onChange={changeHandler}
                type='date'
                variant="filled"
                size="medium"
                //InputLabelProps={{shrink:true}}
              /> 
                             
          </DialogContent>
          <DialogActions>
            <BootstrapButton1 variant="outlined" onClick={submitHandler3}>SUBMIT</BootstrapButton1>
            <BootstrapButton1 variant="outlined" onClick={handleClose}>CANCEL</BootstrapButton1>
          </DialogActions>
        </Dialog>
    );
}