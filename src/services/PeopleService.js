import React, {Component} from 'react';
import PeopleCardList from './PeopleCardList';
import SearchBox from '../Components/SearchBox';


class PeopleService extends Component {
	constructor() {
		super();
		this.state = {
      people: [],
      searchField: ''
		}
	};

	async fetchUsers() {
		const response = await fetch('https://swapi.co/api/people/');
		return response.json();
	}

	componentDidMount(){
		this.fetchUsers()
		.then(people => this.setState({
			people: people.results
    }))
    .catch((err) => console.log(err));
  }
  
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

	render(){
    const people = this.state.people;
    const filtered = this.state.people.filter(person => {
      return person.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
		return(
			<div className='flex flex-wrap items-center justify-around bg-light-gray'>
				<div id='Service' className='tc mv5 w-80-l'>
					<h1 className='ttu'>Service</h1>
					<h3 className='i fw1'>Loren ipsum dorlor sit amet consectetur</h3>
          <SearchBox searchChange={this.onSearchChange}/>
					<div className='flex items-center justify-around flex-row-l flex-column ma3'>
						{
							Object.keys(people).length > 0 ? (
								<PeopleCardList people={filtered}/>
							) : (
								<p className='tc'>Loading</p>
							)
						}
					</div>
				</div>
			</div>
		);
	}
}

export default PeopleService;