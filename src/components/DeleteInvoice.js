import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { DialogContentText } from '@mui/material';

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

export const DeleteInvoice=({deleteOpen,handleClose,submitHandler2})=>{
  
  const classes=useStyles();

  return (
    <div>
      <Dialog
       open={deleteOpen} onClose={handleClose}className={classes.root}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"DELETE RECORDS?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{color:'white',}}>
            Are you sure you want to delete record[s]?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BootstrapButton1 variant="outlined" onClick={submitHandler2}autoFocus>DELETE</BootstrapButton1>
          <BootstrapButton1 variant="outlined" onClick={handleClose} >
            CANCEL
          </BootstrapButton1>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default DeleteInvoice;