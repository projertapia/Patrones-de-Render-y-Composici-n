import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }){
    
    let promedioTodos;
    if(totalTodos == 0){
        promedioTodos = "0";
    }else{
        promedioTodos = Math.round((completedTodos/totalTodos)*100);
    }
    return(
        <React.Fragment>
            <h2 className="TodoCounter">Mi lista <br/> de Tareas</h2>
            <span className="TodoCounterIndicator">
                <span className="TodoCounterLevel" style={{width:promedioTodos+'%'}}></span>
                <p className="TodoCounterText">{promedioTodos}%</p>
            </span>
            <p className="TodoCounterleyenda">{completedTodos} de {totalTodos}</p>
        </React.Fragment>
    )
}

export {TodoCounter};