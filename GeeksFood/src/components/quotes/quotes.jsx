import "./quotes.css"

export const Card = ({ detail}) => {
    return (
      <>
     
      <div className="card22">
        <p>{detail.content}</p>
        <span>{detail.author}</span>
      </div>
      
      </>
    );
  };