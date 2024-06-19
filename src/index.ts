import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const port = 3000;
const dbFilePath = './db.json';

app.use(express.json());

// Endpoint to check server status
app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

// Endpoint to submit form data
app.post('/submit', (req: Request, res: Response) => {
    console.log(req.body);
    const { Name, Email, Phone, GithubLink, StopwatchTime } = req.body;

    // Load current submissions from db.json
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    const submissions = dbData.submissions;

    // Add new submission
    submissions.push({ Name, Email, Phone, GithubLink, StopwatchTime });

    // Save updated submissions back to db.json
    fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2));

    res.status(201).json({ message: 'Form submission saved successfully' });
});

// Endpoint to read form submission by index
app.get('/read', (req: Request, res: Response) => {
    const { index } = req.query;

    // Load current submissions from db.json
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    const submissions = dbData.submissions;

    const idx = Number(index);
    if (idx >= 0 && idx < submissions.length) {
        const submission = submissions[idx];
        res.status(200).json(submission);
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

// Delete by email endpoint
app.delete('/delete', (req: Request, res: Response) => {
    const { email } = req.query;

    if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing email parameter' });
    }

    // Load current submissions from db.json
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    let submissions = dbData.submissions;

    const initialLength = submissions.length;
    submissions = submissions.filter((entry: { email: string }) => entry.email !== email);

    if (submissions.length < initialLength) {
        fs.writeFileSync(dbFilePath, JSON.stringify({ submissions }, null, 2));
        res.status(200).json({ message: 'Submission deleted successfully' });
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

// Edit by email endpoint
app.put('/edit', (req: Request, res: Response) => {
    const { email } = req.query;
    const { name, phone, github_link, stopwatch_time } = req.body;

    if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing email parameter' });
    }

    // Load current submissions from db.json
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    const submissions = dbData.submissions;

    const index = submissions.findIndex((entry: { email: string }) => entry.email === email);

    if (index !== -1) {
        submissions[index] = { ...submissions[index], name, phone, github_link, stopwatch_time };
        fs.writeFileSync(dbFilePath, JSON.stringify({ submissions }, null, 2));
        res.status(200).json({ message: 'Submission updated successfully' });
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

// Search by email endpoint
app.get('/search', (req: Request, res: Response) => {
    const { email } = req.query;

    if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing email parameter' });
    }

    // Load current submissions from db.json
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    const submissions = dbData.submissions;

    const submission = submissions.find((entry: { email: string }) => entry.email === email);

    if (submission) {
        res.status(200).json(submission);
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
