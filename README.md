# Building and Testing the Docusaurus Site Locally

Follow the steps below to test the setup site locally, and deploy it to your preferred hosting platform.

## Prerequisites

- **Node.js** (v16 or higher) installed on your machine.
- **npm** (comes with Node.js) installed.

## Steps to Build and Test Locally

### 1. Clone the Repository

Clone the repository to your local machine:

git clone [https://github.com/sarvaniswapnapriya/kasten-blog.git]

cd kasten-blog
### 2. Install Dependencies

Install the necessary dependencies:

### 2. Install Dependencies

Install the necessary dependencies:
npm install
### 3. Start the Development Server

Start the development server with:

npm run start

Open your browser and go to [http://localhost:3000](http://localhost:3000) to preview your site.

### 4. Build the Site for Production

To build the site for production, run:

npm run build

### 5. Deploy the Site

Deploy the contents of the `build` directory to your preferred hosting platform.

## Testing Your Build Locally

It is important to test your build locally before deploying it for production. Docusaurus provides a command for that:

npm run serve

By default, this will load your site at [http://localhost:3000](http://localhost:3000).
