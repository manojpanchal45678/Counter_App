//alert('ruko');
 const countValue = document.querySelector('#count');
 const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
 };


 const increment = () => {
    let value = parseInt(countValue.innerText); 
    value = value + 1;
    countValue.innerText = value;
};


const reset = () =>{
    //alert('Are You Sure to Reset It');
   let value = parseInt(countValue.innerText);
   value = 0;
   countValue.innerText = value;
};

 async function wait(){
    console.log('Manoj Panchal');
 }
addEventListener('click', wait);