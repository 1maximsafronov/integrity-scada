import React, {useState} from "react";
import Markdown from 'markdown-to-jsx';

const IntegrityServer = () => {
  const [value, setValue] = useState(`**Hello world!!!**`);

  return (
    <div className="page-content__text-content text-content">
      <Markdown>
        {value}
      </Markdown>
    </div>
  );
};

export default IntegrityServer;
