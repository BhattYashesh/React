import React from 'react'

function Product({list}) {
  return (
    <>
     <div >
       <table className='m-auto'>
         <thead className='w-100'>
            
            <th className='border border-1 border-dark text-center w-25'>Image</th>
            <th className='border border-1 border-dark text-center w-25'>Name</th>
            <th className='border border-1 border-dark text-center w-25'>Price</th>
         </thead>
         <tbody>
            {
                list.map((el)=>{
                    return(
                        <>
                          <tr>
                           
                            <td className='border border-1 border-dark text-center'><img src={el.img} alt="" /></td>
                            <td className='border border-1 border-dark text-center fw-bold'>{el.name}</td>
                            <td className='border border-1 border-dark text-center fw-bold'>{el.price}</td>
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
