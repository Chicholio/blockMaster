import React from 'react'
import { Center, Flex, Input, Textarea } from '@chakra-ui/react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { AddMovie } from '../../actions/movieAction'

const FormAddMovie = styled.form`
    display: grid;
    grid-template-columns: repeat(2);
    grid-template-rows: repeat(5);
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

const ImgAddMovie = styled.img`
    align-items: center;
    justify-content: center;
    width: 80%;
`

const AddInput = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange] = useForm({
        tittle: '',
        description: '',
        year: '',
        categorie: '',
        image: '',
        duration: ''
    })

    const { tittle, description, year, categorie, image, duration } = values

    const handleAddMovie = e => {
        e.preventDefault()

        dispatch(AddMovie(tittle, description, year, categorie, image, duration))
    }

    return (
        <Flex color='white' m={10}>
            <Center width='30%' >
                <ImgAddMovie src="https://i.ibb.co/KxBkKrz/rollocine.jpg" alt="rollocine" border="0" style={{ width: '80%' }} />
            </Center>
            <Center width='70%'>
                <FormAddMovie>
                    <div style={{ gridColumn: '1', gridRow: '1' }}>
                        <Input type='text' name='tittle' placeholder="Tittle" value={tittle} onChange={handleInputChange} />
                    </div>
                    <div style={{ gridColumn: '1', gridRow: '2' }}>
                        <Input type='text' name='year' placeholder="Year" value={year} onChange={handleInputChange} />
                    </div>
                    <div style={{ gridColumn: '1', gridRow: '3' }}>
                        <Input type='text' name='categorie' placeholder="Categories" value={categorie} onChange={handleInputChange} />
                    </div>
                    <div style={{ gridColumn: '1', gridRow: '4' }}>
                        <Input type='text' name='duration' placeholder="Duration" value={duration} onChange={handleInputChange} />
                    </div>
                    <div style={{ gridColumn: '2', gridRow: '1' }}>
                        <Input type='text' name='image' placeholder="Image URL" value={image} onChange={handleInputChange} />
                    </div>
                    <div style={{ gridColumn: '2', gridRow: '2/5' }}>
                        <Textarea name='description' rows="8" cols="50" placeholder="Description" resize='none' value={description} onChange={handleInputChange} />
                    </div>
                    <div style={{ gridColumn: '1/3', gridRow: '5', textAlign: 'center' }}>
                        <button type='submit' onClick={handleAddMovie} >Add Movie</button>
                    </div>
                </FormAddMovie>
            </Center>
        </Flex>
    )
}

export default AddInput
