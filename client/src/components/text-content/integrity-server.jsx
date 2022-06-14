import React, {useState} from "react";
import Markdown from 'markdown-to-jsx';
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const IntegrityServer = () => {
  const [loading, setLoading] = useState(true);
  const [md, setMd] = useState(``);
  const {id} = useParams();
  console.log(id);

  useEffect(() =>{
    fetch(`/markdown/components/${id}.md`)
    .then((res) =>res.text())
    .then((text) => {
      setMd(text);
      setLoading(false);
    })
    .catch((err) => console.log(err));
  });

  return (
    <div className="page-content__text-content text-content">
      {loading ? <p>Loading...</p> : (
        <Markdown>
          {md}
        </Markdown>
      )}
    </div>
  );
};

export default IntegrityServer;
