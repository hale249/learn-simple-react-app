import PropTypes from "prop-types";

PostList.prototype = {
    posts: PropTypes.array,
}

PostList.defaultProps = {
    posts: [],
}
export function PostList(props: any) {
    const {posts} = props;
    return (
        <div>
            <ul>
                {
                    posts.map((p: any) => (<li key={p.id}>{p.title}  ----- </li>))
                }
            </ul>
        </div>
    );
};
