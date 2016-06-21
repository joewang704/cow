import { connect } from 'react-redux'
import ColorInput from '../../components/ColorInput'

const mapStateToProps = ({ sidebar, groups, entities }) => {
  const groupEntities = entities.toJS().groups
  const currentGroup = sidebar.toJS().currentGroup
  return {
    groups: groups.map((groupId) => {
      return groupEntities[groupId]
    }),
    defaultGroup: currentGroup !== null ? groupEntities[currentGroup] : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createGroup: (id) => {
      dispatch(createGroup(id))
    }
  }
}

const ColorInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorInput)

export default ColorInputContainer


