import React, { useState } from "react";

const Hooks = () => {
  //! usestate hook u herzaman yukarıya yazılır
  const [sayac, setSayac] = useState(0);

  const [kisi, setKisi] = useState({
    isim: "Özlem",
    email: "ozlem@hotmail.com",
    yas: 39,
    renk: "red",
  });


  const arttir = () => {
    setSayac(sayac + 1); //sayac=sayac+1
  };

  const azalt = () => {
    setSayac(sayac - 1);
  };

  const degistir = () => {
    if (kisi.isim === "Özlem") {
      setKisi({
        isim: "Nihal",
        email: "nihal@hotmail.com",
        yas: 29,
        renk: "green",
      });
    } else {
      setKisi({
        isim: "Özlem",
        email: "ozlem@hotmail.com",
        yas: 39,
        renk: "red",
      });
    }
  };

  return (
    <div className="container">
      <h2>*******************************************************</h2>
      <h2>****************************************************************</h2>
      <h1>USESTATE</h1>
      <h2>COUNT:{sayac}</h2>
      <button className="btn btn-primary" onClick={arttir}>
        ARTTIR
      </button>
      <button className="btn btn-danger" onClick={azalt}>
        AZALT
      </button>
      <button className="btn btn-warning" onClick={() => setSayac(0)}>
        TEMİZLE
      </button>
      <h1>*******************************************************</h1>
      <div className="text-center mt-4">
        <h1>OBJECT İLE USESTATE KULLANIMI</h1>
        <h2>{kisi.isim}</h2>
        <h3>{kisi.email}</h3>
        <h5>{kisi.yas} </h5>
        <button
          style={{ backgroundColor: kisi.renk, color: "yellow" }}
          className="btn "
          onClick={degistir}
        >
          CHANGE
        </button>
      </div>
    </div>
  );
};

export default Hooks;
