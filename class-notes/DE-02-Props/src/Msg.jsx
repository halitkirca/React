import React from "react";

const Msg = ({ isim, telefon }) => {
  //   console.log(props); //{isim: 'Osman Kara', telefon: '555 55 55'}

  return (
    <div>
      <h1>Merhaba ben {isim}</h1>
      <h4>benim telefon numaram {telefon}</h4>
    </div>
  );
};

export default Msg;
