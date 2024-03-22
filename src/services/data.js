import axios from "axios";

export const getData = async () => {
    let response=await axios.get("http://localhost:8080/HRC_Project/Fetch");
    //console.log(response.data.Pojo);
    let data= response.data.Pojo;
    data.map( (Pojo,index)=>({...Pojo,"id":index}));
    return data;
    //response.data.Pojo;
}

export const AddData = async({
    business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,
    due_in_date,invoice_currency,document_type,
    posting_id,total_open_amount,baseline_create_date,
    cust_payment_terms,invoice_id}) => {
        let data="business_code="+business_code+"&cust_number="+cust_number+"&clear_date="+clear_date+"&buisness_year="
                +buisness_year+"&doc_id="+doc_id+"&posting_date="+posting_date+"&document_create_date="+document_create_date
                +"&due_in_date="+due_in_date+"&invoice_currency="+invoice_currency+"&document_type="+document_type
                +"&posting_id="+posting_id+"&total_open_amount="+total_open_amount+"&baseline_create_date="+baseline_create_date
                +"&cust_payment_terms="+cust_payment_terms+"&invoice_id="+invoice_id;
        let response= await axios.post("http://localhost:8080/HRC_Project/Add?"+data);
        return response.data;
}
export const updateData = async({sl_no,invoice_currency,cust_payment_terms}) => {
    let data= "invoice_currency="+invoice_currency+"&cust_payment_terms="+cust_payment_terms+"&sl_no="+sl_no;
    let response=await axios.post("http://localhost:8080/HRC_Project/Edit?"+data);
    return response.data;

}

export const deleteData = async({sl_no}) => {
    let data= "sl_no="+sl_no;
    console.log(data);
    let response=await axios.post("http://localhost:8080/HRC_Project/Delete?"+data);
    return response.data;

}

export const searchData = async ({doc_id,cust_number,buisness_year,invoice_id}) => {
    let search="doc_id="+doc_id+"&cust_number="+cust_number+"&buisness_year="+buisness_year+"&invoice_id="+invoice_id;
    let response=await axios.get("http://localhost:8080/HRC_Project/Search?"+search);
    let data= response.data.Pojo;
    data.map( (Pojo,index)=>({...Pojo,"id":index}));
    return data;
    //response.data.Pojo;
}

export const viewData = async ({clear_date1,clear_date2,due_date1,due_date2,baseline_create_date1,baseline_create_date2,
                                    invoice_currency1}) => {
    let view="clear_date1="+clear_date1+"&clear_date2="+clear_date2+"&due_date1="+due_date1+"&due_date2="+due_date2+
                "&baseline_create_date1="+baseline_create_date1+"&baseline_create_date2="+baseline_create_date2+"&invoice_currency1="+invoice_currency1;
    let response=await axios.get("http://localhost:8080/HRC_Project/Graph?"+view);
    let data= response.data.Pojo;
    data.map( (Pojo,index)=>({...Pojo,"id":index}));
    return data; 
    //response.data.Pojo;
}

