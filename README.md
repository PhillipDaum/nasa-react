# NASA Photo of the Day (in React)

A React-based web application that fetches and displays images and videos from NASA's **Astronomy Picture of the Day (APOD)** API. The app retrieves media for today and the past three days, rendering images and videos appropriately and providing explanations for each.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Information](#api-information)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Date Range**: Automatically displays photos from today and three days prior.
- **Conditional Rendering**: Renders images or videos based on the media type.
- **User-Friendly Interface**: Simple layout with cards displaying each media item's title, content, and explanation.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript (ES6+)**: Core programming language.
- **HTML/CSS**: For structure and styling.
- **NASA APOD API**: Provides data for the Astronomy Picture of the Day.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nasa-photo-of-the-day.git
   cd nasa-react
2. **Install Dependencies**:
   ```bash
   npm install
3. **Run the application**:
   ```bash
    npm run dev
