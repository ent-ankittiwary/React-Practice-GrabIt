import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const {count}=this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
                count:this.state.count+1,
            })
          }}
        >
          Click me!:{count}
        </button>
        <h2>Name:This is {this.props.name1}</h2>
      </div>
    );
  }
}
export default UserClass;
