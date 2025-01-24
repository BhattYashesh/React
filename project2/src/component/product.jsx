import React from 'react'
import './new.app.css'
import './new.app.css'
function Product({list}) {
  return (
    <>
     <div >
       <table className='m-auto'>
         <thead className='w-100'>
            
            <th className='mainimg border border-1 border-dark text-center w-25'>IMAGE</th>
            <th className='mainname border border-1 border-dark text-center w-25'>NAME</th>
            <th className='mainprice border border-1 border-dark text-center w-25'>PRICE</th>
         </thead>
         <tbody>
            {
                list.map((el)=>{
                    return(
                        <>
                          <tr class='main'>
                           
                            <td className='images border border-1 border-light text-center'><img src={el.img} alt="" /></td>
                            <td className='names border border-1 border-light text-center fw-bold text-light'>{el.name}</td>
                            <td className='prices border border-1 border-light text-center fw-bold text-light'>{el.price}</td>
                          </tr>
                        </>
                    )
                })
            }
         </tbody>
       </table>
    </div> 

    </>
  )
}

export default Product;
