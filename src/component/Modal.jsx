import { useSelector } from 'react-redux'
import { removeBookmark } from '../store/actions/NewsActions'
import { useDispatch } from 'react-redux'

export default function Modal(){

    const data = useSelector(state => state.news)
    const dispatch = useDispatch()

    console.log(data.news)

    const handleRemoveBookmark = (id) => {
        dispatch(removeBookmark(id))
    }
    
    return(
        <div className="modal fade" id="listBookmark" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">List Bookmark</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <ul>
                        {data.map((u) => 
                            <li key={u.id}>
                                <p>{u.title} </p>
                                <button onClick={() => handleRemoveBookmark(u.id)}  className="btn btn-outline-danger">Hapus</button>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}