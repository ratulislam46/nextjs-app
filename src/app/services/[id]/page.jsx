import React from 'react';


const ServiceDetailsPae = ({ params }) => {

    const data = [
        {
            _id: 1,
            divition: "Barishal",
            city: "Barishal"
        },
        {
            _id: 2,
            divition: "Barishal",
            city: "Potuakhali"
        },
        {
            _id: 3,
            divition: "Dhaka",
            city: "Mirpur"
        },
        {
            _id: 4,
            divition: "Sylhet",
            city: "Hemayetpur"
        }
    ];

    const id = params.id;
    const filterData = data.find((d) => d._id == id);
    // console.log(filterData);

    if(filterData){
        return (
            <div>
                <h1>Services Details page</h1>
                <p>ID: {params.id}</p>
                <h3>Devition: {filterData.divition}</h3>
                <h3>City: {filterData.city}</h3>
            </div>
        );
    }
    else{
        return(
            <>
            <p>NOT FOUND SERVICE</p>
            </>
        )
    }
};

export default ServiceDetailsPae;