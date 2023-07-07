import about_banner from '../../assets/about_banner.png'
import { Banner } from '../../utils/style/Atoms'
import Collapsible from '../../components/Collapsible'
import styled from 'styled-components'

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 150px;
`

function AboutPage() {
  return (
    <div>
      <Banner src={about_banner} />
      <CollapseContainer>
        <Collapsible title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapsible>
        <Collapsible title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapsible>
        <Collapsible title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapsible>
        <Collapsible title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapsible>
      </CollapseContainer>
    </div>
  )
}

export default AboutPage
