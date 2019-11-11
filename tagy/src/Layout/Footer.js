import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";

export default class Footer extends React.Component {
    render() {
        return (
            <MDBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
            </p>
          </MDBFooter>
        );
    }
}