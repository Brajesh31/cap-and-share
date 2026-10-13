# Database and persistence

## Current storage

The project has no database, backend, schema, migrations, database connection, or backup process.

Food listings are imported from src/data/mockData.ts as a fixed array. The sample expiry and posted timestamps are generated relative to the current time when that module is loaded. Search reads this array in memory. The app does not save newly posted food or claimed servings.

## Browser storage

AuthContext stores a mock user profile under the localStorage key user. It includes a fixed demo ID plus the entered name, email, role, and campus. The password is not stored by the context, but login and signup input is handled entirely in client-side code and is not verified by a service. A visitor can edit or remove localStorage values using browser tools.

The claim form's pickup time and optional contact number remain in component state and are not sent or durably recorded. Profile edit state is local to the page and is not saved to AuthContext. Dashboard and profile impact metrics are hard-coded.

## Data shape

FoodPost in src/types/food.ts contains an ID, title, description, servings, location, expiry timestamp, poster label, image URL, and posted timestamp. This is a TypeScript interface for sample UI data, not a persisted database schema.

## If a backend is introduced

Define ownership, authorization, validation, retention, deletion, backup, recovery, and privacy requirements before storing real user or food pickup data. Use server-enforced authorization for each read and write. Never put database credentials in React source or browser-exposed Vite variables. Document migrations and operational recovery here when they exist.
