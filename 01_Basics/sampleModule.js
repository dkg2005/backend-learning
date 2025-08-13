const acessSampleModule = () =>{
    console.log("inside the module");
    return "Acessing the sampleModule";
}

let AddtoCart = (item) =>{
    return `Item Added to cart :  ${item}`;
}

// module.exports = acessSampleModule // for exporting default module
module.exports = {acessSampleModule, AddtoCart}; // for exporting multiple modules