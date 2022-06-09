import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMeals } from "../../redux/reducers/meals";

const Filter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => {
    return {
      meals: state.meals.meals,
    };
  });
  const [filtered, setFiltered] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filteredMeals,setFilteredMeals]=useState([])
  const [isClicked,setIsCLicked]=useState(false)
  useEffect(() => {
    axios.get("http://localhost:5000/meals").then((result) => {
        setFilteredMeals(result.data.result)
    });
  }, [isClicked]);
  return (
    <div>
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
          setFiltered(
            filteredMeals.filter((element) => {
              if (e.target.value != "")
                return element.meal_name.includes(e.target.value);
            })
          );
        }}
      />
    
      {filtered.length
        ? filtered.map((element) => {
            return (
              <p
                onClick={() => {
                    setInputVal("")
                  navigate(`/meals/${element.id}`);
                  
                  setFiltered("")
                  
                  
                }}
              >
                {element.meal_name}
              </p>
            );
          })
        : ""}
    </div>
  );
};
export default Filter;