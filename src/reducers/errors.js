const initialState = {
  isActive: true,
  message: 'THIS IS A GENERAL ERROR'
}

const errornotifs = (state = initialState, {type, payload}) => {
  console.log(state)
  switch (type) {
    case 'SAME_ERROR':
    return {
      message: 'SMAE ERROR'
    }
    default:
    return {
      isActive: true,
      message: 'THIS IS A GENERAL ERRORTHIS IS A GENERAL ERRORTHIS IS A GENERAL ERRORTHIS IS A GENERAL ERRORTHIS IS A GENERAL ERRORTHIS IS A GENERAL ERROR'
    }
  }

}

export default errornotifs