import React, {Component} from 'react';
import axios from 'axios';
import {FormGroup, Input, Label, Button, Form} from "reactstrap";
import './edit.css'

class Edit extends Component {
    state = {
        pages: null,
        selectValue: null,
    };

    async componentDidMount() {
        const resp = await axios('https://lesson-65-kadyr.firebaseio.com/pages.json');
        this.setState({pages: resp.data, selectValue: Object.keys(resp.data)[0]})
    }

    selectHandler = e => this.setState({selectValue: e.target.value});

    inputHandler = e => {
        const pages = {...this.state.pages};
        pages[this.state.selectValue][e.target.name] = e.target.value;
        this.setState({pages});
    };

    addChanges = async e => {
        e.preventDefault();
        await axios.put('https://lesson-65-kadyr.firebaseio.com/pages/' + this.state.selectValue + '.json', this.state.pages[this.state.selectValue]);
        this.props.history.push(`/${this.state.selectValue}`);
    };

    render() {
        return this.state.pages && (
            <div>
                <h1>Edit pages</h1>
                <Form onSubmit={this.addChanges}>
                    <FormGroup>
                        <Label for="select">Select page</Label>
                        <Input type="select" name="select" id="select" className='w-25' onChange={this.selectHandler}>
                            {Object.keys(this.state.pages).map(page => {
                                return <option key={page} className='text-capitalize'>{page}</option>
                            })}
                        </Input>
                        <Label for="title">Title</Label>
                        <Input type="title" name="title" id="title" className='mb-3' value={this.state.pages[this.state.selectValue].title} onChange={this.inputHandler} />
                        <Label for="Content">Content</Label>
                        <Input type="textarea" name="content" id="Content" className='mb-3' style={{height: '300px'}} value={this.state.pages[this.state.selectValue].content} onChange={this.inputHandler} />
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}

export default Edit;