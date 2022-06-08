import React from "react";
import Adata from "./Adata";
const Atable =()=>{
    return(
        <>
        <table className="container">
            <thead className="head">
            
            <th>Artists</th>
            <th>Date of Birth</th>
            <th>Songs</th>
            </thead>
            <tbody>
                <tr>
                <td>{Adata[0].Artist}</td>
                <td>{Adata[0].Date_of_Birth}</td>
                <td>{Adata[0].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[1].Artist}</td>
                <td>{Adata[1].Date_of_Birth}</td>
                <td>{Adata[1].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[2].Artist}</td>
                <td>{Adata[2].Date_of_Birth}</td>
                <td>{Adata[2].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[3].Artist}</td>
                <td>{Adata[3].Date_of_Birth}</td>
                <td>{Adata[3].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[4].Artist}</td>
                <td>{Adata[4].Date_of_Birth}</td>
                <td>{Adata[4].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[5].Artist}</td>
                <td>{Adata[5].Date_of_Birth}</td>
                <td>{Adata[5].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[6].Artist}</td>
                <td>{Adata[6].Date_of_Birth}</td>
                <td>{Adata[6].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[7].Artist}</td>
                <td>{Adata[7].Date_of_Birth}</td>
                <td>{Adata[7].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[8].Artist}</td>
                <td>{Adata[8].Date_of_Birth}</td>
                <td>{Adata[8].Songs}</td>
                </tr>
                <tr>
                <td>{Adata[9].Artist}</td>
                <td>{Adata[9].Date_of_Birth}</td>
                <td>{Adata[9].Songs}</td>
                </tr>

            </tbody>
        </table>

        </>
    );
};

export default Atable; 