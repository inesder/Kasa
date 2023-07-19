import styled from 'styled-components'
import { useState } from 'react'
import colors from '../../utils/style/colors'
import BottomArrow from '../../assets/bottom.png'
import UpArrow from '../../assets/top.png'

const CollapseButton = styled.button.attrs((props) => ({
  $active: props.active ? props.active.toString() : undefined,
}))`
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
  border-radius: 10px;
  display: flex;
  font-weight: 500;
`;

const CollapseContent = styled.div`
  
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #f9f9f9;
  padding: 18px;
  border-radius: 0 0 10px 10px;
  color: ${colors.primary};
  font-size: 18px;
  line-height: 1.3;
  &.active {
    max-height: 1000px;
  }
`;

const ArrowImage = styled.img``

const Collapse = ({ title, children }) => {
  // Utilisation du hook useState pour gérer l'état ouvert/fermé
  const [isOpen, setIsOpen] = useState(false)

  // Définition de la fonction pour basculer entre ouvert et fermé
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* Bouton pour déclencher l'ouverture/fermeture */}

      <CollapseButton $active={isOpen}  onClick={handleToggle}>
        <span>{title}</span>
        {/* Image de la flèche, change selon l'état ouvert/fermé */}
        <ArrowImage
          src={isOpen ? UpArrow : BottomArrow}
          alt="Toggle collapse"
        />
      </CollapseButton>
      {/* Le contenu du collapse, affiché seulement si isOpen est vrai */}
      {isOpen && <CollapseContent className={isOpen ? 'active' : ''}>{children}</CollapseContent>
}
    </div>
  )
}

export default Collapse
