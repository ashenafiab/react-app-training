import React from "react";
import { createRoot } from "react-dom/client";


// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="img-size" src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

root.render(
<div>
    <h1>My Contacts</h1>
    <Card
      name="Matt LeBlanc"
      img="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/960w/products/75500/75297/ss3089190_-_photograph_of_matt_leblanc_available_in_4_sizes_framed_or_unframed_buy_now_at_starstills__79880__15946.1394506754.jpg?c=2"
      tel="+123 456 789"
      email="m@leblanc.com"
    />
    <Card
      name="Lisa Kurdow"
      img="https://i.insider.com/5ec036b5f34d056334397275?width=1136&format=jpeg"
      tel="+7387384587"
      email="lisa@kurdow.com"
    />
    <Card
      name="David Schwimmer"
      img="https://static.wikia.nocookie.net/253990cc-db21-40b6-b008-c1ff679db708"
      tel="+7387384587"
      email="david@ross.com"
    />
  </div>
);