# Sharpness-Fullstack-Test

## Setup:

### English

**_Before you run the Puppies program make sure you have an unsplash account and an access key_**

1. Open git bash
2. Navigate to where you want to save the repo
3. In git bash write: **git clone https://github.com/Shinyn/Sharpness-Fullstack-Test.git**
4. Open editor of your choice (I use vscode)
5. Open the terminal and write: **npm install**
6. Add a .env file in the root and add your unsplash access key like this: UNSPLASH_ACCESS_KEY="yourKeyHere"
7. To start a program enter one of the following commands:

- **npx parcel Anagram/index.html**
- **npx parcel Dashboard-Frontend/index.html**
- **npx parcel Puppies/index.html** Obs! Requires account on unsplash

8. Go to http://localhost:1234 in your browser to see the projects
9. To run jest test write: **npx jest**
10. To build a program enter one of the following commands:

- **npx parcel build Anagram/index.html**
- **npx parcel build Dashboard-Frontend/index.html**
- **npx parcel build Puppies/index.html**

### Swedish

**_Innan du kör Puppies programmet se till så du har ett unsplash account och en access key_**

1. Öppna git bash
2. Navigera till valfri plats där du vill spara repot
3. I git bash skriv: **git clone https://github.com/Shinyn/Sharpness-Fullstack-Test.git**
4. Öppna valfri editor (Jag använder vscode)
5. Öppna terminalen och skriv: **npm install**
6. Lägg till en .env fil i projektets root och lägg till din unsplash access key så här: UNSPLASH_ACCESS_KEY="dinNyckelHär"
7. För att starta valfritt program skriv en av följande:

- **npx parcel Anagram/index.html**
- **npx parcel Dashboard-Frontend/index.html**
- **npx parcel Puppies/index.html** Obs! kräver konto på unsplash

8. Gå till http://localhost:1234 i din webbläsare för att se projekten
9. För att köra jest test skriv: **npx jest**
10. För att bygga ett program skriv en av följande:

- **npx parcel build Anagram/index.html**
- **npx parcel build Dashboard-Frontend/index.html**
- **npx parcel build Puppies/index.html**

## Bugs / Buggar

### English

If you try to start a program but a previous one loads instead **delete the .parcel-cache** folder and try again.

### Swedish

Om du försöker starta ett program men får upp ett program som körts tidigare **ta bort .parcel-cache** mappen och försök igen.
