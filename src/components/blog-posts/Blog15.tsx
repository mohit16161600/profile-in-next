import Link from "next/link";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "React eCommerce website kaise banaye beginners ke liye?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beginners ke liye best approach hai React se frontend banana, Node.js and Express se backend banana, aur MongoDB me products store karna. Start product listing aur cart se karo, phir checkout aur auth add karo.",
      },
    },
    {
      "@type": "Question",
      name: "Kya React eCommerce project me backend zaroori hota hai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Demo project ke liye backend optional ho sakta hai, lekin real eCommerce website ke liye backend zaroori hota hai taaki products, users, carts, and orders ko properly manage kiya ja sake.",
      },
    },
    {
      "@type": "Question",
      name: "Cart data localStorage me store kar sakte hain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan, beginner project me localStorage kaafi useful hota hai. Isse page refresh hone par bhi cart items bache rehte hain.",
      },
    },
    {
      "@type": "Question",
      name: "Stripe payment integration kab karni chahiye?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stripe ya kisi bhi payment gateway ko tab add karo jab product listing, cart, and checkout summary ka base flow stable ho jaye.",
      },
    },
  ],
};

export default function Blog15() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="introduction" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          React se eCommerce website kaise banaye (step by step)
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Aaj kal sab online store bana rahe hain. Koi fashion products bech raha hai, koi electronics, koi handmade gifts. Lekin jab aap khud start karte ho, sabse pehla sawal hota hai: <strong>React eCommerce website kaise banaye</strong> without getting confused by too many files, tools, and tutorials.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Is guide me hum practical tareeke se ek basic eCommerce website banayenge jisme product listing, cart system, backend API, MongoDB connection, aur frontend-backend integration hoga. Language simple Hinglish rahegi aur focus implementation par hoga, theory overload par nahi.
        </p>
      </section>

      <section id="what-you-will-build" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What You Will Build</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Final project ek simple eCommerce website hogi jisme user products dekh sakega, cart me items add kar sakega, aur backend se live product data fetch hoga.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4">
          <li>Homepage par product listing page</li>
          <li>Reusable product card component</li>
          <li>Add to cart button and basic cart counter</li>
          <li>Remove from cart option</li>
          <li>Products API from Node.js backend</li>
          <li>MongoDB database for storing products</li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Ye foundation same project me later checkout, login, and payment add karne ke kaam aayegi.
        </p>
      </section>

      <section id="tech-stack" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Tech Stack Explanation</h2>

        <h3 className="text-2xl font-semibold text-white mb-3">React</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          React frontend ke liye use hoga. Ek baar `ProductCard` component ban gaya to aap usko 10 products ke liye bhi use kar sakte ho aur 100 ke liye bhi.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">Node.js + Express</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Backend me Express routes banayega jahan se products fetch honge. Later yehi backend login, orders, payment callbacks, and admin APIs bhi handle karega.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">MongoDB</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          MongoDB me products store honge. Name, price, image, stock, category jaise fields ko document format me rakhna beginner ke liye easy hota hai.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">Stripe (Optional)</h3>
        <p className="text-gray-300 leading-relaxed">
          Payment ke liye Stripe ya Razorpay baad me add kiya ja sakta hai. Pehle foundation build karo. Payment tabhi smooth lagegi jab listing aur cart pehle se sahi kaam kar rahe hon.
        </p>
      </section>

      <section id="project-setup" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Project Setup (Step by Step)</h2>

        <h3 className="text-2xl font-semibold text-white mb-3">1. Frontend Setup</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-bash">{`npx create-react-app client
cd client
npm install axios react-router-dom`}</code></pre>
        <p className="text-gray-300 mb-4 leading-relaxed">
          `axios` API calls ke liye aur `react-router-dom` future pages jaise cart, product details, login ke liye helpful rahega.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">2. Backend Setup</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-bash">{`mkdir server
