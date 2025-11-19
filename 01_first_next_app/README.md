### 0. remove extra

- we can remove all files from public folder
- also favicon.ico from app folder, make sure next time the favicon.ico must be in app folder

### 1. Cannot find module or specificaly .css file

- create `typescript` file and write bellow code in that, so it will not show and error in vscode
- `declare module '*.css'`;
- extra: we can add `globals.d.ts` file name into `tsconfig.json` file's in `include` key's array value

### 2. Route Groups

- (user) // this will be ignored in route
  - page.tsx
  - about
    - page.tsx

### 3. what to show header navigation in home, contect but not in about

- 1st way

  - layout.tsx
  - (user)
    - layout.tsx // out header is used in this group
    - page.tsx
    - contect
      page.tsx
  - about
    - page.tsx

- 2nd way
  - use client
  - and with that we can use usePathname hook to find the route/path
  - if it include's about then do not render it other wise render it

### 4. hydration error

1. in next js layout page `suppressHydrationWarning={true} data-lt-installed="true"` this are not added in html tag but automaticaly added in browser by next js and then it gererate hydration error


    - solution: add this into layout page's html tag
