import axios from "axios";
import { useState, useEffect } from "react";
import { setMeals } from "../../redux/reducers/meals/index";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../redux/reducers/page/pageReducer";
import { Link } from "react-router-dom";

const AllMenue = (req, res) => {
  const [meal, setMeal] = useState([]);
  const [message, setMessage] = useState(``);
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => {
    return {
      meals: state.meals.meals,
    };
  });

  const {page}=useSelector((state)=>{
    return {
      page:state.page.page
    }
  })

  console.log(page);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/meals/paginated?p=${page}`)
      .then((result) => {
        console.group(result);
        dispatch(setMeals(result.data.products));
      })
      .catch((err) => {
        setMessage(err.sqlMessage);
      });
   
  }, [page]);

  return (
    <div key={"cc"}>
      {meals.length &&
        meals.map((meal, index) => {
          return (
            <>
              <p key={meal.meal_name}>{meal.meal_name}</p>
              <p key={meal.meal_price}>{meal.meal_price}</p>
              <Link to={`/meals/${meal.id}`}>
                <img src={meal.image} alt="" key={meal.id} />
              </Link>
              <button>Add to Cart</button>
              {message}
            </>
          );
        })}
      
    </div>
  );
};

export default AllMenue;