cd server
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon`}</code></pre>

        <h3 className="text-2xl font-semibold text-white mb-3">3. Basic Folder Structure</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-4"><code className="language-text">{`project/
  client/
    src/
      components/
        ProductCard.jsx
        Navbar.jsx
      pages/
        Home.jsx
        Cart.jsx
      App.jsx
      index.js
  server/
    models/
      Product.js
    routes/
      productRoutes.js
    server.js
    .env`}</code></pre>
        <p className="text-gray-300 leading-relaxed">
          Ye structure beginner-friendly hai aur future scaling ke liye bhi clean base deta hai.
        </p>
      </section>

      <section id="frontend-development" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Frontend Development</h2>

        <h3 className="text-2xl font-semibold text-white mb-3">Product Listing Page</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Shuruat me static data se kaam karo. Jab UI ready ho jaye tab API connect karna easy hota hai.
        </p>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-jsx">{`import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "/images/tshirt.jpg" },
  { id: 2, name: "Shoes", price: 1499, image: "/images/shoes.jpg" },
  { id: 3, name: "Watch", price: 1999, image: "/images/watch.jpg" },
];

function Home() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;`}</code></pre>

        <h3 className="text-2xl font-semibold text-white mb-3">Product Card Component</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-jsx">{`function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;`}</code></pre>

        <h3 className="text-2xl font-semibold text-white mb-3">Basic UI CSS</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-4"><code className="language-css">{`.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background: #ffffff;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.card button {
  margin-top: 10px;
  background: #111827;
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
}`}</code></pre>
        <p className="text-gray-300 leading-relaxed">
          Beginner phase me simple and working UI best hoti hai. Fancy design baad me bhi add ki ja sakti hai.
        </p>
      </section>

      <section id="backend-development" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Backend Development (Node.js)</h2>

        <h3 className="text-2xl font-semibold text-white mb-3">Create Server</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-js">{`const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json()); // request body ko parse karega

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});`}</code></pre>

        <h3 className="text-2xl font-semibold text-white mb-3">Create Product Model</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-js">{`const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", productSchema);`}</code></pre>

        <h3 className="text-2xl font-semibold text-white mb-3">Basic Products Route</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-4"><code className="language-js">{`const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Sabhi products bhejne ke liye
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;`}</code></pre>
        <p className="text-gray-300 leading-relaxed">
          Is route ko `server.js` me import karke use karo:
          <code className="ml-2">app.use("/api/products", productRoutes);</code>
        </p>
      </section>

      <section id="connecting-frontend-backend" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Connecting Frontend + Backend</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Ab hum static data hata kar backend se products fetch karenge. Ye step bohot important hai kyunki isi ke baad aapka frontend real database-driven app ban jata hai.
        </p>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-jsx">{`import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;`}</code></pre>
        <p className="text-gray-300 leading-relaxed">
          Yaha full stack flow clear ho jata hai: frontend data ko dikhata hai, backend data ko serve karta hai, aur database data ko store karta hai.
        </p>
      </section>

      <section id="cart-system" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Cart System</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Cart functionality core feature hai. Agar refresh ke baad cart empty ho jaye, to site incomplete lagti hai. Isliye state ke saath `localStorage` bhi use karenge.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">Add to Cart</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-6"><code className="language-jsx">{`import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return <Home addToCart={addToCart} />;
}`}</code></pre>

        <h3 className="text-2xl font-semibold text-white mb-3">Remove from Cart</h3>
        <pre className="bg-slate-950/80 text-slate-100 p-4 rounded-xl overflow-x-auto mb-4"><code className="language-jsx">{`const removeFromCart = (id) => {
  const updatedCart = cart.filter((item) => item._id !== id);
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};`}</code></pre>
        <p className="text-gray-300 leading-relaxed">
          Beginner level ke liye ye enough hai. Agar aap quantity, subtotal, coupon, ya per-user cart chahte ho, to later Context API ya Redux add kar sakte ho.
        </p>
      </section>

      <section id="bonus" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Bonus (Optional)</h2>

        <h3 className="text-2xl font-semibold text-white mb-3">Authentication Basic Idea</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Login and signup add karne ke liye aap JWT-based authentication use kar sakte ho. Isse user account, order history, aur saved address manage kar payega.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">Payment Integration Overview</h3>
        <p className="text-gray-300 leading-relaxed">
          Payment gateway integrate karte waqt general flow hota hai: cart items lo, backend me total calculate karo, payment session create karo, success callback ke baad order save karo. India audience ke liye Stripe ke saath Razorpay bhi kaafi popular choice hai.
        </p>
      </section>

      <section id="common-errors" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Common Errors + Fix</h2>

        <h3 className="text-2xl font-semibold text-white mb-3">CORS Error Fix</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Agar browser me error aaye ki frontend backend se baat nahi kar paa raha, to backend me `cors()` middleware enable karo. React app usually `localhost:3000` par hoti hai aur server `localhost:5000` par, isliye ye issue common hai.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">Module Not Found Fix</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Ye error tab aata hai jab package install nahi hota ya import path galat hota hai. Quick checklist:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4">
          <li>`npm install` dobara run karo</li>
          <li>Import spelling aur file extension check karo</li>
          <li>Folder structure match karwao</li>
          <li>Server ya React app restart karo</li>
        </ul>

        <h3 className="text-2xl font-semibold text-white mb-3">MongoDB Connection Error</h3>
        <p className="text-gray-300 leading-relaxed">
          `.env` file me `MONGO_URI` sahi hai ya nahi check karo. Atlas use kar rahe ho to network access aur username-password bhi verify karo.
        </p>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Ab aapke paas ek clear roadmap hai ki <strong>React eCommerce website kaise banaye</strong> step by step. Humne frontend setup, reusable components, backend server, MongoDB model, API routes, aur cart storage tak ka full flow cover kiya.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Sabse important lesson ye hai ki project ko small milestones me build karo: pehle listing, phir API, phir cart, phir auth, phir payment.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Next step ke liye aap single product page, search bar, category filter, order summary, and checkout page add kar sakte ho. Agar React roadmap aur full stack direction aur strong karni hai, to{" "}
          <Link href="/blog/is-react-worth-learning-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">
            React learning article
          </Link>{" "}
          aur{" "}
          <Link href="/blog/frontend-vs-backend-development-guide" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">
            frontend vs backend guide
          </Link>{" "}
          bhi padho. Chhota start karo, but complete build karo. Wahi real progress hoti hai.
        </p>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">FAQs</h2>

        <h3 className="text-2xl font-semibold text-white mb-3">
          Kya React se full eCommerce website ban sakti hai?
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Haan. React frontend ke liye strong hai, aur Node.js, Express, MongoDB ke saath milkar full eCommerce app easily ban sakta hai.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">
          Kya React eCommerce project me Redux zaroori hai?
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Nahi. Small projects me `useState` ya Context API enough hota hai. Redux tab use karo jab app ka state bohot complex ho jaye.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">
          Kya backend ke bina shopping website bana sakte hain?
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Demo ya portfolio project ke liye haan, but real eCommerce website ke liye backend almost mandatory hai.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">
          Cart data kaha store karna chahiye?
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Beginner project ke liye React state plus localStorage best hai. Logged-in users ke liye backend sync aur bhi better hota hai.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-3">
          Is project ko deploy kaha kar sakte hain?
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Frontend ko Vercel ya Netlify par, backend ko Render, Railway, ya VPS par, aur database ko MongoDB Atlas par deploy kar sakte ho.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Related reading</h2>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li><Link href="/blog/shopify-vs-woocommerce" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Shopify vs WooCommerce</Link> — the real monthly cost for Indian sellers.</li>
          <li><Link href="/blog/shopify-review-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Shopify review for India</Link> — including the 2% transaction fee.</li>
          <li><Link href="/blog/hostinger-cloud-hosting-india-2026" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">Cloud hosting for stores</Link> — when shared hosting stops coping.</li>
        </ul>
      </section>
    </>
  );
}
