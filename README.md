# European Material Deprivation Map

An interactive visualization of severe material and social deprivation across Europe using D3.js and SvelteKit.

## Overview

This project visualizes Eurostat data on material and social deprivation across European countries. It shows both historical averages (2015-2023) and the latest data (2023) through interactive choropleth maps.

The visualization helps track progress towards the EU's goal of reducing poverty and social exclusion by 15 million people by 2030.

## Features

- Interactive choropleth maps of Europe using D3.js
- Two visualization modes:
  - Average deprivation rates (2015-2023)
  - Latest deprivation rates (2023)
- Color-coded representation of deprivation levels
- Country-level data display
- Responsive design

## Technology Stack

- [SvelteKit](https://kit.svelte.dev/) - Web application framework
- [D3.js](https://d3js.org/) - Data visualization library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool and development server

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd euro-msd-d3
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Data Source

The data comes from Eurostat's statistics on living conditions in Europe, specifically focusing on material deprivation and economic strain. The measurement includes 13 key items:

### Household Items

- Unexpected expenses
- One week holiday per year
- No bill arrears
- Meat/equivalent every other day
- Adequate home heating
- Car/van access
- Replacing worn-out furniture

### Individual Items

- Internet access
- Replacing worn-out clothes
- Two pairs of shoes
- Weekly personal spending money
- Regular leisure activities
- Monthly social outings

## License

MIT

## Data Sources & References

- [Eurostat - Living Conditions in Europe](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Living_conditions_in_Europe_-_material_deprivation_and_economic_strain#Context)
- [Source Data](https://ec.europa.eu/eurostat/databrowser/view/ilc_mdsd18/default/table?lang=en&category=livcon.ilc.ilc_md.ilc_mdsd)
