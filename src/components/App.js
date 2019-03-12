import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./PicturesShow";

class App extends React.Component {
        state = {
                images: []
        };
        Appsubmit = async term => {
                const response = await unsplash({
                        method: "get",
                        params: {
                                count: 30,
                                query: term,
                                client_id: "9536953ff0d59d73469b6869ad12754b814341f09c822f4170fa686ed7120037"
                        }
                });
                console.log(response.data.results);

                this.setState({
                        images: response.data.results
                });
        };
        render() {
                return ( <
                        div className = "container" > {
                                " "
                        } < div className = "row p-5 " >
                        <
                        h1 className = "display-3 text-center heading-title " > Unsplash Fetch < /h1>  <
                        /
                        div > <
                        SearchBar omsubmit = {
                                this.Appsubmit
                        }
                        /> <ImageList imageList = {this.state.images}/ >
                        <
                        /div >
                );
        }
}

export default App;