import SummaryApi from '../common'
import moment from 'moment'
import displayINRCurrency from '../helpers/displayCurrency'
import { useEffect, useState } from 'react'


const AllOrder = () => {
    const [data,setData] = useState([])
    
      const fetchOrderDetails = async()=>{
        const response = await fetch(SummaryApi.allOrder.url,{
          method : SummaryApi.allOrder.method,
          credentials : 'include'
        })
    
        const responseData = await response.json()
    
        setData(responseData.data)
        console.log("order list",responseData)
      }
    
      useEffect(()=>{
        fetchOrderDetails()
      },[])
    
      return (
        <div className='h-[calc(100vh-190px)] overflow-y-scroll'>
          {
             !data[0] && (
              <p className='text-white'>No Order available</p>
             )
          }
    
          <div className='p-4 w-full'>
              {
                data.map((item,index)=>{
                  return(
                    <div key={item.userId+index}>
                       <p className='font-medium text-lg text-white'>{moment(item.createdAt).format('LL')}</p> 
                       <div className='border rounded p-1'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='grid gap-2'>
                                  {
                                    item?.productDetails.map((product,index)=>{
                                      return(
                                        <div key={product.productId+index} className='flex  gap-3 bg-white'>
                                            <img 
                                              src={product.image[0]}
                                              className='w-28 h-28 bg-white object-scale-down p-2'
                                            />
                                            <div>
                                              <div className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</div>
                                              <div className='flex items-center gap-5 mt-1'>
                                                <div className='text-lg text-red-500'>{displayINRCurrency(product.price)}</div>
                                                <p>Quantity : {product.quantity}</p>
                                              </div>
                                            </div>
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                                <div className='flex flex-col gap-4 p-2 min-w-[300px] text-white bg-black'>
                                  <div>
                                      <div className='text-lg font-medium'>Payment Details : </div>
                                      <p className=' ml-1'>Payment method : {item.paymentDetails.payment_method_type[0]}</p>
                                      <p className=' ml-1'>Payment Status : {item.paymentDetails.payment_status}</p>
                                  </div>
                                  <div>
                                    <div className='text-lg font-medium'>Shipping Details :</div>
                                    {
                                      item.shipping_options.map((shipping,index)=>{
                                        return(
                                          <div key={shipping.shipping_rate} className=' ml-1'>
                                            Shipping Amount : {shipping.shipping_amount}
                                          </div>
                                        )
                                      })                      
                                    }
                                  </div>
                                </div>
                            </div>
    
                          <div className='font-semibold ml-auto w-fit lg:text-lg text-white'>
                            Total Amount : {item.totalAmount}
                          </div>
                       </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      )
}

export default AllOrder;