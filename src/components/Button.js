function Button(props) {
    return (
        <button className="p-2 m-2 bg-gray-200 rounded-lg">
            {props.text}
        </button>
    );
}

export default Button;