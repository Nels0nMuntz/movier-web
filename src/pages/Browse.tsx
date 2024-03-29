import { observer } from "mobx-react-lite";

import { MainSlider, SwitchableCollection } from "components";
import { useStore } from "store";
import { MainLayout } from "layouts";


export const Browse = observer(() => {

  const { moviesCollectionStore, tvShowsCollectionStore, browsePageStore } = useStore();

  const isLoading = browsePageStore.isLoading;
  const trendingDailyMovies = moviesCollectionStore.lists.trendingDaily.data;
  const trendingWeeklyMovies = moviesCollectionStore.lists.trendingWeekly.data;
  const loadTrendingDailyMovies = moviesCollectionStore.loadTrendingDaily;
  const loadTrendingWeeklyMovies = moviesCollectionStore.loadTrendingWeekly;
  const trendingDailyShows = tvShowsCollectionStore.lists.trendingDaily.data;
  const trendingWeeklyShows = tvShowsCollectionStore.lists.trendingWeekly.data;
  const loadTrendingDailyTvShows = tvShowsCollectionStore.loadTrendingDaily;
  const loadTrendingWeeklyTvShows = tvShowsCollectionStore.loadTrendingWeekly;

  return (
    <MainLayout isLoading={isLoading}>
      <MainSlider />
      <SwitchableCollection
        title="trending movies"
        collections={[
          { items: trendingDailyMovies, title: "Daily", loadItems: loadTrendingDailyMovies },
          { items: trendingWeeklyMovies, title: "Weekly", loadItems: loadTrendingWeeklyMovies },
        ]}
      />
      <SwitchableCollection
        title="trending tv shows"
        collections={[
          { items: trendingDailyShows, title: "Daily", loadItems: loadTrendingDailyTvShows },
          { items: trendingWeeklyShows, title: "Weekly", loadItems: loadTrendingWeeklyTvShows },
        ]}
      />
    </MainLayout>
  )
});
