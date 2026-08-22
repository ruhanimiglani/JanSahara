import { useState } from "react";
import PageHeader from "../components/PageHeader";

function TrustedContacts() {

  const [contacts, setContacts] = useState(() => {

    const saved =
      localStorage.getItem("trustedContacts");

    return saved ? JSON.parse(saved) : [];

  });


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  function addContact(event) {

    event.preventDefault();

    if (!name || !phone) {
      return;
    }


    const newContact = {
      id: Date.now(),
      name: name,
      phone: phone
    };


    const updatedContacts = [
      ...contacts,
      newContact
    ];


    setContacts(updatedContacts);

    localStorage.setItem(
      "trustedContacts",
      JSON.stringify(updatedContacts)
    );


    setName("");
    setPhone("");

  }


  function deleteContact(id) {

    const updatedContacts =
      contacts.filter(
        (contact) => contact.id !== id
      );


    setContacts(updatedContacts);

    localStorage.setItem(
      "trustedContacts",
      JSON.stringify(updatedContacts)
    );

  }


 function sendSMS() {
  alert("SMS feature will be available in the next version.");
 }


  return (
    <main className="page">

      <PageHeader
        title="Trusted Contacts"
        description="Keep important people ready for emergencies."
      />


      <div className="contacts-layout">


        <form
          className="contact-form"
          onSubmit={addContact}
        >

          <h2>Add Contact</h2>


          <label>
            Name

            <input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter name"
            />

          </label>


          <label>
            Phone Number

            <input
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value)
              }
              placeholder="Enter phone number"
            />

          </label>


          <button
            className="btn dark"
            type="submit"
          >
            Add Contact
          </button>

        </form>


        <div className="contact-list">

          <h2>Your Contacts</h2>


          {contacts.length === 0 ? (

            <div className="empty-box">

              <span>👥</span>

              <p>
                No trusted contacts added yet.
              </p>

            </div>

          ) : (

            contacts.map((contact) => (

              <div
                className="contact-card"
                key={contact.id}
              >

                <div className="contact-avatar">
                  👤
                </div>

                <div className="contact-details">

                  <h3>{contact.name}</h3>

                  <p>{contact.phone}</p>

                </div>


                <div className="contact-buttons">

                <button
                 onClick={() =>
                alert("Calling feature will be available in the next version.")
                }
                >
                📞
                </button>

                  <button
                    onClick={() =>
                      sendSMS(contact.phone)
                    }
                  >
                    💬
                  </button>

                  <button
                    onClick={() =>
                      deleteContact(contact.id)
                    }
                  >
                    🗑️
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </main>
  );
}

export default TrustedContacts;