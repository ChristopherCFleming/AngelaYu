import React, { useState } from "react";

function CreateArea() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  function update(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "title") {
      setNewTitle(value);
    } else {
      setNewContent(value);
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={update}
          name="title"
          placeholder="Title"
          value={newTitle}
        />
        <textarea
          onChange={update}
          name="content"
          placeholder="Take a note..."
          value={newContent}
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
