import React from "react";
import Item from "./Item";

class TitleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "87dfa1c669eea853da609d4968d294be",
      data: [],
      mounted: false,
    };
  }
  loadContent() {
    let requestUrl =
      "https://api.themoviedb.org/3/" +
      this.props.url +
      "&api_key=" +
      this.state.apiKey;
    fetch(requestUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((err) => {
        console.log("there has been an error", err);
      });
  }
  componentDidUpdate(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent();
      });
    }
  }
  componentDidMount() {
    if (this.props.url !== "") {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }
  render() {
    let titles = "";
    if (this.state.data.results) {
      titles = this.state.data.results.map((title, i) => {
        if (i < 5) {
          let name = "";
          let backDrop =
            "http://image.tmdb.org/t/p/original" + title.backdrop_path;
          if (!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }

          return (
            <Item
              key={title.id}
              title={name}
              score={title.vote_average}
              overview={title.overview}
              backdrop={backDrop}
            />
          );
        } else {
          return <div key={title.id}></div>;
        }
      });
    }

    return (
      <div
        ref={this.TitleList}
        className="TitleList"
        data-loaded={this.state.mounted}
      >
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">{titles}</div>
        </div>
      </div>
    );
  }
}

export default TitleList;
