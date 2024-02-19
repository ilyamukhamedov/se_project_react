import { useState, useEffect, useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

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

export default ToggleSwitch;
