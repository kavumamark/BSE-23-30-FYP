import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Opthalmologists() {
    const header = (
        <img alt="image" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Contact me" icon="pi pi-check" />
           
        </div>
    );

    return (
      <div>
        <div className="card flex justify-content-center">
            <Card title="Dr Mutoni" subTitle="Opthalmologist at Mengo Hospital" footer={footer} header={header} className="md:w-25rem mr-6">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
            <Card title="Dr Kabito" subTitle="Opthalmologist at Mulago Hospital" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
          
        </div>

        <div className="card flex justify-content-center">
            <Card title="Dr Amadi" subTitle="Opthalmologist at Case Hospital" footer={footer} header={header} className="md:w-25rem mr-6">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
            <Card title="Dr Abadi" subTitle="Opthalmologist at Rubaga Hospital" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
           
        </div>

        </div>  
    )
}
export default Opthalmologists