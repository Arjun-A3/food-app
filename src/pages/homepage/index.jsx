import { useState } from "react";
import Search from "../../components/search";



const Homepage = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [recipes, setRecipes] = useState([])
    const C2Pbridge = (data) => {
        //loading state
        setLoadingState(true);

        async function getRecipies() {
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f8d2adf9338241c0b81ebbc9c41509f4&query=${data}`);
            const result = await apiResponse.json();
            const { results } = result;
            if (results && results.length > 0) {
                //set loading state alse false
                setLoadingState(false);
                // set the recipes
                setRecipes(results);
            }

        }
        getRecipies();
    };

    console.log(loadingState,recipes);
    return (
        <div className="homepage">
            <Search C2Pbridge={C2Pbridge} />
        </div>
    )
}
export default Homepage;