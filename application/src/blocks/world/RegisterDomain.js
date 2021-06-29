import React, {Component} from 'react';

import {Button, Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

export default class RegisterDomain extends Component{
    constructor(props){
        super(props);

        this.state = {
            dropdown: false,
            dropdownName: "DOMAIN"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    render() {
        return(
        <Container className="block">
            <Row>
                <Col className="block-component">
                    <p className="vertical-center">REGISTER</p>
                </Col>
                <Col className="block-component">
                    <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                        <DropdownToggle caret>
                            {this.state.dropdownName}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => {this.setDropdownName("DOMAIN")}}>DOMAIN</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("PEER")}}>PEER</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("ROLE")}}>ROLE</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col className="block-component">
                    <Input placeholder="name"/>
                </Col>
            </Row>
        </Container>
        );
    }

    toggleDropdown(){
        this.setState({dropdown: !this.state.dropdown});
    }

    setDropdownName(name){
        this.setState({dropdownName: name});
    }
}