function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">Simple</div>

        <nav className="header__nav">
          <a href="#" className="header__link">Продукция</a>
          <a href="#" className="header__link">Материалы</a>
          <a href="#" className="header__link">О нас</a>
          <a href="#" className="header__link">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;