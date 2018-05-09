import React from 'react';

const Contact = ({}) => { return (
<div>
  <h1>Contactenos</h1>
  <form>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">nombre</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="nombre"/>
    </div>
    <div class="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
  )}

  export default Contact
