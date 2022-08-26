import React from 'react';
export default function NotFound(props) {

  return (
        <div className='col'>
          <div className="row pt-5 align-items-center">
            <div className="col-12 offset-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-4 offset-xl-4">
              <h3 className='color-white inter text-center'>
                Uh oh, we could not find the page you were looking for!
              </h3>
              <p className='text-center mt-4'>
                <a className="btn btn-warning btn-sm background-color-yellow" href="#">Return Home</a>
              </p>
            </div>
          </div>
        </div>
  );
}
