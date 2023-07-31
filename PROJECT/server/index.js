const express = require('express');
const app = express();

// Endpoint to handle timestamp requests
app.get('/api/timestamp/:date_string?', (req, res) => {
  const { date_string } = req.params;

  if (!date_string) {
    // No date_string provided, return current timestamp
    const now = new Date();
    return res.json({ unix: now.getTime(), utc: now.toUTCString() });
  }

  // Check if date_string is a valid integer (Unix timestamp)
  const parsedInt = parseInt(date_string);
  if (!isNaN(parsedInt)) {
    const dateInt = new Date(parsedInt);
    return res.json({ unix: dateInt.getTime(), utc: dateInt.toUTCString() });
  }

  // Try parsing the date_string
  const parsedDate = new Date(date_string);

  if (isNaN(parsedDate)) {
    // Invalid date_string provided
    return res.json({ error: 'Invalid Date' });
  }

  // Date successfully parsed
  return res.json({ unix: parsedDate.getTime(), utc: parsedDate.toUTCString() });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
