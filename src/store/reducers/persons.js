import * as actionTypes from "../actions";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE:
      const updateArray = state.persons.filter(
        (person) => person.id !== action.personId
      );
      return {
        ...state,
        persons: updateArray,
      };
    case actionTypes.ADD:
      const newPerson = {
        id: new Date(),
        name: action.personData.name,
        age: action.personData.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
  }
  return state;
};

export default reducer;
