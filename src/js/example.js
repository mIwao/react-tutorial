const data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},  
]

const Comment = React.createClass({
  render() {
    const rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    return(
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML = {{__html: rawMarkup}} />
        </div>
    )
  }
})

const CommentList = React.createClass( {
  render() {
    const commentNodes = this.props.data.map((comment) => {
      return(
        <Comment author={comment.author} key={comment.author}>
          {comment.text}
        </Comment>
      )
    })

    return(
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
})

const CommentForm = React.createClass({
  render: () => {
    return(
        <div className = "commentForm">
          Hello, world! I am a CommentForm.
        </div>
    )
  }
})


const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    )
  }
})
ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
)