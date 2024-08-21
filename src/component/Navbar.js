import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아,",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kaG-DSXD7VUwo0g47_RwGS2xQoHb7zuHjoypg21jJ1WYpFlCc4TaSTDpujyn2w72fW4&usqp=CAUH"
          alt="H&M"
          width={100}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-area">
          <div className="inner">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" required />
            <label>search</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
