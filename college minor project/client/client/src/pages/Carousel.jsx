// import React, { useEffect, useState } from 'react';
// import burger from '../assets/Burger.jpg';
// import pizza from '../assets/Pizza.jpg';
// import pulao from '../assets/Pulao.jpg';
// import momos from '../assets/Momos.png';
// import dosa from '../assets/dosa.webp';

// const images = [burger, pizza, pulao, momos, dosa];

// const Carousel = () => {
//   const [index, setIndex] = useState(0);

//   const showSlide = (n) => {
//     if (n < 0) n = images.length - 1;
//     if (n >= images.length) n = 0;
//     setIndex(n);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => showSlide(index + 1), 2500);
//     return () => clearInterval(interval);
//   }, [index]);

//   return (
//     <div className="carousel">
//       <div className="carousel-images">
//         {images.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             className={`carousel-slide ${i === index ? 'active' : ''}`}
//             style={{ display: i === index ? 'block' : 'none' }}
//           />
//         ))}
//       </div>
//       <button className="prev" onClick={() => showSlide(index - 1)}>&#10094;</button>
//       <button className="next" onClick={() => showSlide(index + 1)}>&#10095;</button>
//       <div className="dots">
//         {images.map((_, i) => (
//           <span
//             key={i}
//             className={`dot ${i === index ? 'active' : ''}`}
//             onClick={() => showSlide(i)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
