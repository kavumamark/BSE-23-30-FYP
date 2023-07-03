import React from 'react'
import { Fieldset } from 'primereact/fieldset';


function Help() {
  return (
    <div>
      <div className="layout-dashboard">
      <Fieldset legend="How do i get started?" toggleable>
    <p className="m-0">
      Get started by clicking on the sign up button that re directs you to the registration form where you enter your user Information
      and then press on the register button. After that you can use these credentials to login in into the GDS to carry out glaucoma tests.
       
    </p>
</Fieldset>
      <Fieldset legend="How do i upload an image for detection?" toggleable>
    <p className="m-0">
      After signing in the user taken to the detect screen and to upload an image, the user can either clickig on the choose icon which has a label or 
      you can drag a glaucoma image into the interface. The image is then uploaded by clicking on the upload icon.
        
    </p>
</Fieldset>
      <Fieldset legend="How do i get my results?" toggleable>
    <p className="m-0">
      After the diagnosis and detection, the detection results are returned in the results screen for the user to view. These are clickable 
      in oder to show a detailed display of the results.
       
    </p>
</Fieldset>
      <Fieldset legend="How accurate is the diagnosis?" toggleable>
    <p className="m-0">
        The results are very promising and reliable since we have used F1 score as a metric to access and evaluate the performance of 
        our algorithm.
    </p>
</Fieldset>
      <Fieldset legend="What is your policy on data privacy?" toggleable>
    <p className="m-0">
    We ensure that protecting the privacy and security of patient data is essential to maintain trust, ensure compliance with regulations, and uphold ethical standards.
    User data and information is kept private and secure.
       
    </p>
</Fieldset>
      <Fieldset legend="How do i access specialised glaucoma eye doctors?" toggleable>
    <p className="m-0">
        Specialised Glaucoma doctors can be accessed via the Opthalmologists screen which can offer you their locations and contacts.
    </p>
</Fieldset>
      <Fieldset legend="Is it possible to download the images?" toggleable>
    <p className="m-0">
        We can only download the results of the detection.
    </p>
</Fieldset>
      <Fieldset legend="How do i register into the system?" toggleable>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
     


        </div>
    </div>
  )
}

export default Help
