import { useEffect, useState } from "react";
import { deleteData, getData, searchData,updateData, viewData } from "../services/data";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { alpha, Box, InputBase,  Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import {EditInvoice} from './EditInvoice';
import {DeleteInvoice} from './DeleteInvoice';
import {AddInvoice} from './AddInvoice';
import { AddData } from '../services/data';
import { AdvancedSearch } from "./AdvancedSearch";
import { AnalyticsView } from "./AnalyticsView";



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-end',
  paddingBottom:theme.spacing(1),
  backgroundColor:"rgba(45, 66,80,255)",
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
      minHeight: 75,
  },
  
}));

const BootstrapButton = styled(Button)(({ theme })=>({
  padding: theme.spacing(1.3,6),
  width:'100%',
  position: 'relative',
  fontSize: 16,
  fontStyle:'bold',
  color:'white',
  lineHeight: 1,
  whiteSpace:'noWrap',
  marginLeft: 0,
}));



const BootstrapButton1 = styled(Button)(({ theme })=>({
  padding: theme.spacing(1.3,6),
  position:'relative',
  width:'100%',
  fontSize: 16,
  fontStyle:'bold',
  color:'white',
  lineHeight: 1,
  whiteSpace:'noWrap',
  "&. disabled":{
    color:'white',
  },
}));

const RefreshButton=styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.75, 1),
  height: '100%',
  position: 'relative',
  display: 'flex',
  color:'white',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: theme.spacing(3),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
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
  color:'black',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    color:'black',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));





const useStyles = makeStyles({
  root:{
      "& .MuiDataGrid-columnHeaderTitle":{
        overflow:"visible",
        lineHeight:"1rem",
        whiteSpace:"normal",
        fontSize:16,
      },
      "& .MuiDataGrid-checkboxInput": {
        color: 'white',
      },
      "& .MuiTablePagination-root:last-child":{
          color:'white',
      }, 
      "& .MuiCheckbox-root.Mui-checked":{
        color:'white'
      }
  }
});


