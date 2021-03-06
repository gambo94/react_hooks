import React from 'react';
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {

        // using custom hook useform
        const [ { description }, handleInputChange, reset ] = useForm({
            description: '',
        })

        const handleSubmit = (e) => {
            e.preventDefault();

            if(description.trim().length <= 1){
                return;
            }
            // creates the new task
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            }
            handleAddTodo(newTodo);
            reset();
        }

    return (
        <>
            <h4>Add TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Learn ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Add
                        </button>
                    </form>
        </>
    )
}
