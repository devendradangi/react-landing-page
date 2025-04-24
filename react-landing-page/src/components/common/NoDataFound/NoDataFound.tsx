import { Card } from "react-bootstrap";
import { ReactNode } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";


const NoDataFound = ({ icon, title, message }: { icon?: ReactNode; title?: string; message?: string }) => (
    <Card className="text-center my-5 p-5" style={{ borderRadius: "12px", backgroundColor: "#fff" }}>
        <Card.Body className="d-flex flex-column align-items-center">
            <div style={{ fontSize: "50px", color: "#64748b" }}>
                {icon || <>{LiaClipboardListSolid({})}</>}
            </div>
            <h5 className="mt-3 bold-text"
                style={{ fontSize: "1.6rem" }}>
                {title || "No Data Found"}
            </h5>
            <p className="text-muted bold-text"
                style={{ fontSize: "1.2rem" }}>
                {message || "There are no matching details"}
            </p>
        </Card.Body>
    </Card>
);

export default NoDataFound;
