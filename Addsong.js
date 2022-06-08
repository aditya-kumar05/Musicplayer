import React from "react";
import { VscAdd } from "react-icons/vsc";
const Addsong = () => {

    var expanded = false;

    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }
    const addEvent=()=>{
        
    var modal = document.getElementById('id01');


    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
    return (
        <>
            <div className="container">
                <div className="py-4">
                    <h1 className="heading"> Add New Song</h1>
                    <form className="form-horizontal" onSubmit={""}>
                        <div className="form-group has-success">
                            <label className="control-label col-sm-2">Song Name</label><div class="col-sm-6"><input type="text" name="song" value="" onChange="" /></div></div><br />
                        <div className="form-group has-success">
                            <label className="control-label col-sm-2">Date Released</label> <div class="col-sm-6"><input type="text" name="dob" value="" onChange="" /></div></div><br />
                        <div className="form-group has-success">
                            <label className="control-label col-sm-2">Artwork</label> <div class="col-sm-6"><button className="imag"><input type="image" name="Upload" value=" Upload" /></button></div></div><br />
                        <div className="form-group has-success">
                            <label className="control-label col-sm-2" for="artist">Artist</label> <div class="col-sm-6"><div class="multiselect">
                                <div class="selectBox" onClick={showCheckboxes}>
                                    <select>
                                        <option>Serch</option>
                                    </select>
                                    <div class="overSelect"></div>
                                </div>
                                <div id="checkboxes">
                                    <label htmlFor="singer">
                                        <input type="checkbox" id="latamangeshkar" />KK</label>
                                    <label htmlFor="singer">
                                        <input type="checkbox" id="sonunigam" />Sonu Nigam</label>
                                    <label htmlFor="singer">
                                        <input type="checkbox" id="arrahman" />A. R. Rahman</label>
                                    <label htmlFor="singer">
                                        <input type="checkbox" id="arijitsingh" />Arijit Singh</label>
                                    <label htmlFor="singer">
                                        <input type="checkbox" id="uditnarayan" />Udit Narayan </label>
                                    <label htmlFor="singer">
                                        <input type="checkbox" id="ashabhosl" />Asha Bhosle</label>
                                </div><br />

                            </div>



                               <button onClick={addEvent} style={{ width: 'auto' }} className="imag addition"><VscAdd />  Add Artist</button> 

                                 <div id="id01" class="modal">

                                    <form class="modal-content animate" action="/action_page.php" method="post">

                                        <div class="container">
                                            <label htmlFor="uname"><b>Username</b></label>
                                            <input type="text" placeholder="Enter Username" name="uname" required />

                                            <label htmlFor="psw"><b>Password</b></label>
                                            <input type="password" placeholder="Enter Password" name="psw" required />

                                            <button type="submit">Login</button>
                                        </div>

                                    </form>
                                    </div> 



                                </div>

                            </div>
                            <br />
                            <div className="buttons">
                                <button className="imag wspace">Cancle</button> <button className="imag ">Save</button>
                            </div>


                    </form>



                </div>

            </div>

        </>
    )
}
export default Addsong;

