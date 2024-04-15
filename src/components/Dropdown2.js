import React, { useState, useEffect, useRef } from "react";
import "./DropdownStylse2.css";
import major_icon from "../assets/major-icon.png";

function Dropdown2({ drBtn_title, items, onSelect, onReset }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [arrowDirection, setArrowDirection] = useState("∨");
  const [isButtonSelected, setIsButtonSelected] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setArrowDirection(isOpen ? "∨" : "∧");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
    setArrowDirection("∨");
    setIsButtonSelected(true); // 선택된 항목이 있음을 표시
  };

  const handleReset = () => {
    onReset();
    setSelectedItem(null);
    setIsOpen(false);
    setArrowDirection("∨");
    setIsButtonSelected(false); // 선택된 항목이 없음을 표시
  };

  return (
    <div className={`dropdown${isOpen ? " open" : ""}`} ref={dropdownRef}>
      {/* 드롭다운 버튼 */}
      <img src={major_icon} alt="" className="icon" />

      <button
        className={`dropdown-toggle${isOpen ? " active" : ""}${
          isButtonSelected ? " selected" : ""
        }`}
        onClick={toggleDropdown}
      >
        {drBtn_title} {arrowDirection}
      </button>

      {/* 선택된 항목을 보여줄 텍스트 창 */}
      {isButtonSelected && (
        <div className="selected-item-text">{selectedItem}</div>
      )}

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
          <div className="dropdown-item reset" onClick={handleReset}>
            초기화
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown2;
