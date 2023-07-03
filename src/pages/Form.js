import React from 'react'
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

function Form() {
  return (
    <div class="card">
    <h5 style={{textAlign: 'center'}}>Eye Tips Form.</h5>
    {/* <div class="field grid">
        <label for="firstname4" class="col-12 mb-2 md:col-2 md:mb-0 pl-8">ID </label>
        <div class="col-12 md:col-10">
            <input id="firstname4" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-8"/>
        </div>
    </div> */}
    <div class="field grid">
        <label for="lastname4" class="col-12 mb-2 md:col-2 md:mb-0 pl-8" >Entered by</label>
        <div class="col-12 md:col-10">
            <input id="lastname4" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-8"/>
        </div>
    </div>
    <div class="field grid">
        <label for="lastname4" class="col-12 mb-2 md:col-2 md:mb-0 pl-8" >Tip Heading</label>
        <div class="col-12 md:col-10">
            <input id="lastname4" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-8"/>
        </div>
    </div>
    <div class="field grid">
        <label for="lastname4" class="col-12 mb-2 md:col-2 md:mb-0 pl-8" >Tip Description</label>
        <div class="col-12 md:col-10">
          <InputTextarea placeholder="Your Message" autoResize rows="5" cols="80" />
        </div>
    </div>
    
    <div  class="grid gap-4 flex justify-content-center">
       <div class="col-2"><Button label="Submit" ></Button></div>
       
    </div>
</div>
  )
}

export default Form
