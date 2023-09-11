import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbars">
      <div className="logo">
        <p>Ujian Bintang Pelajar</p>
      </div>
      <div className="navbarMenu">
        <div className="menu">
          <a href="">Beranda</a>
          <a href="">Riwayat</a>
        </div>
        <div className="logout">
          <a href="">Keluar</a>
        </div>
      </div>
    </div>
  );
}
