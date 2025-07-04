// src/app/components/Starfield.js
import '../styles/stars-rain-animation.scss'

export default function Starfield() {
  return (
    <div className="stars">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="star"></div>
      ))}
    </div>
  );
}
