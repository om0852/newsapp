import React, { Component } from "react";
import Loading from "./Loading";
import Newitem from "./Newitem";

export class New extends Component {
  // ];

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,

      // totalResults:totalResultss:
    };
  }
  async componentDidMount() {
    console.log("run");
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=21147fd0688545708178b60797550985&page=1 &pageSize=6`;
    let fetchdata = await fetch(url);
    let data = await fetchdata.json();
    // console.log(data);
    this.setState({
      articles: data.articles,
      page: 1,
      totalResults: data.totalResults,
      loading: false,
    });
  }
  prefun = async () => {
    this.setState({
      loading:true
    })
    // {this.state.loading && <Loading />}
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=21147fd0688545708178b60797550985 &page=${
      this.state.page - 1
    } &pageSize=6`;
    let fetchdata = await fetch(url);
    let data = await fetchdata.json();
    // {this.state.loading && <Loading />}
    this.setState({
      articles: data.articles,
      page: this.state.page - 1,
      loading:false
    });
  };
  nextfun = async () => {
    // console.log(this.state.totalResults);
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 6)) {
    } else {
      console.log("next");
      // {this.state.loading && <Loading />}
      this.setState({
        loading:true
      })
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=21147fd0688545708178b60797550985 &page=${
        this.state.page + 1
      } &pageSize=6`;
      let fetchdata = await fetch(url);
      let data = await fetchdata.json();
      // {this.state.loading && <Loading />}
      // console.log(data)
      this.setState({
        articles: data.articles,
        page: this.state.page + 1,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Loading />}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
           // {/* <button className="btn btn-primary">hello</button> */}
            return (
              <div className="col my-3" key={element.url}>
                <Newitem
                  title={element.title.slice(0, 30)}
                  description={
                    element.description
                      ? element.description.slice(0, 30)
                      : "some error happen"
                  }
                  imgurl={element.urlToImage}
                  newurl={element.url}
                />
              </div>
            );
          })}
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-primary"
            onClick={this.prefun}
          >
            preview
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 6)
            }
            type="button"
            class="btn btn-primary"
            onClick={this.nextfun}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}

export default New;
