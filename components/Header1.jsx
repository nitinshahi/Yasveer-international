import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo"><Image 
            src="/logo.svg" // Ensure your logo is in /public/logo.svg
            alt="Yashveer International"
            width={50}
            height={50}
          /></div>
        <nav>
          <a>Home</a>
          <a>About Us</a>
          <a>Our Products</a>
          <a>Private Label</a>
          <a>Blogs</a>
          <a>Contact</a>
        </nav>
        <button className="btn-dark">Get Quotes</button>
      </header>
    </>
  );
}
