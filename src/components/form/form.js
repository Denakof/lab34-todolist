'use strict';
import React from "react";
import { Button } from '@mui/material';
import './form.scss'
import Form from 'react-bootstrap/Form'

function Form1(props) {
    return (
        <Form onSubmit={props.handleSubmit}>

            <h2>City to visit </h2>

            <Form.Label>
                <span>Account: </span>
                <input onChange={props.handleChange} name="text" type="text" placeholder="city" />
            </Form.Label>

            {/* <Form.Label>
                <span>Assigned To </span>
                <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </Form.Label> */}
            <br/>
            <Form.Label>
            <span>Ratings</span>
            <input onChange={props.handleChange} defaultValue={3} type ="range" min={1} max={5} name="difficulty" />
            </Form.Label>

            <Form.Label>
            <Button  variant="contained" type ="submit"  >Add City</Button>
            </Form.Label>
        </Form>
    )
}

export default Form1