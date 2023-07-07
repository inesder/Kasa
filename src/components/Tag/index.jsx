import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledTag = styled.p`
  background-color: ${colors.primary};
  color: white;
  border-radius: 15px;
  font-size: 16px;
  padding: 5px 25px;
`

function Tag({ tag }) {
  return <StyledTag>{tag}</StyledTag>
}

export default Tag
