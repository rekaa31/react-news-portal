import {Link} from 'react-router-dom'
import Modal from '../component/Modal'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="row" style={{padding:"10px 0px"}}>
                        <div className="col-lg-11">
                            <Link className="navbar-brand" to={() => false}>PORTAL BERITA</Link>
                        </div>
                        <div className="col-lg-1">
                            <button style={{float:"right", width:"100%"}} className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#listBookmark">List Bookmark</button>
                            <Modal />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}