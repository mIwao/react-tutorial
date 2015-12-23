// tutorial1.js
var CommentBox = React.createClass({
  render: () => {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    )
  }
})
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);