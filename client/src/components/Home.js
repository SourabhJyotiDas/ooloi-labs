import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, clearMessage, registerEvent } from '../actions/event';
import Loader from "./Loader.js";
import imglogo from "./logoImg.png";
import { toast } from 'react-toastify';



export default function Home() {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.event);

  const [shortTitle, setshortTitle] = useState("");
  const [registrationLink, setregistrationLink] = useState("");
  const [date, setdate] = useState("");
  const [startTime, setstarttime] = useState("");
  const [endTime, setendTime] = useState("");
  const [about, setabout] = useState("");
  const [speakers, setspeakers] = useState("");
  const [moderator, setmoderator] = useState("");
  const [referLink, setreferLink] = useState("");
  const [joiningInfo, setjoiningInfo] = useState("");
  const [organisedBy, setorganisedBy] = useState("");
  const [tags, settags] = useState("");
  const [speakerInfomation, setspeakerInfomation] = useState("");
  const [moderatorInformation, setmoderatorInformation] = useState("");

  const [speackeravatar, setSpeakerAvatar] = useState(imglogo);
  const [moderatorAvatar, setmoderatorAvatar] = useState(imglogo);


  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("shortTitle", shortTitle);
    myForm.set("registrationLink", registrationLink);
    myForm.set("date", date);
    myForm.set("startTime", startTime);
    myForm.set("endTime", endTime);
    myForm.set("about", about);
    myForm.set("speakers", speakers);
    myForm.set("moderator", moderator);
    myForm.set("referLink", referLink);
    myForm.set("joiningInfo", joiningInfo);
    myForm.set("organisedBy", organisedBy);
    myForm.set("tags", tags);
    myForm.set("speakerInfomation", speakerInfomation);
    myForm.set("moderatorInformation", moderatorInformation);

    myForm.set("speackeravatar", speackeravatar);
    myForm.set("moderatorAvatar", moderatorAvatar);

    dispatch(registerEvent(myForm));
  };

  useEffect(() => {

    
    if (success) {
      toast.success("Created successfully", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      })
      dispatch(clearMessage())
      dispatch(clearErrors())
    }
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      })
      dispatch(clearErrors())
      dispatch(clearMessage())
    }


  }, [dispatch, success, error])


  const handleSpeakerImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setSpeakerAvatar(Reader.result);
      }
    };
  };


  const handleModeratorImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setmoderatorAvatar(Reader.result);
      }
    };
  };


  return (
    <>
      {
        loading ? <Loader /> :
          <div className="">

            <div className="">

              <div className='w-[100vw]  sticky top-0 bg-gray-100 z-10'>
                <div className='w-[65%] mx-auto  bg-gray-100'>
                  <button className='p-2 rounded-md my-2 bg-red-500 text-white ' onClick={createProductSubmitHandler}> Publish</button>
                </div>
              </div>

              <form className="w-[100%]  flex flex-col items-center justify-center" encType="multipart/form-data" >
                <div className='bg-blue-200 w-[100vw] flex flex-col items-center justify-center py-5 pb-24'>
                  <h1 className='text-gray-400 font-semibold'>EVENT <span className='text-red-500'>WORKSHOP</span></h1>

                  <input className=' w-[50%] py-3 px-5 mx-auto outline-none bg-transparent text-center text-3xl font-medium' type="text" placeholder="Enter a Short, Descriptive Title" minLength={1} value={shortTitle} onChange={(e) => setshortTitle(e.target.value)} />

                  <input className=' w-[50%] p-5 mx-auto outline-none my-5 bg-gray-200 font-semibold rounded-md' type="text" placeholder="Paste or enter registration link here" required value={registrationLink} onChange={(e) => setregistrationLink(e.target.value)} />
                </div>

                <div className=' my-10 bg-white rounded-md w-[65%] py-3 flex justify-center relative bottom-[5rem]'>
                  <div className='w-[50%] space-y-3'>
                    <h2 className='uppercase text-gray-500'>When</h2>
                    <div className="flex items-center justify-center ">
                      <input type="date" className="p-2 px-5 bg-blue-300 rounded-md text-sm mx-4" value={date} onChange={(e) => setdate(e.target.value)} />
                      <input type="time" className="p-2 px-5 bg-blue-300 rounded-md text-sm mx-4" value={startTime} onChange={(e) => setstarttime(e.target.value)} />
                      <span className='text-gray-500'>to</span>
                      <input type="time" className="p-2 px-5 bg-blue-300 rounded-md text-sm mx-4" value={endTime} onChange={(e) => setendTime(e.target.value)} />
                    </div>
                  </div>
                </div>


                <div className='w-[50%] mx-auto mb-10'>
                  <h1 className='uppercase leading-loose text-gray-500 text-sm '>About the event</h1>
                  <p className='font-semibold text-gray-500 italic '>What is the event going to be about? What should people expect?</p>
                  <input className=' w-[100%] py-3 mx-auto outline-none font-medium text-lg' type="text" placeholder="write here" required value={about} onChange={(e) => setabout(e.target.value)} />
                </div>


                <div className='w-[50%] mx-auto  space-y-3 my-10'>
                  <h1 className='uppercase leading-loose text-gray-500 text-sm '>About the speakers</h1>
                  <p className='font-semibold text-gray-500 italic'>Mention a few key points about the speaker that are the relevent to the topic, to create interest in th event</p>
                  <div className='w-[100%] border border-gray-300 flex items-center p-10'>
                    <div className='w-[15%]'>
                      <img className='rounded-full h-[80px] w-[80px]' src={speackeravatar} alt="" />
                    </div>
                    <div className='space-y-3'>
                      <input className=' w-[100%]  mx-auto outline-none font-medium text-lg' type="text" placeholder="Name Of The Speaker" required value={speakers} onChange={(e) => setspeakers(e.target.value)} />
                      <input className=' w-[100%] mx-auto outline-none font-medium text-sm' type="text" placeholder="About The Speaker" required value={speakerInfomation} onChange={(e) => setspeakerInfomation(e.target.value)} />
                      <input className='w-[90%]' type="file" accept='image/*' onChange={handleSpeakerImageChange} />
                    </div>
                  </div>
                </div>



                <div className='w-[50%] mx-auto  space-y-3 my-10'>
                  <h1 className='uppercase leading-loose text-gray-500 text-sm '>About the moderator <span className='lowercase mx-3 font-light'>(optional)</span> </h1>
                  <p className='font-semibold text-gray-500 italic '>Mention a few key points about moderator</p>
                  <div className='w-[100%] border border-gray-300 flex items-center p-10'>
                    <div className='w-[15%]'>
                      <img className='rounded-full h-[80px] w-[80px]' src={moderatorAvatar} alt="" />
                    </div>
                    <div className='space-y-3'>
                      <input className=' w-[100%]  mx-auto outline-none font-medium text-lg' type="text" placeholder="Name Of The Moderator" value={moderator} onChange={(e) => setmoderator(e.target.value)} />
                      <input className=' w-[100%] mx-auto outline-none font-medium text-sm' type="text" placeholder="About The Moderator" value={moderatorInformation} onChange={(e) => setmoderatorInformation(e.target.value)} />
                      <input className='w-[90%]' type="file" accept='image/*' onChange={handleModeratorImageChange} />
                    </div>
                  </div>
                </div>


                <div className='w-[50%] mx-auto my-10'>
                  <h1 className='uppercase leading-loose text-gray-500 text-sm '>reading material and resources <span className='lowercase mx-3 font-light'>(optional)</span> </h1>
                  <p className='font-semibold text-gray-500 italic '>Share links or documents that you think people can/should refer the event</p>
                  <input className=' w-[100%] py-3 mx-auto outline-none font-medium text-lg' type="text" placeholder="write here" value={referLink} onChange={(e) => setreferLink(e.target.value)} />
                </div>



                <div className='w-[50%] mx-auto my-10'>
                  <h1 className='uppercase leading-loose text-gray-500 text-sm '>Joining info<span className='lowercase mx-3 font-light'>(optional)</span> </h1>
                  <p className='font-semibold text-gray-500 italic '>Share links to the event or live stream</p>
                  <input className=' w-[100%] py-3 mx-auto outline-none font-medium text-lg' type="text" placeholder="write here" value={joiningInfo} onChange={(e) => setjoiningInfo(e.target.value)} />
                </div>


                <div className='w-[50%] mx-auto my-10'>
                  <h1 className='uppercase leading-loose text-gray-500 text-sm '>Organised by<span className='lowercase mx-3 font-light'>(optional)</span> </h1>
                  <p className='font-semibold text-gray-500 italic '>Name person/s organisation/s Working Group/s , State Networks that organised the event</p>
                  <input className=' w-[100%] py-3 mx-auto outline-none font-medium text-lg' type="text" placeholder="write here" value={organisedBy} onChange={(e) => setorganisedBy(e.target.value)} />
                </div>



                <div className='w-[50%] mx-auto my-10'>
                  <h1 className='uppercase leading-loose text-gray-500 text-sm '>tags<span className='lowercase mx-3 font-light'>(optional)</span> </h1>
                  <input className=' w-[100%] py-3 mx-auto outline-none font-medium text-lg' type="text" placeholder="write here" value={tags} onChange={(e) => settags(e.target.value)} />
                </div>



              </form>
            </div>
          </div>
      }
    </>
  );
}
