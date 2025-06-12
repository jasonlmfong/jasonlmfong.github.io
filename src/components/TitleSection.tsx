import Row from "react-bootstrap/Row";

export default function TitleSection(props) {
    return (
        <Row className={"justify-content-md-center"} style={{minHeight: "15vh", backgroundColor: "#112244"}}>
            {props.children}
        </Row>
    );
}
