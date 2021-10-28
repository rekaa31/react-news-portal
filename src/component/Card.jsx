import React from 'react'
import { useDispatch } from 'react-redux'
import { addBookmark } from '../store/actions/NewsActions'

export default function Card(props){

    const dispatch = useDispatch()

    const addToBookmark = (data) => {
        dispatch(addBookmark(data))
    }

    return(
        <div className="col-3">
            <div className="card" >
                <img src={props.data.image} className="card-img-top" alt={props.data.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <div className="row">
                        <div className="col-6 align-self-start" >
                            <button style={{float:"right", width:"100%"}} className="btn btn-outline-primary">Detail</button>
                        </div>
                        <div className="col-6 align-self-end" >
                            <button onClick={() => addToBookmark(props.data)} style={{float:"right", width:"100%"}} className="btn btn-outline-success">Bookmark</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}