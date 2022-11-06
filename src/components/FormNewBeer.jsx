import axios from "axios"
import { useState } from "react"


function FormNewBeer(props) {

  const [ nameInput, setNameInput ] = useState("")
  const [ taglineInput, setTagLineInput ] = useState("")
  const [ descriptionInput, setDescriptionInput ] = useState("")
  const [ firstBrewedInput, setFirstBrewedInput ] = useState("")
  const [ brewerTipsInput, setBrewerTipsInput ] = useState("")
  const [ attenuationLevelTipsInput, setAttenuationLevelTipsInput ] = useState(0)
  const [ contributedByInput, setContributedByInput ] = useState("")


  const handleNameChange = (event) => setNameInput(event)
  const handleTaglineChange = (event) => setTagLineInput(event)
  const handleDescriptionChange = (event) => setDescriptionInput(event)
  const handleFirstBrewedChange = (event) => setFirstBrewedInput(event)
  const handleBrewerTipsChange = (event) => setBrewerTipsInput(event)
  const handleAttenuationLevelTipsChange = (event) => setAttenuationLevelTipsInput(event)
  const handleContributedByChange = (event) => setContributedByInput(event)


  const handleSubmit = async (event) => {

    event.preventDefault()

    const newBeer = {

      name: nameInput,
      tagline: taglineInput,
      description: descriptionInput,
      first_brewed: firstBrewedInput,
      brewers_tips: brewerTipsInput,
      attenuation_level: attenuationLevelTipsInput,
      contributed_by: contributedByInput
    }

      try {
        
        const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
       props.getData()
      } catch (error) {
        console.log(error)
      }

  }

  return (
    <div>
      <h2>Add a New Beer</h2>

    <form action="">
    <label htmlFor="name">Name </label>
    <input type="text" name="name" onChange={handleNameChange}/>
    <br />
    <label htmlFor="tagline">Tagline </label>
    <input type="text" name="tagline" onChange={handleTaglineChange}/>
    <br />
    <label htmlFor="description">Description </label>
    <input type="text" name="description" onChange={handleDescriptionChange}/>
    <br />
    <label htmlFor="first_brewed">First Brewed </label>
    <input type="text" name="first_brewed" onChange={handleFirstBrewedChange}/>
    <br />
    <label htmlFor="brewers_tips">Brewers Tips </label>
    <input type="text" name="brewers_tips" onChange={handleBrewerTipsChange}/>
    <br />
    <label htmlFor="attenuation_level">Attenuation Level Tips </label>
    <input type="number" name="attenuation_level" onChange={handleAttenuationLevelTipsChange}/>
    <br />
    <label htmlFor="contributed_by">Contributed by Tips </label>
    <input type="text" name="contributed_by" onChange={handleContributedByChange} />
    <br />
    <button onClick={handleSubmit}>Add New</button>
      
    </form>




    </div>
  )
}

export default FormNewBeer