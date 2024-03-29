import { observer } from "mobx-react-lite";
import Container from "@mui/material/Container";

import { MainLayout } from "layouts";
import { useStore } from "store";
import { SimpleCollection, Typography } from "components";
import { useParams } from "react-router-dom";
import { MediaType } from "types";


export const Favorite = observer(function Favorite() {
  const { type } = useParams<{ type: MediaType }>();
  const { moviesPageStore, tvShowsPageStore } = useStore();
  const {
    isFavoritesLoading: isFavoritesMoviesLoading,
    favorites: favoriteMovies,
  } = moviesPageStore;
  const {
    isFavoritesLoading: isFavoritesTVShowsLoading,
    favorites: favoriteTVShows,
  } = tvShowsPageStore;

  const isLoading = type === "movie" ? isFavoritesMoviesLoading : isFavoritesTVShowsLoading;
  const items = type === "movie" ? favoriteMovies.data.data : favoriteTVShows.data.data;
  const isListEmpty = !items.length;

  return (
    <MainLayout isLoading={isLoading}>
      <Container maxWidth="xl">
        {isListEmpty ? (
          <Typography element="h3" type="heading_4">The list is currently empty.</Typography>
        ) : (
          <SimpleCollection items={items} />
        )}
      </Container>
    </MainLayout>
  )
});
