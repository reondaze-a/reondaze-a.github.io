import Navbar from "./Navbar";
import Main from "./Main";
import ContactModal from "./Modals/ContactModal";

import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar setActiveModal={setActiveModal} />
      <Main />
      <ContactModal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
}

export default App;
