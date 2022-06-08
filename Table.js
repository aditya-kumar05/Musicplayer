import React from "react";
import Sdata from "./Sdata";
const Table =()=>{
    return(
        <>
        <table className="container">
            <thead className="head">
            
            <th>Artwork</th>
            <th>Songs</th>
            <th>Date of Release</th>
            <th>Artist</th>
            <th>Rate</th>
            </thead>
            <tbody>
                <tr>
                    <td><img src={Sdata[0].Artwork}/></td>
                    <td>{Sdata[0].Song}</td>
                    <td>{Sdata[0].DateOfRelease}</td>
                    <td>{Sdata[0].Artist}</td>
                    <td>{Sdata[0].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[1].Artwork}/></td>
                    <td>{Sdata[1].Song}</td>
                    <td>{Sdata[1].DateOfRelease}</td>
                    <td>{Sdata[1].Artist}</td>
                    <td>{Sdata[1].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[2].Artwork}/></td>
                    <td>{Sdata[2].Song}</td>
                    <td>{Sdata[2].DateOfRelease}</td>
                    <td>{Sdata[2].Artist}</td>
                    <td>{Sdata[2].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[3].Artwork}/></td>
                    <td>{Sdata[3].Song}</td>
                    <td>{Sdata[3].DateOfRelease}</td>
                    <td>{Sdata[3].Artist}</td>
                    <td>{Sdata[3].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[4].Artwork}/></td>
                    <td>{Sdata[4].Song}</td>
                    <td>{Sdata[4].DateOfRelease}</td>
                    <td>{Sdata[4].Artist}</td>
                    <td>{Sdata[4].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[5].Artwork}/></td>
                    <td>{Sdata[5].Song}</td>
                    <td>{Sdata[5].DateOfRelease}</td>
                    <td>{Sdata[5].Artist}</td>
                    <td>{Sdata[5].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[6].Artwork}/></td>
                    <td>{Sdata[6].Song}</td>
                    <td>{Sdata[6].DateOfRelease}</td>
                    <td>{Sdata[6].Artist}</td>
                    <td>{Sdata[6].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[7].Artwork}/></td>
                    <td>{Sdata[7].Song}</td>
                    <td>{Sdata[7].DateOfRelease}</td>
                    <td>{Sdata[7].Artist}</td>
                    <td>{Sdata[7].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[8].Artwork}/></td>
                    <td>{Sdata[8].Song}</td>
                    <td>{Sdata[8].DateOfRelease}</td>
                    <td>{Sdata[8].Artist}</td>
                    <td>{Sdata[8].Rate}</td>
                </tr>
                <tr>
                    <td><img src={Sdata[9].Artwork}/></td>
                    <td>{Sdata[9].Song}</td>
                    <td>{Sdata[9].DateOfRelease}</td>
                    <td>{Sdata[9].Artist}</td>
                    <td>{Sdata[9].Rate}</td>
                </tr>
            </tbody>
        </table>
        </>
        
    );

};
export default Table;