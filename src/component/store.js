import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Head from './storeHead';
import Body from './storeBody';
import line from '../pic/line.png';
import * as API from '../API';
const random = [
    {
    'id' : 1,
    'filter' : 'snack'
    },
    {
    'id' : 2,
    'filter' : 'desert'
    },
    {
    'id' : 3,
    'filter' : 'plate'
    },
    {
    'id' : 4,
    'filter' : 'dishes'
    },
    {
    'id' : 5,
    'filter' : 'noodle'
    },
]
const array= [{
    'id' : 1,
    'title' : 'Soup',
    'description' : 'Soup is a lot like a family. Each ingredient enhances the others; each batch has its own characteristics; and it needs time to simmer to reach full flavor.',
    'source' : require('/Users/mera/yongjo/src/pic/soup.jpg'),
    'filter' : 'soup'
    },
    {
    'id' : 2,
    'title' : 'Chocolate',
    'description' : 'All you need is love. But a little chocolate now and then doesnt hurt.',
    'source' : require('/Users/mera/yongjo/src/pic/choco.gif'),
    'filter' : 'chocolate'

},
    {
    'id' : 3,
    'title' : 'Wine',
    'description' : 'Sorrow can be alleviated by good sleep, a bath and a glass of wine.',
    'source' : require('/Users/mera/yongjo/src/pic/wine.jpg'),
    'filter' : 'wine'

},
{
    'id' : 4,
    'title' : 'Fries',
    'description' : 'Im just a fries.',
    'source' : require('/Users/mera/yongjo/src/pic/fries.jpg'),
    'filter' : 'fries'

    },
    {
    'id' : 5,
    'title' : 'Chicken',
    'description' : 'Im just a tasteful chicken.',
    'source' : require('/Users/mera/yongjo/src/pic/chicken.jpg'),
    'filter' : 'chicken'

},
    {
    'id' : 6,
    'title' : 'Coffee',
    'description' : 'Err... just drink.',
    'source' : require('/Users/mera/yongjo/src/pic/coffee.jpg'),
    'filter' : 'coffee'

}];
class Store extends React.Component{    
    constructor(props){
    super(props);
    this.state = {
         'content' : array,
         'list' : []
     }
}

componentDidMount(){
    const filter = random[Math.floor(Math.random() * Math.floor(5))].filter;
    API.fetchFood(filter)
    .then((items) => {
        this.setState({
            'list': items
        })
    })
   
}
    render(){ 
    console.log(this.state.list)
           return (
                <BrowserRouter>
                <div>
                    <hr/>
                    <Container>
                        <Head content={this.state.content}/>
                        <div className='divLine'>
                       <img src={line} className='line' alt='line' />
                       </div>
                        <Body content={this.state.list}/>
                    </Container>

                <p className='todayFooter'>Copyright @ Code Disruptors, Inc.</p>
                <br/>
                    </div>
                    </BrowserRouter>
            );
    }
}


export default Store;