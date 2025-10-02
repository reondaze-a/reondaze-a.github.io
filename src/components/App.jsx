import Navbar from "./Navbar";
import Main from "./Main";
import ContactModal from "./Modals/ContactModal";
import { ModalProvider } from "../contexts/ModalContext";
import { useState } from "react";

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar/>
      <Main />
      <ContactModal/>
    </div>
  );
}

export default App;
