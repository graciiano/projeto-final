import MenuLink from "../menuLink/MenuLink";

export default function NavBar() {
    return (
      <>
        <nav className="flex items-center justify-between px-4 gap-4">        
          <MenuLink texto="Sobre" href="/" />
        </nav>
      </>
    );
  }