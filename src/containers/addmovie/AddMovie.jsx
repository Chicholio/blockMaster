import { Center, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const FormAddMovie = styled.form`
    display: flex;
    align-items: center;
    padding: 10px;
`

const AddMovie = () => {
    return (
        <Flex color='white' m={10}>
            <Center width='30%'>
                <img src="https://i.ibb.co/KxBkKrz/rollocine.jpg" alt="rollocine" border="0" style={{ width: '100%' }} />
            </Center>
            <Center width='70%'>
                <FormAddMovie>
                    <div>
                        <div>
                            <label for='tittle'>Tittle:</label><br />
                            <input type='text' name='tittle' placeholder="Tittle" />
                        </div>
                        <div>
                            <label for='age'>Age:</label><br />
                            <input type='text' name='age' placeholder="Age" />
                        </div>
                        <div>
                            <label for='categories'>Categories:</label><br />
                            <input type='text' name='categories' placeholder="Categories" />
                        </div>
                        <div>
                            <label for='duration'>Duration:</label><br />
                            <input type='text' name='duration' placeholder="Duration" />
                        </div>
                    </div>
                    <div>
                        <label for='description'>Description:</label><br />
                        <textarea name='textarea' rows="7" cols="50" placeholder="Description" />
                    </div>
                    <div>
                        <button type='submit'>Add Movie</button>
                    </div>
                </FormAddMovie>
            </Center>
        </Flex>
    )
}

export default AddMovie
