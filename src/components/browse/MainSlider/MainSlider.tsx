import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import {faInfo, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { observer } from "mobx-react-lite";

import { PrimaryButton, PrimaryLink, Typography, FAIcon } from "components";
import { Actions, Badge, Ganre, GanreOutlined, Slide, SlideBackdrop, SlideContent, SlideContentWrap, Wrapper } from "./styled";
import { APP_URLS } from "routes/urls";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { SliderNavigation } from "../../common/Slider";
import { useStore } from "store";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { generatePath } from "react-router-dom";


export const MainSlider: React.FC = observer(() => {

  const { moviesCollectionStore, accountStore } = useStore();
  const popularMovies = moviesCollectionStore.lists.popular.data;
  const addToWatchlist = (id: number) => accountStore.addToWatchlist(id, "movie");

  const slides = [] as HTMLElement[];

  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        effect="fade"
        modules={[EffectFade, Navigation]}
        speed={600}
        navigation={{
          nextEl: ".main-slider-nav-next",
          prevEl: ".main-slider-nav-prev",
        }}
        loop
        onSlideChangeTransitionEnd={swiper => {
          slides[swiper.realIndex]?.classList.replace("hide", "show")
        }}
        onActiveIndexChange={() => {
          slides.forEach(slide => slide.classList.remove("show"));
          slides.forEach(slide => slide.classList.add("hide"));
        }}
      >
        <SliderNavigation
          nextButtonClassName="main-slider-nav-next"
          prevButtonClassName="main-slider-nav-prev"
        />
        {popularMovies.map(({ id, backdrop_path, title, overview, release_date, adult, vote_average }) => (
          <SwiperSlide key={id}>
            <Slide>
              <SlideBackdrop>
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt=""
                />
                <SlideContentWrap>
                  <SlideContent ref={(e) => e && slides.push(e)}>
                    <Badge element="div" type="heading_5">New</Badge>
                    <Typography element="h1" type="heading_2">
                      {title}
                    </Typography>
                    <Stack direction="row" gap={2} mb={4} alignItems="center">
                      <Ganre element="span" type="body_1">
                        {release_date.slice(0, 4)}
                      </Ganre>
                      {adult && (
                        <GanreOutlined element="span" type="body_1">
                          18+
                        </GanreOutlined>
                      )}
                      <Ganre element="span" type="body_1">
                        <FAIcon icon={faStar} />
                        <Box ml={0.5} component="span">{vote_average}</Box>
                      </Ganre>
                    </Stack>
                    <Typography element="p" type="body_1">
                      {overview}
                    </Typography>
                    <Actions>
                      <PrimaryLink href={APP_URLS.browse.path} icon={<FAIcon icon={faPlay} />}>Play Now</PrimaryLink>
                      <PrimaryButton icon={<FAIcon icon={faPlus} />} onClick={() => addToWatchlist(id)}>My List</PrimaryButton>
                      <PrimaryLink 
                        href={generatePath(APP_URLS.movieDetails.path, { id })} 
                        icon={<FAIcon icon={faInfo} style={{ position:"relative", top: -2 }}/>}
                      >
                        More
                      </PrimaryLink>
                    </Actions>
                  </SlideContent>
                </SlideContentWrap>
              </SlideBackdrop>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
});
