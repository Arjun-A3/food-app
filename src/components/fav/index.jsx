



export const Fav =(props)=>{



    return (
        
            
        <div class="card" style={{width: "18rem"}} key={id}>
            <img src={image} class="card-img-top" alt="recipe image"/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button onClick={rmFromFav} class="btn btn-primary">Remove from favourite</button>
                </div>
        </div>


    

);

}