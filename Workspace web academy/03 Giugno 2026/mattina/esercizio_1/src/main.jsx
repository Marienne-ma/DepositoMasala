import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './Navbar.jsx'
import {ButtonTitle} from './ButtonTitle.jsx'
import {GridCard} from './GridCard.jsx'

const cards = [];
const nCard = 3;

for (let i = 1; i <= nCard; i++) {
  cards.push(<GridCard key={i} index={i} />);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <ButtonTitle/>
    {cards}
  </StrictMode>,
)
