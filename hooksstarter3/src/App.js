import React, { useState } from "react";
import "./App.css";
import Contact from "./Contact";
import ContactSearch from "./ContactSearch";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      telNumber: "(123)-456-7890",
      email: "john@example.com",
      imgSrc: "/baseline_perm_identity_black_48dp.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      telNumber: "(987)-654-3210",
      email: "jane@example.com",
      imgSrc: "/baseline_perm_identity_black_48dp.png",
    },
    {
      id: 3,
      name: "Bob Johnson",
      telNumber: "(555)-555-5555",
      email: "bob@example.com",
      imgSrc: "/baseline_perm_identity_black_48dp.png",
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Contact App</h1>
      <ContactSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="contact-list">
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
