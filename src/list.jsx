import React, { Component } from "react";
// import Data from "./data"
import "./list.css";

function List(props) {
  return <div>
    {props.people.map(
        person => {
            const {id, age, name, image} = person;
            return<article className="person" key={id}> 
                <img src={image} className="image"/>
                <div>
                    <h3>{name}</h3>
                    <div>{age}</div>
                </div>
            </article>
        }
    )}
  </div>;
}

export default List;
