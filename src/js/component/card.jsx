import React from "react";

//create your first component
const Card = () => {
	return (
		
    <div className="card" style={{"width": "18rem"}}>
        <img className="card-img-top" src="https://img.huffingtonpost.com/asset/5bae0ff51f0000df0022d78c.jpeg?ops=scalefit_720_noupscale" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                               tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                        <a href="#" className="btn btn-primary">Find out more !</a>
            </div>
    </div>

    );
};


export default Card;