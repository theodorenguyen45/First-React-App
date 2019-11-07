import React from 'react'
import PeopleCardList from './PeopleCardList'
import SearchBox from '../Components/SearchBox'

export default () => {
  const [people, setPeople] = React.useState([])
  const [searchField, setSearchField] = React.useState('')
  const [filtered, setFiltered] = React.useState([])

  const fetchUsers = () =>
    fetch('https://swapi.co/api/people/').then(res => res.json())

  React.useEffect(() => {
    fetchUsers()
      .then(people => setPeople(people.results))
      .catch(err => console.log(err))
  })

  const handleChange = event => {
    setSearchField(event.target.value)
  }

  React.useEffect(() => {
    setFiltered(
      people.filter(person =>
        person.name
          .toLowerCase()
          .includes(searchField.toLowerCase())
      )
    )
  }, [searchField, people])

  return (
    <div className='flex flex-wrap items-center justify-around bg-light-gray'>
      <div id='Service' className='tc mv5 w-80-l'>
        <h1 className='ttu'>Service</h1>
        <h3 className='i fw1'>
          Loren ipsum dorlor sit amet consectetur
        </h3>
        <SearchBox searchChange={handleChange} />
        <div className='flex items-center justify-around flex-row-l flex-column ma3'>
          {Object.keys(people).length > 0 ? (
            <PeopleCardList people={filtered} />
          ) : (
            <p className='tc'>Loading</p>
          )}
        </div>
      </div>
    </div>
  )
}
