import React from "react";
import { Input, Button, Finder } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "redux/FilterSlice";

export const Filter = () => {
     const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  const clearFilter = () => {
    dispatch(changeFilter(''));
  };

    
    return (<form action="">
        <Finder>Find contacts by name</Finder>
        <Input type="text"
        value={filter}
        onChange={handleFilterChange}
        />
        <Button onClick={clearFilter} >Clear</Button>
   </form> )
    
}