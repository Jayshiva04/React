// src/Components/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

// Mock data
const products = [
  { id: 1, name: 'Electric Guitar', price: '499.99', image: `${process.env.PUBLIC_URL}/assets/images/1.jpg`, history: 'The electric guitar was invented in the 1930s to provide a louder and more versatile instrument.', usage: 'Used in genres like rock, blues, and jazz.', reviews: ['Fantastic guitar with great sound. - John D.', 'Excellent build quality. - Emily R.', 'Perfect for live performances. - Mike L.'] },
  { id: 2, name: 'Grand Piano', price: '2999.99', image: `${process.env.PUBLIC_URL}/assets/images/2.jpg`, history: 'The grand piano was invented in the early 18th century and is known for its rich sound and expressive range.', usage: 'Commonly used in classical, jazz, and solo performances.', reviews: ['Beautiful sound and elegant design. - Sarah W.', 'A joy to play. - David S.', 'Worth every penny for professional use. - Laura M.'] },
  { id: 3, name: 'Drum Set', price: '799.99', image: `${process.env.PUBLIC_URL}/assets/images/3.jpg`, history: 'Drum sets became popular in the early 20th century and are a staple in modern music.', usage: 'Used in rock, jazz, and various other genres.', reviews: ['Great set for beginners and professionals. - Chris T.', 'Solid build and excellent sound. - Amanda K.', 'Perfect for live gigs. - Brian H.'] },
  { id: 4, name: 'Saxophone', price: '699.99', image: `${process.env.PUBLIC_URL}/assets/images/4.jpg`, history: 'Invented in the 1840s by Adolphe Sax, the saxophone is known for its unique tone and versatility.', usage: 'Common in jazz, classical, and marching bands.', reviews: ['Rich, smooth tone. - Kevin B.', 'Ideal for jazz enthusiasts. - Jenny C.', 'Well-crafted and durable. - Oliver P.'] },
  { id: 5, name: 'Flute', price: '199.99', image: `${process.env.PUBLIC_URL}/assets/images/5.jpg`, history: 'One of the oldest musical instruments, the flute has been used for thousands of years.', usage: 'Popular in classical, folk, and contemporary music.', reviews: ['Lightweight and easy to play. - Alice L.', 'Great sound quality. - Mark R.', 'Excellent for orchestras. - Lily T.'] },
  { id: 6, name: 'Clarinet', price: '249.99', image: `${process.env.PUBLIC_URL}/assets/images/6.jpg`, history: 'The clarinet has been around since the 18th century and is known for its warm, rich tone.', usage: 'Used in orchestras, jazz, and chamber music.', reviews: ['Versatile and expressive. - James N.', 'High-quality instrument for the price. - Mia F.', 'Perfect for classical and jazz music. - Sophia D.'] },
  { id: 7, name: 'Trumpet', price: '349.99', image: `${process.env.PUBLIC_URL}/assets/images/7.jpg`, history: 'The trumpet has been a prominent instrument in classical and jazz music since ancient times.', usage: 'Essential in brass sections of orchestras and jazz bands.', reviews: ['Bright and clear sound. - Daniel G.', 'Excellent for both solo and ensemble playing. - Nina M.', 'Great value for money. - Tom H.'] },
  { id: 8, name: 'Cello', price: '899.99', image: `${process.env.PUBLIC_URL}/assets/images/8.jpg`, history: 'The cello evolved from the viola da gamba and has been a crucial part of orchestral music since the 17th century.', usage: 'Used in classical music and solo performances.', reviews: ['Deep and resonant tone. - Claire J.', 'Ideal for classical music. - Alex R.', 'Well-made and durable. - Ella C.'] },
  { id: 9, name: 'Violin', price: '599.99', image: `${process.env.PUBLIC_URL}/assets/images/9.jpg`, history: 'The violin, originating in the 16th century, is one of the most popular and versatile string instruments.', usage: 'Widely used in classical, folk, and contemporary music.', reviews: ['Beautiful sound and craftsmanship. - Jessica W.', 'Great for all skill levels. - Oliver K.', 'A classic choice for orchestras. - Emily B.'] },
  { id: 10, name: 'Harp', price: '1999.99', image: `${process.env.PUBLIC_URL}/assets/images/10.jpg`, history: 'The harp is one of the oldest string instruments, with roots in ancient civilizations.', usage: 'Used in classical and folk music.', reviews: ['Elegant and melodic. - Sophia L.', 'A stunning instrument for performances. - Lucas A.', 'Perfect for classical and folk music. - Ava T.'] },
  { id: 11, name: 'Trombone', price: '399.99', image: `${process.env.PUBLIC_URL}/assets/images/11.jpg`, history: 'The trombone has been around since the Renaissance and is known for its slide mechanism.', usage: 'Used in orchestras, jazz bands, and brass ensembles.', reviews: ['Rich and powerful sound. - Noah J.', 'Great slide action. - Chloe H.', 'Ideal for jazz and classical. - Liam S.'] },
  { id: 12, name: 'Bass Guitar', price: '499.99', image: `${process.env.PUBLIC_URL}/assets/images/12.jpg`, history: 'The bass guitar, introduced in the 1950s, is essential for modern rhythm sections.', usage: 'Used in rock, jazz, and various other genres.', reviews: ['Solid bass tones. - Ava M.', 'Perfect for any band. - Mia T.', 'Great build quality. - James C.'] },
  { id: 13, name: 'Banjo', price: '299.99', image: `${process.env.PUBLIC_URL}/assets/images/13.jpg`, history: 'The banjo has roots in African instruments and became popular in American folk music.', usage: 'Common in bluegrass and folk music.', reviews: ['Bright and distinctive sound. - Liam W.', 'Great for folk and bluegrass. - Ella P.', 'Well-crafted and durable. - Jack R.'] },
  { id: 14, name: 'Mandolin', price: '199.99', image: `${process.env.PUBLIC_URL}/assets/images/14.jpg`, history: 'The mandolin, with roots in Italy, has been used in folk and classical music for centuries.', usage: 'Popular in bluegrass and classical music.', reviews: ['Sweet and resonant tone. - Sophia F.', 'Ideal for folk and classical music. - Noah D.', 'Beautiful craftsmanship. - Grace M.'] },
  { id: 15, name: 'Accordion', price: '699.99', image: `${process.env.PUBLIC_URL}/assets/images/15.jpg`, history: 'The accordion, invented in the early 19th century, is known for its distinctive sound.', usage: 'Used in folk, classical, and popular music.', reviews: ['Versatile and expressive. - Olivia G.', 'Great for folk and classical. - Ethan J.', 'A unique sound for performances. - Mia S.'] },
  { id: 16, name: 'Oboe', price: '349.99', image: `${process.env.PUBLIC_URL}/assets/images/16.jpg`, history: 'The oboe has been a part of orchestras since the Baroque period, known for its distinctive timbre.', usage: 'Common in orchestral and chamber music.', reviews: ['Rich and expressive tone. - Ava C.', 'Ideal for classical music. - Logan A.', 'Well-made and responsive. - Emma H.'] },
  { id: 17, name: 'Tuba', price: '999.99', image: `${process.env.PUBLIC_URL}/assets/images/17.jpg`, history: 'The tuba, invented in the 19th century, is the largest of the brass instruments.', usage: 'Used in orchestras and brass bands.', reviews: ['Deep and powerful sound. - Daniel M.', 'Great for brass sections. - Lily R.', 'Durable and well-crafted. - Ben L.'] },
  { id: 18, name: 'Tabla', price: '149.99', image: `${process.env.PUBLIC_URL}/assets/images/18.jpg`, history: 'The tabla is a traditional Indian percussion instrument with a history dating back to ancient times.', usage: 'Used in Indian classical music and various folk traditions.', reviews: ['Rich and resonant. - Priya K.', 'Great for classical and folk music. - Anil S.', 'Excellent build and sound. - Ravi P.'] },
  { id: 19, name: 'Harmonica', price: '49.99', image: `${process.env.PUBLIC_URL}/assets/images/19.jpg`, history: 'The harmonica, also known as the French harp, was invented in the early 19th century.', usage: 'Popular in blues, folk, and rock music.', reviews: ['Compact and versatile. - Joe L.', 'Great for blues and folk. - Nina M.', 'Excellent for beginners. - Sam T.'] },
  { id: 20, name: 'Xylophone', price: '249.99', image: `${process.env.PUBLIC_URL}/assets/images/20.jpg`, history: 'The xylophone has roots in ancient Africa and Asia, and is known for its bright, melodic sound.', usage: 'Used in orchestras and solo performances.', reviews: ['Bright and clear tone. - Lucas H.', 'Ideal for various music styles. - Emma W.', 'Great craftsmanship. - Oliver B.'] },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const { name, price, image, history, usage, reviews } = product;

  return (
    <div className="product-details-card">
      <img src={image} alt={name} className="product-image" />
      <h1 className="product-name">{name}</h1>
      <p className="product-price"><strong>Price:</strong> ${price}</p>
      <h2 className="product-history-heading">History</h2>
      <p className="product-history">{history}</p>
      <h2 className="product-usage-heading">Where it is Used</h2>
      <p className="product-usage">{usage}</p>
      <h2 className="product-reviews-heading">Reviews</h2>
      {reviews && reviews.length > 0 ? (
        <ul className="product-reviews">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">{review}</li>
          ))}
        </ul>
      ) : (
        <p className="no-reviews">No reviews available.</p>
      )}
    </div>
  );
};

export default ProductDetails;
