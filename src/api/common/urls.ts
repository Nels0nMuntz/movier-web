export const REGISTRATION_URL = "https://www.themoviedb.org/account/signup";
export const RESET_PASSWORD_URL = "https://www.themoviedb.org/account/reset-password";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
export const getW45ImageUrl = (imagePath: string) => `${BASE_IMAGE_URL}w45${imagePath}`;
export const getW92ImageUrl = (imagePath: string) => `${BASE_IMAGE_URL}w92${imagePath}`;
export const getW185ImageUrl = (imagePath: string) => `${BASE_IMAGE_URL}w185${imagePath}`;
export const getW300ImageUrl = (imagePath: string) => `${BASE_IMAGE_URL}w300${imagePath}`;
export const getW500ImageUrl = (imagePath: string) => `${BASE_IMAGE_URL}w500${imagePath}`;
export const getW780ImageUrl = (imagePath: string) => `${BASE_IMAGE_URL}w780${imagePath}`;
export const getW1280ImageUrl = (imagePath: string) => `${BASE_IMAGE_URL}w1280${imagePath}`;

export const getImdbLink = (imdbID: string) => `https://www.imdb.com/title/${imdbID}`;