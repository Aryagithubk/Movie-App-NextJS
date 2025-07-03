# Movie App

## Overview
This project is a Movie Search Application built using React, Next.js, and Tailwind CSS. It allows users to search for movies, view details, and rate them. The application fetches movie data from the OMDB API and utilizes Redux for state management.

## Features
- **Search Movies**: Users can search for movies using a search bar.
- **Trending Movies**: The application displays trending movies by default.
- **Movie Details**: Users can click on a movie to view detailed information.
- **Pagination**: The application supports pagination for movie listings.
- **Theme Toggle**: Users can switch between light and dark themes.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Technologies Used
- **React**: For building the user interface.
- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For styling the application.
- **Redux**: For state management.
- **Axios**: For making API requests.

## Project Structure
```
movie_app
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── footer.tsx
│   └── movies
│       ├── page.tsx
│       └── [id]
│           └── page.tsx
├── components
│   ├── MovieCard.tsx
│   ├── MovieDetail.tsx
│   ├── MovieList.tsx
│   ├── Pagination.tsx
│   ├── Providers.tsx
│   ├── SearchBar.tsx
│   ├── StarRating.tsx
│   ├── ThemeToggle.tsx
│   ├── Footer.tsx
│   └── ui
│       ├── card.tsx
│       ├── input.tsx
│       ├── spinner.tsx
│       └── switch.tsx
├── lib
│   └── api.ts
├── redux
│   ├── hooks.ts
│   ├── movieSlice.ts
│   └── store.ts
├── types
│   └── movie.ts
├── utils
│   └── classNames.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd movie_app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env.local` file in the root directory and add your OMDB API key:
   ```
   NEXT_PUBLIC_OMDB_API_KEY=<your_api_key>
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Usage
- Open your browser and go to `http://localhost:3000`.
- Use the search bar to find movies.
- Click on a movie to view its details and rate it.
- Navigate through pages of movies using the pagination controls.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.