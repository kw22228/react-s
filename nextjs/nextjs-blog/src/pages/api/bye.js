export default function handler(req, res) {
    console.log('/api/bye');
    res.status(200).json({
        id: 'kjw204',
        text: 'Hello',
    });
}
