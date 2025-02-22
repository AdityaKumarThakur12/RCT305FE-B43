import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';
import { useTheme } from './themeContext';

const Main = () => {
    const { theme } = useTheme()
    const products = Array.from({ length: 12 }, (_, index) => `Product ${index + 1}`);

    return (
        // <div >
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4} w={1000} p={4} bg={theme === 'light' ? 'gray.300' : 'gray.700'}
                color={theme === 'light' ? 'black' : 'white'} >
                {products.map((product) => (
                    <Box key={product} borderWidth="1px" borderRadius="lg" p={4} >
                        <Text>{product}</Text>
                    </Box>
                ))}
            </Grid>
        // </div>

    );
};

export default Main;