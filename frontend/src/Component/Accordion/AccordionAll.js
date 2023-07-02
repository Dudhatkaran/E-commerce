import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const AccordionAll = (props) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={props.eventKey}>
                <Accordion.Header>{props.Heading}</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        {props.Details.map((e) => {
                            return <li>{e.li}</li>
                        })}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionAll