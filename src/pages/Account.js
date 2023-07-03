import React from 'react'
import { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';


   
function Account() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

   // end point for submission
   const onSubmit = async (data) => {
		try {
			const response = await fetch('http://24.199.116.8:8780/api/v1/members/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				console.log('Registration successful!');
				// Handle successful registration here
			} else {
				console.error('Registration failed.');
				// Handle failed registration here
			}
		} catch (error) {
			console.error('An error occurred during registration:', error);
			// Handle error here
		}
	};

  return (
    <div>
         <div className="layout-dashboard">
        
  <div className="card">
  <h3>User Information</h3>
         <Avatar className="p-overlay-badge" image="/assets/demo/images/avatar/onyamalimba.png" size="xlarge">
  </Avatar>

            <Card title="Title">
                <p className="m-4">
                  <div class="name ">
                  Name : Kavuma Mark <br></br>
                  </div>

                  <div class="name">
                  Email : kavumark@gmail.com<br></br>
                  </div>
      
                </p>
           
        <div className=" flex justify-content-left">
            <Button label="Edit" icon="pi pi-fw pi-user-edit" onClick={() => setVisible(true)} />
            <Dialog header="Edit User Information" visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <p className="m-0">
                <div className="card p-fluid">
                    
                    <div className="field">
                        <label htmlFor="name1">Name</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" />
                    </div>
        <div className="field">
        <label htmlFor="Avatar">Avatar</label>
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop image here.</p>} />
        </div>
        <Button label="Submit" severity="info" raised onClick={onSubmit}/>
                </div>
                </p>
            </Dialog>
        </div>
   
            </Card>
<div className="but mt-2">
<Button label="Sign out" severity="info" raised onClick={() => { navigate('/Login');}}/>
</div>
            
        </div>
        </div>
      
    </div>
  )
}

export default Account
