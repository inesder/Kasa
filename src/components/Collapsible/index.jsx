import styled, { css } from 'styled-components'
import { useState } from 'react';
import colors from '../../utils/style/colors';
import BottomArrow from '../../assets/bottom.png'
import UpArrow from '../../assets/top.png'

const CollapseButton = styled.button`
  background-color: ${colors.primary};
  justify-content: space-between;
  align-items: center;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 18px;
  border-radius:10px;
  display:flex;
  font-weight: 500;
`;

const CollapseContent = styled.div`
display: none;
background-color: #f9f9f9;
padding: 18px;
border-radius: 0 0 10px 10px;
color: ${colors.primary};
font-size: 18px;
line-height: 1.3;


${({ active }) =>
  active &&
  css`
    display: block;
  `}
`;

const ArrowImage = styled.img`
  
`;


const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div>
      <CollapseButton active={isOpen} onClick={handleToggle}>
        <span>{title}</span>
        <ArrowImage src={isOpen ? UpArrow : BottomArrow} alt="Toggle collapse"/>
      </CollapseButton>
      <CollapseContent active={isOpen}>{children}</CollapseContent>
    </div>

  );
};

export default Collapse;