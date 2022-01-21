import React from 'react';
import { Col, Row } from 'reactstrap';

import VerticalTabs from './TabPanel';
function Details(props) {
    return (
        <div>
            <Row>
                <Col lg={3}><Row> <VerticalTabs/>
                    </Row></Col>

                <Col lg={5}>hi</Col>
            </Row>
        </div>
    );
}

export default Details;