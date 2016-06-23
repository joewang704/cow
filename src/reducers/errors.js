const initialState = {
        isActive: true,
        message: 'THIS IS A GENERAL ERROR'
    }

const errornotifs = (state = initialState, {type, payload}) => {
    console.log(state)
    return {
        isActive: true,
        message: 'THIS IS A GENERAL ERROR'
    }
}

export default errornotifs