import MenuLink from "../menuLink/MenuLink";

export default function NavBar() {
    return (
      <>
        <nav className="flex items-center justify-between px-4 gap-4">    
          <MenuLink texto="Home" href="/" />    
          <MenuLink texto="Sobre" href="/sobre" />
          <MenuLink texto="Contato" href="/contato" />
        </nav>
      </>
    );
  }