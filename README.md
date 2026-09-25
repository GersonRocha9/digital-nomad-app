# Nomad

A React Native (Expo) app for digital nomads to discover cities, browse them by travel style, see tourist attractions on a map and keep a list of favorites. Backed by Supabase, built on a clean architecture where the data source is swappable behind repository interfaces.

## Features

- **Authentication** with Supabase Auth: sign up, sign in, sign out, password reset by email, update profile and password. Session is persisted locally and protected routes redirect to sign-in.
- **Home**: city list with debounced search by name and filtering by category.
- **Explore**: cities grouped by category (adventure, beach, culture, gastronomy, nature and more).
- **City details**: cover, info, tourist attractions, an interactive map (`react-native-maps`) in a bottom sheet, and related cities.
- **Favorites**: toggle a city as favorite with optimistic UI and rollback on failure; favorites are listed on the profile.
- Forms validated with React Hook Form + Zod, and user feedback through toast messages.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Expo SDK 53, React Native 0.79 (New Architecture enabled), React 19, TypeScript 5.8 |
| Navigation | Expo Router 5 (file-based, typed routes), React Navigation bottom tabs |
| Server state | TanStack Query v5 |
| Backend | Supabase (Postgres, Auth, Storage) via `@supabase/supabase-js` |
| UI | @shopify/restyle theme, Reanimated 3, Gesture Handler, expo-image, custom IcoMoon icon font, Poppins |
| Forms | React Hook Form, Zod 4 |
| Maps | react-native-maps (Google Maps key on Android) |
| Testing | Jest (jest-expo), React Native Testing Library, `expo-router/testing-library` |
| Tooling | ESLint (eslint-config-expo), Prettier, Reactotron (dev only), EAS Build and EAS Workflows |

## Architecture

The code is split into `domain`, `infra` and `ui` layers under `src/`, with screens in `app/` (Expo Router).

- **Repository pattern with dependency injection.** The domain defines interfaces (`IAuthRepo`, `ICityRepo`, `ICategoryRepo`) aggregated in a `Repositories` type. Implementations are injected through a React context (`RepositoryProvider`). The app uses the Supabase adapters; tests use in-memory adapters with local seed data, so screens run end to end without a backend.
- **Operations as hooks.** Every use case is a hook in `src/domain/<entity>/operations` (`useCityFindAll`, `useCityToggleFavorite`, `useAuthSignIn`, ...). They depend on thin wrappers `useAppQuery` / `useAppMutation`, so screens are not coupled to TanStack Query directly.
- **Adapters for side effects.** Storage (`IStorage`: AsyncStorage in the app, in-memory in tests) and user feedback (`IFeedbackService`: toast, alert and console adapters) follow the same interface + provider approach.
- **Supabase mapping layer.** `supabaseAdapter.ts` converts database rows (typed from the generated `Database` types) into domain models, keeping snake_case and nullable columns out of the UI. Queries read from SQL views (`cities_with_full_info`, `cities_with_categories`, related cities).
- **Database as code.** Table creation, seed data, views and the favorites table live as numbered SQL scripts in `src/infra/repositories/adapters/supabase/sql/`.
- **Optimistic favorites.** `useCityToggleFavorite` flips local state immediately, reverts it on error and invalidates the `city` queries on success.

## Getting started

Prerequisites: Node.js, and Xcode / Android Studio for native builds (the project uses `expo-dev-client`).

```bash
npm install
cp .env.template .env   # then fill in the values
npm start               # Metro bundler
npm run ios             # or: npm run android / npm run web
```

Environment variables (`.env.template`):

| Variable | Purpose |
| --- | --- |
| `EXPO_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `EXPO_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `EXPO_PUBLIC_SUPABASE_STORAGE_URL` | Base URL for city images in Supabase Storage |
| `EXPO_PUBLIC_WEB_URL` | Base URL for the password reset redirect (`/reset-password`) |
| `GOOGLE_MAPS_API_KEY` | Google Maps key for Android |

To set up the database, run the scripts in `src/infra/repositories/adapters/supabase/sql/` in numeric order on your Supabase project.

## Tests

```bash
npm test               # run all tests
npm run test:watch
npm run test:coverage
```

- **Integration tests** (`src/__tests__`) render the full router with in-memory repositories and cover the sign-in/sign-out flow, home search, navigation to city details, error and empty states, and profile update.
- **Unit and component tests** cover the `useAuthSignIn` operation, the sign-up form validation, and UI components such as `Button`, `Text` and `CityCard`.

## CI/CD

EAS Workflows in `.eas/workflows/`:

- **CI** (`ci.yml`): on every pull request, runs `tsc --noEmit` and the test suite.
- **CD** (`cd.yml`): on push to `main`, creates production builds for Android and iOS (`eas.json` has `development`, `preview` and `production` profiles, with remote version auto-increment).

## Project structure

```
app/                      Expo Router screens
  (protected)/(tabs)/     Home, Explore, Profile
  (protected)/            city details, update profile/password
  sign-in, sign-up, reset-password
src/
  domain/                 entities, repository interfaces, operation hooks
  infra/                  Supabase and in-memory repositories, storage, feedback, query wrappers
  ui/                     components, containers, theme, navigation
  test-utils/             renderApp / renderComponent helpers
  utils/                  hooks and helpers
```

## Author

Gerson Rocha: [github.com/GersonRocha9](https://github.com/GersonRocha9)
