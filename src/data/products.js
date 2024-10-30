// src/data/products.js
const products = [
    { 
      id: 1, 
      name: 'Electric Guitar', 
      price: '499.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/1.jpg`,
      history: 'The electric guitar was invented in the 1930s by musicians who sought to amplify the sound of the guitar to be heard over other instruments in bands. Over the years, it has become a cornerstone of modern music, especially in genres like rock, blues, and jazz.',
      usage: 'Used predominantly in rock, blues, jazz, and pop music. It is also a staple in many contemporary music styles and is often associated with iconic musicians like Jimi Hendrix and Eric Clapton.',
      reviews: [
        'John Doe: "This guitar has a great sound, perfect for rock and blues!"',
        'Jane Smith: "The craftsmanship is excellent, and it stays in tune well."',
        'Alex Johnson: "A fantastic guitar for beginners and pros alike!"'
      ]
    },
    { 
      id: 2, 
      name: 'Grand Piano', 
      price: '2999.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/2.jpg`,
      history: 'The grand piano, as we know it today, was developed in the early 18th century. It is a symbol of classical music and is used in many prestigious concert halls around the world.',
      usage: 'Commonly used in classical music, jazz, and sometimes in pop and rock for live performances and recordings. It is renowned for its rich and full sound, making it a preferred choice for concert pianists.',
      reviews: [
        'Emily Davis: "The sound quality of this piano is unmatched. It’s perfect for my classical pieces."',
        'Michael Brown: "A beautiful instrument that is worth every penny."',
        'Sarah Wilson: "It adds a touch of elegance to any room and plays like a dream."'
      ]
    },
    { 
      id: 3, 
      name: 'Drum Set', 
      price: '799.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/3.jpg`,
      history: 'The modern drum set evolved in the early 20th century as a combination of various percussion instruments, creating a compact setup for drummers in jazz and big band music.',
      usage: 'Used in a wide range of genres including rock, jazz, pop, and blues. The versatility of the drum set makes it essential for live performances and recording sessions.',
      reviews: [
        'Jake Lee: "Great sound and durability. Perfect for my rock band!"',
        'Sophia Martinez: "Excellent set for both beginners and professionals. Highly recommend."',
        'Ethan Clark: "The quality and craftsmanship are top-notch. It’s a joy to play!"'
      ]
    },
    { 
      id: 4, 
      name: 'Saxophone', 
      price: '699.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/4.jpg`,
      history: 'Invented by Adolphe Sax in the 1840s, the saxophone has become a prominent instrument in jazz, classical, and popular music due to its unique sound and versatility.',
      usage: 'Frequently used in jazz, classical, and contemporary music. Its rich tone and expressive range make it a favorite among many musicians.',
      reviews: [
        'Oliver White: "This saxophone produces a warm and rich tone. Perfect for jazz!"',
        'Mia Turner: "An excellent choice for both beginners and seasoned players. Love the sound."',
        'William Scott: "Well-crafted and sounds amazing. Worth every penny."'
      ]
    },
    { 
      id: 5, 
      name: 'Flute', 
      price: '199.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/5.jpg`,
      history: 'The flute is one of the oldest musical instruments, with records dating back to ancient civilizations. Modern flutes have evolved significantly from their early counterparts.',
      usage: 'Commonly used in classical music, as well as in folk, jazz, and contemporary music. The flute’s bright, clear sound makes it a popular choice for many musical styles.',
      reviews: [
        'Ava Green: "A beautiful instrument with a clear, bright sound. Great for orchestras!"',
        'Liam Adams: "Excellent flute for both beginners and advanced players. Highly recommend."',
        'Isabella Brown: "The quality is exceptional. It has a wonderful tone and is easy to play."'
      ]
    },
    { 
      id: 6, 
      name: 'Clarinet', 
      price: '249.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/6.jpg`,
      history: 'Developed in the early 18th century, the clarinet became popular in classical music and has since found a place in various genres including jazz and folk music.',
      usage: 'Used in orchestras, bands, and chamber music. It is known for its versatility and wide range, from deep bass tones to bright high notes.',
      reviews: [
        'Noah Carter: "The sound is rich and full. Perfect for my orchestral performances."',
        'Emma Johnson: "A great clarinet with excellent intonation and tone quality."',
        'James Smith: "Durable and well-made. A fantastic addition to my collection."'
      ]
    },
    { 
      id: 7, 
      name: 'Trumpet', 
      price: '349.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/7.jpg`,
      history: 'The trumpet, with origins dating back to ancient times, became prominent in Western music during the Renaissance and Baroque periods and continues to be a major instrument in many music genres.',
      usage: 'Commonly used in classical, jazz, and marching band music. Its bright, powerful sound makes it a favorite for solos and ensemble playing.',
      reviews: [
        'Mason Hall: "This trumpet has a bright and powerful sound. Ideal for jazz and classical music."',
        'Olivia Wright: "Excellent build quality and tone. Perfect for any level of player."',
        'Lucas Lee: "Fantastic trumpet with great projection and clarity. Highly recommended."'
      ]
    },
    { 
      id: 8, 
      name: 'Cello', 
      price: '899.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/8.jpg`,
      history: 'The cello evolved from the viola da gamba in the late 16th century. It has become a key instrument in classical music and has also been used in various contemporary genres.',
      usage: 'Used in orchestras, chamber music, and solo performances. Known for its deep, rich tone, it is a staple in classical and modern music.',
      reviews: [
        'Aiden Taylor: "Rich, warm tones and excellent craftsmanship. Perfect for classical music."',
        'Sophia Brown: "The cello sounds fantastic and is well-made. Great for performance and practice."',
        'Ethan Davis: "An outstanding cello with a beautiful, resonant sound."'
      ]
    },
    { 
      id: 9, 
      name: 'Violin', 
      price: '599.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/9.jpg`,
      history: 'The violin has been a central instrument in Western classical music since the late 16th century. Its expressive range and versatility make it a favorite across many musical styles.',
      usage: 'Used in orchestras, chamber ensembles, and as a solo instrument. The violin is prominent in classical music and also has a place in folk, jazz, and modern genres.',
      reviews: [
        'Ella Martinez: "Excellent violin with a bright and clear tone. Perfect for my classical pieces."',
        'William Harris: "Well-crafted and sounds great. Ideal for both practice and performance."',
        'Mia Lewis: "A beautiful instrument with a warm sound. Very pleased with my purchase."'
      ]
    },
    { 
      id: 10, 
      name: 'Harp', 
      price: '1999.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/10.jpg`,
      history: 'The harp dates back to ancient civilizations and has been used in various musical traditions. The modern pedal harp was developed in the early 19th century and is a staple in classical music.',
      usage: 'Primarily used in classical music and orchestras. The harp’s ethereal sound also makes it suitable for folk and contemporary music genres.',
      reviews: [
        'Chloe Walker: "The harp has a magical sound and is beautifully crafted. Great for classical and modern music."',
        'Daniel Lewis: "Excellent harp with a beautiful tone. Worth every penny."',
        'Emily Robinson: "A stunning instrument with a rich, resonant sound. Perfect for performances."'
      ]
    },
    { 
      id: 11, 
      name: 'Trombone', 
      price: '399.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/11.jpg`,
      history: 'The trombone has been part of Western music since the 15th century. It is known for its unique slide mechanism, which allows it to produce a wide range of notes and effects.',
      usage: 'Used in classical music, jazz, and marching bands. The trombone’s slide mechanism makes it ideal for smooth glissandos and rich, full tones.',
      reviews: [
        'Liam Johnson: "Great trombone with excellent sound quality. Ideal for jazz and classical music."',
        'Isabella Miller: "The slide mechanism works flawlessly. Very pleased with this purchase."',
        'James Wilson: "A well-made trombone with a rich tone and good intonation."'
      ]
    },
    { 
      id: 12, 
      name: 'Bass Guitar', 
      price: '399.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/12.jpg`,
      history: 'The bass guitar was developed in the 1950s as an electric counterpart to the upright bass. It quickly became essential in rock, funk, jazz, and many other music genres.',
      usage: 'Used in rock, funk, jazz, and pop music. The bass guitar provides the harmonic foundation and rhythm in many musical styles.',
      reviews: [
        'Olivia Green: "Perfect bass guitar with great tone and playability. Ideal for my band!"',
        'Ethan Scott: "A solid instrument with a rich sound. Excellent for both practice and performance."',
        'Ava Johnson: "Well-crafted and delivers a deep, resonant tone. Highly recommend."'
      ]
    },
    { 
      id: 13, 
      name: 'Banjo', 
      price: '249.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/13.jpg`,
      history: 'The banjo has its origins in African musical traditions and was popularized in American folk and bluegrass music during the 19th century.',
      usage: 'Commonly used in bluegrass, folk, and country music. The banjo’s bright, distinctive sound makes it a key instrument in these genres.',
      reviews: [
        'Noah Harris: "A fantastic banjo with a bright, resonant sound. Perfect for bluegrass!"',
        'Emma Carter: "Well-made and easy to play. Great for folk and country music."',
        'Liam Taylor: "The craftsmanship is excellent, and it sounds amazing."'
      ]
    },
    { 
      id: 14, 
      name: 'Mandolin', 
      price: '299.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/14.jpg`,
      history: 'The mandolin, with origins in Italy, became popular in American folk and bluegrass music. It is known for its bright, plucked sound and distinctive tone.',
      usage: 'Used in folk, bluegrass, and classical music. The mandolin’s unique sound makes it a favorite for intricate melodies and solos.',
      reviews: [
        'Sophia Adams: "A beautifully crafted mandolin with a bright, clear tone."',
        'Jackson Lewis: "Great for bluegrass and folk music. Excellent build quality."',
        'Lily Smith: "The sound is vibrant and the instrument is easy to play."'
      ]
    },
    { 
      id: 15, 
      name: 'Accordion', 
      price: '549.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/15.jpg`,
      history: 'The accordion was invented in the early 19th century and has been used in various musical traditions, including folk, classical, and popular music around the world.',
      usage: 'Used in folk music, classical compositions, and various world music styles. The accordion’s versatile sound makes it suitable for many musical genres.',
      reviews: [
        'Mia Clark: "A versatile accordion with a rich sound. Perfect for folk and classical music."',
        'Jacob Davis: "Excellent quality and craftsmanship. Sounds fantastic."',
        'Avery Martinez: "A great instrument with a wide range of tones and easy playability."'
      ]
    },
    { 
      id: 16, 
      name: 'Oboe', 
      price: '499.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/16.jpg`,
      history: 'The oboe has been a part of Western music since the 17th century. Known for its distinct, reedy sound, it plays a vital role in orchestral and chamber music.',
      usage: 'Used in orchestras, chamber music, and some solo performances. The oboe’s unique tone makes it a prominent instrument in classical and modern music.',
      reviews: [
        'Aiden Brown: "The oboe has a rich, warm sound. Ideal for orchestral performances."',
        'Emily Wilson: "Excellent instrument with great tonal quality and responsiveness."',
        'Oliver Scott: "Well-crafted and sounds beautiful. Perfect for classical music."'
      ]
    },
    { 
      id: 17, 
      name: 'Tuba', 
      price: '999.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/17.jpg`,
      history: 'The tuba was developed in the mid-19th century and has become a staple in brass sections of orchestras and bands. It provides the bass foundation in brass ensembles.',
      usage: 'Used in orchestras, marching bands, and brass quintets. The tuba’s deep, resonant tone is crucial for providing the bass in many musical settings.',
      reviews: [
        'Emma Smith: "An outstanding tuba with a deep, rich sound. Perfect for brass ensembles."',
        'Liam Johnson: "Great build quality and tone. Ideal for both practice and performance."',
        'Sophia Adams: "Well-crafted and produces an excellent bass sound. Highly recommend."'
      ]
    },
    { 
      id: 18, 
      name: 'Tabla', 
      price: '149.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/18.jpg`,
      history: 'The tabla is a traditional Indian percussion instrument with origins in ancient times. It is central to Indian classical music and various regional music styles.',
      usage: 'Used in Indian classical music, Bollywood, and fusion genres. The tabla’s intricate rhythms and sounds are vital in Indian music traditions.',
      reviews: [
        'Arjun Patel: "The tabla has a rich, intricate sound. Perfect for Indian classical music."',
        'Ananya Sharma: "Excellent quality and craftsmanship. Sounds amazing."',
        'Raj Singh: "A beautiful instrument with a vibrant tone. Ideal for performances."'
      ]
    },
    { 
      id: 19, 
      name: 'Harmonica', 
      price: '79.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/19.jpg`,
      history: 'The harmonica, or mouth organ, was invented in the early 19th century in Europe. It gained popularity in the United States as a key instrument in blues and folk music.',
      usage: 'Used in blues, folk, and rock music. Its portable size and expressive sound make it a popular choice for many musicians.',
      reviews: [
        'Zoe Turner: "A fantastic harmonica with a clear, expressive sound. Great for blues!"',
        'Ethan Brown: "Well-made and easy to play. Perfect for various music genres."',
        'Lily Davis: "Excellent quality and portability. Ideal for both beginners and pros."'
      ]
    },
    { 
      id: 20, 
      name: 'Xylophone', 
      price: '249.99', 
      image: `${process.env.PUBLIC_URL}/assets/images/20.jpg`,
      history: 'The xylophone is an ancient percussion instrument with origins in Africa and Asia. It was developed further in the 19th century to become a standard instrument in orchestras.',
      usage: 'Used in orchestras, solo performances, and educational settings. Its bright, melodic tones make it a favorite in many musical styles.',
      reviews: [
        'Grace Robinson: "A beautifully crafted xylophone with a bright, clear tone. Perfect for performances."',
        'Lucas Carter: "Excellent quality and playability. Ideal for both practice and education."',
        'Sophia Wilson: "A fantastic instrument with a great sound. Highly recommended."'
      ]
    }
  ];
  
  export default products;
  