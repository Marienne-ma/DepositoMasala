import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Header";
import { Footer } from "./components/Footer";
import { Card } from "./components/TeamCard";


function App() {
  const users = [
  {
    name: "Mario Rossi",
    role: "Frontend Developer",
    bio: "Ama React e UI moderne",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Luca Bianchi",
    role: "Backend Developer",
    bio: "Lavora con API e database",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Anna Verdi",
    role: "UX Designer",
    bio: "Progetta interfacce intuitive",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Giulia Ferrari",
    role: "Full Stack Developer",
    bio: "Frontend + Backend",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Marco Conti",
    role: "DevOps Engineer",
    bio: "Cloud e infrastruttura",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Elena Neri",
    role: "UI Designer",
    bio: "Design moderno e pulito",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Davide Romano",
    role: "Backend Developer",
    bio: "API e microservizi",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Sara Greco",
    role: "Frontend Developer",
    bio: "React e animazioni UI",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Andrea Fontana",
    role: "Project Manager",
    bio: "Coordina team e progetti",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  },
  {
    name: "Francesca Leone",
    role: "QA Tester",
    bio: "Test e qualità software",
    imageUrl: "",
    isPresent: Math.random() > 0.5,
  }
];

  const cards = [];

  for (let i = 0; i < users.length; i++) {
    cards.push(<Card key={i} {...users[i]} />);
  }

  return (
    <>
      <div >
        <Navbar />

        <div className="content">
          <div className="card_container">{cards}</div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
