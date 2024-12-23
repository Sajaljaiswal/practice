import React, { useState } from "react";
import explorer from "../User/Data";

const File = ({ data }) => {
  const [hide, setHide] = useState(false);
  return (
    <div style={{ marginLeft: "20px" }}>
      {data.map((item) => (
        <div key={item.id} onClick={() => setHide(!hide)}>
          <p style={{ display: hide ? "block" : "none" }}>
            {item.isFolder && item.items.length > 0 && (
              <File data={item.items} />
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

const FileExplorer = () => {
  return (
    <div>
      <h1>File Explorer</h1>
      <File data={[explorer]} />
    </div>
  );
};

export default FileExplorer;
