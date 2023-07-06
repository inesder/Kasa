import styled, { css } from 'styled-components'
import { useState } from 'react';
import colors from '../../utils/style/colors';

const CollapseButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 18px;
  border-radius:10px;
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


const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div>
      <CollapseButton active={isOpen} onClick={handleToggle}>
        {title}
      </CollapseButton>
      <CollapseContent active={isOpen}>{children}</CollapseContent>
    </div>
  );
};

export default Collapse;