import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function EditUser() {
  let navigate = useNavigate();


  const { id } = useParams();


  const [user, setUser] = useState({
    name: "",
    topic: "",
    notes: "",
    
  });


  const { name,topic,notes} = user;


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadUser();
  }, []);


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/note/${id}`, user);
    navigate("/Student");
  };


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/note/${id}`);
    setUser(result.data);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Notes</h2>


          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                variant="outlined"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                topic
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="topic"
                value={topic}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                notes
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone number"
                name="notes"
                value={notes}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
