import { useEffect, useState } from "react";
import { Dis } from "../../components/display";
import Search from "../../components/search";
import './style.css'
import { Fav } from "../../components/fav";



const Homepage = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [recipies,setRecipies] =useState ([]);
    const [favouriteItem , setFavouriteItem] =useState([]);
    
    const C2Pbridge = (data) => {
        
        setLoadingState(true);

        async function getRecipies() {
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f8d2adf9338241c0b81ebbc9c41509f4&query=${data}`);
            const result = await apiResponse.json();
            const { results } = result;
            
            if(results.length>0 && results)
            {
                setRecipies(results);
                setLoadingState(false);
            }

        }
        getRecipies();
        
    };
    const addToFav = (getSelectedItem) => {
        let cpyitems =[...favouriteItem];
        const index = cpyitems.findIndex(item => item.id === getSelectedItem.id);
        if(index===-1)
        {
            cpyitems.push(getSelectedItem);
            setFavouriteItem(cpyitems);
            localStorage.setItem(favouriteItem,JSON.stringify(cpyitems));
        }
        else{
            alert("already selected!!");
        }

    }
    useEffect(()=>{
        const getElementsfromStorage = JSON.parse(localStorage.getItem(favouriteItem));
        setFavouriteItem(getElementsfromStorage);
    },[]);
    
    
   

    return (
        <div className="homepage">
            <Search C2Pbridge={C2Pbridge} />
            {
                 loadingState && <div> Loading recipies please wait</div>
            }
            <div>
            <br/>
            <br/>
            <br/>
            </div>
            <div className="ds"> 
            {
                favouriteItem && favouriteItem.length>0 ?
                <Fav rmFromFav = {(item)=>{(item)=>rmFromFav(item)} id={item.id} image={item.image} title={item.title}}/> : null
            }
            </div>
            <div className="su"> 
            {
                recipies && recipies.length>0 ?
                recipies.map((item) => <Dis addToFav = {()=>addToFav(item)} id={item.id} image={item.image} title={item.title}/>) : null
            }
            </div>
        </div>
       
    );
  
}
export default Homepage;