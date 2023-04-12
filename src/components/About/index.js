import { Component } from "react";
import Loader from "react-loader-spinner";
const BlogItem = (props) => {
  const { data } = props;
  const { imageUrl } = data;
  return (
    <li>
      <img src={imageUrl} className="image" />
    </li>
  );
};
class About extends Component {
  state = { blogsData: [], isLoad: false };
  getBlogsData = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs/");
    const data = await response.json();
    //snakecase to camelcase conversion
    const updateData = data.map((eachItem) => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      autor: eachItem.autor,
      topic: eachItem.topic,
    }));
    this.setState({ blogsData: updateData, isLoad: false });
  };
  render() {
    const { blogsData } = this.state;
    const { isLoad } = this.state;
    return (
      <div>
        <ul>
          {false ? (
            <Loader type="TailSpin" />
          ) : (
            blogsData.map((eachData, index) => (
              <BlogItem data={eachData} key={index} />
            ))
          )}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.getBlogsData();
  }
}
export default About;
