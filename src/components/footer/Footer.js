import React from "react";
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";
import './footer.css';

const FooterPage = () => {
    return (
        <MDBFooter color="" className="font-small pt-4 mt-4 clark-footer">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="my-footer text-center py-3">
                <MDBContainer fluid>
                    <h5>Khallad</h5>
                    <h5>
                        If you interested add a star to the repo
                    </h5>
                    <a href="https://khallad2.github.io/khallad.github.io/"> &copy; {new Date().getFullYear()} Copyright:
                        Khallad Sharaf El-Din </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;