import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/D4E03AQFPOFyVUElmVg/profile-displayphoto-shrink_800_800/0/1679924676844?e=2147483647&v=beta&t=CLdJBFlo2a8wj2SB-1jpOhTlKfJJeWn8Nn21EcfE950" />
      {contacts.map((contact) => (
        <Card
          key={contact.id} // this is a special prop that React will look for and use to identify each unique element amongst its siblings. This way, React will know which elements to re-render when a change occurs.
          name={contact.name}
          img={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
