interface Props {
  title: string;
}

function Header ({ title }: Props) {
  return (
    <header className="header">
      <div className="inner-cont">
        <div className="logo-area">
          <div className="logo-wrapper">
            <span className="logo-image"></span>
          </div>
          <h1 className="title">{ title }12</h1>
        </div>
        <nav className="menu-area">
          <ul className="menu">
            <li className="item">Posts</li>
            <li className="item">Portfolio</li>
            <li className="item">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
