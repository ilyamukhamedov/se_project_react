import { useState, useEffect, useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

// const ToggleSwitch = ({ isOn, handleToggle }) => {
//   return (
//     <>
//       <input
//         checked={isOn}
//         onChange={handleToggle}
//         className="switch__checkbox"
//         id={`switch`}
//         type="checkbox"
//       />
//       <label className="switch__label" htmlFor={`switch`}>
//         <span className="switch__button" />

//         <span
//           style={{ color: isOn && "#000" }}
//           className="switch__temp-type white"
//         >
//           F
//         </span>
//         <span
//           style={{ color: !isOn && "#000" }}
//           className="switch__temp-type grey"
//         >
//           C
//         </span>
//       </label>
//     </>
//   );
// };

// export default ToggleSwitch;

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");

  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  return (
    <>
      <input
        checked={isChecked}
        onChange={handleToggleSwitchChange}
        value={currentTemperatureUnit}
        className="switch__checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label className="switch__label" htmlFor={`switch`}>
        <span className="switch__button" />
        <div className="switch__temp">
          <p className={`switch__temp-type ${isChecked && "switch__active"}`}>
            F
          </p>
          <p className={`switch__temp-type ${!isChecked && "switch__active"}`}>
            C
          </p>
        </div>
      </label>
    </>
  );
};

// const ToggleSwitch = () => {
//   const [currentTemperatureUnit, handleToogleSwitchChange] = useState("C");

//   const handleChange = () => {
//     if (currentTemperatureUnit === "C") handleToogleSwitchChange("F");
//     if (currentTemperatureUnit === "F") handleToogleSwitchChange("C");
//   };

//   return (
//     <label className="switch">
//       <input type="checkbox" className="switch__box" onChange={handleChange} />
//       <span
//         className={
//           currentTemperatureUnit === "C"
//             ? "switch__slider switch__slider-F"
//             : "switch__slider switch__slider-C"
//         }
//       ></span>
//       <p
//         className={`switch__temp-F ${
//           currentTemperatureUnit === "F" && "switch__active"
//         }`}
//       >
//         F
//       </p>
//       <p
//         className={`switch__temp-C ${
//           currentTemperatureUnit === "C" && "switch__active"
//         }`}
//       >
//         C
//       </p>
//     </label>
//   );
// };

export default ToggleSwitch;
