import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Input, SimpleGrid } from '@chakra-ui/react'
import styled from 'styled-components'
import { activeMovies } from '../../actions/movieAction';

const ImgMovies = styled.img`
    border-radius: 10px !important;
    opacity: 0.5;
    :hover {
        opacity: 1;
    }
`

const Peliculas = () => {

    const dispatch = useDispatch()

    const { movie } = useSelector(state => state.movie)

    console.log(movie);

    const handleClickMovie = (mov) => {
        dispatch(activeMovies(mov.id, { ...mov }))
    }

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={3} m={10}>
            {
                movie.map((mov, index) => {
                    return (
                        <Box w="100%" h="100%" key={index}>
                            <ImgMovies onClick={() => handleClickMovie(mov)} src={mov.image} alt={mov.tittle} border="0" />
                        </Box>
                    )
                })
            }
        </Grid>
    )
}

export default Peliculas
