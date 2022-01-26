import React from "react";
import './card-styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt="monsters"
            src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`}
        />
        <h1 key={props.monster.id}>{ props.monster.name }</h1>
        <p>{props.monster.email}</p>
    </div>
)