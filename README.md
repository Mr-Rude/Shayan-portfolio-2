# Shayan Khan Portfolio (React)

React + Vite version of the portfolio preview. Layout, styling and behaviour match the original HTML site.

## Run it

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

The build uses relative paths, so `dist/` can be uploaded to any static host (Netlify, Vercel, GitHub Pages, cPanel) as is. just checking

## Where to edit content

| What | File |
| --- | --- |
| Project titles, tones, formats, homepage grouping, case-study copy | `src/data/projects.js` |
| Hero software marks and their preview text | `src/data/software.js` |
| Skills, experience rows, contact links | `src/data/site.js` |
| Portrait image | `src/assets/Shayan-cutout.png` |
| Styles (unchanged from the original, same load order) | `src/styles/` |

Contact rows become real links as soon as you give them an `href` in `src/data/site.js`.

## Structure

```
src/
  App.jsx                  route switch (home / portfolio / project)
  hooks/useHashRoute.js    #/home, #/home/about, #/portfolio, #/project/:id
  hooks/useStageScroll.js  desktop wheel + arrow-key stage snapping
  components/
    Header.jsx             name with letter-flip hover, main nav
    Home.jsx               intro, project stages, about/skills, contact
    Hero.jsx               portrait, rings, software marks
    SoftwareLogo.jsx       hover/focus preview, touch-and-hold on phones
    ProjectCard.jsx        card used on home and portfolio grid
    PortfolioPage.jsx      case-study project grid
    ProjectPage.jsx        shared case-study template
    UnrealCaseStudy.jsx    Unreal Engine Hot Wheels commercial case study
    AfterEffectsCaseStudy.jsx  2D animation explainer case study
    PremiereProCaseStudy.jsx  The Story of Fisherman editing case study
    Footer.jsx
```

## Behaviour notes

- Desktop homepage (over 760px wide): each wheel notch or Arrow/Page key moves one full stage.
- Phones: normal scrolling with scroll snap; press and hold a hero software mark to preview it.
- Clicking a link to the page you're already on (for example "Back to top") re-runs the scroll, as in the original.
- Unknown project links fall back to the portfolio grid instead of a blank page.
- Touch-and-hold should still be checked on a physical phone.
