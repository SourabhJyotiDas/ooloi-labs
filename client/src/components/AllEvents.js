import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEvent, getAllEvents } from '../actions/event'
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AllEvents() {
   const dispatch = useDispatch()

   const { events, loading } = useSelector(state => state.event);

   const deleteEventHandler = async (id) => {
      await dispatch(deleteEvent(id))
      dispatch(getAllEvents());
      toast.success("Deleted successfully", {
         position: "top-center",
         autoClose: 3000,
         theme: "light",
       })

   }

   useEffect(() => {
      dispatch(getAllEvents())
   }, [dispatch])


   return (
      <>
         {
            loading ? <Loader /> :
               <div className='flex flex-wrap items-center justify-center'>
                  {
                     events && events.map((element, index) => {
                        return <div key={element._id} className='w-[30vw] h-[auto] p-5 border border-blue-400 m-3 space-y-4 flex flex-col items-center justify-center '>
                           <h2>Title : {element.shortTitle}</h2>
                           <p> Registration Link : {element.registrationLink}</p>
                           <p> Date : {element.date}</p>
                           <p> Starting time : {element.startTime}</p>
                           <p> Ending time : {element.endTime}</p>
                           <p> About the event : {element.about}</p>
                           <p> Joining info : {element.joiningInfo}</p>

                           <div className='flex items-center space-x-3'>

                              <Link to={`/update/${element._id}`}>
                                 <button className='p-2 bg-blue-500 text-white'>
                                    Update
                                 </button>
                              </Link>
                              <button className='p-2 bg-blue-500 text-white' onClick={() => { deleteEventHandler(element._id) }}>
                                 Delete
                              </button>
                           </div>

                        </div>
                     })
                  }
               </div>
         }
      </>
   )
}
