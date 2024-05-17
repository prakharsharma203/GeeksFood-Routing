import "./restaurants.css"

export function Cards({detail}){
    return(
        <>
       
        <div className="card289">
            <div className="card39">
          <h3>{detail.name}{Array(detail.rating).fill(0).map(()=>"⭐")}</h3>
          <p>{detail.location}</p>
          <p>{detail.code}</p>
          </div>
          <div className="card29">
           <p>{detail.cuisine}</p>
           <a className="atag" href="#">Visit Menu</a>
          </div>
        </div>
        </>
    )
}