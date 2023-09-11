import React, { useState } from "react";
import axios from "axios";
import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <div className="hero">
        <div className="welcome">
          <p>Assalamu'alaikum warahmatullahi wabarukatuh</p>
          <h1>Selamat Datang</h1>
          <input type="text" />
        </div>
        <div className="peserta">
          <h3>Nama Peserta</h3>
          <p>id peserta</p>
        </div>
      </div>
      <div className="event">
        <h3> Event Berlangsung</h3>
        <div className="cardEvent">
          <img src={require("../../asset/Desktop1.png")} alt="" />
          <h3>Simulasi Tryout AKM 2022 Jenjang SMA</h3>
          <p className="tgl">tanggal sampai pukul</p>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            beatae, itaque voluptate voluptatum praesentium commodi dolorem sint
            sed minima quod est ratione, suscipit vitae error fuga. Soluta sit
            beatae laborum.
          </p>
          <a href="">PILIH EVENT</a>
        </div>
      </div>
    </div>
  );
}
