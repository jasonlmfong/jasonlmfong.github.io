import Row from "react-bootstrap/Row";

export default function PageSection(props) {
    return (
        <Row {...props} className={"justify-content-md-center " + props.className}
             style={{minHeight: "30vh", padding: "25px 0 25px 0", ...props.style}}>
            {props.children}
        </Row>
    );
}
