import { appInstance } from "./App";
import "./Popup.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Photo from "/Users/aliounsane/Desktop/GoMyCode/ReactProject/react-state-checkpoint/src/IMG_4401.jpg"


export const PopUp = () => {
    return(
        <>
        {/* <!-- Vertically centered modal --> */}
        {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btn-primary">
        Plus d'informations sur moi
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Mon Profil de Dev</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>{appInstance.Person.fullname}</li>
                <li>{appInstance.Person.bio}</li>
                <li><img src={Photo} alt="profile pic" width={100} height={100}></img></li>
                <li>{appInstance.Person.profession}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}