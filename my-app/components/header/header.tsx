import NavBar from "../navBar/NavBar";

export default function Header() {
  return (
    <header className="bg-blue-900 py-4 px-6 md:px-10 lg:px-16 border-b-4 border-red-600 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-white font-serif font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-wide">
          📰 FlashNews
        </h1>
        <NavBar />
      </div>
    </header>
  );
}
