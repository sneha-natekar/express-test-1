# Device Mockups Gallery

This example demonstrates a modern device mockups gallery built with Express.js and EJS templating.

## Features

- **Device Gallery**: Browse a collection of modern device mockups (phones, tablets, laptops, desktops, wearables)
- **Filtering**: Filter devices by type (mobile, tablet, laptop, desktop, wearable)
- **Detail Views**: View individual device details with specifications
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **REST API**: JSON API endpoint to retrieve device data programmatically
- **Static Assets**: Serves CSS stylesheets and images
- **EJS Templating**: Uses EJS for server-side HTML rendering

## Routes

- `GET /` - Display all devices in a grid layout
- `GET /device/:name` - View details for a specific device
- `GET /type/:type` - Filter devices by type (mobile, tablet, laptop, desktop, wearable)
- `GET /api/devices` - Get all devices as JSON

## Installation

```bash
npm install
```

## Running the Example

```bash
node examples/device-mockups
```

Or from the root of the express repository:

```bash
node examples/device-mockups/index.js
```

The application will start on port 3000. Visit:
- http://localhost:3000 - View the gallery
- http://localhost:3000/type/mobile - View mobile devices only
- http://localhost:3000/device/iphone-14-pro - View specific device
- http://localhost:3000/api/devices - Get devices as JSON

## Technologies Used

- **Express.js**: Web application framework
- **EJS**: Embedded JavaScript templating
- **CSS3**: Modern styling with gradients and animations
- **Node.js Path Module**: For file path handling
- **Express Static Middleware**: For serving static assets

## Project Structure

```
device-mockups/
├── index.js              # Main Express application
├── package.json          # Dependencies (if needed)
├── README.md            # This file
├── public/              # Static assets
│   ├── css/
│   │   └── style.css    # Stylesheet for the gallery
│   └── images/          # Device images (placeholder)
└── views/               # EJS templates
    ├── index.html       # Gallery view
    └── device.html      # Device detail view
```

## Customization

You can easily customize this example by:

1. **Adding More Devices**: Edit the `devices` array in `index.js`
2. **Styling**: Modify `public/css/style.css` to change colors, layouts, etc.
3. **Templates**: Update the EJS templates in the `views/` directory
4. **Adding Images**: Place actual device mockup images in `public/images/`

## Use Cases

This example demonstrates several Express.js concepts:

- Setting up a view engine (EJS)
- Serving static files
- Route parameters and filtering
- Rendering templates with data
- Creating a JSON API
- Responsive web design
- RESTful routing patterns

## License

MIT
