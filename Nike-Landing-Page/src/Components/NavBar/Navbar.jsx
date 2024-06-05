import "./Navbar.css";
export default function Navbar() {
  const openMenu= ()=> {
//     const menu = document.getElementById('menu');
// const menuList = document.getElementById('menu-list');
// const loginForm= document.querySelector('.login-form');
// menu.addEventListener('click', () => {
//   menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
//   loginForm.style.marginTop = menuList.style.display === 'flex' ? '400px' : '20%';

//   }
  return (
    <div className="nav1">
      <div className="logo"><img src="./../../../public/images/brand_logo.png" alt="logo" /></div>
      <div className="navigations">
        <div><a href="#">MENU</a></div>
        <div><a href="#">LOCATION</a></div>
        <div><a href="#">ABOUT</a></div>
        <div><a href="#">CONTACT</a></div>
      </div>
      <div className="button">LOGIN</div>
      <button id="menu" onClick><i className="fa-solid fa-bars fa-lg"></i></button>
      <span id="menu-list">
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li><div className="menu-button">LOGIN</div></li>
        </ul>
      </span>
    </div>
  )
}