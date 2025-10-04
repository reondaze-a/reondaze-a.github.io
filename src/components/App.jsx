import Navbar from "./Navbar";
import Main from "./Main";
import ContactModal from "./Modals/ContactModal";
import SubmitModal from "./Modals/SubmitModal";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <Main />
      <ContactModal />
      <SubmitModal />
    </div>
  );
}

export default App;
