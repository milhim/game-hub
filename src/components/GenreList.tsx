import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, errors } = useGenre();

    // if (errors) return null;
    if (isLoading) return <Spinner />;
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="6px">
                    <HStack>
                        <Image
                            boxSize="34px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            fontWeight={
                                genre.id === selectedGenre?.id
                                    ? "bold"
                                    : "normal"
                            }
                            onClick={() => {
                                onSelectGenre(genre);
                            }}
                            fontSize="large"
                            variant="link"
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
