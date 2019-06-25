import React from "react"
import "./MembersForm.css"

const MembersForm = () => {
    return (
        <div className="inner-container">
            <form className="form-container">
                <h2 className="page__header--second">Members</h2>
                <div className="form-element">
                    <label
                        htmlFor="project-memberAmount"
                        className="form-label black"
                    >
                        Amount of members
                    </label>
                    <input
                        type="number"
                        id="project-memberAmount"
                        name="project-memberAmount"
                        className="form-input form-input-number"
                    ></input>
                </div>
            </form>
        </div>
    )
}

export default MembersForm
