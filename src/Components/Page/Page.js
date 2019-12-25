import React, {Component} from 'react';
import axios from 'axios';

class Page extends Component {
    state = {
      content: null,
    };

    componentDidMount() {
        this.getData();
    }
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.getData();
        }
    }
    getData = async () => {
        const page = this.props.match.params.pageName ? this.props.match.params.pageName : 'home';
        const resp = await axios.get('https://lesson-65-kadyr.firebaseio.com/pages/' + page + '.json');
        this.setState({content: resp.data})
    };

    render() {
        return this.state.content && (
            <div className='text-center'>
                <h1>{this.state.content.title}</h1>
                <p>{this.state.content.content}</p>
            </div>
        );
    }
}

export default Page;