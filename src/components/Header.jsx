function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Ciclos de la Naturaleza</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="#ciclos">
              Ciclos Naturales
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#primavera">
              Primavera
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#verano">
              Verano
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#otono">
              Otoño
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#invierno">
              Invierno
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
