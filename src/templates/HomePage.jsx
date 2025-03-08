import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';

const HomePage = ({customer}) => {
    


    const router = useRouter();
    const deleteHandler = async(id)=>{

        try {

            const res = await fetch(`/api/customer/${id}`, {
                method: "DELETE"
            })
            const data = await res.json()
            if(data.status === "Success") {
                toast.success("data has been deleted!")
                await new Promise(resolver => setTimeout(resolver, 2000))
                router.reload()
            }
            if(data.status === "Failed") {
                toast.error("data hasn't been deleted!")
                await new Promise(resolver => setTimeout(resolver, 2000))
                router.reload()
            }
        } catch(error) {
            console.log("something went wrong to delete data")
        }
    }

    return (
        <section className='customer-card'>
            <h2 className='customer-card__title'>
                Customer List
            </h2>
            {
        customer.length ?
        customer.map(item=> (
          <section className="customer-card__container" key={item._id}>
            <li className="customer-card__item">
              <div className="item__details">
                <div className="details__content">
  
              <label>Name: </label>
              <span className="mr-3">{item.name}</span>
              <span>|</span>
              <label className="ml-3">lastName: </label>
              <span>{item.lastName}</span>
                </div>
              </div>
              <div className="item__tools">
                <button className='item__tools_delete' onClick={()=> deleteHandler(item._id)}>Delete</button>
                <Link href={`edit/${item._id}`} className="item__tools_edit">Edit</Link>
                <Link href={`details/${item._id}`} className="item__tools_details">Details</Link>
              </div>
            </li>
          </section>
        )): (<div>
          nothing has been added to db
        </div>)
      }
        </section>
    );
};

export default HomePage;