import React, { useState, useRef, useEffect } from 'react';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import productData from '../assets/product.json';
import { FileUpload } from 'primereact/fileupload';
import { Toolbar } from 'primereact/toolbar';
import jszip from 'jszip';
import pdfmake from 'pdfmake';
// import 'datatables.net-buttons-dt';
// import 'datatables.net-buttons/js/buttons.html5.mjs';
// import 'datatables.net-buttons/js/buttons.print.mjs';
// import 'datatables.net-colreorder-dt';
// import 'datatables.net-responsive-dt';
import { Toast } from 'primereact/toast';

const Results = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const dt = useRef(null);

  const [results, setResults] = useState([]);

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="mr-2 inline-block" />
        <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
      </React.Fragment>
    );
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://24.199.116.8:8780/api/v1/deposits');
      const data = await response.json();

      setResults(data); // Update results with fetched data

      console.log(results);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <div className="layout-dashboard">
      <div className="grid formgrid">
                       
                       <div className="col-12 mb-2 lg:col-8 lg:mb-2">
                           <span className="p-input-icon-right">
                               <InputText style={{ width: '600px',  marginLeft: '1px' }} type="text" placeholder="Search for records" />
                               <i className="pi pi-search" />
                           </span>
                           {/* <Button label="Download Results" icon="pi pi-download" className='mt-2'/> */}

                          
                       </div>
                      
                           <div className="col-12">
               <div className="card">
                   <h5>Result Details</h5>

                   <DataTable value={productData}   scrollable scrollHeight="400px"   className="mt-3">
                       
                       <Column field={"id"} header="Id" style={{ flexGrow: 1, flexBasis: '100px' }}  alignFrozen="left"></Column>
                       <Column field="pname" header=" Description" style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                       <Column field="price" header="Date" style={{ flexGrow: 1, flexBasis: '200px' }} ></Column>
                       <Column field="action" header="Result Details" style={{ flexGrow: 1, flexBasis: '100px'}}
                         body={() =>
                          <><>
                             
            <Button label="Show" icon="pi pi-external-link" className='mr-2' onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        
                            </>
                            <Button label="Download" icon="pi pi-download"  style={{ width: '10vw' }} className=''></Button></>
                        }>
                        </Column>
                     
                   </DataTable>
               </div>

           </div>
                      
                   </div>
      </div>
    </div>
  );
};

export default Results;
