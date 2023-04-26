import React from 'react'

const More = ( {habilites, volunteer} ) => {
  return (
      <div className="More card">
        <h2> MORE </h2>
        <p> {habilites} </p>
        {volunteer.map((item) => {
          return (             
              <div key={JSON.stringify(item)}>
                <p className="name">✨ {item.name}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
              </div>
          );
        })}
      </div>
  );
};

export default More