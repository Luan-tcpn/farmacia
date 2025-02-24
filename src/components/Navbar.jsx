export default function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Farmácia</a>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/about" className="hover:text-blue-200">Sobre</a></li>
            <li><a href="/contact" className="hover:text-blue-200">Contato</a></li>
          </ul>
        </div>
      </nav>
    );
  }