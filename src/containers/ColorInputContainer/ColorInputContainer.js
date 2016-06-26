import { connect } from 'react-redux'
import ColorInput from '../../components/ColorInput'

const mapStateToProps = ({ groups, entities }) => {
  const groupEntities = entities.toJS().groups
  return {
    groups: groups.map((groupId) => {
      return groupEntities[groupId]
    }),
  }
}

const ColorInputContainer = connect(
  mapStateToProps
)(ColorInput)

export default ColorInputContainer

