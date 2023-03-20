import React, {useState} from 'react';

function HomePage({productList}) {
  return (
    <div className='home-page-info'>
        <h1 className='header'>Welcome to our store!</h1>
        <p className='mission-statement'>
            &emsp;&emsp;Here at "Mega Super Corp" we are proud <br/>
            to have all any HumAn could ever realistically <br/>
            need! if your needs arent met we will question your <br/>
            ability to distinguish needs from wants and reality <br/>
            from fiction haAhHaaaa.
        </p>
    </div>
  );
}

export default HomePage;
