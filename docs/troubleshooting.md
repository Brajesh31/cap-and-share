# Troubleshooting

## Vite does not start

From the project root, confirm Node.js and npm are installed, then run npm ci and npm run dev. If installation fails, check that package.json and package-lock.json are in sync. Review the terminal output for dependency or port errors.

## The app shows a blank page

Open the browser console and confirm the Vite entry at /src/main.tsx loaded. AuthContext reads and parses localStorage key user on initialization. If that value is malformed, initialization can throw. Clear the demo value in developer tools or run this in the browser console, then reload:

    localStorage.removeItem('user')

This removes only the local demo user profile.

## Food photos or the font are missing

Images are requested from Pexels and Inter from Google Fonts. Check network connectivity, content blockers, and the Network panel. These remote resources are not bundled with the application.

## The browser requests /vite.svg and gets a 404

index.html references /vite.svg, but the repository has no matching asset. Add an approved favicon at that public path or update the reference to a file that exists.

## Refreshing a nested route returns 404

The app uses BrowserRouter. Configure the static host to return index.html for application paths such as /food/1, /profile, and /dashboard. See deployment.md.

## Login or signup appears successful for any values

This is the current mock behavior. AuthContext waits briefly, accepts the submitted values, and writes a demo profile to localStorage. It does not contact an authentication server or validate an account.

## A food post or claim seems to disappear

The forms simulate success but do not save a post or send a claim. FoodListings reads from a fixed array in src/data/mockData.ts. Reopening the page restores the same sample data, with relative expiry times recalculated on module load.

## Listing filters do not change results

Only the search field filters titles and descriptions. Location, distance, availability-time, sort, and Apply Filters controls are displayed but not connected to the filtering logic.

## Footer links go to the not-found page

Routes for feedback, FAQ, terms, privacy, and contact are not defined. The menu download file is also absent. Add the destination and route or remove the link before deployment.
