import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Home = () => {
  //Using the react modal
  const [openAddEditModal, setAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [userInfo,setUserInfo] = useState(null)

  const navigate = useNavigate();

  // Get user info
  const getUserInfo = async ()=>{
    try {
      const response = await axiosInstance.get("/get-user");
      if(response.data && response.data.user){
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if(error.response.status === 401){
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(()=>{
  getUserInfo();
    return()=>{};
  },[])


  return (
    <>
      <Navbar userInfo ={userInfo} />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Date with Sally on 22nd november"
            date="19th Nov 2024"
            content="Date with Sally, Pick her at 21:00"
            tags="#Date"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[30px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Add/Edit Notes"
        className="w-full max-w-3xl max-h-[75v] bg-white rounded-lg mx-auto mt-14 p-6 overflow-y-auto backdrop-blur-sm transition-all shadow-lg"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};
export default Home;
