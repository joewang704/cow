import { connect } from 'react-redux'
import ColorInput from '../../components/ColorInput'

const mapStateToProps = ({ sidebar, groups, entities  }) => {
  const groupEntities = entities.toJS().groups
  return {
    groups: groups.map((groupId) => {
      return groupEntities[groupId]
    }),
    defaultGroup: sidebar.toJS().currentGroup,
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


