import { Coffee, Wifi, Users, Heart, Star  } from "lucide-react";

export default function App() {
  const menu = [
    "Espresso","Cappuccino","Latte","Cold Brew","Fresh Croissants","Signature Desserts"
  ];

  return (
    <div className="bg-[#F8F5F0] text-[#1E3A5F] min-h-screen">

{/* Navbar */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F0]/90 backdrop-blur-md border-b border-[#1E3A5F]/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    
    <div className="flex items-center gap-2">
      <Coffee className="w-7 h-7 text-[#1E3A5F]" />
      <span className="text-2xl font-bold text-[#1E3A5F]">
        Artisan Cafe
      </span>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8">
      <a
        href="#about"
        className="text-[#1E3A5F] hover:text-amber-700 transition"
      >
        About
      </a>

      <a
        href="#menu"
        className="text-[#1E3A5F] hover:text-amber-700 transition"
      >
        Menu
      </a>

      <a
        href="#gallery"
        className="text-[#1E3A5F] hover:text-amber-700 transition"
      >
        Gallery
      </a>

      <a
        href="#reviews"
        className="text-[#1E3A5F] hover:text-amber-700 transition"
      >
        Reviews
      </a>

      <a
        href="#contact"
        className="text-[#1E3A5F] hover:text-amber-700 transition"
      >
        Contact
      </a>
    </div>

    {/* CTA */}
    <button className="hidden md:block bg-[#1E3A5F] text-white px-5 py-2.5 rounded-full hover:scale-105 transition">
      Reserve Table
    </button>

  </div>
</nav>


      {/* Hero */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600')",
        }}
      >
        <div className="max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Crafted Coffee, Made Fresh Every Day
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Experience artisan coffee, fresh pastries, and a warm atmosphere.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-[#1E3A5F] px-6 py-3 rounded-full font-semibold">View Menu</button>
            <button className="border border-white px-6 py-3 rounded-full">Reserve a Table</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img className="rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200" />
        <div>
          <p className="uppercase tracking-widest mb-2">Our Story</p>
          <h2 className="text-4xl font-bold mb-4">Where Great Coffee Meets Great Company</h2>
          <p className="text-slate-600 leading-8">
            We blend artisan roasting, local ingredients, and a cozy atmosphere to create an unforgettable coffee experience.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Favorites</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {menu.map((item) => (
            <div key={item} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200" />
              <div className="p-6">
                <h3 className="font-bold text-xl">{item}</h3>
                <p className="text-slate-600 mt-2">Premium handcrafted selection.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl text-center font-bold mb-12">Why Guests Love Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              [Coffee, "Freshly Roasted Beans"],
              [Wifi, "Free Wi-Fi"],
              [Users, "Cozy Workspace"],
              [Heart, "Friendly Service"],
            ].map(([Icon, title]) => (
              <div key={title} className="p-8 rounded-3xl shadow bg-[#F8F5F0] text-center">
                <Icon className="mx-auto mb-4" />
                <h3 className="font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
     <section className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center mb-16">
    <span className="text-[#1E3A5F] font-semibold uppercase tracking-widest">
      What Our Guests Say
    </span>
    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
      Loved by Coffee Enthusiasts
    </h2>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Thousands of customers enjoy our handcrafted coffee, fresh pastries,
      and cozy atmosphere every day.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Sarah Mitchell",
        role: "Food Blogger",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
        quote:
          "Every cup feels carefully crafted. The espresso is rich, smooth, and consistently exceptional.",
      },
      {
        name: "Daniel Carter",
        role: "Remote Designer",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
        quote:
          "My favorite place to work and unwind. Great coffee, warm ambiance, and friendly staff.",
      },
      {
        name: "Emma Wilson",
        role: "Local Customer",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
        quote:
          "The pastries are incredible and the coffee is always fresh. A true hidden gem in the city.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
      >
        <div className="flex items-center gap-4 mb-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-lg">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        </div>

        <div className="flex gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed italic">
          "{item.quote}"
        </p>
      </div>
    ))}
  </div>

  <div className="mt-16 text-center">
    <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md">
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <span className="font-semibold text-gray-800">
        4.9/5 Average Rating from 2,500+ Happy Customers
      </span>
    </div>
  </div>
</section>

      {/* Gallery */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-4xl text-center font-bold mb-12">Moments at Our Cafe</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i=>(
            <img key={i} className="rounded-2xl hover:scale-105 transition" src={`https://picsum.photos/600/40${i}`} />
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-4xl font-bold text-center mb-8">Reserve Your Table</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded-xl" placeholder="Name"/>
            <input className="border p-3 rounded-xl" placeholder="Phone"/>
            <input type="date" className="border p-3 rounded-xl"/>
            <input type="time" className="border p-3 rounded-xl"/>
            <input className="border p-3 rounded-xl md:col-span-2" placeholder="Guests"/>
          </div>
          <button className="w-full mt-6 bg-[#1E3A5F] text-white py-3 rounded-xl">
            Book Reservation
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Us</h2>
          <p>125 Artisan Avenue, Los Angeles, CA</p>
          <p className="mt-2">Mon–Fri: 7 AM – 8 PM | Sat–Sun: 8 AM – 10 PM</p>
          <div className="flex justify-center gap-4 mt-6">
            {/* <Instagram />
            <Facebook />
            <Twitter /> */}
          </div>
        </div>
      </section>

      <footer className="bg-[#1E3A5F] text-white text-center py-8">
        <h3 className="font-bold text-xl">Artisan Cafe</h3>
        <p className="mt-2">© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}
