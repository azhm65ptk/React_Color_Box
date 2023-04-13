import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuidv4() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="height">height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>

        <div>
          <label htmlFor="width"> width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>

        <div>
          <label htmlFor="backgroundColor">backgroundColor</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id=""> Add a new box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