export const MyGrid = () => {

    const [pageSize, setPageSize] = useState(10);
   // const { classes, order, orderBy, onRequestSort } = props;
   // const createSortHandler = (property) => (event) => {
   //   onRequestSort(event, property);
   // };
    const[ data, setData ]=useState([]);
    const [addOpen,setAddOpen]=useState(false);
    const [editOpen,setEditOpen]=useState(false);
    const [deleteOpen,setDeleteOpen]=useState(false);
    const [searchOpen,setSearchOpen]=useState(false);
    const [viewOpen,setViewOpen]=useState(false);
    const [viewText,setViewText]=useState({clear_date1:'',clear_date2:'',due_date1:'',
                                            due_date2:'',baseline_create_date1:'',
                                            baseline_create_date2:'',invoice_currency1:''});

    const {clear_date1,clear_date2,due_date1,due_date2,baseline_create_date1,baseline_create_date2,invoice_currency1}=viewText; 
    
    var sl=[];

    const [del,setdel]=useState([]);

    const [editDisable,setEditDisable]=useState(true);
    const [delDisable,setDelDisable]=useState(true);
    const [ data1 , setData1] =useState({
      sl_no:'',business_code:'',cust_number:'',clear_date:'',
      buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',
      due_in_date:'',invoice_currency:'',document_type:'',
      posting_id:'',total_open_amount:'',baseline_create_date:'',
      cust_payment_terms:'',invoice_id:''});

    const {
      sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,
      due_in_date,invoice_currency,document_type,
      posting_id,total_open_amount,baseline_create_date,
      cust_payment_terms,invoice_id}=data1;

    const changeHandler = (e) =>{
        e.preventDefault();
        const{name,value}=e.target;
        setData1({...data1,[name]:value});
        setViewText({...viewText,[name]:value});
    };

    const addHandler = () => {
      setAddOpen(true);
    };

    const editHandler = () => {
      setEditOpen(true);
    };

    const deleteHandler = () => {
      setDeleteOpen(true);
    };

    const searchHandler = () =>{
      setSearchOpen(true);
    };

    const viewHandler = () => {
      setViewOpen(true);
    };

    const buttonDisble = (itm) => {
      sl=itm;
      setdel(itm);
      if(itm.length===1) setEditDisable(false);
      else setEditDisable(true);

      if (itm.length>=1) setDelDisable(false);
      else setDelDisable(true);
    }

  const handleClose = () => {
    setAddOpen(false);
    setEditOpen(false);
    setDeleteOpen(false);
    setSearchOpen(false);
    setViewOpen(false);
    //console.log("exited");
    setData1({sl_no:'',business_code:'',cust_number:'',clear_date:'',
        buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',
        due_in_date:'',invoice_currency:'',document_type:'',
        posting_id:'',total_open_amount:'',baseline_create_date:'',
        cust_payment_terms:'',invoice_id:''});
  };
  

  const submitHandler = async (e) => {
      e.preventDefault();
      let response=await AddData(data1);
      console.log(response);
      if(response){
        setData1({business_code:'',cust_number:'',clear_date:'',
        buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',
        due_in_date:'',invoice_currency:'',document_type:'',
        posting_id:'',total_open_amount:'',baseline_create_date:'',
        cust_payment_terms:'',invoice_id:''});
        setAddOpen(false);
      }
  };
  
  const submitHandler1 =async(e) => {
    e.preventDefault();
      let response=await updateData(data1);
      console.log(response)
      if(response){
        setData1({business_code:'',cust_number:'',clear_date:'',
        buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',
        due_in_date:'',invoice_currency:'',document_type:'',
        posting_id:'',total_open_amount:'',baseline_create_date:'',
        cust_payment_terms:'',invoice_id:''});
        setEditOpen(false);
      }
  };

  const submitHandler2 =async(e) => {
    e.preventDefault();
    sl={...del}
    let arr=Object.values(sl);
    //let x=arr.length;
    for(let i in arr){
      console.log(arr,arr[i])
      let invoice=data.filter((Pojo) =>(Pojo.sl_no===arr[i]))[0];
      console.log(invoice);
      if(invoice!==undefined){
        let final={...invoice}
        console.log('final:',final);
        let response=await deleteData(final);
        console.log(response);
        setDeleteOpen(false);
      }
    }
  };

  const submitHandler3 =async(e) => {
    e.preventDefault();
    let response=await viewData(viewText);
    //console.log(response);
    setViewOpen(false);
    setViewText({clear_date1:'',clear_date2:'',due_date1:'',
    due_date2:'',baseline_create_date1:'',
    baseline_create_date2:'',invoice_currency1:''});
    //const [userData,setuserData]=useState(labels:)
  }

const search = async(e) => {
  e.preventDefault();
  let response=await searchData(data1);
  console.log(response);  
  setData(response);
  if(response){
    setData1({business_code:'',cust_number:'',clear_date:'',
    buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',
    due_in_date:'',invoice_currency:'',document_type:'',
    posting_id:'',total_open_amount:'',baseline_create_date:'',
    cust_payment_terms:'',invoice_id:''});
    setSearchOpen(false);
  }
};
 
const classes=useStyles();
    
useEffect(async () => {
      setData(await getData())
} , []);


  const columns = [{field:"sl_no",headerName:'Sl no', width:60},
                   {field:"business_code",headerName:"Business Code",width:90},
                   {field:"cust_number",headerName:"Customer Number",width:100},
                   {field:"clear_date",headerName:"Clear Date",width:109},
                   {field:"buisness_year",headerName:"Business Year",width:90},
                   {field:"doc_id",headerName:"Document id",width:109},
                   {field:"posting_date",headerName:"Posting Date",width:109},
                   {field:"document_create_date",headerName:"Document create date",width:107},
                   {field:"due_in_date",headerName:"Due Date",width:109},
                   {field:"invoice_currency",headerName:"Invoice Currency",width:90},
                   {field:"document_type",headerName:"Document Type",width:90},
                   {field:"posting_id",headerName:"Posting id",width:65},
                   {field:"total_open_amount",headerName:"Total Open Amount",width:109},
                   {field:"baseline_create_date",headerName:"Baseline Create Date",width:109},
                   {field:"cust_payment_terms",headerName: "Customer Payment Terms",width:90},
                   {field:"invoice_id",headerName:"Invoice id",width:109},
                   {field:"aging_bucket",headerName:"Aging Bucket",width:90}]

    return (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <StyledToolbar>
                <Stack  direction={{ xs: 'column', sm: 'row' }}>
                  <BootstrapButton variant="contained">PREDICT</BootstrapButton>
                  <BootstrapButton variant="outlined"  onClick={viewHandler}>ANALYTICS VIEW</BootstrapButton>
                  <AnalyticsView
                    viewOpen={viewOpen}
                    handleClose={handleClose}
                    changeHandler={changeHandler}
                    clear_date1={clear_date1}
                    clear_date2={clear_date2}
                    due_date1={due_date1}
                    due_date2={due_date2}
                    baseline_create_date1={baseline_create_date1}
                    baseline_create_date2={baseline_create_date2}
                    invoice_currency1={invoice_currency1}
                    submitHandler3={submitHandler3}
                  />
                  <BootstrapButton variant="outlined"  onClick={searchHandler}>ADVANCED SEARCH</BootstrapButton>
                  <AdvancedSearch
                    searchOpen={searchOpen}
                    handleClose={handleClose}
                    changeHandler={changeHandler}
                    doc_id={doc_id}
                    cust_number={cust_number}
                    invoice_id={invoice_id}
                    buisness_year={buisness_year}
                    search={search}
                  />
                </Stack>
                  <RefreshButton variant="outlined" onClick={()=>window.location.reload(false)}>
                        <RefreshIcon/>
                  </RefreshButton>            
                  <Search >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Customer Id"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Stack direction={{ xs: 'column', sm: 'row' }}>
                <BootstrapButton1 variant="outlined" onClick={addHandler}>ADD</BootstrapButton1>
                  <AddInvoice
                    addOpen={addOpen}  
                    handleClose={handleClose}
                    business_code={business_code}
                    cust_number={cust_number}
                    clear_date={clear_date}
                    buisness_year={buisness_year}
                    doc_id={doc_id}
                    posting_date={posting_date}
                    document_create_date={document_create_date}
                    due_in_date={due_in_date}
                    invoice_currency={invoice_currency}
                    document_type={document_type}
                    posting_id={posting_id}
                    total_open_amount={total_open_amount}
                    baseline_create_date={baseline_create_date}
                    cust_payment_terms={cust_payment_terms}
                    invoice_id={invoice_id}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                  />

                <BootstrapButton1 variant="outlined" onClick={editHandler} disabled={editDisable}>EDIT</BootstrapButton1>
                    <EditInvoice 
                      editOpen={editOpen} 
                      handleClose={handleClose}
                      invoice_currency={invoice_currency}
                      cust_payment_terms={cust_payment_terms}
                      changeHandler={changeHandler}
                      submitHandler1={submitHandler1}
                    />
                <BootstrapButton1 variant="outlined" onClick={deleteHandler} disabled={delDisable}>DELETE</BootstrapButton1>
                    <DeleteInvoice 
                      deleteOpen={deleteOpen} 
                      handleClose={handleClose}
                      submitHandler2={submitHandler2}
                  />
                </Stack>
              </StyledToolbar>
            </AppBar>
          </Box>
          <div style={{ height: 502 ,width: '100%'}}>
            <DataGrid style={{backgroundColor: 'rgba(45, 66,80,255)', color:"white", fontFamily:'Roboto'}}
              className={classes.root} headerHeight={100}           
              density="compact"
              getRowId={(Pojo) => Pojo.sl_no}
              rows={data}
              columns={columns}            
              checkboxSelection
              onSelectionModelChange={(itm) => {               
                buttonDisble(itm);
                //console.log(itm[0].sl_no)
                if(itm.length>=1){    
                  let invoice=data.filter((Pojo) =>(Pojo.sl_no==itm[0]))[0];              
                  setData1(invoice);                  
                  //console.log(data);                 
                }           
                //console.log(data1);
              }}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20,100]}
              pagination       
            />
          </div>
        </div>
      );  
} 

