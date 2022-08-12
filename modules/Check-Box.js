import { useState, useEffect } from "react";

const Checkbox = () => {
    return (
        <label className="rectangle">
            <input type="checkbox" />
            <span className="toggle"></span>
        </label>
    )
}

export default Checkbox;
 