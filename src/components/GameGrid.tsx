import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data, errors, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {errors && <Text>{errors}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={3}
                padding={12}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
