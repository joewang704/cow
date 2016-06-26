import { connect } from 'react-redux'
import Groups from '../../components/Groups'
import { enterGroup } from '../../actions/sidebar.js'

const mapStateToProps = ({ groups, entities }) => {
  if (groups) {
    return {
      groups: groups.map((listId) => {
        return entities.toJS().groups[listId]
      }),
    }
  }
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    enterGroup: (id) => {
      dispatch(enterGroup(id))
    },
  }
}

const GroupsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups)

export default GroupsContainer

