export default function OpenLink(props) {
    return (
        <a {...props} target="_blank" rel="noopener">
            {props.children}
        </a>
    );
}
