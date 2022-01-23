import React from 'react';
import { Col, Row } from 'reactstrap';

import VerticalTabs from './TabPanel';
function Details(props) {
    return (
        <div>
            <Row>
                <Col lg={12}><Row> <VerticalTabs/>
                    </Row></Col>

               
            </Row>
        </div>
    );
}

export default Details;