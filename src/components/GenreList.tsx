import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data, isLoading, errors } = useGenre();

    if (errors) return null;
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
                        <Text fontSize="large">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
