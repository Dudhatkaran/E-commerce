import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import style from './Filter.module.css'


const Filter = () => {
    return (
        <Accordion id={style.filterSection}>
            <Accordion.Item eventKey="0">
                <Accordion.Header><h6>PRODUCT CATEGORIES</h6></Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col className='ms-0'>
                            <Dropdown data-bs-theme="dark">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" className={`${style.subHeading}`}>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" className={`${style.subHeading}`}>Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" className={`${style.subHeading}`}>Something else</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-4" className={`${style.subHeading}`}>Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Filter