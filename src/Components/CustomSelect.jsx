import React,{useState} from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 300px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
  z-index: 100;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

const CustomSelect = () => {
    const [currentValue, setCurrentValue] = useState("장르 선택");
    const [showOptions, setShowOptions] = useState(false);
  
    const handleOnChangeSelectValue = (e) => {
        const { innerText } = e.target;
        setCurrentValue(innerText);
      };
    
  
    return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label>{currentValue}</Label>
            <SelectOptions show={showOptions}>
                <Option onClick={handleOnChangeSelectValue}>POP</Option>
                <Option onClick={handleOnChangeSelectValue}>ROCK</Option>
                <Option onClick={handleOnChangeSelectValue}>HIPHOP</Option>
                <Option onClick={handleOnChangeSelectValue}>COUNTRY</Option>
                <Option onClick={handleOnChangeSelectValue}>CLASSICAL</Option>
                <Option onClick={handleOnChangeSelectValue}>JAZZ</Option>
                <Option onClick={handleOnChangeSelectValue}>ELECTRONIC</Option>
                <Option onClick={handleOnChangeSelectValue}>R & B</Option>
                <Option onClick={handleOnChangeSelectValue}>BALLAD</Option>
            </SelectOptions>
      </SelectBox>
    );
  };

export default CustomSelect;