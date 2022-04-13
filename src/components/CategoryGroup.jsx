import React from "react";
import Note from "./Note";
import './CategoryGroup.css';

const CategoryGroup = (props) => {
    return (
        <div className="category-block">
            <h1>{props.name}</h1>
            <div className="category-notes">
                {props.notesArray.map((noteItem, index) => {
                    if (noteItem.category === props.name) {
                        return (
                            <Note
                                key={index}
                                id={index}
                                title={noteItem.title}
                                content={noteItem.content}
                                onDelete={props.deleteNote}
                                category={noteItem.category}
                                editNote={props.editNote}
                            />
                        )
                    }
                    return <></>
                })}
            </div>
        </div>
    )
}

export default CategoryGroup;