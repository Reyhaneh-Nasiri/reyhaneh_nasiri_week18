import { useState } from "react"
import ContactListPage from "./pages/ContactListPage/ContactListPage"
import AddContactPage from "./pages/AddContactPage/AddContactPage"

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  return (
    <>
      {currentPage === "contact-list" && <ContactListPage setCurrentPage={setCurrentPage} />}
      {currentPage === "add-contact" && <AddContactPage setCurrentPage={setCurrentPage} />}
    </>
  )
}

export default App