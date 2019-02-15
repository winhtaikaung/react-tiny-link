import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import cheerio from "cheerio";

let initialState = {
  data: {
    title: "loading",
    content: "",
    url: "",
    description: "",
    image: "",
    type: "" // MIME Type
  },
  loading: false
};
function useEffectAsync(effect, inputs) {
  useEffect(() => {
    effect();
  }, inputs);
}

async function fetch(url, setState) {
  const fetchUrl = `https://cors-anywhere.herokuapp.com/${url}`;
  console.log(fetchUrl);
  const client = Axios.create({
    url: fetchUrl,
    headers: {
      "x-requested-with": ""
    }
  });
  try {
    const response = await client.get(fetchUrl);
    const $ = cheerio.load(response.data);
    let temp = Object.assign({}, initialState);

    temp.data["title"] = $("title").text();
    temp.data["description"] = $("meta[name='description']").attr("content");

    temp.data["type"] = $("meta[property='og:type']").attr("content");
    temp.data["url"] = $("meta[property='og:url']").attr("content");
    // temp.data["title"] = $("meta[property='og:title']").attr("content");
    temp.data["image"] = $("meta[property='og:image']").attr("content");
    // temp.data["description"] = $("meta[property='og:description']").attr(
    //   "content"
    // );
    console.log(temp);
    setState(temp);
  } catch (error) {
    let temp = Object.assign({}, initialState);
    temp.data["url"] = url;
    setState(temp);
  }
}

const ReactTinyLink = props => {
  const [linkMeta, setlinkMeta] = useState(initialState);
  useEffectAsync(() => {
    fetch(
      "https://www.nytimes.com/2019/02/13/us/parkland-anniversary-marjory-stoneman-douglas.html?action=click&module=Top%20Stories&pgtype=Homepage ",
      setlinkMeta
    );
  }, []);
  return (
    <Fragment>
      {linkMeta.data.title}
      <br />
      {linkMeta.data.description}
      <br />
      {linkMeta.data.url}
    </Fragment>
  );
};

export default ReactTinyLink;
