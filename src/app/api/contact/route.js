import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const data = await request.json(); // Get form data from the request body

  // Define the correct path to the messages.json file
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'messages.json');

  try {
    // Read existing messages from the file (if it exists)
    let messages = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      messages = JSON.parse(fileData);
    }

    // Add the new message to the array
    messages.push(data);

    // Ensure the directory exists before writing to the file
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Save the updated messages back to the file
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to save message' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
