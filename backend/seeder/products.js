const products = [
  {
    name: "Apple 2023 MacBook Pro Laptop",
    description:
      "The Apple 2023 MacBook Pro is a sleek and lightweight laptop designed for professionals who demand the best in performance and features, featuring the latest M5 chip, a 16-inch Retina display with True Tone technology, and a dynamic Touch Bar that adapts to your needs.",
    count: 5,
    price: 1200,
    category: "Laptops",
    images: [
      { path: "/images/Apple1.jpg" },
      { path: "/images/Apple2.jpg" },
      { path: "/images/Apple3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "ASUS VivoBook Thin and Light Laptop",
    description:
      "The ASUS VivoBook 15 X515 is a slim and lightweight laptop that offers powerful performance and a vibrant 15.6-inch Full HD display, perfect for work and entertainment on the go.",
    count: 6,
    price: 349,
    category: "Laptops",
    images: [
      { path: "/images/Asus1.jpg" },
      { path: "/images/AsusLaptopCool.jpg" },
      { path: "/images/Asus2.jpg" },
    ],
    rating: 4,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Acer FHD Intel Celeron N4500 Laptop",
    description:
      "The Acer 15.6 FHD laptop features an Intel Celeron N4500 processor and a vibrant Full HD display, making it an affordable and practical option for everyday computing tasks.",
    count: 5,
    price: 200,
    category: "Laptops",
    images: [
      { path: "/images/Acer1.jpg" },
      { path: "/images/Acer2.jpg" },
      { path: "/images/Acer3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Samsung 55 Inch Q60B QLED 4K UHD HDR Dual LED Gaming Smart TV ",
    description:
      "The Samsung Q60B is a 55-inch QLED TV with 4K Ultra HD resolution, HDR support, and a dual LED backlight system. It is designed for gaming and features smart TV functionality for streaming and accessing apps.",
    count: 10,
    price: 600,
    category: "TVs & Home Theatre",
    images: [
      { path: "/images/TV.jpg" },
      { path: "/images/TV1.jpg" },
      { path: "/images/TV2.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Eokeiy Native 1080P Projector with 5G WiFi and Bluetooth 5.1, Mini Projector ",
    description:
      "The Eokeiy Native 1080P Projector is a compact device with built-in 5G WiFi and Bluetooth 5.1 connectivity, making it easy to stream content from your smartphone or tablet. It delivers high-quality images in Full HD 1080P resolution and is ideal for home theatre and entertainment.",
    count: 5,
    price: 169,
    category: "TVs & Home Theatre",
    images: [
      { path: "/images/projector1.jpg" },
      { path: "/images/projector2.jpg" },
      { path: "/images/projector3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Nreal Air AR Glasses, Smart Glasses with Massive 201'' Micro-OLED Virtual Theater, Augmented Reality Watch, Stream",
    description:
      "AR Glasses, or Augmented Reality Glasses, are wearable devices that overlay digital information onto the real world, allowing users to interact with virtual objects and information in their environment. They are typically used for gaming, education, and professional applications such as manufacturing and design.",
    count: 5,
    price: 562,
    category: "TVs & Home Theatre",
    images: [
      { path: "/images/VR1.jpg" },
      { path: "/images/VR2.jpg" },
      { path: "/images/VR3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, Active Noise Cancelling,",
    description:
      "The Beats Studio3 Wireless headphones feature Apple's W1 headphone chip and Class 1 Bluetooth for a reliable wireless connection and easy pairing with Apple devices. They also come equipped with active noise cancelling technology for an immersive listening experience, and offer up to 22 hours of battery life.",
    count: 10,
    price: 399,
    category: "Headphones",
    images: [
      { path: "/images/Headphones1.jpg" },
      { path: "/images/Headphones2.jpg" },
      { path: "/images/Headphones3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Apple AirPods (3rd Generation) with Lightning Charging Case",
    description:
      "The Apple AirPods (3rd Generation) with Lightning Charging Case are a wireless earbud solution with a compact charging case that charges via a Lightning connector. They offer high-quality audio and seamless integration with Apple devices.",
    count: 3,
    price: 229,
    category: "Headphones",
    images: [
      { path: "/images/Airpods1.jpg" },
      { path: "/images/Airpods2.jpg" },
      { path: "/images/Airpods3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 4,
    reviews: [],
  },
  {
    name: "Bluetooth Headphones, Running Wireless Earbuds with 15 Hours Playtime",
    description:
      "These Bluetooth headphones are designed for running and come in the form of wireless earbuds. They offer up to 15 hours of playtime on a single charge, allowing for extended listening sessions without needing to recharge.",
    count: 20,
    price: 400,
    category: "Headphones",
    images: [
      { path: "/images/Headphone1.jpg" },
      { path: "/images/Headphone2.jpg" },
      { path: "/images/Headphone3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 4,
    reviews: [],
  },
  {
    name: "Canon EOS Rebel T7 18-55mm DC III Kit with Full HD Video Wi-Fi and NFC Kit",
    description:
      "The Canon EOS Rebel T7 18-55mm DC III Kit is a camera bundle that includes a lens and features full HD video capabilities, as well as Wi-Fi and NFC connectivity. It is an excellent entry-level DSLR camera with easy-to-use controls and high-quality image output.",
    count: 25,
    price: 100,
    category: "Cameras",
    images: [
      { path: "/images/Camera1.jpg" },
      { path: "/images/Camera2.jpg" },
      { path: "/images/Camera3.jpg" },
    ],
    rating: 3,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "2K Indoor Security Camera WiFi Support Motion Detection&Tracking, ",
    description:
      "This 2K indoor security camera offers WiFi support, motion detection, and tracking capabilities. It captures high-resolution video footage and can be accessed remotely through a smartphone app, providing peace of mind and security for your home or office.",
    count: 5,
    price: 30,
    category: "Cameras",
    images: [
      { path: "/images/indoorcamera1.jpg" },
      { path: "/images/indoorcamera2.jpg" },
      { path: "/images/indoorcamera3.jpg" },
    ],
    rating: 4,
    reviewsNumber: 2,
    reviews: [],
  },
  {
    name: "Amazon Basics Lightweight Camera Mount Tripod Stand With Bag - 16.5 - 50 Inches",
    description:
      "The Amazon Basics Lightweight Camera Mount Tripod Stand is a portable and adjustable tripod stand for cameras. It can be adjusted to a height of 16.5 to 50 inches and comes with a handy carrying bag for easy transportation.",
    count: 5,
    price: 22,
    category: "Cameras",
    images: [
      { path: "/images/polecamera1.jpg" },
      { path: "/images/polecamera2.jpg" },
      { path: "/images/polecamera3.jpg" },
    ],
    rating: 5,
    reviewsNumber: 3,
    reviews: [],
  },
];

module.exports = products;
