const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobRoutes'); // Import job routes
const articleRoutes = require('./routes/articleRoutes'); // Import article routes
const certificationRoutes = require('./routes/certificationRoutes'); // Import certification routes
const aboutUsRoutes = require('./routes/aboutUsRoutes'); // Import about us routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const db = require('./config/db'); // Import database configuration
const locationsRoutes = require('./routes/locationsRoutes');

const app = express();

// Middlewares
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Test connection to the database (Optional, for debugging)
db.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.log('Error: ' + err));

// Routing
app.use('/api/jobs', jobRoutes); // Routes for job-related operations
app.use('/api/articles', articleRoutes); // Routes for article-related operations
app.use('/api/certifications', certificationRoutes); // Routes for certification-related operations
app.use('/api/about-us', aboutUsRoutes); // Routes for About Us section
app.use('/api/auth', authRoutes); // Routes for authentication
app.use('/api/location', locationsRoutes);

// Home route (for testing)
app.get('/', (req, res) => {
  res.send('Welcome to the Mutiara Berkah Agensi API!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
