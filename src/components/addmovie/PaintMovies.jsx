import React from 'react'
import { Box, Grid, Input, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const GridPrincipal = styled(Grid)`
    border: solid;
`

const BoxGrid1 = styled(Box)`
    display: flex;
    justify-content: center;
`

const BoxGrid12 = styled(Box)`
    display: flex;
    justify-content: left;
`

const PaintMovies = () => {

    const { movie } = useSelector(state => state.movie)

    console.log(movie);

    return (
        <SimpleGrid>
            {
                movie.map((mov, index) => {
                    return (
                        <GridPrincipal templateColumns="repeat(4, 1fr)" gap={6} key={index}>
                            <BoxGrid1 w="100%" h="20">
                                <img src={mov.image} alt={mov.tittle}border="0" />
                            </BoxGrid1>
                            <BoxGrid12 w="100%" h="20">
                                <div>
                                    <p>{mov.tittle}</p>
                                    <p>{mov.year}</p>
                                </div>
                            </BoxGrid12>
                            <BoxGrid1 w="100%" h="20">
                                <form>
                                    <Input type='text' name='trailer' placeholder="Trailer" />
                                    <button style={{width:'100%'}}>Add Trailer</button>
                                </form>
                            </BoxGrid1>
                            <BoxGrid1 w="100%" h="20">

                                <button>Delete</button>
                            </BoxGrid1>
                        </GridPrincipal>
                    )
                })
            }
        </SimpleGrid>
    )
}

export default PaintMovies
