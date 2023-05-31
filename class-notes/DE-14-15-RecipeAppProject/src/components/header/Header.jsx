import React, { useState } from 'react';
import {HeaderContainer, MainHeader} from "./HeaderStyles";
import { FoodInput } from './HeaderStyles';
import { Button } from './HeaderStyles';
import { FormContainer } from './HeaderStyles';
import { Select } from './HeaderStyles';
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const [foodinput, SetFoodInput]= useState("");
  const [meal, SetMeal] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <HeaderContainer>
        <MainHeader> Food App</MainHeader>
        <FormContainer>
          <FoodInput
            placeholder="Type"
            onChange={(e) => SetFoodInput(e.target.value)}
          ></FoodInput>
          <Button onClick={() => navigate(`/home`)}>
            Search
          </Button>
          <Select onChange={(e) => SetMeal(e.target.value)}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="teatime">Teatime</option>
          </Select>
        </FormContainer>
      </HeaderContainer>
    </div>
  );
}

export default Header